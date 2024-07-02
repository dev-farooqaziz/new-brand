import React from "react";
import Link from "next/link";
import Image from "next/image";
import Styles from './Hero.module.css'
//========== Import Images
import BanImg1 from "media/home/banImg-1.png"
import BanImg2 from "media/home/banImg-2.png"
import BanImg3 from "media/home/banImg-3.png"
import Award1 from "media/icons/award-1.png"
import Award2 from "media/icons/award-2.png"
import Award3 from "media/icons/award-3.png"
import Award4 from "media/icons/award-4.png"
import ArrowBlk from "media/icons/arrowBlk.png"
import ArrowOrg from "media/icons/arrowOrg.png"

const Hero = () => {
    return (
        <>
            <section className="py-8">
                <div className="container">
                    <div className="grid grid-cols-12">
                        <div className="col-span-12 lgB:col-span-7">
                            <div className="banLeft relative">
                                <Image src={BanImg1} alt="Brand" />
                                <div className="content absolute top-[10%] left-0 w-full z-10">
                                    <h1 className="text-[26px] tracking-wide font-semibold font-sans text-white backdrop-blur-sm bg-white/20 py-2 px-12">Top Mobile App Development Company</h1>
                                    <h2 className="text-[50px] tracking-wide font-semibold font-sans text-white my-5 leading-tight px-12">Where <span className="text-primary-100">Exceptional Apps</span> <br /> Are Just The Beginning.</h2>
                                    <p className="text-[16px] tracking-wide font-sans text-white px-12">As a top-rated mobile app development company, Bitswits excels in transforming <br /> ideas into engaging, high-performance apps.</p>
                                </div>
                                <div className="absolute right-[-3%] bottom-[3%] cursor-pointer">
                                    <Image src={ArrowBlk} alt="Brand" className="w-[60%] bg-white/20 p-2 rounded-full" />
                                </div>
                            </div>
                        </div>
                        <div className="col-span-12 lgB:col-span-5">
                            <div className={`${Styles.banRight} flex flex-col gap-5 lgB:ps-5 mt-5 lgB:mt-0`}>
                                <div className="bg-[#D7D8DC] rounded-[25px] px-5 py-8">
                                    <h3 className="text-[24px] tracking-wide font-bold font-sans text-black mb-0">Endorsements on different Platforms</h3>
                                    <h4 className="text-[50px] tracking-wide font-bold font-sans text-black leading-tight mt-6 mb-8">Awards & <br /> Recognition</h4>
                                    <div className="flex">
                                        <div className="w-full">
                                            <Image src={Award1} alt="Brand" className="w-[70%] mx-auto mb-2" />
                                            <p className="text-[12px] font-sans text-center">Top Mobile Application <br /> Developers</p>
                                        </div>
                                        <div className="w-full">
                                            <Image src={Award2} alt="Brand" className="w-[70%] mx-auto mb-2" />
                                            <p className="text-[12px] font-sans text-center">Top Mobile Application <br /> Developers 2022</p>
                                        </div>
                                        <div className="w-full">
                                            <Image src={Award3} alt="Brand" className="w-[70%] mx-auto mb-2" />
                                            <p className="text-[12px] font-sans text-center">Top Application <br /> Development Company</p>
                                        </div>
                                        <div className="w-full">
                                            <Image src={Award4} alt="Brand" className="w-[70%] mx-auto mb-2" />
                                            <p className="text-[12px] font-sans text-center">Top Mobile Application <br /> Development Company</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="flex items-center justify-between gap-5">
                                    <div className="game relative">
                                        <Image src={BanImg2} alt="Brand" />
                                        <div className="content absolute bottom-[8%] left-[5%] lgB:left-[8%] w-full z-10 flex items-end justify-between">
                                            <h1 className="text-[20px] tracking-wide font-semibold font-sans text-white leading-tight w-full">Game <br /> Development</h1>
                                            <div className="cursor-pointer">
                                                <Image src={ArrowOrg} alt="Brand" className="w-[50%]" />
                                            </div>
                                        </div>
                                    </div>
                                    <div className="artificial relative">
                                        <Image src={BanImg3} alt="Brand" />
                                        <div className="content absolute bottom-[8%] left-[5%] lgB:left-[8%] w-full z-10 flex items-end justify-between">
                                            <h1 className="text-[20px] tracking-wide font-semibold font-sans text-white leading-tight w-full">Artificial <br /> Intelligence (Ai)</h1>
                                            <div className="cursor-pointer">
                                                <Image src={ArrowOrg} alt="Brand" className="w-[50%]" />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}
export default Hero;