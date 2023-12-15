import { createSlice } from '@reduxjs/toolkit';

import { TQuest } from '../../types/quest';
import { LoadingStatus, StoreNameSpace } from '../../const';
import { TLoadingStatus } from '../../types/state';
import { fetchQuest } from './quest.action';

type TInitialState = {
  data: TQuest | null;
  isLoading: TLoadingStatus;
};

const initialState: TInitialState = {
  data: null,
  isLoading: LoadingStatus.Idle,
};

export const questSlice = createSlice({
  name: StoreNameSpace.Quest,
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(fetchQuest.pending, (state) => {
        state.isLoading = LoadingStatus.Loading;
      })
      .addCase(fetchQuest.fulfilled, (state, action) => {
        state.data = action.payload;
        state.isLoading = LoadingStatus.Idle;
      });
  },
});
