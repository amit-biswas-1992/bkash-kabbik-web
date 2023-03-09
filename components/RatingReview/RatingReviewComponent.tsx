import styles from "../../styles/RatingReview.module.css";
import Link from "next/link";
import Image from "next/image";
import ReactStars from 'react-stars'
import Router, { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import { postReview, getAudioBookDetails } from "../../services/api.service";
import AudioBookDetailsInfo from "../../models/AudioBookDetailsInfo";

const RatingReviewComponent = () => {

    const router = useRouter()
    const { id } = router.query;
    console.log(id);

    const [audioBookDetailsData, setaudioBookDetailsData] = useState<AudioBookDetailsInfo>();
    const [review, setreview] = useState('');
    const [star, setStar] = useState('');

    console.log('audioBookDetailsData');
    console.log(audioBookDetailsData);
    console.log('audioBookDetailsData');

    const starHandler = (event: any) => {
        console.log(event);
        setStar(event);
    };

    const reviewHandler = (event: any) => {
        console.log(review);
        setreview(event.target.value);
    };

    useEffect(() => {
        audioBookDetails();
    }, [id]);

    const audioBookDetails = async () => {

        const data = await getAudioBookDetails(id);
        if (data) {
            setaudioBookDetailsData(data);
        }
    }

    const submitForm = async (event: any) => {
        console.log("hhhhhhhhhhhhhhh");
        event.preventDefault()

        const reviewData = await postReview(id, star, review);
    };

    const myLoader = ({ src, width, quality }: any) => {
        return `${src}?w=${width}&q=${quality || 75}`;
    };

    return (
        <>

            <nav className={`navbar py-0 fixed-top ${styles.topNav}`} >
                <div className={styles.backBtn}>
                    <h5 onClick={() => Router.back()}><i className="bi bi-arrow-left mx-3"></i> Rating & Review</h5>
                </div>
            </nav>

            <div className={`mb-5 ${styles.ratingReviewPage}`}>

                {audioBookDetailsData ? <div className={styles.ratingReviewContentBox}>

                    <div className="mx-2 mt-3">

                        <div className={`text-center ${styles.audioBookcard}`}>

                            <Image
                                loader={myLoader}
                                width={100}
                                height={100}
                                src={audioBookDetailsData.thumb_path}
                                alt=""
                                className={`img-fluid ${styles.audiBookImg}`}
                            />

                            {/* <Image src="/drakula.jpeg" height={100} width={100} className={`img-fluid ${styles.audiBookImg}`} alt="..." /> */}

                            <p className={`card-title my-2 ${styles.bgText}`}>{audioBookDetailsData.name}</p>

                        </div>

                    </div>

                    <form onSubmit={submitForm}>

                        <div className="d-flex justify-content-center">
                            <ReactStars
                                onChange={starHandler}
                                count={5}
                                size={45}
                                color2={'#E78E23'}
                                half={true}
                            />
                        </div>

                        <div className="mt-3">


                            <div className="mb-3">
                                <textarea className={`form-control ${styles.reviewForm}`} onChange={reviewHandler} id="FormControlTextarea" rows={6} placeholder="Your Review"></textarea>
                            </div>

                            <div className="text-center">
                                <button className={styles.saveBtn} type="submit">Save</button>
                            </div>

                        </div>

                    </form>

                </div> : <></>}

            </div>

        </>
    );
}

export default RatingReviewComponent;