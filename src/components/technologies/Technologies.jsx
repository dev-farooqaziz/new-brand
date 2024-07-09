"use client"
import React, { useState } from "react";
import Image from "next/image";


const Technologies = ({ content }) => {
    const { title, techData } = content;

    const [activeTab, setActiveTab] = useState(0);
    const changeTab = (index) => {
        setActiveTab(index);
    };

    return (
        <>
            <section className="py-10 lg:py-20">
                <div className="container">
                    <div>
                        <h2 className="text-[30px] lg:text-[50px] 2xl:text-[55px] tracking-wide font-bold font-sans text-black text-center leading-tight">{title}</h2>
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