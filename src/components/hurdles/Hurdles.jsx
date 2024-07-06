import React from "react";
import Image from "next/image";
//========== Import Components
import CTA from "@/components/cta/CTA";
//========== Import Images
import hurdlesBg from "media/images/hurdlesBg.png"
import hurdlesImg from "media/images/hurdlesImg.png"


const Hurdles = () => {
    return (
        <>
            <section className="py-10 lg:py-20">
                <div className="container">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 relative z-10 rounded-[25px] overflow-hidden items-center gap-6 md:gap-10 lg:gap-5 py-5 md:py-10 xl:py-16 px-5 md:px-12">
                        <Image src={hurdlesBg} alt="Brand" fill={true} className="-z-10 object-cover object-bottom w-full h-full" />
                        <div className="col-span-12 lg:col-span-5">
                            <h2 className="text-[20px] lg:text-[30px] xl:text-[50px] tracking-wide font-bold font-sans text-white leading-tight">App Developmen <span className="block text-[40px] md:text-[60px] lg:text-[80px] xl:text-[100px] font-semibold text-primary-100">Hurdles?</span></h2>
                            <p className="text-[16px] md:text-[20px] xl:text-[26px] tracking-wide font-bold font-sans text-white mt-2 mb-6 lg:mb-10">We Get It And We've Got Solutions</p>
                            <div className="w-max">
                                <CTA
                                    text="Talk To An Expert"
                                    bg="bg-transparent text-white !border"
                                />
                            </div>
                        </div>
                        <div className="col-span-12 lg:col-span-7">
                            <Image src={hurdlesImg} alt="Brand" className="w-full lg:w-[90%] mx-auto" />
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}
export default Hurdles;