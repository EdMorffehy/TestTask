import { IValue } from "@shared/types/global.types";

export interface IInformationDTO {
  phone: string;
  email: string;
}

export interface IStepOneUserData {
  nickname: string;
  name: string;
  surname: string;
  sex: "man" | "woman";
}

export interface IStepTwoUserData {
  advantages: IValue<string>[];
  radio: string;
  checkbox: IValue<number>[];
}

export interface IStepThreeUserData {
  about: string;
}

export interface IUserInitialState {
  stepOneForm: IStepOneUserData;
  stepTwoForm: IStepTwoUserData;
  stepThreeForm: IStepThreeUserData;
}

export interface ISetUserData<Data extends object> {
  infoType: keyof Data;
  value: Data[keyof Data];
}
