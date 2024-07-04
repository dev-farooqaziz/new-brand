"use client"
import React, { useState } from "react";
import Image from "next/image";
//========== Import Images
import tech1 from "media/icons/tech/techIcn1.png"
import tech2 from "media/icons/tech/techIcn2.png"
import tech3 from "media/icons/tech/techIcn3.png"
import tech4 from "media/icons/tech/techIcn4.png"
import tech5 from "media/icons/tech/techIcn5.png"
import tech6 from "media/icons/tech/techIcn6.png"
import tech7 from "media/icons/tech/techIcn7.png"
import tech8 from "media/icons/tech/techIcn8.png"


const tabs = [
    {
        label: 'Mobile',
        content: (
            <div className="flex flex-wrap gap-20 justify-center">
                <div className="flex flex-col gap-3 justify-between items-center">
                    <Image src={tech1} alt="Brand" className="w-[60%] mx-auto" />
                    <p className="text-[16px] tracking-wide font-sans text-black">Ios</p>
                </div>
                <div className="flex flex-col gap-3 justify-between items-center">
                    <Image src={tech2} alt="Brand" className="w-[60%] mx-auto" />
                    <p className="text-[16px] tracking-wide font-sans text-black">Android</p>
                </div>
                <div className="flex flex-col gap-3 justify-between items-center">
                    <Image src={tech3} alt="Brand" className="w-[50%] mx-auto" />
                    <p className="text-[16px] tracking-wide font-sans text-black">React native</p>
                </div>
                <div className="flex flex-col gap-3 justify-between items-center">
                    <Image src={tech4} alt="Brand" className="w-[50%] mx-auto" />
                    <p className="text-[16px] tracking-wide font-sans text-black">Flutter</p>
                </div>
                <div className="flex flex-col gap-3 justify-between items-center">
                    <Image src={tech5} alt="Brand" className="w-[50%] mx-auto" />
                    <p className="text-[16px] tracking-wide font-sans text-black">Ionic</p>
                </div>
                <div className="flex flex-col gap-3 justify-between items-center">
                    <Image src={tech6} alt="Brand" className="w-[50%] mx-auto" />
                    <p className="text-[16px] tracking-wide font-sans text-black">Swift</p>
                </div>
                <div className="flex flex-col gap-3 justify-between items-center">
                    <Image src={tech7} alt="Brand" className="w-[50%] mx-auto" />
                    <p className="text-[16px] tracking-wide font-sans text-black">Kotlin</p>
                </div>
                <div className="flex flex-col gap-3 justify-between items-center">
                    <Image src={tech8} alt="Brand" className="w-[60%] mx-auto" />
                    <p className="text-[16px] tracking-wide font-sans text-black">Objectivec</p>
                </div>
            </div>
        ),
    },
    {
        label: 'Front End',
        content: (
            <div className="flex flex-wrap gap-20 justify-center">
                <div className="flex flex-col gap-3 justify-between items-center">
                    <Image src={tech3} alt="Brand" className="w-[50%] mx-auto" />
                    <p className="text-[16px] tracking-wide font-sans text-black">React native</p>
                </div>
                <div className="flex flex-col gap-3 justify-between items-center">
                    <Image src={tech2} alt="Brand" className="w-[60%] mx-auto" />
                    <p className="text-[16px] tracking-wide font-sans text-black">Android</p>
                </div>
                <div className="flex flex-col gap-3 justify-between items-center">
                    <Image src={tech1} alt="Brand" className="w-[60%] mx-auto" />
                    <p className="text-[16px] tracking-wide font-sans text-black">Ios</p>
                </div>
                <div className="flex flex-col gap-3 justify-between items-center">
                    <Image src={tech4} alt="Brand" className="w-[50%] mx-auto" />
                    <p className="text-[16px] tracking-wide font-sans text-black">Flutter</p>
                </div>
                <div className="flex flex-col gap-3 justify-between items-center">
                    <Image src={tech5} alt="Brand" className="w-[50%] mx-auto" />
                    <p className="text-[16px] tracking-wide font-sans text-black">Ionic</p>
                </div>
                <div className="flex flex-col gap-3 justify-between items-center">
                    <Image src={tech6} alt="Brand" className="w-[50%] mx-auto" />
                    <p className="text-[16px] tracking-wide font-sans text-black">Swift</p>
                </div>
                <div className="flex flex-col gap-3 justify-between items-center">
                    <Image src={tech7} alt="Brand" className="w-[50%] mx-auto" />
                    <p className="text-[16px] tracking-wide font-sans text-black">Kotlin</p>
                </div>
                <div className="flex flex-col gap-3 justify-between items-center">
                    <Image src={tech8} alt="Brand" className="w-[60%] mx-auto" />
                    <p className="text-[16px] tracking-wide font-sans text-black">Objectivec</p>
                </div>
            </div>
        ),
    },
    {
        label: 'Database',
        content: (
            <div className="flex flex-wrap gap-20 justify-center">
                <div className="flex flex-col gap-3 justify-between items-center">
                    <Image src={tech2} alt="Brand" className="w-[60%] mx-auto" />
                    <p className="text-[16px] tracking-wide font-sans text-black">Android</p>
                </div>
                <div className="flex flex-col gap-3 justify-between items-center">
                    <Image src={tech1} alt="Brand" className="w-[60%] mx-auto" />
                    <p className="text-[16px] tracking-wide font-sans text-black">Ios</p>
                </div>
                <div className="flex flex-col gap-3 justify-between items-center">
                    <Image src={tech3} alt="Brand" className="w-[50%] mx-auto" />
                    <p className="text-[16px] tracking-wide font-sans text-black">React native</p>
                </div>
                <div className="flex flex-col gap-3 justify-between items-center">
                    <Image src={tech4} alt="Brand" className="w-[50%] mx-auto" />
                    <p className="text-[16px] tracking-wide font-sans text-black">Flutter</p>
                </div>
                <div className="flex flex-col gap-3 justify-between items-center">
                    <Image src={tech5} alt="Brand" className="w-[50%] mx-auto" />
                    <p className="text-[16px] tracking-wide font-sans text-black">Ionic</p>
                </div>
                <div className="flex flex-col gap-3 justify-between items-center">
                    <Image src={tech6} alt="Brand" className="w-[50%] mx-auto" />
                    <p className="text-[16px] tracking-wide font-sans text-black">Swift</p>
                </div>
                <div className="flex flex-col gap-3 justify-between items-center">
                    <Image src={tech7} alt="Brand" className="w-[50%] mx-auto" />
                    <p className="text-[16px] tracking-wide font-sans text-black">Kotlin</p>
                </div>
                <div className="flex flex-col gap-3 justify-between items-center">
                    <Image src={tech8} alt="Brand" className="w-[60%] mx-auto" />
                    <p className="text-[16px] tracking-wide font-sans text-black">Objectivec</p>
                </div>
            </div>
        ),
    },
    {
        label: 'Backend',
        content: (
            <div className="flex flex-wrap gap-20 justify-center">
                <div className="flex flex-col gap-3 justify-between items-center">
                    <Image src={tech1} alt="Brand" className="w-[60%] mx-auto" />
                    <p className="text-[16px] tracking-wide font-sans text-black">Ios</p>
                </div>
                <div className="flex flex-col gap-3 justify-between items-center">
                    <Image src={tech2} alt="Brand" className="w-[60%] mx-auto" />
                    <p className="text-[16px] tracking-wide font-sans text-black">Android</p>
                </div>
                <div className="flex flex-col gap-3 justify-between items-center">
                    <Image src={tech3} alt="Brand" className="w-[50%] mx-auto" />
                    <p className="text-[16px] tracking-wide font-sans text-black">React native</p>
                </div>
                <div className="flex flex-col gap-3 justify-between items-center">
                    <Image src={tech4} alt="Brand" className="w-[50%] mx-auto" />
                    <p className="text-[16px] tracking-wide font-sans text-black">Flutter</p>
                </div>
                <div className="flex flex-col gap-3 justify-between items-center">
                    <Image src={tech5} alt="Brand" className="w-[50%] mx-auto" />
                    <p className="text-[16px] tracking-wide font-sans text-black">Ionic</p>
                </div>
                <div className="flex flex-col gap-3 justify-between items-center">
                    <Image src={tech6} alt="Brand" className="w-[50%] mx-auto" />
                    <p className="text-[16px] tracking-wide font-sans text-black">Swift</p>
                </div>
                <div className="flex flex-col gap-3 justify-between items-center">
                    <Image src={tech7} alt="Brand" className="w-[50%] mx-auto" />
                    <p className="text-[16px] tracking-wide font-sans text-black">Kotlin</p>
                </div>
                <div className="flex flex-col gap-3 justify-between items-center">
                    <Image src={tech8} alt="Brand" className="w-[60%] mx-auto" />
                    <p className="text-[16px] tracking-wide font-sans text-black">Objectivec</p>
                </div>
            </div>
        ),
    },
    {
        label: 'CMS',
        content: (
            <div className="flex flex-wrap gap-20 justify-center">
                <div className="flex flex-col gap-3 justify-between items-center">
                    <Image src={tech3} alt="Brand" className="w-[50%] mx-auto" />
                    <p className="text-[16px] tracking-wide font-sans text-black">React native</p>
                </div>
                <div className="flex flex-col gap-3 justify-between items-center">
                    <Image src={tech2} alt="Brand" className="w-[60%] mx-auto" />
                    <p className="text-[16px] tracking-wide font-sans text-black">Android</p>
                </div>
                <div className="flex flex-col gap-3 justify-between items-center">
                    <Image src={tech1} alt="Brand" className="w-[60%] mx-auto" />
                    <p className="text-[16px] tracking-wide font-sans text-black">Ios</p>
                </div>
                <div className="flex flex-col gap-3 justify-between items-center">
                    <Image src={tech4} alt="Brand" className="w-[50%] mx-auto" />
                    <p className="text-[16px] tracking-wide font-sans text-black">Flutter</p>
                </div>
                <div className="flex flex-col gap-3 justify-between items-center">
                    <Image src={tech5} alt="Brand" className="w-[50%] mx-auto" />
                    <p className="text-[16px] tracking-wide font-sans text-black">Ionic</p>
                </div>
                <div className="flex flex-col gap-3 justify-between items-center">
                    <Image src={tech6} alt="Brand" className="w-[50%] mx-auto" />
                    <p className="text-[16px] tracking-wide font-sans text-black">Swift</p>
                </div>
                <div className="flex flex-col gap-3 justify-between items-center">
                    <Image src={tech7} alt="Brand" className="w-[50%] mx-auto" />
                    <p className="text-[16px] tracking-wide font-sans text-black">Kotlin</p>
                </div>
                <div className="flex flex-col gap-3 justify-between items-center">
                    <Image src={tech8} alt="Brand" className="w-[60%] mx-auto" />
                    <p className="text-[16px] tracking-wide font-sans text-black">Objectivec</p>
                </div>
            </div>
        ),
    },
    {
        label: 'Infra And Devops',
        content: (
            <div className="flex flex-wrap gap-20 justify-center">
                <div className="flex flex-col gap-3 justify-between items-center">
                    <Image src={tech2} alt="Brand" className="w-[60%] mx-auto" />
                    <p className="text-[16px] tracking-wide font-sans text-black">Android</p>
                </div>
                <div className="flex flex-col gap-3 justify-between items-center">
                    <Image src={tech1} alt="Brand" className="w-[60%] mx-auto" />
                    <p className="text-[16px] tracking-wide font-sans text-black">Ios</p>
                </div>
                <div className="flex flex-col gap-3 justify-between items-center">
                    <Image src={tech3} alt="Brand" className="w-[50%] mx-auto" />
                    <p className="text-[16px] tracking-wide font-sans text-black">React native</p>
                </div>
                <div className="flex flex-col gap-3 justify-between items-center">
                    <Image src={tech4} alt="Brand" className="w-[50%] mx-auto" />
                    <p className="text-[16px] tracking-wide font-sans text-black">Flutter</p>
                </div>
                <div className="flex flex-col gap-3 justify-between items-center">
                    <Image src={tech5} alt="Brand" className="w-[50%] mx-auto" />
                    <p className="text-[16px] tracking-wide font-sans text-black">Ionic</p>
                </div>
                <div className="flex flex-col gap-3 justify-between items-center">
                    <Image src={tech6} alt="Brand" className="w-[50%] mx-auto" />
                    <p className="text-[16px] tracking-wide font-sans text-black">Swift</p>
                </div>
                <div className="flex flex-col gap-3 justify-between items-center">
                    <Image src={tech7} alt="Brand" className="w-[50%] mx-auto" />
                    <p className="text-[16px] tracking-wide font-sans text-black">Kotlin</p>
                </div>
                <div className="flex flex-col gap-3 justify-between items-center">
                    <Image src={tech8} alt="Brand" className="w-[60%] mx-auto" />
                    <p className="text-[16px] tracking-wide font-sans text-black">Objectivec</p>
                </div>
            </div>
        ),
    },
];

const Technologies = () => {

    const [activeTab, setActiveTab] = useState(0);
    const changeTab = (index) => {
        setActiveTab(index);
    };

    return (
        <>
            <section className="py-10 lgB:py-20">
                <div className="container">
                    <div className="heading">
                        <h2 className="text-[30px] lg:text-[50px] 2xl:text-[55px] tracking-wide font-bold font-sans text-black text-center leading-tight">Technologies we work with</h2>
                    </div>
                    <div className="flex items-center justify-center gap-10 my-14">
                        {tabs.map((tab, index) => (
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
                        {tabs[activeTab].content}
                    </div>
                </div>
            </section>
        </>
    );
}
export default Technologies;