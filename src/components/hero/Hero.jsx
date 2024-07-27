import React from "react";
import Image from "next/image";
//========== Import Images
import Awards from "media/icons/bannerAwards.png"
// import Award1 from "media/icons/award-1.png"
// import Award2 from "media/icons/award-2.png"
// import Award3 from "media/icons/award-3.png"
// import Award4 from "media/icons/award-4.png"
import ArrowBlk from "media/icons/arrowBlk.png"
import ArrowOrg from "media/icons/arrowOrg.png"

const Hero = ({ content }) => {
    const { BanImg1, title, subtitle, para, title2, title3, BanImg2, title4, BanImg3, title5 } = content;
    return (
        <>
            <section className="py-10 lg:pt-8 lg:pb-20">
                <div className="container">
                    <div className="grid grid-cols-12 gap-5">
                        <div className="col-span-12 lg:col-span-7 relative z-10 rounded-[25px] overflow-hidden pb-16 lg:pb-0 h-full bg-black lg:bg-none">
                            <Image src={BanImg1} alt="Brand" fill={true} className="hidden lg:block -z-10 object-cover object-bottom" />
                            <div className="mt-8 lg:mt-10">
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
                                <div className="bg-[#D7D8DC] rounded-[25px] px-5 py-8">
                                    <h3 className="text-[18px] xl:text-[20px] tracking-wide font-bold font-sans text-black mb-0">{title2}</h3>
                                    <h4 className="text-[28px] lg:text-[34px] xl:text-[40px] 2xl:text-[50px] tracking-wide font-bold font-sans text-black leading-tight my-4 lg:mt-6 lg:mb-8">{title3}</h4>
                                    <div className="flex">
                                        {/* <div className="w-full">
                                            <Image src={Award1} alt="Brand" className="w-[70%] mx-auto mb-2" />
                                            <p className="text-[14px] lg:text-[10px] xl:text-[12px] font-sans text-center">Top Mobile Application <br /> Developers</p>
                                        </div>
                                        <div className="w-full">
                                            <Image src={Award2} alt="Brand" className="w-[70%] mx-auto mb-2" />
                                            <p className="text-[14px] lg:text-[10px] xl:text-[12px] font-sans text-center">Top Mobile Application <br /> Developers 2022</p>
                                        </div>
                                        <div className="w-full">
                                            <Image src={Award3} alt="Brand" className="w-[70%] mx-auto mb-2" />
                                            <p className="text-[14px] lg:text-[10px] xl:text-[12px] font-sans text-center">Top Application <br /> Development Company</p>
                                        </div>
                                        <div className="w-full">
                                            <Image src={Award4} alt="Brand" className="w-[70%] mx-auto mb-2" />
                                            <p className="text-[14px] lg:text-[10px] xl:text-[12px] font-sans text-center">Top Mobile Application <br /> Development Company</p>
                                        </div> */}
                                        <Image src={Awards} alt="Brand" />
                                    </div>
                                </div>
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                                    <div className="relative z-10 rounded-[25px] overflow-hidden h-[260px] lg:h-[180px] xl:h-[240px]">
                                        <Image src={BanImg2} alt="Brand" fill={true} className="-z-10 object-cover object-center" />
                                        <div className="absolute bottom-[8%] left-[5%] lg:left-[8%] w-[95%] lg:w-full flex items-center justify-between">
                                            <h5 className="text-[20px] md:text-[16px] xl:text-[20px] tracking-wide font-semibold font-sans text-white leading-tight md:w-full">{title4}</h5>
                                            <a href="tel:123456789">
                                                <Image src={ArrowOrg} alt="Brand" className="w-[60%] lg:w-[50%]" />
                                            </a>
                                        </div>
                                    </div>
                                    <div className="relative z-10 rounded-[25px] overflow-hidden h-[260px] lg:h-[180px] xl:h-[240px]">
                                        <Image src={BanImg3} alt="Brand" fill={true} className="-z-10 object-cover object-center" />
                                        <div className="absolute bottom-[8%] left-[5%] lg:left-[8%] w-[95%] lg:w-full flex items-center justify-between">
                                            <h5 className="text-[20px] md:text-[16px] xl:text-[20px] tracking-wide font-semibold font-sans text-white leading-tight md:w-full">{title5}</h5>
                                            <a href="tel:123456789">
                                                <Image src={ArrowOrg} alt="Brand" className="w-[60%] lg:w-[50%]" />
                                            </a>
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
export default Hero;