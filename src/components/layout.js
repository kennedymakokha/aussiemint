import Footer from "../components/footer";
import Crumb from "../containers/breadCrump";
import Navbar from "../containers/navbar";
import { ArrowListItem, TitleOver } from "../components";

import Layout from "../components/layout";
import whatsap from './../assets/whatsap.png'
import About_img from './../assets/images/about_us.png'


export default function About(props) {

    return (

        <div className="w-full h-screen bg-gray-200 flex justify-center items-center">
            <div className="bg-gray-400 w-full h-full relative z-10">
                <div className="h-full">
                    <Navbar black={true} />
                    <Crumb details={props.details} />
                    {props.children}
                    <Footer />
                </div>
                <div className="absolute bottom-[100px] right-20 stick flex justify-center items-center -z-1">
                    <a href="https://api.whatsapp.com/send?phone=1234567890" target='_blank'>
                        <img src={whatsap} alt="" className="h-20 w-20" />
                    </a>
                </div>
            </div>
        </div>
        // <div className="h-screen">
        //     <Navbar black={true} />
        //     <Crumb details={props.details} />
        //    {props.children}
        //     <Footer />
        // </div>
    );
}

