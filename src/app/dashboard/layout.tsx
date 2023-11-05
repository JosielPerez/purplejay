"use client";
import Header from "@/components/header/Header";
import styles from "./styles.module.css";
import NavBar from "@/components/navbar/NavBar";
import { useRouter } from "next/navigation";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import React, { useEffect, useState } from "react";

function DashboardLayout({ children }: { children: React.ReactNode }) {
  const [loading, setLoading] = useState(true);
  const router = useRouter();
  const auth = getAuth();

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        // User is signed in, we can stop showing the loading indicator.
        setLoading(false);
      } else {
        // No user is signed in, so redirect them to the login page.
        alert("You must be logged in to view the dashboard.");
        router.push("/login");
      }
    });

    // Cleanup the listener on unmount
    return () => unsubscribe();
  }, [auth, router]);

  if (loading) {
    return (
      <div className={styles.loading}>
        <img className={styles.logo_spinner} src="/logo.png" alt="logo" />
      </div>
    );
  }
  return (
    <>
      <Header />
      <NavBar />
      <main className={styles.main}>{children}</main>
    </>
  );
}

export default DashboardLayout;
