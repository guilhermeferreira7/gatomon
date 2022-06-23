import I18n from "i18n-js";

export default function formatFirebaseError(firebaseErrorCode) {
  switch (firebaseErrorCode) {
    case "auth/invalid-email":
      return I18n.t("invalidEmail");
    case "auth/weak-password":
      return I18n.t("weakPassword");
    case "auth/missing-email":
      return I18n.t("missingEmail");
    case "auth/email-already-in-use":
      return I18n.t("emailInUse");
  }
  return I18n.t("error");
}
