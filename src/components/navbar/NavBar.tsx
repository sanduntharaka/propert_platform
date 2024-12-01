"use client";
import Image from 'next/image'
import React from 'react'
import RoundIcon from '../../assets/icons/circle.png'
import { routes } from './routes'
import clsx from 'clsx';
import { usePathname } from 'next/navigation';
export const NavBar = () => {
    const pathname = usePathname()

    return (
        <div className=" bg-white h-[72px]">
            <div className="">
                <div className="py-4 flex items-center justify-between">
                    <div>
                        <p className='font-bold text-2xl'>LEGIBROOK</p>
                    </div>
                    <nav className="gap-6 items-center hidden md:flex">
                        {
                            routes?.map((route: Route, index: number) => (
                                <a href={route.path} className={clsx("text-opacity-60 text-black hover:text-opacity-100 transition", {
                                    'font-bold underline underline-offset-4 decoration-[#6390db] decoration-2': pathname === route.path
                                })} key={index}>{route.name}</a>
                            ))

                        }
                    </nav>
                    <div>
                        <button className="bg-primary-grey py-2 px-4 font-semibold flex items-center gap-3">
                            <Image src={RoundIcon} alt="circle image" />
                            Contact us
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}


