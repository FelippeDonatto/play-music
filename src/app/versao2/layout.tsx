import '../../styles/globals.css'
import { Inter } from 'next/font/google'

const inter = Inter({
  subsets: ['latin'],
  display: 'swap'
})

export const metadata = {
  title: 'Play Music'
}

export default function RootLayout({
  children
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-br" className={inter.className}>
      <body className="bg-blue-900 text-gray-100">
        <main className="flex justify-center items-center gap-16 w-full max-w-5xl mx-auto h-screen ">
          {children}
        </main>
      </body>
    </html>
  )
}
