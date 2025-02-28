import { useEffect, useRef } from 'react'
import logo from '../../assets/images/logo (1).png'
import { NavLink, Link } from 'react-router-dom'

const navLinks = [
    {
        path: '/',
        display: 'Home'
    },
    {
        path: '/doctors',
        display: 'Doctors'
    },
    {
        path: '/services',
        display: 'Services'
    },
    {
        path: '/contact',
        display: 'Contact'
    }
]

const Header = () => {
    return (
        <header className='header flex items-center'>
            <div className="container">
                <div className="flex items-center justify-between">
                    <div>
                        <img src={logo} alt="" />
                    </div>
                    <div className="naviagtion">
                        <ul className="menu flex items-center gap-[2.7rem]">
                            {
                                navLinks.map((link, index) => (
                                    <li key={index}>
                                        <NavLink to={link.path} calssName={navClass => navClass.isActive ? 'text-[color-primaryColor] text-[16px] leading-7 font-[600]' : 'text-[color-textColor] text-[16px] leading-7 font-[500]'} exact>{link.display}</NavLink>
                                    </li>
                                ))
                            }
                        </ul>
                    </div>
                </div>
            </div>
        </header>
    )
}
export default Header