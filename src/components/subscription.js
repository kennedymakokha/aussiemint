
export default function Subscription(props) {
    return (
        <div
            className='flex w-full md:h-[200px] h-[100px] md:gap-y-10 gap-y-2 bg-black md:px-[300px] px-10 md:p-10 p-2  flex-col'>
            <span className="text-white font-bold md:text-3xl text-[15px] flex items-center justify-center">
                Signup for our <span className="text-gold">newsletter</span> & promotions
            </span>
            <div className="w-full flex items-center justify-center rounded-md ">
                <div className="md:w-3/4 w-full  md:h-[50px] h-[30px] flex rounded-md  ">
                    <input type="text" autoFocus={false} className="md:w-5/6 w-2/3  h-full" />
                    <div className="md:w-1/6 w-1/3 bg-gold text-black shadow-2 flex justify-center items-center capitalize font-bold md:text-xl text-[10px] text-centre">Subscribe Now </div>

                </div>
            </div>


        </div >


    );
}

