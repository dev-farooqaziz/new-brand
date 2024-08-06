"use client"
import React, { useState } from 'react'
import Image from "next/image";
//========== Import Images
import arrowOrg from "media/icons/arrowCta.png"


const Faqs = ({ content }) => {
    const { title, faqData } = content;
    const [activeIndex, setActiveIndex] = useState(null);
    const handleClick = (index) => {
        setActiveIndex(index === activeIndex ? null : index);
    };
    return (
        <>
            <section className="py-10 lg:py-20">
                <div className="container">
                    <div className="mb-12">
                        <h2 className="text-[30px] lg:text-[50px] 2xl:text-[55px] tracking-wide font-bold font-sans text-black text-center leading-tight">{title}</h2>
                    </div>
                    <div className="w-full">
                        {faqData.map((item, index) => (
                            <div key={index} className="border-b-[2px] border-[#b9b8b8]">
                                <button
                                    className="w-full flex justify-between p-4 focus:outline-none"
                                    onClick={() => handleClick(index)}
                                >
                                    <span className="text-[18px] md:text-[20px] text-black font-sans font-bold text-left">{item.question}</span>
                                    <span>
                                        {activeIndex === index ? (
                                            <div className='flex items-center justify-center p-3 rounded-full border-[2px] border-black transform rotate-0 w-[40px] h-[40px]'>
                                                <Image src={arrowOrg} alt='Brand' />
                                            </div>
                                        ) : (
                                            <div className='flex items-center justify-center p-3 rounded-full border-[2px] border-black transform rotate-180 w-[40px] h-[40px]'>
                                                <Image src={arrowOrg} alt='Brand' />
                                            </div>
                                        )}
                                    </span>
                                </button>
                                {activeIndex === index && (
                                    <div className="text-[16px] text-black font-sans p-4 pt-0">{item.answer}</div>
                                )}
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </>
    );
}
export default Faqs;