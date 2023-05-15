import Image from "next/image";
import styles from "../../styles/About.module.css";
import Link from "next/link";
import Router from "next/router";

export default function About() {
    
    return (

        <>

            <div className={styles.backBtn}>
                <h4 onClick={() => Router.back()}><i className="bi bi-arrow-left mx-3"></i> About Us</h4>
            </div>

            <div className={`mb-5 ${styles.aboutPage}`}>


                <div className={styles.aboutContentBox}>

                    <div>
                        <p className={`text-center ${styles.text_color}`}>প্রিয় বই, গল্প, উপন্যাস এর বিশাল অডিওবুক সম্ভার নিয়ে কাব্যিক-এর আগমন। পছন্দের নতুন নতুন অডিও শুনতে কাব্যিক-এর সাথেই থাকুন। </p>
                    </div>

                    <div className="logo  text-center">
                        <Image src="/kabbik_logo.svg" height={110} width={110} alt="" />
                    </div>


                </div>

            </div>

        </>

    );
}