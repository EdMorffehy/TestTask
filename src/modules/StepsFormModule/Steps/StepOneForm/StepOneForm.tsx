import { FC } from "react";
import { generatePath, useNavigate } from "react-router-dom";

import { useAppDispatch, useAppSelector, useForm } from "@shared/hooks";
import { selectStepOneUserData } from "@shared/redux/selectors/userSelectors";
import { Input, Select } from "@shared/components";
import { IOptions, IStepOneUserData } from "@shared/types";
import { RouteEnum } from "@shared/enums";
import { setStepOneUserData } from "@shared/redux/reducers/userReducer";

import { StepOneFormValidationData, stepOneValidationSchema } from "../../constants/stepOneValidation";
import StepFormLayout from "../../layouts/StepFormLayout";

const StepOneForm: FC = () => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const defaultValues = useAppSelector(selectStepOneUserData);

  const { register, errors, handleSubmit } = useForm<StepOneFormValidationData>(stepOneValidationSchema, {
    defaultValues
  });

  const options: IOptions[] = [
    {
      label: "мужской",
      value: "man"
    },
    {
      label: "женский",
      value: "woman"
    }
  ];

  const handleOnSubmit = (formValues: StepOneFormValidationData): void => {
    dispatch(setStepOneUserData(formValues as IStepOneUserData));
    navigate(generatePath(RouteEnum.FORM, { stepId: "2" }));
  };

  return (
    <StepFormLayout onGoForward={handleSubmit(handleOnSubmit)}>
      <Input
        {...register("nickname")}
        label='Никнейм'
        isError={!!errors.nickname}
        errorText={errors.nickname?.message}
      />
      <Input {...register("name")} label='Имя' isError={!!errors.name} errorText={errors.name?.message} />
      <Input {...register("surname")} label='Фамилия' isError={!!errors.surname} errorText={errors.surname?.message} />
      <Select
        {...register("sex")}
        label='Пол'
        options={options}
        isError={!!errors.sex}
        errorText={errors.sex?.message}
      />
    </StepFormLayout>
  );
};

export default StepOneForm;
