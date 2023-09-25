import { Statistcscontainer, TitleOver } from '.';
import Gold from './../assets/refinaries/refinary_1.jfif'
import Lof from './../assets/slider3.jpeg'
import bgImage from './../assets/refinaries/globe.jpg'
export default function News() {

    return (

        <div className='flex w-full md:h-1/3 h-[1000px]  bg-slate-300 md:px-[300px]  p-10  flex-col'>

            <div className='flex w-full   md:flex-row flex-col  '>
                <div className='h-full md:w-1/3 w-full gap-y-2 flex flex-col  p-2  md:text-[20px] text-[14px] pr-10 '>
                    <TitleOver title="Gold Prices" fontSize="12px" color="white" />
                </div>
                <div className='h-full  md:w-1/3 w-full text-2xl font-bold text-slate-500  '>
                    <TitleOver title="Daily Refinery" fontSize="12px" color="white" />
                    <div className='flex items-center w-full h-1/3 gap-x-2  '>
                        <div>
                            Gold
                        </div>
                        <div>
                            10
                        </div>
                    </div>
                    <div className='flex items-center w-full h-1/3 gap-x-2 text-2xl '>
                        <div>
                            Silver
                        </div>
                        <div>
                            5
                        </div>
                    </div>
                    <div className='flex items-center w-full h-1/3 gap-x-2 text-2xl '>
                        <div>
                            Precious Stones
                        </div>
                        <div>
                            5
                        </div>
                    </div>
                </div>
                <div className='h-full  md:w-1/3 w-full text-2xl font-bold text-slate-500  '>
                    <TitleOver title="
Weekly Distribution" fontSize="12px" color="white" />

                    <div className='flex items-center w-full h-1/3 gap-x-2  '>
                        <div>
                            Jewellers
                        </div>
                        <div>
                            20
                        </div>
                    </div>
                    <div className='flex items-center w-full h-1/3 gap-x-2 text-2xl '>
                        <div>
                            Miners
                        </div>
                        <div>
                            50
                        </div>
                    </div>
                    <div className='flex items-center w-full h-1/3 gap-x-2 text-2xl '>
                        <div>
                            Traders
                        </div>
                        <div>
                            10
                        </div>

                    </div>
                </div>

            </div>
        </div >


    );
}

