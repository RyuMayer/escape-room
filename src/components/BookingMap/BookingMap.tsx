import { MapContainer, TileLayer } from 'react-leaflet';
import { LatLngBounds } from 'leaflet';
import { useMemo } from 'react';

import BookingMapIcons from '../BookingMapIcons/BookingMapIcons';
import { useAppSelector } from '../../hooks/useAppSelector';
import { selectBookingCoords } from '../../store/booking/booking.selector';
import { TBookingPlace } from '../../types/booking';

type TBookingMapProps = {
  currentPlace: TBookingPlace;
};

function BookingMap({ currentPlace }: TBookingMapProps) {
  const {
    id,
    location: { address },
  } = currentPlace;

  const bookingCoords = useAppSelector(selectBookingCoords);
  const boundCoords = useMemo(
    () =>
      bookingCoords.map<[number, number]>((item) => [
        item.coords[0],
        item.coords[1],
      ]),
    [bookingCoords],
  );

  return (
    <div className="page-content__item">
      <div className="booking-map">
        <div className="map">
          <MapContainer
            className="map__container"
            bounds={new LatLngBounds(boundCoords)}
          >
            <TileLayer
              attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
              url="https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png"
            />
            <BookingMapIcons coords={bookingCoords} currentPlaceId={id} />
          </MapContainer>
        </div>
        <p className="booking-map__address">{address}</p>
      </div>
    </div>
  );
}

export default BookingMap;
