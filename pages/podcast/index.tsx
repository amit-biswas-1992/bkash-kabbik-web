import Footer from "../../components/Footer";
import Header from "../../components/HeaderComponent";
import "bootstrap/dist/css/bootstrap.css";
import PodcastComponent from "../../components/Podcast/PodcastComponent";

export default function Podcast() {
    return (
        <>
            <Header />
            <PodcastComponent />
            <Footer />
        </>
    )
}