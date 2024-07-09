import React from "react";
import Image from "next/image";


const Who = ({ content }) => {
    const { whoBg1, title, subtitle, para, Avtr, whoImg } = content;
    return (
        <>
            <section className="py-10 lg:py-20">
                <div className="container">
                    <div className="grid grid-cols-12 relative">
                        <div className="col-span-12 lg:col-span-9 relative z-10 rounded-[25px] overflow-hidden py-8 xl:py-12">
                            <Image src={whoBg1} alt="Brand" fill={true} className="-z-10 object-cover object-bottom rounded-[25px]" />
                            <h2 className="text-[30px] lg:text-[50px] 2xl:text-[55px] tracking-wide font-bold font-sans text-black leading-tight ps-5 md:ps-6 xl:ps-10">{title}</h2>
                            <h3 className="text-[20px] lg:text-[32px] 2xl:text-[40px] tracking-wide font-semibold font-sans text-black my-3 xl:my-5 leading-tight ps-5 md:ps-6 xl:ps-10">{subtitle}</h3>
                            <p className="text-[15px] tracking-wide font-poppins text-black ps-5 md:ps-6 xl:ps-10 lg:w-[80%] mb-4 xl:mb-8">{para}</p>
                            <div className="ps-5 md:ps-6 xl:ps-10">
                                <Image src={Avtr} alt="Brand" className="w-[40%]" />
                            </div>
                        </div>
                        <div className="hidden lg:block absolute right-0 top-[-12%] w-[55%] 2xl:w-[50%] z-10">
                            <Image src={whoImg} alt="Brand" />
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}
export default Who;