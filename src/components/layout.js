import Footer from "../components/footer";
import Crumb from "../containers/breadCrump";
import Navbar from "../containers/navbar";
import { ArrowListItem, TitleOver } from "../components";

import Layout from "../components/layout";
import bg from './../assets/breadcrumbs/about.png'
import About_img from './../assets/images/about_us.png'


export default function About(props) {

    return (
        <div className="h-screen">
            <Navbar black={true} />
            <Crumb details={props.details} />
           {props.children}
            <Footer />
        </div>
    );
}

