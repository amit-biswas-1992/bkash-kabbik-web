interface UserProfileInfo {

    id: number,
    user_name: string,
    full_name: string,
    user_email: string,
    phone_no: string,
    city: string,
    address: string,
    post_code: string,
    auth_src: string,
    channel: string,
    pass_hash: null,
    premium: number,
    image_url: null,
    role: number,
    user_id_fb: null,
    deleted: number,
    created_at: Date,
    updated_at: Date,
    package_id: number,
    is_subscribed: number,
    payment_method: string,
    purchase_time: number,
    subscription_id: string,
    canceled_subscription: number,
    next_purchase_time: null,
    subscriptionDetails: Array<any>

}

export default UserProfileInfo;