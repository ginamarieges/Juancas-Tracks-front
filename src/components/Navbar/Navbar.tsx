import { NavLink } from "react-router-dom";
import NavbarStyled from "./NavbarStyled";
import { paths } from "../../routers/paths/paths";

const Navbar = (): React.ReactElement => {
  return (
    <NavbarStyled>
      <ul className="navbar">
        <li>
          <NavLink
            className="navbar__icon"
            to={paths.home}
            aria-label="home"
            title="home"
          >
            <img
              className="home-mobile"
              src="/img/home-logo.svg"
              alt="home"
              width={55}
              height={55}
            />
            <span className="home-desktop">Inicio</span>
          </NavLink>
        </li>
        <li>
          <NavLink
            className="navbar__icon"
            to={paths.add}
            aria-label="add-track"
            title="add-track"
          >
            <img
              className="add-mobile"
              src="/img/add-logo.svg"
              alt="add"
              width={55}
              height={55}
            />
            <span className="add-desktop">Añadir</span>
          </NavLink>
        </li>
        <li>
          <NavLink
            className="navbar__icon"
            to={paths.login}
            aria-label="login"
            title="login"
          >
            <img
              className="logout-mobile"
              src="/img/log-logo.svg"
              alt="login"
              width={55}
              height={55}
            />
            <span className="logout-desktop">Cerrar sesión</span>
          </NavLink>
        </li>
      </ul>
    </NavbarStyled>
  );
};

export default Navbar;
