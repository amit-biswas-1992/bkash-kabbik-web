import Link from "next/link";
import styles from "../styles/Navbar.module.css";
import Image from "next/image";
import { useRouter } from "next/router";
import { useCallback, useEffect, useState } from "react";

export default function NavBar() {
  const router = useRouter();
  const header = router?.asPath;

  // const validToken = () => {
  //     localStorage.getItem("user_token");
  // }

  const [is_subscribed, set_is_subscribed] = useState(false);
  const [validToken, setValidToken]:any = useState();

  const isAuthenticated = useCallback(async () => {
    setValidToken(localStorage.getItem("user_token"));
    const isSubscribed = JSON.parse(
      localStorage.getItem("is_subscribed") || "{}"
    );
    if (isSubscribed === 1) set_is_subscribed(true);
  }, [router]);

  useEffect(() => {
    isAuthenticated();
  }, [isAuthenticated]);

  return (
    <>
      <nav
        className={`navbar py-0 fixed-top ${
          header === "/" ? styles.topNavTransparent : styles.topNavColored
        }`}
      >
        <div className="container-fluid">
          <div className="d-flex flex-grow-1 align-items-center">
            <Link className="navbar-brand" href="/">
              <Image
                src="/kabbik_logo.svg"
                alt="Logo"
                width={55}
                height={55}
                className="d-inline-block align-text-top my-1 img-fluid"
              />
            </Link>
            <div className={styles.navPageName}>
              {header === "/"
                ? "Kabbik"
                : header === "/library"
                ? "Library"
                : header === "/podcast"
                ? "Podcast"
                : header === "/upcoming"
                ? "Upcoming"
                : header === "/profile"
                ? "Profile"
                : ""}
            </div>
          </div>

          {is_subscribed === true || !validToken ? (
            ""
          ) : (
            <div>
              <Link href="/subscribe">
                <button className={styles.subscribeBtn}>SUBSCRIBE</button>
              </Link>
            </div>
          )}

          <div>
            <Link href="/audiobook_search">
              <i className={`bi bi-search mx-2 ${styles.srcLogo}`}></i>
            </Link>
          </div>
        </div>
      </nav>
    </>
  );
}
