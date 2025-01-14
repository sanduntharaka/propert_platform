"use client";
import Image from 'next/image'
import React, { useState, useEffect } from 'react'
import RoundIcon from '../../assets/icons/circle.png'
import { routes } from './routes'
import clsx from 'clsx';
import { usePathname } from 'next/navigation';
import { IoMenu } from "react-icons/io5";
export const NavBar = () => {
    const pathname = usePathname()
    const [menuOpen, setMenuOpen] = useState(false);

    const [isVisible, setIsVisible] = useState(true);
    const [lastScrollY, setLastScrollY] = useState(0);

    useEffect(() => {
        const handleScroll = () => {
            const currentScrollY = window.scrollY;

            if (currentScrollY > lastScrollY && currentScrollY > 100) {
                // Scroll down - hide the navbar
                setIsVisible(false);
            } else {
                // Scroll up - show the navbar
                setIsVisible(true);
            }

            setLastScrollY(currentScrollY);
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, [lastScrollY]);

    const handleMenu = () => {

        setMenuOpen(!menuOpen)
    }

    const handleMenuItemClick = () => {
        setMenuOpen(false)
    }
    return (
        <div
            className={clsx(
                "bg-white  fixed top-0 left-0 w-full transition-transform duration-300 z-50",
                {
                    "translate-y-0": isVisible,
                    "-translate-y-full": !isVisible,
                }, {
                'h-screen': menuOpen,
                'h-[72px]': !menuOpen
            }
            )}
        >
            <div className="max-w-[1440px] mx-auto px-8">
                <div className="py-4 flex items-center justify-between">
                    <div>
                        <p className="font-bold text-2xl">LEIGBROOK</p>
                    </div>
                    <nav className="gap-6 items-center hidden md:flex">
                        {routes?.map((route: Route, index: number) => (
                            <a
                                href={route.path}
                                className={clsx(
                                    "text-opacity-60 text-black hover:text-opacity-100 transition",
                                    {
                                        "font-bold underline underline-offset-4 decoration-[#6390db] decoration-2":
                                            pathname === route.path,
                                    }
                                )}
                                key={index}
                            >
                                {route.name}
                            </a>
                        ))}
                    </nav>
                    <div>
                        <button className="bg-primary-grey py-2 px-4 font-semibold flex items-center gap-3 md:flex sm:hidden ">
                            <Image src={RoundIcon} alt="circle image" />
                            Contact us
                        </button>

                        <IoMenu className={clsx('w-6 h-6 md:hidden sm:inline', {
                            'rotate-90': menuOpen
                        })} onClick={handleMenu} />
                    </div>
                </div>
            </div>
            {
                menuOpen && <div className="bg-white" onClick={handleMenuItemClick}>
                    <nav className="gap-6 items-center flex flex-col">
                        {routes?.map((route: Route, index: number) => (
                            <a
                                href={route.path}
                                className={clsx(
                                    "text-opacity-60 text-black hover:text-opacity-100 transition",
                                    {
                                        "font-bold underline underline-offset-4 decoration-[#6390db] decoration-2":
                                            pathname === route.path,
                                    }
                                )}
                                key={index}
                            >
                                {route.name}
                            </a>
                        ))}
                        <button className="bg-primary-grey py-2 px-4 font-semibold flex items-center gap-3 ">
                            <Image src={RoundIcon} alt="circle image" />
                            Contact us
                        </button>
                    </nav>
                </div>
            }
        </div>
    )
}


