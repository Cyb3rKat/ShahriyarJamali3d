import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { Typewriter } from 'react-simple-typewriter'
import instagramIcon from '/public/social/instagram.svg'
import pintrestIcon from '/public/social/pintrest.svg'
import dribbbleIcon from '/public/social/dribble.svg'
import aboutIcon from '/public/2.png'
import IslamicIcon from '/public/1.png'
import PoetryCalligraphyIcon from '/public/3.png'
import TitleDesignIcon from '/public/4.png'
import SymbolicIcon from '/public/5.png'
import mylogo from '/public/social/shahriyar-logo.svg'
import BottomMenu from '@/components/react/BottomMenu';


const AboutME = () => {
    return (
        <div className='bg-[#E8E7E7] min-h-screen flex flex-col items-center justify-center  '>
            <div className='grow p-20'>
                <div className="  flex  flex-col information-wrapper space-y-5 w-full max-w-3xl text-justify flex-wrap text-[#B1B1B1]">

                    <p className=' '>
                        Shahriar Jamali is an Iranian artist with a deep passion for calligraphy. Throughout his life, He has embraced the power of art and ideation to bridge the gap between humanity and the divine. <br></br>
                    </p><p>
                        <span className='text-2xl font-bold '>As an artist and ideator,<br></br></span> <span className='text-[#dca466]'> Shahriar Jamali&apos;s mission is to promote love and create works that serve as a conduit between mankind and God. His art is a spiritual journey, with each stroke and composition intended to evoke a sense of connection, beauty, and transcendence. He believes that art embodies truth, and he views the pursuit of truth as an infinite and boundless endeavor.<br></br></span>
                    </p><p>
                        With a firm conviction in the transformative potential of art, Shahriar Jamali channels his creativity into creating intricate calligraphic pieces that convey his profound message of love and spirituality. Through his meticulous craftsmanship and innovative approach, he strives to capture the essence of divine beauty and ignite a spiritual awakening in the hearts of viewers.<br></br></p><p>

                        His calligraphy art serves as a visual testimony to his philosophy. Each piece is a harmonious blend of traditional calligraphic techniques and contemporary expressions, reflecting his unique artistic voice. works have garnered international recognition for their ability to inspire, uplift, and create a sense of awe and wonder.<br></br>

                        In addition to his artistic pursuits, he continues to explore the boundless potential of design and ideation. delving into various creative endeavors, seeking to push the boundaries of artistic expression and discover new ways to communicate his vision of love, truth, and spirituality.<br></br></p> <p>

                        Shahriyars contributions to the world of art and ideation extend beyond his creative endeavors. actively engages in sharing his knowledge and expertise with aspiring artists, conducting workshops, and mentoring emerging talents. Through his guidance and encouragement, he nurtures a new generation of calligraphy artists who carry forth the torch of artistic expression and spiritual exploration.<br></br> </p><p>

                        Shahriar&apos;s art and thought have touched the hearts and minds of individuals around the world, leaving an indelible mark on the artistic landscape. His unwavering commitment to promoting love and embracing the eternal quest for truth has established him as a visionary artist and thinker, captivating audiences with his profound artistic expressions.
                    </p>

                    <span> April 2022</span>


                </div>
            </div>



            <BottomMenu />

        </div>
    )
}

export default AboutME