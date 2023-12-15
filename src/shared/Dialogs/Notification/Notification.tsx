import { FC, MouseEvent, useRef } from "react";

import { Button, Text } from "@shared/components";
import SuccessIcon from "@shared/assets/success.svg?react";
import ErrorIcon from "@shared/assets/error.svg?react";

import cl from "./Notification.module.css";

interface INotificationProps {
  status: "success" | "error";
  onClose?: () => void;
  onButtonClick?: (event?: MouseEvent<HTMLButtonElement>) => void;
}

const Notification: FC<INotificationProps> = ({ status, onClose, onButtonClick }) => {
  const overRef = useRef<HTMLDivElement>(null);

  const Icon = status === "success" ? SuccessIcon : ErrorIcon;

  const header = status === "success" ? "Форма успешно отправлена" : "Ошибка";
  const buttonText = status === "success" ? "На главную" : "Закрыть";

  const handleOnOverClick = (event: MouseEvent<HTMLDivElement>): void => {
    if (overRef.current === event.target && onClose) {
      onClose();
    }
  };

  return (
    <div ref={overRef} className={cl.NotificationOver} onClick={handleOnOverClick}>
      <div className={cl.NotificationContainer}>
        <div className={cl.NotificationHeader} data-status={status}>
          <Text className={cl.NotificationHeaderText}>{header}</Text>
          <div className={cl.NotificationClose} onClick={onClose} />
        </div>
        <div className={cl.NotificationMain}>
          <Icon />
        </div>
        <div className={cl.NotificationFooter}>
          <Button onClick={status === "success" ? onButtonClick : onClose}>{buttonText}</Button>
        </div>
      </div>
    </div>
  );
};

export default Notification;
