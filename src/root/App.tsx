import { FC } from "react";
import { RouterProvider } from "react-router-dom";
import { setLocale } from "yup";

import ERROR_MESSAGES from "@shared/constants";

import routes from "./routes";

setLocale(ERROR_MESSAGES);

const App: FC = () => <RouterProvider router={routes} />;

export default App;
