import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { LoadingStatus, StoreNameSpace } from '../../const';
import { TLoadingStatus } from '../../types/state';
import { fetchQuestBooking } from './booking.action';
import { TBooking } from '../../types/booking';

type TInitialState = {
  data: TBooking[];
  currentPlace: TBooking | null;
  isLoading: TLoadingStatus;
};

const initialState: TInitialState = {
  data: [],
  currentPlace: null,
  isLoading: LoadingStatus.Idle,
};

export const bookingSlice = createSlice({
  name: StoreNameSpace.Booking,
  initialState,
  reducers: {
    changeCurrentPlace(state, action: PayloadAction<{ id: TBooking['id'] }>) {
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
      .addCase(fetchQuestBooking.pending, (state) => {
        state.isLoading = LoadingStatus.Loading;
      })
      .addCase(fetchQuestBooking.fulfilled, (state, action) => {
        state.data = action.payload;
        state.currentPlace = action.payload[0];
        state.isLoading = LoadingStatus.Idle;
      });
  },
});

export const { dropBookingData, changeCurrentPlace } = bookingSlice.actions;
