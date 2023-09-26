

export default function SliderDetails(props) {

    return (
        <div className="absolute inset-0 md:top-[25%] md:pt-0 pt-[30px] rounded-[5px] top-[0%]   md:h-[600px] h-full  w-full md:flex hidden   z-10">
            <div className=" w-full flex  items-center justify-center">
                <div className="flex w-full items-center justify-center h-full uppercase text-center font-bold ">
                    <h2 className="text-center  items-center  text-white text-5xl justify-center  ">
                        Our <span className="text-gold">market reputation</span> is built on a foundation of integrity, precision, and customer satisfaction
                    </h2>
                    <div dangerouslySetInnerHTML={{ __html: props.title.headline }} />
                </div>
            </div>

        </div>
    );
}

