import Image from "next/image";
import Trophy from '@/../public/icons/Trophy.svg';
import Headset from '@/../public/icons/Headset.svg';
import Mundo from '@/../public/icons/0 (7) 1.png';
import Mundo2 from '@/../public/icons/0 (7) 2.png';
import Pessoas from '@/../public/icons/0 (6) 1.png';
import Net from '@/../public/icons/HddNetworkFill.svg';
import Medel from '@/../public/icons/0 (8) 1.png';
import visons from '@/../public/image/israel-andrade-YI_9SivVt_s-unsplash 1.png';
import Locais from '@/../public/image/-insert-title-here- 1.png';

export default function Vison() {
    return (
        <>
            {/* Seção principal */}
            <div className="flex flex-col md:flex-row justify-center items-center md:justify-between gap-12 md:gap-36">
                {/* Conteúdo */}
                <div className="flex flex-col gap-8 px-12">
                    {/* Primeira linha de itens */}
                    <div className="flex flex-col sm:flex-row gap-8 sm:gap-32 items-center">
                        <div className="flex flex-col items-center gap-4">
                            <Image src={Trophy} alt="Troféu" className="w-12 md:w-16" />
                            <h2 className="text-2xl md:text-4xl text-[#002D16] font-bold">Top 1°</h2>
                            <p className="text-[#575C5A] text-base md:text-xl text-center">
                                Algar Telecom está em primeiro em inovações tecnológicas para melhor conexão dos nossos clientes.
                            </p>
                        </div>
                        <div className="flex flex-col items-center gap-4">
                            <Image src={Headset} alt="Suporte 24/7" className="w-12 md:w-16" />
                            <h2 className="text-2xl md:text-4xl text-[#002D16] font-bold">24/7</h2>
                            <p className="text-[#575C5A] text-base md:text-xl text-center">
                                Suporte 24 horas por dia, 7 dias por semana, garantindo conforto e segurança.
                            </p>
                        </div>
                    </div>

                    {/* Segunda linha de itens */}
                    <div className="flex flex-col sm:flex-row gap-8 sm:gap-32 items-center">
                        <div className="flex flex-col items-center gap-4">
                            <Image src={Mundo} alt="Rede Fibra" className="w-12 md:w-16" />
                            <h2 className="text-2xl md:text-4xl text-[#002D16] font-bold">110 Mil</h2>
                            <p className="text-[#575C5A] text-base md:text-xl text-center">
                                Mais de 110 mil quilômetros de Rede Fibra Óptica, garantindo a melhor conexão.
                            </p>
                        </div>
                        <div className="flex flex-col items-center gap-4">
                            <Image src={Pessoas} alt="Clientes Algar" className="w-12 md:w-16" />
                            <h2 className="text-2xl md:text-4xl text-[#002D16] font-bold">1.3 Milhões</h2>
                            <p className="text-[#575C5A] text-base md:text-xl text-center">
                                Mais de 1.3 milhões de clientes conectados com a Algar Telecom.
                            </p>
                        </div>
                    </div>
                </div>

                {/* Imagem lateral - some em telas pequenas */}
                <div className="hidden md:flex self-start w-full">
                    <Image src={visons} alt="Imagem Visão" className="w-full md:w-auto" />
                </div>
            </div>

            {/* Segunda seção */}
            <div className="flex flex-col md:flex-row items-center md:justify-between gap-12 md:gap-36 px-6 md:px-12">
                {/* Imagem lateral - some em telas pequenas */}
                <div className="hidden md:flex self-start">
                    <Image src={Locais} alt="Cobertura Algar" className="w-full md:w-auto" />
                </div>

                {/* Conteúdo de texto */}
                <div className="text-[#002d16] flex flex-col items-start justify-start gap-8 md:gap-28">
                    <h2 className="font-bold text-3xl md:text-6xl leading-tight">
                        De norte ao sul, <br /> de leste a oeste, <br /> a Algar Telecom está em <br /> todo o Brasil
                    </h2>

                    <div className="flex flex-col gap-8 md:gap-16">
                        <div className="flex flex-row items-center gap-4">
                            <Image src={Mundo2} alt="Fibra Óptica" className="w-12 md:w-16" />
                            <p className="text-base md:text-xl">Mais de 110 Mil quilômetros de Rede Fibra Óptica.</p>
                        </div>
                        <div className="flex flex-row items-center gap-4">
                            <Image src={Net} alt="Cobertura Nacional" className="w-12 md:w-16" />
                            <p className="text-base md:text-xl">Cobertura nas 5 regiões do Brasil.</p>
                        </div>
                        <div className="flex flex-row items-center gap-4 max-w-[612px]">
                            <Image src={Medel} alt="História Algar" className="w-12 md:w-16" />
                            <p className="text-base md:text-xl">
                                68 anos conectando o Brasil com a melhor internet.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
