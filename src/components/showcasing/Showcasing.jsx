import React from "react";
import Image from "next/image";
//========== Import Components
import { AutoPlaySlider } from "@/components";
//========== Import Images
import travlBg from "media/images/casestudy/tourBg.png"
import travlIcn from "media/images/casestudy/tourLogo.png"
import travlImg from "media/images/casestudy/fitImg.png"
import musicBg from "media/images/casestudy/beatsBg.png"
import musicIcn from "media/images/casestudy/beatsLogo.png"
import musicImg from "media/images/casestudy/fitImg.png"
import fitBg from "media/images/casestudy/fitnessBg.png"
import fitIcn from "media/images/casestudy/tourLogo.png"
import fitImg from "media/images/casestudy/fitImg.png"
import wisuBg from "media/images/casestudy/wisuBg.png"
import wisuIcn from "media/images/casestudy/wisuLogo.png"
import wisuImg from "media/images/casestudy/fitImg.png"
import socialBg from "media/images/casestudy/scribeBg.png"
import socialIcn from "media/images/casestudy/scribeLogo.png"
import socialImg from "media/images/casestudy/fitImg.png"
import ArrowBlk from "media/icons/arrowBlk.png"


const caseData = [
    {
        caseBg: travlBg,
        icon: travlIcn,
        title: 'Travel App',
        para: 'Tourista is your premium travel app, simplifying...',
        caseImg: travlImg,
    },
    {
        caseBg: musicBg,
        icon: musicIcn,
        title: 'Music App',
        para: 'Beats, a music app, showcases music albums...',
        caseImg: musicImg,
    },
    {
        caseBg: fitBg,
        icon: fitIcn,
        title: 'Fitness App',
        para: 'Fitnow is the most effective fitness app available, a product of hard work and creativity...',
        caseImg: fitImg,
    },
    {
        caseBg: wisuBg,
        icon: wisuIcn,
        title: 'Ecommerce App',
        para: 'Wisu Clothing Marketplace App is your one-stop...',
        caseImg: wisuImg,
    },
    {
        caseBg: socialBg,
        icon: socialIcn,
        title: 'Social Media App',
        para: 'Soul Scribe is a social networking app that...',
        caseImg: socialImg,
    },
];

const Showcasing = () => {
    return (
        <>
            <section className="pt-10 pb-20">
                <div className="container relative">
                    <div className="mb-12">
                        <div className="bg-[#EBEBEB] text-black border-0 w-full md:w-max h-full md:h-[40px] xl:h-[45px] mx-auto px-6 py-2 md:py-0 rounded-[45px] text-center flex justify-center items-center cursor-pointer mb-2">
                            <span className="text-[22px] font-sans tracking-wide">Innovation in Action</span>
                        </div>
                        <h2 className="text-[30px] lg:text-[50px] 2xl:text-[55px] tracking-wide font-bold font-sans text-black text-center leading-tight">Showcasing Our Creative Vision</h2>
                        <p className="text-[15px] tracking-wide font-poppins text-black text-justify lg:text-center my-4 lg:my-6 px-0 lg:px-16">Experience the fusion of imagination and expertise as we present our innovative solutions tailored to inspire and captivate. Dive <br /> into a realm where creativity knows no bounds, and witness the manifestation of our visionary prowess.</p>
                    </div>
                    <AutoPlaySlider options={{ align: "start" }} arrowPosition="absolute bottom-[-10%] left-[5%] md:left-[3%] lg:left-[1%]">
                        {caseData.map((item, index) => (
                            <div key={index} className="grow-0 shrink-0 basis-[100%] md:basis-[50%] lg:basis-1/3 xl:basis-1/4 2xl:basis-1/5 md:hover:basis-[60%] lg:hover:basis-[40%] pl-5 group transition-all duration-300">
                                <div className="relative z-10 rounded-[25px] overflow-hidden h-[350px] xl:h-[400px]">
                                    <Image src={item.caseBg} alt="Brand" fill={true} className="-z-10 object-cover object-center group-hover:object-fill" />
                                    <div className="flex flex-col items-center group-hover:items-start justify-center group-hover:justify-between h-full px-5 group-hover:pt-10 relative">
                                        <div className="hidden group-hover:block absolute right-[-4%] lg:right-[-6%] top-[5%]">
                                            <a href="tel:0123456789">
                                                <Image src={ArrowBlk} alt="Brand" className="w-[50%] hover:rotate-[45deg] transition-all duration-300" />
                                            </a>
                                        </div>
                                        <div className="flex flex-col items-center group-hover:items-start justify-center">
                                            <Image src={item.icon} alt="Brand" className="block group-hover:hidden w-[50%]" />
                                            <h2 className="text-[20px] group-hover:text-[30px] tracking-wide font-bold font-sans text-white leading-snug my-4">{item.title}</h2>
                                            <p className="text-[15px] tracking-wide font-poppins text-white text-center group-hover:text-left line-clamp-2 group-hover:line-clamp-4">{item.para}</p>
                                        </div>
                                        <Image src={item.caseImg} alt="Brand" className="hidden group-hover:block" />
                                        <div className="bg-primary-100/80 h-full w-full absolute left-[50%] top-[50%] translate-x-[-50%] group-hover:translate-y-[-175px] xl:group-hover:translate-y-[-200px] translate-y-[200px] flex items-center justify-center -z-10">
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
export default Showcasing;