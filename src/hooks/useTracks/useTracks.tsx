import axios from "axios";
import { TrackStructure, TracksStateStructure } from "../../store/tracks/types";

const useTracks = () => {
  const apiUrl = import.meta.env.VITE_API_URL;

  const getTracks = async (): Promise<TracksStateStructure> => {
    const {
      data: { tracks },
    } = await axios.get<{ tracks: TrackStructure[] }>(`${apiUrl}/tracks`);

    return { tracks };
  };

  return { getTracks };
};

export default useTracks;
