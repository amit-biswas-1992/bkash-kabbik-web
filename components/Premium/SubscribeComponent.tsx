import Image from "next/image";
import styles from "../../styles/Subscribe.module.css";
import Link from "next/link";
import Router from "next/router";
import React, { useEffect, useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { getPackList } from "../../services/api.service";
import PackInfo from "../../models/PackInfo";


const Subscribe = () => {

    const [packListData, setpackListData] = useState<PackInfo[]>([]);
    console.log(packListData);


    useEffect(() => {
        packlist();
    }, []);

    const packlist = async () => {


        const data = await getPackList();
        if (data)
            setpackListData(data.data);

    }

    const paymentgatewaySlide = {
        infinite: false,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 3,
        initialSlide: 0,
        arrows: false,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    initialSlide: 0,
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    initialSlide: 0,
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    initialSlide: 0,
                }
            }
        ]
    };

    return (

        <>

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

                        <div className="card-body text-center p-3" data-bs-toggle="offcanvas" data-bs-target="#offcanvasBottom" aria-controls="offcanvasBottom" >
                            <h5 className={`card-title pb-3 ${styles.bgText}`}>{packListData[0].name}
                            </h5>
                            <p className={`card-text ${styles.bgText}`}>{packListData[0].amount} / {packListData[0].length} </p>
                            <p className={`card-text ${styles.smText}`}>(নবায়নযোগ্য)</p>
                        </div>

                    </div>}


                    {packListData.length > 0 && <div className="offcanvas offcanvas-bottom h-auto" tabIndex={-1} id="offcanvasBottom" aria-labelledby="offcanvasBottomLabel" style={{ background: "#0C1B3E" }}>
                        
                        <div className="offcanvas-header">
                            <h5 className="offcanvas-title" id="offcanvasBottomLabel"></h5>
                            <button type="button" className="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                        </div>

                        <div className="offcanvas-body small">
                            <div className="container d-flex justify-content-between align-items-center" style={{ color: "white" }}>
                                <h4>{packListData[0].name}</h4>
                                <h4>{packListData[0].amount}</h4>
                            </div>

                            <hr className={styles.dashedLine} />

                            <p style={{ color: "white" }}>প্রোমো কোড (শুধুমাত্র বিকাশ পেমেন্ট এর জন্য প্রযোজ্য)</p>

                            <div className="input-group mb-3">
                                <input type="number" className="form-control" placeholder="প্রোমো কোডটি দিন..." aria-label="Recipient's username" aria-describedby="button-addon2" style={{ height: "70px" }} />
                                <button className="btn btn-outline-secondary" type="submit" id="button-addon2"><i className="bi bi-arrow-right"></i></button>
                            </div>

                            <hr className={styles.dashedLine} />

                            <div>
                                <p className={`text-center ${styles.bgText}`}>
                                    পেমেন্ট মাধ্যম বাছাই করুন
                                </p>

                                <div className="">

                                    <Slider {...paymentgatewaySlide}>

                                        <Link href="#">
                                            <div className="card mx-1">
                                                <Image src="/bkash_logo.png" className={`p-2 ${styles.paymentCardImg}`} height={120} width={100} alt="..." />
                                            </div>
                                        </Link>

                                        <Link href="#">
                                            <div className="card mx-1">

                                                <Image src="/google_pay_logo.png" className={`p-2 ${styles.paymentCardImg}`} height={120} width={100} alt="..." />
                                            </div>
                                        </Link>

                                        <Link href="#" data-bs-toggle="offcanvas" data-bs-target="#offcanvasBottom1" aria-controls="offcanvasBottom1">
                                            <div className="card mx-1">
                                                <Image src="/shurjo_pay.png" className={`p-2 ${styles.paymentCardImg}`} height={120} width={100} alt="..." />
                                            </div>
                                        </Link>

                                    </Slider>

                                </div>

                            </div>

                        </div>

                    </div>}

                    <div className="offcanvas offcanvas-bottom h-auto " tabIndex={-1} id="offcanvasBottom1" aria-labelledby="offcanvasBottomLabel1" style={{ background: "#343a40" }}>
                        <div className="offcanvas-header">
                            <h5 className={`offcanvas-title ${styles.shurjoText}`} id="offcanvasBottomLabel1">পেমেন্ট মাধ্যম বাছাই করুন</h5>
                            <button type="button" className="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                        </div>
                        <div className="offcanvas-body d-flex justify-content-center small">

                            <div className={styles.paymentFormBox}>

                                <div className="mx-2">

                                    <form>
                                        <div className="form-group mt-3">
                                            <label className={`form-label ${styles.text_color}`} htmlFor="msisdnLabel">Name</label>
                                            <div className="input-group">
                                                <input type="text" className={`form-control ${styles.inputNumberForm}`} placeholder="Enter Your Name" aria-label="Enter Your Name" aria-describedby="num-addon" />
                                            </div>
                                        </div>

                                        <div className="form-group mt-3">
                                            <label className={`form-label ${styles.text_color}`} htmlFor="msisdnLabel">Phone</label>
                                            <div className="input-group">
                                                <input type="text" className={`form-control ${styles.inputNumberForm}`} placeholder="Enter Phone Number" aria-label="Enter Phone Number" aria-describedby="num-addon" />
                                            </div>
                                        </div>

                                        <div className="form-group mt-3">
                                            <label className={`form-label ${styles.text_color}`} htmlFor="msisdnLabel">City</label>
                                            <div className="input-group">
                                                <input type="text" className={`form-control ${styles.inputNumberForm}`} placeholder="City Name" aria-label="City Name" aria-describedby="num-addon" />
                                            </div>
                                        </div>

                                        <div className="form-group mt-3">
                                            <label className={`form-label ${styles.text_color}`} htmlFor="msisdnLabel">Address</label>
                                            <div className="input-group">
                                                <input type="text" className={`form-control ${styles.inputNumberForm}`} placeholder="Type Your Address Name" aria-label="Type Your Address Name" aria-describedby="num-addon" />
                                            </div>
                                        </div>

                                        <div className="form-group mt-3">
                                            <label className={`form-label ${styles.text_color}`} htmlFor="msisdnLabel">Post Code</label>
                                            <div className="input-group">
                                                <input type="text" className={`form-control ${styles.inputNumberForm}`} placeholder="Type Your Post Code" aria-label="Type Your Post Code" aria-describedby="num-addon" />
                                            </div>
                                        </div>

                                        <div className="d-flex justify-content-center align-items-center mt-3">
                                            <button type="submit" className={`btn btn-primary ${styles.updateBtn}`}>CONTINUE</button>
                                        </div>

                                    </form>

                                </div>

                            </div>
                        </div>
                    </div>

                    <div className="row g-1 pt-3 pb-3 mx-2">

                        <div className="col-6 col-sm-6 col-md-6" data-bs-toggle="offcanvas" data-bs-target="#offcanvasBottom" aria-controls="offcanvasBottom" >

                            {packListData.length > 0 && <div className={`text-nowrap ${styles.card2}`} >

                                <div className="card-body text-center pt-4">
                                    <h5 className={`card-title pb-3 ${styles.bgText}`}>{packListData[1].name}</h5>
                                    <p className={`card-text pb-2 ${styles.bgText}`}>{packListData[1].amount} / {packListData[1].length} </p>
                                    <p className={`card-text ${styles.smText}`}>(নবায়নযোগ্য)</p>
                                </div>

                            </div>}

                        </div>


                        <div className="col-6 col-sm-6 col-md-6" data-bs-toggle="offcanvas" data-bs-target="#offcanvasBottom" aria-controls="offcanvasBottom" >

                            {packListData.length > 0 && <div className={`text-nowrap ${styles.card2}`} >

                                <div className="card-body text-center pt-4">
                                    <h5 className={`card-title pb-3 ${styles.bgText}`}>{packListData[2].name}</h5>
                                    <p className={`card-text pb-2 ${styles.bgText}`}>{packListData[2].amount} /{packListData[2].length}</p>
                                    <p className={`card-text ${styles.smText}`}>(নবায়নযোগ্য)</p>
                                </div>

                            </div>}

                        </div>

                    </div>

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