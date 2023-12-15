import { FC } from "react";
import { generatePath, useNavigate } from "react-router-dom";
import { useController, useFieldArray } from "react-hook-form";

import { useAppDispatch, useAppSelector, useForm } from "@shared/hooks";
import { selectStepTwoUserData } from "@shared/redux/selectors/userSelectors";
import { Button, CheckBox, Input, Radio } from "@shared/components";
import { IOptions, IStepTwoUserData } from "@shared/types";
import { RouteEnum } from "@shared/enums";
import { setStepTwoUserData } from "@shared/redux/reducers/userReducer";
import RemoveIcon from "@shared/assets/remove.svg?react";

import clTwo from "./StepTwoForm.module.css";
import { StepTwoFormValidationData, stepTwoValidationSchema } from "../../constants/stepTwoValidation";
import StepFormLayout from "../../layouts/StepFormLayout";

const StepTwoForm: FC = () => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const defaultValues = useAppSelector(selectStepTwoUserData);

  const { register, handleSubmit, control, errors } = useForm<StepTwoFormValidationData>(stepTwoValidationSchema, {
    defaultValues
  });

  const {
    fields: advantagesFields,
    append: advantagesAppend,
    remove: advantagesRemove
  } = useFieldArray<StepTwoFormValidationData>({
    name: "advantages",
    control
  });

  const {
    field: { value: checkboxValue, onChange: checkboxOnChange }
  } = useController<StepTwoFormValidationData>({
    name: "checkbox",
    control
  });

  const radioGroups: string[] = ["1", "2", "3"];
  const checkBoxGroups: IOptions[] = [
    {
      label: "1",
      value: 1
    },
    {
      label: "2",
      value: 2
    },
    {
      label: "3",
      value: 3
    }
  ];

  const handleOnAppendFields = (): void => {
    advantagesAppend({ value: "" });
  };

  const handleOnRemoveFields = (id: number) => () => {
    advantagesRemove(id);
  };

  const handleOnChangeCheckBox = (checkbox: number) => () => {
    if (Array.isArray(checkboxValue)) {
      const filters = (checkboxValue as number[]).includes(checkbox)
        ? (checkboxValue as number[]).filter(c => c !== checkbox)
        : [...checkboxValue, checkbox];
      checkboxOnChange(filters);
    }
  };

  const handleOnSubmit = (formValues: StepTwoFormValidationData): void => {
    dispatch(setStepTwoUserData(formValues as IStepTwoUserData));
    navigate(generatePath(RouteEnum.FORM, { stepId: "3" }));
  };

  const handleOnGoBack = (): void => {
    navigate(generatePath(RouteEnum.FORM, { stepId: "1" }));
  };

  return (
    <StepFormLayout hasGoBack onGoForward={handleSubmit(handleOnSubmit)} onGoBack={handleOnGoBack}>
      <div className={clTwo.StepFormAdvantagesContainer}>
        <div className={clTwo.StepFormAdvantages}>
          <p className={clTwo.StepFormAdvantagesLabel}>Преимущества</p>
          {advantagesFields.map(({ id }, index) => (
            <div key={id} className={clTwo.StepFormAdvantagesInput}>
              <Input
                {...register(`advantages.${index}.value`)}
                isError={!!errors.advantages?.[index]?.value?.message}
                errorText={errors.advantages?.[index]?.value?.message}
              />
              <RemoveIcon style={{ cursor: "pointer" }} onClick={handleOnRemoveFields(index)} />
            </div>
          ))}
        </div>
        <Button variant='outlined' width={44} height={44} fontSize={20} padding={12} onClick={handleOnAppendFields}>
          +
        </Button>
      </div>
      <Radio groups={radioGroups} label='Radio группа' {...register("radio")} />
      <div className={clTwo.StepFormAdvantages}>
        <p className={clTwo.StepFormAdvantagesLabel}>Преимущества</p>
        {checkBoxGroups.map(({ label, value }) => (
          <CheckBox key={label} checkBoxLabel={label} onChange={handleOnChangeCheckBox(value as number)} />
        ))}
      </div>
    </StepFormLayout>
  );
};

export default StepTwoForm;
