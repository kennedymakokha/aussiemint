import { Categorycard, Clientcard, TitleOver } from '.';
import Gold from './../assets/refinaries/refinary_1.jfif'
import Lof from './../assets/slider3.jpeg'

export default function Investors() {

    return (

        <div className='flex w-full md:h-[400px] h-[200%]  bg-slate-300 md:px-[300px]  p-10 flex-col'>

            <TitleOver title="Our Clients" fontSize="20px" color="black" />

            <div className='flex w-full   h-full md:gap-x-10 sm:gap-x-10 md:flex-row flex-col '>
                <Clientcard title="lost" description=";" img={Lof} />
                <Clientcard title="lost" description=";" img={Lof} />
                <Clientcard title="lost" description=";" img={Lof} />
                <Clientcard title="lost" description=";" img={Lof} />
                <Clientcard title="lost" description=";" img={Lof} />
            
            </div>
        </div >




    );
}

