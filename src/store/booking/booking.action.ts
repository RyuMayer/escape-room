import { createAsyncThunk } from '@reduxjs/toolkit';
import { AxiosInstance } from 'axios';

import { TQuest } from '../../types/quest';
import { APIRoute, StoreNameSpace } from '../../const';
import { TBooking } from '../../types/booking';

type TExtra = {
  extra: AxiosInstance;
};

export const fetchQuestBooking = createAsyncThunk<
  TBooking[],
  TQuest['id'],
  TExtra
>(`${StoreNameSpace.Booking}/fetchQuestBooking`, async (id, { extra: api }) => {
  const { data } = await api.get<TBooking[]>(
    `${APIRoute.Quests}/${id}/booking`,
  );
  return data;
});
