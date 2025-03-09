import { useState } from 'react'
import doctorImg from '../../assets/images/doctor-img02.png'
import starIcon from '../../assets/images/Star.png'
const DoctorDetails = () => {

    const [tab, setTab] = useState('about');

    return (
        <section>
            <div className="max-w-[1170px] px-5 mx-auto">
                <div className="grid md:grid-cols-3 gap-[50px]s">
                    <div className='md:col-span-2'>
                        <div className='flex items-center gap-5'>
                            <figure className='max-w-[200px] max-h-[200px]'>
                                <img src={doctorImg} alt="" className='w-full' />
                            </figure>
                            <div>
                                <span className='bg-[#ccf0f3] text-cyan-600 py-1 px-6 lg:py-2 lg:px-6 text-[12px] leading-4 lg:text-[16px] lg:leading-7 font-semibold rounded'>Surgeon</span>
                                <h3 className='text-gray-900 text-[22px] leading-9 mt-3 font-bold'>james Lee</h3>
                                <div className="flex items-center gap-[6px]">
                                    <span className="flex items-center gap-[6px] text-[14px] leading-5 lg:text-[16px] lg:leading-7 font-semibold text-gray-900">
                                        <img src={starIcon} alt="" /> 4.6
                                    </span>
                                    <span className='text-[14px] leading-5 lg:text-[16px] lg:leading-7 font-[400] text-gray-600'>(95)</span>
                                </div>
                                <p className='text__para text-[14px] md:text-[15px] lg:max-w-[390px] leading-6'>
                                    Dr. James Lee is a Orthopedic Surgeon in Sunrise Medical Center. He has 1300 total patients.
                                </p>
                            </div>
                        </div>
                        <div className='mt-[50px] border-b border-solid border-[#0066ff34]'>
                            <button onClick={() => setTab('about')} className={`${tab === 'about' && 'border-b border-solid border-blue-600'} py-2 px-5 mr-5 text-[16px] leading-7 text-gray-900 font-semibold cursor-pointer`}>
                                About
                            </button>
                            <button onClick={() => setTab('feedback')} className={`${tab === 'feedback' && 'border-b border-solid border-blue-600'} py-2 px-5 mr-5 text-[16px] leading-7 text-gray-900 font-semibold cursor-pointer`}>
                                Feedback
                            </button>
                        </div>
                        {/* CONTINUE THE ABOUT TAB */}
                        <div></div>
                    </div>
                    <div>

                    </div>
                </div>
            </div>
        </section >
    )
}

export default DoctorDetails