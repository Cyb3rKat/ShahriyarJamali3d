'use client'

import React from 'react'
import Image from "next/image";
import mylogo from '/public/social/shahriyar-logo.svg'
import Link from 'next/link';
import { Typewriter } from 'react-simple-typewriter'
import instagramIcon from '/public/social/instagram.svg'
import pintrestIcon from '/public/social/pintrest.svg'
import dribbbleIcon from '/public/social/dribble.svg'
import aboutIcon from '/public/2.png'
import IslamicIcon from '/public/1.png'
import PoetryCalligraphyIcon from '/public/3.png'
import TitleDesignIcon from '/public/4.png'
import SymbolicIcon from '/public/5.png'
import BottomMenu from '@/components/react/BottomMenu';




const HomePage = () => {
    return (
        <div className='bg-[#E8E7E7] min-h-screen flex flex-col items-center justify-center'>
            <div className='bg-[#EAEAEA] flex flex-col items-center grow justify-center w-full h-full '>
                <Link href={'/'}><Image src={mylogo} width={150} className='mb-10' /></Link>
                <h1 className='text-2xl md:text-5xl leading-relaxed'>Hi , I'm Shahriyar Jamali</h1>
                <p className='text-3xl leading-relaxed font-light mt-5'>
                    <span className='text-md  text-[#a47c4b] '> Art Director , Graphic Designer , Calligraphy Artist</span>

                </p>

                <div className='space-x-10 flex mt-10'>
                    <div className='w-10 h-10'><Image src={dribbbleIcon} className='bg-black p-5 rounded-full relative text-white fill-white' /></div>
                    <div className='w-10 h-10'><Image src={dribbbleIcon} className='bg-black p-5 rounded-full relative text-white fill-white' /></div>
                    <div className='w-10 h-10'><Image src={dribbbleIcon} className='bg-black p-5 rounded-full relative text-white fill-white' /></div>

                </div>
            </div>

            <BottomMenu />

        </div>
    )
}

export default HomePage