import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../components/main-layout";
import Login from "../pages/login";
import Admines from "../pages/admins";
import Students from "../pages/students";
import Course from "../pages/courses/course";

import { PrivateRout } from "./private-rout";
import Teachers from "../pages/teachers";
import Menegers from "../pages/menegers";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <PrivateRout />,
    children: [
      {
        path: "/",
        element: <MainLayout />,
        children: [
          {
            path: "/menegers",
            element: <Menegers />,
          },
          {
            path: "/admins",
            element: <Admines />,
          },

          {
            path: "/teachers",
            element: <Teachers />,
          },
          {
            path: "/students",
            element: <Students />,
          },
          {
            path: "/courses",
            element: <Course />,
          },
        ],
      },
    ],
  },
  {
    path: "/login",
    element: <Login />,
  },
]);
