import { styled } from "styled-components";

const RegisterPageStyled = styled.section`
  @media (min-width: 600px) {
    display: flex;
    flex-direction: row;
    gap: 100px;
    justify-content: space-around;
    background-color: ${(props) => props.theme.color.secondary};
    align-items: center;
    max-width: 1300px;
    min-width: 1000px;
  }
  .title {
    text-transform: uppercase;
    color: ${(props) => props.theme.color.secondary};
    font-size: 20px;
    @media (min-width: 600px) {
      font-size: 40px;
      color: ${(props) => props.theme.color.primary};
    }
  }
`;

export default RegisterPageStyled;
