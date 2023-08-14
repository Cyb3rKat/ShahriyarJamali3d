import React from 'react'
import Image from 'next/image'

import instagramIcon from '/public/social/instagram.svg'
import pintrestIcon from '/public/social/pintrest.svg'
import dribbbleIcon from '/public/social/dribbble.svg'
import Link from 'next/link'

const SideMenu = () => {
    return (
        <div className='w-[4%] min-w-[40px] bg-white py-10 flex flex-col fixed min-h-screen z-50'>
            <Link href='/' className=" h-48 vertical-rl w-full -rotate-180  flex items-center text-xl md:text-2xl text-[#0563bb]">Shahriyar Jamali</Link>
            <div className=" grow"></div>
            <div className=" h-24 flex flex-col items-center justify-center w-full space-y-5">
                <a href='https://www.instagram.com/shahriyarjamali_artworks/' target='_blank'><Image alt='instagram' src={instagramIcon} /></a>
                <a href='https://www.pinterest.com/shahriyarjamaliartworks/' target='_blank'><Image alt='pintrest' src={pintrestIcon} /></a>
                <a href='https://dribbble.com/ShahriyarJamali' target='_blank'><Image alt='dribble' src={dribbbleIcon} /></a>
            </div>
        </div>
    )
}

export default SideMenu