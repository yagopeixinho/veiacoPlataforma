import * as Yup from "yup";
import * as messages from "./messages";

export const veiacoSchema = Yup.object({
  name: Yup.string().required(messages.REQUIRED),
});
