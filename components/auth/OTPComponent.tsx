import Image from "next/image";
import styles from "../../styles/OTP.module.css";
import React, { useEffect, useState } from 'react';
import OtpInput from 'react-otp-input';
import { useRouter } from "next/router";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { postLoginApi, postSendOtp, postVerifyOtp } from "../../services/api.service";


const OTPComponent = () => {

    // const your_num = localStorage.getItem('msisdn') ? localStorage.getItem('msisdn') : ''

    const navigate = useRouter();

    const [otp, setOtp] = useState('');
    const [minutes, setMinutes] = useState(1);
    const [seconds, setSeconds] = useState(30);

    useEffect(() => {
        const interval = setInterval(() => {
            if (seconds > 0) {
                setSeconds(seconds - 1);
            }

            if (seconds === 0) {
                if (minutes === 0) {
                    clearInterval(interval);
                } else {
                    setSeconds(59);
                    setMinutes(minutes - 1);
                }
            }
        }, 1000);

        return () => {
            clearInterval(interval);
        };
    }, [seconds]);

    const otpHandler = (event: any) => {
        setOtp(event);

    };

    const submitOTP = async (event: any) => {
        event.preventDefault()

        const verifyOtpData = await postVerifyOtp(otp);
        if (verifyOtpData && verifyOtpData.verified) {
            const loginData = await postLoginApi()
            if (loginData.token) {
                localStorage.setItem("user_token", loginData.token);
                localStorage.setItem("user_id", loginData.user.id);
                localStorage.setItem("is_subscribed", loginData.user.is_subscribed);
                toast.success("Login Successful!", {
                    position: toast.POSITION.TOP_RIGHT,
                    autoClose: 3000,
                    hideProgressBar: false,
                    pauseOnHover: false,
                    draggable: true,
                    theme: "dark",
                });
                navigate.push("/");
            }
        }

    };

    const resendOTP = async () => {
        const reSentOtp = localStorage.getItem("msisdn");
        const data = await postSendOtp(reSentOtp);
        setMinutes(1);
        setSeconds(30);
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
                        <p className={`text-center ${styles.text_color}`}>An OTP was sent to your number</p>
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
                                shouldAutoFocus={true}
                            />;

                        </div>

                        <div className="d-flex align-items-center text-center">

                            {seconds > 0 || minutes > 0 ? (
                                <p className={`mb-0 mx-4 ${styles.text_color}`} >
                                    Time Remaining: {minutes < 10 ? `0${minutes}` : minutes}:
                                    {seconds < 10 ? `0${seconds}` : seconds}
                                </p>
                            ) : (
                                <p className={`mb-0 mx-4 ${styles.text_color}`} >Didn't receive the code ?</p>
                            )}

                            {seconds > 0 || minutes > 0 ? <button type="button" className="btn btn-outline-secondary" disabled>Resend OTP</button> :

                                <button onClick={resendOTP} type="button" className="btn btn-outline-success">Resend OTP</button>
                            }

                        </div>

                        <div className="d-flex justify-content-center align-items-center mt-3 mx-4">
                            <button type="submit" className={`btn btn-success ${styles.otp_btn}`}>Submit</button>
                        </div>

                    </form>
                    <ToastContainer />

                </div>

            </div>

        </>
    );
}

export default OTPComponent;