import axios from "axios";
import { UserData, UserStructure } from "../../store/user/types";

const useUser = () => {
  const apiUrl = import.meta.env.VITE_API_URL;
  const registerUser = async (userData: UserStructure): Promise<UserData> => {
    try {
      const { data } = await axios.post(`${apiUrl}/user/register`, userData);

      return data;
    } catch (error) {
      throw (error as Error).message;
    }
  };

  const getUserToken = async (
    userCredentials: Partial<UserStructure>
  ): Promise<string> => {
    try {
      const {
        data: { token },
      } = await axios.post<{ token: string }>(
        `${apiUrl}/user/login`,
        userCredentials
      );

      return token;
    } catch (error) {
      throw (error as Error).message;
    }
  };

  return { registerUser, getUserToken };
};

export default useUser;
