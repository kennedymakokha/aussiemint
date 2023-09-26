import { useEffect, useState } from "react";
import Logo from './../assets/aussie-logo.png'
import { Link } from "react-router-dom";
import Gold from './../assets/images/gold.png'
import gram from './../assets/images/gram.png'
import kilo from './../assets/images/h-gold-kg.png'
import tola from './../assets/images/h-gold-tola.png'
import silver from './../assets/images/silver_ounce.png'
export const navLinks = [
  {
    title: 'home',
    link: '/',
    icon: <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor"
      className="w-8 h-8 text-gold">
      <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25" />
    </svg>,

  },
  {
    title: 'about us',
    link: '/about-us',
    icon: <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor"
      className="w-8 h-8 text-gold">
      <path strokeLinecap="round" strokeLinejoin="round" d="M9.568 3H5.25A2.25 2.25 0 003 5.25v4.318c0 .597.237 1.17.659 1.591l9.581 9.581c.699.699 1.78.872 2.607.33a18.095 18.095 0 005.223-5.223c.542-.827.369-1.908-.33-2.607L11.16 3.66A2.25 2.25 0 009.568 3z" />
      <path strokeLinecap="round" strokeLinejoin="round" d="M6 6h.008v.008H6V6z" />
    </svg>
  },
  {
    title: 'ASSAYS',
    link: '/assays',
    icon: <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor"
      className="w-8 h-8 text-gold">
      <path strokeLinecap="round" strokeLinejoin="round" d="M20.25 6.375c0 2.278-3.694 4.125-8.25 4.125S3.75 8.653 3.75 6.375m16.5 0c0-2.278-3.694-4.125-8.25-4.125S3.75 4.097 3.75 6.375m16.5 0v11.25c0 2.278-3.694 4.125-8.25 4.125s-8.25-1.847-8.25-4.125V6.375m16.5 0v3.75m-16.5-3.75v3.75m16.5 0v3.75C20.25 16.153 16.556 18 12 18s-8.25-1.847-8.25-4.125v-3.75m16.5 0c0 2.278-3.694 4.125-8.25 4.125s-8.25-1.847-8.25-4.125" />
    </svg>
  },
  {
    title: 'REFINING',
    link: '/refining',
    icon: <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor"
      className="w-8 h-8 text-gold">
      <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12a7.5 7.5 0 0015 0m-15 0a7.5 7.5 0 1115 0m-15 0H3m16.5 0H21m-1.5 0H12m-8.457 3.077l1.41-.513m14.095-5.13l1.41-.513M5.106 17.785l1.15-.964m11.49-9.642l1.149-.964M7.501 19.795l.75-1.3m7.5-12.99l.75-1.3m-6.063 16.658l.26-1.477m2.605-14.772l.26-1.477m0 17.726l-.26-1.477M10.698 4.614l-.26-1.477M16.5 19.794l-.75-1.299M7.5 4.205L12 12m6.894 5.785l-1.149-.964M6.256 7.178l-1.15-.964m15.352 8.864l-1.41-.513M4.954 9.435l-1.41-.514M12.002 12l-3.75 6.495" />
    </svg>
  },
  //    {
  //   title: 'BULLION',
  //   link: '/bullions',
  //   icon: <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor"
  //     className="w-8 h-8 text-gold">
  //     <path strokeLinecap="round" strokeLinejoin="round" d="M20.25 6.375c0 2.278-3.694 4.125-8.25 4.125S3.75 8.653 3.75 6.375m16.5 0c0-2.278-3.694-4.125-8.25-4.125S3.75 4.097 3.75 6.375m16.5 0v11.25c0 2.278-3.694 4.125-8.25 4.125s-8.25-1.847-8.25-4.125V6.375m16.5 0v3.75m-16.5-3.75v3.75m16.5 0v3.75C20.25 16.153 16.556 18 12 18s-8.25-1.847-8.25-4.125v-3.75m16.5 0c0 2.278-3.694 4.125-8.25 4.125s-8.25-1.847-8.25-4.125" />
  //   </svg>
  //  },
  {
    title: ' CONTACT US',
    link: '/contact-us',
    icon: <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor"
      className="w-6 h-6 text-gold">
      <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
    </svg>

  }

]


const tabs = [
  {
    img: Gold,
    title: "SPOT GOLD",
    variations: " -0.24% (-4.67)",
    price: "1911.68",
    high: "1916.90",
    low: "1910.58"

  },
  {
    img: gram,
    title: "PER GRAM",
    variations: " 0.06",
    price: 61.5434,
    high: "1916.90",
    low: "1910.58"

  },
  {
    img: kilo,
    title: "PER KILO",
    variations: " 0.06",
    price: 6154.34,
    high: "1916.90",
    low: "1910.58"

  },
  {
    img: tola,
    title: "PER TOLA",
    variations: " 0.06",
    price: 718.89,
    high: "1916.90",
    low: "1910.58"

  }, {
    img: silver,
    title: "SPOT SILVER",
    variations: " 0.06",
    price: 23.5434,
    high: "1916.90",
    low: "1910.58"

  }
]
const TabContainer = (props) => {
  const { tab, up } = props
  return (
    <div className="flex  flex-col items-center w-1/3 h-full ">
      <div className="flex w-full h-2/3">
        <div className="w-1/3 flex justify-center items-center"><img src={tab.img} alt="" /> </div>
        <div className="flex w-2/3 h-full flex-col gap-y-1 ">
          <div className="flex font-semibold text-white gap-x-2">
            {tab.title} {
              !up ? <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 text-red-700 font-bold">
                <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
              </svg>

                : <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 15.75l7.5-7.5 7.5 7.5" />
                </svg>
            }
          </div>
          <div className="flex font-bold text-white ">
            <span className={`${props.up ? "bg-green-300" : "bg-red-300"
              } bg-green-300 text-black px-3 text-xl`}>{up ? tab.price + 0.2.toFixed(2) : tab.price - 0.1.toFixed(2)}</span> $
          </div>
          <div className="flex text-red-900 font-bold ">
            {tab.variations}
          </div>
        </div>
      </div>

      <div className="flex text-white ">
        High:{tab.high} | Low:{tab.low}
      </div>
    </div>
  )
}
const HomeNavbar = (props) => {
  const [active, setActive] = useState("Home");
  const [toggle, setToggle] = useState(false);
  const [up, setUp] = useState(false);
  const [prices, setPrices] = useState({});
  const [status, setStatus] = useState(false);

  const getApiData = async () => {
    var myHeaders = new Headers();
    myHeaders.append("x-access-token", "goldapi-1pgf6rlmylsbqq-io");
    myHeaders.append("Content-Type", "application/json");

    var requestOptions = {
      method: 'GET',
      headers: myHeaders,
      redirect: 'follow'
    };

    fetch("https://www.goldapi.io/api/XAU/USD", requestOptions)
      .then(response => response.text())
      .then(result => {
        console.log(result["price"])
      })
      .catch(error => console.log('error', error));

    // update the state
    // setStatus(response.success)
    // setPrices(response.rates);
  };

  useEffect(() => {
    getApiData();
  }, []);
  // useEffect(() => {

  //   //Implementing the setInterval method
  //   const interval = setInterval(() => {
  //     setUp((prevState) => !prevState);
  //   }, 1000);

  //   //Clearing the interval
  //   return () => clearInterval(interval);
  // }, [up]);
  let v = {
    "timestamp": 1695629281,
    "metal": "XAU",
    "currency": "USD",
    "exchange": "FOREXCOM",
    "symbol": "FOREXCOM:XAUUSD",
    "prev_close_price": 1925.26,
    "open_price": 1925.26,
    "low_price": 1920.96,
    "high_price": 1927.23,
    "open_time": 1695600000,
    "price": 1923.51,
    "ch": -1.75,
    "chp": -0.09,
    "ask": 1923.81,
    "bid": 1923.22,
    "price_gram_24k": 61.8423,
    "price_gram_22k": 56.6888,
    "price_gram_21k": 54.112,
    "price_gram_20k": 51.5352,
    "price_gram_18k": 46.3817,
    "price_gram_16k": 41.2282,
    "price_gram_14k": 36.0747,
    "price_gram_10k": 25.7676
  }

  return (
    <nav className={`${props.black ? "bg-black" : "bg-transparent"
      } w-full flex  justify-between items-center navbar `}>
      <div className="sm:hidden flex flex-1 justify-end items-center">
        <img src={Logo} alt="" className="h-full" />
      </div>
      {/* Desktop Navigation */}
      <div className="w-full">

        <div id="sticky-banner" tabindex="-1" className="md:flex flex-col  px-[170px] fixed  top-0 left-0 -z-50  flex justify-between w-full p-4  dark:bg-gray-700 dark:border-gray-600">
          <div className="w-full h-[60px]  text-white flex  justify-between  border-b border-gold py-1   sm:flex hidden justify-end items-center flex-1">
            <div className="w-1/4 h-full  flex justify-center items-center ">
              <img src={Logo} alt="" />
            </div>
            <div className="w-3/4 h-full  flex ">
              {navLinks.map((link, i) => (
                <Link to={link.link} key={i} className={`${props.courasel === 2 ? "text-black" : "text-white"
                  } flex items-center hover:text-[#d2ac67] justify-center w-1/6   font-bold uppercase`}>
                  {link.title}
                </Link>
              ))}

              <div className='flex items-center justify-center w-1/6  '>
                <div className={`${props.courasel === 2 ? "text-gold" : "text-black", props.courasel === 2 ? "bg-black" : " bg-[#d2ac67]"
                  }  font-bold  py-2 px-3 `} > +254 788 283 594
                </div>
              </div>
            </div>
          </div>
          <div className="md:flex hidden items-center w-full h-1/2   ">

            {tabs.map((tab, i) => (
              <TabContainer tab={tab} up={up} key={i} />
            ))}

          </div>
          {/* <div className="flex items-center">
            <button data-dismiss-target="#sticky-banner" type="button" className="flex-shrink-0 inline-flex justify-center w-7 h-7 items-center text-gray-400 hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 dark:hover:bg-gray-600 dark:hover:text-white">
              <svg className="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 14">
                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6" />
              </svg>
              <span className="sr-only">Close banner</span>
            </button>
          </div> */}
        </div>

      </div>


      {/* <ul className="list-none sm:flex hidden justify-end items-center flex-1">
        {navLinks.map((nav, index) => (
          <li
            key={nav.id}
            className={`font-poppins font-normal cursor-pointer text-[16px] ${
              active === nav.title ? "text-white" : "text-dimWhite"
            } ${index === navLinks.length - 1 ? "mr-0" : "mr-10"}`}
            onClick={() => setActive(nav.title)}
          >
            <a href={`#${nav.id}`}>{nav.title}</a>
          </li>
        ))}
      </ul> */}

      {/* Mobile Navigation */}
      <div className="sm:hidden flex flex-1 justify-end items-center ">
        {toggle ? <svg xmlns="http://www.w3.org/2000/svg" onClick={() => setToggle(!toggle)} fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8 text-white">
          <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
        </svg>
          : <svg xmlns="http://www.w3.org/2000/svg" onClick={() => setToggle(!toggle)} fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8 text-white">
            <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
          </svg>
        }
        {/* alt="menu"
          className="w-[28px] h-[28px] object-contain" */}
        {/* onClick={() => setToggle(!toggle)} */}
        {/* /> */}

        {/* Sidebar */}
        <div
          className={`${!toggle ? "hidden" : "flex"
            } p-6 bg-black-gradient absolute top-2 right-0 mx-0 my-2 min-w-[240px] rounded-xl sidebar`}
        >
          <ul className="list-none bg-black px-2 flex justify-end items-start flex-1 flex-col">
            {navLinks.map((nav, index) => (
              <li
                key={index}
                className={`font-poppins uppercase font-medium cursor-pointer text-[16px] ${active === nav ? "text-white" : "text-gold"
                  } ${index === navLinks.length - 1 ? "mb-0" : "mb-4"}`}
                onClick={() => setActive(nav)}
              >
                <Link to={`${nav.link}`}>{nav.title}</Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav >
  );
};

export default HomeNavbar;