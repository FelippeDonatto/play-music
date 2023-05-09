'use client'

import { InstagramLogo, SpotifyLogo, YoutubeLogo } from '@phosphor-icons/react'
import Image from 'next/image'
import Link from 'next/link'

import avatar from '/public/avatar.jpg'

export function Perfil() {
  return (
    <div className="flex flex-col justify-center items-center w-[35%] p-6 gap-4 w-full">
      <Image src={avatar} alt="" width={250} className="rounded-md" />
      <h2 className="font-bold text-3xl mb-4 ">Marlua</h2>

      <div>
        <ul className="flex gap-4 text-brand-500">
          <li className="transition-all hover:text-blue-400">
            <Link href="https://www.instagram.com/eumarlua/" target={'_blank'}>
              <InstagramLogo weight="bold" size={24} />
            </Link>
          </li>
          <li className="transition-all hover:text-blue-400">
            <Link href="https://www.youtube.com/@Marlua" target={'_blank'}>
              <YoutubeLogo weight="bold" size={24} />
            </Link>
          </li>
          <li className="transition-all hover:text-blue-400">
            <Link
              href="https://open.spotify.com/artist/0zOgrfCrPbkvSKB4KUEbj4?si=N18f_xV3SB6oLauIjUZIiw"
              target={'_blank'}
            >
              <SpotifyLogo weight="bold" size={24} />
            </Link>
          </li>
        </ul>
      </div>

      <p className="font-normal text-sm leading-5 text-center max-md:w-full">
        Marlua, multi-artista baiana, enveredou-se pela literatura, música e
        artes plásticas para sentir um ponto vibrante no mundo. Em sua
        trajetória, mais de dez anos ...
      </p>

      <Link
        href="https://open.spotify.com/artist/0zOgrfCrPbkvSKB4KUEbj4?si=N18f_xV3SB6oLauIjUZIiw"
        target={'_blank'}
        className="bg-brand-500 w-full text-gray-900 uppercase text-center font-bold px-4 py-3 rounded"
      >
        Veja mais
      </Link>
    </div>
  )
}
