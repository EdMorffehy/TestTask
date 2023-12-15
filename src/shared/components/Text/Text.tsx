import { CSSProperties, FC, MouseEvent, ReactNode } from "react";

import cl from "./Text.module.css";

interface ITextProps {
  children: string;
  prefix?: ReactNode;
  suffix?: ReactNode;
  fontSize?: CSSProperties["fontSize"];
  fontWeight?: CSSProperties["fontWeight"];
  color?: CSSProperties["color"];
  className?: string;
  rootClassName?: string;
  onClick?: (event?: MouseEvent<HTMLDivElement>) => void;
}

const Text: FC<ITextProps> = ({ children, suffix, prefix, className, rootClassName, onClick, ...styles }) => (
  <div className={`${cl.Text} ${rootClassName}`} onClick={onClick}>
    {prefix}
    <p className={`${cl.Paragraph} ${className}`} style={styles}>
      {children}
    </p>
    {suffix}
  </div>
);

export default Text;
