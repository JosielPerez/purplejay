import Image from "next/image";
import Link from "next/link";
import styles from "./page.module.css";

export default function Home() {
  return (
    <main className={styles.main}>
      <div className={styles.landing_title}>
        <div className={styles.small_rectangle} />
        <div className={styles.title_container}>
          <h1 className={styles.title_name}>Purple Jay</h1>
        </div>
        <div className={styles.big_rectangle} />
      </div>
      <div className={styles.button_containers}>
        <Link href="/signup">
          <button className={styles.sign_up}>SIGN UP</button>
        </Link>
        <Link href="login">
          <button className={styles.log_in}>LOG IN</button>
        </Link>
      </div>
    </main>
  );
}
