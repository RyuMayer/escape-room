import { QuestSlot } from '../const';

export type TBookingDate = (typeof QuestSlot)[keyof typeof QuestSlot];

export type TBookingTime = {
  time: string;
  isAvailable: boolean;
};

export type TBookingLocation = {
  address: string;
  coords: [number, number];
};

export type TBookingPlace = {
  id: string;
  location: TBookingLocation;
  slots: {
    today: TBookingTime[];
    tomorrow: TBookingTime[];
  };
};

export type TBookingData = {
  date: TBookingDate;
  time: string;
  contactPerson: string;
  phone: string;
  withChildren: boolean;
  peopleCount: number;
  placeId: string;
};
