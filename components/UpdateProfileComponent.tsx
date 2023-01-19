import styles from "../styles/UpdateProfile.module.css";

const UpdateProfile = () => {
    return (
        <div className={styles.updateProfilePage}>

            <div className={styles.updateProfileFormBox}>

                <div className="p-2">

                    <form>
                        <div className="form-group mt-3">
                            <label className={`form-label ${styles.text_color}`} htmlFor="msisdnLabel">Name</label>
                            <div className="input-group">
                                <input type="text" className={`form-control ${styles.inputNumberForm}`} placeholder="Enter Your Name" aria-label="Enter Your Name" aria-describedby="num-addon" />
                            </div>
                        </div>

                        <div className="form-group mt-3">
                            <label className={`form-label ${styles.text_color}`} htmlFor="msisdnLabel">Phone</label>
                            <div className="input-group">
                                <input type="text" className={`form-control ${styles.inputNumberForm}`} placeholder="Enter Phone Number" aria-label="Enter Phone Number" aria-describedby="num-addon" />
                            </div>
                        </div>

                        <div className="form-group mt-3">
                            <label className={`form-label ${styles.text_color}`} htmlFor="msisdnLabel">City</label>
                            <div className="input-group">
                                <input type="text" className={`form-control ${styles.inputNumberForm}`} placeholder="City Name" aria-label="City Name" aria-describedby="num-addon" />
                            </div>
                        </div>

                        <div className="form-group mt-3">
                            <label className={`form-label ${styles.text_color}`} htmlFor="msisdnLabel">Address</label>
                            <div className="input-group">
                                <input type="text" className={`form-control ${styles.inputNumberForm}`} placeholder="Type Your Address Name" aria-label="Type Your Address Name" aria-describedby="num-addon" />
                            </div>
                        </div>

                        <div className="form-group mt-3">
                            <label className={`form-label ${styles.text_color}`} htmlFor="msisdnLabel">Post Code</label>
                            <div className="input-group">
                                <input type="text" className={`form-control ${styles.inputNumberForm}`} placeholder="Type Your Post Code" aria-label="Type Your Post Code" aria-describedby="num-addon" />
                            </div>
                        </div>

                        <div className="d-flex justify-content-center align-items-center mt-3">
                            <button type="submit" className={`btn btn-primary ${styles.updateBtn}`}>UPDATE</button>
                        </div>

                    </form>

                </div>

            </div>

        </div>
    );
}

export default UpdateProfile;

