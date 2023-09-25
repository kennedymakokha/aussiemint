import { useEffect, useState } from "react";
import Gallery from "../containers/courasel";
import Navbar from "../containers/navbar";
import Bg from './../assets/slider1.jfif'
import ChartAp from "../containers/chats/multisetChart";


export default function Calculator() {
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
            .then(result => setPrices(result))
            .catch(error => console.log('error', error));

        // update the state
        // setStatus(response.success)
        // setPrices(response.rates);
    };
    const [prices, setPrices] = useState({});
    const [status, setStatus] = useState(false);
    useEffect(() => {
        getApiData();
    }, []);
    // useEffect(() => {

    //     //Implementing the setInterval method
    //     const interval = setInterval(() => {
    //         getApiData();
    //     }, 2000);

    //     //Clearing the interval
    //     return () => clearInterval(interval);
    // }, [prices]);

    return (
        <div className="absolute md:right-20 right-0 md:top-[25%]  md:pt-0 pt-[30px] rounded-[5px] top-[0%] bg-black opacity-60  md:h-[600px] h-full md:w-1/3 w-full flex md:opacity-80 opacity-50 z-10">
            <div className="flex-col w-full">
                <div className="flex w-full items-center justify-center h-[10%] uppercase text-center font-bold ">
                    <h2 className="text-center flex w-full items-center justify-center  ">Price Estimates</h2>
                </div>

                <div className="flex flex-col gap-y-10  h-[90%]  uppercase text-center font-bold   ">
                    <ChartAp />

                    {/* <div className="flex w-full md:h-[40px] h-[20px] px-10 md:gap-x-8 gap-x-2 ">
                        <div className="md:w-1/3 w-1/4 md:h-[40px] h-[30px] flex items-center ">
                            Weight:
                        </div>
                        <input type="text" onChange={(e) => {
                            setCulc((prevState) => ({
                                ...prevState,
                                weight: e.target.value,
                            })); priceCalculations(culc.duration, culc.shiping)
                        }}
                            className=" w-full md:h-[40px] h-[30px] px-2 rounded-[3px]" placeholder="" />
                    </div>
                    <div className="flex w-full md:h-[40px] h-[20px] px-10 md:gap-x-8 gap-x-2 ">
                        <div className="md:w-1/3 w-1/4 md:h-[40px] h-[30px] flex  items-center ">
                            Purity:
                        </div>
                        <input type="text"
                            onChange={(e) => {
                                setCulc((prevState) => ({
                                    ...prevState,
                                    purity: e.target.value,
                                })); priceCalculations(culc.duration, culc.shiping)
                            }}
                            className=" w-full px-2 md:h-[40px] h-[30px] rounded-[3px]" placeholder="" />
                    </div>
                    <div className="flex  w-full md:h-[40px] h-[20px] px-10 md:gap-x-8 gap-x-2 ">
                        <div className="md:w-1/3 w-1/4 md:h-[40px] h-[30px] flex items-center ">
                            Duration:
                        </div>
                        <select className=" w-full md:h-[40px] h-[30px] rounded-[3px] "
                            onChange={(e) => {
                                setCulc((prevState) => ({
                                    ...prevState,
                                    duration: 1 / e.target.value,
                                })); priceCalculations(culc.duration, culc.shiping)
                            }}
                        >
                            <option value="">Select Duration</option>
                            {durations.map((dur, i) => (
                                <option key={i} value={i}>{dur}</option>
                            ))}
                        </select>
                    </div>
                    <div className="flex  w-full md:h-[40px] h-[20px] px-10 md:gap-x-8 gap-x-2 ">
                        <div className="md:w-1/3 w-1/4 md:h-[40px] h-[30px] flex  items-center ">
                            Freight:
                        </div>
                        <select className=" w-full md:h-[40px] h-[30px] rounded-[3px] "
                            onChange={(e) => {
                                setCulc((prevState) => ({
                                    ...prevState,
                                    shiping: 1 / e.target.value,
                                })); priceCalculations(culc.duration, culc.shiping)
                            }}
                        >
                            <option value="">Select Shipping</option>
                            {ShipipingMethod.map((dur, i) => (
                                <option key={i} value={i}>{dur}</option>
                            ))}
                        </select>
                    </div>
                    {total} */}

{/* 
                    <div className="flex w-full items-center justify-center">
                        <div className="flex  w-1/2 justify-center text-gold items-center rounded-[2px] py-3 px-2 shadow-3 rounded-[10px] bg-black text-center align-center">Submit</div>
                    </div> */}
                </div>

            </div>

        </div>
    );
}

