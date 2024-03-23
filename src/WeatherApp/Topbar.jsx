import React, { useState, useEffect, useRef } from 'react';
import { useDispatch } from 'react-redux';
import {  MdMenu } from 'react-icons/md';
import { MdNotifications } from 'react-icons/md';

import { animateScroll as scroll } from 'react-scroll';

const TopBar = () => {
    
    const [isScrolled, setIsScrolled] = useState(false);
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);
    const dropdownRef = useRef(null);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 0) {
                setIsScrolled(true);
            } else {
                setIsScrolled(false);
            }
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
                setIsDropdownOpen(false);
            }
        };

        document.addEventListener('mousedown', handleClickOutside);

        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, []);


    const scrollToAboutMe = () => {
        scroll.scrollTo(window.innerHeight, {
            duration: 500,
            smooth: true,
        });
    };

    const scrollToDocumentation = () => {
        scroll.scrollTo(0, {
            duration: 500,
            smooth: true,
        });
    };

    const toggleDropdown = () => {
        setIsDropdownOpen(!isDropdownOpen);
    };

    return (
        <div className={`topbar top-0 left-0 z-10 w-full  flex divide-secondary divide-y divide-y-reverse bg-ascent transition-all duration-1000 ${isScrolled ? 'shadow-lg' : ''}`}>
            <div className='relative bg-ascent pl-2 transition-all duration-1000 pr-2 flex items-center h-full'>
                <span className='text-3xl flex items-center md:text-5xl font-bold text-bg'>whether</span>
                <span className='text-text md:text-5xl text-3xl flex items-center font-bold'>Weather</span>
            </div>
            <div className='w-full font-Roboto flex items-center text-bg2 justify-between py-2 md:py-1 px-4 bg-bg'>
                <div></div>

                <div className='flex gap-4 items-center justify-center text-secondary font-regular hover:text-shadow-3xl text-md md:text-xl relative'>
                    
                    <button className='hidden md:block cursor-pointer pr-4 hover:decoration-primary hover:text-ascent hover:text-gray-500 pl   border-r  border-secondary transition-all duration-300' onClick={scrollToAboutMe}>Get Started</button>
                    <button className='hidden md:block cursor-pointer pr-4 hover:decoration-primary hover:text-ascent hover:text-gray-500  border-r border-secondary transition-all duration-300' onClick={scrollToDocumentation}>Documentation</button>
                    
                    <div className="relative md:hidden" ref={dropdownRef}>
                        <button className='cursor-pointer pr-2 flex items-center hover:decoration-primary hover:text-gray-500 pl-4 border-l border-secondary hover:underline transition-all duration-300' onClick={toggleDropdown}><MdMenu size={22}/></button>
                        {isDropdownOpen && (
                            <div className="absolute top-full right-0 z-20 bg-bg border border-secondary mt-1 w-40 rounded-lg shadow-md">
                                <button className='w-full text-left px-4 py-2 hover:bg-ascent  hover:text-bg2 rounded-t-lg hover:text-text transition-all duration-300' onClick={scrollToDocumentation}>Documentation</button>
                                <button className='w-full text-left px-4 py-2 hover:bg-ascent hover:text-bg2 rounded-b-lg hover:text-text transition-all duration-300' onClick={scrollToAboutMe}>Get Started</button>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default TopBar;
