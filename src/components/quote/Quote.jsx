import React from 'react'
import Image from "next/image";
//========== Import Components
import CTA from "@/components/cta/CTA";
//========== Import Images
import contactBg from "media/images/contactBg.png"
import quoteArrow from "media/icons/quoteArrow.png"
import quoteArrow2 from "media/icons/quoteArrow2.png"


const Quote = () => {
    return (
        <>
            <section className="py-10 lg:py-20">
                <div className="container">
                    <div className="px-4 md:px-10 lg:px-16 py-10 xl:py-20 relative z-10 rounded-[25px] overflow-hidden">
                        <Image src={contactBg} alt="Brand" fill={true} className="-z-10 object-cover object-top w-full h-full" />
                        <div className="grid grid-cols-12 gap-0 md:gap-10">
                            <div className="col-span-12 lg:col-span-4 lg:mt-40">
                                <div className="flex flex-col items-center gap-2 relative">
                                    <h4 className="text-[18px] lg:text-[100px] xl:text-[150px] tracking-wide font-extrabold font-sans text-primary-100 leading-tight">01</h4>
                                    <h3 className="text-[20px] md:text-[24px] lg:text-[26px] tracking-wide font-bold font-sans text-white leading-tight">Talk To Our Experts</h3>
                                    <p className='text-[15px] font-poppins text-center text-white mt-4 mb-6'>Contact us without obligation by email or phone and secure your free consultation.</p>
                                    <div className="w-max">
                                        <CTA
                                            text="Connect Now!"
                                            bg="bg-transparent !border-2 border-white"
                                        />
                                    </div>
                                    <Image src={quoteArrow} alt="Brand" className="absolute bottom-[10%] xl:bottom-[5%] right-[-45%] xl:right-[-33%] w-[60%] xl:w-[54%] 2xl:w-[55%] hidden lg:block" />
                                </div>
                            </div>
                            <div className="col-span-12 lg:col-span-4 my-5 lg:my-0">
                                <div className="flex flex-col items-center gap-2">
                                    <h4 className="text-[18px] lg:text-[100px] xl:text-[150px] tracking-wide font-extrabold font-sans text-primary-100 leading-tight">02</h4>
                                    <h3 className="text-[20px] md:text-[24px] lg:text-[26px] tracking-wide font-bold font-sans text-white leading-tight">Get A Quote</h3>
                                    <p className='text-[15px] font-poppins text-center text-white mt-4 mb-6'>Get an exact cost breakdown structure of your app.</p>
                                    <div className="w-max">
                                        <CTA
                                            text="Connect Now!"
                                            bg="bg-transparent !border-2 border-white"
                                        />
                                    </div>
                                </div>
                            </div>
                            <div className="col-span-12 lg:col-span-4 lg:mt-40">
                                <div className="flex flex-col items-center gap-2 relative">
                                    <h4 className="text-[18px] lg:text-[100px] xl:text-[150px] tracking-wide font-extrabold font-sans text-primary-100 leading-tight">03</h4>
                                    <h3 className="text-[20px] md:text-[24px] lg:text-[26px] tracking-wide font-bold font-sans text-white leading-tight">Build An MVP</h3>
                                    <p className='text-[15px] font-poppins text-center text-white mt-4 mb-6'>Start your app development journey with consultation via email and phone.</p>
                                    <div className="w-max">
                                        <CTA
                                            text="Connect Now!"
                                            bg="bg-transparent !border-2 border-white"
                                        />
                                    </div>
                                    <Image src={quoteArrow2} alt="Brand" className="absolute bottom-[10%] xl:bottom-[5%] left-[-45%] xl:left-[-33%] w-[60%] xl:w-[54%] 2xl:w-[55%] hidden lg:block" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}
export default Quote;