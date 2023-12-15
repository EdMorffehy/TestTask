import { FC } from "react";

import cl from "./Loading.module.css";

const Loading: FC = () => (
  <div className={cl.Loading}>
    <div className={cl.LoadingInner}>
      <div />
      <div />
    </div>
  </div>
);

export default Loading;
