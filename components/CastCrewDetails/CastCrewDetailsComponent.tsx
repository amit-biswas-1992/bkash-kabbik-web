import styles from "../../styles/CastCrewDetails.module.css";
import Router from "next/router";
import Image from "next/image";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCrown } from "@fortawesome/free-solid-svg-icons";
import { useRouter } from 'next/router';
import CastCrewInfo from "../../models/CastCrewInfo";
import CastCrewEpisodesInfo from "../../models/CastCrewEpisodesInfo";
import { getCastCrewDetails, getCastCrewEpisodesDetails } from "../../services/api.service";
import React, { useEffect, useState } from "react";

const CastCrewComponent = () => {

    const router = useRouter()
    const { name } = router.query;
    const [castCrewData, secastCrewData] = useState<CastCrewInfo[]>();
    const [castCrewEpisodesData, setcastCrewEpisodesData] = useState<CastCrewEpisodesInfo[]>();

    useEffect(() => {
        castCrewDetails();
    }, [name]);

    const castCrewDetails = async () => {

        const data = await getCastCrewDetails(name as string);

        secastCrewData(data.data);

        await castCrewEpisodesDetails(data.data[0]?.name);


    }

    const castCrewEpisodesDetails = async (author_name: any) => {

        const data = await getCastCrewEpisodesDetails(author_name);
        if (data)

            setcastCrewEpisodesData(data.data);
    }

    const castCrewLoader = ({ src, width, quality }: any) => {
        return `${src}?w=${width}&q=${quality || 75}`;
    };

    const audioBookLoader = ({ src, width, quality }: any) => {
        return `${src}?w=${width}&q=${quality || 75}`;
    };

    return (
        <>
            {(castCrewData && castCrewData.length > 0) ?
                <nav className={`navbar py-0 fixed-top ${styles.topNav}`} >
                    <div className={styles.backBtn}>
                        <h5 onClick={() => Router.back()}><i className="bi bi-arrow-left mx-3"></i> {castCrewData[0]?.name}</h5>
                    </div>
                </nav>
                : <></>}

            <div className={styles.castCrewDetailsPage}>

                <div className={styles.castCrewDetailsBox}>

                    {(castCrewData && castCrewData.length > 0) ?

                        <div className="mx-2 mt-3">

                            <div className={`${styles.castcard}`}>
                                <div className="text-center">

                                    <Image
                                        loader={castCrewLoader}
                                        width={300}
                                        height={300}
                                        src={castCrewData[0]?.imageUrl}
                                        alt=""
                                        className={`img-fluid mt-2 ${styles.castImg}`}
                                    />


                                    {/* <Image src="/demo_face.jpg" height={300} width={300} className={`img-fluid mt-2 ${styles.castImg}`} alt="..." /> */}

                                    <p className={`card-title my-2 ${styles.castNameText}`}>{castCrewData[0]?.name}</p>
                                </div>
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

                                                    <p className={styles.bgText}>
                                                        {castCrewData[0]?.description}
                                                    </p>

                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                            </div>

                        </div>
                        : <></>}

                    {(castCrewEpisodesData && castCrewEpisodesData.length > 0) ? <div className="section1 mt-3 mx-2">

                        <p className={styles.textColor}>Audiobooks</p>

                        <div className="row g-3 my-2 px-1">

                            {castCrewEpisodesData?.map((episodes) => (

                                <div key={episodes.id} className="col-4 col-sm-4 col-md-3">

                                    <Link href={`../audiobook_details/${episodes?.id}`}>

                                        <div className={styles.audioBookCard}>

                                            <Image
                                                loader={audioBookLoader}
                                                width={150}
                                                height={150}
                                                src={episodes?.thumb_path}
                                                alt=""
                                                className={`img-fluid mt-2 ${styles.cardImg}`}
                                            />

                                            <div className={styles.starLogo}><button className={`${styles.starBtn}`}><i className="bi bi-star-fill"></i>{episodes.rating}</button></div>
                                            <div className={styles.playLogo}><button className={styles.playBtn}><i className="bi bi-play-circle-fill"></i>{episodes.play_count}</button></div>
                                            {episodes.price == 0 ? <div className={styles.freeAudioText}>Free</div> : <FontAwesomeIcon className={styles.premiumLogo} icon={faCrown} style={{ fontSize: "14px", color: "white" }} />}
                                        </div>
                                        <div className="text-center">
                                            <p className={`mb-0 ${styles.titleName}`}>{episodes.name}</p>
                                            <p className={` ${styles.authorName}`}>{episodes.author_name}</p>
                                        </div>


                                    </Link>

                                </div>

                            ))}

                        </div>

                    </div> : <></>}

                </div>

            </div>

        </>
    );
}

export default CastCrewComponent;