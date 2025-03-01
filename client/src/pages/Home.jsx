import React from 'react'

const Home = () => {
    return (
        <section className="hero__section pt-[60px] 2xl:h-[800px]">
            <div className="container">
                <div className="flex flex-col lg:flex-row gap[90px] items-center justify-between">
                    <div>
                        <div className="lg:w-[570px]">
                            <h1 className="text-[36px] leading-[46px] text-gray-900 font-[800] md:text-[60px] md:leading-[70px] ">We empower patients to live healthier, longer lives.</h1>
                            <p className='text__para'>
                                We empower patients with personalized care, innovative treatments, and preventive strategies to enhance their health and longevity. By providing knowledge and support, we help them make informed decisions for a healthier, fuller life.
                            </p>
                            <button className='btn cursor-pointer'>Book an Appointment</button>
                        </div>
                        <div className='mt-[30px] lg:mt-[70px] flex flex-col lg:flex-row lg:items-center gap-5 lg:gap-[30px]'>
                            <div>
                                <h2 className='text-[36px] leading-[56px] lg:text-[44px] lg:leading-[54px] font-[700] text-gray-900'>
                                    30+
                                </h2>
                                <span className='w-[100px] h-2 bg-yellow-500 rounded-full block mt-[-14px] '></span>
                                <p className='text__para'>Years of Expereince</p>
                            </div>
                            <div>
                                <h2 className='text-[36px] leading-[56px] lg:text-[44px] lg:leading-[54px] font-[700] text-gray-900'>
                                    15+
                                </h2>
                                <span className='w-[100px] h-2 bg-purple-400 rounded-full block mt-[-14px] '></span>
                                <p className='text__para'>Clinic Locations</p>
                            </div>
                            <div>
                                <h2 className='text-[36px] leading-[56px] lg:text-[44px] lg:leading-[54px] font-[700] text-gray-900'>
                                    100%
                                </h2>
                                <span className='w-[100px] h-2 bg-cyan-400 rounded-full block mt-[-14px] '></span>
                                <p className='text__para'>Patient Statisfaction</p>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </section>
    )
}

export default Home