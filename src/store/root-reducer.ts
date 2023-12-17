import { combineReducers } from '@reduxjs/toolkit';

import { StoreNameSpace } from '../const';
import { questsSlice } from './quests/quests';
import { questSlice } from './quest/quest';
import { bookingSlice } from './booking/booking';
import { userSlice } from './user/user';
import { reservationSlice } from './reservation/reservation';

export const rootReducer = combineReducers({
  [StoreNameSpace.Quests]: questsSlice.reducer,
  [StoreNameSpace.Quest]: questSlice.reducer,
  [StoreNameSpace.Booking]: bookingSlice.reducer,
  [StoreNameSpace.User]: userSlice.reducer,
  [StoreNameSpace.Reservation]: reservationSlice.reducer,
});
