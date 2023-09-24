import axios from "axios";

const useTracks = () => {
  const apiUrl = import.meta.env.VITE_API_URL;

  const getTracks = async () => {
    const {
      data: { tracks },
    } = await axios.get(`${apiUrl}/tracks`);

    return { tracks };
  };

  return { getTracks };
};

export default useTracks;
