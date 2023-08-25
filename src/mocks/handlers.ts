import { rest } from "msw";
import { registerUserMock, tokenMock } from "./userMocks";

const apiUrl = import.meta.env.VITE_API_URL;

export const handlers = [
  rest.post(`${apiUrl}/user/register`, (_req, res, ctx) => {
    return res(ctx.status(201), ctx.json({ newUser: registerUserMock }));
  }),

  rest.post(`${apiUrl}/user/login`, (_req, res, ctx) => {
    return res(ctx.status(200), ctx.json({ token: tokenMock }));
  }),
];
