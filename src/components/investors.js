import { Clientcard } from '.';
import investor_1 from './../assets/clients/Logo Redesign-01.png'
import investor_2 from './../assets/clients/Logo Redesign-02.png'
import investor_3 from './../assets/clients/Logo Redesign-03.png'
import investor_4 from './../assets/clients/Logo Redesign-05.png'

export default function Investors() {

    const investor = [

    ]
    return (

        <div className='flex w-full md:h-[300px] h-[200%]  md:px-[300px]  p-10 flex-col'>

            {/* <TitleOver title="Our Clients" fontSize="20px" color="black" /> */}

            <div className='flex w-full   h-full md:gap-x-10 sm:gap-x-10 md:flex-row flex-col '>
                <Clientcard title="lost" description=";" img={investor_1} />
                <Clientcard title="lost" description=";" img={investor_2} />
                <Clientcard title="lost" description=";" img={investor_3} />
                <Clientcard title="lost" description=";" img={investor_4} />
                <Clientcard title="lost" description=";" img={investor_1} />

            </div>
        </div >




    );
}

