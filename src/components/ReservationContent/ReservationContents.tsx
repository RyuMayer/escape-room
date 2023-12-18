import { useEffect, useState } from 'react';

import { useAppDispatch } from '../../hooks/useAppDispatch';
import {
  fetchRemoveReservation,
  fetchReservations,
} from '../../store/reservation/reservation.action';
import { dropReservationData } from '../../store/reservation/reservation';
import { useAppSelector } from '../../hooks/useAppSelector';
import {
  selectLoadingStatus,
  selectReservationPlaces,
} from '../../store/reservation/reservation.selector';
import QuestCard from '../../components/QuestCard/QuestCard';
import { QuestSlotLocalized } from '../../const';
import { TReservation } from '../../types/reservation';
import Loading from '../Loading/Loading';

function ReservationContents() {
  const dispatch = useAppDispatch();

  const reservationPlaces = useAppSelector(selectReservationPlaces);
  const isLoading = useAppSelector(selectLoadingStatus);

  const [isDataLoaded, setIsDataLoaded] = useState(false);

  useEffect(() => {
    dispatch(fetchReservations())
      .unwrap()
      .then(() => setIsDataLoaded(true));

    return () => {
      dispatch(dropReservationData());
    };
  }, [dispatch]);

  const handleBtnClick = (id: TReservation['id']) => {
    dispatch(fetchRemoveReservation(id))
      .unwrap()
      .then(() => {
        setIsDataLoaded(false);
        dispatch(dropReservationData());
        dispatch(fetchReservations());
      })
      .then(() => setIsDataLoaded(true));
  };

  return (
    <Loading loadingStatus={isLoading} isDataLoaded={isDataLoaded}>
      {reservationPlaces.length === 0 ? (
        <h1>Нет забронированных квестов</h1>
      ) : (
        <div className="cards-grid">
          {reservationPlaces.map((place) => {
            const date = QuestSlotLocalized[place.date];
            const description = `[${date}, ${place.time}. ${place.location.address}]`;

            return (
              <QuestCard
                key={place.id}
                questData={place.quest}
                reservationData={{
                  id: place.id,
                  description,
                  peopleCount: place.peopleCount,
                  onBtnClick: handleBtnClick,
                }}
              />
            );
          })}
        </div>
      )}
    </Loading>
  );
}

export default ReservationContents;
