import { FC } from "react";

import { Divider } from "@shared/components";

import AccountContainer from "./containers/AccountContainer";
import cl from "./HomeModule.module.css";
import InformationFormContainer from "./containers/InformationFormContainer";

const HomeModule: FC = () => (
  <div className={cl.HomeModule}>
    <AccountContainer />
    <Divider />
    <InformationFormContainer />
  </div>
);

export default HomeModule;
