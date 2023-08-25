import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { UserTokenData, UserTokenStructure } from "./types";

const initialState: UserTokenData = {
  id: "",
  isLogged: false,
  name: "",
  token: "",
};
const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    loginUser: (
      _currentState: UserTokenData,
      action: PayloadAction<UserTokenStructure>
    ) => ({
      ...action.payload,
      isLogged: true,
    }),
  },
});

export const { loginUser: loginUserActionCreator } = userSlice.actions;
export const userReducer = userSlice.reducer;
