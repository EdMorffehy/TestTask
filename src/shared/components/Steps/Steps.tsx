import { FC, useEffect, useState } from "react";

import { IStepsOptions } from "@shared/types";

import cl from "./Steps.module.css";

interface IStepsProps {
  stepValue: string;
  stepOptions: IStepsOptions[];
}

const Steps: FC<IStepsProps> = ({ stepOptions, stepValue }) => {
  const [isActive, setIsActive] = useState<string[]>([stepValue]);

  const currentActiveIndex = stepOptions.findIndex(({ value }) => value === stepValue);

  useEffect(() => {
    const activeSteps: string[] = [];
    stepOptions.forEach(({ value }, index) => {
      if (index <= currentActiveIndex) activeSteps.push(value);
    });
    setIsActive(activeSteps);
  }, [currentActiveIndex, stepOptions, stepValue]);

  const getActiveLine = (value: string): "1" | "0" => {
    const options = stepOptions.slice(0, isActive.length - 1);
    return options.some(o => o.value === value) ? "1" : "0";
  };

  const getChecked = (value: string): "1" | "0" => {
    const options = isActive.slice(0, isActive.length - 1);
    return options.some(o => o === value) ? "1" : "0";
  };

  return (
    <div className={cl.StepsContainer}>
      {stepOptions.map(({ label, value }, index) => (
        <div key={label + value} className={cl.StepInner}>
          {index !== stepOptions.length - 1 ? <div className={cl.StepLine} data-active={getActiveLine(value)} /> : null}
          <div className={cl.Steps}>
            <div
              className={cl.StepCircle}
              data-checked={getChecked(value)}
              data-active={isActive.includes(value) ? "1" : "0"}
            />
            <p className={cl.StepLabel} data-active={isActive.includes(value) ? "1" : "0"}>
              {label}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Steps;
