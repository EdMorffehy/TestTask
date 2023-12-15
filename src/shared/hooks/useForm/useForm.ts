import {
  Control,
  FieldErrors,
  FieldValues,
  Resolver,
  useForm as useReactHookForm,
  UseFormHandleSubmit,
  UseFormProps,
  UseFormRegister
} from "react-hook-form";
import { ObjectSchema } from "yup";
import { yupResolver } from "@hookform/resolvers/yup";

interface IUseFormReturn<TFieldValues extends FieldValues = FieldValues> {
  control: Control<TFieldValues>;
  register: UseFormRegister<TFieldValues>;
  handleSubmit: UseFormHandleSubmit<TFieldValues>;
  errors: FieldErrors<TFieldValues>;
}

const useForm = <TFieldValues extends FieldValues = FieldValues, TContext = any>(
  schema: ObjectSchema<TFieldValues>,
  options?: UseFormProps<TFieldValues, TContext>
): IUseFormReturn<TFieldValues> => {
  const {
    control,
    register,
    handleSubmit,
    formState: { errors }
  } = useReactHookForm<TFieldValues, TContext>({
    mode: "onSubmit",
    reValidateMode: "onChange",
    // eslint-disable-next-line @typescript-eslint/no-unsafe-call
    resolver: yupResolver(schema) as unknown as Resolver<TFieldValues, TContext>,
    ...options
  });

  return {
    control,
    register,
    handleSubmit,
    errors
  };
};

export default useForm;
