import React from "react";
import Image from "next/image";
//========== Import Images
import stackIcn1 from "media/icons/webIcons/stackIcn1.png"
import stackIcn2 from "media/icons/webIcons/stackIcn2.png"
import stackIcn3 from "media/icons/webIcons/stackIcn3.png"
import stackIcn4 from "media/icons/webIcons/stackIcn4.png"


const FullStack = () => {
    return (
        <>
            <section className="py-10 lg:py-20">
                <div className="container">
                    <div className="mb-12">
                        <div className="bg-[#EBEBEB] text-black border-0 w-full md:w-max h-full md:h-[40px] xl:h-[45px] mx-auto px-6 py-2 md:py-0 rounded-[45px] text-center flex items-center justify-center cursor-pointer mb-2">
                            <span className="text-[22px] font-sans tracking-wide">Technology</span>
                        </div>
                        <h2 className="text-[30px] lg:text-[50px] 2xl:text-[55px] tracking-wide font-bold font-sans text-black text-center leading-tight">Full-Stack Technology</h2>
                        <p className="text-[15px] tracking-wide font-poppins text-black text-center my-4 lg:my-6">Our Website Developers utilize multiple software platforms, providing greater computing power, enhanced graphics, robust security <br /> standards, and improved performance levels.</p>
                    </div>
                    <div className="grid grid-cols-12 gap-y-8 gap-x-0 md:gap-x-5">
                        <div className="col-span-12 md:col-span-6">
                            <div className="bg-[#FBA900] text-white border-0 w-max h-[40px] xl:h-[45px] mx-auto px-6 py-2 md:py-0 rounded-[45px] text-center flex items-center cursor-pointer mb-6">
                                <span className="text-[22px] font-sans tracking-wide">Client Software (Front-End)</span>
                            </div>
                            <div className="flex flex-col justify-center gap-8 px-5 lg:px-8 bg-[#EEEEEE] rounded-[40px] h-[450px]">
                                <div className="flex flex-col gap-4">
                                    <Image src={stackIcn1} alt="Brand" className="w-[8%]" />
                                    <h4 className="text-[20px] tracking-wide font-bold font-sans text-black leading-tight">Java Script</h4>
                                    <p className="text-[14px] tracking-wide font-poppins text-black">Our software engineers use JavaScript to calculate, manipulate, and validate different data to create dynamic and interactive user experiences.</p>
                                </div>
                                <div className="flex flex-col gap-4">
                                    <Image src={stackIcn2} alt="Brand" className="w-[8%]" />
                                    <h4 className="text-[20px] tracking-wide font-bold font-sans text-black leading-tight">Html</h4>
                                    <p className="text-[14px] tracking-wide font-poppins text-black">Our Software Development Team has many years of collective experience working with HTML programming language for developing best-in-class custom websites and applications.</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-span-12 md:col-span-6">
                            <div className="bg-[#FBA900] text-white border-0 w-max h-[40px] xl:h-[45px] mx-auto px-6 py-2 md:py-0 rounded-[45px] text-center flex items-center cursor-pointer mb-6">
                                <span className="text-[22px] font-sans tracking-wide">Server Software (Back-End)</span>
                            </div>
                            <div className="flex flex-col justify-center gap-8 px-5 lg:px-8 bg-[#000000] rounded-[40px] h-[450px]">
                                <div className="flex flex-col gap-4">
                                    <Image src={stackIcn3} alt="Brand" className="w-[20%]" />
                                    <h4 className="text-[20px] tracking-wide font-bold font-sans text-white leading-tight">Php</h4>
                                    <p className="text-[14px] tracking-wide font-poppins text-white">Our Software Development Team uses PHP frameworks to provide a basic structure for streamlining and speeding up the development process of building personalized web websites and apps.</p>
                                </div>
                                <div className="flex flex-col gap-4">
                                    <Image src={stackIcn4} alt="Brand" className="w-[20%]" />
                                    <h4 className="text-[20px] tracking-wide font-bold font-sans text-white leading-tight">Express.Js</h4>
                                    <p className="text-[14px] tracking-wide font-poppins text-white">Our experts utilize Express.js to simplify the web application development process, making it easier to write fast, secure, and modular applications.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}
export default FullStack;