import styles from "../../styles/RatingReview.module.css";
import Link from "next/link";
import Image from "next/image";
import ReactStars from 'react-stars'
import Router, { useRouter } from "next/router";
import React, { useEffect, useState } from "react";

const RatingReviewComponent = () => {

    const [review, setreview] = useState('');

    return (
        <>

            <nav className={`navbar py-0 fixed-top ${styles.topNav}`} >
                <div className={styles.backBtn}>
                    <h5 onClick={() => Router.back()}><i className="bi bi-arrow-left mx-3"></i> Rating & Review</h5>
                </div>
            </nav>

            <div className={`mb-5 ${styles.ratingReviewPage}`}>

                <div className={styles.ratingReviewContentBox}>

                    <div className="mx-2 mt-3">

                        <div className={`text-center ${styles.audioBookcard}`}>
                            <Image src="/drakula.jpeg" height={100} width={100} className={`img-fluid ${styles.audiBookImg}`} alt="..." />

                            <p className={`card-title my-2 ${styles.bgText}`}>ড্রাকুলা</p>
                        </div>

                    </div>

                    <div className="d-flex justify-content-center">
                        <ReactStars
                            count={5}
                            size={45}
                            color2={'#E78E23'}
                            half={true}
                        />
                    </div>

                    <div className="mt-3">
                        <form>

                            <div className="mb-3">
                                <textarea className={`form-control ${styles.reviewForm}`} id="FormControlTextarea" rows={6} placeholder="Your Review"></textarea>
                            </div>

                            <div className="text-center">
                                <button className={styles.saveBtn} type="submit">Save</button>
                            </div>

                        </form>

                    </div>


                </div>

            </div>

        </>
    );
}

export default RatingReviewComponent;