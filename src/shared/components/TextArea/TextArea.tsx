import { forwardRef, HTMLAttributes } from "react";

import cl from "./TextArea.module.css";

interface ITextAreaProps extends HTMLAttributes<HTMLTextAreaElement> {
  label?: string;
  className?: string;
  isError?: boolean;
  errorText?: string;
  rows?: number;
}

const TextArea = forwardRef<HTMLTextAreaElement, ITextAreaProps>(
  ({ label, className, isError, errorText, rows = 3, ...rest }, ref) => (
    <div className={`${cl.TextAreaContainer} ${className}`}>
      {label ? <p className={cl.Label}>{label}</p> : null}
      <textarea ref={ref} className={`${cl.TextArea} ${isError ? cl.isError : ""}`} rows={rows} {...rest} />
      {isError && errorText ? <p className={cl.Error}>{errorText}</p> : null}
    </div>
  )
);

export default TextArea;
