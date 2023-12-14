import { createAsyncThunk } from '@reduxjs/toolkit';
import { AxiosInstance } from 'axios';

import { TQuestPreview } from '../../types/quest';
import { APIRoute, StoreNameSpace } from '../../const';

type TExtra = {
  extra: AxiosInstance;
};

export const fetchQuests = createAsyncThunk<TQuestPreview[], undefined, TExtra>(
  `${StoreNameSpace.Quests}/fetchQuests`,
  async (_arg, { extra: api }) => {
    const { data } = await api.get<TQuestPreview[]>(APIRoute.Quests);
    return data;
  },
);
