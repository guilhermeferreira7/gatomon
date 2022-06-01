import {
  createUserWithEmailAndPassword,
  getAuth,
  updateProfile,
} from "firebase/auth";

export default function createUser(email, password, name) {
  const auth = getAuth();
  createUserWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      const user = userCredential.user;
      updateProfile(user, { displayName: name });
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
    });
}
