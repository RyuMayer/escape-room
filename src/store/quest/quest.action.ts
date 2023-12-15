import { createAsyncThunk } from '@reduxjs/toolkit';
import { AxiosInstance } from 'axios';

import { TQuest } from '../../types/quest';
import { APIRoute, StoreNameSpace } from '../../const';

type TExtra = {
  extra: AxiosInstance;
};

export const fetchQuest = createAsyncThunk<TQuest, TQuest['id'], TExtra>(
  `${StoreNameSpace.Quest}/fetchQuest`,
  async (id, { extra: api }) => {
    const { data } = await api.get<TQuest>(`${APIRoute.Quests}/${id}`);
    return data;
  },
);
