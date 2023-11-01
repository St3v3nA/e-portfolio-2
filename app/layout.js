import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Portfolio',
  description: 'Portfolio of Kristo-Steven Altmäe',
}

export default function RootLayout({ children }) {
  return (
    <html className='h-full bg-black' lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  )
}
