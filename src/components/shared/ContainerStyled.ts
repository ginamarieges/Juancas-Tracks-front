import { styled } from "styled-components";

const ContainerStyled = styled.div`
  margin: 0 auto;
  padding: 20px;
  padding-top: 73px;
  min-height: 100vh;
  min-width: 320px;
  background-color: ${(props) => props.theme.color.primary};

  @media (min-width: 600px) {
    padding: 0 100px;
  }
`;

export default ContainerStyled;
