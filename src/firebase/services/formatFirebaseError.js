export default function formatFirebaseError(firebaseErrorCode) {
  switch (firebaseErrorCode) {
    case "auth/invalid-email":
      return "Email inválido";
    case "auth/weak-password":
      return "A senha precisa ter pelo menos 6 caracteres";
    case "auth/missing-email":
      return "Digite um email";
    case "auth/email-already-in-use":
      return "Email já cadastrado";
  }
  return "Algo deu errado";
}
