import React from "react";
import Image from "next/image";
//========== Import Components
import CTA from "@/components/cta/CTA2";
//========== Import Images
import heroReview3 from "media/icons/heroreview3.png"
import heroReview4 from "media/icons/heroreview4.png"


const Hero3 = ({ content }) => {
    const { BanImg1, title, subtitle, para, heroImg } = content;
    return (
        <>
            <section className="py-10 xl:pt-8 xl:pb-20">
                <div className="container">
                    <div className="grid grid-cols-12 gap-5 relative z-10 rounded-[25px] overflow-hidden h-full xl:h-[92vh] py-10 lg:py-0 bg-black lg:bg-none">
                        <Image src={BanImg1} alt="Brand" fill={true} className="hidden lg:block -z-10 object-cover object-bottom" />
                        <div className="col-span-12 lg:col-span-6">
                            <div className="px-6 lg:px-12 h-full flex flex-col justify-center">
                                <h1 className="text-[14px] md:text-[16px] xl:text-[20px] 2xl:text-[24px] tracking-wide font-semibold font-sans text-white rounded-full backdrop-blur-sm bg-white/50 lg:bg-black/50 py-2 px-4 ms-[-1%]">{title}</h1>
                                <h2 className="text-[24px] md:text-[28px] lg:text-[34px] xl:text-[40px] 2xl:text-[50px] tracking-wide font-semibold font-sans text-white mt-3 xl:mt-5 leading-tight">{subtitle}</h2>
                                {para ? (
                                    <p className="text-[15px] tracking-wide font-poppins text-white mt-3 xl:mt-5">{para}</p>
                                ) : null}
                                <div className="flex items-center justify-start gap-5 mt-8 mb-10 w-max md:w-auto">
                                    <CTA
                                        text="Book A Call"
                                        bg="bg-[#FBA900] text-white"
                                    />
                                    <CTA
                                        text="Let's Connect"
                                        bg="bg-[#FBA900] text-white"
                                        href="javascript:$zopim.livechat.window.show();"
                                    />
                                </div>
                                <div className="flex items-center gap-10">
                                    <div className="flex items-center justify-center">
                                        <Image src={heroReview3} alt="Brand" />
                                    </div>
                                    <div className="flex items-center justify-center">
                                        <Image src={heroReview4} alt="Brand" />
                                    </div>
                                </div>
                            </div>
                        </div>
                        {heroImg ? (
                            <div className="col-span-5 lg:col-span-6 hidden lg:block">
                                <div>
                                    <Image src={heroImg} alt="Brand" />
                                </div>
                            </div>
                        ) : null}
                    </div>
                </div>
            </section>
        </>
    );
}
export default Hero3;