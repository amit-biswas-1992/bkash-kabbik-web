import styles from "../../styles/AudioBookSearch.module.css";
import Link from "next/link";
import Image from "next/image";
import { getCatagoryList } from "../../services/api.service";
// import PostcastInfo from "../../models/PodcastInfo";
import React, { useEffect, useState } from "react";

const AudioBookSearch = () => {

    const [catagoryListData, setcatagoryListData]: any = useState([]);

    useEffect(() => {
        catagoryList();
    }, []);

    const catagoryList = async () => {

        const data = await getCatagoryList();
        if (data)
            setcatagoryListData(data);

    }

    const audioBookLoader = ({ src, width, quality }: any) => {
        return `${src}?w=${width}&q=${quality || 75}`;
    };

    return (
        <>

            {catagoryListData ? < div className={styles.searchPage}>

                <Link href="/searched_audiobook" className={`input-group ${styles.srcInputForm}`}>
                    <span className={`input-group-text ${styles.inputSearchLogo}`} id="basic-addon"><i className="bi bi-search"></i></span>
                    <input type="text" className={`form-control ${styles.srcForm}`} placeholder="Search for Audiobooks, Authors..." aria-label="Search" aria-describedby="basic-addon" />
                </Link>

                <div className="row py-3 g-3 mx-2">

                    {catagoryListData.map((ctglist: any) => (

                        <div key={ctglist.id} className="col-6 col-sm-6 col-md-4 col-lg-3 text-center">

                            <Link href={`catagory_list/${ctglist?.id}/${ctglist?.name}`}>

                                {ctglist.thumb_path ? <Image
                                    loader={audioBookLoader}
                                    width={220}
                                    height={220}
                                    src={ctglist.thumb_path}
                                    alt=""
                                    className={`img-fluid ${styles.catImg}`}
                                    
                                /> : <Image
                                    loader={audioBookLoader}
                                    width={220}
                                    height={220}
                                    src="/demo_book.jfif"
                                    alt=""
                                    className={`img-fluid ${styles.catImg}`}
                                />}
                                {/* <Image src="/img1.png" height={220} width={220} className={`img-fluid ${styles.catImg}`} alt="..." /> */}
                                <p className={styles.catagoryName}>{ctglist.name}</p>
                            </Link>
                        </div>

                    ))}

                </div>

            </div> : <></>}


        </>
    );
}

export default AudioBookSearch;