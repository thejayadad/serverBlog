'use client';
import {signIn} from "next-auth/react";

export default function LoginWithGoogle() {
  return (
    <button
      onClick={() => signIn('google')}
      className="bg-white shadow text-center w-full py-4 flex gap-3 items-center justify-center">
      <span>Sign In with Google</span>
    </button>
  );
}