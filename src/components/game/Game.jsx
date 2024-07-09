import React from "react";
import Image from "next/image";
//========== Import Components
import CTA from "@/components/cta/CTA2";
//========== Import Images
import game from "media/gameApp/game.png"


const Gameplay = () => {
    return (
        <>
            <section className="pt-10 pb-20 lg:py-20">
                <div className="container">
                    <div className="bg-black rounded-[45px] px-5 md:px-10 py-8 md:py-12">
                        <div className="grid grid-cols-12 items-center md:gap-8">
                            <div className="col-span-12 lg:col-span-7">
                                <div>
                                    <h2 className="text-[20px] md:text-[30px] lg:text-[40px] 2xl:text-[55px] tracking-wide font-bold font-sans text-white leading-tight">Leverage Our Proficiency In Mobile Game Development Today</h2>
                                    <p className="text-[15px] tracking-wide font-poppins text-white my-4 lg:my-6">Our team brings a wealth of expertise to the table. We celebrate a team of experts in game design, programming, and art direction, ensuring your vision for a video game comes to life with precision and accuracy.</p>
                                    <div className="w-max">
                                        <CTA
                                            text="Let's Connect"
                                            bg="bg-[#FBA900]"
                                        />
                                    </div>
                                </div>
                            </div>
                            <div className="col-span-12 lg:col-span-5">
                                <Image src={game} alt="Brand" />
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}
export default Gameplay;