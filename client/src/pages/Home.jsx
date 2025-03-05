import React from 'react'
import heroImg1 from '../assets/images/hero-img01.png'
import heroImg2 from '../assets/images/hero-img02.png'
import heroImg3 from '../assets/images/hero-img03.png'
import icon1 from '../assets/images/icon01.png'
import icon2 from '../assets/images/icon02.png'
import icon3 from '../assets/images/icon03.png'
import About from '../components/About/About'
import { Link } from 'react-router-dom'
import { BsArrowRight } from 'react-icons/bs'
import ServiceList from '../components/Services/ServiceList'
const Home = () => {
    return (
        <>
            <section className="hero__section pt-[60px] 2xl:h-[800px]">
                <div className="container">
                    <div className="flex flex-col lg:flex-row gap[90px] items-center justify-between">
                        <div>
                            <div className="lg:w-[570px]">
                                <h1 className="text-[36px] leading-[46px] text-gray-900 font-[800] md:text-[60px] md:leading-[70px] ">We empower patients to live healthier lives.</h1>
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
                        <div className="flex gap-[30px] justify-end">
                            <div>
                                <img src={heroImg1} alt="" className='w-full' />
                            </div>
                            <div className='mt-[30px]'>
                                <img src={heroImg2} alt="" className='w-full mb-[30px]' />
                                <img src={heroImg3} alt="" className='w-full' />
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section>
                <div className="container">
                    <div className="lg:w-[470px] mx-auto">
                        <h2 className='heading text-center'>
                            Providing the best medical services
                        </h2>
                        <p className='text__para text-center'>
                            World-class care for everyone. Our health System offers unmatched, expert health care.
                        </p>
                    </div>
                    <div className="grid grid-cols-1 md:gird-cols-2 lg:grid-cols-3 gap-5 lg:gap-[30px] mt-[30px] lg:mt-[55px]">
                        <div className="py-[30px] px-5">
                            <div className="flex items-center justify-center">
                                <img src={icon1} alt="" />
                            </div>
                            <div className="mt-[30px]">
                                <h2 className='text-[26px] leading-9 text-gray-900 font-[700] text-center'>Find a Doctor</h2>
                                <p className='text-[16px] leading-7 text-gray-500 font[400] text-center'>World-class care for everyone. Our health System offers unmatched, expert health care. From the Labd to the Clinic</p>
                                <Link to='/doctors' className='w-[44px] h-[44px] rounded-full border border-solid border-[#181a1e] mt-[30px] mx-auto flex items-center justify-center group hover:bg-blue-600 hover:border-none '>
                                    <BsArrowRight className='group-hover:text-white w-6 h-5' />
                                </Link>
                            </div>
                        </div>

                        <div className="py-[30px] px-5">
                            <div className="flex items-center justify-center">
                                <img src={icon2} alt="" />
                            </div>
                            <div className="mt-[30px]">
                                <h2 className='text-[26px] leading-9 text-gray-900 font-[700] text-center'>Find a Location</h2>
                                <p className='text-[16px] leading-7 text-gray-500 font[400] text-center'>World-class care for everyone. Our health System offers unmatched, expert health care. From the Labd to the Clinic</p>
                                <Link to='/doctors' className='w-[44px] h-[44px] rounded-full border border-solid border-[#181a1e] mt-[30px] mx-auto flex items-center justify-center group hover:bg-blue-600 hover:border-none '>
                                    <BsArrowRight className='group-hover:text-white w-6 h-5' />
                                </Link>
                            </div>
                        </div>

                        <div className="py-[30px] px-5">
                            <div className="flex items-center justify-center">
                                <img src={icon3} alt="" />
                            </div>
                            <div className="mt-[30px]">
                                <h2 className='text-[26px] leading-9 text-gray-900 font-[700] text-center'>Book Appointment</h2>
                                <p className='text-[16px] leading-7 text-gray-500 font[400] text-center'>World-class care for everyone. Our health System offers unmatched, expert health care. From the Labd to the Clinic</p>
                                <Link to='/doctors' className='w-[44px] h-[44px] rounded-full border border-solid border-[#181a1e] mt-[30px] mx-auto flex items-center justify-center group hover:bg-blue-600 hover:border-none '>
                                    <BsArrowRight className='group-hover:text-white w-6 h-5' />
                                </Link>
                            </div>
                        </div>
                    </div>


                </div>
            </section>

            <About />

            <section>
                <div className="container">
                    <div className="xl:w-[470px] mx-auto">
                        <h2 className="heading text-center">Our medical sevices</h2>
                        <p className="text__para text-center">World-class care for everyone. Our health System offers unmatched, expert health care.</p>
                    </div>
                    <ServiceList />
                </div>
            </section>
        </>
    )
}

export default Home