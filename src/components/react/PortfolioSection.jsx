'use client'

import React, { useState } from 'react'
import { AnimatePresence } from 'framer-motion'
import { motion } from 'framer-motion'
import Image from 'next/image'

const json = [
    {
        "id": 1,
        "url": "/portfolio/calligraphy/1.jpg",
        "category": "calligraphy"
    },
    {
        "id": 2,
        "url": "/portfolio/calligraphy/2.jpg",
        "category": "calligraphy"
    },
    {
        "id": 3,
        "url": "/portfolio/calligraphy/3.jpg",
        "category": "calligraphy"
    },
    {
        "id": 4,
        "url": "/portfolio/calligraphy/4.jpg",
        "category": "calligraphy"
    },
    {
        "id": 5,
        "url": "/portfolio/calligraphy/5.jpg",
        "category": "calligraphy"
    },
    {
        "id": 6,
        "url": "/portfolio/calligraphy/6.jpg",
        "category": "calligraphy"
    },
    {
        "id": 7,
        "url": "/portfolio/calligraphy/7.jpg",
        "category": "calligraphy"
    },
    {
        "id": 8,
        "url": "/portfolio/calligraphy/8.jpg",
        "category": "calligraphy"
    },
    {
        "id": 9,
        "url": "/portfolio/calligraphy/9.jpg",
        "category": "calligraphy"
    },
    {
        "id": 10,
        "url": "/portfolio/calligraphy/10.jpg",
        "category": "calligraphy"
    },
    {
        "id": 11,
        "url": "/portfolio/calligraphy/11.jpg",
        "category": "calligraphy"
    },
    {
        "id": 12,
        "url": "/portfolio/calligraphy/12.jpg",
        "category": "calligraphy"
    },
    {
        "id": 13,
        "url": "/portfolio/calligraphy/13.jpg",
        "category": "calligraphy"
    },
    {
        "id": 14,
        "url": "/portfolio/calligraphy/14.jpg",
        "category": "calligraphy"
    },
    {
        "id": 15,
        "url": "/portfolio/calligraphy/15.jpg",
        "category": "calligraphy"
    },
    {
        "id": 16,
        "url": "/portfolio/calligraphy/16.jpg",
        "category": "calligraphy"
    },
    {
        "id": 17,
        "url": "/portfolio/calligraphy/17.jpg",
        "category": "calligraphy"
    },
    {
        "id": 18,
        "url": "/portfolio/calligraphy/18.jpg",
        "category": "calligraphy"
    },
    {
        "id": 19,
        "url": "/portfolio/calligraphy/19.jpg",
        "category": "calligraphy"
    },
    {
        "id": 20,
        "url": "/portfolio/calligraphy/20.jpg",
        "category": "calligraphy"
    },
    {
        "id": 21,
        "url": "/portfolio/calligraphy/21.jpg",
        "category": "calligraphy"
    },
    {
        "id": 22,
        "url": "/portfolio/calligraphy/22.jpg",
        "category": "calligraphy"
    },
    {
        "id": 23,
        "url": "/portfolio/calligraphy/23.jpg",
        "category": "calligraphy"
    },
    {
        "id": 24,
        "url": "/portfolio/calligraphy/24.jpg",
        "category": "calligraphy"
    },
    {
        "id": 25,
        "url": "/portfolio/calligraphy/25.jpg",
        "category": "calligraphy"
    },
    {
        "id": 26,
        "url": "/portfolio/calligraphy/26.jpg",
        "category": "calligraphy"
    },
    {
        "id": 27,
        "url": "/portfolio/calligraphy/27.jpg",
        "category": "calligraphy"
    },
    {
        "id": 28,
        "url": "/portfolio/calligraphy/28.jpg",
        "category": "calligraphy"
    },
    {
        "id": 29,
        "url": "/portfolio/calligraphy/29.jpg",
        "category": "calligraphy"
    },
    {
        "id": 30,
        "url": "/portfolio/calligraphy/30.jpg",
        "category": "calligraphy"
    },
    {
        "id": 31,
        "url": "/portfolio/calligraphy/31.jpg",
        "category": "calligraphy"
    },
    {
        "id": 32,
        "url": "/portfolio/calligraphy/32.jpg",
        "category": "calligraphy"
    },
    {
        "id": 33,
        "url": "/portfolio/calligraphy/33.jpg",
        "category": "calligraphy"
    },
    {
        "id": 34,
        "url": "/portfolio/calligraphy/34.jpg",
        "category": "calligraphy"
    },
    {
        "id": 35,
        "url": "/portfolio/calligraphy/35.jpg",
        "category": "calligraphy"
    },
    {
        "id": 36,
        "url": "/portfolio/calligraphy/36.jpg",
        "category": "calligraphy"
    },
    {
        "id": 37,
        "url": "/portfolio/calligraphy/37.jpg",
        "category": "calligraphy"
    },
    {
        "id": 38,
        "url": "/portfolio/calligraphy/38.jpg",
        "category": "calligraphy"
    },
    {
        "id": 39,
        "url": "/portfolio/calligraphy/39.jpg",
        "category": "calligraphy"
    },
    {
        "id": 40,
        "url": "/portfolio/calligraphy/40.jpg",
        "category": "calligraphy"
    },
    {
        "id": 41,
        "url": "/portfolio/calligraphy/41.jpg",
        "category": "calligraphy"
    },
    {
        "id": 42,
        "url": "/portfolio/calligraphy/42.jpg",
        "category": "calligraphy"
    },
    {
        "id": 43,
        "url": "/portfolio/calligraphy/43.jpg",
        "category": "calligraphy"
    },
    {
        "id": 44,
        "url": "/portfolio/calligraphy/44.jpg",
        "category": "calligraphy"
    },
    {
        "id": 45,
        "url": "/portfolio/calligraphy/45.jpg",
        "category": "calligraphy"
    },
    {
        "id": 46,
        "url": "/portfolio/calligraphy/46.jpg",
        "category": "calligraphy"
    },
    {
        "id": 47,
        "url": "/portfolio/calligraphy/47.jpg",
        "category": "calligraphy"
    },
    {
        "id": 48,
        "url": "/portfolio/calligraphy/48.jpg",
        "category": "calligraphy"
    },
    {
        "id": 49,
        "url": "/portfolio/calligraphy/49.jpg",
        "category": "calligraphy"
    },
    {
        "id": 50,
        "url": "/portfolio/calligraphy/50.jpg",
        "category": "calligraphy"
    },
    {
        "id": 51,
        "url": "/portfolio/calligraphy/51.jpg",
        "category": "calligraphy"
    },
    {
        "id": 52,
        "url": "/portfolio/calligraphy/52.jpg",
        "category": "calligraphy"
    },
    {
        "id": 53,
        "url": "/portfolio/calligraphy/53.jpg",
        "category": "calligraphy"
    },
    {
        "id": 54,
        "url": "/portfolio/calligraphy/54.jpg",
        "category": "calligraphy"
    },
    {
        "id": 55,
        "url": "/portfolio/calligraphy/55.jpg",
        "category": "calligraphy"
    },
    {
        "id": 56,
        "url": "/portfolio/calligraphy/56.jpg",
        "category": "calligraphy"
    },
    {
        "id": 57,
        "url": "/portfolio/calligraphy/57.jpg",
        "category": "calligraphy"
    },
    {
        "id": 58,
        "url": "/portfolio/calligraphy/58.jpg",
        "category": "calligraphy"
    },
    {
        "id": 59,
        "url": "/portfolio/calligraphy/59.jpg",
        "category": "calligraphy"
    },
    {
        "id": 60,
        "url": "/portfolio/calligraphy/60.jpg",
        "category": "calligraphy"
    },
    {
        "id": 61,
        "url": "/portfolio/islamic-art/1.jpg",
        "category": "islamic-art"
    },
    {
        "id": 62,
        "url": "/portfolio/islamic-art/2.jpg",
        "category": "islamic-art"
    },
    {
        "id": 63,
        "url": "/portfolio/islamic-art/3.jpg",
        "category": "islamic-art"
    },
    {
        "id": 64,
        "url": "/portfolio/islamic-art/4.jpg",
        "category": "islamic-art"
    },
    {
        "id": 65,
        "url": "/portfolio/islamic-art/5.jpg",
        "category": "islamic-art"
    },
    {
        "id": 66,
        "url": "/portfolio/islamic-art/6.jpg",
        "category": "islamic-art"
    },
    {
        "id": 67,
        "url": "/portfolio/islamic-art/7.jpg",
        "category": "islamic-art"
    },
    {
        "id": 68,
        "url": "/portfolio/islamic-art/8.jpg",
        "category": "islamic-art"
    },
    {
        "id": 69,
        "url": "/portfolio/islamic-art/9.jpg",
        "category": "islamic-art"
    },
    {
        "id": 70,
        "url": "/portfolio/islamic-art/10.jpg",
        "category": "islamic-art"
    },
    {
        "id": 71,
        "url": "/portfolio/islamic-art/11.jpg",
        "category": "islamic-art"
    },
    {
        "id": 72,
        "url": "/portfolio/islamic-art/12.jpg",
        "category": "islamic-art"
    },
    {
        "id": 73,
        "url": "/portfolio/islamic-art/13.jpg",
        "category": "islamic-art"
    },
    {
        "id": 74,
        "url": "/portfolio/islamic-art/14.jpg",
        "category": "islamic-art"
    },
    {
        "id": 75,
        "url": "/portfolio/islamic-art/15.jpg",
        "category": "islamic-art"
    },
    {
        "id": 76,
        "url": "/portfolio/islamic-art/16.jpg",
        "category": "islamic-art"
    },
    {
        "id": 77,
        "url": "/portfolio/islamic-art/17.jpg",
        "category": "islamic-art"
    },
    {
        "id": 78,
        "url": "/portfolio/islamic-art/18.jpg",
        "category": "islamic-art"
    },
    {
        "id": 79,
        "url": "/portfolio/islamic-art/19.jpg",
        "category": "islamic-art"
    },
    {
        "id": 80,
        "url": "/portfolio/islamic-art/20.jpg",
        "category": "islamic-art"
    },
    {
        "id": 81,
        "url": "/portfolio/islamic-art/21.jpg",
        "category": "islamic-art"
    },
    {
        "id": 82,
        "url": "/portfolio/islamic-art/22.jpg",
        "category": "islamic-art"
    },
    {
        "id": 83,
        "url": "/portfolio/islamic-art/23.jpg",
        "category": "islamic-art"
    },
    {
        "id": 84,
        "url": "/portfolio/islamic-art/24.jpg",
        "category": "islamic-art"
    },
    {
        "id": 85,
        "url": "/portfolio/islamic-art/25.jpg",
        "category": "islamic-art"
    },
    {
        "id": 86,
        "url": "/portfolio/islamic-art/26.jpg",
        "category": "islamic-art"
    },
    {
        "id": 87,
        "url": "/portfolio/islamic-art/27.jpg",
        "category": "islamic-art"
    },
    {
        "id": 88,
        "url": "/portfolio/islamic-art/28.jpg",
        "category": "islamic-art"
    },
    {
        "id": 89,
        "url": "/portfolio/symbolic-icon/1.jpg",
        "category": "symbolic-icon"
    },
    {
        "id": 90,
        "url": "/portfolio/symbolic-icon/2.jpg",
        "category": "symbolic-icon"
    },
    {
        "id": 91,
        "url": "/portfolio/symbolic-icon/3.jpg",
        "category": "symbolic-icon"
    },
    {
        "id": 92,
        "url": "/portfolio/symbolic-icon/4.jpg",
        "category": "symbolic-icon"
    },
    {
        "id": 93,
        "url": "/portfolio/symbolic-icon/5.jpg",
        "category": "symbolic-icon"
    },
    {
        "id": 94,
        "url": "/portfolio/symbolic-icon/6.jpg",
        "category": "symbolic-icon"
    },
    {
        "id": 95,
        "url": "/portfolio/symbolic-icon/7.jpg",
        "category": "symbolic-icon"
    },
    {
        "id": 96,
        "url": "/portfolio/symbolic-icon/8.jpg",
        "category": "symbolic-icon"
    },
    {
        "id": 97,
        "url": "/portfolio/symbolic-icon/9.jpg",
        "category": "symbolic-icon"
    },
    {
        "id": 98,
        "url": "/portfolio/symbolic-icon/10.jpg",
        "category": "symbolic-icon"
    },
    {
        "id": 99,
        "url": "/portfolio/symbolic-icon/11.jpg",
        "category": "symbolic-icon"
    },
    {
        "id": 100,
        "url": "/portfolio/symbolic-icon/12.jpg",
        "category": "symbolic-icon"
    },
    {
        "id": 101,
        "url": "/portfolio/symbolic-icon/13.jpg",
        "category": "symbolic-icon"
    },
    {
        "id": 102,
        "url": "/portfolio/symbolic-icon/14.jpg",
        "category": "symbolic-icon"
    },
    {
        "id": 103,
        "url": "/portfolio/symbolic-icon/15.jpg",
        "category": "symbolic-icon"
    },
    {
        "id": 104,
        "url": "/portfolio/symbolic-icon/16.jpg",
        "category": "symbolic-icon"
    },
    {
        "id": 105,
        "url": "/portfolio/symbolic-icon/17.jpg",
        "category": "symbolic-icon"
    },
    {
        "id": 106,
        "url": "/portfolio/symbolic-icon/18.jpg",
        "category": "symbolic-icon"
    },
    {
        "id": 107,
        "url": "/portfolio/symbolic-icon/19.jpg",
        "category": "symbolic-icon"
    },
    {
        "id": 108,
        "url": "/portfolio/title-design/1.jpg",
        "category": "title-design"
    },
    {
        "id": 109,
        "url": "/portfolio/title-design/2.jpg",
        "category": "title-design"
    },
    {
        "id": 110,
        "url": "/portfolio/title-design/3.jpg",
        "category": "title-design"
    },
    {
        "id": 111,
        "url": "/portfolio/title-design/4.jpg",
        "category": "title-design"
    },
    {
        "id": 112,
        "url": "/portfolio/title-design/5.jpg",
        "category": "title-design"
    },
    {
        "id": 113,
        "url": "/portfolio/title-design/6.jpg",
        "category": "title-design"
    },
    {
        "id": 114,
        "url": "/portfolio/title-design/7.jpg",
        "category": "title-design"
    },
    {
        "id": 115,
        "url": "/portfolio/title-design/8.jpg",
        "category": "title-design"
    },
    {
        "id": 116,
        "url": "/portfolio/title-design/9.jpg",
        "category": "title-design"
    },
    {
        "id": 117,
        "url": "/portfolio/title-design/10.jpg",
        "category": "title-design"
    },
    {
        "id": 118,
        "url": "/portfolio/title-design/11.jpg",
        "category": "title-design"
    },
    {
        "id": 119,
        "url": "/portfolio/title-design/12.jpg",
        "category": "title-design"
    },
    {
        "id": 120,
        "url": "/portfolio/title-design/13.jpg",
        "category": "title-design"
    },
    {
        "id": 121,
        "url": "/portfolio/title-design/14.jpg",
        "category": "title-design"
    },
    {
        "id": 122,
        "url": "/portfolio/title-design/15.jpg",
        "category": "title-design"
    },
    {
        "id": 123,
        "url": "/portfolio/title-design/16.jpg",
        "category": "title-design"
    },
    {
        "id": 124,
        "url": "/portfolio/title-design/17.jpg",
        "category": "title-design"
    },
    {
        "id": 125,
        "url": "/portfolio/title-design/18.jpg",
        "category": "title-design"
    },
    {
        "id": 126,
        "url": "/portfolio/title-design/19.jpg",
        "category": "title-design"
    },
    {
        "id": 127,
        "url": "/portfolio/title-design/20.jpg",
        "category": "title-design"
    },
    {
        "id": 128,
        "url": "/portfolio/title-design/21.jpg",
        "category": "title-design"
    },
    {
        "id": 129,
        "url": "/portfolio/title-design/22.jpg",
        "category": "title-design"
    },
    {
        "id": 130,
        "url": "/portfolio/title-design/23.jpg",
        "category": "title-design"
    },
    {
        "id": 131,
        "url": "/portfolio/title-design/24.jpg",
        "category": "title-design"
    },
    {
        "id": 132,
        "url": "/portfolio/title-design/25.jpg",
        "category": "title-design"
    },
    {
        "id": 133,
        "url": "/portfolio/title-design/26.jpg",
        "category": "title-design"
    },
    {
        "id": 134,
        "url": "/portfolio/title-design/27.jpg",
        "category": "title-design"
    },
    {
        "id": 135,
        "url": "/portfolio/title-design/28.jpg",
        "category": "title-design"
    },
    {
        "id": 136,
        "url": "/portfolio/title-design/29.jpg",
        "category": "title-design"
    },
    {
        "id": 137,
        "url": "/portfolio/title-design/30.jpg",
        "category": "title-design"
    },
    {
        "id": 138,
        "url": "/portfolio/title-design/31.jpg",
        "category": "title-design"
    },
    {
        "id": 139,
        "url": "/portfolio/title-design/32.jpg",
        "category": "title-design"
    },
    {
        "id": 140,
        "url": "/portfolio/title-design/33.jpg",
        "category": "title-design"
    },
    {
        "id": 141,
        "url": "/portfolio/title-design/34.jpg",
        "category": "title-design"
    },
    {
        "id": 142,
        "url": "/portfolio/title-design/35.jpg",
        "category": "title-design"
    },
    {
        "id": 143,
        "url": "/portfolio/title-design/36.jpg",
        "category": "title-design"
    },
    {
        "id": 144,
        "url": "/portfolio/title-design/37.jpg",
        "category": "title-design"
    },
    {
        "id": 145,
        "url": "/portfolio/title-design/38.jpg",
        "category": "title-design"
    },
    {
        "id": 146,
        "url": "/portfolio/title-design/39.jpg",
        "category": "title-design"
    },
    {
        "id": 147,
        "url": "/portfolio/title-design/40.jpg",
        "category": "title-design"
    },
    {
        "id": 148,
        "url": "/portfolio/title-design/41.jpg",
        "category": "title-design"
    },
    {
        "id": 149,
        "url": "/portfolio/title-design/42.jpg",
        "category": "title-design"
    },
    {
        "id": 150,
        "url": "/portfolio/title-design/43.jpg",
        "category": "title-design"
    },
    {
        "id": 151,
        "url": "/portfolio/title-design/44.jpg",
        "category": "title-design"
    },
    {
        "id": 152,
        "url": "/portfolio/title-design/45.jpg",
        "category": "title-design"
    },
    {
        "id": 153,
        "url": "/portfolio/title-design/46.jpg",
        "category": "title-design"
    },
    {
        "id": 154,
        "url": "/portfolio/title-design/47.jpg",
        "category": "title-design"
    },
    {
        "id": 155,
        "url": "/portfolio/title-design/48.jpg",
        "category": "title-design"
    },
    {
        "id": 156,
        "url": "/portfolio/title-design/49.jpg",
        "category": "title-design"
    },
    {
        "id": 157,
        "url": "/portfolio/title-design/50.jpg",
        "category": "title-design"
    },
    {
        "id": 158,
        "url": "/portfolio/title-design/51.jpg",
        "category": "title-design"
    },
    {
        "id": 159,
        "url": "/portfolio/title-design/52.jpg",
        "category": "title-design"
    },
    {
        "id": 160,
        "url": "/portfolio/title-design/53.jpg",
        "category": "title-design"
    },
    {
        "id": 161,
        "url": "/portfolio/title-design/54.jpg",
        "category": "title-design"
    },
    {
        "id": 162,
        "url": "/portfolio/title-design/55.jpg",
        "category": "title-design"
    },
    {
        "id": 163,
        "url": "/portfolio/title-design/56.jpg",
        "category": "title-design"
    },
    {
        "id": 164,
        "url": "/portfolio/title-design/57.jpg",
        "category": "title-design"
    },
    {
        "id": 165,
        "url": "/portfolio/title-design/58.jpg",
        "category": "title-design"
    },
    {
        "id": 166,
        "url": "/portfolio/title-design/59.jpg",
        "category": "title-design"
    },
    {
        "id": 167,
        "url": "/portfolio/title-design/60.jpg",
        "category": "title-design"
    },
    {
        "id": 168,
        "url": "/portfolio/title-design/61.jpg",
        "category": "title-design"
    },
    {
        "id": 169,
        "url": "/portfolio/title-design/62.jpg",
        "category": "title-design"
    },
    {
        "id": 170,
        "url": "/portfolio/title-design/63.jpg",
        "category": "title-design"
    },
    {
        "id": 171,
        "url": "/portfolio/title-design/64.jpg",
        "category": "title-design"
    },
    {
        "id": 172,
        "url": "/portfolio/title-design/65.jpg",
        "category": "title-design"
    }
]


const PortfolioSection = () => {
    const [category, setCategory] = useState('calligraphy')
    const [viewall, setViewall] = useState(false)

    const filtereddata = json.filter((item) => item.category == category)
    const cropedData = filtereddata.slice(0, 12)

    return (

        <div id='portfolio' className='bg-[#EAEAEA] flex flex-col items-center justify-center min-h-screen pt-10'>
            <h1 className='text-3xl mb-10'>Portfolio</h1>
            <div className='mb-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-2'>
                <button className={`border-[#a47c4b] border-2	  px-10 py-2  rounded-md ${category == 'calligraphy' ? 'bg-[#a47c4b] text-white' : ''}`}
                    onClick={e => setCategory('calligraphy')}

                >Calligraphy</button>
                <button className={`border-[#a47c4b] border-2	  px-10 py-2  rounded-md ${category == 'islamic-art' ? 'bg-[#a47c4b] text-white' : ''}`}
                    onClick={e => setCategory('islamic-art')}
                >Islamic Art</button>
                <button className={`border-[#a47c4b] border-2	  px-10 py-2  rounded-md ${category == 'symbolic-icon' ? 'bg-[#a47c4b] text-white' : ''}`}
                    onClick={e => setCategory('symbolic-icon')}
                >Symbolic Icons</button>
                <button className={`border-[#a47c4b] border-2	  px-10 py-2  rounded-md ${category == 'title-design' ? 'bg-[#a47c4b] text-white' : ''}`}
                    onClick={e => setCategory('title-design')}
                >Title Design</button>
            </div>
            <AnimatePresence>

                <div className='grid grid-cols-2 md:grid-cols-3 xl:grid-cols-4 relative gap-2 px-10'>
                    {!viewall && cropedData.map((item) => {
                        return (
                            <motion.div
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                exit={{ opacity: 0 }}
                                className='relative h-32 w-32 sm:h-48 sm:w-48 md:h-56 md:w-56 overflow-hidden'
                            >
                                <Image src={`${item.url}`} fill className='hover:scale-125 transition-all duration-1000 object-cover overflow-hidden' />
                            </motion.div>
                        )
                    })}

                    {viewall && filtereddata.map((item) => {
                        return (
                            <motion.div
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                exit={{ opacity: 0 }}
                                className='relative h-32 w-32 sm:h-48 sm:w-48 md:h-56 md:w-56 overflow-hidden'
                            >
                                <Image src={`${item.url}`} fill className='hover:scale-125 transition-all duration-1000 object-cover overflow-hidden' />
                            </motion.div>
                        )
                    })}
                </div>

                <button className='bg-[#a47c4b] text-sm px-4 md:px-10 py-2 mt-10 text-white rounded-md'
                    onClick={e => setViewall(!viewall)}
                >{viewall ? 'View Less' : 'View More'}</button>
            </AnimatePresence>

        </div>

    )
}

export default PortfolioSection