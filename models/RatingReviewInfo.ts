interface RatingReviewInfo {

    user_name: string,
    full_name: string,
    image_url: null,
    id: number,
    rating: number,
    review: string,
    deleted: number,
    created_at: Date,
    updated_at: Date,
    audiobook_id: number,
    user_id: number

}
// interface castCrewInfo extends Array<castCrewInfo>{}
export default RatingReviewInfo;