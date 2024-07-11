"use client"
import React, { useState } from "react";
import Image from "next/image";


const Technologies = ({ content }) => {
    const { subtitle, title, para, techData } = content;

    const [activeTab, setActiveTab] = useState(0);
    const changeTab = (index) => {
        setActiveTab(index);
    };

    return (
        <>
            <section className="py-10 lg:py-20">
                <div className="container">
                    <div>
                        {subtitle ? (
                            <div className="bg-[#EBEBEB] text-black border-0 w-full md:w-max h-full md:h-[40px] xl:h-[45px] mx-auto px-6 py-2 md:py-0 rounded-[45px] text-center md:text-left flex items-center cursor-pointer mb-2">
                                <span className="text-[22px] font-sans tracking-wide">{subtitle}</span>
                            </div>
                        ) : null}
                        <h2 className="text-[30px] lg:text-[50px] 2xl:text-[55px] tracking-wide font-bold font-sans text-black text-center leading-tight">{title}</h2>
                        {para ? (
                            <p className="text-[15px] tracking-wide font-poppins text-black text-center my-4 lg:my-6">{para}</p>
                        ) : null}
                    </div>
                    <div className="flex flex-wrap items-center justify-center gap-2 md:gap-10 my-10 xl:my-14">
                        {techData.map((tab, index) => (
                            <button
                                key={index}
                                className={`${index === activeTab ? 'bg-black text-white' : ''} py-2 px-6 block border border-[#707070] rounded-xl text-[16px] font-sans tracking-wide`}
                                onClick={() => changeTab(index)}
                            >
                                {tab.label}
                            </button>
                        ))}
                    </div>
                    <div>
                        <div className="flex flex-wrap gap-8 md:gap-20 justify-center">
                            {techData[activeTab].techItems.map((techItem, index) => (
                                <div key={index} className="flex flex-col gap-3 justify-between items-center">
                                    <Image src={techItem.src} alt="Brand" className="w-[50%] mx-auto" />
                                    <p className="text-[16px] tracking-wide font-sans text-black">{techItem.text}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}
export default Technologies;