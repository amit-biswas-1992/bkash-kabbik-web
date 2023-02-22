import styles from "../../styles/AudioBookDetails.module.css";
import Link from "next/link";
import Router from "next/router";
import Image from "next/image";
import dynamic from "next/dynamic";

const AudioBookDeatilsComponent = () => {
    return (
        <>

            <div className={styles.backBtn}>
                <h4 onClick={() => Router.back()}><i className="bi bi-arrow-left mx-3"></i> ড্রাকুলা </h4>
            </div>

            <div className={styles.audioBookDetailsPage}>

                <div className={styles.audioBookDetailsBox}>

                    <div className="mx-2 mt-3">

                        <div className={`text-center ${styles.audioBookcard}`}>
                            <Image src="/drakula.jpeg" height={100} width={200} className={`img-fluid ${styles.audiBookImg}`} alt="..." />

                            <p className={`card-title my-2 ${styles.bgText}`}>ড্রাকুলা</p>
                            <span className={styles.freeAudioText} >Free</span>
                        </div>

                    </div>

                    <div className={`container d-flex mt-2 justify-content-center align-items-center ${styles.btnPlacement}`}>

                        <div className="mx-2">
                            <button className={`d-flex align-items-center ${styles.favBtn}`} >
                                <i className="bi bi-heart-fill mx-1" style={{ fontSize: "20px" }}></i>
                                <p className="mb-0" >Favourite</p>
                            </button>
                        </div>
                        <div className="mx-2">
                            <Link href="audio_player" className={`d-flex align-items-center ${styles.listenNowBtn}`}>
                                <i className="bi bi-play-circle-fill mx-1" style={{ fontSize: "20px" }}></i>
                                <p className="mb-0" >এখানে শুনুন</p>
                            </Link>
                        </div>

                    </div>

                    <div className={`container d-flex mt-3 justify-content-center align-items-center ${styles.btnPlacement}`}>

                        <div className="mx-4">
                            <div className={`d-flex align-items-center ${styles.listenedBtn}`} >
                                <i className="bi bi-headphones mx-1" style={{ fontSize: "14px" }}></i>
                                <p className="mb-0" >3065</p>
                            </div>
                        </div>
                        <div className="mx-4">
                            <div className={`d-flex align-items-center ${styles.ratingBtn}`}>
                                <i className="bi bi-star-fill mx-1" style={{ fontSize: "14px" }}></i>
                                <p className="mb-0" >4.7</p>
                            </div>
                        </div>

                    </div>

                    <div className="text-center mt-3">
                        <Link href="#" className="d-flex justify-content-center align-items-center">
                            <p style={{ color: "goldenrod" }}> <i className="bi bi-star-fill"></i> <i className="bi bi-star-fill"></i> <i className="bi bi-star-fill"></i> <i className="bi bi-star-fill"></i> <i className="bi bi-star-fill"></i></p>
                            <p className="mx-1" style={{ color: "white", fontSize: "10px", fontWeight: "600" }}>RATE NOW</p>
                        </Link>
                    </div>

                    <div className="mx-2">
                        <p style={{ color: "#bbbbbb" }}>কাব্যিকে শুনুন বিখ্যাত বই ড্রাকুলা </p>

                        <Link href="/author_details">

                            <div className={`card mb-3 ${styles.authorCard}`}>
                                <div className="d-flex">
                                    <div className="">
                                        <Image src="/juta.jpeg" height={100} width={100} className={`img-fluid relative text-center ${styles.authorImg}`} alt="..." />
                                        <div className={styles.authorImgEditLogo}>
                                            <i className="bi bi-vector-pen"></i>
                                        </div>
                                    </div>

                                    <div className={styles.vhLine}></div>

                                    <div className="w-100">
                                        <p className={`mb-1 ${styles.textColor}`}>
                                            <small className="">অনীশ দাশ অপু </small>
                                        </p>

                                        <p className="" style={{ color: "white", fontSize: "12px", fontWeight: "600" }}>
                                            <small className=""><i className="bi bi-journal-text"></i> 11 Audiobooks</small>
                                        </p>

                                        <p className={` ${styles.textEnd}`}>
                                            <small className="">More Audiobook</small>
                                        </p>
                                    </div>
                                </div>
                            </div>

                        </Link>

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

                                    <div className="col-12 col-sm-12 col-md-12">
                                        <Link href="/audio_player">

                                            <div className={`card mb-3 ${styles.episodesCard}`}>
                                                <div className="d-flex">
                                                    <p className={`p-2 m-auto flex-grow-1 ${styles.episodesTitle}`}>1. ড্রাকুলা: ট্রেইলার </p>
                                                    <Link href="#" className=" p-2 m-auto" ><i className={`bi bi-play-circle-fill ${styles.episodesPlayBtn}`}></i></Link>
                                                    <Link href="#" className=" p-2 m-auto" ><i className={`bi bi-arrow-down-circle ${styles.episodesDownloadBtn}`}></i></Link>
                                                </div>
                                            </div>

                                        </Link>
                                    </div>

                                    <div className="col-12 col-sm-12 col-md-12">
                                        <Link href="/audio_player">

                                            <div className={`card mb-3 ${styles.episodesCard}`}>
                                                <div className="d-flex">
                                                    <p className={`p-2 m-auto flex-grow-1 ${styles.episodesTitle}`}>1. ড্রাকুলা: পর্ব ১ </p>
                                                    <Link href="#" className=" p-2 m-auto" ><i className={`bi bi-play-circle-fill ${styles.episodesPlayBtn}`}></i></Link>
                                                    <Link href="#" className=" p-2 m-auto" ><i className={`bi bi-arrow-down-circle ${styles.episodesDownloadBtn}`}></i></Link>
                                                </div>
                                            </div>

                                        </Link>
                                    </div>

                                    <div className="col-12 col-sm-12 col-md-12">
                                        <Link href="/audio_player">

                                            <div className={`card mb-3 ${styles.episodesCard}`}>
                                                <div className="d-flex">
                                                    <p className={`p-2 m-auto flex-grow-1 ${styles.episodesTitle}`}>1. ড্রাকুলা: পর্ব ২ </p>
                                                    <Link href="#" className=" p-2 m-auto" ><i className={`bi bi-play-circle-fill ${styles.episodesPlayBtn}`}></i></Link>
                                                    <Link href="#" className=" p-2 m-auto" ><i className={`bi bi-arrow-down-circle ${styles.episodesDownloadBtn}`}></i></Link>
                                                </div>
                                            </div>

                                        </Link>
                                    </div>

                                    <div className="col-12 col-sm-12 col-md-12">
                                        <Link href="/audio_player">

                                            <div className={`card mb-3 ${styles.episodesCard}`}>
                                                <div className="d-flex">
                                                    <p className={`p-2 m-auto flex-grow-1 ${styles.episodesTitle}`}>1. ড্রাকুলা: পর্ব ৩ </p>
                                                    <Link href="#" className=" p-2 m-auto" ><i className={`bi bi-play-circle-fill ${styles.episodesPlayBtn}`}></i></Link>
                                                    <Link href="#" className=" p-2 m-auto" ><i className={`bi bi-arrow-down-circle ${styles.episodesDownloadBtn}`}></i></Link>
                                                </div>
                                            </div>

                                        </Link>
                                    </div>

                                    <div className="col-12 col-sm-12 col-md-12">
                                        <Link href="/audio_player">

                                            <div className={`card mb-3 ${styles.episodesCard}`}>
                                                <div className="d-flex">
                                                    <p className={`p-2 m-auto flex-grow-1 ${styles.episodesTitle}`}>1. ড্রাকুলা: পর্ব ৪ </p>
                                                    <Link href="#" className=" p-2 m-auto" ><i className={`bi bi-play-circle-fill ${styles.episodesPlayBtn}`}></i></Link>
                                                    <Link href="#" className=" p-2 m-auto" ><i className={`bi bi-arrow-down-circle ${styles.episodesDownloadBtn}`}></i></Link>
                                                </div>
                                            </div>

                                        </Link>
                                    </div>

                                </div>

                            </div>
                        </div>



                        <div className="tab-content" id="pills-tabContent">
                            <div className="tab-pane fade show " id="pills-castcrew" role="tabpanel" aria-labelledby="pills-castcrew-tab" tabIndex={0}>

                                <div className="row py-3 g-3 mx-2">

                                    <div className="col-12 col-sm-12 col-md-12">

                                        <Link href="/cast_crew_details">
                                            <div className={`card mb-3 ${styles.authorCard}`}>
                                                <div className="d-flex">
                                                    <div className="">
                                                        <Image src="/demo_face.jpg" height={100} width={100} className={`img-fluid relative text-center ${styles.authorImg}`} alt="..." />
                                                        <div className={styles.castCrewImgEditLogo}>
                                                            <i className="bi bi-mic-fill"></i>
                                                        </div>
                                                    </div>

                                                    <div className={styles.vhLine}></div>

                                                    <div className="w-100">
                                                        <p className={`mb-1 ${styles.textColor}`}>
                                                            <small className="">অনীশ দাশ অপু </small>
                                                        </p>

                                                        <p className="" style={{ color: "white", fontSize: "12px", fontWeight: "600" }}>
                                                            <small className=""><i className="bi bi-journal-text"></i> 11 Audiobooks</small>
                                                        </p>

                                                        <p className={` ${styles.textEnd}`}>
                                                            <small className="">More Audiobook</small>
                                                        </p>
                                                    </div>
                                                </div>
                                            </div>
                                        </Link>
                                    </div>

                                    <div className="col-12 col-sm-12 col-md-12">

                                        <Link href="/cast_crew_details">
                                            <div className={`card mb-3 ${styles.authorCard}`}>
                                                <div className="d-flex">
                                                    <div className="">
                                                        <Image src="/demo_face.jpg" height={100} width={100} className={`img-fluid relative text-center ${styles.authorImg}`} alt="..." />
                                                        <div className={styles.castCrewImgEditLogo}>
                                                            <i className="bi bi-mic-fill"></i>
                                                        </div>
                                                    </div>

                                                    <div className={styles.vhLine}></div>

                                                    <div className="w-100">
                                                        <p className={`mb-1 ${styles.textColor}`}>
                                                            <small className="">অনীশ দাশ অপু </small>
                                                        </p>

                                                        <p className="" style={{ color: "white", fontSize: "12px", fontWeight: "600" }}>
                                                            <small className=""><i className="bi bi-journal-text"></i> 11 Audiobooks</small>
                                                        </p>

                                                        <p className={` ${styles.textEnd}`}>
                                                            <small className="">More Audiobook</small>
                                                        </p>
                                                    </div>
                                                </div>
                                            </div>
                                        </Link>
                                    </div>

                                </div>

                            </div>
                        </div>

                        <div className="tab-content" id="pills-tabContent">
                            <div className="tab-pane fade show " id="pills-reviews" role="tabpanel" aria-labelledby="pills-reviews-tab" tabIndex={0}>

                                <div className="row py-3 g-3 mx-2">

                                    <div className="text-center">
                                        <Link href="/rating_review" type="submit" className={`${styles.addReviewBtn}`}>
                                            <span className="mt-2 d-flex justify-content-center">ADD REVIEW</span>
                                        </Link>
                                    </div>

                                    <div className="col-12 col-sm-12 col-md-12">

                                        <div className={`card mb-3 ${styles.authorCard}`}>

                                            <div className="d-flex">

                                                <div className="">
                                                    <Image src="/demo_face.jpg" height={100} width={40} className={`img-fluid relative text-center ${styles.reviewImg}`} alt="..." />
                                                </div>

                                                <div className="w-100 mx-3">

                                                    <p className={`mb-1 ${styles.textColor}`}>
                                                        <small className="">Tanvri Shahriar </small>
                                                    </p>

                                                    <div className="d-flex justify-content-between">

                                                        <div className="d-flex justify-content-center align-items-center" style={{ color: "white", fontSize: "12px", fontWeight: "600" }}>
                                                            <p style={{ color: "goldenrod" }}> <i className="bi bi-star-fill"></i> <i className="bi bi-star-fill"></i> <i className="bi bi-star-fill"></i> <i className="bi bi-star-fill"></i> <i className="bi bi-star-fill"></i></p>
                                                            <p className="mx-1" style={{ color: "white", fontSize: "10px", fontWeight: "600" }}>5.0</p>
                                                        </div>

                                                        <p className="" style={{ color: "white", fontSize: "12px", fontWeight: "600" }}>
                                                            <small className="">13/02/2023</small>
                                                        </p>

                                                    </div>

                                                    <span style={{fontSize: "10px", color: "#6c757d"}}>Good Book</span>

                                                </div>
                                            </div>
                                        </div>

                                    </div>

                                    <div className="col-12 col-sm-12 col-md-12">

                                        <div className={`card mb-3 ${styles.authorCard}`}>

                                            <div className="d-flex">

                                                <div className="">
                                                    <Image src="/demo_face.jpg" height={100} width={40} className={`img-fluid relative text-center ${styles.reviewImg}`} alt="..." />
                                                </div>

                                                <div className="w-100 mx-3">

                                                    <p className={`mb-1 ${styles.textColor}`}>
                                                        <small className="">Tanvri Shahriar </small>
                                                    </p>

                                                    <div className="d-flex justify-content-between">

                                                        <div className="d-flex justify-content-center align-items-center" style={{ color: "white", fontSize: "12px", fontWeight: "600" }}>
                                                            <p style={{ color: "goldenrod" }}> <i className="bi bi-star-fill"></i> <i className="bi bi-star-fill"></i> <i className="bi bi-star-fill"></i> <i className="bi bi-star-fill"></i> <i className="bi bi-star-fill"></i></p>
                                                            <p className="mx-1" style={{ color: "white", fontSize: "10px", fontWeight: "600" }}>5.0</p>
                                                        </div>

                                                        <p className="" style={{ color: "white", fontSize: "12px", fontWeight: "600" }}>
                                                            <small className="">13/02/2023</small>
                                                        </p>

                                                    </div>

                                                </div>
                                            </div>
                                        </div>

                                    </div>

                                    <div className="col-12 col-sm-12 col-md-12">

                                        <div className={`card mb-3 ${styles.authorCard}`}>

                                            <div className="d-flex">

                                                <div className="">
                                                    <Image src="/demo_face.jpg" height={100} width={40} className={`img-fluid relative text-center ${styles.reviewImg}`} alt="..." />
                                                </div>

                                                <div className="w-100 mx-3">

                                                    <p className={`mb-1 ${styles.textColor}`}>
                                                        <small className="">Tanvri Shahriar </small>
                                                    </p>

                                                    <div className="d-flex justify-content-between">

                                                        <div className="d-flex justify-content-center align-items-center" style={{ color: "white", fontSize: "12px", fontWeight: "600" }}>
                                                            <p style={{ color: "goldenrod" }}> <i className="bi bi-star-fill"></i> <i className="bi bi-star-fill"></i> <i className="bi bi-star-fill"></i> <i className="bi bi-star-fill"></i> <i className="bi bi-star-fill"></i></p>
                                                            <p className="mx-1" style={{ color: "white", fontSize: "10px", fontWeight: "600" }}>5.0</p>
                                                        </div>

                                                        <p className="" style={{ color: "white", fontSize: "12px", fontWeight: "600" }}>
                                                            <small className="">13/02/2023</small>
                                                        </p>

                                                    </div>

                                                    <span style={{fontSize: "10px", color: "#6c757d"}}>Good Book</span>

                                                </div>
                                            </div>
                                        </div>

                                    </div>

                                </div>

                            </div>
                        </div>

                    </div>

                </div>

            </div>

        </>

    );
}

export default dynamic(() => Promise.resolve(AudioBookDeatilsComponent), { ssr: false });