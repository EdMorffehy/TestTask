import { TypedUseSelectorHook, useSelector } from "react-redux";

import { RootState } from "@shared/redux";

const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;

export default useAppSelector;
