import { array, InferType, number, object, ObjectSchema, string } from "yup";

import { IStepTwoUserData } from "@shared/types";

export const stepTwoValidationSchema: ObjectSchema<Partial<IStepTwoUserData>> = object({
  advantages: array().of(
    object({
      value: string().required()
    })
  ),
  radio: string().default("1"),
  checkbox: array().of(
    object({
      value: number().required()
    })
  )
});

export type StepTwoFormValidationData = InferType<typeof stepTwoValidationSchema>;
