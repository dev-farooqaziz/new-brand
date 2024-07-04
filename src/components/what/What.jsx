import React from "react";
import Image from "next/image";
//========== Import Components
import CTA from "@/components/cta/CTA";
//========== Import Images
import whatImg from "media/images/whatImg.png"

const What = () => {
    return (
        <>
            <section className="py-10 lgB:pb-20 lgB:pt-0">
                <div className="container">
                    <div className="grid grid-cols-12 items-center gap-10 lgB:gap-x-20">
                        <div className="col-span-12 lgB:col-span-6 order-1 lgB:order-none">
                            <Image src={whatImg} alt="Brand" />
                        </div>
                        <div className="col-span-12 lgB:col-span-6 order-0 lgB:order-none">
                            <h2 className="text-[30px] lg:text-[50px] 2xl:text-[55px] tracking-wide font-bold font-sans text-black leading-tight">What We Do</h2>
                            <h3 className="text-[20px] lg:text-[32px] 2xl:text-[40px] tracking-wide font-semibold font-sans text-black my-3 xl:my-5 leading-tight">BitsWits transforms businesses
                                through technology.</h3>
                            <p className="text-[16px] tracking-wide font-poppins text-black mb-4 xl:mb-8">We help businesses successfully navigate digital transformation and drive real growth, drawing on the combined power of experience and contextual knowledge, across a vast ecosystem of expertise.</p>
                            <div className="w-max">
                                <CTA
                                    text="Get To Know Us"
                                    bg="bg-black text-white"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}
export default What;