import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import styles from "../../styles/Home.module.css";
import Link from "next/link";
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCrown } from "@fortawesome/free-solid-svg-icons";
import { getTopBannerImage, getHomeList, getPromoBannerList, getCatagorySuggestions } from "../../services/api.service";
import TopBannerImageInfo from "../../models/TopBannerImageInfo";
import HomeInfo from "../../models/HomeInfo";
import PromoBannerInfo from "../../models/PromoBannerInfo";
import CatagorySuggestionsInfo from "../../models/CatagorySuggestionsInfo";
import React, { useEffect, useState } from "react";
import Router from "next/router";

export default function Home() {

    const [topbannerImageData, settopbannerImageData] = useState<TopBannerImageInfo[]>();
    const [homeData, sethomeData] = useState<HomeInfo[]>();
    const [promoBannerData, setpromoBannerData] = useState<PromoBannerInfo[]>();
    const [catagorySuggData, setcatagorySuggData] = useState<CatagorySuggestionsInfo[]>();

    console.log(topbannerImageData);
    console.log('data',catagorySuggData);

    useEffect(() => {
        topBannerImage();
        homeDetails();
        PromoBannerImage();
        catagorySuggestion();
    }, []);

    const topBannerImage = async () => {

        const data = await getTopBannerImage();
        if (data)
            console.log(data, "banner Image");
        settopbannerImageData(data.data);

    }

    const PromoBannerImage = async () => {

        const data = await getPromoBannerList();
        if (data)
            console.log(data, "banner Image");
        setpromoBannerData(data);

    }

    const homeDetails = async () => {

        const data = await getHomeList();
        if (data)
            sethomeData(data.data);
    };

    const catagorySuggestion = async () => {

        const data = await getCatagorySuggestions();
        if (data)
            setcatagorySuggData(data.data);
    };

    const trendingLoader = ({ src, width, quality }: any) => {
        return `${src}?w=${width}&q=${quality || 75}`;
    };

    const topBannerLoader = ({ src, width, quality }: any) => {
        return `${src}?w=${width}&q=${quality || 75}`;
    };

    const promoBannerLoader = ({ src, width, quality }: any) => {
        return `${src}?w=${width}&q=${quality || 75}`;
    };

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
        border: false,

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

    var homeSlide = {

        infinite: false,
        slidesToShow: 4,
        speed: 100,
        rows: 1,
        initialSlide: 0,
        arrows: false,
        // alignment: left,
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
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        cssEase: "linear",
        arrows: false,
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

                            {topbannerImageData?.map((topbannerinfo: any) => (

                                <div key={topbannerinfo?.id} className="relative text-center">

                                    <div className={`card text-bg-dark`} style={{ border: "none" }}>

                                        <div className={`position-relative ${styles.imgGradient}`} onClick={() => Router.push(`/audiobook_details/${topbannerinfo?.id}`)} >

                                            <Image
                                                loader={topBannerLoader}
                                                width={545}
                                                height={450}
                                                src={topbannerinfo.thumb_path}
                                                alt=""
                                                className={styles.cardImg}
                                            />

                                        </div>

                                        <div className={styles.overlayText} >
                                            <div className="mb-4">
                                                <p className="card-text mb-1">{topbannerinfo.author_name}</p>
                                                <h5 className="card-title">{topbannerinfo.name}</h5>
                                            </div>
                                            <div className={`d-flex justify-content-between align-items-center ${styles.overlayTextBtn}`}>
                                                <div className="">
                                                    <i className={`bi bi-mic-fill ${styles.micLogo}`}></i><br />
                                                    <span className={styles.sliderText}>{topbannerinfo.play_count}</span>
                                                </div>
                                                <button className={`mx-4 ${styles.audioPlayBtn}`} type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasBottom" aria-controls="offcanvasBottom"><i className="bi bi-play-circle-fill" ></i> Play</button>
                                                <div className="">
                                                    <i className={`bi bi-star-fill ${styles.starLogo}`}></i><br />
                                                    <span className={styles.sliderText}>{topbannerinfo.rating.toFixed(1)}</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                </div>
                            ))}

                        </Slider >

                    </section>


                    <section className="section2 mt-4">

                        {homeData?.map((homeinfo: any, index: any) => (

                            <>
                                <div className="d-flex justify-content-between align-items-center mb-2 mx-1">
                                    <Link href="#" style={{ fontSize: "18px", color: "white" }}>{homeinfo.name} </Link>
                                    <Link href="#" className={styles.textColor}>See More</Link>
                                </div>

                                <Slider {...homeSlide}>

                                    {homeinfo?.data?.map((audiobookinfo: any) => (

                                        <div key={audiobookinfo?.id} >

                                            <Link href={`audiobook_details/${audiobookinfo?.id}`}>

                                                <div className={`card mx-1 ${styles.catagoryCard}`}>

                                                    <div className="d-flex justify-content-between card-header">

                                                        {audiobookinfo.price == 0 ? <div className={styles.freeAudioText}>Free</div> : <FontAwesomeIcon className={styles.premiumLogo} icon={faCrown} style={{ fontSize: "14px", color: "white" }} />}

                                                        <button className={`mx-1 ${styles.starBtn}`}><i className="bi bi-star-fill"></i> {audiobookinfo.rating.toFixed(1)}</button>
                                                    </div>

                                                    <Image
                                                        loader={trendingLoader}
                                                        width={150}
                                                        height={150}
                                                        src={audiobookinfo.thumb_path}
                                                        alt=""
                                                        className={styles.catagoryCardImg}
                                                    />

                                                    <div className="card-footer">
                                                        <button className={styles.playBtn}><i className="bi bi-play-circle-fill"></i>{audiobookinfo.play_count}</button>
                                                    </div>
                                                </div>

                                                <div className="text-center">
                                                    <p className={`my-2 ${styles.textColor}`}>{audiobookinfo.name}</p>
                                                    <p className={`text-muted ${styles.textColor}`}>{audiobookinfo.author_name}</p>
                                                </div>

                                            </Link>

                                        </div>

                                    ))}

                                </Slider>

                                {index == 0 ?

                                    <section className="section3 my-4">

                                        <div>
                                            <Slider {...adSlide}>

                                                {promoBannerData?.map((promoinfo: any) => (

                                                    <div key={promoinfo.audiobook_id}>

                                                        <Link href={promoinfo.route == "audiobook_route" ? `audiobook_details/${promoinfo?.audiobook_id}` : "/subscribe"}>

                                                            <Image
                                                                loader={promoBannerLoader}
                                                                width={545}
                                                                height={130}
                                                                src={promoinfo.image_url}
                                                                alt=""
                                                                className={` ${styles.sec3cardImg}`}
                                                            />

                                                        </Link>

                                                    </div>

                                                ))}

                                            </Slider>
                                        </div>

                                    </section> : <></>}

                                { catagorySuggData && index == 4  ?

                                    <section className="section5 mx-2 mb-4">
                                        
                                        <div className="d-flex justify-content-between align-items-center">
                                            <p style={{ color: "white" }}>Browse by Catagory</p>
                                            <Link href="/audiobook_search"><p style={{ color: "white" }}><i className="bi bi-chevron-down"></i> Show more</p></Link>
                                        </div>

                                        <div className="d-flex mt-3 justify-content-between text-center">
                                            <Link href={`catagory_list/${catagorySuggData[0]?.id}`} className={`${styles.browseCatagoryBtn}`}><p className={`text-wrap mb-0 ${styles.browseCatagoryBtnText}`}>{catagorySuggData[0]?.name}</p></Link>
                                            <Link href={`catagory_list/${catagorySuggData[1]?.id}`} className={`${styles.browseCatagoryBtn}`}><p className={`text-wrap mb-0 ${styles.browseCatagoryBtnText}`}>{catagorySuggData[1]?.name}</p></Link>
                                            <Link href={`catagory_list/${catagorySuggData[2]?.id}`} className={`${styles.browseCatagoryBtn}`}><p className={`text-wrap mb-0 ${styles.browseCatagoryBtnText}`}>{catagorySuggData[2]?.name}</p></Link>
                                        </div>

                                        <div className="d-flex mt-4 mx-5 justify-content-between text-center">
                                            <Link href={`catagory_list/${catagorySuggData[3]?.id}`} className={`${styles.browseCatagoryBtn}`}><p className={`text-wrap mb-0 ${styles.browseCatagoryBtnText}`}>{catagorySuggData[3]?.name}</p></Link>
                                            <Link href={`catagory_list/${catagorySuggData[4]?.id}`} className={`${styles.browseCatagoryBtn}`}><p className={`text-wrap mb-0 ${styles.browseCatagoryBtnText}`}>{catagorySuggData[4]?.name}</p></Link>
                                        </div>

                                        <div className="mt-4 row text-center">
                                            <Link href={`catagory_list/${catagorySuggData[5]?.id}`} className={`col mx-2 ${styles.browseCatagoryBtn}`}><p className={`text-wrap mb-0 ${styles.browseCatagoryBtnText}`}>{catagorySuggData[5]?.name}</p></Link>
                                        </div>

                                    </section> : <></>}

                            </>

                        ))}

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