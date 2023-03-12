import { AnyCnameRecord } from "dns";
import { apiEndPoints } from "./api-endpoints";

const myHeaders = new Headers();
// const userToken = localStorage.getItem("user_token");
myHeaders.append("Authorization", "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyX2lkIjoiOTc2MCIsInJvbGUiOjEsImlhdCI6MTY3Njg3NjI3OH0.Ll1915AVcmLzRJ473jyjWo_1NIWxneFMVA8OCcWRp4k");
myHeaders.append("Content-Type", "application/json");

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
    const url = apiEndPoints.favoriteAudioBookList;
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
    const url = `${apiEndPoints.audioBookDetails}/${id} `;
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

export const getCatagoryList = async () => {
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
    const url = apiEndPoints.userProfile;
    const raw = "{\r\n    \"user_id\": \"9760\",\r\n    \"audiobook_id\": 1311\r\n}";
    const requestOptions = {
        method: 'GET',
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

export const postFavoritesApi = async (id: any) => {
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
    const url = apiEndPoints.favDeleteApi;
    const raw = "";
    const requestOptions = {
        method: 'DELETE',
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


export const postVerifyOtp = async (otp: any) => {
    const url = apiEndPoints.verifyOtp;
    const raw = JSON.stringify({
        msisdn : `88${localStorage.getItem("msisdn")}`,
        password : otp,
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
    const url = apiEndPoints.sendOtp;
    const currentTimeLong = Date.now();
    const raw = JSON.stringify({
        msisdn : `88${msisdn}`,
        currentTimeLong : currentTimeLong
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
    const url =`${apiEndPoints.addReview}${id}/analytics/ratings `;
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

// export const loginApi = async (endpoint: string, options: any = {}) => {
//     const myHeaders = new Headers();
//     myHeaders.append("Content-Type", "application/json");
  
//     const raw = JSON.stringify(options);
//     console.log(options, "options");
//     const requestOptions = {
//       method: "POST",
//       headers: myHeaders,
//       body: raw,
//     };
//     console.log(raw, "raw");
//     const url = `${endpoint}`;
  
//     try {
//       console.log(url, "url");
  
//       const fetchResponse = await fetch(url, requestOptions);
  
//       const data = await fetchResponse.json();
//       return data;
//     } catch (e) {
//       return e;
//     }
//   };
