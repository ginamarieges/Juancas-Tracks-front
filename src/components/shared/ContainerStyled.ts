import { styled } from "styled-components";

const ContainerStyled = styled.div`
  margin: 0 auto;
  padding: 20px;
  min-height: 100vh;
  min-width: 320px;
  background-color: ${(props) => props.theme.color.primary};

  @media (min-width: 600px) {
    padding: 0 100px 100px 100px;
    display: flex;
    flex-direction: column;
  }
`;

export default ContainerStyled;
