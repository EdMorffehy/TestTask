import { FC, useCallback } from "react";
import { generatePath, useNavigate } from "react-router-dom";

import { RouteEnum } from "@shared/enums";
import { useAppDispatch, useAppSelector, useForm, useNotification, useRequests } from "@shared/hooks";
import { selectStepThreeUserData } from "@shared/redux/selectors/userSelectors";
import { Loading, TextArea } from "@shared/components";
import Notification from "@shared/Dialogs";
import { setReset } from "@shared/redux/reducers/userReducer";

import { StepThreeFormValidationData, stepThreeValidationSchema } from "../../constants/stepThreeValidation";
import StepFormLayout from "../../layouts/StepFormLayout";

const StepThreeForm: FC = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const { isLoading, getError } = useRequests();
  const { modal, onOpen, onClose } = useNotification();

  const defaultValues = useAppSelector(selectStepThreeUserData);

  const { register, errors, handleSubmit } = useForm<StepThreeFormValidationData>(stepThreeValidationSchema, {
    defaultValues
  });

  const handleOnGoBack = (): void => {
    navigate(generatePath(RouteEnum.FORM, { stepId: "2" }));
  };

  const handleGoToHome = useCallback(() => {
    navigate(RouteEnum.HOME);
  }, [navigate]);

  const handleOnSubmit = useCallback(async (): Promise<void> => {
    try {
      const result = await getError();
      if (result.message === "success") {
        dispatch(setReset());
        onOpen(<Notification status='success' onClose={onClose} onButtonClick={handleGoToHome} />);
      }
    } catch (e) {
      onOpen(<Notification status='error' onClose={onClose} onButtonClick={handleGoToHome} />);
    }
  }, [dispatch, getError, handleGoToHome, onClose, onOpen]);

  if (isLoading) {
    return <Loading />;
  }

  return (
    <StepFormLayout fullWidth hasGoBack lastStep onGoBack={handleOnGoBack} onGoForward={handleSubmit(handleOnSubmit)}>
      <TextArea label='О себе' {...register("about")} isError={!!errors.about} errorText={errors.about?.message} />
      {modal}
    </StepFormLayout>
  );
};

export default StepThreeForm;
