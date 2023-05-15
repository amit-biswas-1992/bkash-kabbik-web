import styles from "../../styles/SearchedAudioBook.module.css";
import Image from "next/image";
import Router from "next/router";
import Link from "next/link";
import { toast } from "react-toastify";
import { useState } from "react";
import HomeInfo from "../../models/HomeInfo";
import { postSearch } from "../../services/api.service";


const SearchedAudioBookComponent = () => {

    const [searchvalue, setSearchvalue]: any = useState();
    const [searchData, setSearchData] = useState('');
    // const [isLoading, setIsLoading] = useState(false);

    const searchHandler = (event: any) => {
        setSearchData(event.target.value);
    };

    const searchSubmit = async (event: any) => {
        event.preventDefault();
        const reviewData = await postSearch(searchData);
        setSearchvalue(reviewData.data);
    };

    const myLoader = ({ src, width, quality }: any) => {
        return `${src}?w=${width}&q=${quality || 75}`;
    };

    return (
        <>
            <form onSubmit={searchSubmit}>
                <div className={`input-group mt-1 ${styles.srcInputForm}`}>
                    <button type="button" onClick={() => Router.back()} className={`input-group-text ${styles.inputSearchLogo}`} id="basic-addon"><i className="bi bi-arrow-left mx-2"></i></button>
                    <input type="search" onChange={searchHandler} className={`form-control ${styles.srcForm}`} placeholder="Search for Audiobooks, Authors..." />
                </div>
            </form>

            {searchvalue ? <div className={`mb-5 mt-2 ${styles.favoritesPage}`}>

                <div className="row g-3 mx-2">

                    {searchvalue?.map((value: any) => (

                        <div key={value?.id} className="col-12 col-sm-12 col-md-4">

                            <Link href={`audiobook_details/${value?.id}`}>

                                <div className={` ${styles.audioBookCard}`} >

                                    <Image
                                        loader={myLoader}
                                        width={120}
                                        height={120}
                                        src={value.thumb_path}
                                        alt=""
                                        className=""
                                    />

                                    <div className="py-2 mx-2">
                                        <h6 className={`${styles.titleName}`} >{value.name}</h6>
                                        <p className={`mb-1 ${styles.authorName}`}><small>{value.author_name}</small></p>
                                        <p className={`mb-0 text-muted ${styles.narratorName}`}><small>{value.contributing_artists}</small></p>
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

export default SearchedAudioBookComponent;