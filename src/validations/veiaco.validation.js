import * as Yup from "yup";
import * as messages from "./messages";

export const veiacoSchema = Yup.object({
  name: Yup.string().required(messages.REQUIRED),
  email: Yup.string()
    .email("O e-mail deve ser válido")
    .required(messages.REQUIRED),
  phone: Yup.string().required(messages.REQUIRED),
  occupation: Yup.string().required(messages.REQUIRED),
});
