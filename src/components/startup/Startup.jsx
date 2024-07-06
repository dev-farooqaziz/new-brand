import React from "react";
import Image from "next/image";
//========== Import Components
import CTA from "@/components/cta/CTA";


const Startup = ({ content }) => {
    const { title, para, startupBg, startupImg } = content;
    return (
        <>
            <section className="py-10 lg:py-20">
                <div className="container">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 relative z-10 rounded-[25px] overflow-hidden items-center gap-5 py-10 xl:py-16 px-12">
                        <Image src={startupBg} alt="Brand" fill={true} className="-z-10 object-cover object-bottom w-full h-full" />
                        <div className="col-span-12 lg:col-span-5">
                            <h2 className="text-[30px] lg:text-[50px] 2xl:text-[55px] tracking-wide font-bold font-sans text-black leading-tight">{title}</h2>
                            <p className="text-[15px] tracking-wide font-poppins text-black my-6">{para}</p>
                            <div className="w-max">
                                <CTA
                                    text="Get A Quote"
                                    bg="bg-black text-white"
                                />
                            </div>
                        </div>
                        <div className="col-span-12 lg:col-span-7">
                            <Image src={startupImg} alt="Brand" className="w-full lg:w-[90%] ms-auto" />
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}
export default Startup;