import { InferType, object, ObjectSchema, string } from "yup";

import { IInformationDTO } from "@shared/types";
import { MessagesEnum } from "@shared/enums";

const phoneRegExp = /^\+7 \(\d{3}\) \d{3}-\d{2}-\d{2}$/;

export const validationSchema: ObjectSchema<Partial<IInformationDTO>> = object({
  phone: string().matches(phoneRegExp, MessagesEnum.PHONE_VALID),
  email: string().email(MessagesEnum.EMAIL_VALID).required()
});

export type FormValidationData = InferType<typeof validationSchema>;
