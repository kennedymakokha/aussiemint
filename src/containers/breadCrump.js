
import { Link } from 'react-router-dom';
import Logo from './../assets/slider3.jpeg'
export default function Crumb(props) {
    return (
        <div class="w-full md:h-[200px] h-[100px] flex justify-center bg-[] items-center">
            <div class="bg-gray-400 w-full h-full relative md:z-0 -z-10">
                <img src={props?.details?.bg} className='h-full w-full object-cover' />
                <div class="absolute bottom-0  w-[400px] md:right-[12%] flex justify-between  z-10 bg-black opacity-60">
                    <div className='justify-center items-center px-3 py-2 font-bold'>
                        <Link to="/" className='text-white hover:text-gold'>Home</Link><span className='text-slate-200'>|</span><span className='text-gold italic'>{props.details?.title}</span>
                    </div>


                </div>
                {/* <div class="absolute bottom-20  px-2 py-3 left-[30%] flex justify-center items-center  z-10 bg-black opacity-80">
                    <div className='justify-center items-center px-3 py-2 font-bold text-3xl text-gold  uppercase flex-col'>
                        {props.details.display_name}
                      \
                    </div>


                </div> */}
            </div>
        </div>
    );
}

