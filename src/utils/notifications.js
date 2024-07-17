import { notify } from "@kyvg/vue3-notification";

export const notification = {
  info(text, title = "Info", duration = 10000) {
    notify({
      text,
      title,
      duration,
    });
  },
  success(text, title = "Success", duration = 10000) {
    notify({
      type: "success",
      text,
      title,
      duration,
    });
  },
  error(text, title = "Error", duration = 10000) {
    notify({
      type: "error",
      text,
      title,
      duration,
    });
  },
  warn(text, title = "Warn", duration = 10000) {
    notify({
      type: "warn",
      text,
      title,
      duration,
    });
  },
};
