
'use client'
import { useEffect, useState } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay, Pagination } from "swiper/modules"
import 'swiper/css'
import 'swiper/css/pagination'

import Image from 'next/image'
import { apressetation } from '@/mock/apressetation'
export default function Displayhome() {
  const [screenWidth, setScreenWidth] = useState(0)
  useEffect(() => {
    const handleResize = () => setScreenWidth(window.innerWidth)
    window.addEventListener('resize', handleResize)
    handleResize()
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  // Função para escolher a imagem certa com base na tela
  //@typescript-eslint/no-explicit-any
  const getImageByScreenSize = (IMG: any) => { 
    
    if (screenWidth > 1920) return IMG.ultrawide // Ultrawide
    if (screenWidth > 1200) return IMG.desktop  // Desktop
    if (screenWidth > 768) return IMG.tablet    // Tablet
    return IMG.mobile                           // Mobile
  }

  return (
    <div className="relative">
      <Swiper
        spaceBetween={10}
        loop={true}
        autoplay={{
          delay: 4000,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        modules={[Autoplay, Pagination]}
      >
        {apressetation.map((IMG) => (
          <SwiperSlide
            key={IMG.id}
            className="!z-0 w-auto object-cover text-white"
          >
            <Image 
              src={getImageByScreenSize(IMG)} 
              alt="" 
              layout="responsive" 
              objectFit="cover"
            />             
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  )
}
