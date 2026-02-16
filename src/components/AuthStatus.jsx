// src/components/AuthStatus.jsx
import { useEffect, useState } from "react";
import { signIn, signOut, getCurrentUser, fetchAuthSession } from "aws-amplify/auth";

export default function AuthStatus({ onAdminChange }) {
  const [signedIn, setSignedIn] = useState(false);
  const [isAdmin, setIsAdmin] = useState(false);

  async function refresh() {
    try {
      await getCurrentUser(); // throws if not signed in

      const session = await fetchAuthSession();
      const payload = session.tokens?.idToken?.payload || {};
      const groups = payload["cognito:groups"] || [];
      const admin = Array.isArray(groups) && groups.includes("Admins");

      setSignedIn(true);
      setIsAdmin(admin);
      onAdminChange?.(admin);
    } catch {
      setSignedIn(false);
      setIsAdmin(false);
      onAdminChange?.(false);
    }
  }

  useEffect(() => {
    refresh();
  }, []);

  async function handleSignIn() {
    const username = prompt("Username/email:");
    const password = prompt("Password:");
    if (!username || !password) return;

    try {
      await signIn({ username, password });
      await refresh();
    } catch (err) {
      alert("Sign in failed: " + (err?.message || err));
      console.error(err);
    }
  }

  async function handleSignOut() {
    try {
      await signOut();
    } finally {
      await refresh();
    }
  }

  if (!signedIn) return <button onClick={handleSignIn}>Sign in</button>;

  return (
    <div style={{ display: "flex", gap: 8, alignItems: "center" }}>
      <span style={{ fontSize: 13 }}>{isAdmin ? "Admin" : "User"}</span>
      <button onClick={handleSignOut}>Sign out</button>
    </div>
  );
}
