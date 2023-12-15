import { FC, Suspense } from "react";
import { Outlet } from "react-router-dom";

import { Loading } from "@shared/components";

import cl from "./RootLayout.module.css";

const RootLayout: FC = () => (
  <div className={cl.RootLayout}>
    <div className={cl.RootLayoutInner}>
      <Suspense fallback={<Loading />}>
        <Outlet />
      </Suspense>
    </div>
  </div>
);

export default RootLayout;
