import React from "react";
import Image from "next/image";
//========== Import Images
import biIcon1 from "media/icons/businessIcons/biIcon1.png"
import biIcon2 from "media/icons/businessIcons/biIcon2.png"
import biIcon3 from "media/icons/businessIcons/biIcon3.png"


const CustomBi = () => {
    return (
        <>
            <section className="py-10 lg:py-20">
                <div className="container">
                    <div className="mb-12">
                        <div className="bg-[#EBEBEB] text-black border-0 w-full md:w-max h-full md:h-[40px] xl:h-[45px] mx-auto px-6 py-2 md:py-0 rounded-[45px] text-center md:text-left flex items-center cursor-pointer mb-2">
                            <span className="text-[22px] font-sans tracking-wide">BI Software Integrations</span>
                        </div>
                        <h2 className="text-[30px] lg:text-[50px] 2xl:text-[55px] tracking-wide font-bold font-sans text-black text-center leading-tight">Custom BI Software Integrations</h2>
                        <p className="text-[15px] tracking-wide font-poppins text-black text-center my-4 lg:my-6">Our custom BI software solutions are designed to import essential data from a wide variety of web/URL feeds and file formats, <br className="hidden lg:block" /> including JSON, HTML, XML, CSV, XLS, XLSX, and many more. We seamlessly integrate third-party business intelligence (BI) analytics <br className="hidden lg:block" /> solutions with your current business processes to effectively streamline your workflows and gain full visibility over your business insights.</p>
                    </div>
                    <div className="grid grid-cols-12 gap-y-8 gap-x-0 md:gap-x-5">
                        <div className="col-span-12 md:col-span-4">
                            <div className="flex flex-col items-center justify-center gap-4">
                                <Image src={biIcon1} alt="Brand" className="w-[30%] mb-0 md:mb-3" />
                                <h4 className="text-[20px] tracking-wide font-bold font-sans text-black leading-tight">ZOHO Analyticst</h4>
                                <p className="text-[14px] tracking-wide font-poppins text-black text-center">Our developers integrate the ZOHO analytics platform with your current business systems to collect raw data and transform it into visually stunning and insightful reports and dashboards.</p>
                            </div>
                        </div>
                        <div className="col-span-12 md:col-span-4">
                            <div className="flex flex-col items-center justify-center gap-4">
                                <Image src={biIcon2} alt="Brand" className="w-[30%] mb-0 md:mb-3" />
                                <h4 className="text-[20px] tracking-wide font-bold font-sans text-black leading-tight">Oracle BI</h4>
                                <p className="text-[14px] tracking-wide font-poppins text-black text-center">Our talented developers seamlessly integrate with Oracle Business Intelligence solutions to help businesses effectively manage their business insights, streamline workflows, and gain full visibility into their metrics.</p>
                            </div>
                        </div>
                        <div className="col-span-12 md:col-span-4">
                            <div className="flex flex-col items-center justify-center gap-4">
                                <Image src={biIcon3} alt="Brand" className="w-[30%] mb-0 md:mb-3" />
                                <h4 className="text-[20px] tracking-wide font-bold font-sans text-black leading-tight">Logi Analytics</h4>
                                <p className="text-[14px] tracking-wide font-poppins text-black text-center">We integrate Logi Analytics Solutions with your existing business systems to help cut down on maintenance and deployment costs while allowing you to utilize a fully documented embedded analytics platform.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}
export default CustomBi;