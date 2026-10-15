import './globals.css'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'شهریار جمالی | Shahriyar Jamali',
  description: 'Art Director | Graphic Designer | Calligraphy Artist',
  other:{
    "p:domain_verify": "c3db0f45f903abe5ec093f8ccecb31e6",
  }
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${inter.className} scroll-smooth  scrollbar-thumb-gray-900 scrollbar-track-gray-100 scrollbar-thin overflow-x-hidden`} >{children}</body>
    </html>
  )
}
