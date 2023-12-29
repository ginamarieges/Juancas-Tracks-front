import { useState } from "react";
import FormStyled from "./FormStyled";
import { TrackStructure } from "../../store/tracks/types";

interface FormProps {
  onSubmit: (trackData: TrackStructure) => void;
}

const Form = ({ onSubmit }: FormProps): React.ReactElement => {
  const initialTrackData: TrackStructure = {
    album: "",
    id: "",
    image: "",
    musicType: "",
    notes: "",
    repeat: false,
    singer: "",
    songs: [],
    user: "",
  };

  const [trackData, setTrackData] = useState(initialTrackData);

  const onChangeData = (
    event:
      | React.ChangeEvent<HTMLInputElement>
      | React.ChangeEvent<HTMLTextAreaElement>
  ) => {
    setTrackData({
      ...trackData,
      [event.target.id]: event.target.value,
    });
  };
  const onChangeCheckbox = (event: React.ChangeEvent<HTMLInputElement>) => {
    setTrackData({
      ...trackData,
      [event.target.id]: event.target.checked,
    });
  };

  const handleOnSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    onSubmit(trackData);
    setTrackData(initialTrackData);
  };
  return (
    <FormStyled
      className="form"
      encType="multipart/form-data"
      autoComplete="off"
      noValidate
      onSubmit={handleOnSubmit}
    >
      <div className="form__controls">
        <label htmlFor="album">Álbum</label>
        <input
          className="form__input"
          type="text"
          name="album"
          id="album"
          value={trackData.album}
          onChange={onChangeData}
        />
      </div>
      <div className="form__controls">
        <label htmlFor="singer">Cantante</label>
        <input
          className="form__input"
          type="text"
          name="singer"
          id="singer"
          value={trackData.singer}
          onChange={onChangeData}
        />
      </div>
      <div className="checkbox">
        <label htmlFor="repeat">¿Repetido?</label>
        <input
          className="checkbox__input"
          type="checkbox"
          name="repeat"
          id="repeat"
          onChange={onChangeCheckbox}
        />
      </div>
      <div className="form__controls">
        <label htmlFor="musicType">Tipo de música</label>
        <input
          className="form__input"
          type="text"
          name="musicType"
          id="musicType"
          value={trackData.musicType}
          onChange={onChangeData}
        />
      </div>
      <div className="form__controls">
        <label htmlFor="notes">Notas</label>
        <textarea
          className="form__input"
          name="notes"
          id="notes"
          cols={30}
          rows={7}
          value={trackData.notes}
          onChange={onChangeData}
        ></textarea>
      </div>
      <div className="form__controls">
        <label htmlFor="image">Portada</label>
        <input
          className="form__input"
          type="text"
          id="image"
          value={trackData.image}
          onChange={onChangeData}
        />
      </div>
      <div className="form__controls">
        <label htmlFor="songs">Canciones</label>
        <textarea
          className="form__input"
          name="songs"
          id="songs"
          cols={30}
          rows={7}
          value={trackData.songs}
          onChange={onChangeData}
        ></textarea>
      </div>

      <button className="form__button">Enviar</button>
    </FormStyled>
  );
};

export default Form;
