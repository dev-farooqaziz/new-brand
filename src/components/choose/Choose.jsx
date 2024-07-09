import React from "react";
import Image from "next/image";
//========== Import Components
import CTA from "@/components/cta/CTA";
import { AutoScrollSlider } from "@/components";
//========== Import Images
import choose1 from "media/icons/choose/choose-1.png"
import choose2 from "media/icons/choose/choose-2.png"
import choose3 from "media/icons/choose/choose-3.png"
import choose4 from "media/icons/choose/choose-4.png"
import choose5 from "media/icons/choose/choose-5.png"
import choose6 from "media/icons/choose/choose-6.png"
import choose7 from "media/icons/choose/choose-7.png"
import choose8 from "media/icons/choose/choose-8.png"
import choose9 from "media/icons/choose/choose-9.png"

const row1 = [
    ["Experienced Professionals", choose1],
    ["On-Time Delivery", choose2],
    ["Cost-Effective Solutions", choose3],
    ["Experienced Professionals", choose1],
    ["On-Time Delivery", choose2],
    ["Cost-Effective Solutions", choose3],
]

const row2 = [
    ["Scalable and Secure Apps", choose4],
    ["User-Centric Design", choose5],
    ["Customized Development", choose6],
    ["Scalable and Secure Apps", choose4],
    ["User-Centric Design", choose5],
    ["Customized Development", choose6],
]

const row3 = [
    ["Error-Free Delivery", choose7],
    ["Transparent Communication", choose8],
    ["Support and Maintenance", choose9],
    ["Error-Free Delivery", choose7],
    ["Transparent Communication", choose8],
    ["Support and Maintenance", choose9],
]

const Choose = () => {
    return (
        <>
            <section className="py-10 lg:py-20">
                <div className="container">
                    <div className="mb-12">
                        <div className="bg-[#EBEBEB] text-black border-0 w-full md:w-max h-full md:h-[40px] xl:h-[45px] mx-auto px-6 py-2 md:py-0 rounded-[45px] text-center flex justify-center items-center cursor-pointer mb-2">
                            <span className="text-[22px] font-sans tracking-wide">Why Choose Us</span>
                        </div>
                        <h2 className="text-[30px] lg:text-[50px] 2xl:text-[55px] tracking-wide font-bold font-sans text-black text-center leading-tight">What Makes Bitswits The Most Recommended <br /> Solution Provider Company?</h2>
                        <p className="text-[15px] tracking-wide font-poppins text-black text-justify lg:text-center my-4 lg:my-6 px-0 lg:px-16">As the leading Solution Provider, Our expertise isn’t limited to one area; we excel across various technological frontiers, including bespoke software solutions, advanced mobile app development, engaging game design, pioneering blockchain projects, and cutting-edge AI innovations. We have been crafting and will continue to develop unique apps across various platforms, including iOS, Android, Xamarin, and beyond. Our unbridled passion for the most cutting-edge technologies fuels us to continually evolve and innovate, allowing us to provide unparalleled solutions to our valued clients instantly. Partner with Bitswits, where every project is a step towards redefining technological excellence and driving your success.</p>
                    </div>
                </div>
                <div>
                    <AutoScrollSlider>
                        {row1.map(([txt, img], i) => (
                            <div key={i} className="grow-0 shrink-0 basis-[85%] md:basis-[45%] lg:basis-[40%] xl:basis-[30%] pl-4">
                                <div className="border-[2px] border-[#b9b8b8] rounded-[20px] py-3 flex items-center justify-center gap-5 h-[80px]">
                                    <Image src={img} alt="Brand" className="w-[15%]" />
                                    <p className="text-[16px] tracking-wide font-poppins text-black">
                                        {txt}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </AutoScrollSlider>
                    <AutoScrollSlider wrapperClasses="my-5" direction="backword">
                        {row2.map(([txt, img], i) => (
                            <div key={i} className="grow-0 shrink-0 basis-[85%] md:basis-[45%] lg:basis-[40%] xl:basis-[30%] pl-4">
                                <div className="border-[2px] border-[#b9b8b8] rounded-[20px] py-3 flex items-center justify-center gap-5 h-[80px]">
                                    <Image src={img} alt="Brand" className="w-[15%]" />
                                    <p className="text-[16px] tracking-wide font-poppins text-black">
                                        {txt}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </AutoScrollSlider>
                    <AutoScrollSlider>
                        {row3.map(([txt, img], i) => (
                            <div key={i} className="grow-0 shrink-0 basis-[85%] md:basis-[45%] lg:basis-[40%] xl:basis-[30%] pl-4">
                                <div className="border-[2px] border-[#b9b8b8] rounded-[20px] py-3 flex items-center justify-center gap-5 h-[80px]">
                                    <Image src={img} alt="Brand" className="w-[15%]" />
                                    <p className="text-[16px] tracking-wide font-poppins text-black">
                                        {txt}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </AutoScrollSlider>
                </div>
                <div className="w-max mx-auto mt-14">
                    <CTA
                        text="Choose Expertise – Let's Get Started"
                        bg="bg-black text-white"
                    />
                </div>
            </section>
        </>
    );
}
export default Choose;