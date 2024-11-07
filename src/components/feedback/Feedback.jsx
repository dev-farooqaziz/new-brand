import React from "react";
import Image from "next/image";
//========== Import Components
import CTA from "@/components/cta/CTA2";
import { AutoPlaySlider } from "@/components";
//========== Import Images
import feedback from "media/images/feedback.png"
import clutchLogo from "media/icons/clutchLogo.png"
import clutchIcon from "media/icons/clutchIcon.png"


const Feedback = ({ content }) => {
    const { title, subtitle, testimonials } = content;
    return (
        <>
            <section className="pt-10 pb-20 lg:py-20">
                <div className="container">
                    <div className="mb-12">
                        <div className="bg-[#EBEBEB] text-black border-0 w-full md:w-max h-full md:h-[40px] xl:h-[45px] px-6 py-2 md:py-0 rounded-[45px] text-center md:text-left flex justify-center md:justify-start items-center cursor-pointer mb-2">
                            <span className="text-[22px] font-sans tracking-wide">{title}</span>
                        </div>
                        <h2 className="text-[30px] lg:text-[50px] 2xl:text-[55px] tracking-wide font-bold font-sans text-black leading-snug">{subtitle}</h2>
                    </div>
                    <div className="grid grid-cols-12 justify-between gap-5 relative">
                        <div className="col-span-12 md:col-span-6 lg:col-span-4">
                            <div className="relative z-10 rounded-[25px] overflow-hidden pt-12 pb-8 flex flex-col justify-center items-center gap-20 h-full">
                                <Image src={feedback} alt="Brand" fill={true} className="-z-10 object-cover object-bottom w-full h-full" />
                                <Image src={clutchLogo} alt="Brand" className="w-[30%]" />
                                <div className="w-max">
                                    <CTA
                                        text="Go To Clutch"
                                        bg="bg-[#FBA900]"
                                    />
                                </div>
                                <div className="flex items-center justify-center gap-2">
                                    <Image src={clutchIcon} alt="Brand" className="w-[20%]" />
                                    <p className="text-[20px] font-sans text-white tracking-wide">50 Reviews</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-span-12 md:col-span-6 lg:col-span-8">
                            <AutoPlaySlider options={{ align: "start" }} arrowPosition="absolute bottom-[-5%] md:bottom-[-10%] right-[1%]">
                                {testimonials.map((item, index) => (
                                    <div key={index} className="grow-0 shrink-0 basis-[100%] lg:basis-[50%] pl-5">
                                        <div className="bg-[#EEEEEE] py-8 lg:py-4 xl:py-12 rounded-[25px] h-full">
                                            <div className="flex items-center gap-5 px-10">
                                                <Image src={item.clientImage} alt="Brand" className="w-[15%]" />
                                                <Image src={item.starsImage} alt="Brand" className="w-[35%]" />
                                            </div>
                                            <div className="mt-5 relative px-4 xl:px-10">
                                                <h3 className="text-[20px] font-sans tracking-wide font-semibold text-black mb-1">{item.clientName}</h3>
                                                <p className="text-[11px] xl:text-[13px] font-sans font-semibold tracking-wide text-black pb-5">{item.clientTitle}</p>
                                                <p className="absolute left-0 w-[100%] h-[2px] bg-[#BCBCBC] text-[#BCBCBC]"></p>
                                                <p className="text-[16px] font-sans tracking-wide leading-relaxed xl:leading-loose text-black pt-5">{item.testimonialText}</p>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </AutoPlaySlider>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}
export default Feedback;