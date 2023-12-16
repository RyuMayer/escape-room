import { UseFormRegister } from 'react-hook-form';
import { QuestSlotLocalized } from '../../const';
import { TBookingTime } from '../../types/booking';
import { TFormInputs } from '../BookingForm/BookingForm';

type TBookingFormDateProps<T> = {
  date: T;
  times: TBookingTime[];
  register: UseFormRegister<TFormInputs>;
};

function BookingFormDate<T extends keyof typeof QuestSlotLocalized>({
  date,
  times,
  register,
}: TBookingFormDateProps<T>) {
  return (
    <fieldset className="booking-form__date-section">
      <legend className="booking-form__date-title">
        {QuestSlotLocalized[date]}
      </legend>
      <div className="booking-form__date-inner-wrapper">
        {times.map(({ time, isAvailable }) => {
          return (
            <label key={time} className="custom-radio booking-form__date">
              <input
                type="radio"
                value={`${time}-${date}`}
                disabled={!isAvailable}
                {...register('date', {
                  required: 'Время обязательно к заполнению',
                })}
              />
              <span className="custom-radio__label">{time}</span>
            </label>
          );
        })}
      </div>
    </fieldset>
  );
}

export default BookingFormDate;
