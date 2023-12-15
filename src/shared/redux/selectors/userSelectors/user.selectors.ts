import { IStepOneUserData, IStepTwoUserData, IStepThreeUserData } from "@shared/types";
import { RootState } from "@shared/redux";

export const selectStepOneUserData = (state: RootState): IStepOneUserData => state.user.stepOneForm;
export const selectStepTwoUserData = (state: RootState): IStepTwoUserData => state.user.stepTwoForm;
export const selectStepThreeUserData = (state: RootState): IStepThreeUserData => state.user.stepThreeForm;
