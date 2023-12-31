import { SubmitHandler, useForm } from 'react-hook-form';

import { useAppDispatch } from '../../hooks/useAppDispatch';
import { fetchPostLoginAction } from '../../store/user/user.action';

export type TLoginFormInputs = {
  email: string;
  password: string;
  agree?: string;
};

function Login() {
  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm<TLoginFormInputs>({ mode: 'onBlur' });

  const dispatch = useAppDispatch();

  const handleFormSubmit: SubmitHandler<TLoginFormInputs> = (formData) => {
    delete formData.agree;

    dispatch(fetchPostLoginAction(formData));
  };

  return (
    <main className="decorated-page login">
      <div className="decorated-page__decor" aria-hidden="true">
        <picture>
          <source
            type="image/webp"
            srcSet="img/content/maniac/maniac-size-m.webp, img/content/maniac/maniac-size-m@2x.webp 2x"
          />
          <img
            src="img/content/maniac/maniac-size-m.jpg"
            srcSet="img/content/maniac/maniac-size-m@2x.jpg 2x"
            width={1366}
            height={768}
            alt=""
          />
        </picture>
      </div>
      <div className="container container--size-l">
        <div className="login__form">
          <form
            className="login-form"
            action="https://echo.htmlacademy.ru/"
            method="post"
            onSubmit={(e) => {
              handleSubmit(handleFormSubmit)(e);
            }}
          >
            <div className="login-form__inner-wrapper">
              <h1 className="title title--size-s login-form__title">Вход</h1>
              <div className="login-form__inputs">
                <div className="custom-input login-form__input">
                  <label className="custom-input__label" htmlFor="email">
                    E–mail
                  </label>
                  <input
                    type="text"
                    id="email"
                    placeholder="Адрес электронной почты"
                    {...register('email', {
                      required: 'Поле обязательно к заполнению',
                      pattern: {
                        value: /[a-z0-9]+@[a-z]+\.[a-z]{2,3}/,
                        message: 'Некорректный email адресс',
                      },
                    })}
                  />
                  {errors.email && (
                    <p style={{ color: 'red' }}>
                      {errors.email.message || 'Ошибка'}
                    </p>
                  )}
                </div>
                <div className="custom-input login-form__input">
                  <label className="custom-input__label" htmlFor="password">
                    Пароль
                  </label>
                  <input
                    type="password"
                    id="password"
                    placeholder="Пароль"
                    {...register('password', {
                      required: 'Поле обязательно к заполнению',
                      minLength: {
                        value: 3,
                        message: 'Минимум 3 символа',
                      },
                      maxLength: {
                        value: 15,
                        message: 'Максимум 15 символов',
                      },
                      pattern: {
                        value: /(?=.*\d)(?=.*[a-zA-Z])/,
                        message:
                          'В пароле должны содержаться минимум 1 буква и 1 цифра',
                      },
                    })}
                  />
                  {errors.password && (
                    <p style={{ color: 'red' }}>
                      {errors.password.message || 'Ошибка'}
                    </p>
                  )}
                </div>
              </div>
              <button
                className="btn btn--accent btn--general login-form__submit"
                type="submit"
                disabled={!isValid}
              >
                Войти
              </button>
            </div>
            <label className="custom-checkbox login-form__checkbox">
              <input
                type="checkbox"
                id="id-order-agreement"
                {...register('agree', { required: true })}
              />
              <span className="custom-checkbox__icon">
                <svg width={20} height={17} aria-hidden="true">
                  <use xlinkHref="#icon-tick" />
                </svg>
              </span>
              <span className="custom-checkbox__label">
                Я согласен с&nbsp;
                <a
                  className="link link--active-silver link--underlined"
                  href="#"
                >
                  правилами обработки персональных данных
                </a>
                &nbsp;и пользовательским соглашением
              </span>
            </label>
          </form>
        </div>
      </div>
    </main>
  );
}

export default Login;
