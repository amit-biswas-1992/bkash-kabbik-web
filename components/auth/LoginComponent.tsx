import Image from "next/image";
import { useState } from "react";
import styles from "../../styles/Login.module.css";
import { postSendOtp} from "../../services/api.service";


export default function LoginComponent() {

    const [msisdn, setMsisdn] = useState('');

    const msisdnHandler = (event: any) => {
        setMsisdn(event.target.value);
        console.log(msisdn);
    };

    const submitForm = async (event: any) =>{
        console.log("hhhhhhhhhhhhhhh");
        event.preventDefault()
        
        // const data = await loginApi(apiEndPoints.sendOtp, {
        //     msisdn: msisdn,
        //     currentTimeLong : Date.now()
        // });
        // if (data)
        //     console.log(data);

        const data = await postSendOtp(msisdn);

    };



    return (

        <div className={styles.loginPage}>

            <div className={styles.loginFormBox}>

                <div className="logo p-2 text-center">
                    <Image src="/kabbik_logo.svg" height={110} width={110} alt="" />
                </div>
                <div>
                    <p className={`text-center ${styles.text_color}`}>যেখানে শব্দেরা জীবন্ত </p>
                </div>

                <div className="p-2">

                    <form  onSubmit={submitForm} >
                        <div className="form-group">
                            <label className={`form-label ${styles.text_color}`} htmlFor="msisdnLabel">মোবাইল নাম্বার দিন</label>
                            <div className="input-group">
                                <span className={`input-group-text ${styles.inputNumberForm}`} id="num-addon">+88</span>
                                <input type="text" onChange={msisdnHandler} className={`form-control ${styles.inputNumberForm}`} placeholder="মোবাইল নাম্বার" aria-label="মোবাইল নাম্বার" aria-describedby="num-addon" />
                            </div>
                        </div>

                        <div className="d-flex justify-content-center align-items-center mt-3">
                            <button type="submit"className={`btn btn-primary ${styles.otp_btn}`}>ওটিপি পাঠান</button>
                        </div>

                        <div>
                            <p className={`text-center mt-3 ${styles.text_color}`}>অথবা</p>
                        </div>

                        <button type="submit" className={`btn btn-primary mt-3 ${styles.loginBtn}`}>
                            <Image className={styles.loginBtnImg} src="/google_logo.svg" height={32} width={32} alt="" />
                            <span>Login with Google</span>
                        </button>
                    </form>

                </div>

            </div>

        </div>


    );
}