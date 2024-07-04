import React from "react";
import Image from "next/image";
//========== Import Components
import CTA from "@/components/cta/CTA";
//========== Import Images
import startupBg from "media/images/who/whoBg.png"
import startupImg from "media/images/startup/startupImg2.png"

const Startup = () => {
    return (
        <>
            <section className="py-10 lgB:py-20">
                <div className="container">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 relative items-center gap-5 py-10 xl:py-16 px-12 rounded-lg">
                        <Image src={startupBg} alt="Brand" className="absolute top-0 left-0 right-0 bottom-0 -z-10 w-full h-full" />
                        <div className="col-span-12 lgB:col-span-5">
                            <h2 className="text-[30px] lg:text-[50px] 2xl:text-[55px] tracking-wide font-bold font-sans text-black leading-tight">Startups From <br /> Ideas To <span className="text-primary-100">IPO</span></h2>
                            <p className="text-[16px] tracking-wide font-poppins text-black my-6">When it comes to startups we offer a complete range of services to help entrepreneurs succeed. From ground-zero to a booming IPO. Here’s how we do it:</p>
                            <div className="w-max">
                                <CTA
                                    text="Get A Quote"
                                    bg="bg-black text-white"
                                />
                            </div>
                        </div>
                        <div className="col-span-12 lgB:col-span-7">
                            <Image src={startupImg} alt="Brand" className="w-full lgB:w-[90%] ms-auto" />
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}
export default Startup;