import Image from "next/image";
import styles from "../../styles/OTP.module.css";
import React, { useState } from 'react';
import OtpInput from 'react18-input-otp';

const OTPComponent = () => {

    const [otp, setOtp] = useState('');
    const handleChange = (enteredOtp: React.SetStateAction<string>) => {
        setOtp(enteredOtp);
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
                        <p className={` ${styles.text_color}`} >Resend OTP in: 01:46</p>
                    </div>

                </div>

            </div>

        </>
    );
}

export default OTPComponent;