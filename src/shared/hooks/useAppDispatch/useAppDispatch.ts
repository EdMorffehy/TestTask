import { useDispatch } from "react-redux";

import { AppDispatch } from "@shared/redux";

const useAppDispatch: () => AppDispatch = useDispatch;

export default useAppDispatch;
