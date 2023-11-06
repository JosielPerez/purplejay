"use client";
import Link from "next/link";
import { useState } from "react";
import { auth } from "@/library/firebase";
import { useRouter } from "next/navigation";
import { sendPasswordResetEmail } from "firebase/auth";
import React from "react";
import styles from "@/styles/forgotpassword.module.css";

function ForgotPassword() {
  const [email, setEmail] = useState("");
  const router = useRouter();

  const resetEmail = async () => {
    try {
      await sendPasswordResetEmail(auth, email);
      alert("Password reset email sent!");
      router.push("/");
    } catch (error) {
      if (error instanceof Error) {
        alert(error.message);
      } else {
        alert("An error occurred.");
      }
    }
  };
  return (
    <main>
      <section className={styles.main}>
        <div className={styles.container}>
          <Link href="/" className={styles.brand}>
            <img className={styles.logo} src="/logo.png" alt="logo" />
            PurpleJay
          </Link>
          <div className={styles.form_container}>
            <div className={styles.form_content}>
              <h1 className={styles.title_form}>Forgot Password</h1>
              <div>
                <div className={styles.input_group}>
                  <label className={styles.input_name} htmlFor="email">
                    Your email
                  </label>
                  <input
                    type="email"
                    name="email"
                    id="email"
                    placeholder="name@email.com"
                    color="#D9D9D9"
                    onChange={(e) => setEmail(e.target.value)}
                    required
                  />
                </div>
                <button
                  onClick={() => resetEmail()}
                  disabled={!email}
                  className={styles.button}
                >
                  Send Forgot Password Email
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

export default ForgotPassword;
