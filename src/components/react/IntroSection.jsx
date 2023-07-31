import React from 'react'
import Image from "next/image";
import mylogo from '/public/social/shahriyar-logo.svg'
import arrowicon from '/public/arrow.png'
import { Typewriter } from 'react-simple-typewriter'
import Link from 'next/link';
import localFont from 'next/font/local'
import { motion } from "framer-motion"

const IntroSection = () => {
    return (
        <div id="intro" className='bg-[#EAEAEA] scroll-smooth flex flex-col items-center justify-center w-full  min-h-screen'>
            <Image src={mylogo} width={150} className='mb-10' alt='mylogo' />
            <h1 className='text-2xl md:text-5xl leading-relaxed md:leading-loose'>Hi , I&apos;m Shahriyar Jamali</h1>
            <p className='text-xl md:text-3xl leading-relaxed  md:leading-loose font-light'>I am a  <span className='text-[#a47c4b] '>

                <Typewriter
                    words={['Art Director', 'Graphic Designer', 'Caligraphy Artist']}
                    loop={false}
                    cursor
                    cursorStyle='|'
                    typeSpeed={100}
                    deleteSpeed={50}
                    delaySpeed={1000}
                />
            </span>
            </p>

            <div className='flex flex-col md:flex-row space-y-5 md:space-y-0 md:space-x-10 mt-10'>
                <Link className='text-center border-[#a47c4b] border-2 px-4 text-sm md:px-10 py-2  rounded-md' href={'#about'}>Read more about me</Link>
                <Link className='bg-[#a47c4b] text-sm px-4 md:px-10 py-2  text-white rounded-md' href={'/3d'}>Take a 3D tour of my Art Gallery</Link>
            </div>
            <motion.div animate={{ y: [0, -20, 0] }}
                transition={{ ease: "linear", duration: 3, repeat: Infinity }}
                className='absolute bottom-5 flex flex-col items-center space-y-2'>
                <p
                    className='text-sm text-[#a47c4b] '

                >
                    scroll</p>
                <Image src={arrowicon} width={20} />
            </motion.div>
        </div >
    )
}

export default IntroSection