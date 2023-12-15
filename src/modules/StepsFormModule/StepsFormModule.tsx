import { FC } from "react";

import ModuleSteps from "./containers/ModuleSteps";
import ModuleForm from "./containers/ModuleForm";
import cl from "./StepsFormModule.module.css";

const StepsFormModule: FC = () => (
  <div className={cl.StepsFormModule}>
    <ModuleSteps />
    <ModuleForm />
  </div>
);

export default StepsFormModule;
