import { TitleOver } from '.';
import Gold from './../assets/refinaries/refinary_1.jfif'
import Lof from './../assets/slider3.jpeg'

export default function RefServices() {

    return (

        <div className='flex w-full md:h-2/3 h-[1000px]  bg-slate-300 md:px-[300px]  p-10  flex-col'>
            <TitleOver title="Our Refineries" fontSize="20px" color="black" />
            <div className='flex w-full   md:flex-row flex-col  '>
                <div className='h-full md:w-1/2 w-full gap-y-2 flex flex-col  p-2  md:text-[20px] text-[14px] pr-10 '>
                    <p>
                        Being investors in precious metals ourselves, we understand the kind of liquidity and stored value potential that comes with gold, silver and other precious metals. </p>
                    <p> We apply this pragmatic understanding to all our dealings with our customers.</p>
                    <p>Whether you’re looking to buy or sell your precious metals, we are a gold refiner and silver refinery you can rely on, for fair valuations. It helps to know that you aren’t too far from reaching out to a reliable gold refinery in East Africa, when it comes to your need for quality bullion-related services.</p>
                    <p>
                        As a trusted gold and silver refinery High Profile investors can trust, you know you’re in safe hands when you buy or sell with Aussie-mint.
                    </p>
                </div>
                <div className='h-full  md:w-1/2 w-full  '>
                    <img src={Gold} alt="" className='h-full w-full object-cover  md:rounded-tl-[100px] md:rounded-br-[100px] md:border-4  border border-gold' />
                </div>

            </div>
        </div >




    );
}

