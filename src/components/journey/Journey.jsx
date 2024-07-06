import React from "react";
import Image from "next/image";


const Journey = ({ content }) => {
    const { subtitle, title, para, journeyBg, journeyImg } = content;
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
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 relative z-10 rounded-[25px] overflow-hidden items-center gap-5 py-10 xl:py-16 px-5 md:px-12">
                        <Image src={journeyBg} alt="Brand" fill={true} className="-z-10 object-cover object-bottom w-full h-full" />
                        <div className="col-span-12">
                            <Image src={journeyImg} alt="Brand" className="w-full" />
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}
export default Journey;