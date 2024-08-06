import React from "react";
import Image from "next/image";


const Industry = ({ content }) => {
    const { title, para, industries } = content;
    return (
        <>
            <section className="py-10 lg:py-20">
                <div className="container">
                    <div>
                        <h2 className="text-[30px] lg:text-[50px] 2xl:text-[55px] tracking-wide font-bold font-sans text-black text-center leading-tight">{title}</h2>
                        <p className="text-[15px] tracking-wide font-poppins text-black text-center my-4 lg:my-6">{para}</p>
                        <div className="w-max mx-auto flex bg-[#DFDFDF] p-1 rounded-[45px]">
                            <span className="bg-[#fba900] text-white border-0 h-[40px] xl:h-[45px] px-2 2xl:px-6 rounded-[45px] flex items-center text-[16px] md:text-[20px] font-sans tracking-wide cursor-pointer">Select Your Industry</span>
                            <span className="bg-transparent text-black border-0 h-[40px] xl:h-[45px] px-2 2xl:px-6 rounded-[45px] flex items-center text-[16px] md:text-[20px] font-sans tracking-wide cursor-pointer">Discover Our Impact.</span>
                        </div>
                    </div>
                    <div className="grid grid-cols-12 items-center gap-5 mt-10 lg:mt-16">
                        {industries.map((item, index) => (
                            <div key={index} className="col-span-6 md:col-span-4 lg:col-span-3 xl:col-span-2">
                                <div className="flex flex-col gap-2 items-center justify-center border-[2px] border-[#D8D8D8] hover:border-0 h-[140px] cursor-pointer group transition delay-150 duration-300 ease-in-out relative z-10 rounded-xl overflow-hidden">
                                    <Image src={item.icon} alt="Brand" className="w-[25%] lg:w-[20%] xl:w-[24%] block group-hover:hidden" />
                                    <Image src={item.iconA} alt="Brand" className="w-[25%] lg:w-[20%] xl:w-[24%] hidden group-hover:block" />
                                    <Image src={item.iconBg} alt="Brand" fill={true} className="-z-10 object-cover object-bottom w-full h-full hidden group-hover:block" />
                                    <p className="text-[16px] xl:text-[20px] font-sans font-normal text-black group-hover:text-white mb-0">{item.industryName}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </>
    );
}
export default Industry;