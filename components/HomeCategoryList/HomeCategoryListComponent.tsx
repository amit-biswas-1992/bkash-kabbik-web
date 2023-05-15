import styles from "../../styles/HomeCategoryList.module.css";
import Image from "next/image";
import Link from "next/link";
import Router, { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import { getHomeCatagoryItems } from "../../services/api.service";

const HomeCatagoryListComponent = () => {

    const router = useRouter()
    const { name } = router.query;

    const [homeCatagoryItemsData, setHomeCatagoryItemsData]: any = useState([]);

    useEffect(() => {
        homeCatagoryItems();
    }, [name]);

    const homeCatagoryItems = async () => {

        const data = await getHomeCatagoryItems(name);
        if (data)
            setHomeCatagoryItemsData(data.data);

    };

    const audioBookLoader = ({ src, width, quality }: any) => {
        return `${src}?w=${width}&q=${quality || 75}`;
    };


    return (
        <>
            { homeCatagoryItemsData ? <div className={`mx-2 py-3 ${styles.homeCatagoryPage}`} >

                <nav className={`navbar py-0 fixed-top ${styles.topNav}`} >
                    <div className={styles.backBtn}>

                        {/* {catagoryItemsData.map((catagoryName: any) => ( */}
                            <h4 onClick={() => Router.back()}><i className="bi bi-arrow-left mx-3"></i>{name}</h4>
                        {/* ))} */}

                    </div>

                </nav>

                <div className="row g-4">

                    { homeCatagoryItemsData[0]?.data?.map((catagoryList: any) => (

                        <div key={catagoryList.id} className="col-12 col-sm-12 col-md-4">

                            <Link href={`../audiobook_details/${catagoryList?.id}`}>

                                <div className={`d-flex justify-content-center align-items-center ${styles.homeCatagoryCard}`} >

                                    <Image
                                        loader={audioBookLoader}
                                        width={110}
                                        height={110}
                                        src={catagoryList.thumb_path}
                                        alt=""
                                        className="p-2" 
                                    />

                                    <div className="py-2 mx-2">
                                        <div className="d-flex justify-content-between">
                                            <div>
                                                <h6 className={`mb-0 ${styles.textColor}`} >{catagoryList.name}</h6>
                                                <p className={`mb-0 text-muted ${styles.textColor}`}><small>{catagoryList.author_name}</small></p>
                                            </div>
                                            <div className="mx-2">
                                                <button className={`mx-1 ${styles.starBtn}`}><i className="bi bi-star-fill"></i> {catagoryList.rating.toFixed(2)}</button>
                                                {/* <button className={styles.playBtn}><i className="bi bi-play-circle-fill"></i> {catagoryList.play_count}</button> */}
                                            </div>
                                        </div>
                                        <p className={`mb-0 ${styles.textColor}`} ><small>{catagoryList.description.slice(0,180)}</small></p>
                                    </div>
                                </div>
                            </Link>
                        </div>
                    ))}

                </div>

            </div> : <></>}
        </>
    );
}

export default HomeCatagoryListComponent;