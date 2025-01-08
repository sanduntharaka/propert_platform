import React from 'react'

export const QuestionsSection = () => {
    return (
        <div className='max-w-[1440px] ml-auto mr-auto '>
            <div className='bg-primary-grey pt-28 pb-28 pr-8 pl-8 md:-mr-8 md:-ml-8'>
                <div className='inline-flex flex-col gap-6 mb-20 pr-8 pl-8'>
                    <h1 className='font-space-grotesk font-bold lg:text-5xl md:text-4xl text-primary-button sm:text-4xl'>
                        Have Questions?
                    </h1>
                    <p className='text-xl'>Find answers to your most pressing questions about our platform and services.</p>
                </div>

                <div className='flex flex-col pr-8 pl-8'>
                    <div className='border-t-2 border-primary-button'></div>
                    <div className=' flex md:flex-row sm:flex-col justify-evenly gap-16 md:h-[54px] items-center mt-[19px] mb-[19px]'>
                        <h4 className='md:w-[500px] sm:w-full font-space-grotesk font-bold text-2xl'>How to register?</h4>
                        <p className='md:w-[812px]'>To register, simply click on the 'Sign Up' button on our homepage. Fill in the required details and submit your application. You will receive a confirmation email shortly after.</p>
                    </div>
                    <div className='border-t-2 border-primary-button'></div>

                    <div className=' flex md:flex-row sm:flex-col justify-evenly gap-16 md:h-[54px] items-center mt-[19px] mb-[19px]'>
                        <h4 className='md:w-[500px] sm:w-full font-space-grotesk font-bold text-2xl'>What properties are available?</h4>
                        <p className='md:w-[812px]'>What properties are available?We offer a wide range of properties including residential, commercial, and vacation rentals. You can explore our listings by visiting the 'Explore Properties' section. Our database is regularly updated to reflect the latest offerings.</p>
                    </div>

                    <div className='border-t-2 border-primary-button'></div>


                    <div className=' flex md:flex-row sm:flex-col justify-evenly gap-16 md:h-[54px] items-center mt-[19px] mb-[19px]'>
                        <h4 className='md:w-[500px] sm:w-full font-space-grotesk font-bold text-2xl'>How to contact support?</h4>
                        <p className='md:w-[812px]'>You can reach our support team by clicking on the 'Contact Us' link. Fill out the form with your inquiry, and we will respond promptly. Alternatively, you can call us during business hours.</p>
                    </div>

                    <div className='border-t-2 border-primary-button'></div>


                    <div className=' flex md:flex-row sm:flex-col justify-evenly gap-16 md:h-[54px] items-center mt-[19px] mb-[19px]'>
                        <h4 className='md:w-[500px] sm:w-full font-space-grotesk font-bold text-2xl'>Is there a fee?</h4>
                        <p className='md:w-[812px]'>Our platform is free to use for property seekers. However, some services may incur fees, which will be clearly outlined before you proceed. Always check the terms and conditions for detailed information.</p>
                    </div>

                    <div className='border-t-2 border-primary-button'></div>


                    <div className=' flex md:flex-row sm:flex-col  justify-evenly gap-16 md:h-[54px] items-center mt-[19px] mb-[19px]'>
                        <h4 className='md:w-[500px] sm:w-full font-space-grotesk font-bold text-2xl'>How to reset password?</h4>
                        <p className='md:w-[812px]'>To reset your password, click on the 'Forgot Password?' link on the login page. Follow the instructions sent to your registered email. You will be able to create a new password immediately.</p>
                    </div>
                </div>

            </div>


        </div>
    )
}
// gap = 80px