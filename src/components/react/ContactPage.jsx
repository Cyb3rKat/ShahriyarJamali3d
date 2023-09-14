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
    const [emailisSending, setEmailisSending] = useState(false)
    const [emailSent, setemailSent] = useState(false)
    const [emailError, setEmailError] = useState(false)

    const sendEmail = (e) => {
        e.preventDefault();
        setEmailisSending(true)

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
                    setEmailisSending(false)
                }).catch(err => {
                    setEmailError(err)
                    console.log(err)
                    setEmailisSending(false)

                })

            } else {
                alert('please provide valid information ')
            }
        }


    }

    return (
        <>
            <div id="contact" className='bg-jamali-black flex flex-col items-center justify-center w-full  py-20 relative'>

                <div className='w-full flex flex-col justify-center items-center sm:px-[20%] px-[15%] ml-10' >

                    <div className='flex justify-between items-center   w-full'>

                        <h1 className={`${poppins.className} text-[20] md:text-[28px]  text-jamali-white`}>Contact</h1>
                        <div className={`image flex justify-center  items-end  relative w-[100px] h-[100px]  md:w-[100] md:h-[100]  `}>

                        </div>
                    </div>



                    <div className='w-full  mt-10 '>
                        <form ref={form} onSubmit={sendEmail} className='flex flex-col space-y-5 text-white mb-10'>
                            <input type="text" name="user_name" value={userName} onChange={e => setuserName(e.target.value)} placeholder='Name' className='py-2 bg-transparent border-1 border-jamali-white border outline-none rounded-md px-2' />
                            <input type="email" name="user_email" value={userEmail} onChange={e => setuserEmail(e.target.value)} placeholder='Email Address' className='py-2 bg-transparent border-1 border-jamali-white border outline-none rounded-md px-2' />
                            <textarea name="message" placeholder='Message' value={userMessage} onChange={e => setuserMessage(e.target.value)} className='py-2 bg-transparent border-1 border-jamali-white border outline-none rounded-md px-2' />
                            <input type="submit" value={`${emailisSending ? 'Sending' : 'Send'}`} className={`hover:cursor-pointer text-white py-2 px-6 ${emailisSending ? 'bg-gray-600' : 'bg-jamali-orange'}`} disabled={emailisSending} />
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

                <p className='absolute  bottom-0 text-[12px] text-jamali-white  pb-10 ml-10'>© All Rights Reserved, Shahriyar Jamali 2023</p>
            </div>
        </>
    )
}

export default ContactPage


