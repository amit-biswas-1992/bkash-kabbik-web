import styles from "../../styles/AudioPlayer.module.css";
import Link from "next/link";
import Router from "next/router";
import Image from "next/image";
import dynamic from "next/dynamic";
import { useRouter } from 'next/router'
import { getAudioBookDetails, getAuthorDetails, getCastCrewDetails, getRatingReviewList } from "../../services/api.service";
import AudioBookDetailsInfo from "../../models/AudioBookDetailsInfo";
import React, { useEffect, useState, useRef, useCallback } from "react";
import JwtTokenDecoder from "../../utils/globalfunction";


const AudioPlayerComponent = () => {

    const router = useRouter()
    const { id } = router.query;
    console.log(id);

    const [audioBookDetailsData, setaudioBookDetailsData] = useState<AudioBookDetailsInfo>();
    const [playList, setPlayList] = useState([]);

    const isToken = useCallback(async () => {
        console.log('-------------------VALIDATION-------------------')
        console.log(JwtTokenDecoder())
        console.log('-------------------VALIDATION-------------------')

        // if(JwtTokenDecoder()!= null &&  JwtTokenDecoder().phone != null && JwtTokenDecoder().phone != ''){

        // } else await router.push('/login')

        if (JwtTokenDecoder()) {

        } else
            await router.push('/login')

    }, [router]);

    useEffect(() => {

        isToken();
    }, [router]);


    const audioPlayer: any = useRef(null);

    const [index, setIndex] = useState(0);
    const [currentSong] = useState(playList[index]);
    const [isPlaying, setisPlaying] = useState(false);
    // const [volume, setVolume] = useState(30);

    const [elapsed, setElapsed]: any = useState();
    const [duration, setDuration]: any = useState();


    const togglePlay = () => {

        if (!isPlaying) {
            audioPlayer.current.play();
        } else {
            audioPlayer.current.pause();
        }
        setisPlaying(prev => !prev);
    };

    const toggleForward = () => {
        audioPlayer.current.currentTime += 10;
    };

    const toggleBackward = () => {
        audioPlayer.current.currentTime -= 10;
    };

    const toggleSkipForward = () => {
        if (index >= playList.length - 1) {
            setIndex(0);
            audioPlayer.current.src = playList[0];
            audioPlayer.current.play();
        } else {
            setIndex(prev => prev + 1);
            audioPlayer.current.src = playList[index + 1];
            audioPlayer.current.play();
        }
    };

    const toggleSkipBackward = () => {
        if (index > 0) {
            setIndex(prev => prev - 1);
            audioPlayer.current.src = playList[index - 1];
            audioPlayer.current.play();
        }
    };

    console.log('audioBookDetailsData');
    console.log(audioBookDetailsData);
    console.log('audioBookDetailsData');

    useEffect(() => {

        audioBookDetails();

        // audioBookplayer(audioBookDetailsData?.episodes);

        if (isPlaying) {
            setInterval(() => {
                const _duration = Math.floor(audioPlayer?.current?.duration);
                const _elapsed = Math.floor(audioPlayer?.current?.currentTime);

                setDuration(_duration);
                setElapsed(_elapsed);
            }, 100);
        }

    }, [id, isPlaying]);

    function formatTime(time: any) {
        if (time && !isNaN(time)) {
            const minutes = Math.floor(time / 60) < 10 ? `0${Math.floor(time / 60)}` : Math.floor(time / 60);
            const seconds = Math.floor(time % 60) < 10 ? `0${Math.floor(time % 60)}` : Math.floor(time % 60);;
            return `${minutes}:${seconds}`;
        }
        return '00:00';
    }

    const audioBookDetails = async () => {

        const data = await getAudioBookDetails(id);
        if (data)

            setaudioBookDetailsData(data);
        const episodeList: any = [];
        data.episodes?.forEach(function (data: any) {
            episodeList.push(
                data.file_path,
            );

        });
        setPlayList(episodeList);
    };

    const audioBookLoader = ({ src, width, quality }: any) => {
        return `${src}?w=${width}&q=${quality || 75}`;
    };

    return (
        <>

            <div className={styles.backBtn}>
                <h4 onClick={() => Router.back()}><i className="bi bi-arrow-left mx-3"></i> Now Playing </h4>
            </div>

            {audioBookDetailsData ? <div className={styles.audioPlayerPage}>

                <div className={styles.audioPlayerBox}>

                    <audio src={currentSong} ref={audioPlayer} ></audio>

                    <div className="mx-2 mt-5">

                        <div className={`text-center ${styles.audioBookcard}`}>

                            <Image
                                loader={audioBookLoader}
                                width={250}
                                height={100}
                                src={audioBookDetailsData.thumb_path}
                                alt=""
                                className={`img-fluid ${styles.audiBookImg}`}
                            />

                            <p className={`card-title ${styles.titleName}`}>{audioBookDetailsData.name}</p>
                            <p className={`mb-0 ${styles.authorName}`} >{audioBookDetailsData.author_name} </p>
                            <p className={styles.authorName} >{audioBookDetailsData.contributing_artists}</p>

                        </div>

                    </div>

                    <div className={`mx-5 ${styles.audioPlayer}`} >

                        <div className="text-center" >
                            <input type="range" max={duration} value={elapsed} defaultValue={0} style={{ width: "100%" }} />
                        </div>

                        <div className={`d-flex justify-content-between mx-2 ${styles.smText}`}>
                            <p>{formatTime(elapsed)}</p>
                            <p>16m</p>
                            <p>{formatTime(duration - elapsed)}</p>
                        </div>

                        <div className="d-flex justify-content-between">
                            <button onClick={toggleSkipBackward} className={styles.previusBtn}><i className="bi bi-skip-start-fill"></i></button>
                            <button onClick={toggleBackward} className={styles.backwardSkipBtn}><i className="bi bi-arrow-counterclockwise"></i></button>
                            <button onClick={togglePlay} className={styles.playBtn}>{isPlaying ? <i className="bi bi-pause-circle-fill"></i> : <i className="bi bi-play-circle-fill"></i>}</button>
                            <button onClick={toggleForward} className={styles.forwardSkipBtn}><i className="bi bi-arrow-clockwise"></i></button>
                            <button onClick={toggleSkipForward} className={styles.nextBtn}><i className="bi bi-skip-end-fill"></i></button>
                        </div>

                        <div className="d-flex justify-content-between mx-5">

                            <button className={styles.speedBtn} data-bs-toggle="offcanvas" data-bs-target="#offcanvasBottomSpeed" aria-controls="offcanvasBottomSpeed">
                                <p className={`mb-0 ${styles.speedText}`}>1.0x</p>
                                <p className="mb-0">Speed</p>
                            </button>

                            <div className="offcanvas offcanvas-bottom h-auto" tabIndex={-1} id="offcanvasBottomSpeed" aria-labelledby="offcanvasBottomLabelSpeed">

                                <div className={`offcanvas-body small ${styles.playBackSpeedBody}`}>
                                    <div className={styles.playBackSpeedHeader}>
                                        <p className="mt-3">Set Playback Speed</p>
                                    </div>
                                    <div className="m-5">
                                        <input type="range" className="form-range" min="0" max="2" step="0.01" id="speedRange" />
                                        <p style={{ color: "yellow" }}>1.0x</p>
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

                                    {audioBookDetailsData.episodes.map((episodes) => (

                                        <div key={episodes.id} className="col-12 col-sm-12 col-md-12">

                                            <div className={`mb-1 ${styles.playListCard}`}>
                                                <div className="d-flex">
                                                    <p className={`p-2 m-auto flex-grow-1 ${styles.episodesTitle}`} >{episodes.name}</p>
                                                    {/* <Link href="#" className=" p-2 m-auto" ><i className={`bi bi-play-circle-fill ${styles.episodesPlayBtn}`}></i></Link> */}
                                                    <button onClick={togglePlay} className={styles.playBtn}>{isPlaying ? <i className={`bi bi-pause-circle-fill ${styles.episodesPlayBtn}`}></i> : <i className={`bi bi-play-circle-fill ${styles.episodesPlayBtn}`}></i>}</button>
                                                </div>
                                            </div>

                                        </div>

                                    ))}

                                </div>
                            </div>
                        </div>
                    </div>

                </div>

            </div> : <></>}

        </>
    );
}

export default dynamic(() => Promise.resolve(AudioPlayerComponent), { ssr: false });