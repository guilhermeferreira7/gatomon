import {
  createUserWithEmailAndPassword,
  getAuth,
  updateProfile,
} from "firebase/auth";

export async function createUser(email, password) {
  const auth = getAuth();
  return await createUserWithEmailAndPassword(auth, email, password);
}

export async function editUserPhotoURL(user, photoURL) {
  return await updateProfile(user, { photoURL });
}

export async function editUserName(user, displayName) {
  return await updateProfile(user, { displayName });
}
