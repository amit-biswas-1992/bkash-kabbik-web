import Image from "next/image";
import styles from "../../styles/Login.module.css";
import { useState } from "React";

export default function LoginComponent({ data }: any) {
    const [loginData, setLoginData]: any = useState(); 
    const handleSubmit = async (event: any) => {
        // Stop the form from submitting and refreshing the page.
        event.preventDefault()

        // Get data from the form.
        const data = {
            first: event.target.first.value,
            last: event.target.last.value,
        }

        // Send the data to the server in JSON format.
        const JSONdata = JSON.stringify(data)

        // API endpoint where we send form data.
        const endpoint = '/api/form'

        // Form the request for sending data to the server.
        const options = {
            // The method is POST because we are sending data.
            method: 'POST',
            // Tell the server we're sending JSON.
            headers: {
                'Content-Type': 'application/json',
            },
            // Body of the request is the JSON data we created above.
            body: JSONdata,
        }

        // Send the form data to our forms API on Vercel and get a response.
        const response = await fetch(endpoint, options)

        // Get the response data from server as JSON.
        // If server returns the name submitted, that means the form works.
        const result = await response.json()
        alert(`Is this your full name: ${result.data}`)
    }

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

                    <form>
                        <div className="form-group">
                            <label className={`form-label ${styles.text_color}`} htmlFor="msisdnLabel">মোবাইল নাম্বার দিন</label>
                            <div className="input-group">
                                <span className={`input-group-text ${styles.inputNumberForm}`} id="num-addon">+88</span>
                                <input type="text" className={`form-control ${styles.inputNumberForm}`} placeholder="মোবাইল নাম্বার" aria-label="মোবাইল নাম্বার" aria-describedby="num-addon" />
                            </div> 
                        </div>

                        <div className="d-flex justify-content-center align-items-center mt-3">
                            <button type="submit" className={`btn btn-primary ${styles.otp_btn}`}>ওটিপি পাঠান</button>
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

export const getStaticProps = async () => {

}