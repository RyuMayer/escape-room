import { StoreNameSpace } from '../../const';
import { TState } from '../../types/state';

export const selectQuests = (state: TState) =>
  state[StoreNameSpace.Quests].data;

export const selectLoadingStatus = (state: TState) =>
  state[StoreNameSpace.Quests].isLoading;
