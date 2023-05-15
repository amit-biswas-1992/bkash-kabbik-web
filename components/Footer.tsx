import Link from "next/link";
import styles from "../styles/Footer.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { MdOutlineLibraryMusic } from "react-icons/md";
import { useRouter } from "next/router";
import Head from "next/head";
import dynamic from "next/dynamic";
// import the icons you need
import { faHome, faCrown, faMicrophoneAlt, faUser } from "@fortawesome/free-solid-svg-icons";


const Footer = () => {

    const router = useRouter();
    const { index_token }: any = router.query;
    console.log("token id", index_token);

    console.log('ahbsja',router.pathname);
    

    return (

        <>

            <Head>
                <script type="text/javascript" src="https://cdn.capp.bka.sh/scripts/webview_bridge.js" async />
            </Head >

            <div className={`text-center fixed-bottom ${styles.bottomNav}`}>

                <div className="row mt-3">

                    <div className="col">
                        <Link className={`${router.pathname === '/[index_token]' || router.pathname === '/' ? styles.activeMenu : styles.inActiveMenu}`} href="/"><FontAwesomeIcon icon={faHome} style={{ fontSize: "20px" }} /> {router.pathname === '/[index_token]' || router.pathname === '/' ? <p className="mb-0" style={{ fontSize: "12px" }}>Home</p> : ''} </Link> {/*active menu*/}
                    </div>
                    <div className="col">
                        <Link className={` ${router.pathname === '/upcoming' ? styles.activeMenu : styles.inActiveMenu}`} href="/upcoming"><FontAwesomeIcon icon={faCrown} style={{ fontSize: "20px" }} /> {router.pathname === '/upcoming' ? <p className="mb-0" style={{ fontSize: "12px" }}>Upcoming</p> : ''} </Link>
                    </div>
                    <div className="col">
                        <Link className={` ${router.pathname === '/library' ? styles.activeMenu : styles.inActiveMenu}`} href="/library"><MdOutlineLibraryMusic style={{ fontSize: "24px" }} /> {router.pathname === '/library' ? <p className="mb-0" style={{ fontSize: "12px" }}>Library</p> : ''} </Link>

                    </div>
                    <div className="col">
                        <Link className={` ${router.pathname === '/podcast' ? styles.activeMenu : styles.inActiveMenu}`} href="/podcast"><FontAwesomeIcon icon={faMicrophoneAlt} style={{ fontSize: "20px" }} /> {router.pathname === '/podcast' ? <p className="mb-0" style={{ fontSize: "12px" }}>Podcast</p> : ''} </Link>
                    </div>
                    <div className="col">
                        <Link className={` ${router.pathname === '/profile' ? styles.activeMenu : styles.inActiveMenu}`} href="/profile"><FontAwesomeIcon icon={faUser} style={{ fontSize: "20px" }} /> {router.pathname === '/profile' ? <p className="mb-0" style={{ fontSize: "12px" }}>Profile</p> : ''} </Link>
                    </div>

                    {/* <div className="col">
                        <button id="bkash_btn" type="button" onClick={() => window.webViewJSBridge?.goBackHome('Wonder Soft Solution')}
                            style={{ fontSize: "18px", borderRadius: "0px", color: "white!important", backgroundColor: "#E2136E", borderColor: "#E2136E" }} >
                            <img src='https://capp-cdn.labs.bka.sh/images/arrow.svg' style={{
                                float: "right",
                                paddingRight: "1%"
                            }} /></button>
                        <p className="mb-0" style={{ fontSize: "12px", color: "white" }}>Bkash</p>
                    </div> */}

                </div>

                <div className="row">

                {router.pathname === '/[index_token]' || router.pathname === '/' ? <></> : <button id="bkash_btn" type="button" onClick={() => window.webViewJSBridge?.goBackHome('Wonder Soft Solution')} style={{  left: "0", bottom: "0", width: "100%",height: "50%", fontSize: "18px", borderRadius: "0px", color: "white!important", textAlign: "left", backgroundColor: "#E2136E", borderColor: "#E2136E" }} >
                        Back to bKash App Home <img src='https://cdn.capp.bka.sh/images/arrow.svg' style={{ float: "right", marginTop: "4px", paddingRight: "1%" }} /></button>}
                
                </div>

            </div >

        </>

    );
}

export default dynamic(() => Promise.resolve(Footer), { ssr: false });