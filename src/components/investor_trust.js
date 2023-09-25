import { Statistcscontainer, TitleOver } from '.';
import Gold from './../assets/refinaries/refinary_1.jfif'
import Lof from './../assets/slider3.jpeg'
import bgImage from './../assets/images/Trust2.png'
export default function Investor_trust() {

    return (

        <div className="bg-gray-400 w-full   md:h-3/4 h-[160%] relative z-0 ">
            <img src={bgImage} alt=" " className="w-full h-full" />
            <div className="absolute inset-0 flex flex-col  z-10 bg-slate-900 opacity-[85%] p-10  md:px-[300px]">
                <TitleOver title="Investors Trust" fontSize="20px" color="white" />
                <div className='flex w-full md:h-full h-[480%]  flex-col gap-y-10 '>
                    <div className='h-full flex flex-col w-full  '>

                    </div>
                    <div className='h-full w-full md:gap-y-2 flex  flex-col   text-slate-100 md:text-[20px] text-[14px] md:pl-10 pb-20 '>
                        <p> <span className="font-bold text-gold">Network Coverage (Africa & the World):</span>As a global player in the precious metals refining industry, Aussiemint has established an extensive network that spans not only across Africa but also around the world. </p>
                        <p>Our reach allows us to serve clients from various corners of the globe, facilitating secure and efficient transactions</p>
                        <p> <span className="font-bold text-gold">Internationally:</span> Our global network extends beyond Africa to encompass major international hubs. </p>
                        <p>We collaborate with refineries, distributors, and traders worldwide, ensuring that our clients can access a broad spectrum of markets and opportunities.</p>
                        <p>This international presence allows us to </p>

                    </div>

                </div>

                {/* <p className="text-2xl font-bold text-white">This should be on top of the map</p> */}
            </div>
        </div>


    );
}

