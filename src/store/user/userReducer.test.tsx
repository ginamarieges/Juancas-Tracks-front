import { UserTokenData, UserTokenStructure } from "./types";
import { loginUserActionCreator, userReducer } from "./userSlice";

describe("Given a loginUser reducer", () => {
  describe("When it receives Gina's data", () => {
    test("Then it should return Gina logged in", () => {
      const user: UserTokenStructure = {
        id: "3",
        name: "Gina",
        token: "woierjkfoiwejtrfaowiejofacma94weijfm",
      };

      const currentState: UserTokenData = {
        id: "",
        isLogged: false,
        name: "",
        token: "",
      };

      const action = loginUserActionCreator(user);

      const newState = userReducer(currentState, action);

      const expectedState: UserTokenData = {
        id: "3",
        name: "Gina",
        token: "woierjkfoiwejtrfaowiejofacma94weijfm",
        isLogged: true,
      };

      expect(newState).toStrictEqual(expectedState);
    });
  });
});
