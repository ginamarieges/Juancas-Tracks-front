import useUser from "../../../hooks/useUser/useUser";
import { UserStructure } from "../../../store/user/types";
import RegisterForm from "../../RegisterForm/RegisterForm";
import RegisterPageStyled from "./RegisterPageStyled";

const RegisterPage = (): React.ReactElement => {
  const { registerUser } = useUser();

  const onSubmit = async (userData: UserStructure) => {
    await registerUser(userData);
  };

  return (
    <RegisterPageStyled>
      <h1 className="title">Crea tu cuenta</h1>
      <RegisterForm onSubmit={onSubmit} />
    </RegisterPageStyled>
  );
};

export default RegisterPage;
