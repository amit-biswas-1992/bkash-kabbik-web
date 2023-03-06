import Image from "next/image";
import styles from "../../styles/OTP.module.css";
import React, { useEffect, useState } from 'react';
import OtpInput from 'react18-input-otp';
import { useRouter } from "next/router";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { postSendOtp } from "../../services/api.service";

const OTPComponent = () => {

    const navigate = useRouter();

    const [otp, setOtp] = useState('');
    const [num, setNum] = useState("");

    useEffect(() => {
        const login_Data = JSON.parse(localStorage.getItem("msisdn") || '{}');
    
        setNum(login_Data);
    
      }, []);

    const handleChange = (otp: any) => {
        setOtp(otp);
    };

    const handleOTP = async () => {
        if (otp == "") {
          toast.info("Please fill the otp");
          return;
        }
        const datakey = { msisdn: num, otp: otp };
        const url = "/auth/otps/verify";
        // navigate.push("../auth/info");
        try {

            if (otp.length === 4) {
                console.log("matched");


                const data = await postSendOtp(url, datakey);
                console.log("varifyotp", data)
                if (data.statusCode) {
                    // console.log('this block')
                    toast.warning("Invalid OTP");
                    return;
                }
                if (data?.data.user?.isActive === false) {

                    localStorage.setItem("user_token", data.data.token);
                    navigate.push("../auth/info");
                    toast.success("OTP varified");
                } else {
                    console.log(data.data.token);

                    localStorage.setItem("user_token", data.data.token);

                    navigate.push("../home");
                    toast.success("OTP verified");
                }

            } else {
                toast.warning("Invalid OTP");
            }
        } catch (error: any) {
            toast.warning("Invalid OTP");
        }


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

                    <div className="p-2 mx-2">

                        <OtpInput
                            value={otp}
                            onChange={handleChange}
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
                        <button type="submit" onClick={handleOTP} className={`btn btn-success ${styles.otp_btn}`}>Submit</button>
                    </div>

                </div>

            </div>

        </>
    );
}

export default OTPComponent;