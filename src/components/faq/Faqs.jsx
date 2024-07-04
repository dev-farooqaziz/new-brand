"use client"
import React, { useState } from 'react'
import Image from "next/image";
//========== Import Images
import arrowOrg from "media/icons/arrowCta.png"

const items = [
    {
        title: 'How do I get started with app development at BitsWits?',
        content: "Reach out to us via our contact page, and let's discuss your app idea.",
    },
    {
        title: 'What types of apps does BitsWits specialize in developing?',
        content: "We specialize in a wide range of app types, from mobile and web apps to custom enterprise solutions.",
    },
    {
        title: 'How long does it typically take to develop an app?',
        content: "Timelines vary based on complexity, but we work efficiently to ensure timely delivery.",
    },
    {
        title: 'How do I get started with app development at BitsWits?',
        content: "Reach out to us via our contact page, and let's discuss your app idea.",
    },
    {
        title: 'What types of apps does BitsWits specialize in developing?',
        content: "We specialize in a wide range of app types, from mobile and web apps to custom enterprise solutions.",
    }
];

const Faqs = () => {
    const [activeIndex, setActiveIndex] = useState(null);
    const handleClick = (index) => {
        setActiveIndex(index === activeIndex ? null : index);
    };
    return (
        <>
            <section className="py-10 lgB:py-20">
                <div className="container">
                    <div className="heading mb-12">
                        <h2 className="text-[30px] lg:text-[50px] 2xl:text-[55px] tracking-wide font-bold font-sans text-black text-center leading-tight">Faqs</h2>
                    </div>
                    <div className="w-full">
                        {items.map((item, index) => (
                            <div key={index} className="border-b-[2px] border-[#b9b8b8]">
                                <button
                                    className="w-full flex justify-between p-4 focus:outline-none"
                                    onClick={() => handleClick(index)}
                                >
                                    <span className="text-[20px] text-black font-sans font-bold">{item.title}</span>
                                    <span>
                                        {activeIndex === index ? (
                                            <div className='flex items-center justify-center p-3 rounded-full border-[2px] border-black transform rotate-0'>
                                                <Image src={arrowOrg} className='w-[20px] h-[20px]' />
                                            </div>
                                        ) : (
                                            <div className='flex items-center justify-center p-3 rounded-full border-[2px] border-black transform rotate-180'>
                                                <Image src={arrowOrg} className='w-[20px] h-[20px]' />
                                            </div>
                                        )}
                                    </span>
                                </button>
                                {activeIndex === index && (
                                    <div className="text-[16px] text-black font-sans p-4 pt-0">{item.content}</div>
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