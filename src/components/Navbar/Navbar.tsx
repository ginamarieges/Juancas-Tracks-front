import { NavLink } from "react-router-dom";
import NavbarStyled from "./NavbarStyled";

const Navbar = (): React.ReactElement => {
  return (
    <NavbarStyled>
      <ul className="navbar">
        <li>
          <NavLink
            className="navbar__icon"
            to={"/home"}
            aria-label="home"
            title="home"
          >
            <img src="/img/home-logo.svg" alt="home" width={55} height={55} />
          </NavLink>
        </li>
        <li>
          <NavLink
            className="navbar__icon"
            to={"/add-track"}
            aria-label="add-track"
            title="add-track"
          >
            <img src="/img/add-logo.svg" alt="add" width={55} height={55} />
          </NavLink>
        </li>
        <li>
          <NavLink
            className="navbar__icon"
            to={"/login"}
            aria-label="login"
            title="login"
          >
            <img src="/img/log-logo.svg" alt="login" width={55} height={55} />
          </NavLink>
        </li>
      </ul>
    </NavbarStyled>
  );
};

export default Navbar;
