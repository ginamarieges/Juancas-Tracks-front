import RegisterForm from "../../RegisterForm/RegisterForm";
import RegisterPageStyled from "./RegisterPageStyled";

const RegisterPage = (): React.ReactElement => {
  return (
    <RegisterPageStyled>
      <h1 className="title">Crea tu cuenta</h1>
      <RegisterForm />
    </RegisterPageStyled>
  );
};

export default RegisterPage;
