import { styled } from "styled-components";

const HomePageStyled = styled.section`
  display: flex;
  flex-direction: column;
  gap: 30px;

  @media (min-width: 600px) {
    display: flex;
    flex-direction: column;
    margin: 0 auto;
    justify-content: space-around;
    background-color: ${(props) => props.theme.color.secondary};
    align-items: center;
    width: 600px;
    border: ${(props) => props.theme.color.text} solid 1px;
    box-shadow: 2px 2px 30px ${(props) => props.theme.color.text};
    padding-bottom: 25px;
  }

  .title {
    text-transform: uppercase;
    color: ${(props) => props.theme.color.secondary};
    font-size: 20px;

    @media (min-width: 600px) {
      margin: 0 auto;
      padding-top: 20px;
      font-size: 40px;
      color: ${(props) => props.theme.color.primary};
    }
  }
`;

export default HomePageStyled;
