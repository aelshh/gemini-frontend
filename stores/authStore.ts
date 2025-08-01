import { create } from "zustand";
import { persist } from "zustand/middleware";
import { AuthState } from "../types";

interface AuthStore extends AuthState {
  login: (phone: string, countryCode: string) => void;
  logout: () => void;
  setLoading: (loading: boolean) => void;
}

export const useAuthStore = create<AuthStore>()(
  persist(
    (set) => ({
      user: null,
      isAuthenticated: false,
      isLoading: false,
      login: (phone, countryCode) =>
        set({
          user: { id: Date.now().toString(), phone, countryCode },
          isAuthenticated: true,
        }),
      logout: () => set({ user: null, isAuthenticated: false }),
      setLoading: (loading) => set({ isLoading: loading }),
    }),
    { name: "auth-store" }
  )
);
