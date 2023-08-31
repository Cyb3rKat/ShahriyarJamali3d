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
import SkillsSection from './SkillsSection';


const MainPageContent = () => {
    return (
        <>
            <div className='w-full scrollbar scrollbar-thumb-gray-900 scrollbar-track-gray-100 scroll-smooth' onContextMenu={(evt) => {
                evt.preventDefault()
            }}>
                <IntroSection />
                <AboutMeSection />
                <PortfolioSection />
                <SkillsSection />
                <ContactPage />
            </div>
        </>
    )
}

export default MainPageContent