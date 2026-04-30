import React, { useState } from "react";
import { motion } from "motion/react";
import { Lock, Mail, Rocket, User } from "lucide-react";
import { GlassCard } from "./glass-card";
import { useAuth } from "../context/AuthContext";

export function AuthPage() {
  const { login, signup } = useAuth();
  const [mode, setMode] = useState<"login" | "signup">("login");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [identifier, setIdentifier] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState<string | null>(null);
  const [submitting, setSubmitting] = useState(false);

  const onSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setError(null);
    setSubmitting(true);

    try {
      if (mode === "signup") {
        const trimmedName = name.trim();
        if (trimmedName.length < 2) {
          throw new Error("Name must be at least 2 characters");
        }
        if (
          password.length < 8 ||
          !/[A-Z]/.test(password) ||
          !/[a-z]/.test(password) ||
          !/[0-9]/.test(password)
        ) {
          throw new Error(
            "Password must be 8+ chars and include uppercase, lowercase, and a number",
          );
        }
        await signup(trimmedName, password, email.trim() || undefined);
      } else {
        await login(identifier.trim(), password);
      }
    } catch (submitError) {
      setError(submitError instanceof Error ? submitError.message : "Authentication failed");
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center px-6 py-10">
      <div className="w-full max-w-md space-y-6">
        <div className="text-center">
          <motion.div
            className="w-16 h-16 rounded-xl mx-auto mb-4 bg-gradient-to-br from-indigo-500 to-purple-600 flex items-center justify-center shadow-lg shadow-indigo-500/40"
            animate={{ y: [0, -4, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            <Rocket className="w-8 h-8 text-white" />
          </motion.div>
          <h1 className="text-3xl font-bold">Welcome To SpaceScope</h1>
          <p className="text-white/60 mt-2">
            {mode === "login" ? "Sign in to continue your journey" : "Create your explorer account"}
          </p>
        </div>

        <GlassCard className="p-6">
          <div className="flex p-1 rounded-lg bg-white/5 mb-6">
            <button
              className={`flex-1 py-2 rounded-md text-sm transition-all ${
                mode === "login" ? "bg-indigo-500/30 text-indigo-200" : "text-white/60"
              }`}
              onClick={() => setMode("login")}
              type="button"
            >
              Login
            </button>
            <button
              className={`flex-1 py-2 rounded-md text-sm transition-all ${
                mode === "signup" ? "bg-indigo-500/30 text-indigo-200" : "text-white/60"
              }`}
              onClick={() => setMode("signup")}
              type="button"
            >
              Signup
            </button>
          </div>

          <form className="space-y-4" onSubmit={onSubmit}>
            {mode === "signup" && (
              <label className="block">
                <span className="text-xs text-white/60">Name</span>
                <div className="mt-1 flex items-center gap-2 bg-white/5 border border-white/10 rounded-lg px-3 py-2">
                  <User className="w-4 h-4 text-white/40" />
                  <input
                    className="w-full bg-transparent outline-none"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="Space Explorer"
                    required
                  />
                </div>
              </label>
            )}

            {mode === "signup" && (
              <label className="block">
                <span className="text-xs text-white/60">Email (optional)</span>
                <div className="mt-1 flex items-center gap-2 bg-white/5 border border-white/10 rounded-lg px-3 py-2">
                  <Mail className="w-4 h-4 text-white/40" />
                  <input
                    className="w-full bg-transparent outline-none"
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="you@example.com"
                  />
                </div>
              </label>
            )}

            {mode === "login" && (
              <label className="block">
                <span className="text-xs text-white/60">Name or Email</span>
                <div className="mt-1 flex items-center gap-2 bg-white/5 border border-white/10 rounded-lg px-3 py-2">
                  <User className="w-4 h-4 text-white/40" />
                  <input
                    className="w-full bg-transparent outline-none"
                    value={identifier}
                    onChange={(e) => setIdentifier(e.target.value)}
                    placeholder="Enter your name or email"
                    required
                  />
                </div>
              </label>
            )}

            <label className="block">
              <span className="text-xs text-white/60">Password</span>
              <div className="mt-1 flex items-center gap-2 bg-white/5 border border-white/10 rounded-lg px-3 py-2">
                <Lock className="w-4 h-4 text-white/40" />
                <input
                  className="w-full bg-transparent outline-none"
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="Enter password"
                  required
                />
              </div>
              {mode === "signup" && (
                <p className="text-[11px] text-white/45 mt-1">
                  Use at least 8 characters with uppercase, lowercase, and a number.
                </p>
              )}
            </label>

            {error && <p className="text-red-300 text-sm">{error}</p>}

            <motion.button
              whileHover={{ scale: 1.01 }}
              whileTap={{ scale: 0.99 }}
              disabled={submitting}
              type="submit"
              className="w-full py-3 rounded-lg bg-gradient-to-r from-indigo-500 to-purple-600 disabled:opacity-60"
            >
              {submitting ? "Please wait..." : mode === "login" ? "Login" : "Create Account"}
            </motion.button>
          </form>
        </GlassCard>
      </div>
    </div>
  );
}
