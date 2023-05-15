import styles from "../../styles/Profile.module.css";
import Link from "next/link";
import { useCallback, useEffect, useState } from "react";
import UserProfileInfo from "../../models/UserProfileInfo";
import {
  getUserProfile,
  getUserSummary,
  unSubscribeUserApi,
} from "../../services/api.service";
import { useRouter } from "next/dist/client/router";
import { signOut } from "next-auth/react"; /*-----------------GOOGLE AUTH LOGIN------------------*/
import UserSummaryInfo from "../../models/UserSummaryInfo";

export default function ProfileComponent() {
  const router = useRouter();

  const { toBengaliNumber, toBengaliWord } = require("bengali-number");
  const [userData, setUserData]: any = useState();
  const [userSummary, setUserSummary] = useState<UserSummaryInfo>();
  const [cancledSub, setCancledSub]: any = useState();

  //   const [is_subscribed, set_is_subscribed] = useState(false);
  const [subscribed, setSubscribed]: any = useState();

  const isAuthenticated = useCallback(async () => {
    setCancledSub(localStorage.getItem("canceled_subscription"));
    setSubscribed(localStorage.getItem("is_subscribed"));
    // const isSubscribed = JSON.parse(
    //   localStorage.getItem("is_subscribed") || "{}"
    // );
    // if (isSubscribed === 1) set_is_subscribed(true);
  }, [router]);

  useEffect(() => {
    userProfileData();
    userProfileSummary();
    isAuthenticated();
  }, [isAuthenticated]);

  const userProfileData = async () => {
    const data = await getUserProfile();
    if (data) setUserData(data);
  };

  const userProfileSummary = async () => {
    const data = await getUserSummary();
    if (data) setUserSummary(data.data);
  };

  const timeStampToDate = (timestamp: any) => {
    const tempDate = new Date(timestamp);
    return `${tempDate.toLocaleString("en-us", {
      weekday: "short",
    })}, ${tempDate.toLocaleString("default", {
      month: "short",
    })}, ${tempDate.getDate()}, ${tempDate.getFullYear()}`;
  };

  const unSubscribeHandle = async () => {
    await unSubscribeUserApi();
    router.push("/");
  };

  const SubscribeHandle = async () => {
    router.push("/subscribe");
  };

  /*-----------------GOOGLE AUTH LOGIN------------------*/

  const logOutHandle = () => {
    localStorage.clear();
    signOut({ callbackUrl: "/login" });
    router.push("/login");
  };

  /*-----------------GOOGLE AUTH LOGIN------------------*/

  return (
    <>
      <div className={`mb-5 ${styles.profilePage}`}>
        <div className={styles.profileContentBox}>
          {userData ? (
            <div className="d-flex justify-content-between mx-2">
              <p className={`text-center ${styles.userTitle}`}>
                {userData.full_name}
              </p>
              <Link href="/profile/updateprofile">
                <i
                  className={`bi bi-pencil-square mx-2 ${styles.editIcon}`}
                ></i>
              </Link>
            </div>
          ) : (
            <></>
          )}

          {userSummary ? (
            <div className="accordion accordion-flush" id="accordionExample">
              <div className="accordion-item">
                <h2 className="accordion-header" id="headingThree">
                  <div
                    className={`accordion-button collapsed text-center ${styles.dropDownBtn}`}
                    data-bs-toggle="collapse"
                    data-bs-target="#collapseThree"
                    aria-expanded="false"
                    aria-controls="collapseThree"
                  >
                    আপনি সর্বমোট{" "}
                    {toBengaliNumber(userSummary?.total_played_audiobook)} বার
                    অডিওবুক শুনেছেন
                  </div>
                </h2>
                <div
                  id="collapseThree"
                  className="accordion-collapse collapse"
                  aria-labelledby="headingThree"
                  data-bs-parent="#accordionExample"
                >
                  <div className={`accordion-body ${styles.dropDownBtn}`}>
                    <div className={styles.card1}>
                      <div className="card-body pt-4 mx-4">
                        <h5 className={`card-title pb-3 ${styles.bgText}`}>
                          আপনার শোনা সর্বাধিক ৫টি অডিওবুক{" "}
                        </h5>

                        {userSummary?.most_played_audiobook.map((summary) => (
                          <div
                            key={summary.id}
                            className="card-text d-flex justify-content-between align-items-center"
                          >
                            <p className={`mx-3 ${styles.smText}`}>
                              {summary.audiobook_name}
                            </p>
                            <p className={`mx-3 ${styles.smText}`}>
                              {summary.total_played}
                            </p>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ) : (
            <></>
          )}

          <hr className={styles.line} />

          {subscribed == 1 ? (
            <div className="text-center mt-3" style={{ color: "white" }}>
              <div>
                <p className="mb-1">
                  আপনার বর্তমান সাবস্ক্রিপশন{" "}
                  {userData?.subscriptionDetails?.name}
                </p>
              </div>

              <div>
                <p className="mb-1">
                  পরবর্তী নবায়ণের তারিখ{" "}
                  {timeStampToDate(userData?.next_purchase_time)}
                </p>
              </div>

              {subscribed == 1 && cancledSub == 0 ? (
                <div className="text-center mb-1">
                  <button
                    onClick={unSubscribeHandle}
                    type="submit"
                    className={`mt-2 ${styles.unSubBtn}`}
                  >
                    <span>Unsubscribe</span>
                  </button>
                </div>
              ) : subscribed == 1 && cancledSub == 1 ? (
                <div className="text-center mb-1">
                  <button
                    onClick={SubscribeHandle}
                    type="submit"
                    className={`mt-2 ${styles.unSubBtn}`}
                  >
                    <span>Subscribe</span>
                  </button>
                </div>
              ) : (
                ""
              )}
            </div>
          ) : (
            ""
          )}

          {/* <div className="text-center mb-1">
            <button type="submit" className={`mt-3 ${styles.unSubBtn}`}>
              <span>Unsubscribe</span>
            </button>
          </div> */}

          <Link
            href="/favorites"
            className="d-flex justify-content-between mx-3 py-2"
          >
            <div className="d-flex align-items-center">
              <i className={`bi bi-heart-fill ${styles.listIcon}`}></i>
              <p className={`text-center mx-1 ${styles.userTitle}`}>
                Favourites
              </p>
            </div>

            <i className={`bi bi-chevron-right ${styles.linkIcon}`}></i>
          </Link>

          <Link
            href="/about"
            className="d-flex justify-content-between mx-3 py-2"
          >
            <div className="d-flex align-items-center">
              <i
                className={`bi bi-exclamation-circle-fill ${styles.listIcon}`}
              ></i>
              <p className={`text-center mx-1 ${styles.userTitle}`}>About Us</p>
            </div>

            <i className={`bi bi-chevron-right ${styles.linkIcon}`}></i>
          </Link>

          <Link
            href="/support"
            className="d-flex justify-content-between mx-3 py-2"
          >
            <div className="d-flex align-items-center">
              <i
                className={`bi bi-exclamation-circle-fill ${styles.listIcon}`}
              ></i>
              <p className={`text-center mx-1 ${styles.userTitle}`}>Support</p>
            </div>

            <i className={`bi bi-chevron-right ${styles.linkIcon}`}></i>
          </Link>

          <Link
            href="/book_request"
            className="d-flex align-items-center mx-3 py-2"
          >
            <i className={`bi bi-book-half ${styles.listIcon}`}></i>
            <p className={`text-center mx-1 ${styles.userTitle}`}>
              {" "}
              Book Request
            </p>
          </Link>

          <Link
            href="https://play.google.com/store/apps/details?id=com.kabbik.app"
            className="d-flex align-items-center mx-3 py-2"
          >
            <i className={`bi bi-star-fill ${styles.listIcon}`}></i>
            <p className={`text-center mx-1 ${styles.userTitle}`}> Rate Us</p>
          </Link>

          {/*-----------------GOOGLE AUTH LOGIN------------------*/}

          {/* <button className={`d-flex align-items-center mx-3 py-2 ${styles.logoutLink}`} data-bs-toggle="modal" data-bs-target="#exampleModal">
                        <i className={`bi bi-box-arrow-right ${styles.listIcon}`}></i>
                        <p className={`text-center mx-1 ${styles.userTitle}`}>Log out</p>
                    </button > */}

          <div
            className="modal fade"
            id="exampleModal"
            tabIndex={-1}
            aria-labelledby="exampleModalLabel"
            aria-hidden="true"
          >
            <div className="modal-dialog modal-dialog-centered">
              <div className="modal-content mx-3">
                <div className={`modal-body ${styles.modalBody}`}>
                  <div className="p-2">
                    <div>
                      <p>Warning</p>
                      <p>Are you sure you want to Log out?</p>

                      <div className="d-flex justify-content-end mx-2 pt-4">
                        <button
                          type="submit"
                          data-bs-dismiss="modal"
                          className={`mx-4  ${styles.logoutWarningBtnNo}`}
                        >
                          No
                        </button>
                        <button
                          type="submit"
                          data-bs-dismiss="modal"
                          onClick={logOutHandle}
                          className={`mx-2 ${styles.logoutWarningBtnYes}`}
                        >
                          Yes
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/*-----------------GOOGLE AUTH LOGIN------------------*/}

          <div className="text-center">
            <Link
              href="https://www.facebook.com/kabbikAudiobookOfficial?mibextid=ZbWKwL"
              type="submit"
              className={`${styles.fbBtn}`}
            >
              <div className="mx-4 mt-1 d-flex align-items-center">
                <i className={`bi bi-facebook mx-2 ${styles.fblogo}`}></i>
                <span>Like Facebook Page</span>
              </div>
            </Link>
          </div>

          <div className="text-center">
            <Link
              href="https://www.facebook.com/groups/541021620691956/?ref=share&mibextid=NSMWBT"
              type="submit"
              className={`mt-3 ${styles.fbComBtn}`}
            >
              <div className="mx-3 mt-1 d-flex align-items-center">
                <i className={`bi bi-people-fill mx-2 ${styles.fbComlogo}`}></i>
                <span>Join Facebook Community</span>
              </div>
            </Link>
          </div>

          <div className="text-center mb-5">
            <Link
              href="https://youtube.com/@kabbikAudiobookOfficial"
              type="submit"
              className={`mt-3 ${styles.ytBtn}`}
            >
              <div className="mx-2 mt-1 d-flex align-items-center">
                <i className={`bi bi-youtube mx-2 ${styles.ytlogo}`}></i>
                <span>Subscribe Youtube Channel</span>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
