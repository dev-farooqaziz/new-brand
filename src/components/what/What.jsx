import React from "react";
import Image from "next/image";
//========== Import Components
import CTA from "@/components/cta/CTA";


const What = ({ content }) => {
    const { whatImg, title, subtitle, para } = content;
    return (
        <>
            <section className="py-10 lg:py-20">
                <div className="container">
                    <div className="grid grid-cols-12 items-center gap-6 xl:gap-x-20">
                        <div className="col-span-12 lg:col-span-6 order-1 lg:order-none">
                            <Image src={whatImg} alt="Brand" />
                        </div>
                        <div className="col-span-12 lg:col-span-6 order-0 lg:order-none">
                            <h2 className="text-[30px] lg:text-[50px] 2xl:text-[55px] tracking-wide font-bold font-sans text-black leading-tight">{title}</h2>
                            <h3 className="text-[20px] lg:text-[32px] 2xl:text-[40px] tracking-wide font-semibold font-sans text-black my-3 xl:my-5 leading-tight">{subtitle}</h3>
                            <p className="text-[15px] tracking-wide font-poppins text-black mb-4 lg:mb-8">{para}/</p>
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