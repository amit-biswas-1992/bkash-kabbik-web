import styles from "../../styles/SearchedAudioBook.module.css";
import Image from "next/image";
import Router from "next/router";
import Link from "next/link";

const SearchedAudioBookComponent = () => {
    return (
        <>

            <div className={`input-group mt-1 ${styles.srcInputForm}`}>
                <button onClick={() => Router.back()} className={`input-group-text ${styles.inputSearchLogo}`} id="basic-addon"><i className="bi bi-arrow-left mx-2"></i></button>
                <input type="search" className={`form-control ${styles.srcForm}`} placeholder="Search for Audiobooks, Authors..." aria-label="Search" aria-describedby="basic-addon" />
            </div>

            <div className={`mb-5 mt-2 ${styles.favoritesPage}`}>

                <div className="row g-3 mx-2">

                    <div className="col-12 col-sm-12 col-md-4">
                        
                        <Link href="/audiobookdetails">
                            <div className={` ${styles.audioBookCard}`} >
                                <Image src="/img1.png" className="" height={120} width={120} alt="..." />
                                <div className="py-2 mx-2">
                                    <h6 className={`${styles.titleName}`} >Vuture Kando</h6>
                                    <p className={`mb-1 ${styles.authorName}`}><small>Harinarayan Chattopadhay</small></p>
                                    <p className={`mb-0 text-muted ${styles.narratorName}`}><small>Faheem Noman</small></p>
                                </div>
                            </div>
                        </Link>

                    </div>

                    <div className="col-12 col-sm-12 col-md-4">
                        
                        <Link href="/audiobookdetails">
                            <div className={` ${styles.audioBookCard}`} >
                                <Image src="/img1.png" className="" height={120} width={120} alt="..." />
                                <div className="py-2 mx-2">
                                    <h6 className={`${styles.titleName}`} >Vuture Kando</h6>
                                    <p className={`mb-1 ${styles.authorName}`}><small>Harinarayan Chattopadhay</small></p>
                                    <p className={`mb-0 text-muted ${styles.narratorName}`}><small>Faheem Noman</small></p>
                                </div>
                            </div>
                        </Link>

                    </div>

                    <div className="col-12 col-sm-12 col-md-4">
                        
                        <Link href="/audiobookdetails">
                            <div className={` ${styles.audioBookCard}`} >
                                <Image src="/img1.png" className="" height={120} width={120} alt="..." />
                                <div className="py-2 mx-2">
                                    <h6 className={`${styles.titleName}`} >Vuture Kando</h6>
                                    <p className={`mb-1 ${styles.authorName}`}><small>Harinarayan Chattopadhay</small></p>
                                    <p className={`mb-0 text-muted ${styles.narratorName}`}><small>Faheem Noman</small></p>
                                </div>
                            </div>
                        </Link>

                    </div>

                    <div className="col-12 col-sm-12 col-md-4">
                        
                        <Link href="/audiobookdetails">
                            <div className={` ${styles.audioBookCard}`} >
                                <Image src="/img1.png" className="" height={120} width={120} alt="..." />
                                <div className="py-2 mx-2">
                                    <h6 className={`${styles.titleName}`} >Vuture Kando</h6>
                                    <p className={`mb-1 ${styles.authorName}`}><small>Harinarayan Chattopadhay</small></p>
                                    <p className={`mb-0 text-muted ${styles.narratorName}`}><small>Faheem Noman</small></p>
                                </div>
                            </div>
                        </Link>

                    </div>

                    <div className="col-12 col-sm-12 col-md-4">
                        
                        <Link href="/audiobookdetails">
                            <div className={` ${styles.audioBookCard}`} >
                                <Image src="/img1.png" className="" height={120} width={120} alt="..." />
                                <div className="py-2 mx-2">
                                    <h6 className={`${styles.titleName}`} >Vuture Kando</h6>
                                    <p className={`mb-1 ${styles.authorName}`}><small>Harinarayan Chattopadhay</small></p>
                                    <p className={`mb-0 text-muted ${styles.narratorName}`}><small>Faheem Noman</small></p>
                                </div>
                            </div>
                        </Link>

                    </div>

                    <div className="col-12 col-sm-12 col-md-4">
                        
                        <Link href="/audiobookdetails">
                            <div className={` ${styles.audioBookCard}`} >
                                <Image src="/img1.png" className="" height={120} width={120} alt="..." />
                                <div className="py-2 mx-2">
                                    <h6 className={`${styles.titleName}`} >Vuture Kando</h6>
                                    <p className={`mb-1 ${styles.authorName}`}><small>Harinarayan Chattopadhay</small></p>
                                    <p className={`mb-0 text-muted ${styles.narratorName}`}><small>Faheem Noman</small></p>
                                </div>
                            </div>
                        </Link>

                    </div>

                </div>

            </div>

        </>
    );
}

export default SearchedAudioBookComponent;