import React from 'react'
import { Pagination } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'
import 'swiper/css/pagination'
import patientAvatar from '../../assets/images/patient-avatar.png'
import { HiStar } from 'react-icons/hi'

const Testimonial = () => {
    return (
        <div className="mt-[30px] lg:mt-[55px]">
            <Swiper modules={[Pagination]} spaceBetween={30} slidesPerView={1} pagination={{ clickable: true }} breakpoints={{
                640: {
                    slidesPerView: 1,
                    spaceBetween: 0
                },
                768: {
                    slidesPerView: 2,
                    spaceBetween: 20
                },
                1024: {
                    slidesPerView: 3,
                    spaceBetween: 30
                }
            }}>
                <SwiperSlide>
                    <div className='py-[30px] px-5 rounded-3'>
                        <div className="flex items-center gap-[13px]" >
                            <img src={patientAvatar} alt="" />
                            <div>
                                <h4 className='text-[18px] leading-[30px] font-semibold text-gray-900'>
                                    James Carter
                                </h4>
                                <div className='flex items-center gap-[2px]'>
                                    <HiStar className="text-yellow-500 w-[18px] h-5" />
                                    <HiStar className="text-yellow-500 w-[18px] h-5" />
                                    <HiStar className="text-yellow-500 w-[18px] h-5" />
                                    <HiStar className="text-yellow-500 w-[18px] h-5" />
                                    <HiStar className="text-yellow-500 w-[18px] h-5" />
                                </div>
                            </div>
                        </div>
                        <p className='text-[16px] mt-4 leading-7 text-gray-600 font-[400]'>"Seamless experience from start to finish. I found a top specialist, booked in seconds, and had a great consultation. Truly a lifesaver!"</p>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className='py-[30px] px-5 rounded-3'>
                        <div className="flex items-center gap-[13px]" >
                            <img src={patientAvatar} alt="" />
                            <div>
                                <h4 className='text-[18px] leading-[30px] font-semibold text-gray-900'>
                                    Michael Thompson
                                </h4>
                                <div className='flex items-center gap-[2px]'>
                                    <HiStar className="text-yellow-500 w-[18px] h-5" />
                                    <HiStar className="text-yellow-500 w-[18px] h-5" />
                                    <HiStar className="text-yellow-500 w-[18px] h-5" />
                                    <HiStar className="text-yellow-500 w-[18px] h-5" />
                                    <HiStar className="text-yellow-500 w-[18px] h-5" />
                                </div>
                            </div>
                        </div>
                        <p className='text-[16px] mt-4 leading-7 text-gray-600 font-[400]'>"I love how convenient this service is! No more long waits at clinics—I can schedule, consult, and get prescriptions online. Highly recommended!"</p>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className='py-[30px] px-5 rounded-3'>
                        <div className="flex items-center gap-[13px]" >
                            <img src={patientAvatar} alt="" />
                            <div>
                                <h4 className='text-[18px] leading-[30px] font-semibold text-gray-900'>
                                    Daniel Reynolds
                                </h4>
                                <div className='flex items-center gap-[2px]'>
                                    <HiStar className="text-yellow-500 w-[18px] h-5" />
                                    <HiStar className="text-yellow-500 w-[18px] h-5" />
                                    <HiStar className="text-yellow-500 w-[18px] h-5" />
                                    <HiStar className="text-yellow-500 w-[18px] h-5" />
                                    <HiStar className="text-yellow-500 w-[18px] h-5" />
                                </div>
                            </div>
                        </div>
                        <p className='text-[16px] mt-4 leading-7 text-gray-600 font-[400]'>"Great customer support and an amazing selection of doctors. I finally found a healthcare service that fits my schedule!"</p>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className='py-[30px] px-5 rounded-3'>
                        <div className="flex items-center gap-[13px]" >
                            <img src={patientAvatar} alt="" />
                            <div>
                                <h4 className='text-[18px] leading-[30px] font-semibold text-gray-900'>
                                    William Harris
                                </h4>
                                <div className='flex items-center gap-[2px]'>
                                    <HiStar className="text-yellow-500 w-[18px] h-5" />
                                    <HiStar className="text-yellow-500 w-[18px] h-5" />
                                    <HiStar className="text-yellow-500 w-[18px] h-5" />
                                    <HiStar className="text-yellow-500 w-[18px] h-5" />
                                    <HiStar className="text-yellow-500 w-[18px] h-5" />
                                </div>
                            </div>
                        </div>
                        <p className='text-[16px] mt-4 leading-7 text-gray-600 font-[400]'>"I used to wait weeks for an appointment, but now I can see a doctor in no time. This service is a game-changer!"</p>
                    </div>
                </SwiperSlide>
            </Swiper>
        </div>
    )
}

export default Testimonial