import { createSlice, PayloadAction } from "@reduxjs/toolkit";

import { IStepOneUserData, IStepThreeUserData, IStepTwoUserData, IUserInitialState } from "@shared/types";

const initialState: IUserInitialState = {
  stepOneForm: {
    nickname: "",
    name: "",
    surname: "",
    sex: "man"
  },
  stepTwoForm: {
    advantages: [
      {
        value: ""
      }
    ],
    radio: "1",
    checkbox: []
  },
  stepThreeForm: {
    about: ""
  }
};

export const userReducer = createSlice({
  name: "userReducer",
  initialState,
  reducers: {
    setReset: () => initialState,
    setStepOneUserData: (state, { payload }: PayloadAction<IStepOneUserData>) => ({
      ...state,
      stepOneForm: payload
    }),
    setStepTwoUserData: (state, { payload }: PayloadAction<IStepTwoUserData>) => ({
      ...state,
      stepTwoForm: payload
    }),
    setStepThreeUserData: (state, { payload }: PayloadAction<IStepThreeUserData>) => ({
      ...state,
      stepThreeForm: payload
    })
  }
});

export const { setReset, setStepOneUserData, setStepTwoUserData, setStepThreeUserData } = userReducer.actions;
