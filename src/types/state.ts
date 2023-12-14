import { LoadingStatus } from '../const';
import { store } from '../store/store';

export type TLoadingStatus = (typeof LoadingStatus)[keyof typeof LoadingStatus];

export type TAppDispatch = typeof store.dispatch;
