const BASE_URL = 'https://api.kabbik.com';

export const apiEndPoints = {

    packageList: `${BASE_URL}/v3/googlepay/googlepay_subscription_list`,
    topbannerImage: `${BASE_URL}/v4/home/getHomeBannerApp`,
    promoBannerList: `${BASE_URL}/v4/home/home-banner-list`,
    podcastList: `${BASE_URL}/v1/audiobooks/podcast-audiobooks`,
    premuimAudioBookList: `${BASE_URL}/v1/audiobooks/premium-audiobooks`,
    favoriteAudioBookList: `${BASE_URL}/v1/favs/user-favs`,
    audioBookDetails: `${BASE_URL}/v3/audiobooks/`,
    authorDetails: `${BASE_URL}/v1/audiobooks/authors/?name=`,
    authorEpisodes: `${BASE_URL}/v1/audiobooks/authors/authorepisodes?name=`,
    castCrewDetails: `${BASE_URL}/v1/audiobooks/castcrew/?name=`,
    castCrewEpisodes: `${BASE_URL}/v1/audiobooks/castcrew/castcrewaudiobook/?name=`,
    reviewList: `${BASE_URL}/v3/audiobooks/getallreview/?id=`,
    homeList: `${BASE_URL}/v4/home/home`,
    catagorySuggestions: `${BASE_URL}/v2/categories/suggestion`,
    catagoryItems: `${BASE_URL}/v2/audiobooks/category/`,
    homeCategoryItems: `${BASE_URL}/v1/audiobooks/home/seemore?name=`,
    catagoryList: `${BASE_URL}/v1/categories`,
    favoritesPost: `${BASE_URL}/v1/favs`,
    sendOtp: `${BASE_URL}/v1/auth/otpnew`,
    verifyOtp: `${BASE_URL}/v1/auth/otp/verify`,
    loginApi: `${BASE_URL}/v2/auth/login`,
    addReview: `${BASE_URL}/v2/audiobooks/`,
    favPostApi: `${BASE_URL}/v1/favs`,
    favDeleteApi: `${BASE_URL}/v1/favs`,
    searchApi: `${BASE_URL}/v2/core/search`,
    upComingApi: `${BASE_URL}/v4/upcoming`,
    getuserProfileApi: `${BASE_URL}/v1/users/`,
    updateProfile: `${BASE_URL}/v1/users/update/withoutImage/`,
    bookRequestPostApi: `${BASE_URL}/v4/story/bookRequest`,
    bkashPaymentApi: `${BASE_URL}/v3/bkash/bkash-create-subscription-request-app`,
    audioBookPlayCount: `${BASE_URL}/v2/audiobooks/`,
    episodePlayCount: `${BASE_URL}/v2/audiobooks/`,
    promoCodeGet: `${BASE_URL}/v4/home/checkPromoCode?`,
    postGooglAuth: `${BASE_URL}/v2/auth/login-google`,
    userSummary: `${BASE_URL}/v1/kabbikanalytics/user-summary?userId=`,
    unSubscribeApi: `${BASE_URL}/v3/bkash/bkash-cancel-subscription-app`,
}