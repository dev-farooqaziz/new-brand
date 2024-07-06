import React from "react";
//========== Import Components
import CTA from "@/components/cta/CTA";


const Expert = ({ content }) => {
    const { subtitle, title, para, expertServices, bg, cta } = content;
    return (
        <>
            <section className="py-10 lg:py-20">
                <div className="container relative">
                    <div className="heading mb-12">
                        <div className="bg-[#EBEBEB] text-black border-0 w-max mx-auto h-[40px] xl:h-[45px] px-10 rounded-[45px] flex items-center cursor-pointer mb-2">
                            <span className="text-[22px] font-sans tracking-wide">{subtitle}</span>
                        </div>
                        <h2 className="text-[30px] lg:text-[50px] 2xl:text-[55px] tracking-wide font-bold font-sans text-black text-center leading-tight">{title}</h2>
                        <p className="text-[15px] tracking-wide font-poppins text-black text-center my-4 lg:my-6">{para}</p>
                    </div>
                    <div className="grid grid-cols-12 gap-5">
                        {expertServices.map((item, index) => (
                            <div key={index} className="col-span-12 md:col-span-6 lg:col-span-4">
                                <div className={`${bg} py-6 xl:py-10 px-4 xl:px-8 rounded-[25px] h-full flex flex-col justify-center`}>
                                    <h4 className="text-[20px] lg:text-[24px] 2xl:text-[30px] tracking-wide font-bold font-sans text-black leading-tight mb-5">
                                        {item.title}
                                    </h4>
                                    <p className="text-[15px] tracking-wide font-poppins text-black">
                                        {item.description}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>
                    {cta && (
                        <div className="w-max mx-auto mt-14">
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