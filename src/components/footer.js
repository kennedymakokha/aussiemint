import { ArrowListItem, ContactItem, NavLinksItem, TitleOver } from ".";
import Crumb from "../containers/breadCrump";
import Navbar, { navLinks } from "../containers/navbar";
import Logo from './../assets/logo-dark.jpg'

export default function Footer(props) {
    return (
        <div className='flex w-full md:h-[500px] h-[full] bg-black flex-col ' >
            <div className="bg-black w-full h-[98%] flex gap-x-1 md:flex-row flex-col  md:px-[100px]">
                <div className="md:w-1/4 w-full  h-full  md:p-10  p-2 flex-col gap-y-[10px]">
                    <img src={Logo} alt="" />

                    <ContactItem title="MAGNOLIA CLOSE, OFF UNITED NATIONS AVENUE, NAIROBI"
                        icon={<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor"
                            className="w-8 h-8 text-gold">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25" />
                        </svg>}
                    />
                    <ContactItem title="+254 777 741 121"
                        icon={<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor"
                            className="w-8 h-8 text-gold">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
                        </svg>
                        }
                    />
                    <ContactItem title="Working Hours:
Mon-Fri (9 am - 6 pm EAT)"
                        icon={<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor"
                            className="w-8 h-8 text-gold">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                        }
                    />



                </div>
                <div className="md:w-1/4 w-full  h-full  md:p-10 p-2">
                    <TitleOver title="Quick Links" fontSize="16px" color="white" />
                    <div className="flex flex-col gap-y-4 ">
                        {navLinks.map((link, i) => (
                            <NavLinksItem key={i} link={link} />
                        ))}

                    </div>
                </div>
                <div className="md:w-1/4 w-full h-full md:p-10  p-2 gap-y-10 flex flex-col ">
                    <TitleOver title="Services" fontSize="20px" color="white" />
                    <ArrowListItem title="Mining" />
                    <ArrowListItem title="Refining" />
                    <ArrowListItem title="Transportation" />
                    <ArrowListItem title="Scaling" />
                </div>
                <div className="w-1/3 h-full  md:p-10 p-2">
                    <TitleOver title="Feeds" fontSize="20px" color="white" />
                </div>
            </div>
            <div className='w-full h-[5%] bg-gold justify-center flex items-center text-slate-100'>
                <span className='text-black'>2023 © Aussie-mint - Copyright All Rights Reserved </span>

            </div>
        </div>
    );
}

