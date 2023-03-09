import Image from "next/image";
import styles from "../../styles/OTP.module.css";
import React, { useEffect, useState } from 'react';
// import OtpInput from 'react18-input-otp';
import OtpInput from 'react-otp-input';
import { useRouter } from "next/router";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { postLoginApi, postVerifyOtp } from "../../services/api.service";


const OTPComponent = () => {

    const navigate = useRouter();

    const [otp, setOtp] = useState('');
    console.log(otp);

    // const [num, setNum] = useState("");

    // const handleChange = (otp: any) => {
    //     setOtp(otp);
    // };

    const otpHandler = (event: any) => {
        console.log(event);
        setOtp(event);

    };

    const submitOTP = async (event: any) => {
        console.log("hhhhhhhhhhhhhhh");
        event.preventDefault()

        const verifyOtpData = await postVerifyOtp(otp);
        console.log('-----DEBUG------');
        if(verifyOtpData && verifyOtpData.verified) {
            const loginData = await postLoginApi()
            if(loginData.token) {
                localStorage.setItem("user_token", loginData.token);
                localStorage.setItem("user_id", loginData.user.id);
                navigate.push("/");
            }
            console.log(loginData);
        }
        console.log('-----DEBUG------');

    };

    return (
        <>

            <div className={styles.otpPage}>

                <div className={styles.otpFormBox}>

                    <div className="logo p-2 text-center">
                        <Image src="/kabbik_logo.svg" height={110} width={110} alt="" />
                    </div>
                    <div>
                        <h3 className={`text-center ${styles.text_color}`}>Verify mobile number </h3>
                        <p className={`text-center ${styles.text_color}`}>An OTP was sent to 8801845904030 </p>
                    </div>

                    <form onSubmit={submitOTP}>

                        <div className="p-2 mx-2">

                            <OtpInput
                                value={otp}
                                onChange={otpHandler}
                                numInputs={6}
                                separator={<span>" "</span>}
                                isInputNum={true}
                                inputStyle={styles.otpInputField}
                            />;

                        </div>

                        <div className="text-center">
                            <p className={` ${styles.text_color}`} >Resend OTP</p>
                        </div>

                        <div className="d-flex justify-content-center align-items-center mt-3 mx-4">
                            <button type="submit" className={`btn btn-success ${styles.otp_btn}`}>Submit</button>
                        </div>

                    </form>

                </div>

            </div>

        </>
    );
}

export default OTPComponent;