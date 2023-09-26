import { ContactContainer, InputContainer, TitleOver } from "../components";
import Layout from "../components/layout";
import bg from './../assets/images/conattact.png'

export default function Contact() {

  return (
    <Layout details={{ display_name: "Reach Out ", sht_desc: "Lets Discuss", title: "Contact Us", bg }}>
      <div className="flex w-full h-1/2 bg-slate-100  flex-col md:px-[300px] p-10">
        <TitleOver title="About us" fontSize="18px" color="black" />
        <div className="  flex md:w-full w-full md:h-auto h-[200px] gap-x-100 md:flex-row flex-col ">
          <div className="md:w-1/3 w-full h-full  text-xl flex flex-col p-1 gap-y-10">
            <ContactContainer title="Hotline" value="+254 788 283 594" icon={<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-10 h-10">
              <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
            </svg>} />
            <ContactContainer title="email" value="info@aussie-min" icon={<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-10 h-10">
              <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 9v.906a2.25 2.25 0 01-1.183 1.981l-6.478 3.488M2.25 9v.906a2.25 2.25 0 001.183 1.981l6.478 3.488m8.839 2.51l-4.66-2.51m0 0l-1.023-.55a2.25 2.25 0 00-2.134 0l-1.022.55m0 0l-4.661 2.51m16.5 1.615a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V8.844a2.25 2.25 0 011.183-1.98l7.5-4.04a2.25 2.25 0 012.134 0l7.5 4.04a2.25 2.25 0 011.183 1.98V19.5z" />
            </svg>
            } />
            <ContactContainer title="Office" value="2nd Parklands Avenue " icon={<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-10 h-10">
              <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
              <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
            </svg>
            } />
            <ContactContainer title="Working Hours" value="Mon-Fri (9 am - 6 pm EAT)" icon={<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-10 h-10">
              <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 9v.906a2.25 2.25 0 01-1.183 1.981l-6.478 3.488M2.25 9v.906a2.25 2.25 0 001.183 1.981l6.478 3.488m8.839 2.51l-4.66-2.51m0 0l-1.023-.55a2.25 2.25 0 00-2.134 0l-1.022.55m0 0l-4.661 2.51m16.5 1.615a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V8.844a2.25 2.25 0 011.183-1.98l7.5-4.04a2.25 2.25 0 012.134 0l7.5 4.04a2.25 2.25 0 011.183 1.98V19.5z" />
            </svg>
            } />
          </div>
          <div className="md:w-2/3 w-full h-full   ">
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3988.85168283229!2d36.81449517496565!3d-1.2612513987267424!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x182f171bcc6114cd%3A0x3842565cf6238554!2sAmani%20Plaza!5e0!3m2!1ssw!2ske!4v1695290485464!5m2!1ssw!2ske" className="w-full h-full" style={{ border: 0 }} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
          </div>
        </div>
      </div>
      <div className=" h-full md:h-1/2   bg-white  flex  md:px-[300px]  w-full   flex-col">
        <div className="flex w-full h-full gap-x-10  ">
          <div className="  flex  w-1/2 flex-col gap-y-2 mt-20">
            <InputContainer label="Name" />
            <InputContainer label="Email" />
          </div>
          <div className="  flex  w-1/2 flex-col gap-y-2 mt-20">
            <InputContainer label="last name" />
            <InputContainer label="phone Number " />
          </div>
        </div>
        <div className="w-full flex  py-10  ">
          <textarea className="w-full flex  bg-blue-100 rounded-md justify-center items-center py-2 px-3" />
        </div>
        <div className="w-full flex  py-10  ">
          <div className="w-full flex drop-shadow-2xl bg-gold rounded-md justify-center items-center py-3 px-3"> Submit </div>
        </div>
      </div>


    </Layout>
  );
}

