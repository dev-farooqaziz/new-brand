import React from "react";
import Image from "next/image";
//========== Import Components
import { AutoScrollSlider } from "@/components"
//========== Import Images
import publications1 from "media/icons/publications/1.png"
import publications2 from "media/icons/publications/2.png"
import publications3 from "media/icons/publications/3.png"
import publications4 from "media/icons/publications/4.png"
import publications5 from "media/icons/publications/5.png"
import publications6 from "media/icons/publications/6.png"
import publications7 from "media/icons/publications/7.png"
import publications8 from "media/icons/publications/8.png"
import publications9 from "media/icons/publications/9.png"
import publications10 from "media/icons/publications/10.png"
import publications11 from "media/icons/publications/11.png"
import publications12 from "media/icons/publications/12.png"


const Publication = () => {
    return (
        <>
            <section className="py-10 lg:py-20">
                <div className="container">
                    <div className="heading mb-12">
                        <div className="bg-[#EBEBEB] text-black border-0 w-max mx-auto h-[40px] xl:h-[45px] px-10 rounded-[45px] flex items-center cursor-pointer mb-2">
                            <span className="text-[22px] font-sans tracking-wide">Publications</span>
                        </div>
                        <h2 className="text-[30px] lg:text-[50px] 2xl:text-[55px] tracking-wide font-bold font-sans text-black text-center leading-snug">Many Got Featured In Major Publications <br className="hidden lg:block" />
                            Just By Working With Us.</h2>
                    </div>
                    <div className="hidden lg:flex flex-wrap gap-20 lg:gap-x-40 gap-y-20 justify-center mt-20">
                        <div>
                            <Image src={publications1} alt="Brand" className="invert w-[80%] mx-auto" />
                        </div>
                        <div>
                            <Image src={publications2} alt="Brand" className="invert w-[80%] mx-auto" />
                        </div>
                        <div>
                            <Image src={publications3} alt="Brand" className="invert w-[80%] mx-auto" />
                        </div>
                        <div>
                            <Image src={publications4} alt="Brand" className="invert w-[80%] mx-auto" />
                        </div>
                        <div>
                            <Image src={publications5} alt="Brand" className="invert w-[80%] mx-auto" />
                        </div>
                        <div>
                            <Image src={publications6} alt="Brand" className="invert w-[80%] mx-auto" />
                        </div>
                        <div>
                            <Image src={publications7} alt="Brand" className="invert w-[80%] mx-auto" />
                        </div>
                        <div>
                            <Image src={publications8} alt="Brand" className="invert w-[80%] mx-auto" />
                        </div>
                        <div>
                            <Image src={publications9} alt="Brand" className="invert w-[80%] mx-auto" />
                        </div>
                        <div>
                            <Image src={publications10} alt="Brand" className="invert w-[80%] mx-auto" />
                        </div>
                        <div>
                            <Image src={publications11} alt="Brand" className="invert w-[80%] mx-auto" />
                        </div>
                        <div>
                            <Image src={publications12} alt="Brand" className="invert w-[80%] mx-auto" />
                        </div>
                    </div>
                    <div className="block lg:hidden">
                        <AutoScrollSlider>
                            {
                                [publications1, publications2, publications3, publications4, publications5, publications6, publications7, publications8, publications9, publications10, publications11, publications12].map((e, i) => (
                                    <div key={i} className="grow-0 shrink-0 basis-[220px] min-w-0 pl-4">
                                        <div>
                                            <Image src={e} alt="Brand" className="aspect-auto block invert w-[60%] mx-auto" />
                                        </div>
                                    </div>
                                ))
                            }
                        </AutoScrollSlider>
                    </div>
                </div>
            </section>
        </>
    );
}
export default Publication;