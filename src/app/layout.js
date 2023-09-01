import './globals.css'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'شهریار جمالی | Shahriyar Jamali',
  description: 'Art Director | Graphic Designer | Calligraphy Artist',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${inter.className} scroll-smooth  scrollbar-thumb-gray-900 scrollbar-track-gray-100 scrollbar-thin overflow-x-hidden`} >{children}</body>
    </html>
  )
}
