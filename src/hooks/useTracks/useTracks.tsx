import axios from "axios";
import { TrackStructure, TracksStateStructure } from "../../store/tracks/types";
import { useCallback } from "react";

const useTracks = () => {
  const apiUrl = import.meta.env.VITE_API_URL;

  const getTracks = useCallback(async (): Promise<TracksStateStructure> => {
    const {
      data: { tracks },
    } = await axios.get<{ tracks: TrackStructure[] }>(`${apiUrl}/tracks`);

    return { tracks };
  }, [apiUrl]);

  return { getTracks };
};

export default useTracks;
