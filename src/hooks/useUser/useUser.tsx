import axios from "axios";
import { UserStructure } from "../../store/user/types";

const useUser = () => {
  const apiUrl = import.meta.env.VITE_API_URL;
  const registerUser = async (userData: UserStructure): Promise<void> => {
    try {
      const { data } = await axios.post(`${apiUrl}/user/register`, userData);

      return data;
    } catch (error) {
      throw error as Error;
    }
  };

  return { registerUser };
};

export default useUser;
