import Link from "next/link";
import styles from "../styles/Navbar.module.css";

export default function NavBar() {
    return (
        <nav>
            <Link href="/" className={styles.text_color}>Home</Link>
            <Link href="/about" className={styles.text_color}>About</Link>
            <Link href="/profile/" className={styles.text_color}>Profile</Link>
        </nav>
    );
}
