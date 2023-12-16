import { combineReducers } from '@reduxjs/toolkit';

import { StoreNameSpace } from '../const';
import { questsSlice } from './quests/quests';
import { questSlice } from './quest/quest';
import { bookingSlice } from './booking/booking';

export const rootReducer = combineReducers({
  [StoreNameSpace.Quests]: questsSlice.reducer,
  [StoreNameSpace.Quest]: questSlice.reducer,
  [StoreNameSpace.Booking]: bookingSlice.reducer,
});
