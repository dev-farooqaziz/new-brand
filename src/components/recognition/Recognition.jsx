"use client"
import React from "react"
import Image from "next/image"
//========== Import Embla
import useEmblaCarousel from "embla-carousel-react"
import AutoScroll from "embla-carousel-auto-scroll"
//========== Import Images
import One from "media/icons/recognition/icon1.png"
import Two from "media/icons/recognition/icon2.png"
import Three from "media/icons/recognition/icon3.png"
import Four from "media/icons/recognition/icon4.png"
import Five from "media/icons/recognition/icon5.png"
import Six from "media/icons/recognition/icon6.png"


const Recognition = ({
    spacing = " "
}) => {
    const [emblaRef] = useEmblaCarousel({ loop: true }, [
        AutoScroll({ playOnInit: true, stopOnInteraction: false, speed: 1, stopOnFocusIn: false })
    ])
    return (
        <section className="py-10 lg:py-20">
            <div className={`${spacing}`}>
                <div className="container">
                    <div className="heading mb-12">
                        <h2 className="text-[30px] lg:text-[50px] 2xl:text-[55px] tracking-wide font-bold font-sans text-black text-center leading-tight">Awards And Recognition</h2>
                    </div>
                    <div className="overflow-hidden mt-10" ref={emblaRef}>
                        <div className="flex gap-5 [backface-visibility:hidden;] [touch-action:pan-y;] items-center">
                            {
                                [One, Two, Three, Four, Five, Six, Two, Three, Four, Five,].map((e, i) => (
                                    <div key={i} className="[flex:0_0_20%] xl:[flex:0_0_16.66%]">
                                        <Image src={e} alt={i} className="aspect-auto block mx-auto max-w-[50%]" />
                                    </div>
                                ))
                            }
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Recognition