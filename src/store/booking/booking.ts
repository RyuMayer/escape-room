import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { LoadingStatus, StoreNameSpace } from '../../const';
import { TLoadingStatus } from '../../types/state';
import { fetchBookingPlace, fetchPostBookingData } from './booking.action';
import { TBookingPlace } from '../../types/booking';

type TInitialState = {
  data: TBookingPlace[];
  currentPlace: TBookingPlace | null;
  loadingStatus: TLoadingStatus;
  formPostLoadingStatus: TLoadingStatus;
};

const initialState: TInitialState = {
  data: [],
  currentPlace: null,
  loadingStatus: LoadingStatus.Idle,
  formPostLoadingStatus: LoadingStatus.Idle,
};

export const bookingSlice = createSlice({
  name: StoreNameSpace.Booking,
  initialState,
  reducers: {
    changeCurrentPlace(
      state,
      action: PayloadAction<{ id: TBookingPlace['id'] }>,
    ) {
      const { id } = action.payload;
      state.currentPlace = state.data.find((place) => place.id === id) ?? null;
    },
    dropBookingData(state) {
      state.data = [];
      state.currentPlace = null;
    },
  },
  extraReducers(builder) {
    builder
      .addCase(fetchBookingPlace.pending, (state) => {
        state.loadingStatus = LoadingStatus.Loading;
      })
      .addCase(fetchBookingPlace.fulfilled, (state, action) => {
        state.data = action.payload;
        state.currentPlace = action.payload[0];
        state.loadingStatus = LoadingStatus.Idle;
      })
      .addCase(fetchPostBookingData.pending, (state) => {
        state.formPostLoadingStatus = LoadingStatus.Loading;
      })
      .addCase(fetchPostBookingData.fulfilled, (state) => {
        state.formPostLoadingStatus = LoadingStatus.Idle;
      })
      .addCase(fetchPostBookingData.rejected, (state) => {
        state.formPostLoadingStatus = LoadingStatus.Rejected;
      });
  },
});

export const { dropBookingData, changeCurrentPlace } = bookingSlice.actions;
