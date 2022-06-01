import { createUserWithEmailAndPassword, getAuth } from "firebase/auth";

export default async function createUser(email, password, name) {
  const auth = getAuth();
  return await createUserWithEmailAndPassword(auth, email, password);
}
