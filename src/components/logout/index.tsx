import { useRouter } from "next/navigation";
import { signOut } from "firebase/auth";
import { auth } from "@/library/firebase";
import styles from "@/styles/logout.module.css";

function LogOut() {
  const router = useRouter();

  const logout = () => {
    signOut(auth)
      .then(() => {
        // Successfully signed out.
        router.push("/login");
      })
      .catch((error) => {
        console.log("Sign-out error:", error.message);
        // Handle any errors during sign-out here.
      });
  };
  return (
    <div className={styles.main}>
      <button className={styles.button} onClick={logout}>
        Sign Out
      </button>
    </div>
  );
}

export default LogOut;
