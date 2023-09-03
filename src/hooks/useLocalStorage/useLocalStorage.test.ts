import { renderHook } from "@testing-library/react";
import { tokenMock } from "../../mocks/userMocks";
import useLocalStorage from "./useLocalStorage";

beforeEach(() => {
  localStorage.clear();
});

const token = tokenMock;
const key = "token";

describe("Given a setToken function", () => {
  describe("When it receives the key token with the token", () => {
    test("Then it should save the token value in the local storage", () => {
      const {
        result: {
          current: { setToken },
        },
      } = renderHook(() => useLocalStorage());

      setToken(key, token);

      expect(localStorage.getItem(key)).toBe(token);
    });
  });
});

describe("Given a getToken function", () => {
  describe("When it receives the key 'token' and exists a key 'token' in the local storage", () => {
    test("Then it should get the token from local storage", () => {
      const {
        result: {
          current: { getToken },
        },
      } = renderHook(() => useLocalStorage());

      localStorage.setItem(key, token);

      const savedToken = getToken(key);

      expect(savedToken).toBe(token);
    });
  });
});

describe("Given a removeToken function", () => {
  describe("When it receives the key 'token'", () => {
    test("Then it should remove the token from local storage", () => {
      localStorage.setItem(key, token);

      const {
        result: {
          current: { removeToken },
        },
      } = renderHook(() => useLocalStorage());

      removeToken(key);

      expect(localStorage.getItem(key)).toBeNull();
    });
  });
});
