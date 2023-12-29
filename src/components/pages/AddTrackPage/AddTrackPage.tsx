import { useAppDispatch } from "../../../store";
import { addTrackActionCreator } from "../../../store/tracks/tracksSlice";
import { TrackStructure } from "../../../store/tracks/types";
import Form from "../../Form/Form";
import AddTrackPageStyled from "./AddTrackPageStyled";

const AddTrackPage = (): React.ReactElement => {
  const dispatch = useAppDispatch();

  const onSubmit = (trackData: TrackStructure) => {
    dispatch(addTrackActionCreator(trackData));
  };
  return (
    <AddTrackPageStyled>
      <h1 className="title">Añade tu vinilo</h1>
      <Form onSubmit={onSubmit} />
    </AddTrackPageStyled>
  );
};

export default AddTrackPage;
