import styles from "../../styles/Profile.module.css";
import Link from "next/link";

export default function ProfileComponent() {
    return (

        <>

            <div className={`mb-5 ${styles.profilePage}`}>

                <div className={styles.profileContentBox}>

                    <div className="d-flex justify-content-between mx-2">
                        <p className={`text-center ${styles.userTitle}`}>Tanvri Shahriar</p>
                        <Link href="/profile/updateprofile"><i className={`bi bi-pencil-square mx-2 ${styles.editIcon}`}></i></Link>
                    </div>

                    <div className="accordion accordion-flush" id="accordionExample">
                        <div className="accordion-item">
                            <h2 className="accordion-header" id="headingThree">
                                <div className={`accordion-button collapsed text-center ${styles.dropDownBtn}`} data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                                    আপনি সর্বমোট ১২ বার অডিওবুক শুনেছেন
                                </div>
                            </h2>
                            <div id="collapseThree" className="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
                                <div className={`accordion-body ${styles.dropDownBtn}`}>
                                    <div className={styles.card1} >
                                        <div className="card-body pt-4 mx-4">
                                            <h5 className={`card-title pb-3 ${styles.bgText}`}>আপনার শোনা সর্বাধিক ৫টি অডিওবুক  </h5>

                                            <div className="card-text d-flex justify-content-between align-items-center">

                                                <p className={`mx-3 ${styles.smText}`}>Episode 13: influencer-entrepreneur couple builds the biggest fashion eCommerce marketplace in just 1 year</p>
                                                <p className={`mx-3 ${styles.smText}`}>2</p>

                                            </div>

                                            <div className="card-text d-flex justify-content-between align-items-center">

                                                <p className={`mx-3 ${styles.smText}`}>Episode 13: influencer-entrepreneur couple builds the biggest fashion eCommerce marketplace in just 1 year</p>
                                                <p className={`mx-3 ${styles.smText}`}>2</p>

                                            </div>

                                            <div className="card-text d-flex justify-content-between align-items-center">

                                                <p className={`mx-3 ${styles.smText}`}>Episode 13: influencer-entrepreneur couple builds the biggest fashion eCommerce marketplace in just 1 year</p>
                                                <p className={`mx-3 ${styles.smText}`}>2</p>

                                            </div>

                                            <div className="card-text d-flex justify-content-between align-items-center">

                                                <p className={`mx-3 ${styles.smText}`}>Episode 13: influencer-entrepreneur couple builds the biggest fashion eCommerce marketplace in just 1 year</p>
                                                <p className={`mx-3 ${styles.smText}`}>2</p>

                                            </div>

                                            <div className="card-text d-flex justify-content-between align-items-center">

                                                <p className={`mx-3 ${styles.smText}`}>Episode 13: influencer-entrepreneur couple builds the biggest fashion eCommerce marketplace in just 1 year</p>
                                                <p className={`mx-3 ${styles.smText}`}>2</p>

                                            </div>

                                        </div>

                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <hr className={styles.line} />

                    <Link href="/favorites" className="d-flex justify-content-between mx-3 py-2">
                        <div className="d-flex align-items-center">

                            <i className={`bi bi-heart-fill ${styles.listIcon}`}></i>
                            <p className={`text-center mx-1 ${styles.userTitle}`}>Favourites</p>

                        </div>

                        <i className={`bi bi-chevron-right ${styles.linkIcon}`}></i>
                    </Link>

                    <Link href="/about" className="d-flex justify-content-between mx-3 py-2">
                        <div className="d-flex align-items-center">

                            <i className={`bi bi-exclamation-circle-fill ${styles.listIcon}`}></i>
                            <p className={`text-center mx-1 ${styles.userTitle}`}>About Us</p>

                        </div>

                        <i className={`bi bi-chevron-right ${styles.linkIcon}`}></i>
                    </Link>

                    <Link href="/profile/updateprofile" className="d-flex align-items-center mx-3 py-2">
                        <i className={`bi bi-star-fill ${styles.listIcon}`}></i>
                        <p className={`text-center mx-1 ${styles.userTitle}`}> Rate Us</p>
                    </Link>

                    <button className={`d-flex align-items-center mx-3 py-2 ${styles.logoutLink}`} data-bs-toggle="modal" data-bs-target="#exampleModal">
                        <i className={`bi bi-box-arrow-right ${styles.listIcon}`}></i>
                        <p className={`text-center mx-1 ${styles.userTitle}`}>Log out</p>
                    </button >

                    <div className="modal fade" id="exampleModal" tabIndex={-1} aria-labelledby="exampleModalLabel" aria-hidden="true">
                        <div className="modal-dialog modal-dialog-centered">
                            <div className="modal-content mx-3">
                                <div className={`modal-body ${styles.modalBody}`}>
                                    <div className="p-2">

                                        <div>
                                            <p>Warning</p>
                                            <p>Are you sure you want to Log out?</p>

                                            <div className="d-flex justify-content-end mx-2 pt-4">
                                                <button type="submit" className={`mx-4 ${styles.logoutWarningBtnNo}`}>No</button>
                                                <button type="submit" className={`mx-2 ${styles.logoutWarningBtnYes}`}>Yes</button>
                                            </div>
                                        </div>

                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>


                    <div className="text-center">
                        <Link href="https://www.facebook.com/kabbikAudiobookOfficial?mibextid=ZbWKwL" type="submit" className={`${styles.fbBtn}`}>
                            <div className="mx-4 mt-1 d-flex align-items-center">
                                <i className={`bi bi-facebook mx-2 ${styles.fblogo}`}></i>
                                <span>Like Facebook Page</span>
                            </div>
                        </Link>
                    </div>

                    <div className="text-center">
                        <Link href="https://www.facebook.com/groups/541021620691956/?ref=share&mibextid=NSMWBT" type="submit" className={`mt-3 ${styles.fbComBtn}`}>
                            <div className="mx-3 mt-1 d-flex align-items-center">
                                <i className={`bi bi-people-fill mx-2 ${styles.fbComlogo}`}></i>
                                <span>Join Facebook Community</span>
                            </div>
                        </Link>
                    </div>

                    <div className="text-center">
                        <Link href="https://youtube.com/@kabbikAudiobookOfficial" type="submit" className={`mt-3 ${styles.ytBtn}`}>
                            <div className="mx-2 mt-1 d-flex align-items-center">
                                <i className={`bi bi-youtube mx-2 ${styles.ytlogo}`}></i>
                                <span>Subscribe Youtube Channel</span>
                            </div>
                        </Link>
                    </div>

                </div>

            </div>

        </>

    );
}