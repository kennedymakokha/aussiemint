

export default function SliderDetails(props) {

    return (
        <div className="absolute md:left-20 right-0 md:top-[25%] md:pt-0 pt-[30px] rounded-[5px] top-[0%] bg-black   md:h-[600px] h-full md:w-[50%] w-full flex md:opacity-50 opacity-50 z-10">
            <div className="flex-col w-full">
                <div className="flex w-full items-center justify-center h-full uppercase text-center font-bold ">
                    {/* <h2 className="text-center flex w-full items-center justify-center  ">{props.title}</h2> */}
                    <div dangerouslySetInnerHTML={{ __html: props.title.headline }} />
                </div>
            </div>

        </div>
    );
}

