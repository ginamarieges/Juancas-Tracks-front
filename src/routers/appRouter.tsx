import { RouteObject, createBrowserRouter } from "react-router-dom";
import App from "../components/App/App";
import RegisterPage from "../components/pages/ReqisterPage/RegisterPage";
import { paths } from "./paths/paths";
import LoginPage from "../components/pages/LoginPage/LoginPage";

const routes: RouteObject[] = [
  {
    path: "/",
    element: <App />,
    children: [
      { path: paths.register, element: <RegisterPage /> },
      { path: paths.login, element: <LoginPage /> },
    ],
  },
];

const appRouter = createBrowserRouter(routes);

export default appRouter;
