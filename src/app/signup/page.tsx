import React from "react";
import Link from "next/link";
import styles from "@/styles/signup.module.css";

export default function SignUp() {
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
                <button className={styles.button} type="submit">
                  Create an account
                </button>
                <p className={styles.account_name}>
                  Already have an account?{" "}
                  <Link className={styles.terms_name} href="/login">
                    Login here
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
