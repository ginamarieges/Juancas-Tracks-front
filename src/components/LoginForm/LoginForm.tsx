import { useState } from "react";
import LoginFormStyled from "./LoginFormStyled";
import { UserStructure } from "../../store/user/types";

const LoginForm = (): React.ReactElement => {
  const initialCredentials: Partial<UserStructure> = {
    username: "",
    password: "",
  };

  const [userCredentials, setUserCredentials] = useState(initialCredentials);

  const onChangeData = (event: React.ChangeEvent<HTMLInputElement>) => {
    setUserCredentials({
      ...userCredentials,
      [event.target.id]: event.target.value,
    });
  };

  const handleOnSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setUserCredentials(initialCredentials);
  };

  const isReady =
    userCredentials.username !== "" && userCredentials.password !== "";

  return (
    <LoginFormStyled
      autoComplete="off"
      noValidate
      className="form"
      onSubmit={handleOnSubmit}
    >
      <div className="form__controls">
        <label className="form__label" htmlFor="username">
          Username
        </label>
        <input
          className="form__input"
          id="username"
          type="text"
          value={userCredentials.username}
          onChange={onChangeData}
        />
      </div>

      <div className="form__controls">
        <label className="form__label" htmlFor="password">
          Password
        </label>
        <input
          className="form__input"
          id="password"
          type="password"
          value={userCredentials.password}
          onChange={onChangeData}
        />
      </div>

      <button
        className="button"
        disabled={!isReady}
        onClick={() => handleOnSubmit}
      >
        Enviar
      </button>
    </LoginFormStyled>
  );
};
export default LoginForm;
