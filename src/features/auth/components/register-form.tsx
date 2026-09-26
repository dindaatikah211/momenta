"use client";

import Link from "next/link";
import { useRegister } from "@/features/auth/hooks/use-register";
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

export function RegisterForm() {
  const {
    name,
    setName,
    email,
    setEmail,
    password,
    setPassword,
    error,
    isLoading,
    registerWithEmail,
  } = useRegister();

  return (
    <Card className="w-full max-w-sm">
      <CardHeader>
        <CardTitle>Buat Akun Momenta</CardTitle>
        <CardDescription>
          Isi data kamu untuk mulai menggunakan Momenta
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-4">
        <form onSubmit={registerWithEmail} className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="name">Nama</Label>
            <Input
              id="name"
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
          </div>
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
            {isLoading ? "Memproses..." : "Daftar"}
          </Button>
        </form>
        <p className="text-center text-sm text-muted-foreground">
          Sudah punya akun?{" "}
          <Link href="/login" className="underline">
            Login
          </Link>
        </p>
      </CardContent>
    </Card>
  );
}