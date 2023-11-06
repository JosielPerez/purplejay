import React from "react";
import Link from "next/link";
import styles from "@/styles/login.module.css";

export default function LogIn() {
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
              <form action="#">
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
                <button className={styles.button} type="submit">
                  Sign in
                </button>
                <p className={styles.account}>
                  Don’t have an account yet?{" "}
                  <Link className={styles.signup_name} href="/signup">
                    Sign up
                  </Link>
                </p>
              </form>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
