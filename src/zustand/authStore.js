import { create } from "zustand";
import { persist } from "zustand/middleware";

export const useUserStore = create(
  persist(
    (set) => ({
      user: null, // initial state of user

      // set user data received after login to user state
      setUser: (userData) =>
        set({
          user: userData,
        }),

      // clear user state to initial state
      clearUser: () =>
        set({
          user: null,
        }),
    }),
    {
      name: "auth", // key in local storage
    }
  )
);
