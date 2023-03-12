import styles from "../../styles/Upcoming.module.css";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import { getUpcomingAudiobookList } from "../../services/api.service";
import UpcomingInfo from "../../models/UpcomingInfo";

const Upcoming = () => {

    const [upcomingAudiobookListData, setupcomingAudiobookListData] = useState<UpcomingInfo[]>([]);
    console.log(upcomingAudiobookListData);

    useEffect(() => {
        upcomingAudiobookList();
    }, []);

    const upcomingAudiobookList = async () => {

        const data = await getUpcomingAudiobookList();
        if (data)
            setupcomingAudiobookListData(data.data);

    };


    const myLoader = ({ src, width, quality }: any) => {
        return `${src}?w=${width}&q=${quality || 75}`;
    };

    return (

        <>

            {upcomingAudiobookListData ? <div className={`mx-2 py-3 ${styles.upcomingPage}`}>

                <div className="row g-4">

                    {upcomingAudiobookListData.map((value) => (

                        <div key={value.id} className="col-12 col-sm-6 col-md-4">

                            <div className={`${styles.upcomingCard}`} >
                                <div className="p-2">
                                    <Image
                                        loader={myLoader}
                                        width={400}
                                        height={200}
                                        src={value.thumbPath}
                                        alt=""
                                        className="img-fluid rounded"
                                    />

                                    <div className="py-2 mx-2">
                                        <p className={`mb-0 ${styles.textColor}`}><small>{value.description}</small></p>
                                    </div>
                                </div>
                            </div>



                        </div>

                    ))}


                </div>

            </div> : <></>}

        </>

    );
}

export default Upcoming;