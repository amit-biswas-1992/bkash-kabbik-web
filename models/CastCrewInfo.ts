interface castCrewInfo {

    id: number,
    name: string,
    en_name: null,
    description: string,
    imageUrl: string,
    deleted: number,
    isActive: number,
    created_at: Date,
    updated_at: Date,
    total_audiobooks: number

}
// interface castCrewInfo extends Array<castCrewInfo>{}
export default castCrewInfo;