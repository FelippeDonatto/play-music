import '../styles/globals.css'
import { Roboto } from 'next/font/google'

const roboto = Roboto({
  subsets: ['latin'],
  display: 'swap',
  weight: '400'
})

export const metadata = {
  title: 'PlayMusic',
  generator: 'Next.js',
  applicationName: 'Play Music',
  referrer: '#boracodar Rockeseat',
  keywords: ['Next.js', 'React', 'JavaScript', 'boraCodar', 'Rockeseat'],
  authors: ['Felippe Donatto'],
}

export default function RootLayout({
  children
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-br" className={roboto.className}>
      <body className="bg-violet-900 text-gray-100">{children}</body>
    </html>
  )
}
