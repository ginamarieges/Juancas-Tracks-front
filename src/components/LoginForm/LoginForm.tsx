import LoginFormStyled from "./LoginFormStyled";

const LoginForm = (): React.ReactElement => {
  return (
    <LoginFormStyled autoComplete="off" noValidate className="form">
      <div className="form__controls">
        <label className="form__label" htmlFor="username">
          Username
        </label>
        <input className="form__input" id="username" type="text" />
      </div>

      <div className="form__controls">
        <label className="form__label" htmlFor="password">
          Password
        </label>
        <input className="form__input" id="password" type="password" />
      </div>

      <button className="button">Enviar</button>
    </LoginFormStyled>
  );
};
export default LoginForm;
