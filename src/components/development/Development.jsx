import React from "react";
import Image from "next/image";
//========== Import Components
import CTA from "@/components/cta/CTA2";
//========== Import Images
import frontend from "media/webApp/front.png"
import backend from "media/webApp/back.png"

const Development = () => {
    return (
        <>
            <section className="py-10 lg:py-20">
                <div className="container">
                    <div className="grid grid-cols-12 gap-y-8 sm:gap-y-14 gap-8 items-center">
                        <div className="col-span-12 lg:col-span-7">
                            <h2 className="text-[30px] lg:text-[40px] 2xl:text-[50px] tracking-wide font-semibold font-sans text-black leading-tight">Full-Service Web App <br className="hidden lg:block" /> Development Company <br className="hidden lg:block" /> Dedicated To Unlocking Your <br className="hidden lg:block" /> Business Potential</h2>
                            <p className="text-[15px] font-light tracking-wide font-poppins text-black mt-4 mb-4 lg:mt-5 lg:mb-9 lg:pr-1">BitsWits leave no stone unturned when it comes to developing websites that celebrate marketing features, customization, and robustness that add value to your business. When partnering with us, you knock the opportunity to outweigh the marketing investment you made initially. From developing B2B and B2C to B2E websites, there is nothing our industry-trained developers can't build.</p>
                            <div className="w-max flex gap-5">
                                <CTA
                                    text="Book A Call"
                                    bg="bg-[#FBA900] text-white"
                                />
                                <CTA
                                    text="Let's Connect"
                                    bg="bg-[#000000] text-white"
                                    href="javascript:$zopim.livechat.window.show();"
                                />
                            </div>
                        </div>
                        <div className="col-span-12 lg:col-span-5">
                            <div className="bg-[#EEEEEE] rounded-[30px] md:rounded-[60px] py-10">
                                <div className="border-b pb-8 border-b-black">
                                    <div className="px-5 md:px-8 lg:px-6 2xl:px-8">
                                        <h3 className="text-[20px] xl:text-[24px] font-sans tracking-wide font-semibold text-black">Front-End Web Development</h3>
                                        <p className="text-[15px] tracking-wide font-poppins text-black mt-4 mb-4 md:mt-5 md:mb-9">We specialize in building innovative, complex, user-centric, responsive front-end web solutions that look incredible on mobile devices and desktop screens.</p>
                                        <div className="w-[75%]">
                                            <Image src={frontend} alt="Brand" />
                                        </div>
                                    </div>
                                </div>
                                <div className="pt-8">
                                    <div className="px-5 md:px-8 lg:px-6 2xl:px-8">
                                        <h3 className="text-[20px] xl:text-[24px] font-sans tracking-wide font-semibold text-black">Back End Web Development</h3>
                                        <p className="text-[15px] tracking-wide font-poppins text-black mt-4 mb-4 md:mt-5 md:mb-9">BitsWits render customized back-end solutions that process a large amount of data, operate seamlessly under heavy loads, and show absolutely no latency issues.</p>
                                        <div className="w-[75%]">
                                            <Image src={backend} alt="Brand" />
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
export default Development;