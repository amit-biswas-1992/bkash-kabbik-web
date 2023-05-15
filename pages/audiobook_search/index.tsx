import "bootstrap/dist/css/bootstrap.css";
import AudioBookSearchComponent from "../../components/AudioBookSearch/AudioBookSearchComponent";
import Footer from "../../components/Footer";
import Header from "../../components/HeaderComponent";

export default function AudioBookSearch() {
    return (
        <>
            <Header />
            <AudioBookSearchComponent />
            <Footer />
        </>
    );
}