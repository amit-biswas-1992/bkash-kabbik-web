import styles from "../../styles/AuthorDetails.module.css";
import Router from "next/router";
import Image from "next/image";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCrown } from "@fortawesome/free-solid-svg-icons";

const AuthorDetailsComponent = () => {
    return (
        <>
            <nav className={`navbar py-0 fixed-top ${styles.topNav}`} >
                <div className={styles.backBtn}>
                    <h5 onClick={() => Router.back()}><i className="bi bi-arrow-left mx-3"></i> Cast & Crew</h5>
                </div>
            </nav>

            <div className={styles.authorDetailsPage}>

                <div className={styles.authorDetailsBox}>

                    <div className="mx-2 mt-3">

                        <div className={` ${styles.authorCard}`}>
                            <div className="text-center">
                                <Image src="/demo_face.jpg" height={300} width={300} className={`img-fluid mt-2 ${styles.authorImg}`} alt="..." />
                                <p className={`card-title my-2 ${styles.authorNameText}`}>আল মুকিতুল বারী </p>
                            </div>

                            {/* <p className={styles.updateText}>Will be updated soon</p>
                            <div className="pb-2">
                                <hr className={`${styles.hrLine}`} />
                            </div> */}

                            <div className="accordion accordion-flush" id="accordionExample">
                                <div className="accordion-item">
                                    <h2 className="accordion-header" id="headingThree">
                                        <div className={`accordion-button collapsed text-center ${styles.dropDownBtn}`} data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                                            Author Description
                                        </div>
                                    </h2>
                                    <div id="collapseThree" className="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
                                        <div className={`accordion-body ${styles.dropDownBtn}`}>
                                            <div className={styles.descriptionBody} >

                                                <p className={styles.bgText}>
                                                জাহাঙ্গীরনগর বিশ্ববিদ্যালয়ের মেধাবী ছাত্র মারুফ আল-আমিন। পিতা- মুহাম্মাদ আব্দুল আজিজ, মাতা-আকলিমা আক্তার। তিনি ০১নভেম্বর, ১৯৯৩ ঢাকা জেলার অদূরে সাভার থানার গেন্ডা গ্রামে জন্ম গ্রহণ করেন। ছেলেবেলা থেকেই স্বপ্ন দেখতেন চিত্রশিল্পী হবেন। কিন্তু রংতুলির ব্যবহারটা শেখা হয়নি। তাই বলে তার ছবি আঁকা থেমে নেই। শব্দের পর শব্দ বসিয়ে তিনি একে চলেছেন কথার ছবি । তার লেখালেখির হাতেখড়ি হয় স্কুল জীবনে। বিভিন্ন ম্যাগাজিন, পত্র-পত্রিকায় লিখেছেন নিয়মিত। বর্তমান তিনি জাহাঙ্গীরনগর বিশ্ববিদ্যালয়ে শিক্ষারত আছেন। “ রুপালী সমুদ্র “ তার প্রথম গল্পগ্রন্থ।
                                                </p>

                                            </div>
                                        </div>
                                    </div>
                                </div>
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

export default AuthorDetailsComponent;