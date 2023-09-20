import { useState } from "react";
import Gallery from "../containers/courasel";
import Navbar from "../containers/navbar";
import Bg from './../assets/slider1.jfif'
import RefServices from "../components/refinariesServices";
import Footer from "../components/footer";
import Stats from "../components/stats";
import Investors from "../components/investors";
import Subscription from "../components/subscription";


export default function Home() {
    const [courasel,setCourasel]= useState(0)
    return (
        <div className="w-full h-screen flex flex-col">
            <div className="bg-gray-400 w-full h-full relative z-0">
               <Gallery  setCourasel={setCourasel}/>
                <div className="absolute right-10 top-0 flex  z-10">
                    <Navbar courasel={courasel} />
                </div>
            </div>
       
            <div className="h-full w-full">
            <RefServices  setCourasel={setCourasel}/>
            <Stats/>
            <Subscription />
            <Investors/>
            <Footer/>
            </div>
           
        </div>
    );
}

