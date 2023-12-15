import { forwardRef, HTMLAttributes } from "react";

import cl from "./CheckBox.module.css";

interface ICheckBoxProps extends HTMLAttributes<HTMLInputElement> {
  label?: string;
  className?: string;
  checkBoxLabel?: string;
}

const CheckBox = forwardRef<HTMLInputElement, ICheckBoxProps>(
  ({ label, className, checkBoxLabel, onChange, ...rest }, ref) => (
    <div className={`${cl.CheckBoxContainer} ${className}`}>
      {label ? <p className={cl.Label}>{label}</p> : null}
      <div className={cl.CheckBoxInner}>
        <input type='checkbox' ref={ref} {...rest} />
        {checkBoxLabel ? <p>{checkBoxLabel}</p> : null}
      </div>
    </div>
  )
);

export default CheckBox;
