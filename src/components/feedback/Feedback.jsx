import React from "react";
import Image from "next/image";
//========== Import Components
import CTA from "@/components/cta/CTA";
//========== Import Images
import feedback from "media/images/feedback.png"
import clutchLogo from "media/icons/clutchLogo.png"
import clutchIcon from "media/icons/clutchIcon.png"
import client from "media/images/client.png"
import starts from "media/icons/starts.png"


const Feedback = () => {
    return (
        <>
            <section className="py-10 lgB:py-20">
                <div className="container">
                    <div className="heading mb-12">
                        <div className="bg-[#EBEBEB] text-black border-0 w-max h-[40px] xl:h-[45px] px-6 rounded-[45px] flex items-center cursor-pointer mb-2">
                            <span className="text-[22px] font-sans tracking-wide">Our Client’s Feedback Has Been</span>
                        </div>
                        <h2 className="text-[30px] lg:text-[50px] 2xl:text-[55px] tracking-wide font-bold font-sans text-black leading-snug">Nothing Short Of Amazing!</h2>
                    </div>
                    <div className="grid grid-cols-12 justify-between gap-5">
                        <div className="col-span-4">
                            <div className="relative pt-20 pb-8 flex flex-col justify-center items-center gap-20 h-full">
                                <Image src={feedback} alt="Brand" className="absolute top-0 left-0 -z-10 w-full h-full" />
                                <Image src={clutchLogo} alt="Brand" className="w-[45%]" />
                                <div className="w-max">
                                    <CTA
                                        text="Go To Clutch"
                                        bg="bg-[#FBA900] text-white"
                                    />
                                </div>
                                <div className="flex items-center justify-center gap-2">
                                    <Image src={clutchIcon} alt="Brand" className="w-[20%]" />
                                    <p className="text-[20px] font-sans text-white tracking-wide">50 Reviews</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-span-8">
                            <div className="grid grid-cols-12 gap-5">
                                <div className="col-span-6">
                                    <div className="bg-[#EEEEEE] py-16 rounded-[25px] h-full">
                                        <div className="flex items-center gap-5 px-10">
                                            <Image src={client} alt="Brand" className="w-[15%]" />
                                            <Image src={starts} alt="Brand" className="w-[35%]" />
                                        </div>
                                        <div className="mt-5 relative px-10">
                                            <h3 className="text-[20px] font-sans tracking-wide font-semibold text-black mb-1">Vivien Francis</h3>
                                            <p className="text-[11px] xl:text-[13px] font-sans font-semibold tracking-wide text-black pb-5">Digital Marketing Consultant of Asia School of Business</p>
                                            <p className="absolute left-0 w-[100%] h-[2px] bg-[#BCBCBC] text-[#BCBCBC]"></p>
                                            <p className="text-[16px] font-sans tracking-wide leading-relaxed xl:leading-loose text-black pt-5">I do not give five star reviews easily and in fact save them for those who have truly exceeded my high expectations. Derrick and his team have earned my loyalty and respect through their transparent efforts of always placing the customer first.</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-span-6">
                                    <div className="bg-[#EEEEEE] py-16 rounded-[25px] h-full">
                                        <div className="flex items-center gap-5 px-10">
                                            <Image src={client} alt="Brand" className="w-[15%]" />
                                            <Image src={starts} alt="Brand" className="w-[35%]" />
                                        </div>
                                        <div className="mt-5 relative px-10">
                                            <h3 className="text-[20px] font-sans tracking-wide font-semibold text-black mb-1">Vivien Francis</h3>
                                            <p className="text-[11px] xl:text-[13px] font-sans font-semibold tracking-wide text-black pb-5">Digital Marketing Consultant of Asia School of Business</p>
                                            <p className="absolute left-0 w-[100%] h-[2px] bg-[#BCBCBC] text-[#BCBCBC]"></p>
                                            <p className="text-[16px] font-sans tracking-wide leading-relaxed xl:leading-loose text-black pt-5">I do not give five star reviews easily and in fact save them for those who have truly exceeded my high expectations. Derrick and his team have earned my loyalty and respect through their transparent efforts of always placing the customer first.</p>
                                        </div>
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
export default Feedback;