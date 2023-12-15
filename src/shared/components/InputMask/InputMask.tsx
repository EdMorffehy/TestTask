import { FC } from "react";
import ReactInputMask, { MaskedInputProps } from "react-text-mask";

import cl from "./InputMask.module.css";

interface IInputMaskProps extends MaskedInputProps {
  label?: string;
  isError?: boolean;
  errorText?: string;
}

const InputMask: FC<IInputMaskProps> = ({ label, isError, errorText, className, ...rest }) => (
  <div className={`${cl.InputMaskContainer} ${className}`}>
    {label ? <p className={cl.Label}>{label}</p> : null}
    <ReactInputMask className={`${cl.InputMask} ${isError ? cl.isError : ""}`} {...rest} />
    {isError && errorText ? <p className={cl.Error}>{errorText}</p> : null}
  </div>
);

export default InputMask;
