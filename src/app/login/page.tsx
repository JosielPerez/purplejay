"use client";
import React, { useState } from "react";
import Link from "next/link";
import styles from "@/styles/login.module.css";
import { useRouter } from "next/navigation";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "@/library/firebase";

export default function LogIn() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const router = useRouter();

  const login = () => {
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Successfully logged in
        const user = userCredential.user;
        console.log("User logged in: ", user);

        // Redirect to another page after successful login
        router.push("/logoutpage"); // or your desired route after login
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log("Error code: ", errorCode);
        console.log("Error message: ", errorMessage);

        // Handle login errors here. For example, you could set an error state and display it in your component.
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
              <h1 className={styles.title_form}>Log in to your account</h1>
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
                <div className={styles.flex_group}>
                  <div className={styles.checkbox_group}>
                    <input id="remember" type="checkbox" required />
                    <label className={styles.remember_me} htmlFor="remember">
                      Remember me
                    </label>
                  </div>
                  <a href="#" className={styles.forgot_password}>
                    Forgot password?
                  </a>
                </div>
                <button
                  onClick={() => login()}
                  disabled={!email || !password}
                  className={styles.button}
                  type="submit"
                >
                  Sign in
                </button>
                <p className={styles.account}>
                  Don’t have an account yet?{" "}
                  <Link className={styles.signup_name} href="/signup">
                    Sign up
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
