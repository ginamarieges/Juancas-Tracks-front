import FormStyled from "./FormStyled";

const Form = (): React.ReactElement => {
  return (
    <FormStyled
      className="form"
      action="/upload_files"
      encType="multipart/form-data"
      autoComplete="off"
      noValidate
    >
      <div className="form__controls">
        <label htmlFor="album">Álbum</label>
        <input className="form__input" type="text" name="album" id="album" />
      </div>
      <div className="form__controls">
        <label htmlFor="singer">Cantante</label>
        <input className="form__input" type="text" name="singer" id="singer" />
      </div>
      <div className="checkbox">
        <label htmlFor="repeat">¿Repetido?</label>
        <input
          className="checkbox__input"
          type="checkbox"
          name="repeat"
          id="repeat"
        />
      </div>
      <div className="form__controls">
        <label htmlFor="musicType">Tipo de música</label>
        <input
          className="form__input"
          type="text"
          name="musicType"
          id="musicType"
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
        ></textarea>
      </div>
      <div className="form__controls">
        <label htmlFor="image">Selecciona una imagen</label>
        <input type="file" name="image" id="image" accept="image/*" />
      </div>
      <div className="form__controls">
        <label htmlFor="songs">Canciones</label>
        <textarea
          className="form__input"
          name="songs"
          id="songs"
          cols={30}
          rows={7}
        ></textarea>
      </div>

      <button className="form__button">Enviar</button>
    </FormStyled>
  );
};

export default Form;
