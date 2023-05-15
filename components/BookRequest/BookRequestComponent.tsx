import styles from "../../styles/BookRequest.module.css";
import Link from "next/link";
import Router from "next/router";
import { useEffect, useState } from "react";
import { postBookRequest } from "../../services/api.service";

const BookRequest = () => {

    const [userName, setUserName] = useState('');
    const [bookName, setbookName] = useState('');
    const [writerName, setWriterName] = useState('');
    const [language, setLanguage] = useState('');
    const [category, setCategory] = useState('');

    const userNameHandler = (event: any) => {
        setUserName(event.target.value);
    };

    const bookNameHandler = (event: any) => {
        setbookName(event.target.value);
    };

    const writerNameHandler = (event: any) => {
        setWriterName(event.target.value);
    };

    const languageHandler = (event: any) => {
        setLanguage(event.target.value);
    };

    const categoryHandler = (event: any) => {
        setCategory(event.target.value);
    };

    const submitForm = async (event: any) => {
        event.preventDefault();

        const bookRequestData = await postBookRequest(userName, bookName, writerName, language, category);


    };

    return (

        <>

            <div className={styles.backBtn}>
                <h4 onClick={() => Router.back()}><i className="bi bi-arrow-left mx-3"></i> Book Request</h4>
            </div>

            <div className={styles.bookRequestPage}>

                <div className={styles.bookRequestFormBox}>

                    <div className="mx-2">

                        <form onSubmit={submitForm}>

                            <div className="form-group mt-3">
                                <label className={`form-label ${styles.text_color}`} htmlFor="msisdnLabel">আপনার নাম লিখুন</label>
                                <div className="input-group">
                                    <input type="text" onChange={userNameHandler} className={`form-control ${styles.inputNumberForm}`} placeholder="আপনার নাম" aria-label="Enter Your Name" aria-describedby="num-addon" />
                                </div>
                            </div>

                            <div className="form-group mt-3">
                                <label className={`form-label ${styles.text_color}`} htmlFor="msisdnLabel">বই এর নাম লিখুন</label>
                                <div className="input-group">
                                    <input type="text" onChange={bookNameHandler} className={`form-control ${styles.inputNumberForm}`} placeholder="বই এর নাম" aria-label="Enter Phone Number" aria-describedby="num-addon" />
                                </div>
                            </div>

                            <div className="form-group mt-3">
                                <label className={`form-label ${styles.text_color}`} htmlFor="msisdnLabel">বই এর লেখক এর নাম লিখুন</label>
                                <div className="input-group">
                                    <input type="text" onChange={writerNameHandler} className={`form-control ${styles.inputNumberForm}`} placeholder="লেখক এর নাম" aria-label="City Name" aria-describedby="num-addon" />
                                </div>
                            </div>

                            <div className="form-group mt-3">
                                <label className={`form-label ${styles.text_color}`} htmlFor="msisdnLabel">বই এর ভাষার নাম লিখুন</label>
                                <div className="input-group">
                                    <input type="text" onChange={languageHandler} className={`form-control ${styles.inputNumberForm}`} placeholder="ভাষা" aria-label="Type Your Address Name" aria-describedby="num-addon" />
                                </div>
                            </div>

                            <div className="form-group mt-3">
                                <label className={`form-label ${styles.text_color}`} htmlFor="msisdnLabel">বই এর ধরণ / প্রকাশনী (যদি থাকে)</label>
                                <div className="input-group">
                                    <input type="text" onChange={categoryHandler} className={`form-control ${styles.inputNumberForm}`} placeholder="বই এর ধরণ / প্রকাশনী" aria-label="Type Your Post Code" aria-describedby="num-addon" />
                                </div>
                            </div>

                            <div className="d-flex justify-content-center align-items-center mt-3">
                                <button type="submit" className={`btn btn-primary ${styles.submitBtn}`}>অনুরোধ পাঠান</button>
                            </div>

                        </form>

                    </div>

                </div>

            </div>

        </>


    );
}

export default BookRequest;

