import { useAppSelector } from "../../store";
import TrackCard from "../TrackCard/TrackCard";
import TrackListStyled from "./TracklistStyled";

const TrackList = (): React.ReactElement => {
  const { tracks } = useAppSelector((state) => state.tracksStore);

  return (
    <TrackListStyled>
      <ul className="list">
        {tracks.map((tracks) => (
          <li key={tracks.id}>
            <TrackCard track={tracks} />
          </li>
        ))}
      </ul>
    </TrackListStyled>
  );
};

export default TrackList;
