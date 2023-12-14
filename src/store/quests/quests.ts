import { createSlice } from '@reduxjs/toolkit';

import { TQuestPreview } from '../../types/quest';
import { LoadingStatus, StoreNameSpace } from '../../const';
import { TLoadingStatus } from '../../types/state';
import { fetchQuests } from './quests.action';

type TInitialState = {
  data: TQuestPreview[];
  isLoading: TLoadingStatus;
};

const initialState: TInitialState = {
  data: [],
  isLoading: LoadingStatus.Idle,
};

export const questsSlice = createSlice({
  name: StoreNameSpace.Quests,
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(fetchQuests.pending, (state) => {
        state.isLoading = LoadingStatus.Loading;
      })
      .addCase(fetchQuests.fulfilled, (state, action) => {
        state.data = action.payload;
        state.isLoading = LoadingStatus.Idle;
      });
  },
});
