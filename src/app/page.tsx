'use client'

import NavBar from "@/components/NavBar"
import Planos from '@/components/Promocao/Planos'
import Vison from "@/components/vison/vison";
import Depoimentos from "@/components/depoimentos/depoimentos";
import PlanosPJ from "@/components/Promocao/PlanosPJ";
import Footer from "@/components/footer";
import Displayhome from "@/components/dipslyhome/displayhome";



export default function Home() {
  return (
    <div>
      <NavBar/>
      <div className="space-y-36">
        <Displayhome/>
        <Planos/>
        <Vison/>
         <div>
          <Depoimentos/> 
          <PlanosPJ/>
        </div> 
      </div>
      <Footer/> 
    </div>
  );
}
