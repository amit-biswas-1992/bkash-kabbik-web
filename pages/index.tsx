import router from "next/router";
import Footer from "../components/Footer";
import Header from "../components/HeaderComponent";
import Home from "../components/Home/HomeComponent";
import { useCallback, useEffect } from "react";
import JwtTokenDecoder from "../utils/globalfunction";

export default function Index() {

    // const isToken = useCallback(async () => {

    //     if (JwtTokenDecoder().user_id) {
    //         localStorage.setItem("user_id", JwtTokenDecoder().user_id);
    //     }

    // }, [router]);

    // useEffect(() => {
    //     isToken();

    // }, [router]);

    return (
        <>
            <Header />
            <Home />;
            <Footer />
        </>

    )


}
