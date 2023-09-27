import { TrackStructure } from "../../store/tracks/types";
import TrackCardStyled from "./TrackCardStyled";

interface TrackCardProps {
  track: TrackStructure;
}

const TrackCard = ({
  track: { album, image, singer },
}: TrackCardProps): React.ReactElement => {
  return (
    <TrackCardStyled className="card">
      <img className="card__image" src={image} alt={`${album} cover`} />
      <div className="card__info">
        <h2 className="card__singer">{singer}</h2>
        <h3 className="card__album">{album}</h3>
      </div>
    </TrackCardStyled>
  );
};

export default TrackCard;
