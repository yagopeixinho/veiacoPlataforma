import * as Yup from "yup";
import * as messages from "./messages";

export const userSchema = Yup.object({
  name: Yup.string().required(messages.REQUIRED),
  email: Yup.string()
    .email("O e-mail deve ser válido")
    .required(messages.REQUIRED),
  password: Yup.string().required(messages.REQUIRED),
});
