import React from 'react'
import { BsArrowRight } from 'react-icons/bs'
import { Link } from 'react-router-dom'

const ServiceCard = ({ service, index }) => {
    return (
        <div className='py-[30px] px-3 lg:px-5'>
            <h2 className="tex-[26px] leading-9 text-gray-900 font-[700]">{service.name}</h2>
            <p className='text-[16px] leading-7 font-[400] mt-4 text-gray-500'>{service.desc}</p>
            <div className="flex items-center justify-between mt-[30px]">
                <Link to='/doctors' className='w-[44px] h-[44px] rounded-full border border-solid border-[#181a1e]  flex items-center justify-center group hover:bg-blue-600 hover:border-none '>
                    <BsArrowRight className='group-hover:text-white w-6 h-5' />
                </Link>
                <span style={{ background: `${service.bgColor}`, color: `${service.textColor}`, borderRadius: '6px 0 0 6px' }} className='w-[44px] h-[44px] flex items-center justify-center text-[18px] leading-[30px]'>
                    {index + 1}
                </span>
            </div>
        </div>
    )
}

export default ServiceCard