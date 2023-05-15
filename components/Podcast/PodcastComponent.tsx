import styles from "../../styles/Podcast.module.css";
import Image from "next/image";
import Link from "next/link";
import { getPodcastList } from "../../services/api.service";
import PostcastInfo from "../../models/PodcastInfo";
import React, { useEffect, useState } from "react";
import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';

const Podcast = () => {

    const [podcastListData, setpodcastListData] = useState<PostcastInfo[]>([]);

    useEffect(() => {
        podcastList();
    }, []);

    const podcastList = async () => {

        const data = await getPodcastList();
        if (data)
            setpodcastListData(data);

    }

    const myLoader = ({ src, width, quality }: any) => {
        return `${src}?w=${width}&q=${quality || 75}`;
    };


    return (

        <>
            {podcastListData ?

                <div className={`mx-2 py-3 ${styles.podcastPage}`} >

                    <div className="row g-4">

                        {podcastListData.map((podcast) => (

                            <div key={podcast?.id} className="col-12 col-sm-6 col-md-6">

                                <Link href={`audiobook_details/${podcast?.id}`}>

                                    <div className={`d-flex  align-items-center ${styles.podcastCard}`} >

                                        <Image
                                            loader={myLoader}
                                            width={110}
                                            height={110}
                                            src={podcast.thumb_path}
                                            alt=""
                                            className="p-1"
                                        />

                                        <div className="py-2 mx-2">
                                            <div className="d-flex justify-content-between">
                                                <div>
                                                    <h6 className={`mb-0 ${styles.textColor}`} >{podcast.name.slice(0, 12)}</h6>
                                                    <p className={`mb-0 text-muted ${styles.textColor}`}><small>{podcast.author_name}</small></p>
                                                </div>
                                                <div className="mx-2">
                                                    <button className={`mx-1 ${styles.starBtn}`}><i className="bi bi-star-fill"></i> {podcast.rating}</button>
                                                    <button className={styles.playBtn}><i className="bi bi-play-circle-fill"></i> {podcast.play_count}</button>
                                                </div>
                                            </div>
                                            <div className={`mb-0 ${styles.textColor}`} >
                                                <small dangerouslySetInnerHTML={{ __html: podcast.description.slice(0, 150) }} />
                                            </div>
                                        </div>
                                    </div>

                                </Link>

                            </div>
                        ))}

                    </div>

                </div>
                
                 :

                <div className="row g-4">

                    <div className="col-12 col-sm-6 col-md-6">

                        <div className={`d-flex  align-items-center ${styles.podcastCard}`} >

                            <Skeleton width={110} height={110} baseColor="#091227" highlightColor="#444" />

                            <div className="py-2 mx-2">
                                <div className="d-flex justify-content-between">
                                    <div>
                                        <h6><Skeleton baseColor="#091227" highlightColor="#444" /></h6>
                                        <p><small><Skeleton baseColor="#091227" highlightColor="#444" /></small></p>
                                    </div>
                                    <div className="mx-2">
                                        <Skeleton baseColor="#091227" highlightColor="#444" />
                                    </div>
                                </div>
                                <div className={`mb-0 ${styles.textColor}`} >
                                    <Skeleton baseColor="#091227" highlightColor="#444" />
                                </div>
                            </div>
                        </div>

                    </div>

                </div>

            }

        </>

    );
}

export default Podcast;