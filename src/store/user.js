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
  let user;

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

    user = auth.currentUser;

    router.push("/login");
  }

  async function login(details) {}

  async function logout() {}

  return { user, register, login, logout };
});
