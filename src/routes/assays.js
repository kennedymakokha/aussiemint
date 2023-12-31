import { Link } from "react-router-dom";
import { ArrowListItem, ArrowNOnhovered, TitleOver } from "../components";
import Footer from "../components/footer";
import Layout from "../components/layout";
import bg from './../assets/breadcrumbs/about.png'
import Assay_img from './../assets/images/assays.png'
import Investors from "../components/investors";
import Isometrics from './../assets/images/isometric.jpg'
import slider_2 from './../assets/images/Assay/WhatsApp Image 2023-09-25 at 15.42.35.jpeg'
import slider_1 from './../assets/images/Assay/WhatsApp Image 2023-09-25 at 15.42.36 (1).jpeg'
import Slider_3 from './../assets/images/Assay/WhatsApp Image 2023-09-25 at 15.42.36.jpeg'
import Slider_4 from './../assets/images/Assay/WhatsApp Image 2023-09-25 at 15.42.37 (1).jpeg'
import Slider_5 from './../assets/images/Assay/WhatsApp Image 2023-09-25 at 15.42.37 (2).jpeg'
import Slider_6 from './../assets/images/Assay/WhatsApp Image 2023-09-25 at 15.42.37.jpeg'
import Slider_7 from './../assets/images/Assay/WhatsApp Image 2023-09-25 at 15.42.38 (1).jpeg'
import Calculator from "../components/calculator";
import { Carousel } from "react-responsive-carousel";
import { useState } from "react";
import AssayRequest_Modal from "../components/modal/assayRequest_modal";
let images = [
    slider_1,
    slider_2,
    Slider_3,
    Slider_4,
    Slider_5,
    Slider_6,
    Slider_7
]
export default function Assay() {
    const [courasel, setCourasel] = useState(0)

    const [showModal, setShowModal] = useState(false);
    return (
        <Layout details={{ display_name: "assay", sht_desc: "More about Aussiemint", title: "assay", bg }}>
            <div >
                <div className="flex w-full h-full bg-slate-100  flex-col md:px-[300px] p-10">
                    <TitleOver title="Assay analysis" fontSize="18px" color="black" />
                    <div className=" md:flex-row flex flex-col">
                        <Carousel autoPlay interval="3000" showThumbs={false} infiniteLoop transitionTime="1000"
                            onChange={(e) => setCourasel(e)}
                        >
                            {images.map((image, i) => (
                                <div key={i} className="w-full flex h-[555px]" >
                                    <img
                                        src={image}
                                        alt={image}
                                        className="w-full  object-cover"
                                    />
                                </div>
                            ))}
                        </Carousel>
                    </div>


                </div>
                <div className="flex w-full h-full bg-slate-100  flex-col md:px-[300px] p-10">
                    <TitleOver title="Methodology" fontSize="18px" color="black" />
                    <div className=" md:flex-row flex flex-col">
                        <div className=" md:flex-row flex flex-col">
                            <div className="md:w-1/2 w-full h-full md:pr-10 text-xl flex flex-col p-1 gap-y-10">
                                <p className="text-justify text-xl ">
                                    With our advanced equipment of latest technology we can greatly pre-leach and remove impurities of base metals from atomized gold bullion and silver anode slime.
                                </p>
                                <p className="text-justify text-xl ">
                                    The refining process is the oxidative leaching step. Gold and platinum group metals (PGM) containing in a bullion/slime are leached in a solution of hydrochloric acid. Dissolution of the precious metals is catalyzed by addition of an oxidation agent to the slurry. In contrast to gold and PGMs, silver forms a low soluble silver chloride that precipitates during oxidative leaching. We perform the leaching operation in either a glass lined or titanium reactor.
                                </p>
                                <p className="text-justify text-xl ">
                                    The silver chloride precipitate is then filtered, cemented and transferred to silver refinery or recycled to smelting operation to produce silver Doré anodes for electrorefining where its pumped to the precipitation tank for precipitation of elementary gold.
                                </p>
                            </div>
                            <div className="md:w-1/2 w-full md:h-full h-[200px]   ">
                                <img src={Slider_7} className="w-full h-full object-cover md:rounded-tl-[20px] md:rounded-br-[20px] border-black border-[6px]" />
                            </div>
                        </div>
                    </div>


                </div>
                <div className="flex w-full h-full   flex-col  md:px-[300px] py-10">

                    <div className=" md:flex-row flex flex-col">
                        <div className="md:w-1/3 w-full h-full md:px-10 text-center py-14 bg-black  text-xl flex justify-center items-center ">
                            <p className="text-slate-300 text-xl">With our advanced equipment of latest technology we can greatly pre-leach and remove impurities of base metals from atomized gold bullion and silver anode slime.</p>
                        </div>
                        <div className="md:w-1/3 w-full h-full md:px-10 text-center py-14 bg-gold  text-xl flex flex-col ">
                            <p>With our advanced equipment of latest technology we can greatly pre-leach and remove impurities of base metals from atomized gold bullion and silver anode slime.</p>
                        </div>
                        <div className="md:w-1/3 w-full bg-black h-full md:px-10 text-center py-14  text-xl flex  ">
                            <p className="text-slate-300 text-xl">With our advanced equipment of latest technology we can greatly pre-leach and remove impurities of base metals from atomized gold bullion and silver anode slime.</p>
                        </div>
                    </div>


                </div>


                <AssayRequest_Modal showModal={showModal} setShowModal={setShowModal} />
                <div className="w-full flex items-center justify-center py-5 group ">
                    <div className="flex items-center justify-center w-1/2 drop-shadow-2xl px-3 py-2  group-hover:bg-black bg-gold text-xl group-hover:text-white text-black uppercase rounded-md " onClick={() => setShowModal(true)}>
                        Schedule a Session
                    </div>
                </div>


                {/* <Footer /> */}
            </div>
        </Layout>
    );
}

