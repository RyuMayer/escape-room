import { useForm } from 'react-hook-form';
import type { SubmitHandler } from 'react-hook-form';

import { QuestSlot, QuestSlotLocalized } from '../../const';
import { TBookingPlace } from '../../types/booking';
import BookingFormDate from '../BookingFormDate/BookingFormDate';
import BookingFormInfo from '../BookingFormInfo/BookingFormInfo';
import { useEffect } from 'react';
import { useAppDispatch } from '../../hooks/useAppDispatch';
import { fetchPostBookingData } from '../../store/booking/booking.action';

type TBookingFormProps = {
  currentPlace: TBookingPlace;
  questId: string;
};

export type TFormInputs = {
  date: string;
  time: string;
  contactPerson: string;
  phone: string;
  withChildren: boolean;
  peopleCount: number;
  placeId: string;
};

function BookingForm({ currentPlace, questId }: TBookingFormProps) {
  const dispatch = useAppDispatch();

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<TFormInputs>();

  const { slots } = currentPlace;

  useEffect(() => {
    reset();
  }, [currentPlace, reset]);

  const handleFormSubmit: SubmitHandler<TFormInputs> = (formData) => {
    const [time, date] = formData.date.split('-');

    const bookingData = {
      ...formData,
      time,
      date,
      placeId: currentPlace.id,
    };

    dispatch(fetchPostBookingData({ bookingData, questId }));
  };

  return (
    <form
      onSubmit={(e) => {
        handleSubmit(handleFormSubmit)(e);
      }}
      className="booking-form"
      action="https://echo.htmlacademy.ru/"
      method="post"
    >
      <fieldset className="booking-form__section">
        <legend className="visually-hidden">Выбор даты и времени</legend>
        <BookingFormDate<keyof typeof QuestSlotLocalized>
          date={QuestSlot.Today}
          times={slots[QuestSlot.Today]}
          register={register}
        />
        <BookingFormDate<keyof typeof QuestSlotLocalized>
          date={QuestSlot.Tomorrow}
          times={slots[QuestSlot.Tomorrow]}
          register={register}
        />
        {errors.date && (
          <p style={{ color: 'red' }}>{errors.date.message || 'Ошибка'}</p>
        )}
      </fieldset>
      <fieldset className="booking-form__section">
        <legend className="visually-hidden">Контактная информация</legend>
        <BookingFormInfo register={register} errors={errors} />
      </fieldset>
      <button
        className="btn btn--accent btn--cta booking-form__submit"
        type="submit"
      >
        Забронировать
      </button>
      <label className="custom-checkbox booking-form__checkbox booking-form__checkbox--agreement">
        <input type="checkbox" id="id-order-agreement" name="user-agreement" />
        <span className="custom-checkbox__icon">
          <svg width={20} height={17} aria-hidden="true">
            <use xlinkHref="#icon-tick" />
          </svg>
        </span>
        <span className="custom-checkbox__label">
          Я&nbsp;согласен с
          <a className="link link--active-silver link--underlined" href="#">
            правилами обработки персональных данных
          </a>
          &nbsp;и пользовательским соглашением
        </span>
      </label>
    </form>
  );
}

export default BookingForm;
