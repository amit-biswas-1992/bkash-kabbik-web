import styles from "../../styles/CatagoryList.module.css";
import Image from "next/image";
import Link from "next/link";
import Router from "next/router";


const CatagoryListComponent = () => {
    return (
        <>
            <div className={`mx-2 py-3 ${styles.catagoryPage}`} >

                <nav className={`navbar py-0 fixed-top ${styles.topNav}`} >
                    <div className={styles.backBtn}>
                        <h4 onClick={() => Router.back()}><i className="bi bi-arrow-left mx-3"></i> বৈজ্ঞানিক কল্পকাহিনী </h4>
                    </div>
                </nav>

                <div className="row g-4">

                    <div className="col-12 col-sm-12 col-md-4">
                        <Link href="#">
                            <div className={`d-flex justify-content-center align-items-center ${styles.catagoryCard}`} >
                                <Image src="/img1.png" className="p-2" height={110} width={110} alt="..." />
                                <div className="py-2 mx-2">
                                    <div className="d-flex justify-content-between">
                                        <div>
                                            <h6 className={`mb-0 ${styles.textColor}`} >Episode 13:Influen</h6>
                                            <p className={`mb-0 text-muted ${styles.textColor}`}><small>Shuvo Rahman</small></p>
                                        </div>
                                        <div className="mx-2">
                                            <button className={`mx-1 ${styles.starBtn}`}><i className="bi bi-star-fill"></i> 4.5</button>
                                            <button className={styles.playBtn}><i className="bi bi-play-circle-fill"></i> 156</button>
                                        </div>
                                    </div>
                                    <p className={`mb-0 ${styles.textColor}`} ><small>This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</small></p>
                                </div>
                            </div>
                        </Link>
                    </div>

                    <div className="col-12 col-sm-12 col-md-4">
                        <Link href="#">
                            <div className={`d-flex justify-content-center align-items-center ${styles.catagoryCard}`} >
                                <Image src="/img1.png" className="p-2" height={110} width={110} alt="..." />
                                <div className="py-2 mx-2">
                                    <div className="d-flex justify-content-between">
                                        <div>
                                            <h6 className={`mb-0 ${styles.textColor}`} >Episode 13:Influen</h6>
                                            <p className={`mb-0 text-muted ${styles.textColor}`}><small>Shuvo Rahman</small></p>
                                        </div>
                                        <div className="mx-2">
                                            <button className={`mx-1 ${styles.starBtn}`}><i className="bi bi-star-fill"></i> 4.5</button>
                                            <button className={styles.playBtn}><i className="bi bi-play-circle-fill"></i> 156</button>
                                        </div>
                                    </div>
                                    <p className={`mb-0 ${styles.textColor}`} ><small>This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</small></p>
                                </div>
                            </div>
                        </Link>
                    </div>

                    <div className="col-12 col-sm-12 col-md-4">
                        <Link href="#">
                            <div className={`d-flex justify-content-center align-items-center ${styles.catagoryCard}`} >
                                <Image src="/img1.png" className="p-2" height={110} width={110} alt="..." />
                                <div className="py-2 mx-2">
                                    <div className="d-flex justify-content-between">
                                        <div>
                                            <h6 className={`mb-0 ${styles.textColor}`} >Episode 13:Influen</h6>
                                            <p className={`mb-0 text-muted ${styles.textColor}`}><small>Shuvo Rahman</small></p>
                                        </div>
                                        <div className="mx-2">
                                            <button className={`mx-1 ${styles.starBtn}`}><i className="bi bi-star-fill"></i> 4.5</button>
                                            <button className={styles.playBtn}><i className="bi bi-play-circle-fill"></i> 156</button>
                                        </div>
                                    </div>
                                    <p className={`mb-0 ${styles.textColor}`} ><small>This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</small></p>
                                </div>
                            </div>
                        </Link>
                    </div>

                    <div className="col-12 col-sm-12 col-md-4">
                        <Link href="#">
                            <div className={`d-flex justify-content-center align-items-center ${styles.catagoryCard}`} >
                                <Image src="/img1.png" className="p-2" height={110} width={110} alt="..." />
                                <div className="py-2 mx-2">
                                    <div className="d-flex justify-content-between">
                                        <div>
                                            <h6 className={`mb-0 ${styles.textColor}`} >Episode 13:Influen</h6>
                                            <p className={`mb-0 text-muted ${styles.textColor}`}><small>Shuvo Rahman</small></p>
                                        </div>
                                        <div className="mx-2">
                                            <button className={`mx-1 ${styles.starBtn}`}><i className="bi bi-star-fill"></i> 4.5</button>
                                            <button className={styles.playBtn}><i className="bi bi-play-circle-fill"></i> 156</button>
                                        </div>
                                    </div>
                                    <p className={`mb-0 ${styles.textColor}`} ><small>This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</small></p>
                                </div>
                            </div>
                        </Link>
                    </div>

                    <div className="col-12 col-sm-12 col-md-4">
                        <Link href="#">
                            <div className={`d-flex justify-content-center align-items-center ${styles.catagoryCard}`} >
                                <Image src="/img1.png" className="p-2" height={110} width={110} alt="..." />
                                <div className="py-2 mx-2">
                                    <div className="d-flex justify-content-between">
                                        <div>
                                            <h6 className={`mb-0 ${styles.textColor}`} >Episode 13:Influen</h6>
                                            <p className={`mb-0 text-muted ${styles.textColor}`}><small>Shuvo Rahman</small></p>
                                        </div>
                                        <div className="mx-2">
                                            <button className={`mx-1 ${styles.starBtn}`}><i className="bi bi-star-fill"></i> 4.5</button>
                                            <button className={styles.playBtn}><i className="bi bi-play-circle-fill"></i> 156</button>
                                        </div>
                                    </div>
                                    <p className={`mb-0 ${styles.textColor}`} ><small>This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</small></p>
                                </div>
                            </div>
                        </Link>
                    </div>

                    <div className="col-12 col-sm-12 col-md-4">
                        <Link href="#">
                            <div className={`d-flex justify-content-center align-items-center ${styles.catagoryCard}`} >
                                <Image src="/img1.png" className="p-2" height={110} width={110} alt="..." />
                                <div className="py-2 mx-2">
                                    <div className="d-flex justify-content-between">
                                        <div>
                                            <h6 className={`mb-0 ${styles.textColor}`} >Episode 13:Influen</h6>
                                            <p className={`mb-0 text-muted ${styles.textColor}`}><small>Shuvo Rahman</small></p>
                                        </div>
                                        <div className="mx-2">
                                            <button className={`mx-1 ${styles.starBtn}`}><i className="bi bi-star-fill"></i> 4.5</button>
                                            <button className={styles.playBtn}><i className="bi bi-play-circle-fill"></i> 156</button>
                                        </div>
                                    </div>
                                    <p className={`mb-0 ${styles.textColor}`} ><small>This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</small></p>
                                </div>
                            </div>
                        </Link>
                    </div>

                </div>

            </div>
        </>
    );
}

export default CatagoryListComponent;