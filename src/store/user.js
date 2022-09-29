import { defineStore } from "pinia";
import { ref, computed } from "vue";
import router from "../router";
import { auth } from "../firebase";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
} from "firebase/auth";

export const useUserStore = defineStore("user", () => {
  const user = ref();

  // function clearUser() {
  //   user.value = null;
  // }

  async function register(details) {
    const { email, password } = details;

    try {
      await createUserWithEmailAndPassword(auth, email, password);
    } catch (error) {
      switch (error.code) {
        case "auth/email-already-in-use":
          alert("email already in use");
          break;
        case "auth/invalid-email":
          alert("Invalid email");
          break;
        case "auth/operation-not-allowed":
          alert("Operation not allowed");
          break;
        case "auth/weak-password":
          alert("Weak password");
          break;
        default:
          alert("Something went wrong");
      }

      return;
    }

    user.value = auth.currentUser;

    router.push("/login");
  }

  async function login(details) {
    const { email, password } = details;

    try {
      await signInWithEmailAndPassword(auth, email, password);
    } catch (err) {
      switch (err.code) {
        case "auth/user-not-found":
          alert("User not found");
          break;
        case "auth/wrong-password":
          alert("Password is incorrect");
          break;
        default:
          alert(err.message);
      }

      return;
    }

    user.value = auth.currentUser;
    router.push("/checkout");
  }

  async function logout() {
    await signOut(auth);

    user.value = null;
    router.push("/login");
  }

  return { user, register, login, logout };
});
