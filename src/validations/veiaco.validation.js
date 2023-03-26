import * as Yup from "yup";
import * as messages from "./messages";

export const veiacoSchema = Yup.object({
  name: Yup.string().required(messages.REQUIRED),
  email: Yup.string().email("O e-mail deve ser válido"),
  phone: Yup.string(),
  occupation: Yup.string(),
});
