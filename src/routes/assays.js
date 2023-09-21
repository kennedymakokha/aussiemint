import { Link } from "react-router-dom";
import { ArrowListItem, ArrowNOnhovered, TitleOver } from "../components";
import Footer from "../components/footer";
import Layout from "../components/layout";
import bg from './../assets/breadcrumbs/about.png'
import Assay_img from './../assets/images/assays.png'
import Investors from "../components/investors";
import Isometrics from './../assets/images/isometric.jpg'
import slider_2 from './../assets/slider1.jfif'
import slider_1 from './../assets/slider/assay_slider/slider_1.jpeg'
import Slider_3 from './../assets/slider3.jpeg'
import Calculator from "../components/calculator";
import { Carousel } from "react-responsive-carousel";
import { useState } from "react";
let images = [
    slider_1,
    slider_2,
    Slider_3
]
export default function Assay() {
    const [courasel, setCourasel] = useState(0)
    return (
        <Layout details={{ display_name: " about us", sht_desc: "More about Aussiemint", title: "about-us", bg }}>
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
                    <TitleOver title="Plate Based assay" fontSize="18px" color="black" />
                    <div className=" md:flex-row flex flex-col">
                        <div className=" md:flex-row flex flex-col">
                            <div className="md:w-1/2 w-full h-full  text-xl flex flex-col p-1 gap-y-10">
                                <p>
                                    With our advanced equipment of latest technology we can greatly pre-leach and remove impurities of base metals from atomized gold bullion and silver anode slime.
                                </p>
                                <p>
                                    The refining process is the oxidative leaching step. Gold and platinum group metals (PGM) containing in a bullion/slime are leached in a solution of hydrochloric acid. Dissolution of the precious metals is catalyzed by addition of an oxidation agent to the slurry. In contrast to gold and PGMs, silver forms a low soluble silver chloride that precipitates during oxidative leaching. We perform the leaching operation in either a glass lined or titanium reactor.
                                </p>
                                <p>
                                    The silver chloride precipitate is then filtered, cemented and transferred to silver refinery or recycled to smelting operation to produce silver Doré anodes for electrorefining where its pumped to the precipitation tank for precipitation of elementary gold.
                                </p>
                            </div>
                            <div className="md:w-1/2 w-full md:h-full h-[200px]   ">
                                <img src={Assay_img} className="w-full h-full object-cover md:rounded-bl-[20px] md:rounded-tr-[20px]" />
                            </div>
                        </div>
                    </div>


                </div>
                <div className="flex w-full h-full   flex-col  md:px-[300px] py-10">

                    <div className=" md:flex-row flex flex-col">
                        <div className="md:w-1/3 w-full h-full md:px-10 text-center py-14 bg-black  text-xl flex justify-center items-center ">
                            <p className="text-slate-300">With our advanced equipment of latest technology we can greatly pre-leach and remove impurities of base metals from atomized gold bullion and silver anode slime.</p>
                        </div>
                        <div className="md:w-1/3 w-full h-full md:px-10 text-center py-14 bg-gold  text-xl flex flex-col ">
                            <p>With our advanced equipment of latest technology we can greatly pre-leach and remove impurities of base metals from atomized gold bullion and silver anode slime.</p>
                        </div>
                        <div className="md:w-1/3 w-full bg-black h-full md:px-10 text-center py-14  text-xl flex  ">
                            <p className="text-slate-300">With our advanced equipment of latest technology we can greatly pre-leach and remove impurities of base metals from atomized gold bullion and silver anode slime.</p>
                        </div>
                    </div>


                </div>



                <div className="w-full flex items-center justify-center py-5 group ">
                    <Link to="refining" className="flex items-center justify-center w-1/2 drop-shadow-2xl px-3 py-2  group-hover:bg-black bg-gold text-xl text-white group-hover:text-white uppercase rounded-md ">
                        Read More
                    </Link>
                </div>


                {/* <Footer /> */}
            </div>
        </Layout>
    );
}

