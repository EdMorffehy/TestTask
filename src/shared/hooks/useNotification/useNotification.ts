import { ReactNode, useCallback, useState } from "react";

interface IUseNotificationReturn {
  modal: ReactNode;
  onOpen: (notification: ReactNode) => void;
  onClose: () => void;
}
const useNotification = (): IUseNotificationReturn => {
  const [modal, setModal] = useState<ReactNode>(null);

  const handleOnClose = useCallback((): void => {
    setModal(null);
  }, []);

  const handleOnOpen = useCallback((notification: ReactNode): void => {
    setModal(notification);
  }, []);

  return {
    modal,
    onOpen: handleOnOpen,
    onClose: handleOnClose
  };
};

export default useNotification;
