import Image from "next/image";
import { useCallback, useEffect, useState } from "react";
import styles from "../../styles/Login.module.css";
import { postGoogleLogin, postSendOtp } from "../../services/api.service";
import { useRouter } from "next/router";
import JwtTokenDecoder from "../../utils/globalfunction";
import { useSession, signIn } from "next-auth/react"; /*-----------------GOOGLE AUTH LOGIN------------------*/
import { ToastContainer, toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

export default function LoginComponent() {

    const navigate = useRouter();

    const [msisdn, setMsisdn] = useState('');
    const [isError, setIsError] = useState(false);

    const isToken = useCallback(async () => {

        if (JwtTokenDecoder())

            await navigate.push('/')

    }, [navigate]);

    useEffect(() => {

        isToken();

    }, [navigate]);

    const preventMinus = (e: any) => {
        if (!/[0-9]/.test(e.key)) {
            e.preventDefault();
        }
        // console.log(e, "e");

        if (e.code === "Minus") {
            e.preventDefault();
        }
    };
    const preventPasteNegative = (e: any) => {
        const clipboardData: any = e.clipboardData || window.Clipboard;
        const pastedData = parseFloat(clipboardData.getData("text"));

        if (pastedData < 0) { e.preventDefault(); }
    };
    let pattern = /(^(\||01))[1|3-9]{1}(\d){8}$/;
    let phone = pattern.test(msisdn);

    const msisdnHandler = (event: any) => {

        setMsisdn(event.target.value);
        if (phone === false) {
            setIsError(true);
        } else {
            setIsError(false);
        }
    };

    // const msisdnHandler = (event: any) => {
    //     setMsisdn(event.target.value);
    // };

    const submitForm = async (event: any) => {

        event.preventDefault()

        const data = await postSendOtp(msisdn);
        localStorage.setItem("msisdn", msisdn);
        toast.success("OTP Sent !", {
            position: toast.POSITION.TOP_RIGHT,
            autoClose: 3000,
            hideProgressBar: false,
            pauseOnHover: false,
            draggable: true,
            theme: "dark",
        });
        navigate.push("/otp");

    };

    /*-----------------GOOGLE AUTH LOGIN------------------*/

    const login = async () => {
        await signIn('google', { callbackUrl: '/' })
    };

    const { data: session }: any = useSession();

    const googleApi = async () => {

        const gData = await postGoogleLogin(session?.id_token);
        localStorage.setItem("user_token", gData.token);
        localStorage.setItem("user_id", gData.user?.id);
        localStorage.setItem("msisdn", gData.user?.phone_no);
        
        if (localStorage.getItem("user_token") === 'undefined' || localStorage.getItem("user_token") === '' || localStorage.getItem("user_token") === null)
            return true;
        else
            navigate.push("/");

    };

    useEffect(() => {

        googleApi();

    }, [session]);

    /*-----------------GOOGLE AUTH LOGIN------------------*/

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

                    <form onSubmit={submitForm} >
                        <div className="form-group">
                            <label className={`form-label ${styles.text_color}`} htmlFor="msisdnLabel">মোবাইল নাম্বার দিন</label>
                            <div className="input-group">
                                <span className={`input-group-text ${styles.inputNumberForm}`} id="num-addon">+88</span>
                                <input type="text" onChange={msisdnHandler} onPaste={preventPasteNegative} onKeyPress={preventMinus} className={`form-control ${styles.inputNumberForm}`} placeholder="মোবাইল নাম্বার" aria-label="মোবাইল নাম্বার" aria-describedby="num-addon" />
                            </div>
                            {isError === true ? (
                                <p className="" style={{ color: "red", fontSize: "13px", fontWeight: "700" }}>
                                    {phone === false ? (
                                        <>Your number is not correct, please enter 11 numbers </>
                                    ) : null}
                                </p>
                            ) : (
                                <p></p>
                            )}
                        </div>

                        {phone === false ?
                            <div className="d-flex justify-content-center align-items-center mt-3">
                                <button disabled type="submit" className={`btn btn-primary ${styles.otp_btn}`} >ওটিপি পাঠান</button>
                            </div>
                            :
                            <div className="d-flex justify-content-center align-items-center mt-3">
                                <button type="submit" className={`btn btn-primary ${styles.otp_btn}`}>ওটিপি পাঠান</button>
                            </div>
                        }

                        <div>
                            <p className={`text-center mt-3 ${styles.text_color}`}>অথবা</p>
                        </div>

                        {/*-----------------GOOGLE AUTH LOGIN------------------*/}

                        <button type="button" onClick={() => login()} className={`btn btn-primary ${styles.loginBtn}`}>
                            <Image className={styles.loginBtnImg} src="/google_logo.svg" height={32} width={32} alt="" />
                            <span>Login with Google</span>
                        </button>

                        {/*-----------------GOOGLE AUTH LOGIN------------------*/}

                    </form>

                    <ToastContainer />

                </div>

            </div>

        </div>


    );
}