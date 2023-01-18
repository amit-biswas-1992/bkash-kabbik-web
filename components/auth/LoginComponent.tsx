export default function LoginComponent() {
    return (
        <div className="d-flex justify-content-md-center align-items-center vh-100">
            <form>
                <div className="form-group">
                    <label className="form-label" htmlFor="msisdnLabel">মোবাইল নাম্বার দিন</label>
                    <div className="input-group">
                        <span className="input-group-text" id="num-addon">+88</span>
                        <input type="text" className="form-control" placeholder="মোবাইল নাম্বার" aria-label="মোবাইল নাম্বার" aria-describedby="num-addon" />
                    </div>
                </div>

                <div className="d-flex justify-content-md-center align-items-center mt-3">
                    <button type="submit" className="btn btn-primary">OTP পাঠান</button>
                </div>
            </form>
        </div>
    );
}