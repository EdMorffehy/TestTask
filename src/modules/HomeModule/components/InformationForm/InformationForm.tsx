import { FC } from "react";
import { Control, FieldErrors, useController, UseFormRegister } from "react-hook-form";

import { Button, Input, InputMask } from "@shared/components";

import { FormValidationData } from "../../constants/validationSchema";
import cl from "./InformationForm.module.css";

interface IInformationFormProps {
  control: Control<FormValidationData>;
  register: UseFormRegister<FormValidationData>;
  errors: FieldErrors<FormValidationData>;
  onSubmit: () => void;
}

const InformationForm: FC<IInformationFormProps> = ({ control, register, errors, onSubmit }) => {
  const {
    field: { value, onChange }
  } = useController<FormValidationData>({
    control,
    name: "phone"
  });

  return (
    <div className={cl.InformationForm}>
      <InputMask
        mask={["+", "7", " ", "(", /\d/, /\d/, /\d/, ")", " ", /\d/, /\d/, /\d/, "-", /\d/, /\d/, "-", /\d/, /\d/]}
        showMask
        label='Номер телефона'
        isError={!!errors.phone}
        errorText={errors.phone?.message}
        value={value}
        onChange={onChange}
      />
      <Input label='Email' {...register("email")} isError={!!errors.email} errorText={errors.email?.message} />
      <Button onClick={onSubmit}>Начать</Button>
    </div>
  );
};

export default InformationForm;
