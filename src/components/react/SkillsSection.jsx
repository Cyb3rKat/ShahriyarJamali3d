import React from 'react'
import mylogo from '/public/social/shahriyar-logo.svg'
import Image from "next/image";
import { Raleway, Poppins, Open_Sans } from 'next/font/google'
import ProgressBar from "@ramonak/react-progress-bar";

const opensans = Open_Sans({
    subsets: ['latin'],
    weight: ['400'],
    style: ['normal']
})

const poppins = Poppins({
    subsets: ['latin'],
    weight: ['400', '500', '700'],
    style: ['normal']
})

const raleway = Raleway({
    subsets: ['latin'],
    weight: ['400', '500', '700'],
    style: ['normal']
})

const SkillsSection = () => {
    return (
        <div id='about' className={`font-light wrapper min-h-screen flex flex-col justify-center items-center p-20 text-[#45505b]  md:space-x-5   w-full `}>

            <h1 className={` ${raleway.className} font-bold mb-10 text-5xl border-[#45505b] border-b-4 pb-3`}>SKILLS</h1>


            <div className={` ${poppins.className}  grid grid-cols-1 md:grid-cols-2 gap-10 w-full max-w-5xl`}>

                <div className='flex flex-col space-y-2'>
                    <div className='flex justify-between'>
                        <p>Software</p>
                        <p>90%</p>

                    </div>
                    <ProgressBar completed="90" bgColor={'#0563bb'} borderRadius="0" customLabel=' ' height='10px' />

                </div>
                <div className='flex flex-col space-y-2'>
                    <div className='flex justify-between'>
                        <p>Creativity and technique</p>
                        <p>70%</p>

                    </div>
                    <ProgressBar completed="70" bgColor={'#0563bb'} borderRadius="0" customLabel=' ' height='10px' />

                </div>
                <div className='flex flex-col space-y-2'>
                    <div className='flex justify-between'>
                        <p>Color Theory</p>
                        <p>90%</p>

                    </div>
                    <ProgressBar completed="90" bgColor={'#0563bb'} borderRadius="0" customLabel=' ' height='10px' />

                </div>
                <div className='flex flex-col space-y-2'>
                    <div className='flex justify-between'>
                        <p>Perspective Taking</p>
                        <p>80%</p>

                    </div>
                    <ProgressBar completed="80" bgColor={'#0563bb'} borderRadius="0" customLabel=' ' height='10px' />

                </div>
                <div className='flex flex-col space-y-2'>
                    <div className='flex justify-between'>
                        <p>Time Management</p>
                        <p>70%</p>

                    </div>
                    <ProgressBar completed="70" bgColor={'#0563bb'} borderRadius="0" customLabel=' ' height='10px' />

                </div>
                <div className='flex flex-col space-y-2'>
                    <div className='flex justify-between'>
                        <p>Interaction</p>
                        <p>90%</p>

                    </div>
                    <ProgressBar completed="90" bgColor={'#0563bb'} borderRadius="0" customLabel=' ' height='10px' />

                </div>
                <div className='flex flex-col space-y-2'>
                    <div className='flex justify-between'>
                        <p>Obligation to my Work</p>
                        <p>100%</p>

                    </div>
                    <ProgressBar completed="100" bgColor={'#0563bb'} borderRadius="0" customLabel=' ' height='10px' />

                </div>
                <div className='flex flex-col space-y-2'>
                    <div className='flex justify-between'>
                        <p>English Proficiency</p>
                        <p>70%</p>

                    </div>
                    <ProgressBar completed="70" bgColor={'#0563bb'} borderRadius="0" customLabel=' ' height='10px' />

                </div>


            </div>

        </div >
    )
}

export default SkillsSection