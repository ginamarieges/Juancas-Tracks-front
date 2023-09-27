import { useAppSelector } from "../../store";
import TrackCard from "../TrackCard/TrackCard";

const TrackList = (): React.ReactElement => {
  const { tracks } = useAppSelector((state) => state.tracksStore);

  return (
    <ul className="list">
      {tracks.map((tracks) => (
        <li key={tracks.id}>
          <TrackCard track={tracks} />
        </li>
      ))}
    </ul>
  );
};

export default TrackList;
