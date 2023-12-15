import { forwardRef, HTMLAttributes } from "react";

import cl from "./Input.module.css";

interface IInputProps extends HTMLAttributes<HTMLInputElement> {
  label?: string;
  isError?: boolean;
  errorText?: string;
}

const Input = forwardRef<HTMLInputElement, IInputProps>(({ label, className, isError, errorText, ...rest }, ref) => (
  <div className={`${cl.InputContainer} ${className}`}>
    {label ? <p className={cl.Label}>{label}</p> : null}
    <input ref={ref} className={`${cl.Input} ${isError ? cl.isError : ""}`} {...rest} />
    {isError && errorText ? <p className={cl.Error}>{errorText}</p> : null}
  </div>
));

export default Input;
