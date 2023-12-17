import { createAsyncThunk } from '@reduxjs/toolkit';
import { AxiosInstance } from 'axios';

import { APIRoute, StoreNameSpace } from '../../const';
import { TUserData } from '../../types/user';
import { TAuthData } from '../../types/auth';

type TExtra = {
  extra: AxiosInstance;
};

export const fetchCheckAuth = createAsyncThunk<TUserData, undefined, TExtra>(
  `${StoreNameSpace.User}/fetchCheckAuth`,
  async (_arg, { extra: api }) => {
    const { data } = await api.get<TUserData>(APIRoute.Login);
    return data;
  },
);

export const fetchPostLoginAction = createAsyncThunk<
  TUserData,
  TAuthData,
  TExtra
>(
  `${StoreNameSpace.User}/fetchPostLoginAction`,
  async ({ email, password }, { extra: api }) => {
    const { data } = await api.post<TUserData>(APIRoute.Login, {
      email,
      password,
    });
    return data;
  },
);

export const fetchLogoutAuth = createAsyncThunk<void, undefined, TExtra>(
  `${StoreNameSpace.User}/fetchLogoutAuth`,
  async (_arg, { extra: api }) => {
    await api.delete(APIRoute.Logout);
  },
);
