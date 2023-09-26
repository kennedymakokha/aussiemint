import { Link } from "react-router-dom";
import { TitleOver } from "../components";
import Layout from "../components/layout";
import bg from './../assets/breadcrumbs/about.png'
import Assay_img from './../assets/images/refinaries/WhatsApp Image 2023-09-25 at 15.43.27.jpeg'
import MIN_img from './../assets/images/refinaries/refinary2.jpeg'

export default function Refining() {

    return (
        <Layout details={{ display_name: "refining", sht_desc: "More about Aussiemint", title: "Refining", bg }}>
            <div className="flex md:h-[200%] h-full bg-Refinery_bg md:h-[200%]  bg-no-repeat bg-repeat-x w-full flex-col">
                <div className="flex md:h-1/2 h-full w-full md:px-[300px] md:flex-row flex-col ">
                    <div className="flex md:leading-9 leading-1 h-full  text-white border-white border w-full flex-col md:text-[20px] text-[10px] p-10">
                        <TitleOver title=" Description of Refinery Services" fontSize="18px" color="white" />
                        <p className="leading-9"> <span className="font-bold text-gold">Location:</span> Our gold refinery business is strategically located in 2nd Avenue, Parklands, Nairobi, Kenya, ensuring convenient access for our clients and secure transportation of precious metals.</p>
                        <p> <span className="font-bold text-gold">Licensed Operation:</span> We take pride in being a fully licensed and accredited gold refinery. </p>
                        <p>Our commitment to compliance with industry regulations and ethical standards is unwavering, giving our clients confidence in the authenticity and legitimacy of our operations.</p>
                        <p><span className="text-slate-100"> Our license number is XXX</span></p>
                        <p> <span className="font-bold text-gold">Expert Qualified Staff:</span> Our refinery boasts a team of expertly qualified and experienced staff members.</p>
                        <p> Our professionals bring a wealth of knowledge and expertise to ensure the precise and efficient processing of precious metals.</p>
                        <p>  <span className="font-bold text-gold">Processing Capacity:</span> Equipped with state-of-the-art technology, our refinery can process up to 250 kilograms of gold and 350 kilograms of silver, meeting the demands of both individual and industrial clients.</p>
                        <p> Whether you have small or large quantities of precious metals, we have the capacity to handle your needs efficiently and effectively.</p>
                        <p> At Aussiemint, we combine our commitment to excellence, licensed operations, expert staff, and impressive processing capabilities to provide our clients with top-tier gold and silver refining services.</p>
                    </div>
                    <div className="flex h-full bg-refining_bg1 w-full">
                        <img src={MIN_img} className="w-full h-full object-cover border-black border-[1px]" />
                    </div>
                </div>
                <div className="flex md:h-1/2 h-full w-full md:px-[300px] md:flex-row flex-col ">
                    <div className="md:flex hidden  w-full">
                        <img src={Assay_img} className="w-full md:h-full h-1/2 object-cover border-black border-[1px]" />
                    </div>
                    <div className="flex md:leading-9 leading-1 h-full  text-white border-white border w-full flex-col md:text-[20px] text-[10px] p-10">
                        <TitleOver title="Refinery Statistics" fontSize="18px" color="white" />
                        <p> <span className="font-bold text-gold">Company's Experience:</span> With over 10 years of industry experience, Aussiemint has established itself as a trusted name in the precious metals refining industry.</p>
                        <p> Our longevity in the business speaks to our deep understanding of the nuances and intricacies of refining gold and silver, ensuring that our clients receive the highest quality service and results.</p>
                        <p> <span className="font-bold text-gold">Market Reputation:</span>Our market reputation is built on a foundation of integrity, precision, and customer satisfaction. </p>
                        <p>We have consistently delivered on our promises, maintaining the highest ethical standards in our operations</p>
                        <p>This commitment to quality has earned us the trust and respect of clients, leading to positive word-of-mouth referrals and enduring partnerships.</p>
                        <p> <span className="font-bold text-gold">Network Coverage (Africa & the World):</span>As a global player in the precious metals refining industry, Aussiemint has established an extensive network that spans not only across Africa but also around the world. </p>
                        <p>Our reach allows us to serve clients from various corners of the globe, facilitating secure and efficient transactions</p>
                        <p>  <span className="font-bold text-gold">In Africa: :</span> We have a strong presence in key African markets, leveraging our local expertise to cater to the unique needs of each region.</p>
                        <p>This includes partnerships with mining operations, jewelers, and financial institutions, making us a preferred choice for businesses and individuals seeking reliable refining services in Africa.</p>
                        <p> <span className="font-bold text-gold">Internationally:</span>: Our global network extends beyond Africa to encompass major international hubs. </p>
                        <p>We collaborate with refineries, distributors, and traders worldwide, ensuring that our clients can access a broad spectrum of markets and opportunities.</p>
                        <p>This international presence allows us to </p>

                    </div>

                </div>
            </div>
        </Layout>
    );
}

