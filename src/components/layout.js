import Crumb from "../containers/breadCrump";
import Navbar from "../containers/navbar";
import Footer from "./footer";

export default function Layout(props) {
    return (
        <div class="w-full h-full bg-gray-200 flex flex-col">
            <Navbar black={true}/>
            {/* <Crumb details={props.details}/> */}
            {props.children}
            {/* <Footer/> */}
           
        </div>
    );
}

