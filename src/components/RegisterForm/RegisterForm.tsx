import { useState } from "react";
import RegisterFormStyled from "./RegisterFormStyled";
import { UserStructure } from "../../store/user/types.ts";

interface RegisterProps {
  onSubmit: (userData: UserStructure) => void;
}

const RegisterForm = ({ onSubmit }: RegisterProps): React.ReactElement => {
  const initialUserData: UserStructure = {
    lastname: "",
    name: "",
    password: "",
    username: "",
  };

  const [userData, setUserData] = useState(initialUserData);

  const onChangeData = (event: React.ChangeEvent<HTMLInputElement>) => {
    setUserData({
      ...userData,
      [event?.target.id]: event?.target.value,
    });
  };

  const handleOnSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    onSubmit(userData);
    setUserData(initialUserData);
  };
  return (
    <RegisterFormStyled
      className="form"
      noValidate
      autoComplete="off"
      onSubmit={handleOnSubmit}
    >
      <div className="form__controls">
        <label className="form__label" htmlFor="name">
          Nombre
        </label>
        <input
          className="form__input"
          type="text"
          id="name"
          value={userData.name}
          onChange={onChangeData}
        />
      </div>
      <div className="form__controls">
        <label className="form__label" htmlFor="lastname">
          Apellidos
        </label>
        <input
          className="form__input"
          type="text"
          id="lastname"
          value={userData.lastname}
          onChange={onChangeData}
        />
      </div>
      <div className="form__controls">
        <label className="form__label" htmlFor="username">
          Username
        </label>
        <input
          className="form__input"
          type="text"
          id="username"
          value={userData.username}
          onChange={onChangeData}
        />
      </div>
      <div className="form__controls">
        <label className="form__label" htmlFor="password">
          Password
        </label>
        <input
          className="form__input"
          type="password"
          id="password"
          value={userData.password}
          onChange={onChangeData}
        />
      </div>
      <button className="button" onClick={() => onSubmit}>
        Registrar
      </button>
    </RegisterFormStyled>
  );
};

export default RegisterForm;
