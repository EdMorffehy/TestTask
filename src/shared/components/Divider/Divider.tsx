import { FC } from "react";

import cl from "./Divider.module.css";

interface IDividerProps {
  variant?: "horizontal" | "vertical";
}

const Divider: FC<IDividerProps> = ({ variant = "horizontal" }) => (
  <div data-variant={variant} className={cl.Divider} />
);

export default Divider;
