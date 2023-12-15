import { combineReducers } from '@reduxjs/toolkit';
import { StoreNameSpace } from '../const';
import { questsSlice } from './quests/quests';
import { questSlice } from './quest/quest';

export const rootReducer = combineReducers({
  [StoreNameSpace.Quests]: questsSlice.reducer,
  [StoreNameSpace.Quest]: questSlice.reducer,
});
