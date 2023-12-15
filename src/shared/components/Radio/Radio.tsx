import { forwardRef, HTMLAttributes } from "react";

import cl from "./Radio.module.css";

interface IRadioProps extends HTMLAttributes<HTMLInputElement> {
  label?: string;
  className?: string;
  groups: string[];
}

const Radio = forwardRef<HTMLInputElement, IRadioProps>(({ label, groups, className, ...rest }, ref) => (
  <div className={`${cl.RadioContainer} ${className}`}>
    {label ? <p className={cl.Label}>{label}</p> : null}
    {groups.map(radioLabel => (
      <div key={radioLabel} className={cl.RadioInner}>
        <input type='radio' ref={ref} value={radioLabel} {...rest} />
        <p>{radioLabel}</p>
      </div>
    ))}
  </div>
));

export default Radio;
