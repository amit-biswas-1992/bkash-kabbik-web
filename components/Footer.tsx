import Link from "next/link";
import styles from "../styles/Footer.module.css";

export default function Footer() {
    return (
        <div className="container">
            <div className="row">
                <div className="col-3">
                    <ul className="list-group">
                        <li>
                            <Link href="/about" className={styles.text_color}>About</Link>
                        </li>
                        <li>
                            <Link href="/about" className={styles.text_color}>Kabbik</Link>
                        </li>
                    </ul>
                </div>
                <div className="col-3">
                    <ul className="list-group">
                        <li>
                            <Link href="/about">About</Link>
                        </li>
                        <li>
                            <Link href="/about">Kabbik</Link>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );
}