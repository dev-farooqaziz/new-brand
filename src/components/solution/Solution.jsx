import React from "react";
import Image from "next/image";
//========== Import Components
import CTA from "@/components/cta/CTA";
import { AutoPlaySlider } from "@/components";
//========== Import Images
import arrow from "media/icons/arrowOrg.png"


const Solution = ({ content }) => {
    const { subtitle, title, para, solutions } = content;
    return (
        <>
            <section className="py-10 lg:py-20">
                <div className="container relative">
                    <div className="mb-12">
                        {subtitle ? (
                            <div className="bg-[#EBEBEB] text-black border-0 w-full md:w-max h-full md:h-[40px] xl:h-[45px] mx-auto px-6 py-2 md:py-0 rounded-[45px] text-center flex justify-center items-center cursor-pointer mb-2">
                                <span className="text-[22px] font-sans tracking-wide">{subtitle}</span>
                            </div>
                        ) : null}
                        <h2 className="text-[30px] lg:text-[50px] 2xl:text-[55px] tracking-wide font-bold font-sans text-black text-center leading-tight">{title}</h2>
                        {para ? (
                            <p className="text-[15px] tracking-wide font-poppins text-black text-center my-4 lg:my-6">{para}</p>
                        ) : null}
                    </div>
                    <AutoPlaySlider options={{ align: "start" }} arrowPosition="absolute bottom-[-5%] md:bottom-[-5%] left-[3%] xl:left-[2%]">
                        {solutions.map((item, index) => (
                            <div key={index} className="grow-0 shrink-0 basis-[100%] md:basis-[50%] lg:basis-1/3 pl-5">
                                <div className="flex flex-col gap-10">
                                    <div className="relative">
                                        <Image src={item.image} alt="Brand" className="z-10" />
                                        <a href="tel:123456789" className="absolute right-[0%] lg:right-[-2%] xl:right-[-5%] bottom-[4%]">
                                            <Image src={arrow} alt="Arrow" className="w-[60%] lg:w-[45%] mx-auto hover:rotate-[45deg] transition-all duration-300" />
                                        </a>
                                    </div>
                                    <div className="flex flex-col gap-2 xl:gap-4 bg-[#EEEEEE] px-6 xl:px-10 pt-12 xl:pt-14 pb-6 xl:pb-8 rounded-t-none rounded-[30px] mt-[-18%] lg:mt-[-22%] xl:mt-[-18%] 2xl:mt-[-15%]">
                                        <h3 className="text-[18px] xl:text-[24px] tracking-wide font-bold font-sans text-black text-center leading-tight">{item.title}</h3>
                                        <p className="text-[14px] xl:text-[16px] tracking-wide font-sans text-black text-center leading-relaxed h-[70px]">{item.description}</p>
                                        <div className="w-max mx-auto mt-4">
                                            <CTA
                                                text="Get A Quote"
                                                bg="bg-black text-white"
                                            />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </AutoPlaySlider>
                </div>
            </section>
        </>
    );
}
export default Solution;