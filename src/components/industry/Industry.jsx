import React from "react";
import Image from "next/image";
//========== Import Images
import indusIcon1 from "media/icons/industry/indusIcon1.png"
import indusIcon1a from "media/icons/industry/indusIcon1a.png"
import indusIconBg1 from "media/icons/industry/indusIconBg1.png"
import indusIcon2 from "media/icons/industry/indusIcon2.png"
import indusIcon2a from "media/icons/industry/indusIcon2a.png"
import indusIconBg2 from "media/icons/industry/indusIconBg2.png"
import indusIcon3 from "media/icons/industry/indusIcon3.png"
import indusIcon3a from "media/icons/industry/indusIcon3a.png"
import indusIconBg3 from "media/icons/industry/indusIconBg3.png"
import indusIcon4 from "media/icons/industry/indusIcon4.png"
import indusIcon4a from "media/icons/industry/indusIcon4a.png"
import indusIconBg4 from "media/icons/industry/indusIconBg4.png"
import indusIcon5 from "media/icons/industry/indusIcon5.png"
import indusIcon5a from "media/icons/industry/indusIcon5a.png"
import indusIconBg5 from "media/icons/industry/indusIconBg5.png"
import indusIcon6 from "media/icons/industry/indusIcon6.png"
import indusIcon6a from "media/icons/industry/indusIcon6a.png"
import indusIconBg6 from "media/icons/industry/indusIconBg6.png"
import indusIcon7 from "media/icons/industry/indusIcon7.png"
import indusIcon7a from "media/icons/industry/indusIcon7a.png"
import indusIconBg7 from "media/icons/industry/indusIconBg7.png"
import indusIcon8 from "media/icons/industry/indusIcon8.png"
import indusIcon8a from "media/icons/industry/indusIcon8a.png"
import indusIconBg8 from "media/icons/industry/indusIconBg8.png"
import indusIcon9 from "media/icons/industry/indusIcon9.png"
import indusIcon9a from "media/icons/industry/indusIcon9a.png"
import indusIconBg9 from "media/icons/industry/indusIconBg9.png"
import indusIcon10 from "media/icons/industry/indusIcon10.png"
import indusIcon10a from "media/icons/industry/indusIcon10a.png"
import indusIconBg10 from "media/icons/industry/indusIconBg10.png"
import indusIcon11 from "media/icons/industry/indusIcon11.png"
import indusIcon11a from "media/icons/industry/indusIcon11a.png"
import indusIconBg11 from "media/icons/industry/indusIconBg11.png"
import indusIcon12 from "media/icons/industry/indusIcon12.png"
import indusIcon12a from "media/icons/industry/indusIcon12a.png"
import indusIconBg12 from "media/icons/industry/indusIconBg12.png"


const Industry = () => {
    return (
        <>
            <section className="py-10 lgB:py-20">
                <div className="container">
                    <div className="heading">
                        <h2 className="text-[30px] lg:text-[50px] 2xl:text-[55px] tracking-wide font-bold font-sans text-black text-center leading-tight">Industry We Serve</h2>
                        <p className="text-[16px] tracking-wide font-poppins text-black text-center my-4 lg:my-6">No matter what your niche is, we will help build mobile apps for your business. Choose our best application <br /> development company for building apps in any business vertical.</p>
                        <div className="w-max mx-auto flex bg-[#DFDFDF] p-1 rounded-[45px]">
                            <span className="bg-[#fba900] text-white border-0 h-[40px] xl:h-[45px] px-6 rounded-[45px] flex items-center text-[20px] font-sans tracking-wide cursor-pointer">Select Your Industry</span>
                            <span className="bg-transparent text-black border-0 h-[40px] xl:h-[45px] px-3 2xl:px-6 rounded-[45px] flex items-center text-[20px] font-sans tracking-wide cursor-pointer">Discover Our Impact.</span>
                        </div>
                    </div>
                    <div className="grid grid-cols-12 items-center gap-5 mt-10 lg:mt-16">
                        <div className="col-span-6 md:col-span-4 lg:col-span-3 xl:col-span-2">
                            <div className="flex flex-col gap-2 items-center justify-center border-[2px] border-[#D8D8D8] rounded-xl h-[140px] cursor-pointer group transition delay-150 duration-300 ease-in-out relative">
                                <Image src={indusIcon1} alt="Brand" className="w-[25%] lg:w-[20%] xl:w-[24%] block group-hover:hidden" />
                                <Image src={indusIcon1a} alt="Brand" className="w-[25%] lg:w-[20%] xl:w-[24%] hidden group-hover:block" />
                                <Image src={indusIconBg1} alt="Brand" className="absolute top-0 left-0 -z-10 w-full h-full hidden group-hover:block" />
                                <p className="text-[16px] xl:text-[20px] font-sans font-normal text-black group-hover:text-white mb-0">Healthcare</p>
                            </div>
                        </div>
                        <div className="col-span-6 md:col-span-4 lg:col-span-3 xl:col-span-2">
                            <div className="flex flex-col gap-2 items-center justify-center border-[2px] border-[#D8D8D8] rounded-xl hover:border-0 h-[140px] cursor-pointer group transition delay-150 duration-300 ease-in-out relative">
                                <Image src={indusIcon2} alt="Brand" className="w-[25%] lg:w-[20%] xl:w-[24%] block group-hover:hidden" />
                                <Image src={indusIcon2a} alt="Brand" className="w-[25%] lg:w-[20%] xl:w-[24%] hidden group-hover:block" />
                                <Image src={indusIconBg2} alt="Brand" className="absolute top-0 left-0 -z-10 w-full h-full hidden group-hover:block" />
                                <p className="text-[16px] xl:text-[20px] font-sans font-normal text-black group-hover:text-white mb-0">E-Commerce</p>
                            </div>
                        </div>
                        <div className="col-span-6 md:col-span-4 lg:col-span-3 xl:col-span-2">
                            <div className="flex flex-col gap-2 items-center justify-center border-[2px] border-[#D8D8D8] rounded-xl hover:border-0 h-[140px] cursor-pointer group transition delay-150 duration-300 ease-in-out relative">
                                <Image src={indusIcon3} alt="Brand" className="w-[25%] lg:w-[20%] xl:w-[24%] block group-hover:hidden" />
                                <Image src={indusIcon3a} alt="Brand" className="w-[25%] lg:w-[20%] xl:w-[24%] hidden group-hover:block" />
                                <Image src={indusIconBg3} alt="Brand" className="absolute top-0 left-0 -z-10 w-full h-full hidden group-hover:block" />
                                <p className="text-[16px] xl:text-[20px] font-sans font-normal text-black group-hover:text-white mb-0">Education</p>
                            </div>
                        </div>
                        <div className="col-span-6 md:col-span-4 lg:col-span-3 xl:col-span-2">
                            <div className="flex flex-col gap-2 items-center justify-center border-[2px] border-[#D8D8D8] rounded-xl hover:border-0 h-[140px] cursor-pointer group transition delay-150 duration-300 ease-in-out relative">
                                <Image src={indusIcon4} alt="Brand" className="w-[25%] lg:w-[20%] xl:w-[24%] block group-hover:hidden" />
                                <Image src={indusIcon4a} alt="Brand" className="w-[25%] lg:w-[20%] xl:w-[24%] hidden group-hover:block" />
                                <Image src={indusIconBg4} alt="Brand" className="absolute top-0 left-0 -z-10 w-full h-full hidden group-hover:block" />
                                <p className="text-[16px] xl:text-[20px] font-sans font-normal text-black group-hover:text-white mb-0">Banking</p>
                            </div>
                        </div>
                        <div className="col-span-6 md:col-span-4 lg:col-span-3 xl:col-span-2">
                            <div className="flex flex-col gap-2 items-center justify-center border-[2px] border-[#D8D8D8] rounded-xl hover:border-0 h-[140px] cursor-pointer group transition delay-150 duration-300 ease-in-out relative">
                                <Image src={indusIcon5} alt="Brand" className="w-[25%] lg:w-[20%] xl:w-[24%] block group-hover:hidden" />
                                <Image src={indusIcon5a} alt="Brand" className="w-[25%] lg:w-[20%] xl:w-[24%] hidden group-hover:block" />
                                <Image src={indusIconBg5} alt="Brand" className="absolute top-0 left-0 -z-10 w-full h-full hidden group-hover:block" />
                                <p className="text-[16px] xl:text-[20px] font-sans font-normal text-black group-hover:text-white mb-0">Lifestyle</p>
                            </div>
                        </div>
                        <div className="col-span-6 md:col-span-4 lg:col-span-3 xl:col-span-2">
                            <div className="flex flex-col gap-2 items-center justify-center border-[2px] border-[#D8D8D8] rounded-xl hover:border-0 h-[140px] cursor-pointer group transition delay-150 duration-300 ease-in-out relative">
                                <Image src={indusIcon6} alt="Brand" className="w-[25%] lg:w-[20%] xl:w-[24%] block group-hover:hidden" />
                                <Image src={indusIcon6a} alt="Brand" className="w-[25%] lg:w-[20%] xl:w-[24%] hidden group-hover:block" />
                                <Image src={indusIconBg6} alt="Brand" className="absolute top-0 left-0 -z-10 w-full h-full hidden group-hover:block" />
                                <p className="text-[16px] xl:text-[20px] font-sans font-normal text-black group-hover:text-white mb-0">Sports</p>
                            </div>
                        </div>
                        <div className="col-span-6 md:col-span-4 lg:col-span-3 xl:col-span-2">
                            <div className="flex flex-col gap-2 items-center justify-center border-[2px] border-[#D8D8D8] rounded-xl hover:border-0 h-[140px] cursor-pointer group transition delay-150 duration-300 ease-in-out relative">
                                <Image src={indusIcon7} alt="Brand" className="w-[25%] lg:w-[20%] xl:w-[24%] block group-hover:hidden" />
                                <Image src={indusIcon7a} alt="Brand" className="w-[25%] lg:w-[20%] xl:w-[24%] hidden group-hover:block" />
                                <Image src={indusIconBg7} alt="Brand" className="absolute top-0 left-0 -z-10 w-full h-full hidden group-hover:block" />
                                <p className="text-[16px] xl:text-[20px] font-sans font-normal text-black group-hover:text-white mb-0">Restaurants</p>
                            </div>
                        </div>
                        <div className="col-span-6 md:col-span-4 lg:col-span-3 xl:col-span-2">
                            <div className="flex flex-col gap-2 items-center justify-center border-[2px] border-[#D8D8D8] rounded-xl hover:border-0 h-[140px] cursor-pointer group transition delay-150 duration-300 ease-in-out relative">
                                <Image src={indusIcon8} alt="Brand" className="w-[25%] lg:w-[20%] xl:w-[24%] block group-hover:hidden" />
                                <Image src={indusIcon8a} alt="Brand" className="w-[25%] lg:w-[20%] xl:w-[24%] hidden group-hover:block" />
                                <Image src={indusIconBg8} alt="Brand" className="absolute top-0 left-0 -z-10 w-full h-full hidden group-hover:block" />
                                <p className="text-[16px] xl:text-[20px] font-sans font-normal text-black group-hover:text-white mb-0">Travel</p>
                            </div>
                        </div>
                        <div className="col-span-6 md:col-span-4 lg:col-span-3 xl:col-span-2">
                            <div className="flex flex-col gap-2 items-center justify-center border-[2px] border-[#D8D8D8] rounded-xl hover:border-0 h-[140px] cursor-pointer group transition delay-150 duration-300 ease-in-out relative">
                                <Image src={indusIcon9} alt="Brand" className="w-[25%] lg:w-[20%] xl:w-[24%] block group-hover:hidden" />
                                <Image src={indusIcon9a} alt="Brand" className="w-[25%] lg:w-[20%] xl:w-[24%] hidden group-hover:block" />
                                <Image src={indusIconBg9} alt="Brand" className="absolute top-0 left-0 -z-10 w-full h-full hidden group-hover:block" />
                                <p className="text-[16px] xl:text-[20px] font-sans font-normal text-black group-hover:text-white mb-0">Social</p>
                            </div>
                        </div>
                        <div className="col-span-6 md:col-span-4 lg:col-span-3 xl:col-span-2">
                            <div className="flex flex-col gap-2 items-center justify-center border-[2px] border-[#D8D8D8] rounded-xl hover:border-0 h-[140px] cursor-pointer group transition delay-150 duration-300 ease-in-out relative">
                                <Image src={indusIcon10} alt="Brand" className="w-[25%] lg:w-[20%] xl:w-[24%] block group-hover:hidden" />
                                <Image src={indusIcon10a} alt="Brand" className="w-[25%] lg:w-[20%] xl:w-[24%] hidden group-hover:block" />
                                <Image src={indusIconBg10} alt="Brand" className="absolute top-0 left-0 -z-10 w-full h-full hidden group-hover:block" />
                                <p className="text-[16px] xl:text-[20px] font-sans font-normal text-black group-hover:text-white mb-0">Entertainment</p>
                            </div>
                        </div>
                        <div className="col-span-6 md:col-span-4 lg:col-span-3 xl:col-span-2">
                            <div className="flex flex-col gap-2 items-center justify-center border-[2px] border-[#D8D8D8] rounded-xl hover:border-0 h-[140px] cursor-pointer group transition delay-150 duration-300 ease-in-out relative">
                                <Image src={indusIcon11} alt="Brand" className="w-[25%] lg:w-[20%] xl:w-[24%] block group-hover:hidden" />
                                <Image src={indusIcon11a} alt="Brand" className="w-[25%] lg:w-[20%] xl:w-[24%] hidden group-hover:block" />
                                <Image src={indusIconBg11} alt="Brand" className="absolute top-0 left-0 -z-10 w-full h-full hidden group-hover:block" />
                                <p className="text-[16px] xl:text-[20px] font-sans font-normal text-black group-hover:text-white mb-0">Game</p>
                            </div>
                        </div>
                        <div className="col-span-6 md:col-span-4 lg:col-span-3 xl:col-span-2">
                            <div className="flex flex-col gap-2 items-center justify-center border-[2px] border-[#D8D8D8] rounded-xl hover:border-0 h-[140px] cursor-pointer group transition delay-150 duration-300 ease-in-out relative">
                                <Image src={indusIcon12} alt="Brand" className="w-[25%] lg:w-[20%] xl:w-[24%] block group-hover:hidden" />
                                <Image src={indusIcon12a} alt="Brand" className="w-[25%] lg:w-[20%] xl:w-[24%] hidden group-hover:block" />
                                <Image src={indusIconBg12} alt="Brand" className="absolute top-0 left-0 -z-10 w-full h-full hidden group-hover:block" />
                                <p className="text-[16px] xl:text-[20px] font-sans font-normal text-black group-hover:text-white mb-0">Transportation</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}
export default Industry;