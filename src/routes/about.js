import { Link } from "react-router-dom";
import { ArrowListItem, ArrowNOnhovered, TitleOver } from "../components";
import Footer from "../components/footer";
import Layout from "../components/layout";
import bg from './../assets/breadcrumbs/about.png'
import About_img from './../assets/images/about_us.png'
import Investors from "../components/investors";
import Isometrics from './../assets/images/isometric.jpg'

export default function About() {

    return (
        <Layout details={{ display_name: " about us", sht_desc: "More about Aussiemint", title: "about-us", bg }}>
            <div details={{ display_name: " about us", sht_desc: "More about Aussiemint", title: "about-us", bg }}>
                <div className="flex w-full h-full bg-slate-100  flex-col md:px-[300px] p-10">
                    <TitleOver title="About us" fontSize="18px" color="black" />
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
                            <img src={About_img} className="w-full h-full object-cover md:rounded-bl-[20px] md:rounded-tr-[20px]" />
                        </div>
                    </div>


                </div>
                <div className="flex w-full h-full bg-slate-100  flex-col bg-gradient-to-r from-slate-300 to-slate-400  md:px-[300px] py-10">

                    <div className=" md:flex-row flex flex-col">
                        <div className="md:w-1/3 w-full h-full md:px-1   text-xl flex flex-col md: border-r-2md: border-dottedmd: border-goldmd:">
                            <TitleOver title="How we work" fontSize="14px" color="black" />
                            <p className="flex justify-center items-center text-center text-slate-800">We have developed a robust and cost-effective solutions for precious metals quality recovery and refining.</p>
                            <div className="w-full flex items-center justify-center py-5 group ">
                                <Link to="refining" className="flex items-center justify-center w-1/2 drop-shadow-2xl px-3 py-2  group-hover:bg-gold bg-gradient-to-r from-gold to-black text-xl text-white group-hover:text-black uppercase rounded-md ">
                                    Read More
                                </Link>
                            </div>
                        </div>
                        <div className="md:w-1/3 w-full h-full md:px-10  text-xl flex flex-col  md:border-r-2 md:border-dotted md:border-gold md:gap-y-4">
                            <TitleOver title="Expertise" fontSize="14px" color="black" />
                            <ArrowNOnhovered title="Machinery" color="black" />
                            <ArrowNOnhovered title="personnel" color="black" />
                            <ArrowNOnhovered title="Network" color="black" />
                        </div>
                        <div className="md:w-1/3 w-full h-full md:px-10  text-xl flex flex-col  md:border-r-2 md:border-dotted md:border-gold md:gap-y-4">
                            <TitleOver title="Assay" fontSize="14px" color="black" />
                            <ArrowNOnhovered title="Gold" arrow={true} color="black" />
                            <ArrowNOnhovered title="Silver" arrow={true} color="black" />
                            <ArrowNOnhovered title="Precious Stones" arrow={true} color="black" />
                        </div>
                    </div>


                </div>
                <Investors />

                <div className="w-full flex md:h-[600px]  justify-center flex-col  items-center md:px-[300px] py-10">
                    <TitleOver title="Operations-" fontSize="18px" color="black" />
                    <img src={Isometrics} className="w-full h-[90%] object-cover" />
                </div>

                {/* <Footer /> */}
            </div>
        </Layout>
    );
}

