import React from "react";
import Image from "next/image";
//========== Import Components
import CTA from "@/components/cta/CTA";
//========== Import Images
import solution1 from "media/home/solution1.png"
import solution2 from "media/home/solution2.png"
import solution3 from "media/home/solution3.png"
import arrow from "media/icons/arrowOrg.png"


const Solution = () => {
    return (
        <>
            <section className="py-10 lgB:py-20">
                <div className="container">
                    <div className="heading mb-12">
                        <div className="bg-[#EBEBEB] text-black border-0 w-max mx-auto h-[40px] xl:h-[45px] px-10 rounded-[45px] flex items-center cursor-pointer mb-2">
                            <span className="text-[22px] font-sans tracking-wide">Delivering Excellence Daily</span>
                        </div>
                        <h2 className="text-[30px] lg:text-[50px] 2xl:text-[55px] tracking-wide font-bold font-sans text-black text-center leading-tight">Trusted Development Company <br /> For Tech Solutions</h2>
                        <p className="text-[16px] tracking-wide font-poppins text-black text-center my-4 lg:my-6">No matter what your niche is, we will help build mobile apps for your business. Choose our best application <br /> development company for building apps in any business vertical.</p>
                    </div>
                    <div className="grid grid-cols-12 gap-10">
                        <div className="col-span-4">
                            <div className="flex flex-col gap-10">
                                <div className="relative">
                                    <Image src={solution1} alt="Brand" className="z-10" />
                                    <a href="tel:123456789" className="absolute right-[-5%] bottom-[4%]">
                                        <Image src={arrow} alt="Brand" className="w-[45%] mx-auto" />
                                    </a>
                                </div>
                                <div className="px-10 flex flex-col gap-2 xl:gap-4 bg-[#EEEEEE] pt-16 pb-6 lgB:pb-8 rounded-t-none rounded-[30px] mt-[-30%] lgB:mt-[-22%] xl:mt-[-18%] 2xl:mt-[-15%]">
                                    <h3 className="text-[18px] lgB:text-[20px] xl:text-[26px] tracking-wide font-bold font-sans text-black text-center leading-tight">Game Development</h3>
                                    <p className="text-[14px] xl:text-[18px] tracking-wide font-sans text-black text-center leading-relaxed">Hire our game development company to captivate your audience and transport them to thrilling virtual worlds.</p>
                                    <div className="w-max mx-auto mt-4">
                                        <CTA
                                            text="Get A Quote"
                                            bg="bg-black text-white"
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-span-4">
                            <div className="flex flex-col gap-10">
                                <div className="relative">
                                    <Image src={solution2} alt="Brand" className="z-10" />
                                    <a href="tel:123456789" className="absolute right-[-5%] bottom-[4%]">
                                        <Image src={arrow} alt="Brand" className="w-[45%] mx-auto" />
                                    </a>
                                </div>
                                <div className="px-10 flex flex-col gap-2 xl:gap-4 bg-[#EEEEEE] pt-16 pb-6 lgB:pb-8 rounded-t-none rounded-[30px] mt-[-30%] lgB:mt-[-22%] xl:mt-[-18%] 2xl:mt-[-15%]">
                                    <h3 className="text-[18px] lgB:text-[20px] xl:text-[26px] tracking-wide font-bold font-sans text-black text-center leading-tight">Blockchain Development</h3>
                                    <p className="text-[14px] xl:text-[18px] tracking-wide font-sans text-black text-center leading-relaxed">Hire our game development company to captivate your audience and transport them to thrilling virtual worlds.</p>
                                    <div className="w-max mx-auto mt-4">
                                        <CTA
                                            text="Get A Quote"
                                            bg="bg-black text-white"
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-span-4">
                            <div className="flex flex-col gap-10">
                                <div className="relative">
                                    <Image src={solution3} alt="Brand" className="z-10" />
                                    <a href="tel:123456789" className="absolute right-[-5%] bottom-[4%]">
                                        <Image src={arrow} alt="Brand" className="w-[45%] mx-auto" />
                                    </a>
                                </div>
                                <div className="px-10 flex flex-col gap-2 xl:gap-4 bg-[#EEEEEE] pt-16 pb-6 lgB:pb-8 rounded-t-none rounded-[30px] mt-[-30%] lgB:mt-[-22%] xl:mt-[-18%] 2xl:mt-[-15%]">
                                    <h3 className="text-[18px] lgB:text-[20px] xl:text-[26px] tracking-wide font-bold font-sans text-black text-center leading-tight">Artificial Intelligence (Ai)</h3>
                                    <p className="text-[14px] xl:text-[18px] tracking-wide font-sans text-black text-center leading-relaxed">Hire our game development company to captivate your audience and transport them to thrilling virtual worlds.</p>
                                    <div className="w-max mx-auto mt-4">
                                        <CTA
                                            text="Get A Quote"
                                            bg="bg-black text-white"
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}
export default Solution;