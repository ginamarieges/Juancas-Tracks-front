import LoginForm from "../../LoginForm/LoginForm";
import LoginPageStyled from "./LoginPageStyled";

const LoginPage = (): React.ReactElement => {
  return (
    <LoginPageStyled>
      <h1 className="title">Accede a tu cuenta</h1>
      <LoginForm />
    </LoginPageStyled>
  );
};

export default LoginPage;
