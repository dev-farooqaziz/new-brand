import React from "react";
import Image from "next/image";
//========== Import Images
import whoBg1 from "media/images/who/whoBg.png"
import whoBg2 from "media/images/who/whoBg2.png"
import Avtr from "media/icons/avtr.png"

const Who = () => {
    return (
        <>
            <section className="py-10 lgB:py-20">
                <div className="container">
                    <div className="whoImg relative">
                        <Image src={whoBg1} alt="Brand" className="block lgB:hidden" />
                        <Image src={whoBg2} alt="Brand" className="hidden lgB:block" />
                        <div className="content absolute top-[8%] lgB:top-[14%] 2xl:top-[15%] left-0 lgB:w-8/12 xl:w-7/12 z-10">
                            <h2 className="text-[30px] lg:text-[50px] 2xl:text-[55px] tracking-wide font-bold font-sans text-black leading-tight px-8 lg:px-12">Who We Are</h2>
                            <h3 className="text-[20px] lg:text-[32px] 2xl:text-[40px] tracking-wide font-semibold font-sans text-black my-3 xl:my-5 leading-tight ps-8 lg:ps-12 xl:px-12">Shaping a Smarter Tomorrow <br /> Through Technological Excellence.</h3>
                            <p className="text-[16px] tracking-wide font-poppins text-black px-8 lg:px-12 mb-4 xl:mb-8">At Bitswits, we blend pioneering IT services and consulting with over a decade of expertise, helping businesses around the globe achieve their transformative goals.</p>
                            <div className="px-8 lg:px-12">
                                <Image src={Avtr} alt="Brand" className="w-[40%] xl:w-[50%]" />
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}
export default Who;