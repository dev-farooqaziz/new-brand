import React from "react";
import Image from "next/image";
//========== Import Components
import CTA from "@/components/cta/CTA";
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


const Choose = () => {
    return (
        <>
            <section className="py-10 lgB:py-20">
                <div className="container">
                    <div className="heading mb-12">
                        <div className="bg-[#EBEBEB] text-black border-0 w-max mx-auto h-[40px] xl:h-[45px] px-10 rounded-[45px] flex items-center cursor-pointer mb-2">
                            <span className="text-[22px] font-sans tracking-wide">Why Choose Us</span>
                        </div>
                        <h2 className="text-[30px] lg:text-[50px] 2xl:text-[55px] tracking-wide font-bold font-sans text-black text-center leading-tight">What Makes Bitswits The Most Recommended <br /> Solution Provider Company?</h2>
                        <p className="text-[16px] tracking-wide font-poppins text-black text-center my-4 lg:my-6 px-16">As the leading Solution Provider, Our expertise isn’t limited to one area; we excel across various technological frontiers, including bespoke software solutions, advanced mobile app development, engaging game design, pioneering blockchain projects, and cutting-edge AI innovations. We have been crafting and will continue to develop unique apps across various platforms, including iOS, Android, Xamarin, and beyond. Our unbridled passion for the most cutting-edge technologies fuels us to continually evolve and innovate, allowing us to provide unparalleled solutions to our valued clients instantly. Partner with Bitswits, where every project is a step towards redefining technological excellence and driving your success.</p>
                    </div>
                    <div className="flex flex-wrap items-center gap-5">
                        <div className="border-[2px] border-[#b9b8b8] rounded-[20px] py-3 flex items-center justify-center gap-5 w-[350px] h-full">
                            <Image src={choose1} alt="Brand" className="w-[15%]" />
                            <p className="text-[16px] tracking-wide font-poppins text-black">Experienced Professionals</p>
                        </div>
                        <div className="border-[2px] border-[#b9b8b8] rounded-[20px] py-3 flex items-center justify-center gap-5 w-[350px] h-full">
                            <Image src={choose2} alt="Brand" className="w-[15%]" />
                            <p className="text-[16px] tracking-wide font-poppins text-black">On-Time Delivery</p>
                        </div>
                        <div className="border-[2px] border-[#b9b8b8] rounded-[20px] py-3 flex items-center justify-center gap-5 w-[350px] h-full">
                            <Image src={choose3} alt="Brand" className="w-[15%]" />
                            <p className="text-[16px] tracking-wide font-poppins text-black">Cost-Effective Solutions</p>
                        </div>
                        <div className="border-[2px] border-[#b9b8b8] rounded-[20px] py-3 flex items-center justify-center gap-5 w-[350px] h-full">
                            <Image src={choose4} alt="Brand" className="w-[15%]" />
                            <p className="text-[16px] tracking-wide font-poppins text-black">Experienced Professionals</p>
                        </div>
                        <div className="border-[2px] border-[#b9b8b8] rounded-[20px] py-3 flex items-center justify-center gap-5 w-[350px] h-full">
                            <Image src={choose5} alt="Brand" className="w-[15%]" />
                            <p className="text-[16px] tracking-wide font-poppins text-black">Experienced Professionals</p>
                        </div>
                        <div className="border-[2px] border-[#b9b8b8] rounded-[20px] py-3 flex items-center justify-center gap-5 w-[350px] h-full">
                            <Image src={choose6} alt="Brand" className="w-[15%]" />
                            <p className="text-[16px] tracking-wide font-poppins text-black">On-Time Delivery</p>
                        </div>
                        <div className="border-[2px] border-[#b9b8b8] rounded-[20px] py-3 flex items-center justify-center gap-5 w-[350px] h-full">
                            <Image src={choose7} alt="Brand" className="w-[15%]" />
                            <p className="text-[16px] tracking-wide font-poppins text-black">Cost-Effective Solutions</p>
                        </div>
                        <div className="border-[2px] border-[#b9b8b8] rounded-[20px] py-3 flex items-center justify-center gap-5 w-[350px] h-full">
                            <Image src={choose8} alt="Brand" className="w-[15%]" />
                            <p className="text-[16px] tracking-wide font-poppins text-black">Experienced Professionals</p>
                        </div>
                        <div className="border-[2px] border-[#b9b8b8] rounded-[20px] py-3 flex items-center justify-center gap-5 w-[350px] h-full">
                            <Image src={choose9} alt="Brand" className="w-[15%]" />
                            <p className="text-[16px] tracking-wide font-poppins text-black">Experienced Professionals</p>
                        </div>
                        <div className="border-[2px] border-[#b9b8b8] rounded-[20px] py-3 flex items-center justify-center gap-5 w-[350px] h-full">
                            <Image src={choose1} alt="Brand" className="w-[15%]" />
                            <p className="text-[16px] tracking-wide font-poppins text-black">On-Time Delivery</p>
                        </div>
                        <div className="border-[2px] border-[#b9b8b8] rounded-[20px] py-3 flex items-center justify-center gap-5 w-[350px] h-full">
                            <Image src={choose2} alt="Brand" className="w-[15%]" />
                            <p className="text-[16px] tracking-wide font-poppins text-black">Cost-Effective Solutions</p>
                        </div>
                        <div className="border-[2px] border-[#b9b8b8] rounded-[20px] py-3 flex items-center justify-center gap-5 w-[350px] h-full">
                            <Image src={choose3} alt="Brand" className="w-[15%]" />
                            <p className="text-[16px] tracking-wide font-poppins text-black">Experienced Professionals</p>
                        </div>
                    </div>
                    <div className="w-max mx-auto mt-14">
                        <CTA
                            text="Choose Expertise, Choose Bitswits – Let's Get Started"
                            bg="bg-black text-white"
                        />
                    </div>
                </div>
            </section>
        </>
    );
}
export default Choose;