import React from 'react'
import { Link } from 'react-router-dom'
import { quickLinks1 } from '../../assets/data/quickLinks1'
import { quickLinks2 } from '../../assets/data/quickLinks2'
import { RiLinkedinFill } from 'react-icons/ri'
import { AiFillGithub, AiOutlineInstagram } from 'react-icons/ai'
import { BiPlusMedical } from 'react-icons/bi'

export const socialLinks = [
    {
        path: 'https://www.github.com/ErinAbduli',
        icon: <AiFillGithub className='group-hover:text-white w-4 h-5' />,
    },
    {
        path: 'https://www.instagram.com/erin.abdulli',
        icon: <AiOutlineInstagram className='group-hover:text-white w-4 h-5' />,
    },
    {
        path: 'https://www.linkedin.com/in/erin-abduli',
        icon: <RiLinkedinFill className='group-hover:text-white w-4 h-5' />,
    }
]
const Footer = () => {
    const year = new Date().getFullYear()

    return (
        <footer className='pb-16 pt-10'>
            <div className='container'>
                <div className="flex justify-between flex-col md:flex-row flex-wrap gap-[30px]">
                    <div>
                        <Link className='flex' to='/'>
                            <span>
                                <BiPlusMedical className='w-8 h-8 text-blue-600' />
                            </span>
                            <h3 className='font-[900] text-2xl'>SWIFTCARE</h3>
                        </Link>
                        <p className='text-[16px] leading-7 font-[400] text-gray-600 mt-4'>
                            Copyrgiht &copy; {year} SwiftCare (Developed by Erin Abduli). All Rights Reserved.
                        </p>
                        <div className='flex items-center gap-3 mt-4'>
                            {socialLinks.map((link, index) => (
                                <Link to={link.path} key={index} className='w-9 h-9 border border-solid border-[#181A1e] rounded-full flex items-center justify-center group hover:bg-blue-600 hover:border-none'>
                                    {link.icon}
                                </Link>
                            ))}
                        </div>
                    </div>
                    <div>
                        <h2 className='text-[20px] leading-[30px] font-[700] mb-6 text-gray-900'>
                            Quick Links
                        </h2>
                        <ul>
                            {
                                quickLinks1.map((link, index) => (
                                    <li key={index} className='mb-4'>
                                        <Link to={link.path} className='text-[16px] leading-7 font-[400] text-gray-600'>{link.display}</Link>
                                    </li>
                                ))
                            }
                        </ul>
                    </div>
                    <div>
                        <h2 className='text-[20px] leading-[30px] font-[700] mb-6 text-gray-900'>
                            I want to:
                        </h2>
                        <ul>
                            {
                                quickLinks2.map((link, index) => (
                                    <li key={index} className='mb-4'>
                                        <Link to={link.path} className='text-[16px] leading-7 font-[400] text-gray-600'>{link.display}</Link>
                                    </li>
                                ))
                            }
                        </ul>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer