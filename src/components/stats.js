import { Statistcscontainer, TitleOver } from '.';
import Gold from './../assets/refinaries/refinary_1.jfif'
import Lof from './../assets/slider3.jpeg'
import bgImage from './../assets/refinaries/globe.jpg'
export default function Stats() {

    return (

        <div class="bg-gray-400 w-full md:h-1/2 h-[160%] relative z-0 ">
            <img src={bgImage} alt=" " className="w-full h-full" />
            <div class="absolute inset-0 flex flex-col  z-10 bg-black opacity-[85%] p-10  md:px-[300px]">
                <TitleOver title="Statistics" fontSize="20px" color="white" />
                <div className='flex w-full md:flex-row flex-col  '>
                    <div className='h-full flex md:w-1/2 w-full  '>
                        <div className='flex w-full h-full flex md:flex-row flex-col justify-center items-center'>
                            <Statistcscontainer stats={{ title: 'Experience', value: "10+ yrs" }} />
                            <Statistcscontainer stats={{ title: 'Clients', value: "315" }} />
                            <Statistcscontainer stats={{ title: 'Cases', value: "2000+" }} />
                            <Statistcscontainer stats={{ title: 'Pro Consultation', value: "100 +" }} />
                        </div>
                    </div>
                    <div className='h-full md:w-1/2 w-[120%] md:gap-y-2 flex  flex-col   text-slate-100 md:text-[20px] text-[14px] md:pl-10 pb-20 '>
                        <p>
                            Being investors in precious metals ourselves, we understand the kind of liquidity and stored value potential that comes with gold, silver and other precious metals. </p>
                        <p> We apply this pragmatic understanding to all our dealings with our customers.</p>
                        <p>Whether you’re looking to buy or sell your precious metals, we are a gold refiner and silver refinery you can rely on, for fair valuations. It helps to know that you aren’t too far from reaching out to a reliable gold refinery in East Africa, when it comes to your need for quality bullion-related services.</p>


                        <p>
                            As a trusted gold and silver refinery High Profile investors can trust, you know you’re in safe hands when you buy or sell with Aussie-mint.
                        </p>
                    </div>

                </div>

                {/* <p class="text-2xl font-bold text-white">This should be on top of the map</p> */}
            </div>
        </div>


    );
}

