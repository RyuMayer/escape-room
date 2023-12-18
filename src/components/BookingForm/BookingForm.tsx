import { useForm } from 'react-hook-form';
import type { SubmitHandler } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';

import { AppRoute, QuestSlot, QuestSlotLocalized } from '../../const';
import { TBookingDate, TBookingPlace } from '../../types/booking';
import BookingFormDate from '../BookingFormDate/BookingFormDate';
import BookingFormInfo from '../BookingFormInfo/BookingFormInfo';
import { useEffect } from 'react';
import { useAppDispatch } from '../../hooks/useAppDispatch';
import { fetchPostBookingData } from '../../store/booking/booking.action';
import { useAppSelector } from '../../hooks/useAppSelector';
import { selectIsFormPostLoading } from '../../store/booking/booking.selector';
import { toast } from 'react-toastify';

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
  orderAgree?: string;
};

function BookingForm({ currentPlace, questId }: TBookingFormProps) {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const isFormPostLoading = useAppSelector(selectIsFormPostLoading);

  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
    reset,
  } = useForm<TFormInputs>({
    mode: 'onBlur',
  });

  const { slots } = currentPlace;

  useEffect(() => {
    reset();
  }, [currentPlace, reset]);

  const handleFormSubmit: SubmitHandler<TFormInputs> = (formData) => {
    const [time, date] = formData.date.split('-') as [string, TBookingDate];

    const bookingData = {
      ...formData,
      time,
      date,
      placeId: currentPlace.id,
    };

    delete bookingData.orderAgree;

    dispatch(fetchPostBookingData({ bookingData, questId }))
      .unwrap()
      .then(() => {
        navigate(AppRoute.Reservation);
        toast.success('Данные успешно отправлены!');
      })
      .catch(() => {
        toast.error('Ошибка при отпрвке данных! Попробуйте позже', {
          theme: 'dark',
        });
      });
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
        disabled={!isValid || isFormPostLoading}
      >
        Забронировать
      </button>
      <label className="custom-checkbox booking-form__checkbox booking-form__checkbox--agreement">
        <input
          type="checkbox"
          id="id-order-agreement"
          {...register('orderAgree', { required: true })}
        />
        <span className="custom-checkbox__icon">
          <svg width={20} height={17} aria-hidden="true">
            <use xlinkHref="#icon-tick" />
          </svg>
        </span>
        <span className="custom-checkbox__label">
          Я согласен с
          <a className="link link--active-silver link--underlined" href="#">
            &nbsp;правилами обработки персональных данных
          </a>
          &nbsp;и пользовательским соглашением
        </span>
      </label>
    </form>
  );
}

export default BookingForm;
