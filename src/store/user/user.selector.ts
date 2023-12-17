import { StoreNameSpace } from '../../const';

import { TState } from '../../types/state';

export const selectAuthStatus = (state: TState) =>
  state[StoreNameSpace.User].authorizationStatus;
