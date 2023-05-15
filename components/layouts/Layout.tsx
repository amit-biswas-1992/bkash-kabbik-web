import Footer from "../Footer";
import Header from "../HeaderComponent";
import Head from "next/head";

export default function Layout({ children }: any) {
    return (
        <>
            <Head>
                <meta name="viewport" content="width=device-width, initial-scale=1" />
            </Head>
            <div className="content">
                {/* <Header /> */}
                {children}
                {/* <Footer /> */}
            </div>
        </>
    )
}