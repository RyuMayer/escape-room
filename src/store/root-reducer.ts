import { combineReducers } from '@reduxjs/toolkit';
import { StoreNameSpace } from '../const';
import { questsSlice } from './quests/quests';

export const rootReducer = combineReducers({
  [StoreNameSpace.Quests]: questsSlice.reducer,
});
