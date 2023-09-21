import { Link } from "react-router-dom"

export const Categorycard = (props) => {
    return (
        <div class="md:w-1/3 w-full  h-full hover:bg-slate-400 bg-slate-200 flex flex-col border border-white border-2 pb-5 ">
            <div class="w-full h-1/2 relative  ">
                <img src={props.img} className='h-full w-full object-fit ' alt="" />


            </div>
            <div className='flex flex-col h-full w-full  m-2 ' >
                <div style={{ alignSelf: 'start' }}></div>
                <TitleOver title={props.title} />
                <div className='flex text-justify justify-center items-center h-full m-2 overflow-hidden'>
                    {props.description.substring(1, 100) + "..."}

                </div>
            </div>
        </div>
    )
}

export const Clientcard = (props) => {
    return (
        <div class="md:w-1/6  h-full bg-transparent  flex flex-col  pb-5 ">
            <img src={props.img} className='h-full w-full object-cover ' alt="" />
        </div>
    )
}

export const WhyUscard = (props) => {
    return (
        <div className='w-1/2 md:w-full h-1/2 flex flex-wrap justify-center items-center '>
            {/* <div class="w-full h-screen bg-gray-200 flex justify-center items-center"> */}
            <div class=" w-3/4 h-3/4 relative z-0 border border-black border-dotted ">
                <div className='flex flex-col'>

                    <span className='text-xl text-center font-bold'>Safety & Quality</span>
                    <span className='text-slate-700 text-center'>Praesent pellentesque diam vitae nibh aliquam faucibus.</span>
                </div>
                <div class="absolute inset-0 flex justify-center items-center -bottom-60 z-10">
                    <div className='bg-slate-700 hover:bg-white rounded-full h-14 w-14' ></div>
                </div>
            </div>
            {/* </div> */}
        </div>
    )
}
export const TitleUnder = (props) => {
    return (
        <div>

            <h1 className="text-2xl font-bold text-primary">{props.title}</h1>
            <h1 className="font-thin   text-slate-100">{props.sub_title}</h1>
            <div className="flex justify-center items-center">
                <div className="h-1 w-20 bg-primary "></div>
            </div>

        </div>

    )
}
export const TitleOver = (props) => {
    return (
        <div className='w-full flex pb-10' style={{ alignSelf: 'start' }}>
            <div className=" flex  flex-col" >
                <div className="h-1 w-10 bg-gold mb-2" style={{ alignSelf: 'start' }}></div>
                <h1 className="text-2xl font-bold text-gold capitalize" style={{ fontSize: props.fontsize && props.fontsize, color: props.color && props.color }}>{props.title}</h1>
            </div>
        </div>
    )
}
export const WhyUscontainer = (props) => {
    return (
        <div className="md:w-1/3   md:h-[200px] h-[210px] md:p-2 p-2 mt-2 flex">
            <div className="md:w-1/4 h-full  md:flex hidden text-center justify-center items-center border-r border-r-dotted border-primary" >
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-10 h-10 text-primary">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M20.25 7.5l-.625 10.632a2.25 2.25 0 01-2.247 2.118H6.622a2.25 2.25 0 01-2.247-2.118L3.75 7.5M10 11.25h4M3.375 7.5h17.25c.621 0 1.125-.504 1.125-1.125v-1.5c0-.621-.504-1.125-1.125-1.125H3.375c-.621 0-1.125.504-1.125 1.125v1.5c0 .621.504 1.125 1.125 1.125z" />
                </svg>
            </div>
            <div className="md:w-2/3 w-full h-full ">
                <h6 className=" uppercase  font-bold text-center  ">{props.title}</h6>
                <p className="text-justify p-5 ">
                    {props.description}
                </p>
            </div>
        </div>
    )
}

export function ArrowListItem(props) {
    return (
        <div className=' text-justify px-5 items-center'>
            <div className='flex w-full  '>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor"
                    className="w-6 h-6 font-bold hover:text-gold text-white">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3" />
                </svg>
                <p className='hover:text-gold text-white capitalize'>{props.title}</p>
            </div>

        </div>
    )
}

export function ContactContainer(props) {
    return (

        <div className="w-full flex ">
            <div className="w-1/6 ">
                <div className="w-[60px] bg-gold flex h-[60px] rounded-full justify-center items-center ">
                    {props.icon}
                </div>
            </div>
            <div className="w-5/6 flex flex-col justify-center ">
                <div className="font-bold  capitalize text-slate-800">
                    {props.title}
                </div>
                <div className="text-slate-500">
                    {props.value}
                </div>

            </div>
        </div>

    )
}
export function InputContainer(props) {
    return (

        <div className="flex flex-col gap-y-4">
            <div className="font-bold text-xl capitalize">{props.label}:</div>
            <input type="text" className=" flex  w-full bg-blue-100 h-10 rounded-md  " />
        </div>

    )
}

export function ArrowNOnhovered(props) {
    return (
        <div className=' text-justify px-5 items-center'>
            <div className='flex w-full gap-x-2 '>
                {!props.arrow ? <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor"
                    className="w-6 h-6 font-bold hover:text-gold text-white"
                    style={{ fontSize: props.color && props.color, color: props.color && props.color }}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3" />
                </svg> :
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
                    </svg>
                }
                <p className='hover:text-gold text-white capitalize' style={{ fontSize: props.color && props.color, color: props.color && props.color }}>{props.title}</p>
            </div>

        </div>
    )
}
export function NavLinksItem(props) {
    return (
        <div className=' text-justify px-5 items-center group'>
            <Link to={props.link.link} className='flex w-full gap-x-4 group-hover:text-gold text-white  '>
                {props.link.icon}
                <p className='group-hover:text-gold text-white capitalize'>{props.link.title}</p>
            </Link>

        </div>
    )
}
export const Newscontainer = (props) => {
    return (
        <div className='h-28 w-full flex group '>
            <div className='h-full w-1/3 bg-red-100 flex '></div>
            <div className='h-full w-2/3 flex p-2 flex-col '>
                <div className=' flex'>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 text-primary">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 11.25v7.5m-9-6h.008v.008H12v-.008zM12 15h.008v.008H12V15zm0 2.25h.008v.008H12v-.008zM9.75 15h.008v.008H9.75V15zm0 2.25h.008v.008H9.75v-.008zM7.5 15h.008v.008H7.5V15zm0 2.25h.008v.008H7.5v-.008zm6.75-4.5h.008v.008h-.008v-.008zm0 2.25h.008v.008h-.008V15zm0 2.25h.008v.008h-.008v-.008zm2.25-4.5h.008v.008H16.5v-.008zm0 2.25h.008v.008H16.5V15z" />
                    </svg>
                    <span className='text-[10px] flex items-center font-bold pl-2'>MAY 15, 2015</span>
                </div>
                <p className='font-bold text-justify text-black group-hover:text-blue-400'>Quis autem vel eum </p>
                <p className='font-bold text-justify text-blue-400 group-hover:text-primary pt-5 uppercase' style={{ alignSelf: 'end' }}>Read More </p>
            </div>
        </div>
    )
}

export const FooterCardcontainer = (props) => {
    return (
        <div className='flex flex-col md:w-1/4 w-full pt-20 px-5 '>
            <div className='w-full flex' style={{ alignSelf: 'start' }}>
                <TitleOver fontsize="15px" color="white" title={props.title} />
            </div>
            {props.body}
        </div>
    )
}
export const Statistcscontainer = (props) => {
    return (
        <div className='flex md:w-1/4 w-full h-full justify-center items-center flex-col gap-y-2'>
            <div className='border md:border-[4px] border-[2px] border-gold md:h-[200px] h-[100px] md:w-[200px] w-[100px] rounded-full flex justify-center items-center md:text-2xl text-xl font-bold' >
                <span className="text-white">{props.stats.value}</span>
            </div>
            <div className="md:text-[20px] text-xl font-semiBold capitalize text-white">{props.stats.title}</div>
        </div>
    )
}
export const Morecontainer = (props) => {
    return (
        <div className="md:w-1/2 w-full h-[150px] p-2 flex">
            <div className="w-1/4 h-full justify-center items-center border-r border-r-dotted" >
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-10 h-10">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M20.25 7.5l-.625 10.632a2.25 2.25 0 01-2.247 2.118H6.622a2.25 2.25 0 01-2.247-2.118L3.75 7.5M10 11.25h4M3.375 7.5h17.25c.621 0 1.125-.504 1.125-1.125v-1.5c0-.621-.504-1.125-1.125-1.125H3.375c-.621 0-1.125.504-1.125 1.125v1.5c0 .621.504 1.125 1.125 1.125z" />
                </svg>
            </div>
            <div className="w-2/3 h-full  items-left ">
                <h6 className=" uppercase  font-bold   ">Contract logistics</h6>
                <p className="text-justify p-5 ">
                    s simply dummy text of the printing and typesetting industry.
                    Lorem Ipsum has been the industry's standard dummyum
                </p>
            </div>
        </div>
    )
}

export const QuicklinkItem = (props) => {
    return (
        <Link to={props.link} className="flex items-start group">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4  group-hover:text-white text-primary">
                <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
            </svg>
            <span className="text-white group-hover:text-primary">{props.title}</span>
        </Link>
    )
}

export const ContactItem = (props) => {
    return (
        <Link to={props.link} className="flex items-start group my-3 text-[16px]">
            <span className="flex justify-center items-center"> {props.icon}</span>
            <span className="text-white text-[16px] group-hover:text-gold">{props.title}</span>
        </Link>
    )
}


export const Talecontainer = (props) => {
    return (
        <div className='w-full flex'>
            <div className="w-1/4 h-full flex justify-center items-center" >
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-10 h-10 text-primary">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M20.25 7.5l-.625 10.632a2.25 2.25 0 01-2.247 2.118H6.622a2.25 2.25 0 01-2.247-2.118L3.75 7.5M10 11.25h4M3.375 7.5h17.25c.621 0 1.125-.504 1.125-1.125v-1.5c0-.621-.504-1.125-1.125-1.125H3.375c-.621 0-1.125.504-1.125 1.125v1.5c0 .621.504 1.125 1.125 1.125z" />
                </svg>
            </div>
            <div className="w-3/4 h-full  items-left ">
                <p className="text-justify py-5 text-white ">
                    Consumer Package
                </p>
            </div>
        </div>
    )
}