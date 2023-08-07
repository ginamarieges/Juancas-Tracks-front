import { styled } from "styled-components";

const NavbarStyled = styled.div`
  width: 100%;
  position: fixed;
  bottom: 0;
  right: 0;
  padding: 10px 20px;

  .navbar {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
  }
`;

export default NavbarStyled;