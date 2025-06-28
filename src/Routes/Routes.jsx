import { createBrowserRouter } from "react-router";
import HomeLayout from "../Layout/HomeLayout/HomeLayout";
import Home from "../Pages/Home/Home";
import Projects from "../Pages/Projects/Projects";
import ProjectDetails from "../Pages/ProjectDetails/ProjectDetails";
import ErrorPage from "../Components/Error/ErrorPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomeLayout />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "projects",
        Component: Projects,
      },
      {
        path: "/project/:id",
        element: <ProjectDetails />,
      },
    ],
  },
  {
    path : "/*",
    Component : ErrorPage,
  }
]);

export default router;
