'use client'

import Image from 'next/image'
import Link from 'next/link'

import logo from '/public/logo.png'
import capaVersao from '/public/capaVersao01.png'
import capaVersao2 from '/public/capaVersao02.png'
import {
  BehanceLogo,
  GithubLogo,
  InstagramLogo,
  YoutubeLogo
} from '@phosphor-icons/react'

export default function Home() {
  return (
    <main className="flex flex-col justify-center items-center w-full h-screen">
      <Image src={logo} alt="" width={250} />

      <div className="pt-8">
        <h2>Desafio 01 - Play Music</h2>
      </div>

      <div className="flex gap-8 my-8">
        <div className="flex justify-center items-center gap-4 flex-col">
          <Image src={capaVersao} alt="" width={350} className="rounded-2xl" />
          <Link
            href="/versao1"
            className="bg-violet-500 px-4 py-3 rounded"
            target="_blank"
          >
            Versão Bora Codar
          </Link>
        </div>
        <div className="flex justify-center items-center gap-4 flex-col">
          <Image src={capaVersao2} alt="" width={350} className="rounded-2xl" />
          <Link
            href="/versao2"
            className="bg-violet-500 px-4 py-3 rounded"
            target="_blank"
          >
            Minha Versão
          </Link>
        </div>
      </div>

      <div>
        <ul className="flex gap-8 pt-6">
          <li>
            <Link
              href="https://github.com/felippedonatto"
              target="_blank"
              className="transition-all hover:text-brand-500"
            >
              <GithubLogo size={24} weight="fill" />
            </Link>
          </li>

          <li>
            <Link
              href="https://www.instagram.com/donattodev/"
              target="_blank"
              className="transition-all hover:text-brand-500"
            >
              <InstagramLogo size={24} weight="bold" />
            </Link>
          </li>

          <li>
            <Link
              href="https://www.behance.net/felippedon8296"
              target="_blank"
              className="transition-all hover:text-brand-500"
            >
              <BehanceLogo size={24} weight="fill" />
            </Link>
          </li>

          <li>
            <Link
              href="https://www.youtube.com/channel/UCuzXf39ClGKVnH8HikpgMUA"
              target="_blank"
              className="transition-all hover:text-brand-500"
            >
              <YoutubeLogo size={24} weight="fill" />
            </Link>
          </li>
        </ul>
      </div>
    </main>
  )
}
