import Form from "../../Form/Form";
import AddTrackPageStyled from "./AddTrackPageStyled";

const AddTrackPage = (): React.ReactElement => {
  return (
    <AddTrackPageStyled>
      <h1 className="title">Añade tu vinilo</h1>
      <Form />
    </AddTrackPageStyled>
  );
};

export default AddTrackPage;
