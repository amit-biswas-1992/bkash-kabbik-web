import { apiEndPoints } from "./api-endpoints";

const myHeaders = new Headers();
myHeaders.append("Authorization", "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyX2lkIjoiOTc2MCIsInJvbGUiOjEsImlhdCI6MTY3Njg3NjI3OH0.Ll1915AVcmLzRJ473jyjWo_1NIWxneFMVA8OCcWRp4k");


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

export const getBannerImage = async () => {
    const url = apiEndPoints.bannerImage;
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

