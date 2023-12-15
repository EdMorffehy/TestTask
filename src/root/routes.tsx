import { createBrowserRouter } from "react-router-dom";

import { RootLayout } from "@shared/layouts";
import { RouteEnum } from "@shared/enums";

import HomePage from "../pages/HomePage";
import StepsFormPage from "../pages/StepsFormPage";

const routes = createBrowserRouter([
  {
    element: <RootLayout />,
    children: [
      {
        path: RouteEnum.HOME,
        element: <HomePage />
      },
      {
        path: RouteEnum.FORM,
        element: <StepsFormPage />
      }
    ]
  }
]);

export default routes;
