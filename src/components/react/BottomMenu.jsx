import React from 'react'
import { Typewriter } from 'react-simple-typewriter'
import instagramIcon from '/public/social/instagram.svg'
import pintrestIcon from '/public/social/pintrest.svg'
import dribbbleIcon from '/public/social/dribble.svg'
import aboutIcon from '/public/2.png'
import IslamicIcon from '/public/1.png'
import PoetryCalligraphyIcon from '/public/3.png'
import TitleDesignIcon from '/public/4.png'
import SymbolicIcon from '/public/5.png'
import Link from 'next/link'
import Image from 'next/image'

const BottomMenu = () => {
    return (
        <div className='w-full bg-black min-h-[100px] md:min-h-[200px] px-10 flex  justify-around gap-1'>
            <Link href={'/home/'} className=' sm:mb-10 sm:-mt-10 flex sm:flex-col items-center '>
                <Image className='hidden sm:block' src={aboutIcon} />
                <h2 className='text-white text-[10px] sm:mt-2'>Home</h2>
            </Link>
            <Link href={'/home/about'} className=' sm:mb-10 sm:-mt-10 flex sm:flex-col items-center '>
                <Image className='hidden sm:block' src={aboutIcon} />
                <h2 className='text-white text-[10px] sm:mt-2'>About Me</h2>
            </Link>
            <div className=' sm:mb-10 sm:-mt-10 flex sm:flex-col items-center'>
                <Image className='hidden sm:block' src={IslamicIcon} />
                <h2 className='text-white text-[10px] sm:mt-2'>Istamic Art</h2>
            </div>
            <div className=' sm:mb-10 sm:-mt-10 flex sm:flex-col items-center'>
                <Image className='hidden sm:block' src={PoetryCalligraphyIcon} />
                <h2 className='text-white text-[10px] sm:mt-2'>Calligraphy</h2>
            </div>
            <div className=' sm:mb-10 sm:-mt-10 flex sm:flex-col items-center'>
                <Image className='hidden sm:block' src={TitleDesignIcon} />
                <h2 className='text-white text-[10px] sm:mt-2'>Title Design</h2>
            </div>
            <div className=' sm:mb-10 sm:-mt-10 flex sm:flex-col items-center'>
                <Image className='hidden sm:block' src={SymbolicIcon} />
                <h2 className='text-white text-[10px] sm:mt-2'>Symbolic Icon</h2>
            </div>
        </div>
    )
}

export default BottomMenu