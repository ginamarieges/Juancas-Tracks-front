import { UserData } from "../store/user/types";
import { Types } from "mongoose";

export const registerUserMock: UserData = {
  name: "Gina",
  lastname: "Marieges",
  password: "andele",
  username: "Gingi",
  id: new Types.ObjectId().toString(),
};
