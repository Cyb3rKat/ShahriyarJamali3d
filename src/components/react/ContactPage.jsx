import React, { useState, useRef } from 'react'
import mylogo from '/public/social/shahriyar-logo.svg'
import Image from "next/image";
import emailjs from '@emailjs/browser';
import validator from 'validator';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.min.css';
import { Poppins } from 'next/font/google'

const poppins = Poppins({
    subsets: ['latin'],
    weight: ['400', '500', '700'],
    style: ['normal']
})

const ContactPage = () => {
    const form = useRef();
    const [userName, setuserName] = useState("")
    const [userEmail, setuserEmail] = useState("")
    const [userMessage, setuserMessage] = useState("")
    const [emailSent, setemailSent] = useState(false)
    const [emailError, setEmailError] = useState(false)

    const sendEmail = (e) => {
        e.preventDefault();

        if (validator.isEmail(userEmail)) {
            if (userName && userMessage) {
                const templateParams = {
                    from_name: userName,
                    reply_to: userEmail,
                    message: userMessage
                };
                emailjs.send('service_y6ulza6', 'template_emrlqew', templateParams, 'y9WJOH6JDu3pWnWWa').then(() => {
                    setuserName("")
                    setuserEmail("")
                    setuserMessage("")
                    toast('Email Sent Successfully')
                }).catch(err => {
                    setEmailError(err)
                    console.log(err)
                })

            } else {
                alert('please provide valid information ')
            }
        }


    }

    return (
        <>
            <div id="contact" className='bg-jamali-black flex flex-col items-center justify-center w-full  py-20 relative'>

                <div className='w-full flex flex-col justify-center items-center sm:px-[20%] px-[15%]'>

                    <div className='flex justify-between items-center   w-full'>

                        <h1 className={`${poppins.className} text-[20] md:text-[28px]  text-jamali-white`}>Contact</h1>
                        <div className={`image flex justify-center  items-end  relative w-[100px] h-[100px]  md:w-[100] md:h-[100]  `}>

                        </div>
                    </div>

                    <div className={`h-full space-y-2 text-left  md:min-w-[500px] mt-10 w-full border-2 border-jamali-white rounded-xl px-2 py-10 sm:p-10`}>
                        <p className='text-jamali-white text-sm'><span className='text-white mr-4'>Tel:</span>+98 912 430 3631</p>
                        <p className='text-jamali-white text-sm'><span className='text-white mr-4'>Email:</span>info@ShahriyarJamali.art</p>
                        <p className='text-jamali-white text-sm'><span className='text-white mr-4'>Instagram:</span><a className='text-jamali-white text-sm' href='https://www.instagram.com/shahriyarjamali_artworks/'>@shahriyarjamali_artworks</a></p>
                        <p className='text-jamali-white text-sm'><span className='text-white mr-4'>dribbble:</span> dribbble.com/ShahriyarJamali</p>
                        <p className='text-jamali-white text-sm'><span className='text-white mr-4'>Website:</span>www.ShahriyarJamali.art</p>
                    </div>

                    <div className='  w-full  mt-10'>
                        <form ref={form} onSubmit={sendEmail} className='flex flex-col space-y-5 text-white mb-10'>
                            <input type="text" name="user_name" value={userName} onChange={e => setuserName(e.target.value)} placeholder='Name' className='py-2 bg-transparent border-1 border-jamali-white border outline-none rounded-md px-2' />
                            <input type="email" name="user_email" value={userEmail} onChange={e => setuserEmail(e.target.value)} placeholder='Email Address' className='py-2 bg-transparent border-1 border-jamali-white border outline-none rounded-md px-2' />
                            <textarea name="message" placeholder='Message' value={userMessage} onChange={e => setuserMessage(e.target.value)} className='py-2 bg-transparent border-1 border-jamali-white border outline-none rounded-md px-2' />
                            <input type="submit" value={`${emailSent ? 'Email Sent Successfully' : 'Send'}`} className={`text-white py-2 px-6 bg-jamali-orange ${emailError ? 'bg-red-900' : ''} ${emailSent ? 'bg-green-900' : ''}`} />
                        </form>
                        <ToastContainer
                            position="bottom-center"
                            autoClose={5000}
                            hideProgressBar
                            newestOnTop={false}
                            closeOnClick
                            rtl={false}
                            pauseOnFocusLoss
                            draggable
                            pauseOnHover
                            theme="light" />
                    </div>
                </div>

                <p className='absolute  bottom-0 text-sm text-jamali-white  pb-10'>© All Rights Reserved, Shahriyar Jamali 2023</p>
            </div>
        </>
    )
}

export default ContactPage