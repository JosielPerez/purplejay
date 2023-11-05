"use client";
import React, { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import styles from "./styles.module.css";
import NavBar from "@/components/navbar/NavBar";
import DashHeader from '@/components/dashheader/DashHeader';

function DashboardLayout({ children }: { children: React.ReactNode }) {
  const [loading, setLoading] = useState(true);
  const router = useRouter();
  const auth = getAuth();

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        setLoading(false);
      } else {
        alert("You must be logged in to view the dashboard.");
        router.push("/login");
      }
    });

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
      <DashHeader />
      <NavBar />
      <main className={styles.main}>{children}</main>
    </>
  );
}

export default DashboardLayout;
