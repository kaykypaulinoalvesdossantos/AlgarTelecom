import NavBar from "@/components/NavBar"
import Image from 'next/image'
import BGTemp from '@/../public/image/_Con (1) 1.png'
import Planos from '@/components/Promocao/Planos'
import Vison from "@/components/vison/vison";
import Depoimentos from "@/components/depoimentos/depoimentos";
import PlanosPJ from "@/components/Promocao/PlanosPJ";


export default function Home() {
  return (
    <div>
      <NavBar/>
      <div className="space-y-36">
        <Image src={BGTemp} className="h-3/4" alt={""}/>
        <Planos/>
        <Vison/>
        <div>
          <Depoimentos/>
          <PlanosPJ/>
        </div>
      </div>
    </div>
  );
}
