import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import styles from "../../styles/Home.module.css";
import Link from "next/link";
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCrown } from "@fortawesome/free-solid-svg-icons";
import { getUserProfile ,getTopBannerImage, getHomeList, getPromoBannerList, getCatagorySuggestions } from "../../services/api.service";
import TopBannerImageInfo from "../../models/TopBannerImageInfo";
import HomeInfo from "../../models/HomeInfo";
import PromoBannerInfo from "../../models/PromoBannerInfo";
import CatagorySuggestionsInfo from "../../models/CatagorySuggestionsInfo";
import React, { useCallback, useEffect, useState } from "react";
import Router, { useRouter } from "next/router";
import JwtTokenDecoder from "../../utils/globalfunction";
import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';

export default function Home() {

    const router = useRouter();

    const isToken = useCallback(async () => {

        if (JwtTokenDecoder().user_id) {
            localStorage.setItem("user_id", JwtTokenDecoder().user_id);
        }
        // localStorage.setItem("is_subscribed", is_subscribed);

    }, [router]);

    const [topbannerImageData, settopbannerImageData] = useState<TopBannerImageInfo[]>();
    const [homeData, sethomeData] = useState<HomeInfo[]>();
    const [promoBannerData, setpromoBannerData] = useState<PromoBannerInfo[]>();
    const [catagorySuggData, setcatagorySuggData] = useState<CatagorySuggestionsInfo[]>();

    useEffect(() => {
        isToken();
        userProfileData();
        topBannerImage();
        homeDetails();
        PromoBannerImage();
        catagorySuggestion();
    }, [router]);

    // useEffect(() => {
    //     topBannerImage();
    //     homeDetails();
    //     PromoBannerImage();
    //     catagorySuggestion();
    // }, []);

    const topBannerImage = async () => {

        const data = await getTopBannerImage();
        if (data)
            settopbannerImageData(data.data);
    }

    const PromoBannerImage = async () => {

        const data = await getPromoBannerList();
        if (data)
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

    const userProfileData = useCallback (async () => {
        const data = await getUserProfile();
        localStorage.setItem("is_subscribed", data.is_subscribed);
        localStorage.setItem("canceled_subscription", data.canceled_subscription);
        localStorage.setItem("subscription_id", data.subscription_id);
        console.log("siam er data", data);
        
      },[]);

    // const [is_subscribed, set_is_subscribed] = useState(false);
    // const isAuthenticated = useCallback(async () => {
    //     const isSubscribed = JSON.parse(localStorage.getItem("is_subscribed") || "{}");
    //     if (isSubscribed === 1)
    //         set_is_subscribed(true);
    // }, [router]);

    const [subscribed, setSubscribed]: any = useState();

    const isAuthenticated = useCallback(async () => {
      setSubscribed(localStorage.getItem("is_subscribed"));
      // const isSubscribed = JSON.parse(
      //   localStorage.getItem("is_subscribed") || "{}"
      // );
      // if (isSubscribed === 1) set_is_subscribed(true);
    }, [router]);

    useEffect(() => {
        isAuthenticated();
    }, [isAuthenticated]);

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
        arrows: true,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    infinite: true,
                }
            },
            {
                breakpoint: 800,
                settings: {
                    slidesToShow: 2,
                    initialSlide: 0,
                    arrows: false,
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    initialSlide: 0,
                    arrows: false,
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 2.4,
                    initialSlide: 0,
                    arrows: false,
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

                        {topbannerImageData ?

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

                                                    <Link href={subscribed == 1 || topbannerinfo?.price === 0 ? `/audio_player/${topbannerinfo?.id}` : "/subscribe"} >
                                                        <button className={`mx-4 ${styles.audioPlayBtn}`} type="button"><i className="bi bi-play-circle-fill" ></i> Play</button>
                                                    </Link>

                                                    <div className="">
                                                        <i className={`bi bi-star-fill ${styles.starLogo}`}></i><br />
                                                        <span className={styles.sliderText}>{topbannerinfo.rating.toFixed(1)}</span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                    </div>
                                ))}

                            </Slider > :

                            <div className="relative text-center">

                                <div className={`card text-bg-dark`} style={{ border: "none" }}>

                                    <div className={`position-relative ${styles.imgGradient}`} >

                                        <Skeleton height={450} baseColor="#091227" highlightColor="#444" />

                                    </div>

                                </div>

                            </div>

                        }

                    </section>


                    {homeData ? <section className="section2 mt-4">

                        {homeData?.map((homeinfo: any, index: any) => (

                            <div key={homeinfo.name}>

                                <div className="d-flex justify-content-between align-items-center mb-2 mx-1">
                                    <div style={{ fontSize: "18px", color: "white" }}>{homeinfo.name} </div>
                                    <Link href={`home_category_list/${homeinfo?.name}`} className={styles.textColor}>See More</Link>
                                </div>

                                <Slider {...homeSlide}>

                                    {homeinfo?.data?.map((audiobookinfo: any) => (

                                        <div key={audiobookinfo?.id} >

                                            <Link href={`audiobook_details/${audiobookinfo?.id}`}>

                                                <div className={`card mx-1 ${styles.catagoryCard}`}>

                                                    <div className="d-flex justify-content-between card-header p-2">

                                                        {subscribed == 1 ? '' :
                                                            audiobookinfo.price === 0 ?
                                                                <div className={styles.freeAudioText}>Free</div>
                                                                :
                                                                <FontAwesomeIcon className={styles.premiumLogo} icon={faCrown} style={{ fontSize: "14px", color: "white" }} />}

                                                        <button className={` ${styles.starBtn}`}><i className="bi bi-star-fill"></i> {audiobookinfo.rating.toFixed(1)}</button>
                                                    </div>

                                                    <Image
                                                        loader={trendingLoader}
                                                        width={150}
                                                        height={150}
                                                        src={audiobookinfo.thumb_path}
                                                        alt=""
                                                        className={styles.catagoryCardImg}
                                                    />

                                                    <div className="card-footer p-2">
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
                                                                className={`${styles.sec3cardImg}`}
                                                            />

                                                        </Link>

                                                    </div>

                                                ))}

                                            </Slider>

                                        </div>

                                    </section> : <></>}

                                {catagorySuggData && index == 4 ?

                                    <section className="section5 mx-2 mb-4">

                                        <div className="d-flex justify-content-between align-items-center">
                                            <p style={{ color: "white" }}>Browse by Catagory</p>
                                            <Link href="/audiobook_search"><p style={{ color: "white" }}><i className="bi bi-chevron-down"></i> Show more</p></Link>
                                        </div>

                                        <div className="d-flex mt-3 justify-content-between text-center">
                                            <Link href={`catagory_list/${catagorySuggData[0]?.id}/${catagorySuggData[0]?.name}`} className={`${styles.browseCatagoryBtn}`}><p className={`text-wrap mb-0 ${styles.browseCatagoryBtnText}`}>{catagorySuggData[0]?.name}</p></Link>
                                            <Link href={`catagory_list/${catagorySuggData[1]?.id}/${catagorySuggData[1]?.name}`} className={`${styles.browseCatagoryBtn}`}><p className={`text-wrap mb-0 ${styles.browseCatagoryBtnText}`}>{catagorySuggData[1]?.name}</p></Link>
                                            <Link href={`catagory_list/${catagorySuggData[2]?.id}/${catagorySuggData[2]?.name}`} className={`${styles.browseCatagoryBtn}`}><p className={`text-wrap mb-0 ${styles.browseCatagoryBtnText}`}>{catagorySuggData[2]?.name}</p></Link>
                                        </div>

                                        <div className="d-flex mt-4 mx-5 justify-content-between text-center">
                                            <Link href={`catagory_list/${catagorySuggData[3]?.id}/${catagorySuggData[3]?.name}`} className={`${styles.browseCatagoryBtn}`}><p className={`text-wrap mb-0 ${styles.browseCatagoryBtnText}`}>{catagorySuggData[3]?.name}</p></Link>
                                            <Link href={`catagory_list/${catagorySuggData[4]?.id}/${catagorySuggData[4]?.name}`} className={`${styles.browseCatagoryBtn}`}><p className={`text-wrap mb-0 ${styles.browseCatagoryBtnText}`}>{catagorySuggData[4]?.name}</p></Link>
                                        </div>

                                        <div className="mt-4 row text-center">
                                            <Link href={`catagory_list/${catagorySuggData[5]?.id}/${catagorySuggData[5]?.name}`} className={`col mx-2 ${styles.browseCatagoryBtn}`}><p className={`text-wrap mb-0 ${styles.browseCatagoryBtnText}`}>{catagorySuggData[5]?.name}</p></Link>
                                        </div>

                                    </section> : <></>}

                            </div>

                        ))}

                    </section> :

                        <div>
                            <div className={`card mx-1 ${styles.catagoryCard}`}>

                                <div className="d-flex justify-content-between card-header">

                                    <Skeleton baseColor="#091227" highlightColor="#444" />

                                    <Skeleton baseColor="#091227" highlightColor="#444" />

                                </div>

                                <Skeleton height={150} width={565} baseColor="#091227" highlightColor="#444" />

                                <div className="card-footer">
                                    <Skeleton baseColor="#091227" highlightColor="#444" />
                                </div>

                            </div>

                            <div className="text-center">
                                <p className={`my-2 ${styles.textColor}`}><Skeleton baseColor="#091227" highlightColor="#444" /></p>
                                <p className={`text-muted ${styles.textColor}`}><Skeleton baseColor="#091227" highlightColor="#444" /></p>
                            </div>
                        </div>

                    }

                    <section className="container homeFooter mt-5">
                        <div>
                            <h3 style={{ color: "white" }}>আপনার পছন্দের অডিওবুক খুঁজে পাচ্ছেন না?</h3>
                            <p style={{ color: "white" }}>নিচে অডিওবুক সার্চ করে পেয়ে যেতে পারেন </p>
                            <Link href="/searched_audiobook"><p style={{ color: "#DC143C" }}>অডিওবুক খুজুন <i className="bi bi-sign-turn-right-fill"></i></p></Link>
                        </div>
                    </section>

                </div>

            </div>

        </>

    )
}