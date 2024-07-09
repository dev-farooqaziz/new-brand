import React from "react";
import Image from "next/image";
//========== Import Images
import engageImg from "media/gameApp/engageImg.png"
import polygon from "media/icons/polygon.png"


const Engage = () => {
    return (
        <>
            <section className="py-10 lg:py-20">
                <div className="container relative">
                    <div className="mb-12">
                        <div className="bg-[#EBEBEB] text-black border-0 w-full md:w-max h-full md:h-[40px] xl:h-[45px] mx-auto px-6 py-2 md:py-0 rounded-[45px] text-center md:text-left flex justify-center items-center cursor-pointer mb-2">
                            <span className="text-[22px] font-sans tracking-wide">Hire The Best; Forget The Rest!</span>
                        </div>
                        <h2 className="text-[30px] lg:text-[50px] 2xl:text-[55px] tracking-wide font-bold font-sans text-black text-center leading-tight">Why Engage Bitswits As Your <br /> Game Development Studio?</h2>
                    </div>
                    <div className="grid grid-cols-12 items-center">
                        <div className="col-span-12 lg:col-span-5">
                            <Image src={engageImg} alt="Brand" className="w-auto lg:w-[70%]" />
                        </div>
                        <div className="col-span-12 lg:col-span-7 sticky">
                            <div className="bg-[#eeeeee] rounded-[25px] flex flex-col gap-10 py-2">
                                <div className="relative px-5 md:px-14 opacity-20">
                                    {/* <Image src={polygon} alt="Brand" className="absolute left-[0%] top-[40%] w-[2%]" /> */}
                                    <h2 className="text-[24px] tracking-wide font-bold font-sans text-black leading-snug">Tabs On Latest Trends</h2>
                                    <p className="text-[15px] tracking-wide font-poppins text-black mt-2">We are passionate about gaming and strive to stay up-to-date on the latest trends in the industry. We are equipped with the necessary tools, knowledge, and skills to create an engaging video game experience.</p>
                                </div>
                                <div className="relative px-5 md:px-14">
                                    <Image src={polygon} alt="Brand" className="absolute left-[0%] top-[40%] w-[2%]" />
                                    <h2 className="text-[24px] tracking-wide font-bold font-sans text-black leading-snug">Tabs On Latest Trends</h2>
                                    <p className="text-[15px] tracking-wide font-poppins text-black mt-2">We are passionate about gaming and strive to stay up-to-date on the latest trends in the industry. We are equipped with the necessary tools, knowledge, and skills to create an engaging video game experience.</p>
                                </div>
                                <div className="relative px-5 md:px-14 opacity-20">
                                    {/* <Image src={polygon} alt="Brand" className="absolute left-[0%] top-[40%] w-[2%]" /> */}
                                    <h2 className="text-[24px] tracking-wide font-bold font-sans text-black leading-snug">Tabs On Latest Trends</h2>
                                    <p className="text-[15px] tracking-wide font-poppins text-black mt-2">We are passionate about gaming and strive to stay up-to-date on the latest trends in the industry. We are equipped with the necessary tools, knowledge, and skills to create an engaging video game experience.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}
export default Engage;