import { FC } from "react";
import { useParams } from "react-router-dom";

import { IStepsOptions, IStepsParams } from "@shared/types";
import { Steps } from "@shared/components";

const ModuleSteps: FC = () => {
  const { stepId } = useParams() as IStepsParams;

  const stepsOptions: IStepsOptions[] = [
    {
      label: "1",
      value: "1"
    },
    {
      label: "2",
      value: "2"
    },
    {
      label: "3",
      value: "3"
    }
  ];

  return <Steps stepOptions={stepsOptions} stepValue={stepId || "1"} />;
};

export default ModuleSteps;
