"use client"
import React from "react"
import Image from "next/image"
//========== Import Embla
import useEmblaCarousel from "embla-carousel-react"
import AutoScroll from "embla-carousel-auto-scroll"
//========== Import Images
import One from "media/icons/awards/award1.png"
import Two from "media/icons/awards/award2.png"
import Three from "media/icons/awards/award3.png"
import Four from "media/icons/awards/award4.png"
import Five from "media/icons/awards/award5.png"
import Six from "media/icons/awards/award6.png"
import Seven from "media/icons/awards/award7.png"
import Eight from "media/icons/awards/award8.png"
import Nine from "media/icons/awards/award9.png"
import Ten from "media/icons/awards/award10.png"
import Eleven from "media/icons/awards/award11.png"


const Recognition = ({
    spacing = " "
}) => {
    const [emblaRef] = useEmblaCarousel({ loop: true }, [
        AutoScroll({ playOnInit: true, stopOnInteraction: false, speed: 1, stopOnFocusIn: false })
    ])
    return (
        <section className="py-10 lgB:py-20">
            <div className={`${spacing}`}>
                <div className="container">
                    <div className="heading mb-12">
                        <h2 className="text-[30px] lg:text-[50px] 2xl:text-[55px] tracking-wide font-bold font-sans text-black text-center leading-tight">Awards And Recognition</h2>
                    </div>
                    <div className="overflow-hidden mt-10" ref={emblaRef}>
                        <div className="flex gap-5 [backface-visibility:hidden;] [touch-action:pan-y;] items-center">
                            {
                                [One, Two, Three, Four, Five, Six, Seven, Eight, Nine, Ten, Eleven].map((e, i) => (
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