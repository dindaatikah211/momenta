"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { authClient } from "@/shared/services/auth-client";

export function useRegister() {
  const router = useRouter();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  async function registerWithEmail(e: React.FormEvent) {
    e.preventDefault();
    setIsLoading(true);
    setError("");

    const { error } = await authClient.signUp.email({ name, email, password });

    if (error) {
      setError(error.message ?? "Registrasi gagal");
      setIsLoading(false);
      return;
    }

    router.push("/dashboard");
  }

  return {
    name,
    setName,
    email,
    setEmail,
    password,
    setPassword,
    error,
    isLoading,
    registerWithEmail,
  };
}