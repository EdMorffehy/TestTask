import { useCallback, useMemo, useState } from "react";

interface IUseRequestsReturn {
  isLoading: boolean;
  getSuccess: () => Promise<{ message: "success" }>;
  getError: () => Promise<Error>;
  getTimeOut: () => Promise<Error>;
}

const useRequests = (): IUseRequestsReturn => {
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const getWithSuccess = useCallback(
    (cb: () => Promise<void>): (() => Promise<{ message: "success" }>) =>
      // eslint-disable-next-line func-names
      function (): Promise<{ message: "success" }> {
        setIsLoading(true);
        return new Promise(resolve => {
          setTimeout(() => {
            // eslint-disable-next-line @typescript-eslint/ban-ts-comment
            // @ts-expect-error
            // eslint-disable-next-line @typescript-eslint/no-unsafe-argument,@typescript-eslint/ban-ts-comment
            cb.call(this);
            resolve({ message: "success" });
            setIsLoading(false);
          }, 1500);
        });
      },
    []
  );

  const getWithError = useCallback(
    (cb: () => Promise<void>, error: Error): (() => Promise<Error>) =>
      // eslint-disable-next-line func-names
      function (): Promise<Error> {
        setIsLoading(true);
        return new Promise((_, reject) => {
          setTimeout(() => {
            // eslint-disable-next-line @typescript-eslint/ban-ts-comment
            // @ts-expect-error
            // eslint-disable-next-line @typescript-eslint/no-unsafe-argument,@typescript-eslint/ban-ts-comment
            cb.call(this);
            reject(error);
            setIsLoading(false);
          }, 1500);
        });
      },
    []
  );

  const getWithTimeOutError = useCallback(
    (cb: () => Promise<void>): (() => Promise<Error>) =>
      // eslint-disable-next-line func-names
      function (): Promise<Error> {
        setIsLoading(true);
        return new Promise((_, reject) => {
          setTimeout(() => {
            // eslint-disable-next-line @typescript-eslint/ban-ts-comment
            // @ts-expect-error
            // eslint-disable-next-line @typescript-eslint/no-unsafe-argument,@typescript-eslint/ban-ts-comment
            cb.call(this);
            reject(new Error("TIMEOUT_ERROR"));
            setIsLoading(false);
          }, 1500);
        });
      },
    []
  );

  const getSuccess = useMemo(() => getWithSuccess(async () => {}), [getWithSuccess]);
  const getError = useMemo(() => getWithError(async () => {}, new Error("Failed")), [getWithError]);
  const getTimeOut = useMemo(() => getWithTimeOutError(async () => {}), [getWithTimeOutError]);

  return {
    isLoading,
    getSuccess,
    getError,
    getTimeOut
  };
};

export default useRequests;
