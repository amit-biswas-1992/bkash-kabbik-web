import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import styles from "../../styles/Home.module.css";
import Link from "next/link";
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCrown } from "@fortawesome/free-solid-svg-icons";
import { getBannerImage } from "../../services/api.service";
import BannerImageInfo from "../../models/BannerImageInfo";
import React, { useEffect, useState } from "react";

export default function Home() {

    const [bannerImageData, setbannerImageData] = useState<BannerImageInfo[]>([]);
    console.log(bannerImageData);

    useEffect(() => {
        bannerImage();
    }, []);

    const bannerImage = async () => {

        const data = await getBannerImage();
        if (data)
            console.log(data, "banner Image");
        setbannerImageData(data);

    }



    const mainSlide = {
        dots: true,
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        speed: 1800,
        autoplaySpeed: 5000,
        cssEase: "linear",
        arrows: false,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: true,
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    initialSlide: 0,
                    dots: true,
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    dots: true,
                }
            }
        ]
    };

    var trendSlide = {
        infinite: false,
        slidesToShow: 4,
        speed: 100,
        rows: 1,
        initialSlide: 0,
        arrows: false,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    infinite: true,
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    initialSlide: 0,
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 2.4,
                    initialSlide: 0,
                }
            }
        ]

    };

    const adSlide = {
        // dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        cssEase: "linear",
        arrows: false,
    };

    var newSlide = {
        infinite: false,
        slidesToShow: 4,
        speed: 100,
        rows: 1,
        initialSlide: 0,
        arrows: false,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    infinite: true,
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    initialSlide: 0,
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 2.4,
                    initialSlide: 0,
                }
            }
        ]

    };



    return (
        <>


            <div className={styles.homePage}>



                <div className={`container ${styles.homeContentBox}`}>

                    <section className="section1">

                        <div className="offcanvas offcanvas-bottom h-auto" tabIndex={-1} id="offcanvasBottom" aria-labelledby="offcanvasBottomLabel" style={{ backgroundColor: "rgb(58, 58, 68)" }}>
                            <div className="offcanvas-header">
                                <h5 className="offcanvas-title" id="offcanvasBottomLabel"></h5>
                                <button type="button" className="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                            </div>
                            <div className="offcanvas-body small mb-3">

                                <div className="text-center">
                                    <Link href="/subscribe" type="submit" className={`mt-3 ${styles.ytBtn}`}>
                                        <div className="mx-2 mt-2">
                                            <span>Subscribe</span>
                                        </div>
                                    </Link>

                                    <p className={`mt-1 ${styles.textColor}`}>To Listen Unlimited AudioBooks</p>
                                </div>


                                <div className="text-center mt-4">
                                    <h4 style={{ color: "#fff", fontWeight: "600" }}>Or</h4>
                                </div>

                                <div className="text-center">
                                    <Link href="https://www.facebook.com/groups/541021620691956/?ref=share&mibextid=NSMWBT" type="submit" className={`mt-3 ${styles.fbComBtn}`}>
                                        <div className="mx-3 mt-2">
                                            <span>WATCH ADS</span>
                                        </div>
                                    </Link>
                                    <p className={`mt-1 ${styles.textColor}`}>To Unlock PREMIUM AudioBooks</p>
                                </div>

                            </div>
                        </div>

                        <Slider {...mainSlide}>

                            {bannerImageData.map((info) => (

                                <div className="relative text-center">

                                    <div className={`card text-bg-dark ${styles.imgGradient}`}>
                                        <Link href="#">
                                            <Image src={"/karbalar.jpeg"} className={styles.cardImg} height={450} width={545} alt="" ></Image>
                                        </Link>
                                        <div className={styles.overlayText} >
                                            <div className="mb-4">
                                                <p className="card-text mb-1">কাব্যিক অরিজিনাল</p>
                                                <h5 className="card-title">কারবালার ইতিহাস </h5>
                                            </div>
                                            <div className={`d-flex justify-content-between align-items-center ${styles.overlayTextBtn}`}>
                                                <div className="">
                                                    <i className={`bi bi-mic-fill ${styles.micLogo}`}></i><br />
                                                    <span className={styles.sliderText}>313</span>
                                                </div>
                                                <button className={`mx-4 ${styles.audioPlayBtn}`} type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasBottom" aria-controls="offcanvasBottom"><i className="bi bi-play-circle-fill" ></i> Play</button>
                                                <div className="">
                                                    <i className={`bi bi-star-fill ${styles.starLogo}`}></i><br />
                                                    <span className={styles.sliderText}>313</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                </div>
                            ))}

                            {/* <div className="relative text-center">

                                <div className={`card text-bg-dark ${styles.imgGradient}`}>
                                    <Link href="#">
                                        <Image src="/karbalar.jpeg" className={styles.cardImg} height={450} width={545} alt="" ></Image>
                                    </Link>
                                    <div className={styles.overlayText} >
                                        <div className="mb-4">
                                            <p className="card-text mb-1">কাব্যিক অরিজিনাল</p>
                                            <h5 className="card-title">কারবালার ইতিহাস </h5>
                                        </div>
                                        <div className={`d-flex justify-content-between align-items-center ${styles.overlayTextBtn}`}>
                                            <div className="">
                                                <i className={`bi bi-mic-fill ${styles.micLogo}`}></i><br />
                                                <span className={styles.sliderText}>313</span>
                                            </div>
                                            <button className={`mx-4 ${styles.audioPlayBtn}`} type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasBottom" aria-controls="offcanvasBottom"><i className="bi bi-play-circle-fill" ></i> Play</button>
                                            <div className="">
                                                <i className={`bi bi-star-fill ${styles.starLogo}`}></i><br />
                                                <span className={styles.sliderText}>313</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                            </div> */}

                            {/* <div className="relative text-center">

                                <div className={`card text-bg-dark ${styles.imgGradient}`}>
                                    <Link href="#">
                                        <Image src="/karbalar.jpeg" className={styles.cardImg} height={450} width={545} alt="" ></Image></Link>
                                    <div className={styles.overlayText} >
                                        <div className="mb-4">
                                            <p className="card-text mb-1">কাব্যিক অরিজিনাল</p>
                                            <h5 className="card-title">কারবালার ইতিহাস </h5>
                                        </div>
                                        <div className={`d-flex justify-content-between align-items-center ${styles.overlayTextBtn}`}>
                                            <div className="">
                                                <i className={`bi bi-mic-fill ${styles.micLogo}`}></i><br />
                                                <span className={styles.sliderText}>313</span>
                                            </div>
                                            <button className={`mx-4 ${styles.audioPlayBtn}`} type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasBottom" aria-controls="offcanvasBottom"><i className="bi bi-play-circle-fill" ></i> Play</button>
                                            <div className="">
                                                <i className={`bi bi-star-fill ${styles.starLogo}`}></i><br />
                                                <span className={styles.sliderText}>313</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                            </div>

                            <div className="relative text-center">

                                <div className={`card text-bg-dark ${styles.imgGradient}`}>
                                    <Link href="#"><Image src="/karbalar.jpeg" className={styles.cardImg} height={450} width={545} alt="" ></Image></Link>
                                    <div className={styles.overlayText} >
                                        <div className="mb-4">
                                            <p className="card-text mb-1">কাব্যিক অরিজিনাল</p>
                                            <h5 className="card-title">কারবালার ইতিহাস </h5>
                                        </div>
                                        <div className={`d-flex justify-content-between align-items-center ${styles.overlayTextBtn}`}>
                                            <div className="">
                                                <i className={`bi bi-mic-fill ${styles.micLogo}`}></i><br />
                                                <span className={styles.sliderText}>313</span>
                                            </div>
                                            <button className={`mx-4 ${styles.audioPlayBtn}`} type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasBottom" aria-controls="offcanvasBottom"><i className="bi bi-play-circle-fill" ></i> Play</button>
                                            <div className="">
                                                <i className={`bi bi-star-fill ${styles.starLogo}`}></i><br />
                                                <span className={styles.sliderText}>313</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                            </div>

                            <div className="relative text-center">

                                <div className={`card text-bg-dark ${styles.imgGradient}`}>
                                    <Link href="#"><Image src="/karbalar.jpeg" className={styles.cardImg} height={450} width={545} alt="" ></Image></Link>
                                    <div className={styles.overlayText} >
                                        <div className="mb-4">
                                            <p className="card-text mb-1">কাব্যিক অরিজিনাল</p>
                                            <h5 className="card-title">কারবালার ইতিহাস </h5>
                                        </div>
                                        <div className={`d-flex justify-content-between align-items-center ${styles.overlayTextBtn}`}>
                                            <div className="">
                                                <i className={`bi bi-mic-fill ${styles.micLogo}`}></i><br />
                                                <span className={styles.sliderText}>313</span>
                                            </div>
                                            <button className={`mx-4 ${styles.audioPlayBtn}`} type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasBottom" aria-controls="offcanvasBottom"><i className="bi bi-play-circle-fill" ></i> Play</button>
                                            <div className="">
                                                <i className={`bi bi-star-fill ${styles.starLogo}`}></i><br />
                                                <span className={styles.sliderText}>313</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                            </div>

                            <div className="relative text-center">

                                <div className={`card text-bg-dark ${styles.imgGradient}`}>
                                    <Link href="#"><Image src="/karbalar.jpeg" className={styles.cardImg} height={450} width={545} alt="" ></Image></Link>
                                    <div className={styles.overlayText} >
                                        <div className="mb-4">
                                            <p className="card-text mb-1">কাব্যিক অরিজিনাল</p>
                                            <h5 className="card-title">কারবালার ইতিহাস </h5>
                                        </div>
                                        <div className={`d-flex justify-content-between align-items-center ${styles.overlayTextBtn}`}>
                                            <div className="">
                                                <i className={`bi bi-mic-fill ${styles.micLogo}`}></i><br />
                                                <span className={styles.sliderText}>313</span>
                                            </div>
                                            <button className={`mx-4 ${styles.audioPlayBtn}`} type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasBottom" aria-controls="offcanvasBottom"><i className="bi bi-play-circle-fill" ></i> Play</button>
                                            <div className="">
                                                <i className={`bi bi-star-fill ${styles.starLogo}`}></i><br />
                                                <span className={styles.sliderText}>313</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                            </div> */}

                        </Slider >

                    </section>


                    <section className="section2 mt-4">

                        <div className="d-flex justify-content-between align-items-center mb-2 mx-1">
                            <Link href="#" style={{ fontSize: "18px", color: "white" }}>ট্রেন্ডিং </Link>
                            <Link href="#" className={styles.textColor}>See More</Link>
                        </div>

                        <Slider {...trendSlide} >

                            <Link href="/audiobook_details">

                                <div className={`card mx-1 ${styles.catagoryCard}`}>
                                    <div className="d-flex justify-content-between card-header">
                                        <FontAwesomeIcon className={styles.premiumLogo} icon={faCrown} style={{ fontSize: "14px", color: "white" }} />
                                        <button className={`mx-1 ${styles.starBtn}`}><i className="bi bi-star-fill"></i> 4.5</button>
                                    </div>
                                    <Image src="/karbalar.jpeg" className={styles.catagoryCardImg} height={150} width={150} alt="" ></Image>
                                    <div className="card-footer">
                                        <button className={styles.playBtn}><i className="bi bi-play-circle-fill"></i> 156</button>
                                    </div>
                                </div>

                                <div className="text-center">
                                    <p className={`my-2 ${styles.textColor}`}>বাংলাদেশে ইসলামের </p>
                                    <p className={`text-muted ${styles.textColor}`}>কাব্যিক অরিজিনাল </p>
                                </div>

                            </Link>

                            <Link href="#">

                                <div className={`card mx-1 ${styles.catagoryCard}`}>
                                    <div className="d-flex justify-content-between card-header">
                                        <span className={styles.freeAudioText} >Free</span>
                                        <button className={`mx-1 ${styles.starBtn}`}><i className="bi bi-star-fill"></i> 4.5</button>
                                    </div>
                                    <Image src="/tiktiki.jpg" className={styles.catagoryCardImg} height={150} width={150} alt="" ></Image>
                                    <div className="card-footer">
                                        <button className={styles.playBtn}><i className="bi bi-play-circle-fill"></i> 156</button>
                                    </div>
                                </div>

                                <div className="text-center">
                                    <p className={`my-2 ${styles.textColor}`}>বাংলাদেশে ইসলামের </p>
                                    <p className={`text-muted ${styles.textColor}`}>কাব্যিক অরিজিনাল </p>
                                </div>

                            </Link>

                            <Link href="#">

                                <div className={`card mx-1 ${styles.catagoryCard}`}>
                                    <div className="d-flex justify-content-between card-header">
                                        <FontAwesomeIcon className={styles.premiumLogo} icon={faCrown} style={{ fontSize: "14px", color: "white" }} />
                                        <button className={`mx-1 ${styles.starBtn}`}><i className="bi bi-star-fill"></i> 4.5</button>
                                    </div>
                                    <Image src="/mosha.jpeg" className={styles.catagoryCardImg} height={150} width={150} alt="" ></Image>
                                    <div className="card-footer">
                                        <button className={styles.playBtn}><i className="bi bi-play-circle-fill"></i> 156</button>
                                    </div>
                                </div>

                                <div className="text-center">
                                    <p className={`my-2 ${styles.textColor}`}>বাংলাদেশে ইসলামের </p>
                                    <p className={`text-muted ${styles.textColor}`}>কাব্যিক অরিজিনাল </p>
                                </div>

                            </Link>

                            <Link href="#">

                                <div className={`card mx-1 ${styles.catagoryCard}`}>
                                    <div className="d-flex justify-content-between card-header">
                                        <span className={styles.freeAudioText} >Free</span>
                                        <button className={`mx-1 ${styles.starBtn}`}><i className="bi bi-star-fill"></i> 4.5</button>
                                    </div>
                                    <Image src="/hodifu.jpeg" className={styles.catagoryCardImg} height={150} width={150} alt="" ></Image>
                                    <div className="card-footer">
                                        <button className={styles.playBtn}><i className="bi bi-play-circle-fill"></i> 156</button>
                                    </div>
                                </div>

                                <div className="text-center">
                                    <p className={`my-2 ${styles.textColor}`}>বাংলাদেশে ইসলামের </p>
                                    <p className={`text-muted ${styles.textColor}`}>কাব্যিক অরিজিনাল </p>
                                </div>

                            </Link>

                            <Link href="#">

                                <div className={`card mx-1 ${styles.catagoryCard}`}>
                                    <div className="d-flex justify-content-between card-header">
                                        <FontAwesomeIcon className={styles.premiumLogo} icon={faCrown} style={{ fontSize: "14px", color: "white" }} />
                                        <button className={`mx-1 ${styles.starBtn}`}><i className="bi bi-star-fill"></i> 4.5</button>
                                    </div>
                                    <Image src="/bidesh.jpeg" className={styles.catagoryCardImg} height={150} width={150} alt="" ></Image>
                                    <div className="card-footer">
                                        <button className={styles.playBtn}><i className="bi bi-play-circle-fill"></i> 156</button>
                                    </div>
                                </div>

                                <div className="text-center">
                                    <p className={`my-2 ${styles.textColor}`}>বাংলাদেশে ইসলামের </p>
                                    <p className={`text-muted ${styles.textColor}`}>কাব্যিক অরিজিনাল </p>
                                </div>

                            </Link>

                            <Link href="#">

                                <div className={`card mx-1 ${styles.catagoryCard}`}>
                                    <div className="d-flex justify-content-between card-header">
                                        <span className={styles.freeAudioText} >Free</span>
                                        <button className={`mx-1 ${styles.starBtn}`}><i className="bi bi-star-fill"></i> 4.5</button>
                                    </div>
                                    <Image src="/demo.jpg" className={styles.catagoryCardImg} height={150} width={150} alt="" ></Image>
                                    <div className="card-footer">
                                        <button className={styles.playBtn}><i className="bi bi-play-circle-fill"></i> 156</button>
                                    </div>
                                </div>

                                <div className="text-center">
                                    <p className={`my-2 ${styles.textColor}`}>বাংলাদেশে ইসলামের </p>
                                    <p className={`text-muted ${styles.textColor}`}>কাব্যিক অরিজিনাল </p>
                                </div>

                            </Link>

                            <Link href="#">

                                <div className={`card mx-1 ${styles.catagoryCard}`}>
                                    <div className="d-flex justify-content-between card-header">
                                        <FontAwesomeIcon className={styles.premiumLogo} icon={faCrown} style={{ fontSize: "14px", color: "white" }} />
                                        <button className={`mx-1 ${styles.starBtn}`}><i className="bi bi-star-fill"></i> 4.5</button>
                                    </div>
                                    <Image src="/demo.jpg" className={styles.catagoryCardImg} height={150} width={150} alt="" ></Image>
                                    <div className="card-footer">
                                        <button className={styles.playBtn}><i className="bi bi-play-circle-fill"></i> 156</button>
                                    </div>
                                </div>

                                <div className="text-center">
                                    <p className={`my-2 ${styles.textColor}`}>বাংলাদেশে ইসলামের </p>
                                    <p className={`text-muted ${styles.textColor}`}>কাব্যিক অরিজিনাল </p>
                                </div>

                            </Link>

                            <Link href="#">

                                <div className={`card mx-1 ${styles.catagoryCard}`}>
                                    <div className="d-flex justify-content-between card-header">
                                        <span className={styles.freeAudioText} >Free</span>
                                        <button className={`mx-1 ${styles.starBtn}`}><i className="bi bi-star-fill"></i> 4.5</button>
                                    </div>
                                    <Image src="/demo.jpg" className={styles.catagoryCardImg} height={150} width={150} alt="" ></Image>
                                    <div className="card-footer">
                                        <button className={styles.playBtn}><i className="bi bi-play-circle-fill"></i> 156</button>
                                    </div>
                                </div>

                                <div className="text-center">
                                    <p className={`my-2 ${styles.textColor}`}>বাংলাদেশে ইসলামের </p>
                                    <p className={`text-muted ${styles.textColor}`}>কাব্যিক অরিজিনাল </p>
                                </div>

                            </Link>

                            <Link href="#">

                                <div className={`card mx-1 ${styles.catagoryCard}`}>
                                    <div className="d-flex justify-content-between card-header">
                                        <FontAwesomeIcon className={styles.premiumLogo} icon={faCrown} style={{ fontSize: "14px", color: "white" }} />
                                        <button className={`mx-1 ${styles.starBtn}`}><i className="bi bi-star-fill"></i> 4.5</button>
                                    </div>
                                    <Image src="/demo.jpg" className={styles.catagoryCardImg} height={150} width={150} alt="" ></Image>
                                    <div className="card-footer">
                                        <button className={styles.playBtn}><i className="bi bi-play-circle-fill"></i> 156</button>
                                    </div>
                                </div>

                                <div className="text-center">
                                    <p className={`my-2 ${styles.textColor}`}>বাংলাদেশে ইসলামের </p>
                                    <p className={`text-muted ${styles.textColor}`}>কাব্যিক অরিজিনাল </p>
                                </div>

                            </Link>

                            <Link href="#">

                                <div className={`card mx-1 ${styles.catagoryCard}`}>
                                    <div className="d-flex justify-content-between card-header">
                                        <span className={styles.freeAudioText} >Free</span>
                                        <button className={`mx-1 ${styles.starBtn}`}><i className="bi bi-star-fill"></i> 4.5</button>
                                    </div>
                                    <Image src="/demo.jpg" className={styles.catagoryCardImg} height={150} width={150} alt="" ></Image>
                                    <div className="card-footer">
                                        <button className={styles.playBtn}><i className="bi bi-play-circle-fill"></i> 156</button>
                                    </div>
                                </div>

                                <div className="text-center">
                                    <p className={`my-2 ${styles.textColor}`}>বাংলাদেশে ইসলামের </p>
                                    <p className={`text-muted ${styles.textColor}`}>কাব্যিক অরিজিনাল </p>
                                </div>

                            </Link>

                            <Link href="#">

                                <div className={`card mx-1 ${styles.catagoryCard}`}>
                                    <div className="d-flex justify-content-between card-header">
                                        <FontAwesomeIcon className={styles.premiumLogo} icon={faCrown} style={{ fontSize: "14px", color: "white" }} />
                                        <button className={`mx-1 ${styles.starBtn}`}><i className="bi bi-star-fill"></i> 4.5</button>
                                    </div>
                                    <Image src="/demo.jpg" className={styles.catagoryCardImg} height={150} width={150} alt="" ></Image>
                                    <div className="card-footer">
                                        <button className={styles.playBtn}><i className="bi bi-play-circle-fill"></i> 156</button>
                                    </div>
                                </div>

                                <div className="text-center">
                                    <p className={`my-2 ${styles.textColor}`}>বাংলাদেশে ইসলামের </p>
                                    <p className={`text-muted ${styles.textColor}`}>কাব্যিক অরিজিনাল </p>
                                </div>

                            </Link>


                        </Slider>

                    </section>

                    <section className="section3">

                        <div>
                            <Slider {...adSlide}>
                                <div>
                                    <Link href="#"><Image src="/karbalar.jpeg" className={` ${styles.sec3cardImg}`} height={130} width={545} alt="" ></Image></Link>
                                </div>

                                <div>
                                    <Link href="#"><Image src="/karbalar.jpeg" className={styles.sec3cardImg} height={130} width={545} alt="" ></Image></Link>
                                </div>

                                <div>
                                    <Link href="#"><Image src="/karbalar.jpeg" className={styles.sec3cardImg} height={130} width={545} alt="" ></Image></Link>
                                </div>

                                <div>
                                    <Link href="#"><Image src="/karbalar.jpeg" className={styles.sec3cardImg} height={130} width={545} alt="" ></Image></Link>
                                </div>

                            </Slider>
                        </div>

                    </section>

                    <section className="section4 mt-3">

                        <div className="d-flex justify-content-between align-items-center mb-2 mx-1">
                            <Link href="#" style={{ fontSize: "18px", color: "white" }}>নতুন </Link>
                            <Link href="#" className={styles.textColor}>See More</Link>
                        </div>

                        <Slider {...newSlide} >

                            <Link href="#">

                                <div className={`card mx-1 ${styles.catagoryCard}`}>
                                    <div className="d-flex justify-content-between card-header">
                                        <FontAwesomeIcon className={styles.premiumLogo} icon={faCrown} style={{ fontSize: "14px", color: "white" }} />
                                        <button className={`mx-1 ${styles.starBtn}`}><i className="bi bi-star-fill"></i> 4.5</button>
                                    </div>
                                    <Image src="/karbalar.jpeg" className={styles.catagoryCardImg} height={150} width={150} alt="" ></Image>
                                    <div className="card-footer">
                                        <button className={styles.playBtn}><i className="bi bi-play-circle-fill"></i> 156</button>
                                    </div>
                                </div>

                                <div className="text-center">
                                    <p className={`my-2 ${styles.textColor}`}>বাংলাদেশে ইসলামের </p>
                                    <p className={`text-muted ${styles.textColor}`}>কাব্যিক অরিজিনাল </p>
                                </div>

                            </Link>

                            <Link href="#">

                                <div className={`card mx-1 ${styles.catagoryCard}`}>
                                    <div className="d-flex justify-content-between card-header">
                                        <span className={styles.freeAudioText} >Free</span>
                                        <button className={`mx-1 ${styles.starBtn}`}><i className="bi bi-star-fill"></i> 4.5</button>
                                    </div>
                                    <Image src="/tiktiki.jpg" className={styles.catagoryCardImg} height={150} width={150} alt="" ></Image>
                                    <div className="card-footer">
                                        <button className={styles.playBtn}><i className="bi bi-play-circle-fill"></i> 156</button>
                                    </div>
                                </div>

                                <div className="text-center">
                                    <p className={`my-2 ${styles.textColor}`}>বাংলাদেশে ইসলামের </p>
                                    <p className={`text-muted ${styles.textColor}`}>কাব্যিক অরিজিনাল </p>
                                </div>

                            </Link>

                            <Link href="#">

                                <div className={`card mx-1 ${styles.catagoryCard}`}>
                                    <div className="d-flex justify-content-between card-header">
                                        <FontAwesomeIcon className={styles.premiumLogo} icon={faCrown} style={{ fontSize: "14px", color: "white" }} />
                                        <button className={`mx-1 ${styles.starBtn}`}><i className="bi bi-star-fill"></i> 4.5</button>
                                    </div>
                                    <Image src="/mosha.jpeg" className={styles.catagoryCardImg} height={150} width={150} alt="" ></Image>
                                    <div className="card-footer">
                                        <button className={styles.playBtn}><i className="bi bi-play-circle-fill"></i> 156</button>
                                    </div>
                                </div>

                                <div className="text-center">
                                    <p className={`my-2 ${styles.textColor}`}>বাংলাদেশে ইসলামের </p>
                                    <p className={`text-muted ${styles.textColor}`}>কাব্যিক অরিজিনাল </p>
                                </div>

                            </Link>

                            <Link href="#">

                                <div className={`card mx-1 ${styles.catagoryCard}`}>
                                    <div className="d-flex justify-content-between card-header">
                                        <span className={styles.freeAudioText} >Free</span>
                                        <button className={`mx-1 ${styles.starBtn}`}><i className="bi bi-star-fill"></i> 4.5</button>
                                    </div>
                                    <Image src="/hodifu.jpeg" className={styles.catagoryCardImg} height={150} width={150} alt="" ></Image>
                                    <div className="card-footer">
                                        <button className={styles.playBtn}><i className="bi bi-play-circle-fill"></i> 156</button>
                                    </div>
                                </div>

                                <div className="text-center">
                                    <p className={`my-2 ${styles.textColor}`}>বাংলাদেশে ইসলামের </p>
                                    <p className={`text-muted ${styles.textColor}`}>কাব্যিক অরিজিনাল </p>
                                </div>

                            </Link>

                            <Link href="#">

                                <div className={`card mx-1 ${styles.catagoryCard}`}>
                                    <div className="d-flex justify-content-between card-header">
                                        <FontAwesomeIcon className={styles.premiumLogo} icon={faCrown} style={{ fontSize: "14px", color: "white" }} />
                                        <button className={`mx-1 ${styles.starBtn}`}><i className="bi bi-star-fill"></i> 4.5</button>
                                    </div>
                                    <Image src="/bidesh.jpeg" className={styles.catagoryCardImg} height={150} width={150} alt="" ></Image>
                                    <div className="card-footer">
                                        <button className={styles.playBtn}><i className="bi bi-play-circle-fill"></i> 156</button>
                                    </div>
                                </div>

                                <div className="text-center">
                                    <p className={`my-2 ${styles.textColor}`}>বাংলাদেশে ইসলামের </p>
                                    <p className={`text-muted ${styles.textColor}`}>কাব্যিক অরিজিনাল </p>
                                </div>

                            </Link>

                            <Link href="#">

                                <div className={`card mx-1 ${styles.catagoryCard}`}>
                                    <div className="d-flex justify-content-between card-header">
                                        <span className={styles.freeAudioText} >Free</span>
                                        <button className={`mx-1 ${styles.starBtn}`}><i className="bi bi-star-fill"></i> 4.5</button>
                                    </div>
                                    <Image src="/demo.jpg" className={styles.catagoryCardImg} height={150} width={150} alt="" ></Image>
                                    <div className="card-footer">
                                        <button className={styles.playBtn}><i className="bi bi-play-circle-fill"></i> 156</button>
                                    </div>
                                </div>

                                <div className="text-center">
                                    <p className={`my-2 ${styles.textColor}`}>বাংলাদেশে ইসলামের </p>
                                    <p className={`text-muted ${styles.textColor}`}>কাব্যিক অরিজিনাল </p>
                                </div>

                            </Link>

                            <Link href="#">

                                <div className={`card mx-1 ${styles.catagoryCard}`}>
                                    <div className="d-flex justify-content-between card-header">
                                        <FontAwesomeIcon className={styles.premiumLogo} icon={faCrown} style={{ fontSize: "14px", color: "white" }} />
                                        <button className={`mx-1 ${styles.starBtn}`}><i className="bi bi-star-fill"></i> 4.5</button>
                                    </div>
                                    <Image src="/demo.jpg" className={styles.catagoryCardImg} height={150} width={150} alt="" ></Image>
                                    <div className="card-footer">
                                        <button className={styles.playBtn}><i className="bi bi-play-circle-fill"></i> 156</button>
                                    </div>
                                </div>

                                <div className="text-center">
                                    <p className={`my-2 ${styles.textColor}`}>বাংলাদেশে ইসলামের </p>
                                    <p className={`text-muted ${styles.textColor}`}>কাব্যিক অরিজিনাল </p>
                                </div>

                            </Link>

                            <Link href="#">

                                <div className={`card mx-1 ${styles.catagoryCard}`}>
                                    <div className="d-flex justify-content-between card-header">
                                        <span className={styles.freeAudioText} >Free</span>
                                        <button className={`mx-1 ${styles.starBtn}`}><i className="bi bi-star-fill"></i> 4.5</button>
                                    </div>
                                    <Image src="/demo.jpg" className={styles.catagoryCardImg} height={150} width={150} alt="" ></Image>
                                    <div className="card-footer">
                                        <button className={styles.playBtn}><i className="bi bi-play-circle-fill"></i> 156</button>
                                    </div>
                                </div>

                                <div className="text-center">
                                    <p className={`my-2 ${styles.textColor}`}>বাংলাদেশে ইসলামের </p>
                                    <p className={`text-muted ${styles.textColor}`}>কাব্যিক অরিজিনাল </p>
                                </div>

                            </Link>

                            <Link href="#">

                                <div className={`card mx-1 ${styles.catagoryCard}`}>
                                    <div className="d-flex justify-content-between card-header">
                                        <FontAwesomeIcon className={styles.premiumLogo} icon={faCrown} style={{ fontSize: "14px", color: "white" }} />
                                        <button className={`mx-1 ${styles.starBtn}`}><i className="bi bi-star-fill"></i> 4.5</button>
                                    </div>
                                    <Image src="/demo.jpg" className={styles.catagoryCardImg} height={150} width={150} alt="" ></Image>
                                    <div className="card-footer">
                                        <button className={styles.playBtn}><i className="bi bi-play-circle-fill"></i> 156</button>
                                    </div>
                                </div>

                                <div className="text-center">
                                    <p className={`my-2 ${styles.textColor}`}>বাংলাদেশে ইসলামের </p>
                                    <p className={`text-muted ${styles.textColor}`}>কাব্যিক অরিজিনাল </p>
                                </div>

                            </Link>

                            <Link href="#">

                                <div className={`card mx-1 ${styles.catagoryCard}`}>
                                    <div className="d-flex justify-content-between card-header">
                                        <span className={styles.freeAudioText} >Free</span>
                                        <button className={`mx-1 ${styles.starBtn}`}><i className="bi bi-star-fill"></i> 4.5</button>
                                    </div>
                                    <Image src="/demo.jpg" className={styles.catagoryCardImg} height={150} width={150} alt="" ></Image>
                                    <div className="card-footer">
                                        <button className={styles.playBtn}><i className="bi bi-play-circle-fill"></i> 156</button>
                                    </div>
                                </div>

                                <div className="text-center">
                                    <p className={`my-2 ${styles.textColor}`}>বাংলাদেশে ইসলামের </p>
                                    <p className={`text-muted ${styles.textColor}`}>কাব্যিক অরিজিনাল </p>
                                </div>

                            </Link>

                            <Link href="#">

                                <div className={`card mx-1 ${styles.catagoryCard}`}>
                                    <div className="d-flex justify-content-between card-header">
                                        <FontAwesomeIcon className={styles.premiumLogo} icon={faCrown} style={{ fontSize: "14px", color: "white" }} />
                                        <button className={`mx-1 ${styles.starBtn}`}><i className="bi bi-star-fill"></i> 4.5</button>
                                    </div>
                                    <Image src="/demo.jpg" className={styles.catagoryCardImg} height={150} width={150} alt="" ></Image>
                                    <div className="card-footer">
                                        <button className={styles.playBtn}><i className="bi bi-play-circle-fill"></i> 156</button>
                                    </div>
                                </div>

                                <div className="text-center">
                                    <p className={`my-2 ${styles.textColor}`}>বাংলাদেশে ইসলামের </p>
                                    <p className={`text-muted ${styles.textColor}`}>কাব্যিক অরিজিনাল </p>
                                </div>

                            </Link>


                        </Slider>

                    </section>

                    <section className="section5 mx-2">
                        <div className="d-flex justify-content-between align-items-center">
                            <p style={{ color: "white" }}>Browse by Catagory</p>
                            <Link href="/audiobook_search"><p style={{ color: "white" }}><i className="bi bi-chevron-down"></i> Show more</p></Link>
                        </div>

                        <div className="d-flex mt-3 justify-content-between text-center">
                            <Link href="/catagory_list" className={`text-warp ${styles.browseCatagoryBtn}`}><p className={styles.browseCatagoryBtnText}>জীবনবৃত্তান্ত</p></Link>
                            <Link href="/catagory_list" className={`text-warp ${styles.browseCatagoryBtn}`}><p className={styles.browseCatagoryBtnText}>কল্পনা</p></Link>
                            <Link href="/catagory_list" className={`text-warp ${styles.browseCatagoryBtn}`}><p className={styles.browseCatagoryBtnText}>ভৌতিক</p></Link>
                        </div>

                        <div className="d-flex mt-4 mx-5 justify-content-between text-center">
                            <Link href="/catagory_list" className={`text-warp ${styles.browseCatagoryBtn}`}><p className={styles.browseCatagoryBtnText}>বিনোদন</p></Link>
                            <Link href="/catagory_list" className={`text-warp ${styles.browseCatagoryBtn}`}><p className={styles.browseCatagoryBtnText}>ধর্মীয়</p></Link>
                        </div>

                        <div className="mt-4 row text-center">
                            <Link href="/catagory_list" className={`col mx-2 text-warp ${styles.browseCatagoryBtn}`}><p className={styles.browseCatagoryBtnText}>সমকালীন উপন্যাস</p></Link>
                        </div>

                    </section>

                    <section className="container homeFooter mt-5">
                        <div>
                            <h3 style={{ color: "white" }}>আপনার পছন্দের অডিওবুক খুঁজে পাচ্ছেন না?</h3>
                            <p style={{ color: "white" }}>নিচে অডিওবুক সার্চ করে পেয়ে যেতে পারেন </p>
                            <Link href="#"><p style={{ color: "#DC143C" }}>অডিওবুক খুজুন <i className="bi bi-sign-turn-right-fill"></i></p></Link>
                        </div>
                    </section>

                </div>



            </div>



        </>

    )
}