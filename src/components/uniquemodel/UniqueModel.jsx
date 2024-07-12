import React from "react";
import Image from "next/image";
//========== Import Images
import model1 from "media/icons/webIcons/model1.png"
import model2 from "media/icons/webIcons/model2.png"
import model3 from "media/icons/webIcons/model3.png"
import model4 from "media/icons/webIcons/model4.png"


const UniqueModel = () => {
    return (
        <>
            <section className="py-10 lg:py-20">
                <div className="container">
                    <div className="grid grid-cols-12 gap-y-8 gap-x-0 md:gap-x-5">
                        <div className="col-span-12 md:col-span-6 xl:col-span-3">
                            <div className="flex flex-col items-center justify-center gap-4">
                                <Image src={model1} alt="Brand" className="w-[30%] mb-0 md:mb-3" />
                                <h4 className="text-[18px] tracking-wide font-bold font-sans text-black text-center leading-tight">Refreshingly Unique Model</h4>
                                <p className="text-[14px] tracking-wide font-poppins text-black text-center">Transparent & Local Interaction Real-time Collaboration & Accountability Full-time, Dedicated Developers</p>
                            </div>
                        </div>
                        <div className="col-span-12 md:col-span-6 xl:col-span-3">
                            <div className="flex flex-col items-center justify-center gap-4">
                                <Image src={model2} alt="Brand" className="w-[30%] mb-0 md:mb-3" />
                                <h4 className="text-[18px] tracking-wide font-bold font-sans text-black text-center leading-tight">One-Stop Development Shop</h4>
                                <p className="text-[14px] tracking-wide font-poppins text-black text-center">2800 In-house Developers Bridge Any Skillset Gap Industry-Specific Technical Teams</p>
                            </div>
                        </div>
                        <div className="col-span-12 md:col-span-6 xl:col-span-3">
                            <div className="flex flex-col items-center justify-center gap-4">
                                <Image src={model3} alt="Brand" className="w-[30%] mb-0 md:mb-3" />
                                <h4 className="text-[18px] tracking-wide font-bold font-sans text-black text-center leading-tight">Affordable, Productive Services</h4>
                                <p className="text-[14px] tracking-wide font-poppins text-black text-center">No Overtime or Hidden FeesFree QA and Free Management Save 50 - 75% on Development Costs!</p>
                            </div>
                        </div>
                        <div className="col-span-12 md:col-span-6 xl:col-span-3">
                            <div className="flex flex-col items-center justify-center gap-4">
                                <Image src={model4} alt="Brand" className="w-[30%] mb-0 md:mb-3" />
                                <h4 className="text-[18px] tracking-wide font-bold font-sans text-black text-center leading-tight">Work For Hire Services</h4>
                                <p className="text-[14px] tracking-wide font-poppins text-black text-center">Start Your Project Within 48 HoursWe Foster Long-Term Relationships Over 22+ Years in Service to Our Customers</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}
export default UniqueModel;