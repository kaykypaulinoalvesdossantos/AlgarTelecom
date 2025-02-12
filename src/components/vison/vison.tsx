import Image from "next/image";
import Trophy from '@/../public/icons/Trophy.svg'
import Headset from '@/../public/icons/Headset.svg'
import Mundo from '@/../public/icons/0 (7) 1.png'
import Mundo2 from '@/../public/icons/0 (7) 2.png'
import Pessoas from '@/../public/icons/0 (6) 1.png'
import Net from '@/../public/icons/HddNetworkFill.svg'
import Medel from '@/../public/icons/0 (8) 1.png'
import visons from '@/../public/image/israel-andrade-YI_9SivVt_s-unsplash 1.png'
import Locais from '@/../public/image/0 (5) 1.png'


export default function vison(){
    return(
        <>
        <div className="flex flex-row justify-around items-center gap-36">
            <div className="ml-36 flex flex-col gap-8">
                <div className="flex flex-row gap-32">
                    <div className="flex flex-col items-center gap-4">
                        <Image src={Trophy} alt={""} />
                        <h2 className="text-4xl text-[#002D16] font-bold ">Top 1°</h2>
                        <p className="text-[#575C5A] text-xl text-center">Algar Telecom esta em primeiro em inovações tecnológicas para melhor conexão dos nosso clientes </p>
                    </div>
                    <div className="flex flex-col items-center gap-4">
                        <Image src={Headset} alt={""} />
                        <h2 className="text-4xl text-[#002D16] font-bold ">24/7</h2>
                        <p className="text-[#575C5A] text-xl text-center">Suporte para todos os clientes 24 horas e 7 dias na semana, para que nossos clientes tenha o maior conforto e seguraça</p>
                    </div>
                </div>
                <div className="flex flex-row gap-32">
                    <div className="flex flex-col items-center gap-4">
                        <Image src={Mundo} alt={""} />
                        <h2 className="text-4xl text-[#002D16] font-bold ">110 Mil</h2>
                        <p className="text-[#575C5A] text-xl text-center">Mais de 100 Mil quilometros com atendimento da nossa Rede Fibra Ótica, com a melhor conexão de todos </p>
                    </div>
                    <div className="flex flex-col items-center gap-4">
                        <Image src={Pessoas} alt={""} />
                        <h2 className="text-4xl text-[#002D16] font-bold ">1.3 Milhões</h2>
                        <p className="text-[#575C5A] text-xl text-center">Mais de 1.3 Milhões de clientes ja conectados com a Algar Telecom. Garantido o melhor acesso de todos a internet </p>
                    </div>
                </div>
            </div>
            
                <Image src={visons} alt={""} />
            
        </div>
        <div className="flex items-center">
            <Image src={Locais} alt={""} />
            <div className="text-[#002d16] flex flex-col items-start justify-start gap-28">
                <h2 className="font-bold text-6xl">De norte ao sul,<br/> de leste a oeste,<br/> a Algar Telecom esta em <br/>todo o Brasil </h2>
                <div className="flex flex-col gap-16">
                <div className="flex flex-row items-center gap-6">
                    <Image src={Mundo2} alt={""} />
                    <p className="text-xl">Mais de 100 Mil quilômetros com a nossa Rede Fibra Ótica</p>
                </div>
                <div className="flex flex-row items-center gap-6">
                    <Image src={Net} alt={""} />
                    <p className="text-xl">Cobertura nas 5 regiões do Brasil </p>
                </div>
                <div className="flex flex-row items-center gap-6 max-w-[612px]">
                    <Image src={Medel} alt={""} />
                    <p className="text-xl">68 Anos trabalhando em todo o Brasil trazendo a melhor conexão de internet para nossos clientes </p>
                </div>
                </div>
            </div>
        </div>
        </>
    )
}