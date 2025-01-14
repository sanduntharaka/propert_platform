import React from 'react'
import Image from 'next/image'
import EmpowerImg from '../../../assets/images/empower.webp'
import Rectangle from '../../../assets/icons/rectangle.png'


export const EmpowerSection = () => {
    return (
        <div className='max-w-[1440px] md:mr-auto md:ml-auto sm:mb-14 sm:mr-8 sm:ml-8 lg:mb-28 md:mb-16  '>
            <div className='flex md:flex-row sm:flex-col items-center lg:gap-[80px] sm:gap-12'>
                <div className='md:flex-1  '>
                    <div className='flex flex-col lg:gap-[30px] md:gap-5 sm:gap-12 font-normal md:text-xl sm:text-base text-primary-button '>
                        <div className='flex flex-col md:gap-2 sm:gap-3'>
                            <div className='flex items-center gap-3'>
                                <Image src={Rectangle} alt="Rectangle" className='lg:w-[10px] lg:h-[10px] sm:w-[10px] sm:h-[10px] md:w-[5.79px] md:h-[5.79px]' />
                                <p className='lg:text-base sm:text-base md:text-tiny'>Empower</p>
                            </div>
                            <div className='flex flex-col gap-6 md:gap-3 sm:gap-6'>
                                <h3 className='font-gellix font-bold text-primary-button'>
                                    Building Communities Through Real Estate Innovation
                                </h3>
                                <p className='md:ml-0 lg:text-base md:text-tiny sm:text-base ' >Our mission is to connect people with their dream properties while fostering vibrant communities. We envision a future where everyone has access to quality housing and resources.</p>


                            </div>
                        </div>
                        <div className='flex flex-col lg:gap-6 md:gap-2 sm:gap-6 lg:w-1/2 md:w-2/3 md:ml-0 md:mr-0 '>
                            <div className='flex items-center gap-3'>
                                <Image src={Rectangle} alt="Rectangle" className='lg:w-[10px] lg:h-[10px] sm:w-[10px] sm:h-[10px] md:w-[5.79px] md:h-[5.79px]' />
                                <h6 className='font-gellix text-xl font-bold'>Community Focus</h6>
                            </div>
                            <p className='lg:text-base md:text-tiny sm:text-base '>
                                We prioritize the needs of our clients and the communities we serve.
                            </p>
                            <div className='flex items-center gap-3 lg:mt-0 md:mt-6 sm:mt-0'>
                                <Image src={Rectangle} alt="Rectangle" className='lg:w-[10px] lg:h-[10px] sm:w-[10px] sm:h-[10px] md:w-[5.79px] md:h-[5.79px]' />
                                <h6 className='font-gellix text-xl font-bold'>Innovative Solutions</h6>
                            </div>
                            <p className='lg:text-base md:text-tiny sm:text-base '>
                                Our platform offers cutting-edge tools to simplify your property search and investment.
                            </p>

                        </div>
                    </div>
                </div>
                <div className='md:flex-1'>
                    <Image src={EmpowerImg} alt="Banner" className="object-fill w-full h-full" />


                </div>
            </div>
        </div>
    )
}
