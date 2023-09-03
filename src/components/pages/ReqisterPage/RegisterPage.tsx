import { useNavigate } from "react-router-dom";
import useUser from "../../../hooks/useUser/useUser";
import { UserStructure } from "../../../store/user/types";
import RegisterForm from "../../RegisterForm/RegisterForm";
import RegisterPageStyled from "./RegisterPageStyled";
import { paths } from "../../../routers/paths/paths";

const RegisterPage = (): React.ReactElement => {
  const { registerUser } = useUser();
  const navigate = useNavigate();

  const onSubmit = async (userData: UserStructure) => {
    const data = await registerUser(userData);
    if (!data) {
      navigate(paths.register);
    }
    navigate(paths.login);
  };

  return (
    <RegisterPageStyled>
      <h1 className="title">Crea tu cuenta</h1>
      <RegisterForm onSubmit={onSubmit} />
    </RegisterPageStyled>
  );
};

export default RegisterPage;
