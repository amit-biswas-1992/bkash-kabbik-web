import styles from "../../styles/CastCrewDetails.module.css";
import Router from "next/router";
import Image from "next/image";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCrown } from "@fortawesome/free-solid-svg-icons";

const CastCrewComponent = () => {

    return (
        <>
            <nav className={`navbar py-0 fixed-top ${styles.topNav}`} >
                <div className={styles.backBtn}>
                    <h5 onClick={() => Router.back()}><i className="bi bi-arrow-left mx-3"></i> Cast & Crew</h5>
                </div>
            </nav>

            <div className={styles.castCrewDetailsPage}>

                <div className={styles.castCrewDetailsBox}>

                    <div className="mx-2 mt-3">

                        <div className={`${styles.castcard}`}>
                            <div className="text-center">
                                <Image src="/demo_face.jpg" height={300} width={300} className={`img-fluid mt-2 ${styles.castImg}`} alt="..." />
                                <p className={`card-title my-2 ${styles.castNameText}`}>আল মুকিতুল বারী </p>
                            </div>
                            <p className={styles.updateText}>Will be updated soon</p>
                            <div className="pb-2">
                                <hr className={`${styles.hrLine}`} />
                            </div>

                        </div>

                    </div>

                    <div className="section1 mt-3 mx-2">

                        <p className={styles.textColor}>Audiobooks</p>

                        <div className="row g-3 my-2 px-1">

                            <div className="col-4 col-sm-4 col-md-3">

                                <Link href="/audiobookdetails">

                                    <div className={styles.audioBookCard}>
                                        <Image src="/demo_face.jpg" height={150} width={150} className={`img-fluid mt-2 ${styles.cardImg}`} alt="..." />
                                        <div className={styles.starLogo}><button className={`${styles.starBtn}`}><i className="bi bi-star-fill"></i>4.5</button></div>
                                        <div className={styles.playLogo}><button className={styles.playBtn}><i className="bi bi-play-circle-fill"></i>156</button></div>
                                        <div className={`pt-2`}><FontAwesomeIcon className={styles.premiumLogo} icon={faCrown} style={{ fontSize: "15px", color: "white" }} /></div>
                                    </div>
                                    <div className="text-center">
                                        <p className={`mb-0 ${styles.titleName}`}>কারবালার ইতিহাস </p>
                                        <p className={` ${styles.authorName}`}>কাব্যিক অরিজিনাল </p>
                                    </div>


                                </Link>

                            </div>

                            <div className="col-4 col-sm-4 col-md-3">

                                <Link href="/audiobookdetails">

                                    <div className={styles.audioBookCard}>
                                        <Image src="/demo_face.jpg" height={150} width={150} className={`img-fluid mt-2 ${styles.cardImg}`} alt="..." />
                                        <div className={styles.starLogo}><button className={`${styles.starBtn}`}><i className="bi bi-star-fill"></i>4.5</button></div>
                                        <div className={styles.playLogo}><button className={styles.playBtn}><i className="bi bi-play-circle-fill"></i>156</button></div>
                                        <div className={`pt-2`}><FontAwesomeIcon className={styles.premiumLogo} icon={faCrown} style={{ fontSize: "15px", color: "white" }} /></div>
                                    </div>
                                    <div className="text-center">
                                        <p className={`mb-0 ${styles.titleName}`}>কারবালার ইতিহাস </p>
                                        <p className={` ${styles.authorName}`}>কাব্যিক অরিজিনাল </p>
                                    </div>


                                </Link>

                            </div>

                            <div className="col-4 col-sm-4 col-md-3">

                                <Link href="/audiobookdetails">

                                    <div className={styles.audioBookCard}>
                                        <Image src="/demo_face.jpg" height={150} width={150} className={`img-fluid mt-2 ${styles.cardImg}`} alt="..." />
                                        <div className={styles.starLogo}><button className={`${styles.starBtn}`}><i className="bi bi-star-fill"></i>4.5</button></div>
                                        <div className={styles.playLogo}><button className={styles.playBtn}><i className="bi bi-play-circle-fill"></i>156</button></div>
                                        <div className={`pt-2`}><FontAwesomeIcon className={styles.premiumLogo} icon={faCrown} style={{ fontSize: "15px", color: "white" }} /></div>
                                    </div>
                                    <div className="text-center">
                                        <p className={`mb-0 ${styles.titleName}`}>কারবালার ইতিহাস </p>
                                        <p className={` ${styles.authorName}`}>কাব্যিক অরিজিনাল </p>
                                    </div>


                                </Link>

                            </div>

                            <div className="col-4 col-sm-4 col-md-3">

                                <Link href="/audiobookdetails">

                                    <div className={styles.audioBookCard}>
                                        <Image src="/demo_face.jpg" height={150} width={150} className={`img-fluid mt-2 ${styles.cardImg}`} alt="..." />
                                        <div className={styles.starLogo}><button className={`${styles.starBtn}`}><i className="bi bi-star-fill"></i>4.5</button></div>
                                        <div className={styles.playLogo}><button className={styles.playBtn}><i className="bi bi-play-circle-fill"></i>156</button></div>
                                        <div className={`pt-2`}><FontAwesomeIcon className={styles.premiumLogo} icon={faCrown} style={{ fontSize: "15px", color: "white" }} /></div>
                                    </div>
                                    <div className="text-center">
                                        <p className={`mb-0 ${styles.titleName}`}>কারবালার ইতিহাস </p>
                                        <p className={` ${styles.authorName}`}>কাব্যিক অরিজিনাল </p>
                                    </div>


                                </Link>

                            </div>

                            <div className="col-4 col-sm-4 col-md-3">

                                <Link href="/audiobookdetails">

                                    <div className={styles.audioBookCard}>
                                        <Image src="/demo_face.jpg" height={150} width={150} className={`img-fluid mt-2 ${styles.cardImg}`} alt="..." />
                                        <div className={styles.starLogo}><button className={`${styles.starBtn}`}><i className="bi bi-star-fill"></i>4.5</button></div>
                                        <div className={styles.playLogo}><button className={styles.playBtn}><i className="bi bi-play-circle-fill"></i>156</button></div>
                                        <div className={`pt-2`}><FontAwesomeIcon className={styles.premiumLogo} icon={faCrown} style={{ fontSize: "15px", color: "white" }} /></div>
                                    </div>
                                    <div className="text-center">
                                        <p className={`mb-0 ${styles.titleName}`}>কারবালার ইতিহাস </p>
                                        <p className={` ${styles.authorName}`}>কাব্যিক অরিজিনাল </p>
                                    </div>


                                </Link>

                            </div>

                            <div className="col-4 col-sm-4 col-md-3">

                                <Link href="/audiobookdetails">

                                    <div className={styles.audioBookCard}>
                                        <Image src="/demo_face.jpg" height={150} width={150} className={`img-fluid mt-2 ${styles.cardImg}`} alt="..." />
                                        <div className={styles.starLogo}><button className={`${styles.starBtn}`}><i className="bi bi-star-fill"></i>4.5</button></div>
                                        <div className={styles.playLogo}><button className={styles.playBtn}><i className="bi bi-play-circle-fill"></i>156</button></div>
                                        <div className={`pt-2`}><FontAwesomeIcon className={styles.premiumLogo} icon={faCrown} style={{ fontSize: "15px", color: "white" }} /></div>
                                    </div>
                                    <div className="text-center">
                                        <p className={`mb-0 ${styles.titleName}`}>কারবালার ইতিহাস </p>
                                        <p className={` ${styles.authorName}`}>কাব্যিক অরিজিনাল </p>
                                    </div>


                                </Link>

                            </div>

                            <div className="col-4 col-sm-4 col-md-3">

                                <Link href="/audiobookdetails">

                                    <div className={styles.audioBookCard}>
                                        <Image src="/demo_face.jpg" height={150} width={150} className={`img-fluid mt-2 ${styles.cardImg}`} alt="..." />
                                        <div className={styles.starLogo}><button className={`${styles.starBtn}`}><i className="bi bi-star-fill"></i>4.5</button></div>
                                        <div className={styles.playLogo}><button className={styles.playBtn}><i className="bi bi-play-circle-fill"></i>156</button></div>
                                        <div className={`pt-2`}><FontAwesomeIcon className={styles.premiumLogo} icon={faCrown} style={{ fontSize: "15px", color: "white" }} /></div>
                                    </div>
                                    <div className="text-center">
                                        <p className={`mb-0 ${styles.titleName}`}>কারবালার ইতিহাস </p>
                                        <p className={` ${styles.authorName}`}>কাব্যিক অরিজিনাল </p>
                                    </div>


                                </Link>

                            </div>

                        </div>

                    </div>

                </div>

            </div>

        </>
    );
}

export default CastCrewComponent;