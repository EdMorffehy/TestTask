import { FC } from "react";

import { Button } from "@shared/components";

import cl from "../../StepsFormModule.module.css";

interface IStepsButtonsProps {
  lastStep?: boolean;
  hasGoBack?: boolean;
  onGoBack?: () => void;
  onGoForward?: () => void;
}

const StepsButtons: FC<IStepsButtonsProps> = ({ hasGoBack, lastStep, onGoBack, onGoForward }) => (
  <div className={cl.StepFormButtons}>
    {hasGoBack ? (
      <Button variant='outlined' onClick={onGoBack}>
        Назад
      </Button>
    ) : (
      <div />
    )}
    <Button onClick={onGoForward}>{lastStep ? "Отправить" : "Далее"}</Button>
  </div>
);

export default StepsButtons;
