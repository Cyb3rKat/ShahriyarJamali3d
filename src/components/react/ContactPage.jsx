import React from 'react'
import mylogo from '/public/social/shahriyar-logo.svg'
import Image from "next/image";

const ContactPage = () => {
    return (
        <div id="contact" className='bg-[#EAEAEA] flex flex-col items-center justify-center w-full  min-h-screen'>

            <div className='w-full min-h-screen flex flex-col justify-center items-center sm:px-[20%] px-[15%]'>

                <div className='flex justify-between items-center   w-full'>

                    <div>
                        <h1 className='text-[20] md:text-[28px] font-extralight'>Contact</h1>
                        <h1 className=' text-[28px] md:text-[48px] font-black'>Shahriyar</h1>
                        <div className='mt-5 border-b-[10px] border-[#dca466] w-32'></div>
                    </div>
                    <div className={`image flex justify-center  items-end  relative w-[100px] h-[100px]  md:w-[100] md:h-[100]  `}>
                        <Image src={mylogo} alt='shahriyar jamali Logo' fill />
                    </div>
                </div>

                <div className={`h-full space-y-2 text-left  md:min-w-[500px] mt-10 w-full bg-[#a47c4b] px-2 py-10 sm:p-10`}>
                    <p className='text-black text-sm'><span className='text-white mr-4'>Tel:</span>981234566</p>
                    <p className='text-black text-sm'><span className='text-white mr-4'>Email:</span>info@ShahriyarJamali.art</p>
                    <p className='text-black text-sm'><span className='text-white mr-4'>Instagram:</span><a className='text-black text-sm' href='https://www.instagram.com/shahriyarjamali_artworks/'>@shahriyarjamali_artworks</a></p>
                    <p className='text-black text-sm'><span className='text-white mr-4'>Whatapp:</span> +981234566</p>
                    <p className='text-black text-sm'><span className='text-white mr-4'>Website:</span>www.ShahriyarJamali.art</p>
                </div>
            </div>
        </div>
    )
}

export default ContactPage