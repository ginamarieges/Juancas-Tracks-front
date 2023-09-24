import { TrackStructure } from "../../store/tracks/types";

interface TrackCardProps {
  track: TrackStructure;
}

const TrackCard = ({
  track: { album, image, singer },
}: TrackCardProps): React.ReactElement => {
  return (
    <div className="card">
      <img src={image} alt={`${album} cover`} />
      <div className="card__info">
        <h2 className="card__singer">{singer}</h2>
        <h3 className="card__album">{album}</h3>
      </div>
    </div>
  );
};

export default TrackCard;
