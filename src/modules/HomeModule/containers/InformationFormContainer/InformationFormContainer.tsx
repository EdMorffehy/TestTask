import { FC } from "react";
import { generatePath, useNavigate } from "react-router-dom";

import { useForm } from "@shared/hooks";
import { RouteEnum } from "@shared/enums";

import { FormValidationData, validationSchema } from "../../constants/validationSchema";
import FORM_VALUES from "../../constants/formValues";
import InformationForm from "../../components/InformationForm";

const InformationFormContainer: FC = () => {
  const navigate = useNavigate();

  const { register, errors, handleSubmit, control } = useForm<FormValidationData>(validationSchema, {
    defaultValues: FORM_VALUES
  });

  const handleOnSubmit = (): void => {
    navigate(generatePath(RouteEnum.FORM, { stepId: "1" }));
  };

  return (
    <InformationForm register={register} control={control} errors={errors} onSubmit={handleSubmit(handleOnSubmit)} />
  );
};

export default InformationFormContainer;
