import { styled } from "styled-components";

const ContainerStyled = styled.div`
  margin: 0 auto;
  padding: 20px;
  padding-top: 73px;
  min-height: 100vh;
  min-width: 320px;
  background-color: ${(props) => props.theme.color.primary};
`;

export default ContainerStyled;
