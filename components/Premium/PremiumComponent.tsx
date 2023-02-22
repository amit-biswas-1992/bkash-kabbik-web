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
        // console.log(src, "src");

        // console.log(`${IMAGE_BASE_URL}${src}`);

        return `${src}?w=${width}&q=${quality || 75}`;
    };

    const [premiumAudiobookListData, setpremiumAudiobookListData] = useState<PremiumAudioBookInfo[]>([]);
    console.log(premiumAudiobookListData);

    useEffect(() => {
        premiumAudiobookList();
    }, []);

    const premiumAudiobookList = async () => {

        const data = await getPremiumAudiobookList();
        if (data)
            setpremiumAudiobookListData(data);

    }

    return (

        <>

            <div className={`mx-2 py-3 ${styles.premiumPage}`}>

                <div className="row g-4">

                    {premiumAudiobookListData.map((premium) => (

                        <div className="col-12 col-sm-6 col-md-4">

                            <Link href="/audiobook_details">

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
                                            <div>
                                                <h6 className={`mb-0 ${styles.textColor}`} >{premium.name}</h6>
                                                <p className={`mb-0 text-muted ${styles.textColor}`}><small>{premium.author_name}</small></p>
                                            </div>
                                            <div className="mx-2">
                                                <button className={`mx-1 ${styles.starBtn}`}><i className="bi bi-star-fill"></i>{premium.rating}</button>
                                                <button className={styles.playBtn}><i className="bi bi-play-circle-fill"></i>{premium.play_count}</button>
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

                    {/* <div className="col-12 col-sm-6 col-md-4">

                        <Link href="/audiobook_details">

                            <div className={`d-flex align-items-center ${styles.premiumCard}`} >
                                <Image src="/img1.png" className="p-2" height={110} width={110} alt="..." />
                                <div className="py-2 mx-2">
                                    <div className="d-flex justify-content-between">
                                        <div>
                                            <h6 className={`mb-0 ${styles.textColor}`} >কবরী</h6>
                                            <p className={`mb-0 text-muted ${styles.textColor}`}><small>বদিউল আলম </small></p>
                                        </div>
                                        <div className="mx-2">
                                            <button className={`mx-1 ${styles.starBtn}`}><i className="bi bi-star-fill"></i> 4.5</button>
                                            <button className={styles.playBtn}><i className="bi bi-play-circle-fill"></i> 156</button>
                                        </div>
                                    </div>
                                    <p className={`mb-0 ${styles.textColor}`} ><small>কাব্যিকে শুনুন সমকালীন উপন্যাস "কবরী"</small></p>
                                    <div className="text-center pt-2"><FontAwesomeIcon className={styles.premiumLogo} icon={faCrown} style={{ fontSize: "16px", color: "white" }} /></div>
                                </div>
                            </div>

                        </Link>

                    </div> */}

                    {/* <div className="col-12 col-sm-6 col-md-4">

                        <Link href="/audiobook_details">

                            <div className={`d-flex align-items-center ${styles.premiumCard}`} >
                                <Image src="/img1.png" className="p-2" height={110} width={110} alt="..." />
                                <div className="py-2 mx-2">
                                    <div className="d-flex justify-content-between">
                                        <div>
                                            <h6 className={`mb-0 ${styles.textColor}`} >কবরী</h6>
                                            <p className={`mb-0 text-muted ${styles.textColor}`}><small>বদিউল আলম </small></p>
                                        </div>
                                        <div className="mx-2">
                                            <button className={`mx-1 ${styles.starBtn}`}><i className="bi bi-star-fill"></i> 4.5</button>
                                            <button className={styles.playBtn}><i className="bi bi-play-circle-fill"></i> 156</button>
                                        </div>
                                    </div>
                                    <p className={`mb-0 ${styles.textColor}`} ><small>কাব্যিকে শুনুন সমকালীন উপন্যাস "কবরী"</small></p>
                                    <div className="text-center pt-2"><FontAwesomeIcon className={styles.premiumLogo} icon={faCrown} style={{ fontSize: "16px", color: "white" }} /></div>
                                </div>
                            </div>

                        </Link>

                    </div>

                    <div className="col-12 col-sm-6 col-md-4">

                        <Link href="/audiobook_details">

                            <div className={`d-flex align-items-center ${styles.premiumCard}`} >
                                <Image src="/img1.png" className="p-2" height={110} width={110} alt="..." />
                                <div className="py-2 mx-2">
                                    <div className="d-flex justify-content-between">
                                        <div>
                                            <h6 className={`mb-0 ${styles.textColor}`} >কবরী</h6>
                                            <p className={`mb-0 text-muted ${styles.textColor}`}><small>বদিউল আলম </small></p>
                                        </div>
                                        <div className="mx-2">
                                            <button className={`mx-1 ${styles.starBtn}`}><i className="bi bi-star-fill"></i> 4.5</button>
                                            <button className={styles.playBtn}><i className="bi bi-play-circle-fill"></i> 156</button>
                                        </div>
                                    </div>
                                    <p className={`mb-0 ${styles.textColor}`} ><small>কাব্যিকে শুনুন সমকালীন উপন্যাস "কবরী"</small></p>
                                    <div className="text-center pt-2"><FontAwesomeIcon className={styles.premiumLogo} icon={faCrown} style={{ fontSize: "16px", color: "white" }} /></div>
                                </div>
                            </div>

                        </Link>

                    </div>

                    <div className="col-12 col-sm-6 col-md-4">

                        <Link href="/audiobook_details">

                            <div className={`d-flex align-items-center ${styles.premiumCard}`} >
                                <Image src="/img1.png" className="p-2" height={110} width={110} alt="..." />
                                <div className="py-2 mx-2">
                                    <div className="d-flex justify-content-between">
                                        <div>
                                            <h6 className={`mb-0 ${styles.textColor}`} >কবরী</h6>
                                            <p className={`mb-0 text-muted ${styles.textColor}`}><small>বদিউল আলম </small></p>
                                        </div>
                                        <div className="mx-2">
                                            <button className={`mx-1 ${styles.starBtn}`}><i className="bi bi-star-fill"></i> 4.5</button>
                                            <button className={styles.playBtn}><i className="bi bi-play-circle-fill"></i> 156</button>
                                        </div>
                                    </div>
                                    <p className={`mb-0 ${styles.textColor}`} ><small>কাব্যিকে শুনুন সমকালীন উপন্যাস "কবরী"</small></p>
                                    <div className="text-center pt-2"><FontAwesomeIcon className={styles.premiumLogo} icon={faCrown} style={{ fontSize: "16px", color: "white" }} /></div>
                                </div>
                            </div>

                        </Link>

                    </div>

                    <div className="col-12 col-sm-6 col-md-4">

                        <Link href="/audiobook_details">

                            <div className={`d-flex align-items-center ${styles.premiumCard}`} >
                                <Image src="/img1.png" className="p-2" height={110} width={110} alt="..." />
                                <div className="py-2 mx-2">
                                    <div className="d-flex justify-content-between">
                                        <div>
                                            <h6 className={`mb-0 ${styles.textColor}`} >কবরী</h6>
                                            <p className={`mb-0 text-muted ${styles.textColor}`}><small>বদিউল আলম </small></p>
                                        </div>
                                        <div className="mx-2">
                                            <button className={`mx-1 ${styles.starBtn}`}><i className="bi bi-star-fill"></i> 4.5</button>
                                            <button className={styles.playBtn}><i className="bi bi-play-circle-fill"></i> 156</button>
                                        </div>
                                    </div>
                                    <p className={`mb-0 ${styles.textColor}`} ><small>কাব্যিকে শুনুন সমকালীন উপন্যাস "কবরী"</small></p>
                                    <div className="text-center pt-2"><FontAwesomeIcon className={styles.premiumLogo} icon={faCrown} style={{ fontSize: "16px", color: "white" }} /></div>
                                </div>
                            </div>

                        </Link>

                    </div>

                    <div className="col-12 col-sm-6 col-md-4">

                        <Link href="/audiobook_details">

                            <div className={`d-flex align-items-center ${styles.premiumCard}`} >
                                <Image src="/img1.png" className="p-2" height={110} width={110} alt="..." />
                                <div className="py-2 mx-2">
                                    <div className="d-flex justify-content-between">
                                        <div>
                                            <h6 className={`mb-0 ${styles.textColor}`} >কবরী</h6>
                                            <p className={`mb-0 text-muted ${styles.textColor}`}><small>বদিউল আলম </small></p>
                                        </div>
                                        <div className="mx-2">
                                            <button className={`mx-1 ${styles.starBtn}`}><i className="bi bi-star-fill"></i> 4.5</button>
                                            <button className={styles.playBtn}><i className="bi bi-play-circle-fill"></i> 156</button>
                                        </div>
                                    </div>
                                    <p className={`mb-0 ${styles.textColor}`} ><small>কাব্যিকে শুনুন সমকালীন উপন্যাস "কবরী"</small></p>
                                    <div className="text-center pt-2"><FontAwesomeIcon className={styles.premiumLogo} icon={faCrown} style={{ fontSize: "16px", color: "white" }} /></div>
                                </div>
                            </div>

                        </Link>

                    </div> */}



                </div>

            </div>

        </>

    );
}

export default Premium;