const RegisterForm = (): React.ReactElement => {
  return (
    <form className="form" noValidate autoComplete="off">
      <div className="form-controls">
        <label className="form__label" htmlFor="name">
          Name
        </label>
        <input className="form__input" type="text" id="name" />
      </div>
      <div className="form-controls">
        <label className="form__label" htmlFor="lastname">
          Lastname
        </label>
        <input className="form__input" type="text" id="lastname" />
      </div>
      <div className="form-controls">
        <label className="form__label" htmlFor="username">
          Name
        </label>
        <input className="form__input" type="text" id="username" />
      </div>
      <div className="form-controls">
        <label className="form__label" htmlFor="password">
          Password
        </label>
        <input className="form__input" type="password" id="password" />
      </div>
    </form>
  );
};

export default RegisterForm;
