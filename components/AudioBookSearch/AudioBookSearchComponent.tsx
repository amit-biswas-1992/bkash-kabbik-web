import styles from "../../styles/AudioBookSearch.module.css";
import Link from "next/link";
import Image from "next/image";

const AudioBookSearch = () => {
    return (
        <>

            <div className={styles.searchPage}>

                <Link href="/searched_audiobook" className={`input-group ${styles.srcInputForm}`}>
                    <span className={`input-group-text ${styles.inputSearchLogo}`} id="basic-addon"><i className="bi bi-search"></i></span>
                    <input type="text" className={`form-control ${styles.srcForm}`} placeholder="Search for Audiobooks, Authors..." aria-label="Search" aria-describedby="basic-addon" />
                </Link>

                <div className="row py-3 g-3 mx-2">

                    <div className="col-6 col-sm-6 col-md-4 col-lg-3 text-center">
                        <Link href="/catagory_list">
                            <Image src="/img1.png" height={220} width={220} className={`img-fluid ${styles.catImg}`} alt="..." />
                            <p className={styles.catagoryName}>কবিতার আসর </p>
                        </Link>
                    </div>

                    <div className="col-6 col-sm-6 col-md-4 col-lg-3 text-center">
                        <Link href="/catagory_list">
                            <Image src="/img1.png" height={220} width={220} className={`img-fluid ${styles.catImg}`} alt="..." />
                            <p className={styles.catagoryName}>কবিতার আসর </p>
                        </Link>
                    </div>

                    <div className="col-6 col-sm-6 col-md-4 col-lg-3 text-center">
                        <Link href="/catagory_list">
                            <Image src="/img1.png" height={220} width={220} className={`img-fluid ${styles.catImg}`} alt="..." />
                            <p className={styles.catagoryName}>কবিতার আসর </p>
                        </Link>
                    </div>

                    <div className="col-6 col-sm-6 col-md-4 col-lg-3 text-center">
                        <Link href="/catagory_list">
                            <Image src="/img1.png" height={220} width={220} className={`img-fluid ${styles.catImg}`} alt="..." />
                            <p className={styles.catagoryName}>কবিতার আসর </p>
                        </Link>
                    </div>

                    <div className="col-6 col-sm-6 col-md-4 col-lg-3 text-center">
                        <Link href="/catagory_list">
                            <Image src="/img1.png" height={220} width={220} className={`img-fluid ${styles.catImg}`} alt="..." />
                            <p className={styles.catagoryName}>কবিতার আসর </p>
                        </Link>
                    </div>

                    <div className="col-6 col-sm-6 col-md-4 col-lg-3 text-center">
                        <Link href="/catagory_list">
                            <Image src="/img1.png" height={220} width={220} className={`img-fluid ${styles.catImg}`} alt="..." />
                            <p className={styles.catagoryName}>কবিতার আসর </p>
                        </Link>
                    </div>

                    <div className="col-6 col-sm-6 col-md-4 col-lg-3 text-center">
                        <Link href="/catagory_list">
                            <Image src="/img1.png" height={220} width={220} className={`img-fluid ${styles.catImg}`} alt="..." />
                            <p className={styles.catagoryName}>কবিতার আসর </p>
                        </Link>
                    </div>

                    <div className="col-6 col-sm-6 col-md-4 col-lg-3 text-center">
                        <Link href="/catagory_list">
                            <Image src="/img1.png" height={220} width={220} className={`img-fluid ${styles.catImg}`} alt="..." />
                            <p className={styles.catagoryName}>কবিতার আসর </p>
                        </Link>
                    </div>

                    <div className="col-6 col-sm-6 col-md-4 col-lg-3 text-center">
                        <Link href="/catagory_list">
                            <Image src="/img1.png" height={220} width={220} className={`img-fluid ${styles.catImg}`} alt="..." />
                            <p className={styles.catagoryName}>কবিতার আসর </p>
                        </Link>
                    </div>

                    <div className="col-6 col-sm-6 col-md-4 col-lg-3 text-center">
                        <Link href="/catagory_list">
                            <Image src="/img1.png" height={220} width={220} className={`img-fluid ${styles.catImg}`} alt="..." />
                            <p className={styles.catagoryName}>কবিতার আসর </p>
                        </Link>
                    </div>



                </div>

            </div>



        </>
    );
}

export default AudioBookSearch;