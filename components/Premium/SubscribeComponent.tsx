import Image from "next/image";
import styles from "../../styles/Subscribe.module.css";
import Link from "next/link";
import Router from "next/router";
import React, { useEffect, useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { bkashPostApi, getPackList, getPromoCodeApi } from "../../services/api.service";
import PackInfo from "../../models/PackInfo";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const Subscribe = () => {

    let reduced_price = 0;

    const { toBengaliNumber, toBengaliWord } = require('bengali-number');
    const [packListData, setpackListData] = useState<PackInfo[]>([]);
    const [showResults, setShowResults] = useState(false);
    const [singlePackData, setSinglePackData]: any = useState({});
    const [promoData, setPromoData] = useState("");
    const [promoCode, setPromoCode]: any = useState();

    useEffect(() => {
        packlist();
    }, []);

    const packlist = async () => {

        const data = await getPackList();
        if (data)
            setpackListData(data.data);

    };

    const packageDetails = (data: any) => {

        setSinglePackData(data);
        
    };

    const promoHandler = (event: any) => {

        setPromoData(event.target.value);
    };

    const promoBtn = async () => {

        setShowResults(true);

        const promoCodeData = await getPromoCodeApi(singlePackData.subscriptionItemId, promoData);

        if (Object.keys(promoCodeData).length) {

            singlePackData.reduce_price = promoCodeData.data.reduce_price;
            setPromoCode(promoCodeData.data);
            toast.success("Promo Code Added!", {
                position: toast.POSITION.TOP_RIGHT,
                autoClose: 3000,
                hideProgressBar: false,
                pauseOnHover: false,
                draggable: true,
                theme: "dark",
            });
        }
        else {
            toast.error("Invalid Promo Code!", {
                position: toast.POSITION.TOP_RIGHT,
                autoClose: 3000,
                hideProgressBar: false,
                pauseOnHover: false,
                draggable: true,
                theme: "dark",
            });
        }

    };

    const removeHandler = async () => {

        setShowResults(false);

        delete singlePackData.reduce_price;

        setPromoData("");

        toast.info("Promo Code Removed!", {
            position: toast.POSITION.TOP_RIGHT,
            autoClose: 3000,
            hideProgressBar: false,
            pauseOnHover: false,
            draggable: true,
            theme: "dark",
        });

    };

    const Results = () => (

        <div id="results" className="search-results">
            <div className="d-flex  align-items-center">
                <p className={`flex-grow-1 mb-0 ${styles.discountText}`}>ডিসকাউন্ট প্রাইস </p>
                

                {promoCode?.reduce_price && singlePackData.reduce_price ?
                    <>
                        <p className={`mx-1 mb-0 ${styles.discountSmText}`}>{singlePackData?.rawPrice}</p>
                        <p className={`mx-1 mb-0 ${styles.discountGreenText}`}> {toBengaliNumber(singlePackData?.rawPrice - (promoCode?.reduce_price))} </p></> :
                    <>
                        {/* <p className={`mx-1 mb-0 ${styles.wrongPromoText}`}>NULL</p> */}
                    </>
                }

            </div>

            {promoCode?.reduce_price && singlePackData.reduce_price ?

                <div className="d-flex justify-content-between align-items-center">
                    <p className="mb-0" style={{ fontSize: "16px", color: "gold" }}>Promo applied</p>
                    <button onClick={removeHandler} type="button" className={styles.removeBtn}>remove</button>
                </div> :

                <div className="d-flex justify-content-between align-items-center">
                    <p className="mb-0" style={{ fontSize: "16px", color: "gold" }}>You will be charged the usual price ৳{toBengaliNumber(singlePackData?.rawPrice)} </p>
                    <button onClick={removeHandler} type="button" className={styles.removeBtn}>colse</button>
                </div>
            }

        </div>
    )

    const bkashPayment = async () => {

        const bkashResponseData = await bkashPostApi(singlePackData);
        window.location.replace(bkashResponseData.data.redirectURL);

    };

    return (

        <>
            <ToastContainer />
            <div className={styles.backBtn}>
                <h5 onClick={() => Router.back()}><i className="bi bi-arrow-left mx-3"></i> Subscribe</h5>
            </div>

            <div className={`mb-5 ${styles.subscribePage}`}>

                <div className={styles.subscribeContentBox}>

                    <div>
                        <p className={`text-center ${styles.bgText}`}>সাবস্ক্রিপশন প্যাকেজ </p>
                        <p className={`text-center ${styles.smText}`}>সাবস্ক্রিপশন করে উপভোগ করুন কাব্যিক এর প্রিমিয়াম ফীচার</p>
                    </div>


                    {packListData.length > 0 && <div className={styles.card1} >

                        <div className="card-body text-center p-3" onClick={() => packageDetails(packListData[0])} data-bs-toggle="offcanvas" data-bs-target="#offcanvasBottom" aria-controls="offcanvasBottom" >
                            <h5 className={`card-title pb-3 ${styles.bgText}`}>{packListData[0].name}
                            </h5>
                            <p className={`card-text ${styles.bgText}`}>{packListData[0].amount} / {packListData[0].length} </p>
                            <p className={`card-text ${styles.smText}`}>(নবায়নযোগ্য)</p>
                        </div>

                    </div>}


                    <div className="row g-1 pt-3 pb-3 mx-2">

                        <div className="col-6 col-sm-6 col-md-6" onClick={() => packageDetails(packListData[1])} data-bs-toggle="offcanvas" data-bs-target="#offcanvasBottom" aria-controls="offcanvasBottom" >

                            {packListData.length > 0 && <div className={`text-nowrap ${styles.card2}`} >

                                <div className="card-body text-center pt-4">
                                    <h5 className={`card-title pb-3 ${styles.bgText}`}>{packListData[1].name}</h5>
                                    <p className={`card-text pb-2 ${styles.bgText}`}>{packListData[1].amount} / {packListData[1].length} </p>
                                    <p className={`card-text ${styles.smText}`}>(নবায়নযোগ্য)</p>
                                </div>

                            </div>}

                        </div>


                        <div className="col-6 col-sm-6 col-md-6" onClick={() => packageDetails(packListData[2])} data-bs-toggle="offcanvas" data-bs-target="#offcanvasBottom" aria-controls="offcanvasBottom" >

                            {packListData.length > 0 && <div className={`text-nowrap ${styles.card2}`} >

                                <div className="card-body text-center pt-4">
                                    <h5 className={`card-title pb-3 ${styles.bgText}`}>{packListData[2].name}</h5>
                                    <p className={`card-text pb-2 ${styles.bgText}`}>{packListData[2].amount} /{packListData[2].length}</p>
                                    <p className={`card-text ${styles.smText}`}>(নবায়নযোগ্য)</p>
                                </div>

                            </div>}

                        </div>

                    </div>

                    {packListData.length > 0 && <div className={`offcanvas offcanvas-bottom h-auto mx-auto ${styles.offCanvasBody}`} tabIndex={-1} id="offcanvasBottom" aria-labelledby="offcanvasBottomLabel" style={{ background: "#0C1B3E" }}>

                        <div className="offcanvas-header">
                            <h5 className="offcanvas-title" id="offcanvasBottomLabel"></h5>
                            <button type="button" className="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                        </div>

                        <div className={`offcanvas-body relative small`}>
                            <div className="container d-flex justify-content-between align-items-center" style={{ color: "white" }}>
                                <h4>{singlePackData?.name}</h4>
                                <h4>{singlePackData?.amount}</h4>
                            </div>

                            <hr className={styles.dashedLine} />

                            <p style={{ color: "white" }}>প্রোমো কোড</p>

                            <div className="input-group mb-3">
                                <input type="text" value={promoData} onChange={promoHandler} className="form-control" placeholder="প্রোমো কোডটি দিন..." aria-label="Recipient's username" aria-describedby="button-addon2" style={{ height: "70px", }} />
                                <button onClick={promoBtn} className="btn btn-outline-secondary" type="submit" id="button-addon2"><i className="bi bi-arrow-right"></i></button>
                            </div>

                            <div>
                                {showResults ? <Results /> : null}
                            </div>

                            <hr className={styles.dashedLine} />

                            <div onClick={bkashPayment} className="text-center">
                                <p className={`mb-3 ${styles.bgText}`}>
                                    বিকাশ পেমেন্ট করুন
                                </p>
                                <Image src="/bkash_logo.png" className={`p-2 ${styles.paymentCardImg}`} height={150} width={150} alt="..." /> {/*bkash payment*/}
                            </div>

                        </div>

                    </div>}

                    <div className={styles.card3} >

                        <div className={styles.cardBody3}>
                            <p className={`card-text ${styles.smText}`}>সাবস্ক্রিপশন এর সুবিধা</p>
                            <p className={`card-text ${styles.neonText}`}><i className={`bi bi-check2 ${styles.checkIcon}`}></i> প্রিমিয়াম অডিওবুক</p>
                            <p className={`card-text ${styles.neonText}`}><i className={`bi bi-check2 ${styles.checkIcon}`}></i> বিজ্ঞাপন বিহীন সেবা</p>
                            <p className={`card-text ${styles.neonText}`}><i className={`bi bi-check2 ${styles.checkIcon}`}></i> ২০+ অফলাইন ডাউনলোড সুবিধা</p>
                            <p className={`card-text ${styles.neonText}`}><i className={`bi bi-check2 ${styles.checkIcon}`}></i> সকল ক্যাটাগরিতে প্রবেশের সুযোগ</p>
                        </div>

                    </div>

                    <div className="pt-2">
                        <p className={`text-center ${styles.smText}`}>এইরকম আরো প্রিমিয়াম ফীচার পেতে সাবস্ক্রাইব করুন</p>
                    </div>

                </div>

            </div>

        </>
    );
}

export default Subscribe;