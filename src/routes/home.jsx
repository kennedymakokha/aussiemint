import { useState } from "react";
import Gallery from "../containers/courasel";
import Navbar from "../containers/navbar";
import Bg from './../assets/slider1.jfif'
import RefServices from "../components/refinariesServices";
import Footer from "../components/footer";
import Stats from "../components/stats";
import Investors from "../components/investors";
import Subscription from "../components/subscription";
import Investor_trust from "../components/investor_trust";
import News from "../components/news";
import HomeNavbar from "../containers/HomeNavbar";


export default function Home() {
    const [courasel, setCourasel] = useState(0)
    const [title, setTitle] = useState({
        headline: ""
    })
    const TitleFunc = () => {
        if (
            courasel === 0
        ) {
            setTitle("Refining Min")
        } else if (
            courasel === 1
        ) {
            setTitle("Refmnvnmbmmbnining Min")
        }
        else if (
            courasel === 2
        ) {
            setTitle("Refining yhbjgjgjmnmn")
        }
    }
    return (
        <div className="w-screen h-screen flex flex-col">
            <div className="bg-gray-400 w-full h-full relative z-0">
                <Gallery title={title} TitleFunc={() => TitleFunc()} setCourasel={setCourasel} />
                <div className="absolute right-20 left-0 top-0 flex  z-10">
                    <HomeNavbar courasel={courasel} />
                </div>
            </div>

            <div className="h-full w-full">
                <RefServices setCourasel={setCourasel} />
                <Stats />
                <News />
                <Investor_trust />
                <Subscription />
                
                <Investors />
                <Footer />
            </div>

        </div>
    );
}

