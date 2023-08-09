import { styled } from "styled-components";

const RegisterPageStyled = styled.section`
  .title {
    text-transform: uppercase;
    color: ${(props) => props.theme.color.secondary};
    font-size: 20px;
  }
`;

export default RegisterPageStyled;
