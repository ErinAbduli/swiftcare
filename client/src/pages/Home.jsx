import React from 'react'
import heroImg1 from '../assets/images/hero-img01.png'
import heroImg2 from '../assets/images/hero-img02.png'
import heroImg3 from '../assets/images/hero-img03.png'
import icon1 from '../assets/images/icon01.png'
import icon2 from '../assets/images/icon02.png'
import icon3 from '../assets/images/icon03.png'
import featureImg from '../assets/images/feature-img.png'
import videoIcon from '../assets/images/video-icon.png'
import avatarIcon from '../assets/images/avatar-icon.png'
import About from '../components/About/About'
import { Link } from 'react-router-dom'
import { BsArrowRight } from 'react-icons/bs'
import ServiceList from '../components/Services/ServiceList'
import DoctorList from '../components/Doctors/DoctorList'
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

            <section>
                <div className="container">
                    <div className="flex items-center justify-between flex-col lg:flex-row">
                        <div className="xl:w-[670px]">
                            <h2 className="heading">Get virtual treatment <br /> anytime.</h2>
                            <ul className="pl-4">
                                <li className="text__para">
                                    1. Schedule the appointement directly.
                                </li>
                                <li className="text__para">
                                    2. Search for your physician here, and contact their office.
                                </li>
                                <li className="text__para">
                                    3. View our physicians who are accepting new patients, use the online schediling tool to select an appointement time.
                                </li>
                            </ul>
                            <Link to='/'>
                                <button className='btn'>Learn More</button>
                            </Link>
                        </div>
                        <div className="relative z-10 xl:w-[770px] flex justify-end mt-[50px] lg:mt-0">
                            <img src={featureImg} alt="" className='w-3/4' />
                            <div className="w-[150px] lg:w-[248px] bg-white absolute bottom-[50px] left-0 md:bottom-[100px] md:left-5 z-20 p-2 pb-3 lg:pt-4 lg:pb-[26px] rounded-[10px]">
                                <div className="flex items-center justify-between">
                                    <div className="flex items-center gap-[6px] lg:gap-3">
                                        <p className='text-[10px] leading-[10px] lg:text-[14px] lg:leading-5 text-gray-900 font-[600px]'>
                                            Tue, 25
                                        </p>
                                        <p className='text-[10px] leading-[10px] lg:text-[14px] lg:leading-5 text-gray-600 font-[400px]'>
                                            10:00AM
                                        </p>
                                    </div>
                                    <span className='w-5 h-5 lg:w-[34px] lg:h-[34px] flex items-center justify-center bg-yellow-500 rounded py-1 px-[5px] lg:py-3 lg:px-[9px]'>
                                        <img src={videoIcon} alt="" />
                                    </span>
                                </div>
                                <div className=' rounded-full w-[65px] lg:w-[96px] bg-[#ccf0f3] py-1 px-2 lg:py-[6px] lg:px-[10px] text-[8px] leading-[8px] lg:text-[12px] lg:leading-4 text-cyan-400 font-[500] mt-2 lg:mt-4'>
                                    Consultation
                                </div>
                                <div className="flex items-center gap-[6px] lg:gap-[10px] mt-2 lg:mt-[18px]">
                                    <img src={avatarIcon} alt="" />
                                    <h4 className='text-[10px] leading-3 lg:text-[16px] lg:leading-[22px] font-[700] text-gray-900'>Wayne Collins</h4>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section>
                <div className="container">
                    <div className="lg:w-[470px] mx-auto">
                        <h2 className='heading text-center'>
                            Our great doctors
                        </h2>
                        <p className='text__para text-center'>
                            World-class care for everyone. Our health System offers unmatched, expert health care.
                        </p>
                    </div>
                    <DoctorList />
                </div>
            </section>
        </>
    )
}

export default Home