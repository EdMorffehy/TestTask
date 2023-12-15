/// <reference types="vite/client" />
/// <reference types="vite-plugin-svgr/client" />

import { FC, ReactNode } from "react";

declare global {
  type FCC<P = object> = FC<{ children?: ReactNode } & P>;
}
