import Link from "next/link";
import styles from "../styles/Footer.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { MdOutlineLibraryMusic } from "react-icons/md";
import {useRouter} from "next/router";

// import the icons you need
import { faHome,faCrown,faMicrophoneAlt,faUser } from "@fortawesome/free-solid-svg-icons";


export default function Footer() {

    const router = useRouter();
    

    return (

        <>

            <div className={`text-center fixed-bottom ${styles.bottomNav}`}>

                <div className="row row-cols-5 mt-3">
                    
                    <div className="col"> 
                        <Link className={` ${styles.target} ${router.pathname === '/'? styles.activeMenu: ''}`} href="/"><FontAwesomeIcon icon={faHome} style={{ fontSize: "20px" }} /></Link> {/*active menu*/}
                    </div>
                    <div className="col">
                        <Link className={` ${styles.target} ${router.pathname === '/upcoming'? styles.activeMenu: ''}`} href="/upcoming"><FontAwesomeIcon icon={faCrown} style={{ fontSize: "20px" }} /></Link>
                    </div>
                    <div className="col">
                        <Link className={` ${styles.target} ${router.pathname === '/library'? styles.activeMenu: ''}`} href="/library"><MdOutlineLibraryMusic style={{ fontSize: "24px" }} /></Link>

                    </div>
                    <div className="col">
                        <Link className={` ${styles.target} ${router.pathname === '/podcast'? styles.activeMenu: ''}`} href="/podcast"><FontAwesomeIcon icon={faMicrophoneAlt} style={{ fontSize: "20px" }} /></Link>
                    </div>
                    <div className="col">
                        <Link className={` ${styles.target} ${router.pathname === '/profile'? styles.activeMenu: ''}`} href="/profile"><FontAwesomeIcon icon={faUser} style={{ fontSize: "20px" }} /></Link>
                    </div>

                </div>

            </div>

        </>

    );
}