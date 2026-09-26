"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { authClient } from "@/shared/services/auth-client";

export function useLogin() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  async function loginWithEmail(e: React.FormEvent) {
    e.preventDefault();
    setIsLoading(true);
    setError("");

    const { error } = await authClient.signIn.email({ email, password });

    if (error) {
      setError(error.message ?? "Login gagal");
      setIsLoading(false);
      return;
    }

    router.push("/dashboard");
  }

  async function loginWithGoogle() {
    await authClient.signIn.social({
      provider: "google",
      callbackURL: "/dashboard",
    });
  }

  return {
    email,
    setEmail,
    password,
    setPassword,
    error,
    isLoading,
    loginWithEmail,
    loginWithGoogle,
  };
}