import React from "react";
//========== Import Components
import CTA from "@/components/cta/CTA";


const Expert = ({ content }) => {
    const { subtitle, title, para, expertServices, bg, textColor, cta } = content;
    return (
        <>
            <section className="py-10 lg:py-20">
                <div className="container relative">
                    <div className="mb-12">
                        <div className="bg-[#EBEBEB] text-black border-0 w-full md:w-max h-full md:h-[40px] xl:h-[45px] mx-auto px-6 py-2 md:py-0 rounded-[45px] text-center flex justify-center items-center cursor-pointer mb-2">
                            <span className="text-[22px] font-sans tracking-wide">{subtitle}</span>
                        </div>
                        <h2 className="text-[30px] lg:text-[50px] 2xl:text-[55px] tracking-wide font-bold font-sans text-black text-center leading-tight">{title}</h2>
                        <p className="text-[15px] tracking-wide font-poppins text-black text-center my-4 lg:my-6">{para}</p>
                    </div>
                    <div className="grid grid-cols-12 gap-5">
                        {expertServices.map((item, index) => (
                            <div key={index} className="col-span-12 md:col-span-6 lg:col-span-4">
                                <div className={`${bg} py-6 xl:py-10 px-4 xl:px-8 rounded-[25px] h-full flex flex-col`}>
                                    <h4 className={`text-[20px] lg:text-[24px] tracking-wide font-bold font-sans ${textColor} leading-tight mb-5`}>
                                        {item.title}
                                    </h4>
                                    <p className={`text-[15px] tracking-wide font-poppins ${textColor}`}>
                                        {item.description}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>
                    {cta && (
                        <div className="w-max mx-auto mt-6 md:mt-14">
                            <CTA
                                text="Your App, Our Expertise - Let's Connect"
                                bg="bg-black text-white"
                            />
                        </div>
                    )}
                </div>
            </section>
        </>
    );
}
export default Expert;