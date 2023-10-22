"use client";
import React from "react";
import { useRouter } from "next/navigation";
import { signOut } from "firebase/auth";
import { auth } from "@/library/firebase";

function LogOut() {
  const router = useRouter();

  const logout = () => {
    signOut(auth)
      .then(() => {
        // Successfully signed out.
        router.push("/login"); // or redirect to any other page, e.g., homepage.
      })
      .catch((error) => {
        console.log("Sign-out error:", error.message);
        // Handle any errors during sign-out here.
      });
  };
  return (
    <div>
      <h1>
        Hello World
        <button onClick={logout}>Sign Out</button>
      </h1>
    </div>
  );
}

export default LogOut;
