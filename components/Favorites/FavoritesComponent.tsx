import Image from "next/image";
import styles from "../../styles/Favorites.module.css";
import Link from "next/link";
import Router from "next/router";
import { getFavoriteAudiobookList } from "../../services/api.service";
import FavoriteAudioBookInfo from "../../models/FavoriteAudioBookInfo";
import { useEffect, useState } from "react";

const Favorites = () => {

    const myLoader = ({ src, width, quality }: any) => {

        return `${src}?w=${width}&q=${quality || 75}`;
    };

    const [favoriteAudioBookListData, setfavoriteAudioBookData] = useState<FavoriteAudioBookInfo[]>([]);

    useEffect(() => {
        favoriteAudioBookList();
    }, []);

    const favoriteAudioBookList: any = async () => {

        const data = await getFavoriteAudiobookList();
        if (data)
            setfavoriteAudioBookData(data.data);
    }; 

    return (
        <>

            <nav className={`navbar py-0 fixed-top ${styles.topNav}`} >
                <div className={styles.backBtn}>
                    <h5 onClick={() => Router.back()}><i className="bi bi-arrow-left mx-3"></i> Favorites</h5>
                </div>
            </nav>

            <div className={`mb-5 ${styles.favoritesPage}`}>

                <div className={styles.favoritesContentBox}>

                    <div className="row g-3 mx-2">

                        {favoriteAudioBookListData.map((favorite) => (

                            <div key={favorite.id} className="col-4 col-sm-4 col-md-3 text-center">

                                <Link href={`/audiobook_details/${favorite?.id}`}>

                                    <Image
                                        loader={myLoader}
                                        width={220}
                                        height={220}
                                        src={favorite.thumb_path}
                                        alt=""
                                        className={`img-fluid ${styles.favImg}`}
                                    />

                                    <p className={styles.titleName}>{favorite.name}</p>
                                    <p className={styles.authorName}>{favorite.author_name}</p>

                                </Link>

                            </div>

                        ))}

                    </div>

                </div>

            </div>

        </>
    );
}

export default Favorites;