import React, { useState } from 'react'
import Image from "next/image";
import { Raleway, Poppins, Open_Sans } from 'next/font/google'
import localFont from 'next/font/local'


const yekan = localFont({
    src: '../../../public/font/Yekan.woff'
})


const arabicFont = localFont({
    src: '../../../public/font/AdobeArabic-Regular.otf'
})
const nazanin = localFont({
    src: '../../../public/font/BNazanin.ttf'
})

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


const AboutMeSection = () => {

    const [aboutmeLang, setAboutmeLang] = useState('en')
    const [activelang, setActiveLang] = useState('en')



    return (
        <div id='about' className={`  font-light wrapper bg-jamali-blue min-h-screen flex flex-col justify-center items-center p-20 md:flex-row-reverse  md:space-x-5  space-y-10  w-full `}>

            <div id='AboutMeWrapper' className='space-y-10  md:pt-5'>

                <div className={` ${raleway.className} flex  mt-20`}>
                    <div className='w-full text-jamali-white'>
                        <h1 className=' text-[20px] md:text-[28px] '>About Me</h1>
                        <div className='mt-5 border-b-[2px] border-jamali-white w-full'></div>
                    </div>

                </div>

                <div id='AboutMe--Information__wrapper' className={` ${opensans.className} flex flex-row-reverse justify-between `}>

                    <div className={`${poppins.className} flex  flex-col information-wrapper space-y-5 w-full max-w-3xl text-justify flex-wrap text-jamali-white`}>

                        {aboutmeLang == 'en' && <>
                            <p >
                                Shahriyar Jamali Kapk, an Iranian Calligraphy artist. He was born in Tehran and developed a deep passion for calligraphy from an early age. Throughout his life, he embraced the power of art and ideation to bridge the gap between humanity and the divine. <br></br>
                            </p><p >
                                <span className='text-xl font-bold'> As an artist and ideator,</span><br></br> His mission is to promote love and create works that serve as a conduit between mankind and God. His art is a spiritual journey, with each stroke and composition intended to evoke a sense of connection, beauty, and transcendence. Shahriyar believes that art embodies truth, and he views the pursuit of truth as an infinite and boundless endeavor.<br></br>
                            </p><p>
                                With a firm conviction in the transformative potential of art, he channels his creativity into creating intricate calligraphic pieces that convey his profound message of love and spirituality. Through his meticulous craftsmanship and innovative approach, he strives to capture the essence of divine beauty and ignite a spiritual awakening in the hearts of viewers.<br></br></p><p>

                                His calligraphy art serves as a visual testimony to his philosophy. Each piece is a harmonious blend of traditional calligraphic techniques and contemporary expressions, reflecting his unique artistic voice. His works have garnered international recognition for their ability to inspire, uplift, and create a sense of awe and wonder.<br></br></p><p>

                                In addition to his artistic pursuits, Shahriyar continues to explore the boundless potential of design and ideation. He delves into various creative endeavors, seeking to push the boundaries of artistic expression and discover new ways to communicate his vision of love, truth, and spirituality.<br></br></p> <p>

                                His contributions to the world of art and ideation extend beyond his creative endeavors. He actively engages in sharing his knowledge and expertise with aspiring artists, conducting workshops, and mentoring emerging talents. Through his guidance and encouragement, he nurtures a new generation of calligraphy artists who carry forth the torch of artistic expression and spiritual exploration.<br></br> </p><p>

                                Shahriyar Jamali&apos;s art and thought have touched the hearts and minds of individuals around the world, leaving an indelible mark on the artistic landscape. His unwavering commitment to promoting love and embracing the eternal quest for truth has established him as a visionary artist and thinker, captivating audiences with his profound artistic expressions.
                            </p>

                        </>}

                        {aboutmeLang == 'ir' && <div className={`rtl leading-loose text-xl ${nazanin.className} `}>
                            <p className=' '>
                                شهریار جمالی کاپک، هنرمند خوشنویس ایرانی. او در تهران متولد شد و از همان دوران ابتدایی علاقه‌ای عمیقی به خوشنویسی در خود ایجاد کرد. او در طول زندگی‌اش از قدرت هنر و ایده‌پردازی برای پر کردن شکاف بین انسانیت و الهیت استفاده کرده است.<br></br>
                            </p><p className='mt-5'>
                                <span className='text-xl font-bold'> به عنوان یک هنرمند و ایده‌پرداز</span><br></br> مأموریت وی ترویج عشق و خلق آثاری است که به‌ عنوان مجرای ارتباط بین انسان و خدا باشد. هنرش، با هر کشش قلم بر کاغذ و هر قطعهٔ هنری که قصد برانگیختن حس پیوند، زیبایی و تعالی را دارد، نوعی سفری معنوی است. او معتقد است هنر مظهر حقیقت است و حقیقت‌جویی را تلاشی بی‌نهایت و بی‌حد و حصر می‌داند.<br></br>
                            </p><p>
                                این هنرمند با اعتقادی راسخ به پتانسیل تحول‌آفرین هنر، خلاقیتش را به خلق قطعات خوشنویسی پیچیده‌ای که پیام عمیق عشق و معنویت او را منتقل می‌کند، هدایت می‌کند. وی از طریق پیشه‌ وری دقیق و رویکرد نوآورانهٔ خود، تلاش می‌کند تا جوهر زیبایی الهی را به تصویر بکشد و بیداری معنوی را در دل بینندگان شعله‌ور سازد.<br></br></p><p>

                                هنر خوشنویسی او به‌عنوان شاهدی عینی بر فلسفهٔ اوست. هر قطعه، ترکیبی هماهنگ از تکنیک‌های خوشنویسی سنتی و جلوه‌های معاصر است که صدای هنری منحصربه‌ فرد او را منعکس می‌کند. آثار وی به دلیل توانایی‌ شان در الهام بخشیدن، تعالی بخشیدن، و ایجاد حسی از هیبت و شگفتی، شهرتی بین‌المللی به دست آورده است.<br></br>

                                شهریار علاوه بر فعالیت‌های هنری‌اش، به کشف پتانسیل بی‌حدوحصر طراحی و ایده‌پردازی ادامه می‌دهد. او در تلاش‌های خلاقانه مختلف می‌کوشد تا مرزهای بیان هنری را پیش ببرد و راه‌های جدیدی را برای انتقال دیدگاهش از عشق، حقیقت و معنویت کشف کند.<br></br></p> <p>

                                کمک‌های او به دنیای هنر و ایده‌پردازی فراتر از تلاش‌های خلاقانه‌اش است. او فعالانه دانش و تخصصش را با هنرمندان مشتاق به اشتراک می‌گذارد، کارگاه‌های آموزشی برگزار می‌کند و استعدادهای نوظهور را راهنمایی می‌کند. وی از طریق راهنمایی‌ها و تشویق‌هایش، نسل جدیدی از هنرمندان خوشنویسی را پرورش می‌دهد که مشعل جلوهٔ هنری و کاوش معنوی را به ‌پیش می‌برند.<br></br> </p><p>

                                هنر و اندیشه شهریار جمالی قلب و ذهن افراد را در سراسر جهان تحت‌تأثیر قرار داده است و اثری محو نشدنی بر منظره هنری بر جای گذاشته است. تعهد تزلزل ‌ناپذیر او به ترویج عشق و پذیرش تلاش ابدی برای حقیقت او را به‌ عنوان یک هنرمند و متفکر بصیر تثبیت کرده است و مخاطبان را با جلوهٔ هنری عمیقش مجذوب خود می‌کند.
                            </p>

                        </div>}


                        {aboutmeLang == 'ar' && <div className={`rtl leading-loose text-xl ${arabicFont.className} `}>
                            <p className=' '>
                                شهريار جمالي كابيك، خطاط إيراني. ولد في طهران وطور اهتماماً عميقاً بالفن الخط منذ سن مبكرة.
                                طوال حياته إستخدم قوة الفن والفكر لسد الفجوة بين الإنسانية والالهيت.
                                <br></br>
                            </p><p className='mt-5'>
                                <span className='text-xl font-bold'>كفنان ومفكر</span><br></br>تتمثل مهمته في تعزيز الحب وخلق الأعمال التي تعمل كقناة اتصال بين الإنسان والله.
                                فنه، مع كل ضربة قلم على الورق وكل قطعة فنية تهدف إلى إثارة الشعور بالاتصال والجمال والتميز، هي نوع من الرحلة الروحية.  يؤمن أن الفن هو مظهر من مظاهر الحقيقة ويعتبر البحث عن الحقيقة جهداً غير محدود و غیر محصور.
                                <br></br>
                            </p><p>مع إيمانه الراسخ بالإمكانات التحويلية للفن، يوجه هذا الفنان إبداعه لإنشاء قطع خطية معقدة تنقل رسالته العميقة عن الحب والروحانية. من خلال مهارته الدقيقة ونهجه المبتكر، يحاول تصوير جوهر الجمال الإلهي وإشعال الصحوة الروحية في قلوب المشاهدين.<br></br></p><p>

                                فن الخط لديه دليل موضوعي على فلسفته. كل قطعة عبارة عن مزيج متناغم من تقنيات الخط التقليدية والتأثيرات المعاصرة التي تعكس صوته الفني الفريد. اكتسبت أعماله شهرة عالمية بسبب قدرتها على الإلهام والارتقاء وخلق شعور بالرهبة والاندهاش.<br></br>

                                بالإضافة إلى أنشطته الفنية، يواصل شهريار اكتشاف الإمكانات غیر محدودة للتصميم والأفكار. في العديد من المساعي الإبداعية، يسعى جاهداً لدفع حدود التعبير الفني واكتشاف طرق جديدة للتعبير عن رؤيته للحب والحقيقة والروحانية.<br></br></p> <p>

                                تتجاوز مساهماته في عالم الفن والأفكار مساعيه الإبداعية. يشارك بنشاط معرفته وخبرته مع الفنانين الطموحين و يعقد ورش عمل ويوجه المواهب الناشئة. من خلال توجيهه وتشجيعه، قام بتربية جيل جديد من فناني الخط الذين يحملون شعلة التعبير الفني والاستكشاف الروحي.<br></br> </p><p>

                                أثر فن وفكر شهريار جمالي على قلوب وعقول الناس في جميع أنحاء العالم وترك بصمة لا تمحى على المشهد الفني. إن التزامه الراسخ بتعزيز الحب واحتضان البحث الأبدي عن الحقيقة قد جعله فناناً ذا رؤية ومفكراً، يأسر الجماهير بتعبيراته الفنية العميقة.
                            </p>

                        </div>}

                    </div>
                </div>
                <div className='flex space-x-3 w-full justify-center'>
                    <p className={`hover:cursor-pointer border border-1 border-white px-4 py-2 rounded-full  ${activelang == 'en' ? 'bg-jamali-white text-black' : 'text-white'}`} onClick={e => {
                        setAboutmeLang('en')
                        setActiveLang('en')
                    }} >English</p>
                    <p className={`hover:cursor-pointer border border-1border-white px-4 py-2 rounded-full  ${activelang == 'ir' ? 'bg-jamali-white text-black' : 'text-white'}`} onClick={e => {
                        setAboutmeLang('ir')
                        setActiveLang('ir')
                    }} >Persian</p>
                    <p className={`hover:cursor-pointer border border-1border-white px-4 py-2 rounded-full  ${activelang == 'ar' ? 'bg-jamali-white text-black' : 'text-white'}`} onClick={e => {
                        setAboutmeLang('ar')
                        setActiveLang('ar')
                    }} >Arabic</p>
                </div>
            </div>

        </div >
    )
}

export default AboutMeSection