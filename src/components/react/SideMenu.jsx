import React from 'react'
import Image from 'next/image'

import instagramIcon from '/public/social/instagram.svg'
import pintrestIcon from '/public/social/pintrest.svg'
import dribbbleIcon from '/public/social/dribbble.svg'
import Link from 'next/link'

const SideMenu = () => {
    return (
        <div className='w-[4%] min-w-[40px] bg-[#F3F0E8] py-10 flex flex-col fixed min-h-screen z-50'>
            <Link href='/' className=" h-48 vertical-rl w-full -rotate-180  flex items-center text-xl md:text-2xl">Shahriyar Jamali</Link>
            <div className=" grow"></div>
            <div className=" h-24 flex flex-col items-center justify-center w-full space-y-5">
                <a href='https://www.instagram.com/shahriyarjamali_artworks/' target='_blank'><Image src={instagramIcon} /></a>
                <a href='https://www.pinterest.com/shahriyarjamaliartworks/' target='_blank'><Image src={pintrestIcon} /></a>
                <a href='https://dribbble.com/ShahriyarJamali' target='_blank'><Image src={dribbbleIcon} /></a>
            </div>
        </div>
    )
}

export default SideMenu