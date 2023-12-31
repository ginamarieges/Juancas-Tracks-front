import { styled } from "styled-components";

const HeaderStyled = styled.header`
  .small-logo {
    @media (min-width: 600px) {
      display: none;
    }
  }
  .big-logo {
    display: none;
    @media (min-width: 600px) {
      display: block;
    }
  }
  @media (min-width: 600px) {
    display: flex;
    justify-content: center;
    margin: 0 auto;
    width: 600px;
  }
`;

export default HeaderStyled;
