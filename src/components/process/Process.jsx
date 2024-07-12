import React from "react";
import Image from "next/image";
//========== Import Images
import processIcn1 from "media/icons/webIcons/processIcn1.png"
import processIcn2 from "media/icons/webIcons/processIcn2.png"
import processIcn3 from "media/icons/webIcons/processIcn3.png"
import processIcn4 from "media/icons/webIcons/processIcn4.png"
import processIcn5 from "media/icons/webIcons/processIcn5.png"
import processIcn6 from "media/icons/webIcons/processIcn6.png"


const Process = () => {
    return (
        <>
            <section className="py-10 lg:py-20">
                <div className="container">
                    <div className="mb-8 lg:mb-12">
                        <d5v className="bg-[#EBEBEB] text-black border-0 w-full md:w-max h-full md:h-[40px] xl:h-[45px] mx-auto px-6 py-2 md:py-0 rounded-[45px] text-center flex items-center justify-center cursor-pointer mb-2">
                            <span className="text-[22px] font-sans tracking-wide">Web Development Process</span>
                        </d5v>
                        <h2 className="text-[30px] lg:text-[50px] 2xl:text-[55px] tracking-wide font-semibold font-sans text-black text-center leading-tight">Our Strategic Web Development Process</h2>
                        <p className="text-[15px] tracking-wide font-poppins text-black text-center my-4 lg:my-6">We meet the demands of your business by executing our strategically planned processes for delivering top-of-the-line Custom <br /> Websites & Applications.</p>
                    </div>
                    <div className="grid grid-cols-12 gap-y-12 gap-x-0 md:gap-x-10 lg:gap-x-20">
                        <div className="col-span-12 md:col-span-6 lg:col-span-4">
                            <div className="flex flex-col items-center justify-center gap-4">
                                <Image src={processIcn1} alt="Brand" className="w-[25%]" />
                                <h4 className="text-[20px] tracking-wide font-semibold font-sans text-black text-center leading-tight">Custom Web App Integration</h4>
                                <p className="text-[14px] tracking-wide font-poppins text-black text-center">We Integrate Disparate Business Systems And Processes, Add Web Service Functionality To Your Existing Applications, And Synchronize Data Across Those Applications.</p>
                            </div>
                        </div>
                        <div className="col-span-12 md:col-span-6 lg:col-span-4">
                            <div className="flex flex-col items-center justify-center gap-4">
                                <Image src={processIcn2} alt="Brand" className="w-[25%]" />
                                <h4 className="text-[20px] tracking-wide font-semibold font-sans text-black text-center leading-tight">Defining Web Application</h4>
                                <p className="text-[14px] tracking-wide font-poppins text-black text-center">We Integrate Disparate Business Systems And Processes, Add Web Service Functionality To Your Existing Applications, And Synchronize Data Across Those Applications.</p>
                            </div>
                        </div>
                        <div className="col-span-12 md:col-span-6 lg:col-span-4">
                            <div className="flex flex-col items-center justify-center gap-4">
                                <Image src={processIcn3} alt="Brand" className="w-[25%]" />
                                <h4 className="text-[20px] tracking-wide font-semibold font-sans text-black text-center leading-tight">Web Application Structure</h4>
                                <p className="text-[14px] tracking-wide font-poppins text-black text-center">We Integrate Disparate Business Systems And Processes, Add Web Service Functionality To Your Existing Applications, And Synchronize Data Across Those Applications.</p>
                            </div>
                        </div>
                        <div className="col-span-12 md:col-span-6 lg:col-span-4">
                            <div className="flex flex-col items-center justify-center gap-4">
                                <Image src={processIcn4} alt="Brand" className="w-[25%]" />
                                <h4 className="text-[20px] tracking-wide font-semibold font-sans text-black text-center leading-tight">Research & UX Workflow</h4>
                                <p className="text-[14px] tracking-wide font-poppins text-black text-center">We Integrate Disparate Business Systems And Processes, Add Web Service Functionality To Your Existing Applications, And Synchronize Data Across Those Applications.</p>
                            </div>
                        </div>
                        <div className="col-span-12 md:col-span-6 lg:col-span-4">
                            <div className="flex flex-col items-center justify-center gap-4">
                                <Image src={processIcn5} alt="Brand" className="w-[25%]" />
                                <h4 className="text-[20px] tracking-wide font-semibold font-sans text-black text-center leading-tight">Third-Party Software Selections</h4>
                                <p className="text-[14px] tracking-wide font-poppins text-black text-center">We Integrate Disparate Business Systems And Processes, Add Web Service Functionality To Your Existing Applications, And Synchronize Data Across Those Applications.</p>
                            </div>
                        </div>
                        <div className="col-span-12 md:col-span-6 lg:col-span-4">
                            <div className="flex flex-col items-center justify-center gap-4">
                                <Image src={processIcn6} alt="Brand" className="w-[25%]" />
                                <h4 className="text-[20px] tracking-wide font-semibold font-sans text-black text-center leading-tight">Prototyping & Design Testing</h4>
                                <p className="text-[14px] tracking-wide font-poppins text-black text-center">We Integrate Disparate Business Systems And Processes, Add Web Service Functionality To Your Existing Applications, And Synchronize Data Across Those Applications.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}
export default Process;