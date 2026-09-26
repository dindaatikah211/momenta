"use client";

import Link from "next/link";
import { useLogin } from "@/features/auth/hooks/use-login";
import { Button } from "@/shared/components/ui/button";
import { Input } from "@/shared/components/ui/input";
import { Label } from "@/shared/components/ui/label";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/shared/components/ui/card";

export function LoginForm() {
  const {
    email,
    setEmail,
    password,
    setPassword,
    error,
    isLoading,
    loginWithEmail,
    loginWithGoogle,
  } = useLogin();

  return (
    <Card className="w-full max-w-sm">
      <CardHeader>
        <CardTitle>Masuk ke Momenta</CardTitle>
        <CardDescription>
          Masukkan email dan password kamu untuk masuk
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-4">
        <form onSubmit={loginWithEmail} className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="email">Email</Label>
            <Input
              id="email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="password">Password</Label>
            <Input
              id="password"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          {error && <p className="text-sm text-destructive">{error}</p>}
          <Button type="submit" className="w-full" disabled={isLoading}>
            {isLoading ? "Memproses..." : "Login"}
          </Button>
        </form>
        <Button
          variant="outline"
          className="w-full"
          onClick={loginWithGoogle}
        >
          Login dengan Google
        </Button>
        <p className="text-center text-sm text-muted-foreground">
          Belum punya akun?{" "}
          <Link href="/register" className="underline">
            Daftar
          </Link>
        </p>
      </CardContent>
    </Card>
  );
}