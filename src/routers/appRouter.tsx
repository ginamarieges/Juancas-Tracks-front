import { Navigate, RouteObject, createBrowserRouter } from "react-router-dom";
import App from "../components/App/App";
import RegisterPage from "../components/pages/ReqisterPage/RegisterPage";
import { paths } from "./paths/paths";
import LoginPage from "../components/pages/LoginPage/LoginPage";
import HomePage from "../components/pages/HomePage/HomePage";
import AddTrackPage from "../components/pages/AddTrackPage/AddTrackPage";

const routes: RouteObject[] = [
  {
    path: "/",
    element: <App />,
    children: [
      {
        index: true,
        element: <Navigate to={paths.login} replace />,
      },
      { path: paths.register, element: <RegisterPage /> },
      { path: paths.login, element: <LoginPage /> },
      { path: paths.home, element: <HomePage /> },
      { path: paths.add, element: <AddTrackPage /> },
    ],
  },
];

const appRouter = createBrowserRouter(routes);

export default appRouter;
