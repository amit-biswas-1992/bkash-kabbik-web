import styles from "../../styles/Premium.module.css";
import Image from "next/image";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCrown } from "@fortawesome/free-solid-svg-icons";
import { getPremiumAudiobookList } from "../../services/api.service";
import PremiumAudioBookInfo from "../../models/PremiumAudioBookInfo";
import React, { useEffect, useState } from "react";

const Premium = () => {

    const myLoader = ({ src, width, quality }: any) => {
        return `${src}?w=${width}&q=${quality || 75}`;
    };

    const [premiumAudiobookListData, setpremiumAudiobookListData] = useState<PremiumAudioBookInfo[]>([]);
    
    useEffect(() => {
        premiumAudiobookList();
    }, []);

    const premiumAudiobookList = async () => {

        const data = await getPremiumAudiobookList();
        if (data)
            setpremiumAudiobookListData(data);

    };

    return (

        <>

            <div className={`mx-2 py-3 ${styles.premiumPage}`}>

                <div className="row g-4">

                    {premiumAudiobookListData.map((premium) => (

                        <div key={premium?.id} className="col-12 col-sm-6 col-md-4">

                            <Link href={`audiobook_details/${premium?.id}`}>

                                <div className={`d-flex align-items-center ${styles.premiumCard}`} >

                                    <Image
                                        loader={myLoader}
                                        width={110}
                                        height={110}
                                        src={premium.thumb_path}
                                        alt=""
                                        className="p-1"
                                    />

                                    <div className="py-2 mx-2">
                                        <div className="d-flex justify-content-between">
                                            <div className="me-auto">
                                                <h6 className={`mb-0 ${styles.textColor}`} >{premium.name}</h6>
                                                <p className={`mb-0 text-muted ${styles.textColor}`}><small>{premium.author_name}</small></p>
                                            </div>
                                            <div className="">
                                                <button className={`mx-1 ${styles.starBtn}`}><i className="bi bi-star-fill"></i>{premium.rating.toFixed(2)}</button>
                                                <button className={` ${styles.playBtn}`}><i className="bi bi-play-circle-fill"></i>{premium.play_count}</button>
                                            </div>
                                        </div>
                                        <div className={`mb-0 ${styles.textColor}`} >
                                            <small dangerouslySetInnerHTML={{ __html: premium.description.slice(0, 100) }} />
                                        </div>
                                        <div className="text-center pt-2"><FontAwesomeIcon className={styles.premiumLogo} icon={faCrown} style={{ fontSize: "16px", color: "white" }} /></div>
                                    </div>
                                </div>

                            </Link>

                        </div>

                    ))}


                </div>

            </div>

        </>

    );
}

export default Premium;