import { createSlice } from '@reduxjs/toolkit';

import { LoadingStatus, StoreNameSpace } from '../../const';
import { TLoadingStatus } from '../../types/state';
import { TReservation } from '../../types/reservation';
import {
  fetchRemoveReservation,
  fetchReservations,
} from './reservation.action';

type TInitialState = {
  data: TReservation[];
  isLoading: TLoadingStatus;
  isRemoveLoading: TLoadingStatus;
};

const initialState: TInitialState = {
  data: [],
  isLoading: LoadingStatus.Idle,
  isRemoveLoading: LoadingStatus.Idle,
};

export const reservationSlice = createSlice({
  name: StoreNameSpace.Reservation,
  initialState,
  reducers: {
    dropReservationData(state) {
      state.data = [];
    },
  },
  extraReducers(builder) {
    builder
      .addCase(fetchReservations.pending, (state) => {
        state.isLoading = LoadingStatus.Loading;
      })
      .addCase(fetchReservations.fulfilled, (state, action) => {
        state.data = action.payload;
        state.isLoading = LoadingStatus.Idle;
      })
      .addCase(fetchRemoveReservation.pending, (state) => {
        state.isRemoveLoading = LoadingStatus.Loading;
      })
      .addCase(fetchRemoveReservation.fulfilled, (state) => {
        state.isRemoveLoading = LoadingStatus.Idle;
      });
  },
});

export const { dropReservationData } = reservationSlice.actions;
