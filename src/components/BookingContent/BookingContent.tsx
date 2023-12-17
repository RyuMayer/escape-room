import { useParams } from 'react-router-dom';
import { useEffect } from 'react';

import { useAppDispatch } from '../../hooks/useAppDispatch';
import { fetchQuest } from '../../store/quest/quest.action';
import { dropQuestData } from '../../store/quest/quest';
import { fetchBookingPlace } from '../../store/booking/booking.action';
import { dropBookingData } from '../../store/booking/booking';
import BookingMap from '../../components/BookingMap/BookingMap';
import { useAppSelector } from '../../hooks/useAppSelector';
import { selectCurrentPlace } from '../../store/booking/booking.selector';
import { selectQuest } from '../../store/quest/quest.selector';
import BookingForm from '../../components/BookingForm/BookingForm';

function BookingContent() {
  const dispatch = useAppDispatch();

  const currentQuest = useAppSelector(selectQuest);
  const currentPlace = useAppSelector(selectCurrentPlace);

  const { questId } = useParams();

  useEffect(() => {
    if (questId) {
      dispatch(fetchQuest(questId))
        .unwrap()
        .then(() => {
          dispatch(fetchBookingPlace(questId));
        });
    }

    return () => {
      dispatch(dropQuestData());
      dispatch(dropBookingData());
    };
  }, [dispatch, questId]);

  if (currentPlace === null && currentPlace === null) {
    return <h1>123</h1>;
  }

  return (
    <div className="container container--size-s">
      <div className="page-content__title-wrapper">
        <h1 className="subtitle subtitle--size-l page-content__subtitle">
          Бронирование квеста
        </h1>
        <p className="title title--size-m title--uppercase page-content__title">
          {currentQuest?.title}
        </p>
      </div>
      <BookingMap currentPlace={currentPlace} />
      <BookingForm currentPlace={currentPlace} questId={currentQuest?.id} />
    </div>
  );
}

export default BookingContent;
