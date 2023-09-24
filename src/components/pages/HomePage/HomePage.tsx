import { useEffect } from "react";
import HomePageStyled from "./HomePageStyled";
import useTracks from "../../../hooks/useTracks/useTracks";
import { useDispatch } from "react-redux";
import { loadTracksActionCreator } from "../../../store/tracks/tracksSlice";

const HomePage = (): React.ReactElement => {
  const { getTracks } = useTracks();
  const dispatch = useDispatch();

  useEffect(() => {
    (async () => {
      const tracks = await getTracks();
      if (tracks) {
        dispatch(loadTracksActionCreator(tracks));
      }
    })();
  }, [dispatch, getTracks]);

  return (
    <HomePageStyled>
      <h1 className="title">Todos tus vinilos</h1>
    </HomePageStyled>
  );
};

export default HomePage;
