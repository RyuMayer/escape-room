import { StoreNameSpace } from '../../const';
import { TState } from '../../types/state';

export const selectQuest = (state: TState) => state[StoreNameSpace.Quest].data;
