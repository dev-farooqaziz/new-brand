"use client"
import Image from "next/image"
import arrowCta from "media/icons/arrowCta.png"

const CTA = ({ text, href, bg }) => {
    return (
        <>
            {href ? <div dangerouslySetInnerHTML={{
                __html: `<a href=${href} class="text-black bg-transparent border-0 h-[40px] lg:h-[50px] px-3 2xl:px-6 rounded-[15px] flex items-center"> 
                <span class="text-[16px] xl:text-[18px] font-medium font-sans tracking-wide">${text}</span>
                </a>`
            }} /> : <a href="tel:123456789" className={`${bg} "text-white border-0 h-[40px] lg:h-[50px] px-3 2xl:px-6 rounded-[15px] flex items-center gap-x-2"`}>
                <span className="text-[16px] xl:text-[18px] font-normal font-sans tracking-wide">{text}</span>
                <Image className="flex items-center justify-center w-[20px] h-[20px] xl:w-[30px] xl:h-[30px] p-1 ms-2 object-contain" src={arrowCta} alt="Brand" />
            </a>}
        </>
    );
}

export default CTA