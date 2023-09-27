import { styled } from "styled-components";

const TrackCardStyled = styled.article`
  height: 100px;
  display: flex;
  flex-direction: row;
  position: relative;
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
    }

    &__singer {
      font-size: 16px;
      text-transform: uppercase;
      color: ${(props) => props.theme.color.selected};
    }

    &__album {
      font-size: 16px;
    }

    &__image {
      border-radius: 50%;
      max-width: 80px;
      max-height: 80px;
      z-index: 1;
    }
  }
`;

export default TrackCardStyled;
