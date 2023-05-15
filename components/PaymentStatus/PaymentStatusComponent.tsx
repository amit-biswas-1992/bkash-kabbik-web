import Image from "next/image";
import styles from "../../styles/About.module.css";
import Link from "next/link";
import Router, { useRouter } from "next/router";

export default function PaymentStatus() {

    const router = useRouter()
    const { reference, status } = router.query;

    return (

        <>

            <div className="d-flex flex-grow-1 align-items-center">
                <Link className="navbar-brand" href="/">
                    <Image src="/kabbik_logo.svg" alt="Logo" width={60} height={60} className="d-inline-block align-text-top m-3 img-fluid" />
                </Link>
            </div>

            <div className={`mb-5 ${styles.paymentStatusPage}`}>


                <div className={styles.paymentStatusContentBox}>

                    <div className="text-center mb-2">

                        {status === "FAILED" ? <Image src="/failed_logo.gif" height={200} width={200} alt="" /> : <Image src="/sucess.gif" height={200} width={200} alt="" />}

                    </div>

                    <div>
                        <p className={`text-center ${styles.text_color}`}>{status === "FAILED" ? "Failed" : "Success"} Transaction</p>
                    </div>

                    <div className={`text-center ${styles.text_color}`}>
                        <p>Reference ID: {reference}</p>
                        <p>Status: {status === "FAILED" ? "FAILED" : "SUCCESS"}</p>
                    </div>

                    <div className="text-center">
                        <Link href="/"><button type="button" className="btn btn-outline-primary"><i className="bi bi-house-fill"></i> Go Home</button></Link>
                    </div>

                </div>

            </div>

        </>

    );
}
