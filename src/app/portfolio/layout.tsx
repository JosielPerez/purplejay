import Header from '@/components/header/Header';
import styles from './styles.module.css'
import NavBar from '@/components/navbar/NavBar';
import React from 'react'

function DashboardLayout({
    children,
  }: {
    children: React.ReactNode;
  }) {
    return (
        <>
        <Header/>
        <NavBar navId = 'portfolio'/>
        <main className={styles.main}>
            {children}
        </main>
        </>
    )
}

export default DashboardLayout