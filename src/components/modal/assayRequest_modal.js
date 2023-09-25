import React from "react";
import { InputContainer } from "..";

export default function AssayRequest_Modal({ showModal, setShowModal }) {

    return (
        <>
            {/* <button
        className="bg-pink-500 text-white active:bg-pink-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
        type="button"
        onClick={() => setShowModal(true)}
      >
        Open regular modal
      </button> */}
            {showModal ? (
                <>
                    <div
                        className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none"
                    >
                        <div className="relative w-1/2 my-6 mx-auto max-w-3xl">
                            {/*content*/}
                            <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                                {/*header*/}
                                <div className="flex items-start justify-between p-5 border-b border-solid border-slate-200 rounded-t">
                                    <h3 className="text-3xl font-semibold">
                                        Schedule a Session
                                    </h3>
                                    <button
                                        className="p-1 ml-auto bg-transparent border-0 text-black opacity-5 float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
                                        onClick={() => setShowModal(false)}
                                    >
                                        <span className="bg-transparent text-black opacity-5 h-6 w-6 text-2xl block outline-none focus:outline-none">
                                            ×
                                        </span>
                                    </button>
                                </div>
                                {/*body*/}
                                <div className="relative p-6 flex-auto">
                                    <div className="  flex h-full w-full ">
                                        <div className="  flex  w-full   flex-col">
                                            <div className="flex w-full gap-x-10  ">
                                                <div className="  flex  w-full flex-col gap-y-2 mt-20">
                                                    <InputContainer label="Name" />
                                                    <InputContainer label="Email" />
                                                </div>
                                                <div className="  flex  w-full flex-col gap-y-2 mt-20">
                                                    <InputContainer label="last name" />
                                                    <InputContainer label="phone Number " />
                                                </div>
                                            </div>
                                            <div className="w-full flex  py-10  ">
                                                <textarea rows="10" cols="80" className="w-full flex  bg-blue-100 rounded-md justify-center items-center py-2 px-3" />
                                            </div>
                                            {/* <div className="w-full flex  py-10  ">
                                                <div className="w-full flex drop-shadow-2xl bg-gold rounded-md justify-center items-center py-3 px-3"> Submit </div>
                                            </div> */}
                                        </div>

                                    </div>
                                </div>
                                {/*footer*/}
                                <div className="flex items-center justify-end p-6 border-t border-solid border-slate-200 rounded-b">
                                    <button
                                        className="text-red-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                                        type="button"
                                        onClick={() => setShowModal(false)}
                                    >
                                        Close
                                    </button>
                                    <button
                                        className="bg-emerald-500 text-white active:bg-emerald-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                                        type="button"
                                        onClick={() => setShowModal(false)}
                                    >
                                        <a href="mailto:email@example.com" >Submit</a>
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
                </>
            ) : null}
        </>
    );
}