import React from "react";
import Image from "next/image";


const Provide = ({ content }) => {
    const { subtitle, title, para, bg, textColor, heading, text, provideData, bgColor } = content;
    return (
        <>
            <section className="py-10 lg:py-20">
                <div className="container">
                    <div className="mb-12">
                        {subtitle ? (
                            <div className="bg-[#EBEBEB] text-black border-0 w-full md:w-max h-full md:h-[40px] xl:h-[45px] mx-auto px-6 py-2 md:py-0 rounded-[45px] text-center flex items-center justify-center cursor-pointer mb-2">
                                <span className="text-[22px] font-sans tracking-wide">{subtitle}</span>
                            </div>
                        ) : null}
                        <h2 className="text-[30px] lg:text-[50px] 2xl:text-[55px] tracking-wide font-bold font-sans text-black text-center leading-tight">{title}</h2>
                        {para ? (
                            <p className="text-[15px] tracking-wide font-poppins text-black text-center my-4 lg:my-6">{para}</p>
                        ) : null}
                    </div>

                    <div className={`grid grid-cols-12 relative z-10 rounded-[25px] overflow-hidden px-6 lg:px-10 py-8 lg:py-12 ${bgColor}`}>
                        <Image src={bg} alt="Brand" fill={true} className="hidden xl:block -z-10 object-cover object-center" />
                        <div className="col-span-12 xl:col-span-6">
                            <div>
                                {heading ? (
                                    <h3 className={`text-[26px] tracking-wide font-bold font-sans ${textColor} leading-tight`}>
                                        {heading}
                                    </h3>
                                ) : null}

                                {text ? (
                                    <p className={`text-[14px] tracking-wide font-poppins ${textColor} mt-4`}>{text}</p>
                                ) : null}

                                {provideData.map((item, index) => (
                                    <div className="flex flex-col mt-8" key={index}>
                                        <div className="flex items-center gap-4">
                                            <Image src={item.icon} alt="Brand" className="w-[8%]" />
                                            <h4 className={`text-[20px] tracking-wide font-bold font-sans ${textColor} leading-tight`}>{item.title}</h4>
                                        </div>
                                        <p className={`text-[14px] tracking-wide font-poppins ${textColor} mt-4`}>{item.description}</p>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}
export default Provide;