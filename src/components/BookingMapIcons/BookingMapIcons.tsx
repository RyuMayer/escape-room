import { Marker } from 'react-leaflet';

import { createIcon } from '../../utils/map';
import { MapIconConfig } from '../../const';
import { useAppDispatch } from '../../hooks/useAppDispatch';
import { changeCurrentPlace } from '../../store/booking/booking';
import { TBooking } from '../../types/booking';

type TBookingMapIconsProps = {
  coords: {
    id: string;
    coords: [number, number];
  }[];
  currentPlaceId: string;
};

function BookingMapIcons({ coords, currentPlaceId }: TBookingMapIconsProps) {
  const dispatch = useAppDispatch();

  const handleMarkerClick = (id: TBooking['id']) => {
    dispatch(changeCurrentPlace({ id }));
  };

  return (
    <>
      {coords.map((coord) => {
        const marker =
          coord.id === currentPlaceId
            ? createIcon(MapIconConfig.Active)
            : createIcon(MapIconConfig.Default);

        return (
          <Marker
            key={coord.id}
            icon={marker}
            position={[coord.coords[0], coord.coords[1]]}
            eventHandlers={{
              click: () => handleMarkerClick(coord.id),
            }}
          />
        );
      })}
    </>
  );
}

export default BookingMapIcons;
