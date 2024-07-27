import React from "react";
import Image from "next/image";
//========== Import Images
import ArrowBlk from "media/icons/arrowBlk.png"
import heroClient from "media/icons/heroClient.png"
import heroReview from "media/icons/heroReview.png"
import heroreviews from "media/icons/heroreviews.png"
// import heroreview1 from "media/icons/heroreview1.png"
// import heroreview2 from "media/icons/heroreview2.png"
import clutchsBg from "media/mobileApp/clutchsBg.png"
import banLogos from "media/icons/bannerLogos/banLogos.png"

const Hero2 = ({ content }) => {
    const { BanImg1, title, subtitle, para } = content;
    return (
        <>
            <section className="py-10 lg:pt-8 lg:pb-20">
                <div className="container">
                    <div className="grid grid-cols-12 gap-5">
                        <div className="col-span-12 lg:col-span-7 relative z-10 rounded-[25px] overflow-hidden pb-16 lg:pb-0 h-full bg-black lg:bg-none">
                            <Image src={BanImg1} alt="Brand" fill={true} className="hidden lg:block -z-10 object-cover object-bottom" />
                            <div className="mt-10">
                                <h1 className="text-[16px] xl:text-[20px] 2xl:text-[24px] tracking-wide font-semibold font-sans text-white backdrop-blur-sm bg-white/20 py-2 px-6 lg:px-8 xl:px-12">{title}</h1>
                                <h2 className="text-[26px] lg:text-[34px] xl:text-[40px] 2xl:text-[50px] tracking-wide font-semibold font-sans text-white leading-tight my-3 xl:my-5 pt-3 lg:pt-0 px-6 lg:px-8 xl:px-12">{subtitle}</h2>
                                <p className="text-[15px] tracking-wide font-poppins text-white ps-6 lg:ps-8 xl:ps-12 pe-6 md:pe-[40px] xl:pe-[60px]">{para}</p>
                            </div>
                            <div className="absolute right-[-5%] md:right-[-2%] lg:right-[-3%] bottom-[4%] lg:bottom-[3%]">
                                <a href="tel:123456789">
                                    <Image src={ArrowBlk} alt="Brand" className="w-[50%] md:w-[60%] bg-white/50 lg:bg-white/20 p-2 rounded-full" />
                                </a>
                            </div>
                        </div>
                        <div className="col-span-12 lg:col-span-5">
                            <div className="grid grid-cols-1 gap-5">
                                <div className="bg-[#D7D8DC] rounded-[25px] px-8 py-10">
                                    <div className="grid grid-cols-1 gap-10">
                                        <div className="flex items-center justify-around gap-10">
                                            <div className="flex items-center justify-center">
                                                <Image src={heroClient} alt="Brand" />
                                            </div>
                                            <div className="flex items-center justify-center">
                                                <Image src={heroReview} alt="Brand" />
                                            </div>
                                        </div>
                                        <div className="flex items-center justify-center">
                                            <Image src={heroreviews} alt="Brand" />
                                        </div>
                                    </div>
                                </div>
                                <div className="grid grid-cols-1">
                                    <div className="relative z-10 rounded-[25px] overflow-hidden h-full py-10 px-12">
                                        <Image src={clutchsBg} alt="Brand" fill={true} className="-z-10 object-cover object-center" />
                                        <div className="w-full">
                                            <Image src={banLogos} alt="Brand" className="w-full md:w-[85%] lg:w-full mx-auto" />
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
export default Hero2;