import Image from "next/image"
//========== Import Components
import { AutoScrollSlider } from "@/components"
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


const AwardLogos = () => {
    return (
        <section className="py-10 lg:py-20">
            <div>
                <div className="container">
                    <div className="mb-12">
                        <h2 className="text-[30px] lg:text-[50px] 2xl:text-[55px] tracking-wide font-bold font-sans text-black text-center leading-tight">Our Partnership And <span className="text-primary-100">Appraisals!</span> </h2>
                    </div>
                    <div className="overflow-hidden mt-10">
                        <AutoScrollSlider>
                            {
                                [One, Two, Three, Four, Five, Six, Seven, Eight, Nine, Ten, Eleven].map((e, i) => (
                                    <div key={i} className="grow-0 shrink-0 basis-[220px] min-w-0 pl-4">
                                        <div>
                                            <Image src={e} alt={i} className="aspect-auto block mx-auto max-w-[50%]" />
                                        </div>
                                    </div>
                                ))
                            }
                        </AutoScrollSlider>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default AwardLogos