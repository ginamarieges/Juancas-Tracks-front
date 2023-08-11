import RegisterFormStyled from "./RegisterFormStyled";

const RegisterForm = (): React.ReactElement => {
  return (
    <RegisterFormStyled className="form" noValidate autoComplete="off">
      <div className="form__controls">
        <label className="form__label" htmlFor="name">
          Nombre
        </label>
        <input className="form__input" type="text" id="name" />
      </div>
      <div className="form__controls">
        <label className="form__label" htmlFor="lastname">
          Apellidos
        </label>
        <input className="form__input" type="text" id="lastname" />
      </div>
      <div className="form__controls">
        <label className="form__label" htmlFor="username">
          Username
        </label>
        <input className="form__input" type="text" id="username" />
      </div>
      <div className="form__controls">
        <label className="form__label" htmlFor="password">
          Password
        </label>
        <input className="form__input" type="password" id="password" />
      </div>
      <button className="button">Registrar</button>
    </RegisterFormStyled>
  );
};

export default RegisterForm;
