import { Clientcard } from '.';
import investor_1 from './../assets/clients/Logo Redesign-01.png'
import investor_2 from './../assets/clients/Logo Redesign-02.png'
import investor_3 from './../assets/clients/Logo Redesign-03.png'
import investor_4 from './../assets/clients/Logo Redesign-04.png'
import investor_5 from './../assets/clients/Logo Redesign-05.png'

export default function Investors() {

    const investor = [

    ]
    return (

        <div className='flex w-full md:h-1/3 h-full  md:px-[300px]  p-10 flex-col'>

            {/* <TitleOver title="Our Clients" fontSize="20px" color="black" /> */}

            <div className='flex w-full   h-full justify-centre items-centre sm:gap-x-10 md:flex-row flex-col '>
                {/* <Clientcard title="lost" description=";" img={investor_1} /> */}
                <Clientcard title="lost" description=";" img={investor_2} />
                <Clientcard title="lost" description=";" img={investor_3} />
                <Clientcard title="lost" description=";" img={investor_4} />
                <Clientcard title="lost" description=";" img={investor_5} />

            </div>
        </div >




    );
}

