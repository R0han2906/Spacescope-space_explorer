import React, { createContext, useContext, useEffect, useMemo, useState } from "react";
import { apiRequest } from "../lib/api";

type AuthUser = {
  id: string;
  name: string;
  email: string | null;
  avatarUrl: string | null;
  headline: string | null;
  interests: string[];
};

type AuthContextValue = {
  user: AuthUser | null;
  accessToken: string | null;
  isAuthenticated: boolean;
  loading: boolean;
  login: (identifier: string, password: string) => Promise<void>;
  signup: (name: string, password: string, email?: string) => Promise<void>;
  logout: () => Promise<void>;
  refreshSession: () => Promise<boolean>;
};

type AuthApiResponse = {
  success: boolean;
  data: {
    user: AuthUser;
    accessToken: string;
  };
};

const ACCESS_TOKEN_KEY = "spacescope_access_token";

const AuthContext = createContext<AuthContextValue | undefined>(undefined);

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [user, setUser] = useState<AuthUser | null>(null);
  const [accessToken, setAccessToken] = useState<string | null>(null);
  const [loading, setLoading] = useState(true);

  const persistSession = (token: string, authUser: AuthUser) => {
    localStorage.setItem(ACCESS_TOKEN_KEY, token);
    setAccessToken(token);
    setUser(authUser);
  };

  const clearSession = () => {
    localStorage.removeItem(ACCESS_TOKEN_KEY);
    setAccessToken(null);
    setUser(null);
  };

  const refreshSession = async () => {
    try {
      const response = await apiRequest<AuthApiResponse>("/api/auth/refresh-token", {
        method: "POST",
        body: {},
      });
      persistSession(response.data.accessToken, response.data.user);
      return true;
    } catch (_error) {
      clearSession();
      return false;
    }
  };

  const login = async (identifier: string, password: string) => {
    const response = await apiRequest<AuthApiResponse>("/api/auth/login", {
      method: "POST",
      body: { identifier, password },
    });
    persistSession(response.data.accessToken, response.data.user);
  };

  const signup = async (name: string, password: string, email?: string) => {
    const response = await apiRequest<AuthApiResponse>("/api/auth/register", {
      method: "POST",
      body: { name, password, email },
    });
    persistSession(response.data.accessToken, response.data.user);
  };

  const logout = async () => {
    try {
      await apiRequest("/api/auth/logout", { method: "POST", body: {} });
    } finally {
      clearSession();
    }
  };

  useEffect(() => {
    const bootstrapAuth = async () => {
      const token = localStorage.getItem(ACCESS_TOKEN_KEY);
      if (!token) {
        await refreshSession();
        setLoading(false);
        return;
      }

      try {
        const meResponse = await apiRequest<{
          success: boolean;
          data: AuthUser;
        }>("/api/users/me", { token });
        setAccessToken(token);
        setUser(meResponse.data);
      } catch (_error) {
        await refreshSession();
      } finally {
        setLoading(false);
      }
    };

    bootstrapAuth();
  }, []);

  const value = useMemo(
    () => ({
      user,
      accessToken,
      isAuthenticated: Boolean(user && accessToken),
      loading,
      login,
      signup,
      logout,
      refreshSession,
    }),
    [user, accessToken, loading],
  );

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}

export function useAuth() {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth must be used inside AuthProvider");
  }
  return context;
}
