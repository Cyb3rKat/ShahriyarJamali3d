import React from 'react'
import mylogo from '/public/social/shahriyar-logo.svg'
import Image from "next/image";

const ContactPage = () => {
    return (
        <>
            <div id="contact" className='bg-jamali-black flex flex-col items-center justify-center w-full  min-h-screen'>

                <div className='w-full min-h-screen flex flex-col justify-center items-center sm:px-[20%] px-[15%]'>

                    <div className='flex justify-between items-center   w-full'>

                        <div>
                            <h1 className='text-[20] md:text-[28px]  text-jamali-white'>Contact</h1>
                        </div>
                        <div className={`image flex justify-center  items-end  relative w-[100px] h-[100px]  md:w-[100] md:h-[100]  `}>

                        </div>
                    </div>

                    <div className={`h-full space-y-2 text-left  md:min-w-[500px] mt-10 w-full border-2 border-jamali-white rounded-xl px-2 py-10 sm:p-10`}>
                        <p className='text-jamali-white text-sm'><span className='text-white mr-4'>Tel:</span>981234566</p>
                        <p className='text-jamali-white text-sm'><span className='text-white mr-4'>Email:</span>info@ShahriyarJamali.art</p>
                        <p className='text-jamali-white text-sm'><span className='text-white mr-4'>Instagram:</span><a className='text-jamali-white text-sm' href='https://www.instagram.com/shahriyarjamali_artworks/'>@shahriyarjamali_artworks</a></p>
                        <p className='text-jamali-white text-sm'><span className='text-white mr-4'>Whatapp:</span> +981234566</p>
                        <p className='text-jamali-white text-sm'><span className='text-white mr-4'>pintrest:</span> https://www.pinterest.com/shahriyarjamaliartworks/</p>
                        <p className='text-jamali-white text-sm'><span className='text-white mr-4'>dribbble:</span> https://dribbble.com/ShahriyarJamali</p>
                        <p className='text-jamali-white text-sm'><span className='text-white mr-4'>Website:</span>www.ShahriyarJamali.art</p>
                    </div>
                </div>
                <p className='text-sm text-jamali-white pb-10'>© All Rights Reserved, Shahriyar Jamali 2023</p>
            </div>
        </>
    )
}

export default ContactPage