
const BkashHome = () => {
    return (
        <>

            <div className="fixed-bottom">
                <button id="bkash_btn" type="button" onClick={() => window.webViewJSBridge?.goBackHome('Wonder Soft Solution')} style={{ left: "0", bottom: "0", width: "100%", height: "50%", fontSize: "18px", borderRadius: "0px", color: "white!important", textAlign: "left", backgroundColor: "#E2136E", borderColor: "#E2136E" }} >
                    Back to bKash App Home <img src='https://cdn.capp.bka.sh/images/arrow.svg' style={{ float: "right", marginTop: "4px", paddingRight: "1%" }} /></button>
            </div>

        </>
    );
}

export default BkashHome;