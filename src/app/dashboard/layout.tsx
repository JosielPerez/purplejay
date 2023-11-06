import DashHeader from "@/components/dashheader/DashHeader";
import styles from "./styles.module.css";
import NavBar from "@/components/navbar/NavBar";
import React from "react";

function DashboardLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <DashHeader />
      <NavBar />
      <main className={styles.main}>{children}</main>
    </>
  );
}

export default DashboardLayout;
