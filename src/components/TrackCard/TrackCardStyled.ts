import { styled } from "styled-components";

const TrackCardStyled = styled.article`
  height: 100px;
  display: flex;
  flex-direction: row;
  position: relative;

  @media (min-width: 600px) {
    display: flex;
    flex-direction: row;
    align-items: center;
    height: auto;

    &:hover {
      img {
        z-index: 0;
      }
    }
  }

  .card {
    &__info {
      display: flex;
      flex-direction: column;
      justify-content: center;
      background-color: ${(props) => props.theme.color.secondary};
      width: 240px;
      height: 100px;
      padding: 20px 0 20px 50px;
      position: absolute;
      left: 40px;
      bottom: 10px;
      box-shadow: 1px 1px 2px ${(props) => props.theme.color.text};

      @media (min-width: 600px) {
        position: absolute;
        box-shadow: none;
        padding: 0;
        padding-left: 15px;
        width: 150px;
        height: 150px;
        background-color: ${(props) => props.theme.color.selected};
        top: 0;
        left: 0;
      }
    }

    &__singer {
      font-size: 16px;
      text-transform: uppercase;
      color: ${(props) => props.theme.color.selected};

      @media (min-width: 600px) {
        color: ${(props) => props.theme.color.secondary};
        max-width: 130px;
      }
    }

    &__album {
      font-size: 16px;

      @media (min-width: 600px) {
        max-width: 130px;
        align-self: auto;
      }
    }

    &__image {
      border-radius: 50%;
      width: 80px;
      height: 80px;
      z-index: 1;

      @media (min-width: 600px) {
        z-index: 1;
        border-radius: 0;
        width: 150px;
        height: 150px;
      }
    }
  }
`;

export default TrackCardStyled;
