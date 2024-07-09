import React from "react";
import Image from "next/image";
//========== Import Images
import trust1 from "media/icons/trust/trustIcon1.png"
import trust2 from "media/icons/trust/trustIcon2.png"
import trust3 from "media/icons/trust/trustIcon3.png"
import trust4 from "media/icons/trust/trustIcon4.png"
import trust5 from "media/icons/trust/trustIcon5.png"
import trust6 from "media/icons/trust/trustIcon6.png"
import trust7 from "media/icons/trust/trustIcon7.png"
import trust8 from "media/icons/trust/trustIcon8.png"
import trust9 from "media/icons/trust/trustIcon9.png"
import trust10 from "media/icons/trust/trustIcon10.png"
import trust11 from "media/icons/trust/trustIcon11.png"
import trust12 from "media/icons/trust/trustIcon12.png"


const Trust = () => {
    return (
        <>
            <section className="py-10 lg:py-20">
                <div className="container">
                    <div>
                        <div className="bg-[#EBEBEB] text-black border-0 w-full md:w-max h-full md:h-[40px] xl:h-[45px] mx-auto px-6 py-2 md:py-0 rounded-[45px] text-center md:text-left flex justify-center items-center cursor-pointer mb-2">
                            <span className="text-[22px] font-sans tracking-wide">World-Renowned</span>
                        </div>
                        <h2 className="text-[30px] lg:text-[50px] 2xl:text-[55px] tracking-wide font-bold font-sans text-black text-center leading-snug">Brands Trust Us</h2>
                    </div>
                    <div className="grid grid-cols-12 gap-y-5 md:gap-y-10 items-center justify-center mt-6 md:mt-12 xl:mt-20">
                        <div className="col-span-2">
                            <Image src={trust1} alt="Brand" className="w-[30%] mx-auto" />
                        </div>
                        <div className="col-span-2">
                            <Image src={trust2} alt="Brand" className="w-[50%] mx-auto" />
                        </div>
                        <div className="col-span-2">
                            <Image src={trust3} alt="Brand" className="w-[30%] mx-auto" />
                        </div>
                        <div className="col-span-2">
                            <Image src={trust4} alt="Brand" className="w-[30%] mx-auto" />
                        </div>
                        <div className="col-span-2">
                            <Image src={trust5} alt="Brand" className="w-[50%] mx-auto" />
                        </div>
                        <div className="col-span-2">
                            <Image src={trust6} alt="Brand" className="w-[50%] mx-auto" />
                        </div>
                        <div className="col-span-2">
                            <Image src={trust7} alt="Brand" className="w-[50%] mx-auto" />
                        </div>
                        <div className="col-span-2">
                            <Image src={trust8} alt="Brand" className="w-[30%] mx-auto" />
                        </div>
                        <div className="col-span-2">
                            <Image src={trust9} alt="Brand" className="w-[50%] mx-auto" />
                        </div>
                        <div className="col-span-2">
                            <Image src={trust10} alt="Brand" className="w-[50%] mx-auto" />
                        </div>
                        <div className="col-span-2">
                            <Image src={trust11} alt="Brand" className="w-[40%] mx-auto" />
                        </div>
                        <div className="col-span-2">
                            <Image src={trust12} alt="Brand" className="w-[30%] mx-auto" />
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}
export default Trust;