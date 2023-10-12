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
      <div className={styles.main_content}>
        <div className={styles.first_half_main_content}>
          <div className={styles.text_container}>
            <h1 className={styles.text_big}>Learn How To Trade</h1>
            <h3 className={styles.text_small}>Without the risk!</h3>
            <p className={styles.text_description}>
              Master the art of stock trading with our realistic simulator. Dive
              into the world of markets and portfolios without the financial
              setbacks. Your journey to becoming a confident trader starts here!
            </p>
          </div>
          <div className={styles.button_containers}>
            <Link href="/signup">
              <button className={styles.sign_up}>SIGN UP</button>
            </Link>
            <Link href="login">
              <button className={styles.log_in}>LOG IN</button>
            </Link>
          </div>
        </div>

        <div className={styles.img_container}></div>
      </div>
    </main>
  );
}
