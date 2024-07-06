import React from 'react'
import Link from 'next/link';
import Image from "next/image";
//========== Import Images
import footerBg from "media/images/footerBg.png"
import footerImg from "media/images/footerImg.png"
import facebook from "media/icons/facebook.png"
import instagram from "media/icons/instagram.png"
import twitter from "media/icons/twitter.png"
import linkedin from "media/icons/linkedin.png"
import youtube from "media/icons/youtube.png"
import email from "media/icons/email.png"
import phone from "media/icons/phone.png"


const Footer = () => {
    const socialLinks = [
        {
            icon: facebook,
            link: "javascript:;"
        },
        {
            icon: twitter,
            link: "javascript:;"
        },
        {
            icon: instagram,
            link: "javascript:;"
        },
        {
            icon: linkedin,
            link: "javascript:;"
        },
        {
            icon: youtube,
            link: "javascript:;"
        }
    ]
    const quickLinks = [
        {
            text: "Ios App Development",
            link: "/"
        },
        {
            text: "Mobile App Development",
            link: "javascript:;"
        },
        {
            text: "Android App Development",
            link: "javascript:;"
        },
        {
            text: "Flutter App Development",
            link: "javascript:;"
        },
        {
            text: "React Native App Development",
            link: "javascript:;"
        },
        {
            text: "Hybrid Mobile Apps Development",
            link: "javascript:;"
        },
        {
            text: "Cross Platform App Development",
            link: "javascript:;"
        },
        {
            text: "Web App Development",
            link: "javascript:;"
        },
        {
            text: "Augmented Reality Apps Development",
            link: "javascript:;"
        },
        {
            text: "Custom Mobile Development",
            link: "javascript:;"
        },
        {
            text: "ECommerce services",
            link: "javascript:;"
        },
        {
            text: "Enterprise Portal Solution",
            link: "javascript:;"
        },
        {
            text: "Magento Enterprise Solution",
            link: "javascript:;"
        },
    ];
    const servicesLinks = [
        {
            text: "Game App Development",
            link: "javascript:;"
        },
        {
            text: "2D Game Development",
            link: "javascript:;"
        },
        {
            text: "3D Game Development",
            link: "javascript:;"
        },
        {
            text: "NFT Game Development",
            link: "javascript:;"
        },
        {
            text: "Blockchain Game Development",
            link: "javascript:;"
        },
        {
            text: "Blockchain Development",
            link: "javascript:;"
        },
        {
            text: "Artificial Intelligence",
            link: "javascript:;"
        },
        {
            text: "Social Media App Development",
            link: "javascript:;"
        },
    ];
    const useFullLinks = [
        {
            text: "Contact Us",
            link: "javascript:;"
        },
        {
            text: "About Us",
            link: "javascript:;"
        },
        {
            text: "Works",
            link: "javascript:;"
        },
        {
            text: "Blogs",
            link: "javascript:;"
        },
        {
            text: "Privacy Policy",
            link: "javascript:;"
        },
        {
            text: "Terms & Conditions",
            link: "javascript:;"
        },
    ];
    return (
        <>
            <section className="relative pt-36 pb-10">
                <Image src={footerBg} alt="Brand" fill={true} className="-z-10 object-cover object-bottom w-full h-full" />
                <div className="container">
                    <div className="grid grid-cols-12 pt-10 pb-16 gap-y-8">
                        <div className="col-span-12 xl:col-span-6">
                            <div className="grid grid-cols-12 gap-y-8 xl:gap-14">
                                <div className="col-span-12 md:col-span-6">
                                    <Link href="/" className='text-[30px] text-white font-sans tracking-wide font-bold'>Brand Name</Link>
                                    <p className='text-[16px] text-white font-sans tracking-wide mt-4 pe-10 xl:pe-0'>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat</p>
                                    <ul className="flex items-center gap-4 mt-4 md:mt-6">
                                        {
                                            socialLinks.map((e, i) => {
                                                return (
                                                    <li key={i} className="flex items-center justify-center p-1">
                                                        <Link target="_blank" href={e.link}>
                                                            <Image src={e.icon} alt="Brand" className="w-[100%] xl:w-[80%]" />
                                                        </Link>
                                                    </li>
                                                );
                                            })
                                        }
                                    </ul>
                                </div>
                                <div className="col-span-12 md:col-span-6">
                                    <Link href="/" className='text-[20px] text-white font-sans tracking-wide font-bold'>Services</Link>
                                    <ul className='mt-3 relative'>
                                        <div className="absolute left-[-5%] h-full w-[1px] bg-white"></div>
                                        {
                                            quickLinks.map((e, i) => {
                                                return (
                                                    <li key={i}>
                                                        <Link href={e.link} className="text-sm xl:text-base text-white font-sans font-normal hover:opacity-50 leading-8 xl:leading-8">
                                                            {e.text}
                                                        </Link>
                                                    </li>
                                                );
                                            })
                                        }
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className="col-span-12 xl:col-span-6 relative">
                            <div className="grid grid-cols-12 gap-y-8">
                                <div className="col-span-12 md:col-span-6">
                                    <Link href="/" className='text-[20px] text-white font-sans tracking-wide font-bold'>On Demand</Link>
                                    <ul className='mt-3 relative'>
                                        <div className="absolute left-[-5%] h-full w-[1px] bg-white"></div>
                                        {
                                            servicesLinks.map((e, i) => {
                                                return (
                                                    <li key={i}>
                                                        <Link href={e.link} className="text-sm xl:text-base text-white font-sans font-normal hover:opacity-50 leading-8 xl:leading-8">
                                                            {e.text}
                                                        </Link>
                                                    </li>
                                                );
                                            })
                                        }
                                    </ul>
                                </div>
                                <div className="col-span-12 md:col-span-6">
                                    <Link href="/" className='text-[20px] text-white font-sans tracking-wide font-bold'>Useful Links</Link>
                                    <ul className='mt-3 relative'>
                                        <div className="absolute left-[-5%] h-full w-[1px] bg-white"></div>
                                        {
                                            useFullLinks.map((e, i) => {
                                                return (
                                                    <li key={i}>
                                                        <Link href={e.link} className="text-sm xl:text-base text-white font-sans font-normal hover:opacity-50 leading-8 xl:leading-8">
                                                            {e.text}
                                                        </Link>
                                                    </li>
                                                );
                                            })
                                        }
                                    </ul>
                                </div>
                            </div>
                            <div className="grid grid-cols-12 mt-16 gap-3">
                                <div className="col-span-12 md:col-span-4">
                                    <a href='mailto:info@brand.com' className="bg-transparent text-white border-2 border-white w-[60%] md:w-[80%] xl:w-max h-[60px] rounded-[15px] flex justify-center items-center gap-2">
                                        <Image src={email} alt="Brand" className="w-[10%] md:w-[12%]" />
                                        <span className="text-[20px] md:text-[16px] 2xl:text-[18px] font-normal font-sans tracking-wide">CONTACT EMAIL</span>
                                    </a>
                                </div>
                                <div className="col-span-12 md:col-span-4">
                                    <a href='tel:123456789' className="bg-transparent text-white border-2 border-white w-[60%] md:w-[80%] xl:w-max h-[60px] rounded-[15px] flex justify-center items-center gap-2">
                                        <Image src={phone} alt="Brand" className="w-[10%] md:w-[12%]" />
                                        <span className="text-[20px] md:text-[16px] 2xl:text-[18px] font-normal font-sans tracking-wide">+1 312 379 5987</span>
                                    </a>
                                </div>
                                <div className="col-span-12 md:col-span-4">
                                    <a href='tel:123456789' className="bg-transparent text-white border-2 border-white w-[60%] md:w-[80%] xl:w-max h-[60px] rounded-[15px] flex justify-center items-center gap-2">
                                        <Image src={phone} alt="Brand" className="w-[10%] md:w-[12%]" />
                                        <span className="text-[20px] md:text-[16px] 2xl:text-[18px] font-normal font-sans tracking-wide">+1 833 500 6007</span>
                                    </a>
                                </div>
                            </div>
                            <div className="hidden md:block absolute top-0 xl:top-[25%] left-[70%]">
                                <Image src={footerImg} alt="Brand" className="w-[100%]" />
                            </div>
                        </div>
                    </div>
                    <hr />
                    <div className="pt-10">
                        <p className="text-[14px] tracking-wide font-poppins text-white text-center">Copyright © 2024 BitsWits. |Brand Of Bhaoo Incorporation Company</p>
                    </div>
                </div>
            </section>
        </>
    );
}
export default Footer;