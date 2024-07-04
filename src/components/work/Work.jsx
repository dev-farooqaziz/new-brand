import React from "react";
import Image from "next/image";
//========== Import Images
import workBg from "media/images/workBg.png"
import workImg1 from "media/home/workImg1.png"
import workImg2 from "media/home/workImg2.png"
import workImg3 from "media/home/workImg3.png"
import arrow from "media/icons/arrowOrg.png"


const Work = () => {
    return (
        <>
            <section className="py-10 lgB:py-20">
                <div className="container">
                    <div className="heading mb-12">
                        <h2 className="text-[30px] lg:text-[50px] 2xl:text-[55px] tracking-wide font-bold font-sans text-black text-center leading-tight">We Work With</h2>
                        <p className="text-[16px] tracking-wide font-poppins text-black text-center my-4 lg:my-6">No matter what your niche is, we will help build mobile apps for your business. Choose our best application <br /> development company for building apps in any business vertical.</p>
                    </div>

                    <div className="relative px-10 pt-5 pb-8 lgB:pb-14">
                        <Image src={workBg} alt="Brand" className="absolute top-0 left-0 -z-10 w-full h-full" />
                        <div className="grid grid-cols-12 gap-10">
                            <div className="col-span-4">
                                <div className="flex flex-col gap-8">
                                    <Image src={workImg1} alt="Brand" className="z-10" />
                                    <div className="px-5 flex flex-col gap-4 lgB:gap-7 bg-[#292929] pt-16 pb-6 lgB:pb-8 rounded-t-none rounded-[30px] mt-[-30%] lgB:mt-[-20%] xl:mt-[-15%]">
                                        <h3 className="text-[18px] lgB:text-[24px] tracking-wide font-bold font-sans text-white text-center leading-tight">Pre-Seed & <br /> Seed Startups</h3>
                                        <p className="text-[14px] xl:text-[18px] tracking-wide font-sans text-white text-center leading-snug">Create a pitch deck, research your idea, run user interviews, and create MVP.</p>
                                        <a href="tel:123456789">
                                            <Image src={arrow} alt="Brand" className="w-[15%] mx-auto" />
                                        </a>
                                    </div>
                                </div>
                            </div>
                            <div className="col-span-4">
                                <div className="flex flex-col gap-8">
                                    <Image src={workImg2} alt="Brand" className="z-10" />
                                    <div className="px-5 flex flex-col gap-4 lgB:gap-7 bg-[#292929] pt-16 pb-6 lgB:pb-8 rounded-t-none rounded-[30px] mt-[-30%] lgB:mt-[-20%] xl:mt-[-15%]">
                                        <h3 className="text-[18px] lgB:text-[24px] tracking-wide font-bold font-sans text-white text-center leading-tight">Startups <br /> that Scale</h3>
                                        <p className="text-[14px] xl:text-[18px] tracking-wide font-sans text-white text-center leading-snug">Find your product-market fit, find the team with the right skill set, and scale fast.</p>
                                        <a href="tel:123456789">
                                            <Image src={arrow} alt="Brand" className="w-[15%] mx-auto" />
                                        </a>
                                    </div>
                                </div>
                            </div>
                            <div className="col-span-4">
                                <div className="flex flex-col gap-8">
                                    <Image src={workImg3} alt="Brand" className="z-10" />
                                    <div className="px-5 flex flex-col gap-4 lgB:gap-7 bg-[#292929] pt-16 pb-6 lgB:pb-8 rounded-t-none rounded-[30px] mt-[-30%] lgB:mt-[-20%] xl:mt-[-15%]">
                                        <h3 className="text-[18px] lgB:text-[24px] tracking-wide font-bold font-sans text-white text-center leading-tight">Businesses that <br /> want to digitize</h3>
                                        <p className="text-[14px] xl:text-[18px] tracking-wide font-sans text-white text-center leading-snug">Redesign and modernize your platform or SaaS, and create new internal tools.</p>
                                        <a href="tel:123456789">
                                            <Image src={arrow} alt="Brand" className="w-[15%] mx-auto" />
                                        </a>
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
export default Work;