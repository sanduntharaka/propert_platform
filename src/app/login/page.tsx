"use client";

import { useState, FormEvent } from "react";
import { signIn } from "next-auth/react";
import { useSearchParams } from "next/navigation";

export default function LoginPage() {
  const sp = useSearchParams();
  const callbackUrl = sp.get("callbackUrl") ?? "/admin";

  const [email, setEmail] = useState("admin@example.com");
  const [password, setPassword] = useState("Passw0rd!");
  const [err, setErr] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  async function onSubmit(e: FormEvent) {
    e.preventDefault();
    setLoading(true);
    setErr(null);

    const res = await signIn("credentials", {
      email,
      password,
      callbackUrl,
      redirect: true,
    });

    // If credentials invalid, NextAuth will *not* redirect:
    if (res?.error) setErr("Invalid email or password");
    setLoading(false);
  }

  return (
    <main
      style={{ maxWidth: 360, margin: "64px auto", fontFamily: "system-ui" }}
    >
      <h1>Sign in</h1>
      <form
        onSubmit={onSubmit}
        style={{ display: "grid", gap: 12, marginTop: 16 }}
      >
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          placeholder="Email"
          style={{ padding: 8 }}
        />
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
          placeholder="Password"
          style={{ padding: 8 }}
        />
        {err && <p style={{ color: "crimson" }}>{err}</p>}
        <button
          type="submit"
          disabled={loading}
          style={{ padding: "10px 12px" }}
        >
          {loading ? "Signing in..." : "Sign in"}
        </button>
      </form>
    </main>
  );
}
