import { FieldErrors, UseFormRegister } from 'react-hook-form';

import { TFormInputs } from '../BookingForm/BookingForm';
import { useAppSelector } from '../../hooks/useAppSelector';
import { selectMinMaxPeople } from '../../store/quest/quest.selector';

type TBookingFormInfoProps = {
  register: UseFormRegister<TFormInputs>;
  errors: FieldErrors<TFormInputs>;
};

function BookingFormInfo({ register, errors }: TBookingFormInfoProps) {
  const [minPeople, maxPeople] = useAppSelector(selectMinMaxPeople) as [
    number,
    number,
  ];

  return (
    <>
      <div className="custom-input booking-form__input">
        <label className="custom-input__label" htmlFor="name">
          Ваше имя
        </label>
        <input
          type="text"
          id="name"
          placeholder="Имя"
          {...register('contactPerson', {
            required: 'Поле обязательно к заполнению',
            minLength: {
              value: 1,
              message: 'Минимум 1 символ',
            },
            maxLength: {
              value: 15,
              message: 'Максимум 15 символов',
            },
          })}
        />
        {errors.contactPerson && (
          <p style={{ color: 'red' }}>
            {errors.contactPerson.message || 'Ошибка'}
          </p>
        )}
      </div>
      <div className="custom-input booking-form__input">
        <label className="custom-input__label" htmlFor="tel">
          Контактный телефон
        </label>
        <input
          type="tel"
          id="tel"
          placeholder="Телефон"
          {...register('phone', {
            required: 'Поле обязательно к заполнению',
            pattern: {
              value: /^\+7\s?\([0-9]{3}\)\s?[0-9]{3}-[0-9]{2}-[0-9]{2}$/,
              message: 'Формат телефона - +7 (000) 000-00-00',
            },
          })}
        />
        {errors.phone && (
          <p style={{ color: 'red' }}>{errors.phone.message || 'Ошибка'}</p>
        )}
      </div>
      <div className="custom-input booking-form__input">
        <label className="custom-input__label" htmlFor="person">
          Количество участников
        </label>
        <input
          type="number"
          id="person"
          placeholder="Количество участников"
          {...register('peopleCount', {
            required: 'Поле обязательно к заполнению',
            validate: (value) =>
              (value >= minPeople && value <= maxPeople) ||
              `От ${minPeople} до ${maxPeople} участников`,
            valueAsNumber: true,
          })}
        />
        {errors.peopleCount && (
          <p style={{ color: 'red' }}>
            {errors.peopleCount.message || 'Ошибка'}
          </p>
        )}
      </div>
      <label className="custom-checkbox booking-form__checkbox booking-form__checkbox--children">
        <input type="checkbox" id="children" {...register('withChildren')} />
        <span className="custom-checkbox__icon">
          <svg width={20} height={17} aria-hidden="true">
            <use xlinkHref="#icon-tick" />
          </svg>
        </span>
        <span className="custom-checkbox__label">Со мной будут дети</span>
      </label>
    </>
  );
}

export default BookingFormInfo;
