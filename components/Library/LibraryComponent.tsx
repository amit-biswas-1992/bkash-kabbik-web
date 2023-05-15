import styles from "../../styles/Library.module.css";
import Image from "next/image";
import Link from "next/link";

const Library = () => {
    return (
        <>

            <div className={`mb-5 ${styles.libraryPage}`}>

                <div className={styles.libraryContentBox}>

                    <ul className="nav nav-pills justify-content-center mb-3" id="pills-tab" role="tablist">
                        <li className="nav-item" role="presentation">
                            <p className={`mx-2 active ${styles.navMenu}`} id="pills-downloads-tab" data-bs-toggle="pill" data-bs-target="#pills-downloads" role="tab" aria-controls="pills-downloads" aria-selected="true">DOWNLOADS</p>
                            <div className={styles.tabBorder}></div>
                        </li>
                    </ul>

                    <div className="tab-content" id="pills-tabContent">
                        <div className="tab-pane fade show active" id="pills-downloads" role="tabpanel" aria-labelledby="pills-downloads-tab" tabIndex={0}>

                            {/* <div className="row py-3 g-3 mx-2">

                                <div className="col-12 col-sm-6 col-md-6">

                                    <Link href="/audiobook_details">

                                        <div className={`d-flex justify-content-center align-items-center ${styles.libraryCard}`} >
                                            <Image src="/img1.png" className="p-2" height={110} width={110} alt="..." />
                                            <div className="py-2 mx-2">
                                                <div className="d-flex justify-content-between align-items-center">
                                                    <div>
                                                        <h6 className={`${styles.textColor}`} >Episode 13:Influen-entrepreneur couple builds the biggest fashion eCommerce marketplace in just 1 year</h6>
                                                        <p className={`text-muted ${styles.textColor}`}><small>Shuvo Rahman</small></p>
                                                    </div>
                                                    <div className="mx-2">
                                                        <button className={styles.playBtn}><i className="bi bi-play-circle-fill"></i></button>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                    </Link>

                                </div>

                                <div className="col-12 col-sm-6 col-md-6">

                                    <Link href="/audiobook_details">

                                        <div className={`d-flex justify-content-center align-items-center ${styles.libraryCard}`} >
                                            <Image src="/img1.png" className="p-2" height={110} width={110} alt="..." />
                                            <div className="py-2 mx-2">
                                                <div className="d-flex justify-content-between align-items-center">
                                                    <div>
                                                        <h6 className={`${styles.textColor}`} >Episode 13:Influen-entrepreneur couple builds the biggest fashion eCommerce marketplace in just 1 year</h6>
                                                        <p className={`text-muted ${styles.textColor}`}><small>Shuvo Rahman</small></p>
                                                    </div>
                                                    <div className="mx-2">
                                                        <button className={styles.playBtn}><i className="bi bi-play-circle-fill"></i></button>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                    </Link>

                                </div>

                                <div className="col-12 col-sm-6 col-md-6">

                                    <Link href="/audiobook_details">

                                        <div className={`d-flex justify-content-center align-items-center ${styles.libraryCard}`} >
                                            <Image src="/img1.png" className="p-2" height={110} width={110} alt="..." />
                                            <div className="py-2 mx-2">
                                                <div className="d-flex justify-content-between align-items-center">
                                                    <div>
                                                        <h6 className={`${styles.textColor}`} >Episode 13:Influen-entrepreneur couple builds the biggest fashion eCommerce marketplace in just 1 year</h6>
                                                        <p className={`text-muted ${styles.textColor}`}><small>Shuvo Rahman</small></p>
                                                    </div>
                                                    <div className="mx-2">
                                                        <button className={styles.playBtn}><i className="bi bi-play-circle-fill"></i></button>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                    </Link>

                                </div>

                                <div className="col-12 col-sm-6 col-md-6">

                                    <Link href="/audiobook_details">

                                        <div className={`d-flex justify-content-center align-items-center ${styles.libraryCard}`} >
                                            <Image src="/img1.png" className="p-2" height={110} width={110} alt="..." />
                                            <div className="py-2 mx-2">
                                                <div className="d-flex justify-content-between align-items-center">
                                                    <div>
                                                        <h6 className={`${styles.textColor}`} >Episode 13:Influen-entrepreneur couple builds the biggest fashion eCommerce marketplace in just 1 year</h6>
                                                        <p className={`text-muted ${styles.textColor}`}><small>Shuvo Rahman</small></p>
                                                    </div>
                                                    <div className="mx-2">
                                                        <button className={styles.playBtn}><i className="bi bi-play-circle-fill"></i></button>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                    </Link>

                                </div>

                                <div className="col-12 col-sm-6 col-md-6">

                                    <Link href="/audiobook_details">

                                        <div className={`d-flex justify-content-center align-items-center ${styles.libraryCard}`} >
                                            <Image src="/img1.png" className="p-2" height={110} width={110} alt="..." />
                                            <div className="py-2 mx-2">
                                                <div className="d-flex justify-content-between align-items-center">
                                                    <div>
                                                        <h6 className={`${styles.textColor}`} >Episode 13:Influen-entrepreneur couple builds the biggest fashion eCommerce marketplace in just 1 year</h6>
                                                        <p className={`text-muted ${styles.textColor}`}><small>Shuvo Rahman</small></p>
                                                    </div>
                                                    <div className="mx-2">
                                                        <button className={styles.playBtn}><i className="bi bi-play-circle-fill"></i></button>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                    </Link>

                                </div>

                                <div className="col-12 col-sm-6 col-md-6">

                                    <Link href="/audiobook_details">

                                        <div className={`d-flex justify-content-center align-items-center ${styles.libraryCard}`} >
                                            <Image src="/img1.png" className="p-2" height={110} width={110} alt="..." />
                                            <div className="py-2 mx-2">
                                                <div className="d-flex justify-content-between align-items-center">
                                                    <div>
                                                        <h6 className={`${styles.textColor}`} >Episode 13:Influen-entrepreneur couple builds the biggest fashion eCommerce marketplace in just 1 year</h6>
                                                        <p className={`text-muted ${styles.textColor}`}><small>Shuvo Rahman</small></p>
                                                    </div>
                                                    <div className="mx-2">
                                                        <button className={styles.playBtn}><i className="bi bi-play-circle-fill"></i></button>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                    </Link>

                                </div>



                            </div> */}

                        </div>
                    </div>

                    <div className="text-center">
                        <Link href="/" type="submit" className={`${styles.onlineBtn}`}>
                            <span className="mt-3 d-flex justify-content-center">Listen Online Audiobooks</span>
                        </Link>
                    </div>

                </div>
            </div>

        </>

    );
}

export default Library;