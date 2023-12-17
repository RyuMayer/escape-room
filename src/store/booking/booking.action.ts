import { createAsyncThunk } from '@reduxjs/toolkit';
import { AxiosInstance } from 'axios';

import { TQuest } from '../../types/quest';
import { APIRoute, AppRoute, StoreNameSpace } from '../../const';
import { TBookingData, TBookingPlace } from '../../types/booking';

type TExtra = {
  extra: AxiosInstance;
};

export const fetchBookingPlace = createAsyncThunk<
  TBookingPlace[],
  TQuest['id'],
  TExtra
>(`${StoreNameSpace.Booking}/fetchBookingPlace`, async (id, { extra: api }) => {
  const { data } = await api.get<TBookingPlace[]>(
    `${APIRoute.Quests}/${id}/booking`,
  );
  return data;
});

export const fetchPostBookingData = createAsyncThunk<
  void,
  {
    bookingData: TBookingData;
    questId: string;
  },
  TExtra
>(
  `${StoreNameSpace.Booking}/fetchPostBookingData`,
  async ({ bookingData, questId }, { extra: api }) => {
    await api.post(
      `${APIRoute.Quests}/${questId}${AppRoute.Booking}`,
      bookingData,
    );
  },
);
