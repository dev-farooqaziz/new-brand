import React from 'react'
import Link from "next/link";
import Image from "next/image"
//========== 
import arrowCta from "media/icons/arrowCta.png"

const ThankYou = () => {
    return (
        <section className="py-10 lg:py-20 h-screen flex items-center">
            <div className="container relative">
                <div className="mb-12">
                    <div className="bg-[#EBEBEB] text-black border-0 w-full md:w-max h-full md:h-[40px] xl:h-[45px] mx-auto px-6 py-2 md:py-0 rounded-[45px] text-center flex justify-center items-center cursor-pointer mb-2">
                        <span className="text-[22px] font-sans tracking-wide">Discover Our Impact.</span>
                    </div>
                    <h2 className="text-[30px] lg:text-[50px] 2xl:text-[55px] tracking-wide font-bold font-sans text-black text-center leading-tight">Thanks For Getting In Touch!</h2>
                    <p className="text-[15px] tracking-wide font-poppins text-black text-center mt-3 mb-4 lg:mt-4 lg:mb-6">Your online query has been recorded and forwarded to one of our account directors. <br /> Hang in
                        there because, within a matter of 24 hours, we will reach out to you!</p>
                    <div className="w-max mx-auto">
                        <Link href="/" className="text-white bg-black border-0 h-[40px] lg:h-[50px] px-3 2xl:px-6 rounded-[15px] flex items-center">
                            <span className="text-[15px] xl:text-[18px] font-normal font-sans tracking-wide">Back To Home</span>
                            <Image className="flex items-center justify-center w-[20px] h-[20px] xl:w-[25px] xl:h-[25px] p-1 ms-2 object-contain" src={arrowCta} alt="Brand" />
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default ThankYou
