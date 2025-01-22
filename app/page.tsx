import styles from "./page.module.css";
import Link from "next/link";

export default function Home() {
  return (
    <main className={styles.page}>
      Main content
      <br/>
      <Link href={"/about"}>About</Link>
    </main>
  );
}
