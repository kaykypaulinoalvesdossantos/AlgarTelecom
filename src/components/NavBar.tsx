'use client'
import Logo from '@/../public/image/Algar_Telecom_logo.png'
import Whats from '@/../public/icons/whatsapp.svg'
import Tell from '@/../public/icons/telephone-fill.svg'
import { Menu, X } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import { useState } from 'react'

export default function NavBar() {
  const [open, setOpen] = useState(false)
  const Links = [
    {
      name: 'Planos Para sua Casa',
      link: '#planosparasuacasa',
    },
    {
      name: 'Planos Para sua Empresa',
      link: '#planosparasuaempresa',
    },
  ]

  return (
    <nav className="max-w-full shadow-nabBarShadow">
      <div className="items-center justify-between bg-[#FBF8F5] px-7 py-4 md:flex  md:px-10">
        <Link
          href={'/'}
          className="flex cursor-pointer items-center text-base text-[#002D16] sm:text-sm 
      md:text-xl"
        >
          <Image src={Logo} className="w-20" alt="Logo Algar Telecom" />
        </Link>
        <div
          onClick={() => setOpen(!open)}
          className="absolute right-8 top-3 cursor-pointer text-base min-[901px]:hidden"
        >
          {open ? (
            <Menu className="hidden" />
          ) : (
            <Menu className="h-[40px] w-[40px] text-center text-[#002D16]" />
          )}
        </div>
        

        <ul
          className={`absolute top-0 z-50 flex flex-col items-center gap-12 rounded-l-3xl bg-[#FBF8F5] px-20 py-56 shadow-navBarShadow transition-all duration-500 ease-in min-[901px]:static
          min-[901px]:w-auto min-[901px]:flex-row min-[901px]:items-center min-[901px]:px-0 min-[901px]:py-0 ${
              open
                ? 'right-0 block'
                : 'right-[-490px] shadow-none max-[900px]:hidden'
            }`}
        >
          
          <div
            onClick={() => setOpen(!open)}
            className="absolute right-8 top-6 cursor-pointer text-3xl min-[901px]:hidden"
          >
            {open ? (
              <X className="h-[40px] w-[40px] text-[#002D16]" />
            ) : (
              <X className="hidden" />
            )}
          </div>

          <div className='flex flex-row max-md:flex-col gap-4'>
          {Links.map((link) => (
              <li key={link.name} className="text-base md:text-base text-center">
              <Link href={link.link} className="text-[#002D16] font-inter font-bold duration-500 text-center">
                {link.name}
              </Link>
            </li>
          ))}
          </div>
          <div className='flex max-md:flex-col flex-row gap-3'>
            <Link href='https://api.whatsapp.com/send?phone=551123629665'  className='text-base text-white bg-[#1EFF00] py-2 px-4 flex rounded-full items-center gap-2'>
            <Image src={Whats} className="w-7 fill-white " alt="Whatsapp" />
              Whatsapp
            </Link>
            <Link href='tel:+5511973047641' className='text-base text-white bg-[#00AEEF] py-2 px-4 flex rounded-full items-center gap-2'>
            <Image src={Tell} className="w-7 fill-white " alt="Whatsapp" />
            Me ligue ja
            </Link>
          </div>
        </ul>
      </div>
    </nav>
  )
}