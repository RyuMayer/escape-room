import { StoreNameSpace } from '../../const';
import { TState } from '../../types/state';

export const selectQuest = (state: TState) => state[StoreNameSpace.Quest].data;

export const selectMinMaxPeople = (state: TState) =>
  state[StoreNameSpace.Quest].data?.peopleMinMax;

export const selectLoadingStatus = (state: TState) =>
  state[StoreNameSpace.Quest].isLoading;
