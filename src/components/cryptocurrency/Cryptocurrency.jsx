import React from "react";
import Image from "next/image";
//========== Import Components
import { AutoPlaySlider } from "@/components";


const Cryptocurrency = ({ content }) => {
    const { cryptoCurrency } = content;
    return (
        <>
            <section className="pt-10 pb-20">
                <div className="container relative">
                    <AutoPlaySlider arrowPosition="absolute bottom-[-10%] left-[5%] md:left-[3%] lg:left-[1%]">
                        {cryptoCurrency.map((item, index) => (
                            <div key={index} className="grow-0 shrink-0 basis-[100%] pl-4">
                                <div className="grid grid-cols-12 items-center gap-y-5 lg:gap-10">
                                    <div className="col-span-12 lg:col-span-4">
                                        <Image src={item.img} alt="Brand" className="w-auto md:w-[50%] lg:w-auto" />
                                    </div>
                                    <div className="col-span-12 lg:col-span-8">
                                        <Image src={item.icon} alt="Brand" className="w-[10%]" />
                                        <h2 className="text-[34px] tracking-wide font-bold font-sans text-black leading-snug my-4">{item.title}</h2>
                                        <p className="text-[15px] tracking-wide font-poppins text-black">{item.para}</p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </AutoPlaySlider>
                </div>
            </section>
        </>
    );
}
export default Cryptocurrency;