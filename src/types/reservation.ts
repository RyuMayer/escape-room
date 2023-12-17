import { TBookingData, TBookingLocation } from './booking';
import { TQuestPreview } from './quest';

export type TReservation = {
  id: string;
  location: TBookingLocation;
  quest: TQuestPreview;
} & TBookingData;
