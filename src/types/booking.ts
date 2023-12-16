export type TBookingTime = {
  time: string;
  isAvailable: boolean;
};

export type TBooking = {
  id: string;
  location: {
    address: string;
    coords: [number, number];
  };
  slots: {
    today: TBookingTime[];
    tomorrow: TBookingTime[];
  };
};
