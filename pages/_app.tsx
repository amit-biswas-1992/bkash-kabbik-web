import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-icons/font/bootstrap-icons.css"
import "@fortawesome/fontawesome-svg-core/styles.css";
import { config } from "@fortawesome/fontawesome-svg-core";
import "../styles/globals.css";
import { useEffect } from "react";
import Layout from "../components/layouts/Layout";
import { SessionProvider } from "next-auth/react"; /*-----------------GOOGLE AUTH LOGIN------------------*/
import Head from "next/head";

config.autoAddCss = false;
export default function App({ Component, pageProps, session }: any) { /*-----------------GOOGLE AUTH LOGIN------------------*/

    
    useEffect(() => {
        require("bootstrap/dist/js/bootstrap.bundle.min.js");
    }, []);

    return (

        <>
            <Head>
                <script type="text/javascript" src="https://cdn.capp.bka.sh/scripts/webview_bridge.js" async />
            </Head >

            {/*-----------------GOOGLE AUTH LOGIN------------------*/}

            <SessionProvider session={session}>
                <Layout>
                    <Component {...pageProps} />
                </Layout>
            </SessionProvider >

            {/*-----------------GOOGLE AUTH LOGIN------------------*/}

        </>

    );
}
