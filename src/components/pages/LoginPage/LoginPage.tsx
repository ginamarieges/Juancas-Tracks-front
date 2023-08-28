import { useNavigate } from "react-router-dom";
import useToken from "../../../hooks/useToken/useToken";
import useUser from "../../../hooks/useUser/useUser";
import { useAppDispatch } from "../../../store";
import { UserData, UserTokenStructure } from "../../../store/user/types";
import LoginForm from "../../LoginForm/LoginForm";
import LoginPageStyled from "./LoginPageStyled";
import { paths } from "../../../routers/paths/paths";
import { loginUserActionCreator } from "../../../store/user/userSlice";

const LoginPage = (): React.ReactElement => {
  const { getUserToken } = useUser();
  const { getTokenData } = useToken();
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const onSubmit = async (userCredentials: Partial<UserData>) => {
    const token = await getUserToken(userCredentials);

    if (!token) {
      navigate(paths.login);
    }

    const userData = getTokenData(token);
    const tokenData: UserTokenStructure = {
      ...userData,
      token,
    };
    dispatch(loginUserActionCreator(tokenData));
  };

  return (
    <LoginPageStyled>
      <h1 className="title">Accede a tu cuenta</h1>
      <LoginForm onSubmit={onSubmit} />
    </LoginPageStyled>
  );
};

export default LoginPage;
