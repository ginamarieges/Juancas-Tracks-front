import { Outlet } from "react-router-dom";
import ContainerStyled from "../shared/ContainerStyled";
import Header from "../Header/Header";
import Navbar from "../Navbar/Navbar";
import { paths } from "../../routers/paths/paths";

const Layout = (): React.ReactElement => {
  return (
    <ContainerStyled>
      <Header />
      <Outlet />
      {location.pathname === paths.register ||
        location.pathname === paths.login || <Navbar />}
    </ContainerStyled>
  );
};

export default Layout;
