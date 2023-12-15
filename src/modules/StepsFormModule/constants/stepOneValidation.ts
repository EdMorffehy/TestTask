import { InferType, object, ObjectSchema, string } from "yup";

import { IStepOneUserData } from "@shared/types";
import MessagesEnum from "@shared/enums/messages.enum";

export const stepOneValidationSchema: ObjectSchema<Partial<IStepOneUserData>> = object({
  nickname: string()
    .required()
    .max(30, MessagesEnum.NICKNAME_MAX_VALUE)
    .matches(/^[^!@#$%^&*)(':;]*$/, MessagesEnum.NICKNAME_SPECIAL_VALUE),
  name: string()
    .required()
    .max(50, MessagesEnum.NAME_MAX_VALUE)
    .matches(/^[^!@#$%^&*)(':;\d]*$/, MessagesEnum.NAME_WORDS_VALUE),
  surname: string()
    .required()
    .max(50, MessagesEnum.NAME_MAX_VALUE)
    .matches(/^[^!@#$%^&*)(':;\d]*$/, MessagesEnum.NAME_WORDS_VALUE),
  sex: string().oneOf(["man", "woman"]).required()
});

export type StepOneFormValidationData = InferType<typeof stepOneValidationSchema>;
