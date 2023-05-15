import Image from "next/image";
import styles from "../../styles/About.module.css";
import Link from "next/link";
import Router from "next/router";

export default function Support() {

    return (

        <>

            <div className={styles.backBtn}>
                <h4 onClick={() => Router.back()}><i className="bi bi-arrow-left mx-3"></i> Support</h4>
            </div>

            <div className={`mb-5 ${styles.aboutPage}`}>


                <div className={styles.aboutContentBox}>

                    <div className="logo  text-center">
                        <Image src="/kabbik_logo.svg" height={110} width={110} alt="" />
                    </div>
                    <br />

                    <div>
                        <p className={`text-center ${styles.text_color}`}>
                            Mobile:
                            +8801978519690 <br />
                            Email: support@wondersoftsolution.com
                            <br />
                            Address:
                            House: JA-70,2nd Floor, Link Road, Gudaraghat, Dhaka-1212.
                        </p>
                    </div>
                    <br />

                    <div className={`text-center ${styles.text_color}`}>
                        <h5>Refund Request</h5>
                    </div>

                    <div>
                        <div className="d-flex text-center justify-content-center">
                            <div className="card" style={{ width: "32rem" }}>
                                <div className="card-header" style={{ fontWeight: "700" }}>
                                    আপনি নিচের ইমেলে রিফান্ডের জন্য অনুরোধ পাঠাতে পারেন:
                                    support@wondersoftsolution.com.
                                </div>
                                <ul className="list-group list-group-flush">
                                    <li className="list-group-item">
                                        ইমেল বডিতে নিচের তথ্য গুলো উল্লেখ করুন <br />
                                        আপনার কাব্যিক ইউজার আইডি: ---- <br />
                                        আপনার নাম: ---- <br />
                                        আপনার ইমেল :---- <br />
                                        ফোন নম্বর:------ <br />
                                        আপনার ইমেল পাওয়ার ৪৮ ঘণ্টার মধ্যে আমাদের সাপোর্ট টিম আপনার সাথে যোগাযোগ করবে।</li>
                                </ul>
                            </div>

                        </div>
                    </div>

                </div>

            </div>

        </>

    );
}