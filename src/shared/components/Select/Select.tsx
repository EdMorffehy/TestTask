import { forwardRef, HTMLAttributes } from "react";

import { IOptions } from "@shared/types";

import cl from "./Select.module.css";

interface ISelectProps extends HTMLAttributes<HTMLSelectElement> {
  className?: string;
  label?: string;
  isError?: boolean;
  errorText?: string;
  options: IOptions[];
}

const Select = forwardRef<HTMLSelectElement, ISelectProps>(
  ({ options, className, isError, errorText, label, ...rest }, ref) => (
    <div className={`${cl.SelectContainer} ${className}`}>
      {label ? <p className={cl.Label}>{label}</p> : null}
      <select ref={ref} className={`${cl.Select} ${isError ? cl.isError : ""}`} {...rest}>
        {options.map(({ label: l, value }) => (
          <option key={value} value={value}>
            {l}
          </option>
        ))}
      </select>
      {isError && errorText ? <p className={cl.Error}>{errorText}</p> : null}
    </div>
  )
);

export default Select;
