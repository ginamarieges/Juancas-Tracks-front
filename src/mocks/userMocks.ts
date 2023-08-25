import { UserData } from "../store/user/types";
import { Types } from "mongoose";

export const registerUserMock: UserData = {
  name: "Gina",
  lastname: "Marieges",
  password: "andele",
  username: "Gingi",
  id: new Types.ObjectId().toString(),
};

export const tokenMock = "948efjwapir8ujdap9w3josrdjwasfdgvaerdrtg";

export const loginCredentialsMock: Partial<UserData> = {
  username: "Gina",
  password: "andele",
};
