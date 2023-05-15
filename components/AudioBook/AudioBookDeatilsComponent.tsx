import styles from "../../styles/AudioBookDetails.module.css";
import Link from "next/link";
import Router from "next/router";
import Image from "next/image";
import dynamic from "next/dynamic";
import { useRouter } from 'next/router'
import { deleteFavoritesApi, getAudioBookDetails, postAudiobookPlayCountApi, getAuthorDetails, getCastCrewDetails, getRatingReviewList, postEpisodePlayCountApi, postFavoritesApi } from "../../services/api.service";
import AudioBookDetailsInfo from "../../models/AudioBookDetailsInfo";
import AuthorInfo from "../../models/AuthorInfo";
import RatingReviewInfo from "../../models/RatingReviewInfo"
import castCrewInfo from "../../models/CastCrewInfo";
import UserProfileInfo from "../../models/UserProfileInfo";
import { getUserProfile } from "../../services/api.service";
import React, { useCallback, useEffect, useRef, useState } from "react";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';


const AudioBookDeatilsComponent = () => {

    const router = useRouter()
    const { id } = router.query;

    // const [userData, setUserData] = useState<UserProfileInfo>();
    const [audioBookDetailsData, setaudioBookDetailsData] = useState<AudioBookDetailsInfo>();
    const [authorData, setauthorData] = useState<AuthorInfo[]>();
    const [castCrewData, setcastCrewData] = useState<castCrewInfo[]>()
    const [ratingReviewData, setratingReviewData] = useState<RatingReviewInfo[]>();
    const [isFav, setIsfav] = useState(false);


    //player!!!!!!!!

    const audioPlayer: any = useRef(null);
    const progressBarRef: any = useRef(null);

    const [playList, setPlayList]: any = useState([]);
    const [epList, setEpList]: any = useState([]);
    const [currentPlay, setCurrentPlay]: any = useState({});
    const [index, setIndex] = useState(-1);
    const [currentSong] = useState(playList[index]);
    const [isPlaying, setisPlaying] = useState(false);
    const [elapsed, setElapsed]: any = useState();
    const [duration, setDuration]: any = useState();
    const [showMiniPlayer, setShowMiniPlayer] = useState(false);
    const [audioBookCount, setAudioBookCount] = useState(false);

    //player!!!!!!!!

    useEffect(() => {

        audioBookDetails();
        // audioBookPlayCount(id);

    }, [id]);

    const [is_subscribed, set_is_subscribed] = useState(false);
    const isAuthenticated = useCallback(async () => {
        const isSubscribed = JSON.parse(localStorage.getItem("is_subscribed") || "{}");
        if (isSubscribed === 1)
            set_is_subscribed(true);
    }, [router]);

    useEffect(() => {
        isAuthenticated();
    }, [isAuthenticated]);

    const audioBookDetails = async () => {

        const data = await getAudioBookDetails(id);
        if (data)
            setaudioBookDetailsData(data);
        setIsfav(data.is_favorite);
        authorDetails(data.author_name);
        castCrewDetails(data.contributing_artists);
        ratingReviewList(data.id);

        const episodeList: any = [];
        data.episodes?.forEach(function (data: any) {
            episodeList.push(
                data.file_path
            );

        });

        setPlayList(episodeList);

        setEpList(data.episodes);

        if (index == -1) {

            setIndex(0);
            setCurrentPlay(data.episodes[0]);

        }
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

    const favSubmit = async () => {

        if (isFav) {
            const fav = await deleteFavoritesApi(id);
            setIsfav(false);
            toast.info("Removed from favourites !", {
                position: toast.POSITION.TOP_RIGHT,
                autoClose: 3000,
                hideProgressBar: false,
                pauseOnHover: false,
                draggable: true,
                theme: "dark",
            });
        }
        else {
            const fav = await postFavoritesApi(id);
            setIsfav(true);
            toast.success("Added to favourites !", {
                position: toast.POSITION.TOP_RIGHT,
                autoClose: 3000,
                hideProgressBar: false,
                pauseOnHover: false,
                draggable: true,
                theme: "dark",
            });
        }

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

        let list = [];
        for (let i = 0; i < value; i++) {
            list.push(
                <i className="bi bi-star-fill"></i>
            );
        }

        return list;
    };

    // AudioPlayer Configuration

    const togglePlay = async (aid: any) => {

        if (!isPlaying) {

            setIndex(index);

            if (audioPlayer.current.src == "") {
                audioPlayer.current.src = playList[index];
            }

            audioPlayer.current.play();

            await postEpisodePlayCountApi(currentPlay.id);

        } else {

            audioPlayer.current.pause();
        }

        setCurrentPlay(epList[index]);
        setisPlaying(prev => !prev);

        // const audioBookPlayCount = async (id: any) => {

        //     console.log('ahsahsihaihsi');

        //     setAudioBookCount (true);
        //     await postAudiobookPlayCountApi (id);

        // }

        // !audioBookCount ? await audioBookPlayCount(id) : '';
    };

    const togglePlayList = async (ind: any,) => {

        setIndex(ind);
        audioPlayer.current.src = playList[ind];
        setCurrentPlay(epList[ind]);
        audioPlayer.current.play();
        setisPlaying(true);
        await postEpisodePlayCountApi(currentPlay.id);
        setShowMiniPlayer(true);

        const audioBookPlayCount = async (id: any) => {

            console.log('ahsahsihaihsi');

            setAudioBookCount(true);
            await postAudiobookPlayCountApi(id);

        }

        !audioBookCount ? await audioBookPlayCount(id) : '';

    };

    const toggleForward = () => {
        audioPlayer.current.currentTime += 10;
    };

    const toggleBackward = () => {
        audioPlayer.current.currentTime -= 10;
    };

    const toggleSkipForward = async () => {
        if (index >= playList.length - 1) {
            setIndex(0);
            audioPlayer.current.src = playList[0];
            audioPlayer.current.play();
            setCurrentPlay(epList[0]);

        } else {
            setIndex(prev => prev + 1);
            audioPlayer.current.src = playList[index + 1];
            audioPlayer.current.play();
            setisPlaying(true);
            setCurrentPlay(epList[index + 1]);
            await postEpisodePlayCountApi(currentPlay.id);
        }
    };

    const toggleSkipBackward = async () => {
        if (index > 0) {
            setIndex(prev => prev - 1);
            audioPlayer.current.src = playList[index - 1];
            audioPlayer.current.play();
            setCurrentPlay(epList[index - 1]);
            await postEpisodePlayCountApi(currentPlay.id);
        }
    };

    useEffect(() => {

        audioBookDetails();

        if (isPlaying) {

            setInterval(() => {

                const _duration = Math.floor(audioPlayer?.current?.duration);
                const _elapsed = Math.floor(audioPlayer?.current?.currentTime);

                setDuration(_duration);
                setElapsed(_elapsed);

            }, 100);
        };

    }, [id, isPlaying]);

    function formatTime(time: any) {
        if (time && !isNaN(time)) {
            const minutes = Math.floor(time / 60) < 10 ? `0${Math.floor(time / 60)}` : Math.floor(time / 60);
            const seconds = Math.floor(time % 60) < 10 ? `0${Math.floor(time % 60)}` : Math.floor(time % 60);;
            return `${minutes}:${seconds}`;
        }
        return '00:00';
    };

    const handleSeekBar = () => {
        audioPlayer.current.currentTime = progressBarRef.current.value;
    };

    const miniPlayerHandler = () => {

        audioPlayer.current.pause();

        setShowMiniPlayer(false);

    };

    const MiniPlayerBody = () => (

        <div id="results" className="search-results">

            <div className="" style={{ position: "fixed", bottom: "31px", margin: "auto", width: "100%", right: "0" }}>

                <div className="d-flex justify-content-end">
                    <button id="hide-button" className="mx-1" onClick={miniPlayerHandler}
                        style={{ display: "block", background: "rgba(71, 72, 77, 0.6)", padding: "5px", backdropFilter: "blur(5px)", border: "none", borderRadius: "50px", font: "bold" }}><i className="bi bi-x-lg"></i>
                    </button>
                </div>

                <div className="container-fluid p-2" id="audio-player"
                    style={{ display: "block", background: "rgba(1, 4, 27, 0.6)", backdropFilter: "blur(5px)" }}>

                    <div className="player row">
                        <div className="details d-flex justify-content-center align-items-center col-12 col-sm-4 col-md-4 col-lg-4">
                            <div className="track-art mx-2"></div>
                            <div>
                                <div className="track-name" style={{ color: "white" }}>{currentPlay ? currentPlay.name : ""}</div>
                                <div className="track-artist" style={{ color: "white" }}>{audioBookDetailsData?.author_name}</div>
                            </div>
                        </div>
                        <div
                            className="d-flex justify-content-center align-items-center col-12 col-sm-4 col-md-4 col-lg-4">
                            <div className={` mx-2 ${styles.smText}`} >{formatTime(elapsed)}</div>
                            <input type="range" max={duration} value={elapsed} onChange={handleSeekBar} ref={progressBarRef} defaultValue={0} style={{ width: "100%" }} />
                            <div className={` mx-2 ${styles.smText}`} >{formatTime(duration - elapsed)}</div>
                        </div>
                        <div className="d-flex justify-content-center align-items-center col-12 col-sm-4 col-md-4 col-lg-4">
                            <button onClick={toggleSkipBackward} className={styles.miniPreviusBtn}><i className="bi bi-skip-start-fill"></i></button>
                            <button onClick={toggleBackward} className={styles.miniBackwardSkipBtn}><i className="bi bi-arrow-counterclockwise"></i></button>
                            <button onClick={togglePlay} className={styles.miniPlayBtn}>{isPlaying ? <i className="bi bi-pause-circle-fill"></i> : <i className="bi bi-play-circle-fill"></i>}</button>
                            <button onClick={toggleForward} className={styles.miniForwardSkipBtn}><i className="bi bi-arrow-clockwise"></i></button>
                            <button onClick={toggleSkipForward} className={styles.miniNextBtn}><i className="bi bi-skip-end-fill"></i></button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )


    // AudioPlayer Configuration

    return (

        <>

            <div>

                {audioBookDetailsData ? <div className={` ${styles.backBtn}`}>
                    <h4 className="" onClick={() => Router.back()}><i className="bi bi-arrow-left mx-3"></i> {audioBookDetailsData.name?.slice(0, 10)} </h4>
                </div> : <></>}

                <div className={styles.audioBookDetailsPage}>

                    <div className={styles.audioBookDetailsBox}>

                        {audioBookDetailsData ? <div className="mx-2 mt-3">

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
                                    {is_subscribed === true ? <div className={styles.freeAudioText}>Premium User</div> :
                                        audioBookDetailsData?.price === 0 ?
                                            <div className={styles.freeAudioText}>Free</div>
                                            : <div className={styles.premiumAudioText}>Premium</div>}
                                </div>

                            </div>

                        </div> :

                            <div className="mx-2 mt-3">

                                <div className={`text-center ${styles.audioBookcard}`}>

                                    <Skeleton height={300} width={200} baseColor="#091227" highlightColor="#444" />

                                    <p className={`card-title my-2 ${styles.bgText}`}> <Skeleton baseColor="#091227" highlightColor="#444" /> </p>

                                    <div className="mb-3">
                                        <div className={styles.premiumAudioText}><Skeleton baseColor="#091227" highlightColor="#444" /></div>
                                    </div>

                                </div>

                            </div>}

                        {audioBookDetailsData ? <div className={`container d-flex mt-2 justify-content-center align-items-center ${styles.btnPlacement}`}>

                            <div className="mx-2">

                                <button onClick={() => { favSubmit() }} className={`d-flex align-items-center ${styles.favBtn}`} >
                                    <i className="bi bi-heart-fill mx-1" style={{ fontSize: "20px", color: `${isFav ? "red" : "grey"}` }}></i>
                                    <p className="mb-0">Favourite</p>
                                </button>
                                <ToastContainer />

                            </div>

                            <div className="mx-2">
                                <Link href={is_subscribed === true || audioBookDetailsData?.price === 0 ? `/audio_player/${audioBookDetailsData?.id}` : "/subscribe"} className={`d-flex align-items-center ${styles.listenNowBtn}`}>
                                    <i className="bi bi-play-circle-fill mx-1" style={{ fontSize: "20px" }}></i>
                                    <p className="mb-0" >এখানে শুনুন</p>
                                </Link>
                            </div>

                        </div> : <div className={`container d-flex mt-2 justify-content-center align-items-center ${styles.btnPlacement}`}>

                            <div className="mx-2">
                                <div className={`d-flex align-items-center`}>
                                    <Skeleton baseColor="#091227" highlightColor="#444" />
                                </div>
                            </div>

                            <div className="mx-2">
                                <div className={`d-flex align-items-center`}>
                                    <Skeleton baseColor="#091227" highlightColor="#444" />
                                </div>
                            </div>

                        </div>}

                        {audioBookDetailsData ? <div className={`container d-flex mt-3 justify-content-center align-items-center ${styles.btnPlacement}`}>

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

                        </div> :

                            <div className={`container d-flex mt-3 justify-content-center align-items-center ${styles.btnPlacement}`}>

                                <div className="mx-4">
                                    <div className={`d-flex align-items-center`}>
                                        <Skeleton baseColor="#091227" highlightColor="#444" />
                                    </div>
                                </div>
                                <div className="mx-4">
                                    <div className={`d-flex align-items-center`}>
                                        <Skeleton baseColor="#091227" highlightColor="#444" />
                                    </div>
                                </div>

                            </div>}

                        {audioBookDetailsData ? <div className="text-center mt-3">

                            <Link href={`/rating_review/${audioBookDetailsData?.id}`} className="d-flex justify-content-center align-items-center">

                                <p style={{ color: "goldenrod" }}>

                                    {
                                        ratingDetail(audioBookDetailsData.rating)
                                    }

                                </p>
                                <p className="mx-1" style={{ color: "white", fontSize: "10px", fontWeight: "600" }}>RATE NOW</p>
                            </Link>

                        </div> :

                            <div className="text-center mt-3">

                                <div className="d-flex justify-content-center align-items-center">

                                    <Skeleton baseColor="#091227" highlightColor="#444" />

                                    <Skeleton baseColor="#091227" highlightColor="#444" />

                                </div>

                            </div>}

                        {/* {audioBookDetailsData ? <div className={` ${styles.backBtn}`}>
                            <h4 className="" onClick={() => Router.back()}><i className="bi bi-arrow-left mx-3"></i> {audioBookDetailsData.name?.slice(0, 10)} </h4>
                        </div> : <></>} */}

                        <div className="mx-2">

                            <div className="accordion accordion-flush" id="accordionExample">
                                <div className="accordion-item">
                                    <h2 className="accordion-header" id="headingThree">
                                        <div className={`accordion-button collapsed text-center ${styles.dropDownBtn}`} data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                                            Description
                                        </div>
                                    </h2>

                                    {audioBookDetailsData ? <div id="collapseThree" className="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
                                        <div className={`accordion-body ${styles.dropDownBtn}`}>

                                            <div className={styles.descriptionBody} >

                                                <small dangerouslySetInnerHTML={{ __html: audioBookDetailsData.description }} />

                                            </div>
                                        </div>
                                    </div> : <></>}

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

                                </div> :

                                <div>

                                    <div className={`card mb-3 ${styles.authorCard}`}>

                                        <Skeleton height={100} baseColor="#091227" highlightColor="#444" />

                                    </div>

                                </div>

                            }

                        </div>

                        <hr className={styles.hrLine} />

                        <div>

                            <ul className="nav nav-pills justify-content-between mx-3 mb-1" id="pills-tab" role="tablist">

                                <li className="nav-item mx-2" role="presentation">
                                    <p className={`nav-link active ${styles.navMenu}`} id="pills-episodes-tab" data-bs-toggle="pill" data-bs-target="#pills-episodes" role="tab" aria-controls="pills-episodes" aria-selected="true">EPISODES</p>
                                    {/* <div className={styles.tabBorder}></div> */}
                                </li>

                                <li className="nav-item mx-2" role="presentation">
                                    <p className={`nav-link ${styles.navMenu}`} id="pills-castcrew-tab" data-bs-toggle="pill" data-bs-target="#pills-castcrew" role="tab" aria-controls="pills-castcrew" aria-selected="true">CAST & CREW</p>
                                    {/* <div className={styles.tabBorder}></div> */}
                                </li>

                                <li className="nav-item mx-2" role="presentation">
                                    <p className={`nav-link ${styles.navMenu}`} id="pills-reviews-tab" data-bs-toggle="pill" data-bs-target="#pills-reviews" role="tab" aria-controls="pills-reviews" aria-selected="true">REVIEWS</p>
                                    {/* <div className={styles.tabBorder}></div> */}
                                </li>

                            </ul>

                            <div className="tab-content" id="pills-tabContent">

                                <div className="tab-pane fade show active" id="pills-episodes" role="tabpanel" aria-labelledby="pills-episodes-tab" tabIndex={0}>

                                    {audioBookDetailsData ? <div className="row py-1 mx-1">

                                        {audioBookDetailsData.episodes.map((episodes, i) => (

                                            <div key={episodes.id} className="col-12 col-sm-12 col-md-12">

                                                <div className={`mb-1 ${styles.playListCard}`}>

                                                    <div className="d-flex justify-content-between align-items-center" style={{ height: "40px" }}>

                                                        <p className={`mb-0 ${styles.episodesTitle}`} >{episodes.name}</p>

                                                        {is_subscribed === true || audioBookDetailsData?.price === 0 ? <div onClick={() => togglePlayList(i)} className={`mb-4 ${styles.playBtn}`}>{index == i && isPlaying ? <i className={`bi bi-pause-circle-fill ${styles.episodesPlayBtn}`}></i> : <i className={`bi bi-play-circle-fill ${styles.episodesPlayBtn}`}></i>}</div> : <Link href="/subscribe"><button onClick={() => togglePlayList(i)} className={`mb-4 ${styles.playBtn}`}>{index == i && isPlaying ? <i className={`bi bi-pause-circle-fill ${styles.episodesPlayBtn}`}></i> : <i className={`bi bi-play-circle-fill ${styles.episodesPlayBtn}`}></i>}</button></Link>}

                                                    </div>

                                                    <hr className={`${styles.hrLine}`} />

                                                </div>

                                            </div>

                                        ))}

                                    </div> : <div className="row py-3 mx-1">

                                        <div className="col-12 col-sm-12 col-md-12">

                                            <div className={`card mb-3 ${styles.episodesCard}`}>
                                                <Skeleton baseColor="#091227" highlightColor="#444" />
                                            </div>

                                        </div>

                                    </div>}

                                </div>
                            </div>

                            <audio src={currentSong} ref={audioPlayer} ></audio>

                            <div>
                                {showMiniPlayer ? <MiniPlayerBody /> : null}
                            </div>

                            <div className="tab-content" id="pills-tabContent">
                                <div className="tab-pane fade show " id="pills-castcrew" role="tabpanel" aria-labelledby="pills-castcrew-tab" tabIndex={0}>

                                    {castCrewData ? <div className="row py-3 g-3 mx-2">

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

                                    </div> :

                                        <div className="row py-3 g-3 mx-2">

                                            <div className="col-12 col-sm-12 col-md-12">

                                                <div className={`card mb-3 ${styles.authorCard}`}>

                                                    <Skeleton height={100} baseColor="#091227" highlightColor="#444" />

                                                </div>

                                            </div>

                                        </div>

                                    }

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

                                        {ratingReviewData ? <div>

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

                                        </div> :

                                            <div>

                                                <div className="col-12 col-sm-12 col-md-12">

                                                    <div className={`card mb-3 ${styles.authorCard}`}>

                                                        <Skeleton height={100} baseColor="#091227" highlightColor="#444" />

                                                    </div>

                                                </div>

                                            </div>

                                        }

                                    </div>

                                </div>
                            </div>

                        </div>

                    </div>

                </div>

            </div>

        </>
    )
}

export default dynamic(() => Promise.resolve(AudioBookDeatilsComponent), { ssr: false });