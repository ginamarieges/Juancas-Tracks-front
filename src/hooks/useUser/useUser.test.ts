import { renderHook } from "@testing-library/react";
import { UserStructure } from "../../store/user/types";
import useUser from "./useUser";
import {
  loginCredentialsMock,
  registerUserMock,
  tokenMock,
} from "../../mocks/userMocks";
import { wrapper } from "../../utils/testUtils";

describe("Given a useUser function", () => {
  describe("When the registerUser function is called with Gina's data", () => {
    test("Then it should return Gina's data", async () => {
      const ginaData: UserStructure = {
        name: "Gina",
        lastname: "Marieges",
        password: "andele",
        username: "Gingi",
      };

      const {
        result: {
          current: { registerUser },
        },
      } = renderHook(() => useUser(), { wrapper: wrapper });

      const newUser = await registerUser(ginaData);

      const expectedUser = registerUserMock;

      expect(newUser).toStrictEqual({ newUser: expectedUser });
    });
  });
  describe("When the getUserToken function is called with valid Gina's credentials", () => {
    test("Then it should return the token", async () => {
      const expectedToken = tokenMock;
      const userCredentials = loginCredentialsMock;

      const {
        result: {
          current: { getUserToken },
        },
      } = renderHook(() => useUser(), { wrapper: wrapper });

      const token = await getUserToken(userCredentials);

      expect(token).toBe(expectedToken);
    });
  });
});
