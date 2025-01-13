import React from 'react'

export const QuestionsSection = () => {
    return (
        <div className='max-w-[1440px] ml-auto mr-auto '>
            <div className='bg-primary-grey lg:pt-28 lg:pb-0 lg:pr-8 lg:pl-8  sm:pt-16 sm:pb-16  md:pt-16 md:pb-0  md:-mr-8 md:-ml-8'>
                <div className='flex flex-col gap-4 md:ml-0 md:mr-0 sm:ml-8 sm:mr-8 pl-8 pr-8'>

                    <h2 className='font-gellix font-bold  text-primary-button'>
                        Have Questions?
                    </h2>
                    <div className='flex justify-between lg:text-xl md:text-tiny sm:text-xl'>
                        <p>Find answers to your most pressing questions about our platform and services.</p>
                    </div>
                </div>

                <div className='flex flex-col pr-8 pl-8'>
                    <div className='border-t-2 border-primary-button'></div>
                    <div className=' flex md:flex-row sm:flex-col justify-evenly gap-16 md:h-auto items-center mt-[19px] mb-[19px]'>
                        <h5 className='md:w-2/5 sm:w-full font-gellix font-bold'>How to register?</h5>
                        <p className='md:w-3/5 md:text-[10px] lg;text-base sm:text-base'>To register, simply click on the 'Sign Up' button on our homepage. Fill in the required details and submit your application. You will receive a confirmation email shortly after.</p>
                    </div>
                    <div className='border-t-2 border-primary-button'></div>

                    <div className=' flex md:flex-row sm:flex-col justify-evenly gap-16 md:h-auto items-center mt-[19px] mb-[19px]'>
                        <h5 className='md:w-2/5 sm:w-full font-gellix font-bold'>What properties are available?</h5>
                        <p className='md:w-3/5 md:text-[10px] lg;text-base sm:text-base'>What properties are available?We offer a wide range of properties including residential, commercial, and vacation rentals. You can explore our listings by visiting the 'Explore Properties' section. Our database is regularly updated to reflect the latest offerings.</p>
                    </div>

                    <div className='border-t-2 border-primary-button'></div>


                    <div className=' flex md:flex-row sm:flex-col justify-evenly gap-16 md:h-auto items-center mt-[19px] mb-[19px]'>
                        <h5 className='md:w-2/5 sm:w-full font-gellix font-bold'>How to contact support?</h5>
                        <p className='md:w-3/5 md:text-[10px] lg;text-base sm:text-base'>You can reach our support team by clicking on the 'Contact Us' link. Fill out the form with your inquiry, and we will respond promptly. Alternatively, you can call us during business hours.</p>
                    </div>

                    <div className='border-t-2 border-primary-button'></div>


                    <div className=' flex md:flex-row sm:flex-col justify-evenly gap-16 md:h-auto items-center mt-[19px] mb-[19px]'>
                        <h5 className='md:w-2/5 sm:w-full font-gellix font-bold'>Is there a fee?</h5>
                        <p className='md:w-3/5 md:text-[10px] lg;text-base sm:text-base'>Our platform is free to use for property seekers. However, some services may incur fees, which will be clearly outlined before you proceed. Always check the terms and conditions for detailed information.</p>
                    </div>

                    <div className='border-t-2 border-primary-button'></div>


                    <div className=' flex md:flex-row sm:flex-col  justify-evenly gap-16 md:h-auto items-center mt-[19px] mb-[19px]'>
                        <h5 className='md:w-2/5 sm:w-full font-gellix font-bold'>How to reset password?</h5>
                        <p className='md:w-3/5 md:text-[10px] lg;text-base sm:text-base'>To reset your password, click on the 'Forgot Password?' link on the login page. Follow the instructions sent to your registered email. You will be able to create a new password immediately.</p>
                    </div>
                </div>

            </div>


        </div>
    )
}
// gap = 80px