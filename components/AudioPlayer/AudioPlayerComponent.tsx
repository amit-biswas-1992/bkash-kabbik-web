import styles from "../../styles/AudioPlayer.module.css";
import Link from "next/link";
import Router from "next/router";
import Image from "next/image";
import dynamic from "next/dynamic";


const AudioPlayerComponent = () => {
    return (
        <>

            <div className={styles.backBtn}>
                <h4 onClick={() => Router.back()}><i className="bi bi-arrow-left mx-3"></i> ড্রাকুলা </h4>
            </div>

            <div className={styles.audioPlayerPage}>

                <div className={styles.audioPlayerBox}>

                    <div className="mx-2 mt-5">

                        <div className={`text-center ${styles.audioBookcard}`}>
                            <Image src="/kochi.jpeg" height={100} width={300} className={`img-fluid ${styles.audiBookImg}`} alt="..." />

                            <p className={`card-title ${styles.titleName}`}>কচি পাঁঠার ঝোল</p>
                            <p className={`mb-0 ${styles.authorName}`} >শুভঙ্কর মারিক </p>
                            <p className={styles.authorName} >শুভ</p>
                        </div>

                    </div>

                    <div className={`mx-5 ${styles.audioPlayer}`}>

                        <div className="text-center">
                            <input type="range" className="form-range" min="0" max="100" id="customRange1" />
                        </div>

                        <div className={`d-flex justify-content-between mx-2 ${styles.smText}`}>
                            <p>00:00</p>
                            <p>16m</p>
                            <p>-16:29</p>
                        </div>

                        <div className="d-flex justify-content-between">
                            <button className={styles.previusBtn}><i className="bi bi-skip-start-fill"></i></button>
                            <button className={styles.backwardSkipBtn}><i className="bi bi-arrow-counterclockwise"></i></button>
                            <button className={styles.playBtn}><i className="bi bi-play-circle-fill"></i></button>
                            <button className={styles.forwardSkipBtn}><i className="bi bi-arrow-clockwise"></i></button>
                            <button className={styles.nextBtn}><i className="bi bi-skip-end-fill"></i></button>
                        </div>

                        <div className="d-flex justify-content-between mx-5">

                            <button className={styles.speedBtn} data-bs-toggle="offcanvas" data-bs-target="#offcanvasBottomSpeed" aria-controls="offcanvasBottomSpeed">
                                <p className={`mb-0 ${styles.speedText}`}>1.0x</p>
                                <p className="mb-0">Speed</p>
                            </button>

                            <div className="offcanvas offcanvas-bottom h-auto" tabIndex={-1} id="offcanvasBottomSpeed" aria-labelledby="offcanvasBottomLabelSpeed">
                                {/* <div className="offcanvas-header">
                                    <h5 className="offcanvas-title" id="offcanvasBottomLabelSpeed">Offcanvas bottom</h5>
                                </div> */}
                                <div className={`offcanvas-body small ${styles.playBackSpeedBody}`}>
                                    <div className={styles.playBackSpeedHeader}>
                                        <p className="mt-3">Set Playback Speed</p>
                                    </div>
                                    <div className="m-5">
                                        <input type="range" className="form-range" min="0" max="2" step="0.01" id="speedRange" />
                                        <p style={{color: "yellow"}}>1.0x</p>
                                        <button type="button" className={styles.speedClsBtn} data-bs-dismiss="offcanvas" aria-label="Close">Close</button>
                                    </div>
                                </div>
                            </div>

                            <button className={styles.timerBtn} data-bs-toggle="offcanvas" data-bs-target="#offcanvasBottomSleepTimer" aria-controls="offcanvasBottomSleepTimer">
                                <i className={`bi bi-alarm ${styles.timerLogo}`}></i>
                                <p className="mb-0">Sleep Timer</p>
                            </button>

                            <div className="offcanvas offcanvas-bottom h-auto" tabIndex={-1} id="offcanvasBottomSleepTimer" aria-labelledby="offcanvasBottomLabelSleepTimer">
                                <div className="offcanvas-header">
                                    <h5 className="offcanvas-title" id="offcanvasBottomLabelSleepTimer">Offcanvas bottom</h5>
                                    <button type="button" className="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                                </div>
                                <div className="offcanvas-body small">
                                    siam
                                </div>
                            </div>

                        </div>

                    </div>

                    <div className="mx-3 mt-3">

                        <button className={styles.playListBtn} type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasBottom" aria-controls="offcanvasBottom">
                            <i className={`bi bi-music-note-list ${styles.plalistLogo}`}></i>
                            <p className="mt-3">PlayList</p>
                        </button>

                        <div className="offcanvas offcanvas-bottom h-auto" tabIndex={-1} id="offcanvasBottom" aria-labelledby="offcanvasBottomLabel">
                            <div className={`offcanvas-header ${styles.playListBody}`}>
                                <h5 className="offcanvas-title" id="offcanvasBottomLabel"></h5>
                                <button type="button" className="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                            </div>

                            <div className={`offcanvas-body small ${styles.playListBody}`}>

                                <div className={styles.playlistText}>PlayList</div>

                                <div className="row mx-1">

                                    <div className="col-12 col-sm-12 col-md-12">

                                        <Link href="/audio_player">

                                            <div className={`mb-1 ${styles.playListCard}`}>
                                                <div className="d-flex">
                                                    <p className={`p-2 m-auto flex-grow-1 ${styles.episodesTitle}`}>1. ড্রাকুলা: ট্রেইলার </p>
                                                    <Link href="#" className=" p-2 m-auto" ><i className={`bi bi-play-circle-fill ${styles.episodesPlayBtn}`}></i></Link>
                                                </div>
                                            </div>

                                        </Link>
                                    </div>

                                    <div className="col-12 col-sm-12 col-md-12">
                                        <Link href="/audio_player">

                                            <div className={`mb-1 ${styles.playListCard}`}>
                                                <div className="d-flex">
                                                    <p className={`p-2 m-auto flex-grow-1 ${styles.episodesTitle}`}>1. ড্রাকুলা: পর্ব ১ </p>
                                                    <Link href="#" className=" p-2 m-auto" ><i className={`bi bi-play-circle-fill ${styles.episodesPlayBtn}`}></i></Link>
                                                </div>
                                            </div>

                                        </Link>
                                    </div>

                                    <div className="col-12 col-sm-12 col-md-12">

                                        <Link href="/audio_player">

                                            <div className={`mb-1 ${styles.playListCard}`}>
                                                <div className="d-flex">
                                                    <p className={`p-2 m-auto flex-grow-1 ${styles.episodesTitle}`}>1. ড্রাকুলা: পর্ব ২ </p>
                                                    <Link href="#" className=" p-2 m-auto" ><i className={`bi bi-play-circle-fill ${styles.episodesPlayBtn}`}></i></Link>
                                                </div>
                                            </div>

                                        </Link>

                                    </div>

                                    <div className="col-12 col-sm-12 col-md-12">
                                        <Link href="/audio_player">

                                            <div className={`mb-1 ${styles.playListCard}`}>
                                                <div className="d-flex">
                                                    <p className={`p-2 m-auto flex-grow-1 ${styles.episodesTitle}`}>1. ড্রাকুলা: পর্ব ৩ </p>
                                                    <Link href="#" className=" p-2 m-auto" ><i className={`bi bi-play-circle-fill ${styles.episodesPlayBtn}`}></i></Link>
                                                </div>
                                            </div>

                                        </Link>
                                    </div>

                                    <div className="col-12 col-sm-12 col-md-12">
                                        <Link href="/audio_player">

                                            <div className={`mb-1 ${styles.playListCard}`}>
                                                <div className="d-flex">
                                                    <p className={`p-2 m-auto flex-grow-1 ${styles.episodesTitle}`}>1. ড্রাকুলা: পর্ব ৪ </p>
                                                    <Link href="#" className=" p-2 m-auto" ><i className={`bi bi-play-circle-fill ${styles.episodesPlayBtn}`}></i></Link>
                                                </div>
                                            </div>

                                        </Link>
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

export default dynamic(() => Promise.resolve(AudioPlayerComponent), { ssr: false });