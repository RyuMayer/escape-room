import { createAsyncThunk } from '@reduxjs/toolkit';
import { AxiosInstance } from 'axios';

import { APIRoute, StoreNameSpace } from '../../const';
import { TReservation } from '../../types/reservation';

type TExtra = {
  extra: AxiosInstance;
};

export const fetchReservations = createAsyncThunk<
  TReservation[],
  undefined,
  TExtra
>(
  `${StoreNameSpace.Reservation}/fetchReservations`,
  async (_arg, { extra: api }) => {
    const { data } = await api.get<TReservation[]>(APIRoute.Reservation);
    return data;
  },
);

export const fetchRemoveReservation = createAsyncThunk<
  void,
  TReservation['id'],
  TExtra
>(
  `${StoreNameSpace.Reservation}/fetchRemoveReservation`,
  async (id, { extra: api }) => {
    await api.delete(`${APIRoute.Reservation}/${id}`);
  },
);
