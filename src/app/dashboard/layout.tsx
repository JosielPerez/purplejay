
"use client";
import Header from '@/components/header/Header';
import styles from "./styles.module.css";
import NavBar from "@/components/navbar/NavBar";
import React, { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { getAuth, onAuthStateChanged } from "firebase/auth";


function DashboardLayout({ children }: { children: React.ReactNode }) {
  const [isLoading, setLoading] = useState(true); // State to handle loading
  const router = useRouter();
  const auth = getAuth();

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        setLoading(false);
      } else {
        setTimeout(() => {
          alert("You must be logged in to view the dashboard.");
          router.push("/login");
        }, 100); // 1 second delay
      }
    });

    return () => unsubscribe();
  }, [auth, router]);

  if (isLoading) {
    <div className={styles.loading}>
        <img className={styles.logo_spinner} src="/logo.png" alt="logo" />
      </div>
 }
    return (

   <>
        <Header/>
        <NavBar navId='dashboard'/>
        <main className={styles.main}>
            {children}
        </main>
        </>
  );

}

export default DashboardLayout;
