import styled from "styled-components";

const TrackListStyled = styled.div`
  .list {
    display: flex;
    flex-direction: column;
    gap: 30px;

    @media (min-width: 600px) {
      display: grid;
      grid-template-columns: repeat(3, 1fr);
    }
  }
`;

export default TrackListStyled;
