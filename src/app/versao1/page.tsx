import Image from 'next/image'

import capa from '/public/capa.png'
import voltar from '/public/voltar.png'
import play from '/public/play.png'
import avancar from '/public/avancar.png'

export default function Home() {
  return (
    <main className="flex justify-center items-center w-full h-screen gap-8 max-md:flex-col max-md:px-4 max-md:mt-40">
      <div className="bg-violet-500 px-9 py-12 rounded-xl flex flex-col gap-7 max-md:w-full">
        <Image src={capa} alt="" />
        <div>
          <h2 className="font-bold text-2xl leading-[100%]">Acorda Devinho</h2>
          <p className="font-normal text-lg text-gray-200 leading-[100%] pt-2">
            Banda Rocketseat
          </p>
        </div>

        <div className="flex justify-center items-center gap-12 ">
          <Image src={voltar} alt="" width={28} height={28} />
          <Image src={play} alt="" width={28} height={28} />
          <Image src={avancar} alt="" width={28} height={28} />
        </div>

        <div>
          <div className="bg-gray-100 w-full h-[6px] rounded-full"></div>

          <div className="flex items-center justify-between mt-2 text-gray-200">
            <p>03:20</p>
            <p>00:12</p>
          </div>
        </div>
      </div>

      <div className="flex flex-col gap-8 w-[350px] ">
        <div className="bg-violet-500 p-7 rounded-xl">
          <div className="flex items-center gap-7 mb-7">
            <Image src={capa} alt="" width={84} />
            <div>
              <h2 className="font-bold text-2xl leading-[100%]">
                Acorda Devinho
              </h2>
              <p className="font-normal text-lg text-gray-200 leading-[100%] pt-2">
                Banda Rocketseat
              </p>
            </div>
          </div>

          <div className="flex justify-center items-center gap-12 mb-7">
            <Image src={voltar} alt="" width={28} height={28} />
            <Image src={play} alt="" width={28} height={28} />
            <Image src={avancar} alt="" width={28} height={28} />
          </div>

          <div>
            <div className="bg-gray-100 w-full h-[6px] rounded-full"></div>

            <div className="flex items-center justify-between mt-2 text-sm leading-[160%] text-gray-200">
              <p>03:20</p>
              <p>00:12</p>
            </div>
          </div>
        </div>

        <div className="bg-violet-500 p-7 rounded-xl">
          <div className="flex items-center gap-7 mb-7">
            <Image src={capa} alt="" width={84} />
            <div>
              <h2 className="font-bold text-2xl leading-[100%]">
                Acorda Devinho
              </h2>
              <p className="font-normal text-lg text-gray-200 leading-[100%] pt-2">
                Banda Rocketseat
              </p>
            </div>
          </div>

          <div className="flex justify-center items-center gap-12">
            <Image src={voltar} alt="" width={28} height={28} />
            <Image src={play} alt="" width={28} height={28} />
            <Image src={avancar} alt="" width={28} height={28} />
          </div>
        </div>
      </div>
    </main>
  )
}
