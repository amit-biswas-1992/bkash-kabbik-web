import styles from "../../styles/AudioBookDetails.module.css";
import Link from "next/link";
import Router from "next/router";
import Image from "next/image";
import dynamic from "next/dynamic";
import { useRouter } from 'next/router'
import { deleteFavoritesApi, getAudioBookDetails, getAuthorDetails, getCastCrewDetails, getRatingReviewList, postFavoritesApi } from "../../services/api.service";
import AudioBookDetailsInfo from "../../models/AudioBookDetailsInfo";
import AuthorInfo from "../../models/AuthorInfo";
import RatingReviewInfo from "../../models/RatingReviewInfo"
import castCrewInfo from "../../models/CastCrewInfo";
import React, { useEffect, useState } from "react";


const AudioBookDeatilsComponent = () => {

    const router = useRouter()
    const { id } = router.query;
    console.log(id);

    const [audioBookDetailsData, setaudioBookDetailsData] = useState<AudioBookDetailsInfo>();
    const [authorData, setauthorData] = useState<AuthorInfo[]>();
    const [castCrewData, setcastCrewData] = useState<castCrewInfo[]>()
    const [ratingReviewData, setratingReviewData] = useState<RatingReviewInfo[]>()
    const [favData, setFavData] = useState();
    const [isFav, setIsfav] = useState(false);

    console.log('audioBookDetailsData');
    console.log(audioBookDetailsData);
    console.log('audioBookDetailsData');

    console.log('Author Details');
    console.log(authorData);
    console.log('Author Details');

    console.log('CastCrew Details');
    console.log(castCrewData);
    console.log('CastCrew Details');

    console.log('Rating Details');
    console.log(ratingReviewData);
    console.log('Rating Details');

    useEffect(() => {
        audioBookDetails();
    }, [id]);



    const audioBookDetails = async () => {

        const data = await getAudioBookDetails(id);
        if (data)
            setaudioBookDetailsData(data);
        setIsfav(data.is_favorite);
        authorDetails(data.author_name);
        castCrewDetails(data.contributing_artists);
        ratingReviewList(data.id);
    }

    const authorDetails = async (author_name: any) => {

        const data = await getAuthorDetails(author_name);
        if (data)
            setauthorData(data.data);
    }

    const castCrewDetails = async (contributing_artists: any) => {
        const data = await getCastCrewDetails(contributing_artists)
        if (data)
            setcastCrewData(data.data);
    }

    const ratingReviewList = async (audiobook_id: any) => {
        const data = await getRatingReviewList(audiobook_id)
        if (data)
            setratingReviewData(data.data);
    };

    const favSubmit = async (event: any) => {
        console.log("hhhhhhhhhhhhhhh");

        if (isFav) {
            const fav = await deleteFavoritesApi(id);
            setIsfav(false);
        }
        else {
            const fav = await postFavoritesApi(id);
            setIsfav(true);
        }



        // const fav = await postFavoritesApi(id);
        // if (fav)
        //     setFavData(fav);
        // console.log('fav data', fav);

    };

    const myLoader = ({ src, width, quality }: any) => {
        return `${src}?w=${width}&q=${quality || 75}`;
    };

    const authorLoader = ({ src, width, quality }: any) => {
        return `${src}?w=${width}&q=${quality || 75}`;
    };

    const castCrewLoader = ({ src, width, quality }: any) => {
        return `${src}?w=${width}&q=${quality || 75}`;
    };

    const ratingDetail = (value: number) => {
        console.log(value);

        let list = [];
        for (let i = 0; i < value; i++) {
            list.push(
                <i className="bi bi-star-fill"></i>
            );
        }

        return list;
    }

    return (

        <> {audioBookDetailsData ? <div>

            <div className={` ${styles.backBtn}`}>
                <h4 className="" onClick={() => Router.back()}><i className="bi bi-arrow-left mx-3"></i> {audioBookDetailsData.name?.slice(0, 10)} </h4>
            </div>

            <div className={styles.audioBookDetailsPage}>

                <div className={styles.audioBookDetailsBox}>

                    <div className="mx-2 mt-3">

                        <div className={`text-center ${styles.audioBookcard}`}>

                            <Image
                                loader={myLoader}
                                width={200}
                                height={100}
                                src={audioBookDetailsData.thumb_path}
                                alt=""
                                className={`img-fluid ${styles.audiBookImg}`}
                            />

                            <p className={`card-title my-2 ${styles.bgText}`}> {audioBookDetailsData.name} </p>

                            <div className="mb-3">
                                {audioBookDetailsData.price == 0 ? <div className={styles.freeAudioText}>Free</div> : <div className={styles.premiumAudioText}>Premium</div>}
                            </div>


                        </div>

                    </div>

                    <div className={`container d-flex mt-2 justify-content-center align-items-center ${styles.btnPlacement}`}>

                        <div className="mx-2">

                            <button onClick={favSubmit} className={`d-flex align-items-center ${styles.favBtn}`} >
                                <i className="bi bi-heart-fill mx-1" style={{ fontSize: "20px", color: `${isFav ? "red" : "grey"}` }}></i>
                                <p className="mb-0">Favourite</p>
                            </button>

                        </div>
                        <div className="mx-2">
                            <Link href={`/audio_player/${audioBookDetailsData?.id}`} className={`d-flex align-items-center ${styles.listenNowBtn}`}>
                                <i className="bi bi-play-circle-fill mx-1" style={{ fontSize: "20px" }}></i>
                                <p className="mb-0" >এখানে শুনুন</p>
                            </Link>
                        </div>

                    </div>

                    <div className={`container d-flex mt-3 justify-content-center align-items-center ${styles.btnPlacement}`}>

                        <div className="mx-4">
                            <div className={`d-flex align-items-center ${styles.listenedBtn}`} >
                                <i className="bi bi-headphones mx-1" style={{ fontSize: "14px" }}></i>
                                <p className="mb-0" >{audioBookDetailsData.play_count}</p>
                            </div>
                        </div>
                        <div className="mx-4">
                            <div className={`d-flex align-items-center ${styles.ratingBtn}`}>
                                <i className="bi bi-star-fill mx-1" style={{ fontSize: "14px" }}></i>
                                <p className="mb-0" >{audioBookDetailsData.rating}</p>
                            </div>
                        </div>

                    </div>

                    <div className="text-center mt-3">
                        <Link href="#" className="d-flex justify-content-center align-items-center">

                            <p style={{ color: "goldenrod" }}>

                                {
                                    ratingDetail(audioBookDetailsData.rating)
                                }

                            </p>
                            <p className="mx-1" style={{ color: "white", fontSize: "10px", fontWeight: "600" }}>RATE NOW</p>
                        </Link>
                    </div>

                    <div className="mx-2">

                        <div className="accordion accordion-flush" id="accordionExample">
                            <div className="accordion-item">
                                <h2 className="accordion-header" id="headingThree">
                                    <div className={`accordion-button collapsed text-center ${styles.dropDownBtn}`} data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                                        Description
                                    </div>
                                </h2>
                                <div id="collapseThree" className="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
                                    <div className={`accordion-body ${styles.dropDownBtn}`}>

                                        <div className={styles.descriptionBody} >
                                            <small dangerouslySetInnerHTML={{ __html: audioBookDetailsData.description }} />

                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {(authorData && authorData.length > 0) ?

                            <div key={authorData[0].name}>

                                <Link href={`/author_details/${authorData[0].name}`}>

                                    <div className={`card mb-3 ${styles.authorCard}`}>
                                        <div className="d-flex">
                                            <div className="">

                                                <Image
                                                    loader={authorLoader}
                                                    width={100}
                                                    height={100}
                                                    src={authorData[0].imageUrl}
                                                    alt=""
                                                    className={`img-fluid relative text-center ${styles.authorImg}`}
                                                />

                                                {/* <div className={styles.authorImgEditLogo}>
                                                <i className="bi bi-vector-pen"></i>
                                            </div> */}
                                            </div>

                                            <div className={styles.vhLine}></div>

                                            <div className="w-100">
                                                <p className={`mb-1 ${styles.textColor}`}>
                                                    <small className="">{authorData[0].name}</small>
                                                </p>

                                                <p className="" style={{ color: "white", fontSize: "12px", fontWeight: "600" }}>
                                                    <small className=""><i className="bi bi-journal-text"></i> {authorData[0].total_audiobooks} Audiobooks</small>
                                                </p>

                                                <p className={` ${styles.textEnd}`}>
                                                    <small className="">More Audiobook</small>
                                                </p>
                                            </div>
                                        </div>
                                    </div>

                                </Link>

                            </div> : <></>}


                    </div>

                    <hr className={styles.hrLine} />

                    <div>

                        <ul className="nav nav-pills justify-content-between mx-3 mb-3" id="pills-tab" role="tablist">

                            <li className="nav-item mx-2" role="presentation">
                                <p className={`active ${styles.navMenu}`} id="pills-episodes-tab" data-bs-toggle="pill" data-bs-target="#pills-episodes" role="tab" aria-controls="pills-episodes" aria-selected="true">EPISODES</p>
                                <div className={styles.tabBorder}></div>
                            </li>

                            <li className="nav-item mx-2" role="presentation">
                                <p className={` ${styles.navMenu}`} id="pills-castcrew-tab" data-bs-toggle="pill" data-bs-target="#pills-castcrew" role="tab" aria-controls="pills-castcrew" aria-selected="true">CAST & CREW</p>
                                <div className={styles.tabBorder}></div>
                            </li>

                            <li className="nav-item mx-2" role="presentation">
                                <p className={` ${styles.navMenu}`} id="pills-reviews-tab" data-bs-toggle="pill" data-bs-target="#pills-reviews" role="tab" aria-controls="pills-reviews" aria-selected="true">REVIEWS</p>
                                <div className={styles.tabBorder}></div>
                            </li>

                        </ul>

                        <div className="tab-content" id="pills-tabContent">
                            <div className="tab-pane fade show active" id="pills-episodes" role="tabpanel" aria-labelledby="pills-episodes-tab" tabIndex={0}>

                                <div className="row py-3 mx-1">

                                    {audioBookDetailsData.episodes.map((episodes) => (

                                        <div key={episodes.id} className="col-12 col-sm-12 col-md-12">

                                            <Link href="/audio_player">

                                                <div className={`card mb-3 ${styles.episodesCard}`}>
                                                    <div className="d-flex">
                                                        <p className={`p-2 m-auto flex-grow-1 ${styles.episodesTitle}`}>{episodes.name} </p>
                                                        <Link href="#" className=" p-2 m-auto" ><i className={`bi bi-play-circle-fill ${styles.episodesPlayBtn}`}></i></Link>
                                                        <Link href="#" className=" p-2 m-auto" ><i className={`bi bi-arrow-down-circle ${styles.episodesDownloadBtn}`}></i></Link>
                                                    </div>
                                                </div>

                                            </Link>

                                        </div>

                                    ))}

                                </div>

                            </div>
                        </div>



                        <div className="tab-content" id="pills-tabContent">
                            <div className="tab-pane fade show " id="pills-castcrew" role="tabpanel" aria-labelledby="pills-castcrew-tab" tabIndex={0}>

                                <div className="row py-3 g-3 mx-2">

                                    {castCrewData?.map((castcrew) => (

                                        <div key={castcrew?.id} className="col-12 col-sm-12 col-md-12">

                                            <Link href={`/cast_crew_details/${castcrew?.name}`}>
                                                <div className={`card mb-3 ${styles.authorCard}`}>
                                                    <div className="d-flex">
                                                        <div className="">

                                                            <Image
                                                                loader={castCrewLoader}
                                                                width={100}
                                                                height={100}
                                                                src={castcrew.imageUrl}
                                                                alt=""
                                                                className={`img-fluid relative text-center ${styles.authorImg}`}
                                                            />

                                                            {/* <div className={styles.castCrewImgEditLogo}>
                                                                <i className="bi bi-mic-fill"></i>
                                                            </div> */}
                                                        </div>

                                                        <div className={styles.vhLine}></div>

                                                        <div className="w-100">
                                                            <p className={`mb-1 ${styles.textColor}`}>
                                                                <small className="">{castcrew.name}</small>
                                                            </p>

                                                            <p className="" style={{ color: "white", fontSize: "12px", fontWeight: "600" }}>
                                                                <small className=""><i className="bi bi-journal-text"></i> {castcrew.total_audiobooks} Audiobooks</small>
                                                            </p>

                                                            <p className={` ${styles.textEnd}`}>
                                                                <small className="">More Audiobook</small>
                                                            </p>
                                                        </div>
                                                    </div>
                                                </div>
                                            </Link>
                                        </div>

                                    ))}

                                </div>

                            </div>
                        </div>


                        <div className="tab-content" id="pills-tabContent">
                            <div className="tab-pane fade show " id="pills-reviews" role="tabpanel" aria-labelledby="pills-reviews-tab" tabIndex={0}>

                                <div className="row py-3 g-3 mx-2">

                                    {audioBookDetailsData ? <div className="text-center">
                                        <Link href={`/rating_review/${audioBookDetailsData?.id}`} type="submit" className={`${styles.addReviewBtn}`}>
                                            <span className="mt-2 d-flex justify-content-center">ADD REVIEW</span>
                                        </Link>
                                    </div> : <></>}

                                    {ratingReviewData?.map((rating) => (

                                        <div key={rating.user_id} className="col-12 col-sm-12 col-md-12">

                                            <div className={`card mb-3 ${styles.authorCard}`}>

                                                <div className="d-flex">

                                                    <div className="">
                                                        <Image src="/demo_face.jpg" height={50} width={50} className={`img-fluid relative text-center ${styles.reviewImg}`} alt="..." />
                                                    </div>

                                                    <div className="w-100 mx-3">

                                                        <p className={`mb-1 ${styles.textColor}`}>
                                                            <small className="">{rating.full_name}</small>
                                                        </p>

                                                        <div className="d-flex justify-content-between">

                                                            <div className="d-flex justify-content-center align-items-center" style={{ color: "white", fontSize: "12px", fontWeight: "600" }}>

                                                                <p style={{ color: "goldenrod" }}>

                                                                    {
                                                                        ratingDetail(rating.rating)
                                                                    }

                                                                </p>

                                                                <p className="mx-1" style={{ color: "white", fontSize: "10px", fontWeight: "600" }}>{rating.rating}</p>
                                                            </div>

                                                            <p className="" style={{ color: "white", fontSize: "12px", fontWeight: "600" }}>
                                                                <small className="">{new Date(rating.updated_at).toLocaleString()}</small>
                                                            </p>

                                                        </div>

                                                        <span style={{ fontSize: "10px", color: "#6c757d" }}>{rating.review}</span>

                                                    </div>
                                                </div>
                                            </div>

                                        </div>

                                    ))}

                                </div>

                            </div>
                        </div>

                    </div>

                </div>

            </div>
        </div> : <></>}</>
    )
}

export default dynamic(() => Promise.resolve(AudioBookDeatilsComponent), { ssr: false });