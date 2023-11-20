import styles from './styles.module.css'
import NavBar from '@/components/navbar/NavBar';
import React, { useState } from "react";
import Header from '@/components/header/Header';

function DashboardLayout({
    children,
  }: {
    children: React.ReactNode;
  }) {
    return (
        <>
        <Header/>
        <NavBar navId='dashboard'/>
        <main className={styles.main}>
            {children}
        </main>
        </>
    )
}

export default DashboardLayout