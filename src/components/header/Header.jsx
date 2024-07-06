"use client"
import React, { useEffect, useState } from "react";
import Link from "next/link";
//========== Import Components
import CTA from "@/components/cta/CTA";
//========== Import Icons
import {
    Navbar, Collapse, Typography, List, Menu, MenuHandler, MenuList, MenuItem,
} from "@material-tailwind/react";
import {
    ChevronDownIcon, Bars3Icon, XMarkIcon, ChevronRightIcon,
} from "@heroicons/react/24/outline";
import {
    Bars4Icon, GlobeAmericasIcon, NewspaperIcon, PhoneIcon, RectangleGroupIcon, SquaresPlusIcon, SunIcon, TagIcon, UserGroupIcon,
} from "@heroicons/react/24/solid";


const megaMenuItems = [
    {
        title: "Mobile App Development",
        icon: SquaresPlusIcon,
        href: "#",
    },
    {
        title: "Game App Development",
        icon: UserGroupIcon,
        href: "#",
    },
    {
        title: "Blockchain Development",
        icon: Bars4Icon,
        href: "/architectural-visualization",
    },
    {
        title: "Artificial Intelligence",
        icon: SunIcon,
        href: "/cgi-and-vfx-services",
    },
    {
        title: "Web App Development",
        icon: GlobeAmericasIcon,
        href: "/hybrid-&-cel-animations",
    },
    {
        title: "Business Intelligence ",
        icon: PhoneIcon,
        href: "/infographics-design",
    },
    {
        title: "Web Development",
        icon: NewspaperIcon,
        href: "/custom-logo-animation",
    },
    {
        title: "UI UX App Design",
        icon: RectangleGroupIcon,
        href: "/motion-graphics",
    },
    {
        title: "Ios",
        icon: TagIcon,
        href: "/video-editing",
    },
    {
        title: "Android",
        icon: UserGroupIcon,
        href: "/whiteboard-animation",
    },
];

function MegaMenu1() {
    const [isMenuOpen, setIsMenuOpen] = React.useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = React.useState(false);
    const renderItems = megaMenuItems.map(
        ({ icon, title, href }, key) => (
            <div key={key}>
                <MenuItem className="flex items-center gap-3 rounded-lg mb-1 lg:mb-0">
                    <div className="flex items-center justify-center rounded-lg !bg-blue-gray-50 p-2">
                        {" "}
                        {React.createElement(icon, {
                            strokeWidth: 2,
                            className: "h-6 text-gray-900 w-6 text-black",
                        })}
                    </div>
                    <div>
                        <Link
                            href={href}
                            variant="h6"
                            color="black"
                            className="flex items-center font-poppins text-[16px] font-normal text-black hover:text-primary-100 h-full"
                        >
                            {title}
                        </Link>
                    </div>
                </MenuItem>
            </div>
        ),
    );
    // Mobile Mega Menu 
    const [megamenu, setMegaMenu] = React.useState(false);
    const handleMegaMenu = () => {
        setMegaMenu((prev) => !prev);
    }
    return (
        <React.Fragment>
            <Menu
                open={isMenuOpen}
                handler={setIsMenuOpen}
                offset={{ mainAxis: 20 }}
                placement="bottom"
                allowHover={true}
            >
                <MenuHandler>
                    <Link href="#" variant="small" className="font-medium">
                        <span
                            className="flex items-center px-2 gap-2 py-2 font-poppins text-[12px] lg:text-[16px] font-medium leading-[20px] xl:leading-[24px] hover:text-primary-100"
                            selected={isMenuOpen || isMobileMenuOpen}
                            onClick={() => {
                                if (window.innerWidth <= 991) {
                                    handleMegaMenu();
                                } else {
                                    setIsMobileMenuOpen((cur) => !cur)
                                }
                            }}
                        >
                            Services
                            <ChevronDownIcon
                                strokeWidth={2.5}
                                className={`hidden h-3 w-3 transition-transform lg:block ${isMenuOpen ? "rotate-180" : ""
                                    }`}
                            />
                            <ChevronRightIcon
                                strokeWidth={2.5}
                                className={`block h-3 w-3 mt-1 transition-transform lg:hidden ${isMobileMenuOpen ? "rotate-180" : ""
                                    }`}
                            />
                        </span>
                    </Link>
                </MenuHandler>
                <MenuList className="hidden max-w-screen-xl rounded-xl lg:block">
                    <ul className="grid grid-cols-3 gap-y-2 outline-none outline-0">
                        {renderItems}
                    </ul>
                </MenuList>
            </Menu>
            <div className={megamenu ? `absolute left-[0%] top-0 pt-5 bg-white w-full h-full transition-all duration-300 ease-in-out` : `lg:hidden absolute left-[-130%] top-0 pt-5 bg-white w-full h-full transition-all duration-300 ease-in-out`}>
                <Collapse open={isMobileMenuOpen} className="h-full overflow-visible">{renderItems}</Collapse>
                <div className="absolute top-[10px] right-[10px] bg-black rounded-full p-1" onClick={() => handleMegaMenu()}>
                    <XMarkIcon
                        strokeWidth={2.5}
                        className={`block h-5 w-5 transition-transform text-white lg:hidden`}
                    />
                </div>
            </div>
        </React.Fragment>
    );
}

function MegaMenu2() {
    const [isMenuOpen, setIsMenuOpen] = React.useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = React.useState(false);
    const renderItems = megaMenuItems.map(
        ({ icon, title, href }, key) => (
            <div key={key}>
                <MenuItem className="flex items-center gap-3 rounded-lg mb-1 lg:mb-0">
                    <div className="flex items-center justify-center rounded-lg !bg-blue-gray-50 p-2">
                        {" "}
                        {React.createElement(icon, {
                            strokeWidth: 2,
                            className: "h-6 text-gray-900 w-6 text-black",
                        })}
                    </div>
                    <div>
                        <Link
                            href={href}
                            variant="h6"
                            color="black"
                            className="flex items-center font-poppins text-[16px] font-normal text-black hover:text-primary-100 h-full"
                        >
                            {title}
                        </Link>
                    </div>
                </MenuItem>
            </div>
        ),
    );
    // Mobile Mega Menu 
    const [megamenu, setMegaMenu] = React.useState(false);
    const handleMegaMenu = () => {
        setMegaMenu((prev) => !prev);
    }
    return (
        <React.Fragment>
            <Menu
                open={isMenuOpen}
                handler={setIsMenuOpen}
                offset={{ mainAxis: 20 }}
                placement="bottom"
                allowHover={true}
            >
                <MenuHandler>
                    <Link href="#" variant="small" className="font-medium">
                        <span
                            className="flex items-center px-2 gap-2 py-2 font-poppins text-[12px] lg:text-[16px] font-medium leading-[20px] xl:leading-[24px] hover:text-primary-100"
                            selected={isMenuOpen || isMobileMenuOpen}
                            onClick={() => {
                                if (window.innerWidth <= 991) {
                                    handleMegaMenu();
                                } else {
                                    setIsMobileMenuOpen((cur) => !cur)
                                }
                            }}
                        >
                            Our Work
                            <ChevronDownIcon
                                strokeWidth={2.5}
                                className={`hidden h-3 w-3 transition-transform lg:block ${isMenuOpen ? "rotate-180" : ""
                                    }`}
                            />
                            <ChevronRightIcon
                                strokeWidth={2.5}
                                className={`block h-3 w-3 mt-1 transition-transform lg:hidden ${isMobileMenuOpen ? "rotate-180" : ""
                                    }`}
                            />
                        </span>
                    </Link>
                </MenuHandler>
                <MenuList className="hidden max-w-screen-xl rounded-xl lg:block">
                    <ul className="grid grid-cols-3 gap-y-2 outline-none outline-0">
                        {renderItems}
                    </ul>
                </MenuList>
            </Menu>
            <div className={megamenu ? `absolute left-[0%] top-0 pt-5 bg-white w-full h-full transition-all duration-300 ease-in-out` : `lg:hidden absolute left-[-130%] top-0 pt-5 bg-white w-full h-full transition-all duration-300 ease-in-out`}>
                <Collapse open={isMobileMenuOpen} className="h-full overflow-visible">{renderItems}</Collapse>
                <div className="absolute top-[10px] right-[10px] bg-black rounded-full p-1" onClick={() => handleMegaMenu()}>
                    <XMarkIcon
                        strokeWidth={2.5}
                        className={`block h-5 w-5 transition-transform text-white lg:hidden`}
                    />
                </div>
            </div>
        </React.Fragment>
    );
}

function NavList() {
    return (
        <List className="mt-4 lg:mt-0 mb-0 p-0 pb-4 lg:pb-0 lg:flex-row lg:p-1 gap-3 bg-black lg:bg-transparent border-b-2 border-[prime/100] lg:border-0">
            <Link
                href="/"
                variant="small"
                color="black"
                className="font-poppins text-[12px] lg:text-[16px] font-medium hover:text-primary-100"
            >
                <span className="flex items-center gap-2 p-2 xl:px-4 py-2">Home</span>
            </Link>
            <MegaMenu1 />
            <MegaMenu2 />
            <Link
                href="#"
                variant="small"
                color="black"
                className="font-poppins text-[12px] lg:text-[16px] font-medium hover:text-primary-100"
            >
                <span className="flex items-center gap-2 p-2 xl:px-4 py-2">About</span>
            </Link>
            <Link
                href="#"
                variant="small"
                color="black"
                className="font-poppins text-[12px] lg:text-[16px] font-medium hover:text-primary-100"
            >
                <span className="flex items-center gap-2 p-2 xl:px-4 py-2">
                    Contact
                </span>
            </Link>
        </List>
    );
}

const Header = () => {
    const [openNav, setOpenNav] = React.useState(false);

    React.useEffect(() => {
        window.addEventListener(
            "resize",
            () => window.innerWidth >= 1099 && setOpenNav(false),
        );
    }, []);
    // ===============================================
    const [isScrolled, setIsScrolled] = useState(false);
    useEffect(() => {
        const handleScroll = () => {
            const scrollTop = window.scrollY;
            setIsScrolled(scrollTop > 1);
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <header className={`w-full z-[999] rounded-none pt-5 ${isScrolled ? '' : 'bg-transparent'}`}>
            <div className="container">
                <Navbar className="max-w-none shadow-none px-0 py-2 rounded-none bg-transparent border-none">
                    <div className="flex items-center justify-between text-black relative">
                        <Typography
                            href="/"
                            variant="h6"
                            className="mr-4 cursor-pointer py-1.5 lg:ml-2 lg:w-[170px] text-[24px] font-bold"
                        >
                            Brand Name
                            {/* <Image src={logo} className="w-[45%] md:w-[28%] lg:w-[50%]" alt="Infinity Animation" /> */}
                        </Typography>
                        <div className="hidden lg:flex items-center justify-between w-[100%] gap-5">
                            <NavList />
                            <div className="flex gap-2 bg-[#DFDFDF] p-1 rounded-[15px]">
                                <CTA
                                    text="Get To Know Us"
                                    href="javascript:;"
                                />
                                <CTA
                                    text="Get A Quote"
                                    bg="bg-black text-white"
                                />
                            </div>
                        </div>
                        <button onClick={() => setOpenNav(!openNav)} className="block lg:hidden">
                            {openNav ? (
                                <XMarkIcon className="h-[40px] w-[40px]" strokeWidth={2} />
                            ) : (
                                <Bars3Icon className="h-[40px] w-[40px]" strokeWidth={2} />
                            )}
                        </button>
                    </div>
                    {openNav && (
                        <Collapse open={openNav} className="block lg:hidden">
                            <NavList />
                        </Collapse>
                    )}
                </Navbar>
            </div>
        </header>
    );
}
export default Header;