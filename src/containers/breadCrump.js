
import { Link } from 'react-router-dom';
import Logo from './../assets/slider3.jpeg'
export default function Crumb(props) {
    return (
        <div class="w-full h-[200px] flex justify-center bg-[] items-center">
            <div class="bg-gray-400 w-full h-full relative z-0">
                <img src={props.details.bg} className='h-full w-full object:contain' />
                <div class="absolute bottom-0  w-[400px] left-[12%] flex justify-between  z-10 bg-gold opacity-60">
                    <div className='justify-center items-center px-3 py-2 font-bold'>
                        <Link to="/" className='text-slate-100 hover:text-slate-500'>Home</Link><span className='text-slate-200'>|</span>{props.details.title}
                    </div>
                  

                </div>
            </div>
        </div>
    );
}

