import { createSelector } from '@reduxjs/toolkit';
import { LoadingStatus, StoreNameSpace } from '../../const';
import { TState } from '../../types/state';

export const selectLoadingStatus = (state: TState) =>
  state[StoreNameSpace.Booking].loadingStatus;

export const selectIsFormPostLoading = (state: TState) =>
  state[StoreNameSpace.Booking].formPostLoadingStatus === LoadingStatus.Loading;

export const selectCurrentPlace = (state: TState) =>
  state[StoreNameSpace.Booking].currentPlace;

export const selectBookingCoords = createSelector(
  [(state: TState) => state[StoreNameSpace.Booking].data],
  (data) =>
    data.map((item) => ({
      id: item.id,
      coords: item.location.coords,
    })),
);
