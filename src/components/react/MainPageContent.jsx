'use client'

import React from 'react'

import AboutMeSection from './AboutMeSection';
import IntroSection from './IntroSection';
import PortfolioSection from './PortfolioSection';
import ContactPage from './ContactPage';
import homesvg from '/public/home.svg'
import aboutsvg from '/public/about.svg'
import briefcasesvg from '/public/briefcase.svg'
import contactsvg from '/public/contact.svg'
import speechsvg from '/public/speech.svg'
import Image from 'next/image';
import Link from 'next/link';


const MainPageContent = () => {
    return (
        <>
            <div className='w-full scrollbar scrollbar-thumb-gray-900 scrollbar-track-gray-100 scroll-smooth'>
                <IntroSection />
                <AboutMeSection />
                <PortfolioSection />
                <ContactPage />
            </div>
            <div className='fixed right-5 h-full  w-10 flex flex-col items-center justify-center space-y-2'>
                <Link href={'#intro'}><Image className='bg-black p-2 rounded-full' src={homesvg} width={50} height={50} /></Link>
                <Link href={'#about'}><Image className='bg-black p-2 rounded-full' src={aboutsvg} width={50} height={50} /></Link>
                <Link href={'#portfolio'}><Image className='bg-black p-2 rounded-full' src={briefcasesvg} width={50} height={50} /></Link>
                <Link href={'#contact'}><Image className='bg-black p-2 rounded-full' src={speechsvg} width={50} height={50} /></Link>

            </div>
        </>
    )
}

export default MainPageContent