"use client";
import React, { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import styles from "@/styles/signup.module.css";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "@/library/firebase";

export default function SignUp() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordAgain, setPasswordAgain] = useState("");
  const router = useRouter();

  const signup = () => {
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        console.log("User created: ", user);
        alert("Account Created!");
        // Redirect to another page after successful signup
        router.push("/"); // or your desired route
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log("Error code: ", errorCode);
        console.log("Error message: ", errorMessage);

        // Handle errors here, such as displaying a notification or updating UI
      });
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
              <h1 className={styles.title_form}>Create an account</h1>
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
                <div className={styles.input_group}>
                  <label className={styles.input_name} htmlFor="password">
                    Password
                  </label>
                  <input
                    type="password"
                    name="password"
                    id="password"
                    placeholder="••••••••"
                    color="#D9D9D9"
                    onChange={(e) => setPassword(e.target.value)}
                    required
                  />
                </div>
                <div className={styles.input_group}>
                  <label
                    className={styles.input_name}
                    htmlFor="confirm-password"
                  >
                    Confirm password
                  </label>
                  <input
                    type="password"
                    name="confirm-password"
                    id="confirm-password"
                    placeholder="••••••••"
                    onChange={(e) => setPasswordAgain(e.target.value)}
                    required
                  />
                </div>
                <div className={styles.checkbox_group}>
                  <input id="terms" type="checkbox" required />

                  <label className={styles.checkbox_name} htmlFor="terms">
                    I accept the{" "}
                    <a className={styles.terms_name} href="#">
                      Terms and Conditions
                    </a>
                  </label>
                </div>
                <button
                  disabled={
                    !email ||
                    !password ||
                    !passwordAgain ||
                    password !== passwordAgain
                  }
                  onClick={() => signup()}
                  className={styles.button}
                  type="submit"
                >
                  Create an account
                </button>
                <p className={styles.account_name}>
                  Already have an account?{" "}
                  <Link className={styles.terms_name} href="/login">
                    Login here
                  </Link>
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
