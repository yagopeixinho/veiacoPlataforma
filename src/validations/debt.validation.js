import * as Yup from "yup";
import * as messages from "./messages";

export const debtSchema = Yup.object({
  name: Yup.string().required(messages.REQUIRED),
  value: Yup.number().required(messages.REQUIRED),
  categoryId: Yup.string().required(messages.REQUIRED),
  date: Yup.string().required(messages.REQUIRED),
});
