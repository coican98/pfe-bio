import Link from "next/link";
import styles from "./Navbar.module.css";

export default function Navbar() {
  return (
    <nav className={styles.nav}>
      <span className={styles.logo}>Nathan Lima</span>
      <div className={styles.links}>
        <Link href="/">Home</Link>
        <Link href="/sobre">Sobre</Link>
        <Link href="/academico">Acadêmico</Link>
        <Link href="/profissional">Profissional</Link>
        <Link href="/projetos">Projetos</Link>
      </div>
    </nav>
  );
}

