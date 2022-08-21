import * as yup from "yup";

export const LoginSchema = yup.object({
  email: yup.string().required(),
  password: yup.string().required(),
});
