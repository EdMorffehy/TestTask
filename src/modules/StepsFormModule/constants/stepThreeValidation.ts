import { InferType, object, ObjectSchema, string } from "yup";

import { IStepThreeUserData } from "@shared/types";
import { MessagesEnum } from "@shared/enums";

export const stepThreeValidationSchema: ObjectSchema<Partial<IStepThreeUserData>> = object({
  about: string().required().max(200, MessagesEnum.ABOUT_MAX_VALUE)
});

export type StepThreeFormValidationData = InferType<typeof stepThreeValidationSchema>;
