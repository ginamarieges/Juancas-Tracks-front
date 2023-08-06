import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <ul>
      <li>
        <NavLink to={"/home"} aria-label="home" title="home">
          <img src="/img/home-logo.svg" alt="home" />
        </NavLink>
      </li>
      <li>
        <NavLink to={"/add-track"} aria-label="add-track" title="add-track">
          <img src="/img/add-logo.svg" alt="add" />
        </NavLink>
      </li>
      <li>
        <NavLink to={"/login"} aria-label="login" title="login">
          <img src="/img/log-logo.svg" alt="login" />
        </NavLink>
      </li>
    </ul>
  );
};

export default Navbar;
