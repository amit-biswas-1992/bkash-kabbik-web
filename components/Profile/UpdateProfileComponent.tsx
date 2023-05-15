import styles from "../../styles/UpdateProfile.module.css";
import Link from "next/link";
import Router, { useRouter } from "next/router";
import { useEffect, useState } from "react";
import UserProfileInfo from "../../models/UserProfileInfo";
import { getUserProfile, updateProfile } from "../../services/api.service";

const UpdateProfile = () => {

    const router = useRouter();

    const [userData, setUserData] = useState<UserProfileInfo>();
    const [fullName, setFullName] = useState('');
    const [phoneNo, setPhoneNo] = useState('');
    const [cityName, setCityName] = useState('');
    const [address, setAddress] = useState('');
    const [postCode, setPostCode] = useState('');


    useEffect(() => {
        premiumAudiobookList();
    }, []);

    const premiumAudiobookList = async () => {

        const data = await getUserProfile();
        if (data)
            setUserData(data);

    };

    const fullNameHandler = (event: any) => {
        setFullName(event.target.value);
    };

    const phoneNoHandler = (event: any) => {
        setPhoneNo(event.target.value);
    };

    const cityNameHandler = (event: any) => {
        setCityName(event.target.value);
    };

    const addressHandler = (event: any) => {
        setAddress(event.target.value);
    };

    const postCodeHandler = (event: any) => {
        setPostCode(event.target.value);
    };

    const submitForm = async (event: any) => {
        event.preventDefault();

        const payloadData = {
            
            full_name: fullName ? fullName : userData?.full_name,
            phone_email: phoneNo ? phoneNo : userData?.phone_no,
            city_name : cityName ? cityName : userData?.city,
            address : address ? address : userData?.address,
            post_code : postCode ? postCode : userData?.post_code,
        }

        const updatedProfileData = await updateProfile (payloadData);
        
        router.push('/profile')
        
    }; 

    return (

        <>

            <div className={styles.backBtn}>
                <h4 onClick={() => Router.back()}><i className="bi bi-arrow-left mx-3"></i> Edit</h4>
            </div>

            {userData ? <div className={styles.updateProfilePage}>

                <div className={styles.updateProfileFormBox}>

                    <div className="mx-2">

                        <form onSubmit={submitForm}>

                            <div className="form-group mt-3">
                                <label className={`form-label ${styles.text_color}`} htmlFor="msisdnLabel">Name</label>
                                <div className="input-group">
                                    <input type="text" defaultValue={userData.full_name} onChange={fullNameHandler} className={`form-control ${styles.inputNumberForm}`} placeholder="Enter Your Name" aria-label="Enter Your Name" aria-describedby="num-addon" />
                                </div>
                            </div>

                            <div className="form-group mt-3">
                                <label className={`form-label ${styles.text_color}`} htmlFor="msisdnLabel">Phone</label>
                                <div className="input-group">
                                    <input type="text" defaultValue={userData.phone_no} onChange={phoneNoHandler} className={`form-control ${styles.inputNumberForm}`} placeholder="Enter Phone Number" aria-label="Enter Phone Number" aria-describedby="num-addon" readOnly />
                                </div>
                            </div>

                            <div className="form-group mt-3">
                                <label className={`form-label ${styles.text_color}`} htmlFor="msisdnLabel">City</label>
                                <div className="input-group">
                                    <input type="text" defaultValue={userData.city} onChange={cityNameHandler} className={`form-control ${styles.inputNumberForm}`} placeholder="City Name" aria-label="City Name" aria-describedby="num-addon" />
                                </div>
                            </div>

                            <div className="form-group mt-3">
                                <label className={`form-label ${styles.text_color}`} htmlFor="msisdnLabel">Address</label>
                                <div className="input-group">
                                    <input type="text" defaultValue={userData.address} onChange={addressHandler} className={`form-control ${styles.inputNumberForm}`} placeholder="Type Your Address Name" aria-label="Type Your Address Name" aria-describedby="num-addon" />
                                </div>
                            </div>

                            <div className="form-group mt-3">
                                <label className={`form-label ${styles.text_color}`} htmlFor="msisdnLabel">Post Code</label>
                                <div className="input-group">
                                    <input type="text" defaultValue={userData.post_code} onChange={postCodeHandler} className={`form-control ${styles.inputNumberForm}`} placeholder="Type Your Post Code" aria-label="Type Your Post Code" aria-describedby="num-addon" />
                                </div>
                            </div>

                            <div className="d-flex justify-content-center align-items-center mt-3">
                                <button type="submit" className={`btn btn-primary ${styles.updateBtn}`}>UPDATE</button>
                            </div>

                        </form>

                    </div>

                </div>

            </div> : <></>}

        </>


    );
}

export default UpdateProfile;

