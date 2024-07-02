"use client"
import Image from "next/image"
import arrowCta from "media/icons/arrowCta.png"

const CTA = ({ text, href }) => {
    return (
        <>
            {href ? <div dangerouslySetInnerHTML={{
                __html: `<a href=${href} class="text-black bg-transparent border-0 h-[40px] xl:h-[50px] px-3 2xl:px-6 rounded-[15px] flex items-center"> 
                <span class="text-[12px] lgB:text-[16px] xl:text-[18px] font-medium font-sans">${text}</span>
                </a>`
            }} /> : <a href="tel:833-666-6689" className='bg-black text-white border-0 h-[40px] xl:h-[50px] px-3 2xl:px-6 rounded-[15px] flex items-center gap-x-2'>
                <span className="text-[12px] lgB:text-[16px] xl:text-[18px] font-normal font-sans">{text}</span>
                <Image className="flex items-center justify-center w-[25px] h-[25px] xl:w-[30px] xl:h-[30px] p-1 ms-2 object-contain" src={arrowCta} alt="Infinity Animations " />
            </a>}
        </>
    );
}

export default CTA