import styles from "../../styles/AudioPlayer.module.css";
import Link from "next/link";
import Router from "next/router";
import Image from "next/image";
import dynamic from "next/dynamic";
import { useRouter } from 'next/router'
import { getAudioBookDetails, postAudiobookPlayCountApi, postEpisodePlayCountApi } from "../../services/api.service";
import AudioBookDetailsInfo from "../../models/AudioBookDetailsInfo";
import React, { useEffect, useState, useRef, useCallback } from "react";
import JwtTokenDecoder from "../../utils/globalfunction";


const MiniAudioPlayerComponent = () => {

    const router = useRouter()
    const { id } = router.query;

    const [audioBookDetailsData, setaudioBookDetailsData] = useState<AudioBookDetailsInfo>();


    const isToken = useCallback(async () => {

        if (JwtTokenDecoder()) {

        } else
            await router.push('/login')

    }, [router]);

    useEffect(() => {

        isToken();
    }, [router]);

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

    //player!!!!!!!!

    const togglePlay = async (indexId: any) => {

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
    };

    const togglePlayList = async (ind: any,) => {

        setIndex(ind);
        audioPlayer.current.src = playList[ind];
        setCurrentPlay(epList[ind]);
        audioPlayer.current.play();
        setisPlaying(true);
        await postEpisodePlayCountApi(currentPlay.id);
        setShowMiniPlayer(true);

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

    const audioBookDetails = async () => {

        const data = await getAudioBookDetails(id);
        if (data)

            setaudioBookDetailsData(data);
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
    };

    const miniPlayerHandler = () => {

        setShowMiniPlayer(false);

    };

    const MiniPlayerBody = () => (

        <div id="results" className="search-results">

            <div className="fixed-bottom">

                <div className="d-flex justify-content-end">
                    <button id="hide-button" onClick={miniPlayerHandler}
                        style={{ display: "block", background: "rgba(71, 72, 77, 0.6)", backdropFilter: "blur(5px)", border: "none", borderRadius: "50px", font: "bold" }}><i className="bi bi-x-lg"></i>
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

    return (
        <>

            <div className={styles.backBtn}>
                <h4 onClick={() => Router.back()}><i className="bi bi-arrow-left mx-3"></i> Now Playing </h4>
            </div>

            {audioBookDetailsData ? <div className={styles.audioPlayerPage}>

                <div className={styles.audioPlayerBox}>

                    <audio src={currentSong} ref={audioPlayer} ></audio>

                    <div className="mx-3 mt-3">

                        <button className={styles.playListBtn} type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasBottom" aria-controls="offcanvasBottom">
                            <i className={`bi bi-music-note-list ${styles.plalistLogo}`}></i>
                            <p className="mt-3">PlayList</p>
                        </button>

                        <div className={`offcanvas offcanvas-bottom h-auto m-auto ${styles.offcanvasBody}`} tabIndex={-1} id="offcanvasBottom" aria-labelledby="offcanvasBottomLabel">
                            <div className={`offcanvas-header ${styles.playListBody}`}>
                                <h5 className="offcanvas-title" id="offcanvasBottomLabel"></h5>
                                <button type="button" className="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                            </div>

                            <div className={`offcanvas-body small ${styles.playListBody}`}>

                                <div className={styles.playlistText}>PlayList</div>

                                

                                <div className="row mx-1">

                                    {audioBookDetailsData.episodes.map((episodes, i) => (

                                        <div key={episodes.id} className="col-12 col-sm-12 col-md-12">


                                            <div className={`mb-1 ${styles.playListCard}`}>
                                                <div className="d-flex">
                                                    <p className={`p-2 m-auto flex-grow-1 ${styles.episodesTitle}`} >{episodes.name}</p>
                                                    <button onClick={() => togglePlayList(i)} className={styles.playBtn}>{index == i && isPlaying ? <i className={`bi bi-pause-circle-fill ${styles.episodesPlayBtn}`}></i> : <i className={`bi bi-play-circle-fill ${styles.episodesPlayBtn}`}></i>}</button>
                                                </div>
                                            </div>

                                        </div>

                                    ))}

                                </div>
                            </div>
                        </div>
                    </div>

                    <div>
                        {showMiniPlayer ? <MiniPlayerBody /> : null}
                    </div>

                </div>

            </div > : <></>
            }

        </>
    );
}

export default dynamic(() => Promise.resolve(MiniAudioPlayerComponent), { ssr: false });