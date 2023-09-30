import { styled } from "styled-components";

const NavbarStyled = styled.div`
  width: 100%;
  position: fixed;
  bottom: 0;
  right: 0;
  padding: 10px 20px;
  z-index: 1;

  @media (min-width: 600px) {
    position: static;
    order: -1;

    .home-mobile,
    .add-mobile,
    .logout-mobile {
      display: none;
    }
  }

  .home-desktop,
  .add-desktop,
  .logout-desktop {
    display: none;

    @media (min-width: 600px) {
      display: contents;
      color: ${(props) => props.theme.color.text};

      &:hover {
        color: ${(props) => props.theme.color.secondary};
      }
    }
  }

  .navbar {
    min-width: 280px;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;

    @media (min-width: 600px) {
      padding-top: 20px;
      justify-content: flex-end;
      gap: 50px;
      text-transform: uppercase;
    }
  }
`;

export default NavbarStyled;
