"use client";

import { create } from "zustand";
import { persist } from "zustand/middleware";

interface AuthUser {
  userId: string;
  email: string;
  role: "ADMIN" | "DALG" | "DPRO";
  name: string;
}

interface AuthStore {
  user: AuthUser | null;
  token: string | null;
  setUser: (user: AuthUser, token: string) => void;
  logout: () => void;
}

export const useAuthStore = create<AuthStore>()(
  persist(
    (set) => ({
      user: null,
      token: null,
      setUser: (user, token) => set({ user, token }),
      logout: () => {
        set({ user: null, token: null });
        fetch("/api/auth/logout", { method: "POST" });
      },
    }),
    { name: "ws_auth" }
  )
);
