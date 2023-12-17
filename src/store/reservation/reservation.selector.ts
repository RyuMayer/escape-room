import { StoreNameSpace } from '../../const';

import { TState } from '../../types/state';

export const selectReservationPlaces = (state: TState) =>
  state[StoreNameSpace.Reservation].data;

export const selectLoadingStatus = (state: TState) =>
  state[StoreNameSpace.Reservation].isLoading;
