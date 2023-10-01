const Form = (): React.ReactElement => {
  return (
    <form
      className="form"
      action="/upload_files"
      encType="multipart/form-data"
      autoComplete="off"
      noValidate
    >
      <div className="form__controls">
        <label htmlFor="album">Album</label>
        <input type="text" name="album" id="album" />
      </div>
      <div className="form__controls">
        <label htmlFor="singer">Cantante</label>
        <input type="text" name="singer" id="singer" />
      </div>
      <div className="form__controls">
        <label htmlFor="repeat">¿Repetido?</label>
        <input type="checkbox" name="repeat" id="repeat" />
      </div>
      <div className="form__controls">
        <label htmlFor="musicType">Tipo de música</label>
        <input type="text" name="musicType" id="musicType" />
      </div>
      <div className="form__controls">
        <label htmlFor="notes">Notas</label>
        <textarea name="notes" id="notes" cols={30} rows={7}></textarea>
      </div>
      <div className="form__controls">
        <label htmlFor="image">Selecciona una imagen</label>
        <input type="file" name="image" id="image" accept="image/*" />
      </div>
      <div className="form__controls">
        <label htmlFor="songs">Canciones</label>
        <textarea name="songs" id="songs" cols={30} rows={7}></textarea>
      </div>

      <button className="form__button">Enviar</button>
    </form>
  );
};

export default Form;
