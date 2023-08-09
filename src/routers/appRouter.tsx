import { RouteObject, createBrowserRouter } from "react-router-dom";
import App from "../components/App/App";
import RegisterPage from "../components/pages/ReqisterPage/RegisterPage";

const routes: RouteObject[] = [
  {
    path: "/",
    element: <App />,
    children: [{ path: "/register", element: <RegisterPage /> }],
  },
];

const appRouter = createBrowserRouter(routes);

export default appRouter;
