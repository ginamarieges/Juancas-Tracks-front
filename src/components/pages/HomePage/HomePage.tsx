import { useEffect } from "react";
import HomePageStyled from "./HomePageStyled";
import useTracks from "../../../hooks/useTracks/useTracks";
import { useDispatch } from "react-redux";
import { loadTracksActionCreator } from "../../../store/tracks/tracksSlice";
import { useAppSelector } from "../../../store";

const HomePage = (): React.ReactElement => {
  const { getTracks } = useTracks();
  const dispatch = useDispatch();
  const { tracks } = useAppSelector((state) => state.tracksStore);

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
      <ul className="list">
        {tracks.map((tracks) => (
          <li key={tracks.id}>name: {tracks.album} </li>
        ))}
      </ul>
    </HomePageStyled>
  );
};

export default HomePage;
