import { FC, ReactNode } from "react";
import { useParams } from "react-router-dom";

import { IStepsParams } from "@shared/types";

import { StepOneForm, StepTwoForm, StepThreeForm } from "../../Steps";

const ModuleForm: FC = () => {
  const { stepId } = useParams() as IStepsParams;

  const renderStepPage = (): ReactNode => {
    switch (stepId) {
      case "1":
        return <StepOneForm />;
      case "2":
        return <StepTwoForm />;
      case "3":
        return <StepThreeForm />;
      default:
        return <StepOneForm />;
    }
  };

  return renderStepPage();
};

export default ModuleForm;
