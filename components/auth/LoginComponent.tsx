import Image from "next/image";
import styles from "../../styles/Login.module.css";

export default function LoginComponent() {
    return (

        <>

                <div className="d-flex justify-content-center align-items-center flex-column mt-5">

                    <div className="logo p-2">
                        <Image src="/kabbik_logo.svg" height={110} width={110} alt=""/>
                    </div>
                    <div>
                        <p className={`text-center ${styles.text_color}`}>যেখানে শব্দেরা জীবন্ত </p>
                    </div>
                    
                    <div className="p-2">

                        <form>
                            <div className="form-group"> 
                                <label className={`form-label ${styles.text_color}`} htmlFor="msisdnLabel">মোবাইল নাম্বার দিন</label>
                                <div className="input-group">
                                    <span className="input-group-text" id="num-addon">+88</span>
                                    <input type="text" className="form-control" placeholder="মোবাইল নাম্বার" aria-label="মোবাইল নাম্বার" aria-describedby="num-addon" />
                                </div>
                            </div>

                            <div className="d-flex justify-content-center align-items-center mt-3">
                                <button type="submit" className="btn btn-primary">ওটিপি পাঠান</button>
                            </div>

                            <div>
                                <p className={`text-center mt-3 ${styles.text_color}`}>অথবা</p>
                            </div>

                            <div className="d-flex justify-content-center align-items-center mt-3">
                                <button type="submit" className="btn btn-primary">Login with Google</button>
                            </div>
                        </form>

                    </div>

                </div>

            {/* <div className="logo d-flex justify-content-center">
                <Image src="/kabbik_logo.svg" height={120} width={120} alt=""/>
            </div> */}

            {/* <div className="d-flex justify-content-center align-items-center vh-100">

                <form>
                    <div className="form-group">
                        <label className="form-label" htmlFor="msisdnLabel">মোবাইল নাম্বার দিন</label>
                        <div className="input-group">
                            <span className="input-group-text" id="num-addon">+88</span>
                            <input type="text" className="form-control" placeholder="মোবাইল নাম্বার" aria-label="মোবাইল নাম্বার" aria-describedby="num-addon" />
                        </div>
                    </div>

                    <div className="d-flex justify-content-center align-items-center mt-3">
                        <button type="submit" className="btn btn-primary">OTP পাঠান</button>
                    </div>

                    <div>
                        <p className="text-center">অথবা</p>
                    </div>

                    <div className="d-flex justify-content-center align-items-center mt-3">
                        <button type="submit" className="btn btn-primary">Login with Google</button>
                    </div>
                </form>

            </div> */}

        </>

    );
}