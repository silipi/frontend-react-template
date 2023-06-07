import * as yup from "yup";

export const registerSchema = {
  username: yup.string().min(4).max(16).required(),
  name: yup.string().required(),
  email: yup.string().email().required(),
  password: yup.string().min(8).max(64).required(),
};
