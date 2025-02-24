'use client'

import NavBar from "@/components/NavBar"
import Image from 'next/image'
import BGTemp from '@/../public/image/_Con (1) 1.png'
import Planos from '@/components/Promocao/Planos'
import Vison from "@/components/vison/vison";
import Depoimentos from "@/components/depoimentos/depoimentos";
import PlanosPJ from "@/components/Promocao/PlanosPJ";
import Footer from "@/components/footer";
import Displayhome from "@/components/dipslyhome/displayhome";
import Planosrp from "@/components/Promocao/Planosrp"
import Visonrs from "@/components/vison/visonrs"
import PlanosPjrp from "@/components/Promocao/PlanosPjrp"
import Depoimentosrp from "@/components/depoimentos/depoimentosrp"


export default function Home() {
  return (
    <div>
      <NavBar/>
      <div className="space-y-36">
        <Displayhome/>
        <Planosrp/>
        <Visonrs/>
         <div>
          <Depoimentosrp/> 
          <PlanosPjrp/>
        </div> 
      </div>
      <Footer/> 
    </div>
  );
}
