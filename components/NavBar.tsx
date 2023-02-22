import Link from "next/link";
import styles from "../styles/Navbar.module.css";
import Image from "next/image";

export default function NavBar() {
    return (
        <>

            <nav className={`navbar py-0 fixed-top ${styles.topNav}`} >
                <div className="container-fluid">

                    <div className="d-flex flex-grow-1 align-items-center">
                        <Link className="navbar-brand" href="#">
                            <Image src="/kabbik_logo.svg" alt="Logo" width={55} height={55} className="d-inline-block align-text-top my-1 img-fluid" />
                        </Link>
                        <div className={styles.navPageName} >Premium</div>
                    </div>

                    <div>
                        <Link href="/subscribe">
                            <button className={styles.subscribeBtn}>SUBSCRIBE</button>
                        </Link>
                    </div>

                    <div>
                        <Link href="/audiobook_search">
                            <i className={`bi bi-search ${styles.srcLogo}`}></i>
                        </Link>
                    </div>

                </div>
            </nav>


            {/* <nav className={`navbar py-0 fixed-top ${styles.topNav}`}>
                <div className="mx-2">
                    <a className="navbar-brand" href="#">
                        <Image src="/kabbik_logo.svg" alt="Logo" width={55} height={55} className="d-inline-block align-text-top my-1 img-fluid" />
                    </a>
                </div>
            </nav> */}




            {/* <div className={`text-center fixed-top ${styles.bottomNav}`}>

                <div className="row row-cols-5 mt-3">

                    <div className="col">
                        <Link href="/about"><FontAwesomeIcon icon={faHome} style={{ color: "white", fontSize: "20px" }} /></Link>
                    </div>
                    <div className="col">
                        <Link href="/premium"><FontAwesomeIcon icon={faCrown} style={{ fontSize: "20px" }} /></Link>
                    </div>
                    <div className="col">
                        <Link href="/about"><MdOutlineLibraryMusic style={{ fontSize: "24px" }} /></Link>

                    </div>
                    <div className="col">
                        <Link href="/podcast"><FontAwesomeIcon icon={faMicrophoneAlt} style={{ fontSize: "20px" }} /></Link>
                    </div>
                    <div className="col">
                        <Link href="/about"><FontAwesomeIcon icon={faUser} style={{ fontSize: "20px" }} /></Link>
                    </div>

                </div>

            </div> */}

        </>
    );
}
