import { CSSProperties, MouseEvent } from "react";

import cl from "./Button.module.css";

interface IButtonProps {
  variant?: "contained" | "outlined";
  disabled?: boolean;
  className?: string;
  width?: CSSProperties["width"];
  height?: CSSProperties["height"];
  padding?: CSSProperties["padding"];
  fontSize?: CSSProperties["fontSize"];
  onClick?: (event?: MouseEvent<HTMLButtonElement>) => void;
}

const Button: FCC<IButtonProps> = ({ children, variant = "contained", className, disabled, onClick, ...styles }) => (
  <button
    type='button'
    data-variant={variant}
    className={`${cl.Button} ${className}`}
    style={styles}
    disabled={disabled}
    onClick={onClick}
  >
    {children}
  </button>
);

export default Button;
