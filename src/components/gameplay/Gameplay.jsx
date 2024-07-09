import React from "react";
import Image from "next/image";
//========== Import Components
import { AutoPlaySlider } from "@/components";
//========== Import Images
import gamePlay from "media/gameApp/gamePlay.png"


const gameplay = [
    {
        title: 'We Ideate, Design, and Construct Expressive Games!!!',
        para: 'BitsWits bring your visions into gaming reality following a structured and mindful approach. Our ideation process starts by exploring potential themes and genres to create an ideal design concept. We then move on to planning out the game`s structure and detailing the game design document. Once the plan is locked in, we move on to building the game prototype. Our team works in tandem to create the basic visuals and gameplay for the game with all features intact. The end result is nothing short of amazing - a game that best aligns with the interests and goals of the client and functions seamlessly!',
    },
    {
        title: 'We Ideate, Design, and Construct Expressive Games!!!',
        para: 'BitsWits bring your visions into gaming reality following a structured and mindful approach. Our ideation process starts by exploring potential themes and genres to create an ideal design concept. We then move on to planning out the game`s structure and detailing the game design document. Once the plan is locked in, we move on to building the game prototype. Our team works in tandem to create the basic visuals and gameplay for the game with all features intact. The end result is nothing short of amazing - a game that best aligns with the interests and goals of the client and functions seamlessly!',
    },
    {
        title: 'We Ideate, Design, and Construct Expressive Games!!!',
        para: 'BitsWits bring your visions into gaming reality following a structured and mindful approach. Our ideation process starts by exploring potential themes and genres to create an ideal design concept. We then move on to planning out the game`s structure and detailing the game design document. Once the plan is locked in, we move on to building the game prototype. Our team works in tandem to create the basic visuals and gameplay for the game with all features intact. The end result is nothing short of amazing - a game that best aligns with the interests and goals of the client and functions seamlessly!',
    },
];

const Gameplay = () => {
    return (
        <>
            <section className="py-10 md:pb-10 md:pt-20 lg:pb-20 lg:pt-32">
                <div className="container">
                    <div className="grid grid-cols-12 items-end gap-8">
                        <div className="col-span-12 lg:col-span-8 relative">
                            <div className="mb-16">
                                <div className="bg-[#EBEBEB] text-black border-0 w-full md:w-max h-full md:h-[40px] xl:h-[45px] px-6 py-2 md:py-0 rounded-[45px] text-center md:text-left flex items-center cursor-pointer mb-2">
                                    <span className="text-[22px] font-sans tracking-wide">Features Of Our Development Endeavors</span>
                                </div>
                                <h2 className="text-[30px] lg:text-[50px] 2xl:text-[55px] tracking-wide font-bold font-sans text-black text-center md:text-left  leading-tight">Invigorate Your Target Audience With Dynamic Gameplay</h2>
                                <p className="text-[15px] tracking-wide font-poppins text-black text-center md:text-left  my-4 lg:my-6">It's time to develop compelling storylines and rich characters with BitsWits; after all, don't you want to create an immersive experience? We use the latest technologies and cutting-edge visuals to enable players to interact intuitively, whether playing on a PC, console, or mobile device.</p>
                            </div>
                            <AutoPlaySlider arrowPosition="absolute md:bottom-[2%] left-[2%]">
                                {gameplay.map((item, index) => (
                                    <div key={index} className="grow-0 shrink-0 basis-[100%] pl-4">
                                        <div className="bg-[#eeeeee] rounded-[25px] px-6 xl:px-10 pt-8 pb-16 xl:pt-14 xl:pb-24">
                                            <h2 className="text-[34px] tracking-wide font-bold font-sans text-black leading-snug">{item.title}</h2>
                                            <p className="text-[15px] tracking-wide font-poppins text-black mt-4 lg:mt-6">{item.para}</p>
                                        </div>
                                    </div>
                                ))}
                            </AutoPlaySlider>
                        </div>
                        <div className="col-span-12 lg:col-span-4 hidden lg:block">
                            <Image src={gamePlay} alt="Brand" />
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}
export default Gameplay;