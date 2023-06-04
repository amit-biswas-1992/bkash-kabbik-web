import { AnyCnameRecord } from "dns";
import { apiEndPoints } from "./api-endpoints";

export const getPackList = async () => {

    const url = apiEndPoints.packageList;
    const requestOptions = {
        method: 'GET',
    };

    try {
        const response = await fetch(url, requestOptions);
        return response.json();

    } catch (err) {
        console.log(err);
        return false;
    }
};

export const getTopBannerImage = async () => {

    const myHeaders = new Headers();
    const userToken = localStorage?.getItem("user_token");

    myHeaders.append("Authorization", `Bearer ${userToken}`);
    myHeaders.append("Content-Type", "application/json");

    const url = apiEndPoints.topbannerImage;
    const requestOptions = {
        method: 'GET',
        headers: myHeaders,
    };

    try {
        const response = await fetch(url, requestOptions);
        return response.json();

    } catch (err) {
        console.log(err);
        return false;
    }

};

export const getPromoBannerList = async () => {

    const myHeaders = new Headers();
    const userToken = localStorage?.getItem("user_token");

    myHeaders.append("Authorization", `Bearer ${userToken}`);
    myHeaders.append("Content-Type", "application/json");

    const url = apiEndPoints.promoBannerList;
    const requestOptions = {
        method: 'GET',
        headers: myHeaders,
    };

    try {
        const response = await fetch(url, requestOptions);
        return response.json();

    } catch (err) {
        console.log(err);
        return false;
    }

};


export const getPodcastList = async () => {

    const myHeaders = new Headers();
    const userToken = localStorage?.getItem("user_token");

    myHeaders.append("Authorization", `Bearer ${userToken}`);
    myHeaders.append("Content-Type", "application/json");

    const url = apiEndPoints.podcastList;
    const requestOptions = {
        method: 'GET',
        headers: myHeaders,
    };

    try {
        const response = await fetch(url, requestOptions);
        return response.json();

    } catch (err) {
        console.log(err);
        return false;
    }

};

export const getPremiumAudiobookList = async () => {

    const myHeaders = new Headers();
    const userToken = localStorage?.getItem("user_token");

    myHeaders.append("Authorization", `Bearer ${userToken}`);
    myHeaders.append("Content-Type", "application/json");

    const url = apiEndPoints.premuimAudioBookList;
    const requestOptions = {
        method: 'GET',
        headers: myHeaders,
    };

    try {
        const response = await fetch(url, requestOptions);
        return response.json();

    } catch (err) {
        console.log(err);
        return false;
    }

};

export const getUpcomingAudiobookList = async () => {

    const myHeaders = new Headers();
    const userToken = localStorage?.getItem("user_token");

    myHeaders.append("Authorization", `Bearer ${userToken}`);
    myHeaders.append("Content-Type", "application/json");

    const url = apiEndPoints.upComingApi;
    const requestOptions = {
        method: 'GET',
        headers: myHeaders,
    };

    try {
        const response = await fetch(url, requestOptions);
        return response.json();

    } catch (err) {
        console.log(err);
        return false;
    }

};

export const getFavoriteAudiobookList = async () => {

    const myHeaders = new Headers();
    const userToken = localStorage?.getItem("user_token");

    myHeaders.append("Authorization", `Bearer ${userToken}`);
    myHeaders.append("Content-Type", "application/json");

    const url = `${apiEndPoints.favoriteAudioBookList}?user_id=${localStorage.getItem("user_id")}`;
    const requestOptions = {
        method: 'GET',
        headers: myHeaders,
    };

    try {
        const response = await fetch(url, requestOptions);
        return response.json();

    } catch (err) {
        console.log(err);
        return false;
    }

};

export const getAudioBookDetails = async (id: any) => {

    const myHeaders = new Headers();
    const userToken = localStorage?.getItem("user_token");

    myHeaders.append("Authorization", `Bearer ${userToken}`);
    myHeaders.append("Content-Type", "application/json");

    const url = `${apiEndPoints.audioBookDetails}/${id}?user_id=${localStorage.getItem("user_id")}`;
    const requestOptions = {
        method: 'GET',
        headers: myHeaders,
    };

    try {
        const response = await fetch(url, requestOptions);
        // console.log(response)
        return response.json();

    } catch (err) {
        console.log(err);
        return false;
    }

};

export const getAuthorDetails = async (name: string) => {

    const myHeaders = new Headers();
    const userToken = localStorage?.getItem("user_token");

    myHeaders.append("Authorization", `Bearer ${userToken}`);
    myHeaders.append("Content-Type", "application/json");

    const url = `${apiEndPoints.authorDetails}${name} `;
    const requestOptions = {
        method: 'GET',
        headers: myHeaders,
    };

    try {
        const response = await fetch(url, requestOptions);
        // console.log(response)
        return response.json();

    } catch (err) {
        console.log(err);
        return false;
    }

};

export const getAuthorEpisodesDetails = async (name: string) => {

    const myHeaders = new Headers();
    const userToken = localStorage?.getItem("user_token");

    myHeaders.append("Authorization", `Bearer ${userToken}`);
    myHeaders.append("Content-Type", "application/json");

    const url = `${apiEndPoints.authorEpisodes}${name} `;
    const requestOptions = {
        method: 'GET',
        headers: myHeaders,
    };

    try {
        const response = await fetch(url, requestOptions);
        // console.log(response)
        return response.json();

    } catch (err) {
        console.log(err);
        return false;
    }

};

export const getCastCrewDetails = async (name: string) => {

    const myHeaders = new Headers();
    const userToken = localStorage?.getItem("user_token");

    myHeaders.append("Authorization", `Bearer ${userToken}`);
    myHeaders.append("Content-Type", "application/json");

    const url = `${apiEndPoints.castCrewDetails}${name} `;
    const requestOptions = {
        method: 'GET',
        headers: myHeaders,
    };

    try {
        const response = await fetch(url, requestOptions);
        // console.log(response)
        return response.json();

    } catch (err) {
        console.log(err);
        return false;
    }

};

export const getCastCrewEpisodesDetails = async (name: string) => {

    const myHeaders = new Headers();
    const userToken = localStorage?.getItem("user_token");

    myHeaders.append("Authorization", `Bearer ${userToken}`);
    myHeaders.append("Content-Type", "application/json");

    const url = `${apiEndPoints.castCrewEpisodes}${name} `;
    const requestOptions = {
        method: 'GET',
        headers: myHeaders,
    };

    try {
        const response = await fetch(url, requestOptions);
        // console.log(response)
        return response.json();

    } catch (err) {
        console.log(err);
        return false;
    }

};

export const getRatingReviewList = async (id: number) => {

    const myHeaders = new Headers();
    const userToken = localStorage?.getItem("user_token");

    myHeaders.append("Authorization", `Bearer ${userToken}`);
    myHeaders.append("Content-Type", "application/json");

    const url = `${apiEndPoints.reviewList}${id} `;
    const requestOptions = {
        method: 'GET',
        headers: myHeaders,
    };

    try {
        const response = await fetch(url, requestOptions);
        // console.log(response)
        return response.json();

    } catch (err) {
        console.log(err);
        return false;
    }

};

export const getHomeList = async () => {

    const myHeaders = new Headers();
    const userToken = localStorage?.getItem("user_token");

    myHeaders.append("Authorization", `Bearer ${userToken}`);
    myHeaders.append("Content-Type", "application/json");

    const url = apiEndPoints.homeList;
    const requestOptions = {
        method: 'GET',
        headers: myHeaders,
    };

    try {
        const response = await fetch(url, requestOptions);
        // console.log(response)
        return response.json();

    } catch (err) {
        console.log(err);
        return false;
    }

};

export const getCatagorySuggestions = async () => {

    const myHeaders = new Headers();
    const userToken = localStorage?.getItem("user_token");

    myHeaders.append("Authorization", `Bearer ${userToken}`);
    myHeaders.append("Content-Type", "application/json");

    const url = apiEndPoints.catagorySuggestions;
    const requestOptions = {
        method: 'GET',
        headers: myHeaders,
    };

    try {
        const response = await fetch(url, requestOptions);
        return response.json();

    } catch (err) {
        console.log(err);
        return false;
    }

};

export const getCatagoryItems = async (id: any) => {

    const myHeaders = new Headers();
    const userToken = localStorage?.getItem("user_token");

    myHeaders.append("Authorization", `Bearer ${userToken}`);
    myHeaders.append("Content-Type", "application/json");

    const url = `${apiEndPoints.catagoryItems}${id} `;
    const requestOptions = {
        method: 'GET',
        headers: myHeaders,
    };

    try {
        const response = await fetch(url, requestOptions);
        return response.json();

    } catch (err) {
        console.log(err);
        return false;
    }

};

export const getHomeCatagoryItems = async (name: any) => {

    const myHeaders = new Headers();
    const userToken = localStorage?.getItem("user_token");

    myHeaders.append("Authorization", `Bearer ${userToken}`);
    myHeaders.append("Content-Type", "application/json");

    const url = `${apiEndPoints.homeCategoryItems}${name} `;
    const requestOptions = {
        method: 'GET',
        headers: myHeaders,
    };

    try {
        const response = await fetch(url, requestOptions);
        return response.json();

    } catch (err) {
        console.log(err);
        return false;
    }

};

export const getCatagoryList = async () => {

    const myHeaders = new Headers();
    const userToken = localStorage?.getItem("user_token");

    myHeaders.append("Authorization", `Bearer ${userToken}`);
    myHeaders.append("Content-Type", "application/json");

    const url = apiEndPoints.catagoryList;
    const requestOptions = {
        method: 'GET',
        headers: myHeaders,
    };

    try {
        const response = await fetch(url, requestOptions);
        return response.json();

    } catch (err) {
        console.log(err);
        return false;
    }

};

export const getUserProfile = async () => {

    const myHeaders = new Headers();
    const userToken = localStorage?.getItem("user_token");

    myHeaders.append("Authorization", `Bearer ${userToken}`);
    myHeaders.append("Content-Type", "application/json");

    const url = `${apiEndPoints.getuserProfileApi}${localStorage.getItem("user_id")}`;
    const requestOptions = {
        method: 'GET',
        headers: myHeaders,
    };

    try {
        const response = await fetch(url, requestOptions);
        return response.json();

    } catch (err) {
        console.log(err);
        return false;
    }

};

export const unSubscribeUserApi = async () => {

    const myHeaders = new Headers();
    const userToken = localStorage?.getItem("user_token");

    myHeaders.append("Authorization", `Bearer ${userToken}`);
    myHeaders.append("Content-Type", "application/json");

    const url = `${apiEndPoints.unSubscribeApi}?userId=${localStorage.getItem("user_id")}&subscriptionid=${localStorage.getItem("subscription_id")}&reason="UserRequest"`;
    const requestOptions = {
        method: 'DELETE',
        headers: myHeaders,
    };

    try {
        const response = await fetch(url, requestOptions);
        return response.json();

    } catch (err) {
        console.log(err);
        return false;
    }

};

export const getUserSummary = async () => {

    const myHeaders = new Headers();
    const userToken = localStorage?.getItem("user_token");

    myHeaders.append("Authorization", `Bearer ${userToken}`);
    myHeaders.append("Content-Type", "application/json");

    const url = `${apiEndPoints.userSummary}${localStorage.getItem("user_id")}`;
    const requestOptions = {
        method: 'GET',
        headers: myHeaders,
    };

    try {
        const response = await fetch(url, requestOptions);
        return response.json();

    } catch (err) {
        console.log(err);
        return false;
    }

};

export const postFavoritesApi = async (id: any) => {

    const myHeaders = new Headers();
    const userToken = localStorage?.getItem("user_token");

    myHeaders.append("Authorization", `Bearer ${userToken}`);
    myHeaders.append("Content-Type", "application/json");

    const url = apiEndPoints.favPostApi;
    const raw = JSON.stringify({
        user_id: localStorage.getItem("user_id"),
        audiobook_id: id,
    });
    const requestOptions = {
        method: 'POST',
        headers: myHeaders,
        body: raw,
    };

    try {
        const response = await fetch(url, requestOptions);
        return response.json();

    } catch (err) {
        console.log(err);
        return false;
    }

};

export const deleteFavoritesApi = async (id: any) => {

    const myHeaders = new Headers();
    const userToken = localStorage?.getItem("user_token");

    myHeaders.append("Authorization", `Bearer ${userToken}`);
    myHeaders.append("Content-Type", "application/json");

    const url = `${apiEndPoints.favDeleteApi}?audiobook_id=${id}&user_id=${localStorage.getItem("user_id")}`;
    const requestOptions = {
        method: 'DELETE',
        headers: myHeaders,
    };

    try {
        const response = await fetch(url, requestOptions);
        return response.json();

    } catch (err) {
        console.log(err);
        return false;
    }

};


export const postVerifyOtp = async (otp: any) => {

    const myHeaders = new Headers();
    const userToken = localStorage?.getItem("user_token");

    myHeaders.append("Authorization", `Bearer ${userToken}`);
    myHeaders.append("Content-Type", "application/json");

    const url = apiEndPoints.verifyOtp;
    const raw = JSON.stringify({
        msisdn: `88${localStorage.getItem("msisdn")}`,
        password: otp,
    });
    const requestOptions = {
        method: 'POST',
        headers: myHeaders,
        body: raw,
    };

    try {
        const response = await fetch(url, requestOptions);
        return response.json();

    } catch (err) {
        console.log(err);
        return false;
    }

};

export const postSendOtp = async (msisdn: any) => {

    const myHeaders = new Headers();
    const userToken = localStorage?.getItem("user_token");

    myHeaders.append("Authorization", `Bearer ${userToken}`);
    myHeaders.append("Content-Type", "application/json");

    const url = apiEndPoints.sendOtp;
    const currentTimeLong = Date.now();
    const raw = JSON.stringify({
        msisdn: `88${msisdn}`,
        currentTimeLong: currentTimeLong
    });
    const requestOptions = {
        method: 'POST',
        headers: myHeaders,
        body: raw,
    };

    try {
        const response = await fetch(url, requestOptions);
        return response.json();

    } catch (err) {
        console.log(err);
        return false;
    }

};

export const postLoginApi = async () => {

    const myHeaders = new Headers();
    const userToken = localStorage?.getItem("user_token");

    myHeaders.append("Authorization", `Bearer ${userToken}`);
    myHeaders.append("Content-Type", "application/json");

    const url = apiEndPoints.loginApi;
    const raw = JSON.stringify({
        user_name: `88${localStorage.getItem("msisdn")}`,
        full_name: "user",
        auth_src: "phone",
        image_url: null,
        channel: "web"
    });
    const requestOptions = {
        method: 'POST',
        headers: myHeaders,
        body: raw,
    };

    try {
        const response = await fetch(url, requestOptions);
        return response.json();

    } catch (err) {
        console.log(err);
        return false;
    }

};

export const postReview = async (id: any, rating_num: any, review: any) => {

    const myHeaders = new Headers();
    const userToken = localStorage?.getItem("user_token");

    myHeaders.append("Authorization", `Bearer ${userToken}`);
    myHeaders.append("Content-Type", "application/json");

    const url = `${apiEndPoints.addReview}${id}/analytics/ratings `;
    const raw = JSON.stringify({
        rating: rating_num,
        review: review,
        user_id: localStorage.getItem("user_id"),
    });
    const requestOptions = {
        method: 'POST',
        headers: myHeaders,
        body: raw,
    };

    try {
        const response = await fetch(url, requestOptions);
        return response.json();

    } catch (err) {
        console.log(err);
        return false;
    }

};

export const postSearch = async (search_text: any) => {

    const myHeaders = new Headers();
    const userToken = localStorage?.getItem("user_token");

    myHeaders.append("Authorization", `Bearer ${userToken}`);
    myHeaders.append("Content-Type", "application/json");

    const url = apiEndPoints.searchApi;
    const raw = JSON.stringify({
        text: search_text,
    });
    const requestOptions = {
        method: 'POST',
        headers: myHeaders,
        body: raw,
    };

    try {
        const response = await fetch(url, requestOptions);
        return response.json();

    } catch (err) {
        console.log(err);
        return false;
    }

};

export const postBookRequest = async (user_name: any, bookname: any, writer: any, language: any, category: any) => {
    
    const myHeaders = new Headers();
    const userToken = localStorage?.getItem("user_token");

    myHeaders.append("Authorization", `Bearer ${userToken}`);
    myHeaders.append("Content-Type", "application/json");

    const url = apiEndPoints.bookRequestPostApi;
    const raw = JSON.stringify({
        name: user_name,
        bookname: bookname,
        writer: writer,
        language: language,
        category: category,
    });
    const requestOptions = {
        method: 'POST',
        headers: myHeaders,
        body: raw,
    };

    try {
        const response = await fetch(url, requestOptions);
        return response.json();

    } catch (err) {
        console.log(err);
        return false;
    }

};

export const updateProfile = async (payloadData: any) => {

    const myHeaders = new Headers();
    const userToken = localStorage?.getItem("user_token");

    myHeaders.append("Authorization", `Bearer ${userToken}`);
    myHeaders.append("Content-Type", "application/json");

    const url = `${apiEndPoints.updateProfile}${localStorage.getItem("user_id")}`;
    console.log();

    var raw = JSON.stringify({
        full_name: payloadData.full_name,
        phone_email: `88${localStorage.getItem("msisdn")}`,
        city_name: payloadData.city_name,
        address: payloadData.address,
        post_code: payloadData.post_code
    });
    const requestOptions = {
        method: 'PUT',
        headers: myHeaders,
        body: raw,
    };

    try {
        const response = await fetch(url, requestOptions);
        return response.json();

    } catch (err) {
        console.log(err);
        return false;
    }

};

export const bkashPostApi = async (payloadData: any) => {

    const myHeaders = new Headers();
    const userToken = localStorage?.getItem("user_token");

    myHeaders.append("Authorization", `Bearer ${userToken}`);
    myHeaders.append("Content-Type", "application/json");

    const url = `${apiEndPoints.bkashPaymentApi}`;
    let eDate = new Date().setDate(new Date().getDate() + 730);
    let firstPrice = payloadData.rawPrice - (payloadData?.reduce_price ? payloadData.reduce_price : 0);
    var raw = JSON.stringify({

        AMOUNT: payloadData.rawPrice.toString(),
        FIRSTPAYMENTAMOUNT: firstPrice.toString(),
        CURRENCY: "BDT",
        FREQUENCY: payloadData.frequency,
        STARTDATE: new Date().toISOString().slice(0, 10),
        EXPIRYDATE: new Date(eDate).toISOString().slice(0, 10),
        USERID: localStorage.getItem("user_id"),
        PACKAGEID: payloadData.subscriptionItemId,
        subscripRequestFrom: "bkashApp"

    });

    const requestOptions = {
        method: 'POST',
        headers: myHeaders,
        body: raw,
    };

    try {
        const response = await fetch(url, requestOptions);
        return response.json();

    } catch (err) {
        console.log(err);
        return false;
    }

};

export const bkashOneTimePostApi = async (payloadData: any) => {

    const myHeaders = new Headers();
    const userToken = localStorage?.getItem("user_token");

    myHeaders.append("Authorization", `Bearer ${userToken}`);
    myHeaders.append("Content-Type", "application/json");

    const url = `${apiEndPoints.bkashOneTimePaymentApi}`;
    let amountPrice = payloadData.rawPrice - (payloadData?.reduce_price ? payloadData.reduce_price : 0);
    
    var raw = JSON.stringify({
        userId: localStorage.getItem("user_id"),
        amount: amountPrice.toString(),
    });

    const requestOptions = {
        method: 'POST',
        headers: myHeaders,
        body: raw,
    };

    try {
        const response = await fetch(url, requestOptions);
        return response.json();

    } catch (err) {
        console.log(err);
        return false;
    }

};

export const postEpisodePlayCountApi = async (id: any) => {

    const myHeaders = new Headers();
    const userToken = localStorage?.getItem("user_token");

    myHeaders.append("Authorization", `Bearer ${userToken}`);
    myHeaders.append("Content-Type", "application/json");

    const url = `${apiEndPoints.episodePlayCount}${id}/analytics/play-counts-episode?id=${id}`;
    const raw = JSON.stringify({
        userId: localStorage.getItem("user_id"),
        fromChannel: "Bkash",
    });
    const requestOptions = {
        method: 'POST',
        headers: myHeaders,
        body: raw,
    };

    try {
        const response = await fetch(url, requestOptions);
        return response.json();

    } catch (err) {
        console.log(err);
        return false;
    }

};

export const postAudiobookPlayCountApi = async (id: any) => {

    const myHeaders = new Headers();
    const userToken = localStorage?.getItem("user_token");

    myHeaders.append("Authorization", `Bearer ${userToken}`);
    myHeaders.append("Content-Type", "application/json");

    const url = `${apiEndPoints.episodePlayCount}${id}/analytics/play-counts?id=${id}`;
    const raw = JSON.stringify({
        userId: localStorage.getItem("user_id"),
        fromChannel: "Bkash",
    });
    const requestOptions = {
        method: 'POST',
        headers: myHeaders,
        body: raw,
    };

    try {
        const response = await fetch(url, requestOptions);
        return response.json();

    } catch (err) {
        console.log(err);
        return false;
    }

};

export const getPromoCodeApi = async (pack_id: any, promo_id: any) => {

    const myHeaders = new Headers();
    const userToken = localStorage?.getItem("user_token");

    myHeaders.append("Authorization", `Bearer ${userToken}`);
    myHeaders.append("Content-Type", "application/json");

    const url = `${apiEndPoints.promoCodeGet}for_package=${pack_id}&user_id=${localStorage.getItem("user_id")}&promocode=${promo_id}`;
    const requestOptions = {
        method: 'GET',
        headers: myHeaders,
    };

    // try {
    //     const response = await fetch(url, requestOptions)
    //     .then((response) => response.json())
    //     .then((result) => {
    //         console.log(result.data, "result");

    //         return result.data;
    //     })

    // } catch (err) {
    //     console.log(err);
    //     return false;
    // }

    try {
        const response = await fetch(url, requestOptions);
        console.log(response);
        
        return response.json();

    } catch (err) {
        console.log(err);
        return false;
    }

};


export const postGoogleLogin = async (token_id: any) => {

    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");
    const userToken = localStorage?.getItem("user_token");

    myHeaders.append("Authorization", `Bearer ${userToken}`);
    const url = apiEndPoints.postGooglAuth;
    var raw = JSON.stringify({
        "token": token_id,
        "channel": "web"
      });
    const requestOptions = {
        method: 'POST',
        headers: myHeaders,
        body: raw,
    };

    try {
        const response = await fetch(url, requestOptions);
        return response.json();

    } catch (err) {
        console.log(err);
        return false;
    }

};

/*Bkash Login*/

// export const postBkashLogin = async (username: any, password: any, msisdn_num: any) => {

//     var myHeaders = new Headers();
//     myHeaders.append("Content-Type", "application/json");
//     const userToken = localStorage?.getItem("user_token");

//     myHeaders.append("Authorization", `Bearer ${userToken}`);
//     const url = apiEndPoints.postGooglAuth;
//     var raw = JSON.stringify({
//         "username": username,
//         "password": password,
//         "mobile_number": msisdn_num
//       });
//     const requestOptions = {
//         method: 'POST',
//         headers: myHeaders,
//         body: raw,
//     };

//     try {
//         const response = await fetch(url, requestOptions);
//         return response.json();

//     } catch (err) {
//         console.log(err);
//         return false;
//     }

// };


/*Bkash Login*/