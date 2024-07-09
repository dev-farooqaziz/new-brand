"use client"
import Image from "next/image"
import arrowCta from "media/icons/arrowCta2.png"

const CTA2 = ({ text, href }) => {
    return (
        <>
            {href ? <div dangerouslySetInnerHTML={{
                __html: `<a href=${href} class="bg-black text-white border-0 h-[40px] lg:h-[50px] px-3 2xl:px-6 rounded-[15px] flex items-center"> 
                <span class="text-[16px] xl:text-[18px] font-medium font-sans tracking-wide">${text}</span>
                <img src="/icons/arrowCta2.png" class="flex items-center justify-center w-[20px] h-[20px] xl:w-[25px] xl:h-[25px] p-1 ms-2 object-contain" alt="Brand" />
                </a>`
            }} /> : <a href="tel:123456789" className="bg-[#FBA900] text-white border-0 h-[40px] lg:h-[50px] px-3 2xl:px-6 rounded-[15px] flex items-center gap-x-2">
                <span className="text-[16px] xl:text-[18px] font-medium font-sans tracking-wide">{text}</span>
                <Image src={arrowCta} className="flex items-center justify-center w-[20px] h-[20px] xl:w-[25px] xl:h-[25px] p-1 ms-2 object-contain" alt="Brand" />
            </a>}
        </>
    );
}

export default CTA2