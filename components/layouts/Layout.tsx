import Footer from "../Footer";
import Header from "../Header";

export default function Layout({ children }: any) {
    return (
        <div className="content">
            {/* <Header /> */}
            {children}
            <Footer />
        </div>
    )
}