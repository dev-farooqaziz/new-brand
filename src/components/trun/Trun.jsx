"use client"
import React, { useEffect, useState } from 'react'
import Image from "next/image";
import Axios from "axios";
//========== Import Images
import trunBg from "media/images/trunBg.png"
import arrowCta from "media/icons/arrowCta.png"


const Trun = () => {
    // For Date
    let newDate = new Date();
    let date = newDate.getDate();
    let month = newDate.getMonth() + 1;
    let year = newDate.getFullYear();
    // For Time
    let today = new Date();
    let setTime = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
    let setDate = `${month < 10 ? `0${month}` : `${month}`}-${date}-${year}`;
    const [ip, setIP] = useState("");
    //creating function to load ip address from the API
    const getIPData = async () => {
        const res = await Axios.get(
            "https://api.ip2location.io/?key=F9B01293761EF666EB54678698AC8682"
        );
        setIP(res);
    };
    useEffect(() => {
        getIPData();
    }, []);
    // For Page
    const [pagenewurl, setPagenewurl] = useState(null);
    useEffect(() => {
        setPagenewurl(window.location.href);
    }, [setPagenewurl]);
    const [data, setData] = useState({
        name: "",
        phone: "",
        email: "",
        message: "",
        botchecker: null,
    });
    const handleDataChange = (e) => {
        setData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
    };
    const [formStatus, setFormStatus] = useState("Submit");
    const [errors, setErrors] = useState({});
    const [isDisabled, setIsDisabled] = useState(false);
    const formValidateHandle = () => {
        let errors = {};
        // Name validation
        if (!data.name.trim()) {
            errors.name = "Name is required";
        }
        // Email validation
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!data.email.match(emailRegex)) {
            errors.email = "Valid email is required";
        }
        // Phone validation
        const phoneRegex = /[0-9]/i;
        if (!data.phone.match(phoneRegex)) {
            errors.phone = "Valid phone is required";
        }
        return errors;
    };
    const handleFormSubmit = async (e) => {
        e.preventDefault();
        setFormStatus("Processing...");
        setIsDisabled(true);
        const errors = formValidateHandle();
        setErrors(errors);
        if (Object.keys(errors).length === 0) {
            if (data.botchecker === null) {
                let headersList = {
                    Accept: "*/*",
                    "Content-Type": "application/json",
                };
                let bodyContent = JSON.stringify({ ...data, pageURL: pagenewurl });
                let reqOptions = {
                    url: "/api/email",
                    method: "POST",
                    headers: headersList,
                    data: bodyContent,
                };
                await Axios.request(reqOptions);
            } else {
                setFormStatus("Failed...");
                setIsDisabled(false);
            }
        } else {
            setFormStatus("Failed...");
            setIsDisabled(false);
        }
        if (Object.keys(errors).length === 0) {
            if (data.botchecker === null) {
                let headersList = {
                    Accept: "*/*",
                    Authorization: "Bearer ke2br2ubssi4l8mxswjjxohtd37nzexy042l2eer",
                    "Content-Type": "application/json",
                };
                let bodyContent = JSON.stringify({
                    "IP": `${ip.ip} - ${ip.country_name} - ${ip.city_name}`,
                    "Brand": "Infinity Animations",
                    "Page": pagenewurl,
                    "Date": setDate,
                    "Time": setTime,
                    "JSON": { ...data, pageURL: pagenewurl },
                });
                let reqOptions = {
                    url: "https://sheetdb.io/api/v1/1ownp6p7a9xpi",
                    method: "POST",
                    headers: headersList,
                    data: bodyContent,
                };
                await Axios.request(reqOptions);
                window.location.href = "/thank-you";
            }
        }
    };
    return (
        <>
            <section className="py-10 lg:pt-20 lg:pb-[260px] xl:pb-[350px] relative z-10 overflow-hidden">
                <div className="container">
                    <div className='w-[85%] mx-auto'>
                        <h2 className="text-[30px] lg:text-[50px] 2xl:text-[55px] tracking-wide font-bold font-sans text-black text-center leading-tight">Turn Your App Idea Into An App</h2>
                        <form className='flex flex-col lg:flex-row gap-6 mt-5 md:mt-10 lg:mt-20'>
                            <div className="relative w-full">
                                <input type="text" id="name" name="name" className="block p-3 w-full font-sans tracking-wide text-sm text-black border-b-2 focus:outline-none focus:border-primary-100 bg-transparent placeholder:text-black" placeholder="Your Name" onChange={handleDataChange} />
                                {errors.name && (
                                    <span className="text-[12px] block p-2 font-sans font-medium text-primary-100 absolute left-0 bottom-[-58%]">
                                        {errors.name}
                                    </span>
                                )}
                            </div>
                            <div className="relative w-full">
                                <input type="email" id="email" name="email" className="block p-3 w-full font-sans tracking-wide text-sm text-black border-b-2 focus:outline-none focus:border-primary-100 bg-transparent placeholder:text-black" placeholder="Email Address" onChange={handleDataChange} />
                                {errors.email && (
                                    <span className="text-[12px] block p-2 font-sans font-medium text-primary-100 absolute left-0 bottom-[-58%]">
                                        {errors.email}
                                    </span>
                                )}
                            </div>
                            <div className="relative w-full">
                                <input type="tel" id="phone" name="phone" minLength="10" maxLength="13" className="block p-3 w-full font-sans tracking-wide text-sm text-black border-b-2 focus:outline-none focus:border-primary-100 bg-transparent placeholder:text-black" placeholder="Phone Number" onChange={handleDataChange} />
                                {errors.phone && (
                                    <span className="text-[12px] block p-2 font-sans font-medium text-primary-100 absolute left-0 bottom-[-58%]">
                                        {errors.phone}
                                    </span>
                                )}
                            </div>
                            <div className="w-full lg:w-max">
                                <button type="submit" className="bg-black text-white border-0 h-[40px] lg:h-[50px] px-14 rounded-[15px] flex items-center justify-center gap-x-2 focus:outline-none w-full lg:w-auto" onClick={handleFormSubmit} disabled={isDisabled}>
                                    <span className='text-[16px] lg:text-[12px] xl:text-[16px] 2xl:text-[18px] font-normal font-sans tracking-wide'>{formStatus}</span>
                                    <Image src={arrowCta} alt="Brand" className="flex items-center justify-center w-[25px] h-[25px] p-1 object-contain" />
                                </button>
                            </div>
                        </form>
                    </div>
                    <div className="mt-10 lg:mt-20">
                        <p className='text-[16px] lg:text-[24px] tracking-wide font-poppins text-justify md:text-center text-black'>Discover excellence in app innovation with Bitswits, a leading mobile app development company. We turn your ideas into impactful mobile app solutions. Our expertise isn't just in coding; it's about understanding your needs and delivering an app that resonates with your audience. Experience the Bitswits difference: where expertise meets excellence, and your vision becomes a reality.</p>
                    </div>
                </div>
                <Image src={trunBg} alt="Brand" className="hidden lg:block absolute left-0 bottom-0 -z-10 w-full" />
            </section>
        </>
    );
}
export default Trun;