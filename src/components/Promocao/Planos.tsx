"use client"
import Image from "next/image";
import Link from "next/link"
import { useState, useEffect } from "react";
import check from '@/../public/icons/CheckCircleFill.svg'
import { ChevronLeft, ChevronRight } from "lucide-react";

export default function Planos(){

    const [currentIndex, setCurrentIndex] = useState(0);
    const [isResidencial, setIsResidencial] = useState(true);

    const [wifiActive, setWifiActive] = useState<{ [key: number]: boolean }>({});

    const [planosPorPagina, setPlanosPorPagina] = useState(3);

    // Responsividade
    useEffect(() => {
        const handleResize = () => {
            if (isResidencial) {
                if (window.innerWidth < 640) {
                    setPlanosPorPagina(1);
                } else if (window.innerWidth < 1024) {
                    setPlanosPorPagina(2);
                } else {
                    setPlanosPorPagina(3);
                }
            } else {
                if (window.innerWidth < 640) {
                    setPlanosPorPagina(1);
                } else if (window.innerWidth < 1024) {
                    setPlanosPorPagina(2);
                } else {
                    setPlanosPorPagina(3); // Ou ajuste conforme necessário para o plano móvel
                }
            }
        };
    
        handleResize();
        window.addEventListener("resize", handleResize);
    
        return () => {
            window.removeEventListener("resize", handleResize);
        };
    }, [isResidencial]);
    

    const nextPlan = () => {
        if (currentIndex + planosPorPagina < promocao.length) {
            setCurrentIndex(currentIndex + 1);
        }
    };

    const prevPlan = () => {
        if (currentIndex > 0) {
            setCurrentIndex(currentIndex - 1);
        }
    };

    const toggleWifi = (index: number) => {
        setWifiActive((prevState) => ({
            ...prevState,
            [index]: !prevState[index],
        }));
    };

    const promocao = [
        {
            plano : '300 Mega',
            valor : '99,90',
            valorsuper : '139,80',
            up: '150 Megas',
        },
        {
            plano : '400 Mega',
            valor : '109,90',
            valorsuper : '149,80',
            up: '200 Megas',
        },
        {
            plano : '500 Mega',
            valor : '119,90',
            valorsuper : '159,80',
            up: '250 Megas',
        },
        {
            plano : '600 Mega',
            valor : '129,90',
            valorsuper : '169,80',
            up: '300 Megas',
        },
        {
            plano : '700 Mega',
            valor : '139,90',
            valorsuper : '179,80',
            up: '350 Megas',
        },
        {
            plano : '800 Mega',
            valor : '149,90',
            valorsuper : '189,80',
            up: '400 Megas',
        },
        {
            plano : '1 Gigas',
            valor : '239,90',
            valorsuper : '279,80',
            up: '500 Megas',
        },
    ];

    const promocaomovel = [
        {
            plano : '20 Gigas',
            valor : '44,90',
        },
        {
            plano : '60 Gigas',
            valor : '84,90',
        },
        {
            plano : '130 Gigas',
            valor : '114,90',
        }

    ]

    return(
        <div id="planosparasuacasa" className="flex flex-col items-center justify-between text-[#002D16] gap-12 w-full">
            <h1 className="text-4xl font-bold text-center max-md:text-3xl max-sm:text-2xl">CONHEÇA TODAS AS NOSSAS OFERTAS!</h1>
            <div>
                <div className="bg-gray-300 rounded-full flex items-center cursor-pointer gap-9">
                    <div className={`py-4 px-3 ${isResidencial ? "bg-white rounded-full m-1" : "bg-gray-300 rounded-full m-1"}`}
                        onClick={() => setIsResidencial(true)}>
                        <span className="font-bold text-2xl max-md:text-xl ">Internet Residencial</span>
                    </div>
                    <div className={`py-4 px-3 ${isResidencial ? "bg-gray-300 rounded-full m-1" : "bg-white rounded-full m-1"}`}
                        onClick={() => setIsResidencial(false)}>
                        <span className="font-bold text-2xl max-md:text-xl">Plano Móvel</span>
                    </div>
                </div>
            </div>

            <div className={`w-full flex items-center px-8 max-md:px-0  ${isResidencial ? "block" : "hidden"}`}>
            <button 
    onClick={prevPlan} 
    className={`left-5 z-10 bg-[#00AEEF] p-3 max-md:p-0  rounded-xl shadow-md hover:bg-[#038ABC] transition md:flex ${
        currentIndex > 0 && planosPorPagina < 3 ? 'block' : 'hidden'
    }`}
>
    <ChevronLeft size={40} />
</button>

                <div className="flex w-full gap-6 items-center justify-center ">
                    {promocao.slice(currentIndex, currentIndex + planosPorPagina).map((plano, index) => (
                        <div key={index} 
                            className="bg-white p-7 rounded-3xl flex flex-col gap-7 shadow-md 
                            transition-all duration-300 flex-grow max-w-[350px] w-full"
                        >
                            <h2 className="text-4xl font-bold text-[#178000] mt-6">{plano.plano}</h2>
                            <div>
                                <p className="text-[#002D16] text-xl font-bold ">Por apenas</p>
                                <p className={`text-[#002D16] text-4xl  max-sm:text-2xl font-bold ${wifiActive[index] ? "hidden" : "block"}`}>R${plano.valor}<span className="text-2xl">/mês</span></p>
                                <p className={`text-[#002D16] text-4xl  max-sm:text-2xl font-bold ${wifiActive[index] ? "block" : "hidden"}`}>R${plano.valorsuper}<span className="text-2xl">/mês</span></p>
                            </div>
                            <div className="flex flex-row items-center gap-4">
                                <button
                                className={`w-16 h-8 rounded-full flex items-center px-1 transition-all duration-300 ${
                                    wifiActive[index] ? "bg-[#34F80F]" : "bg-[#D1DBD6]"
                                }`}
                                onClick={() => toggleWifi(index)}
                            >
                                <span
                                    className={`w-6 h-6 bg-white rounded-full shadow-md transform transition-all duration-300 ${
                                        wifiActive[index] ? "translate-x-7" : "translate-x-0"
                                    }`}
                                />
                            </button>
                                <p className="font-bold text-xl">Super Wi-fi</p>
                            </div>
                        <span className="min-h-[2px] bg-[#002D16] min-w-full block"></span>

                            <ul className="text-[#002D16] text-base flex flex-col gap-3">
                            <li className={`flex items-center gap-2 
                                        ${wifiActive[index] ? "block" : "hidden"}
                                `}><Image src={check} alt={""}/>Super Roteador Wi-FI 6</li>
                                <li className="flex items-center gap-2"><Image src={check} alt={""}/>Instalação gratuita</li>
                                <li className="flex items-center gap-2"><Image src={check} alt={""}/>Wi-Fi Grátis</li>
                                <li className="flex items-center gap-2"><Image src={check} alt={""}/>Linha Fixa</li>
                                <li className="flex items-center gap-2"><Image src={check} alt={""}/>Internet 100% Fibra ótica </li>
                                <li className="flex items-center gap-2"><Image src={check} alt={""}/>Até {plano.plano} de Download</li>
                                <li className="flex items-center gap-2"><Image src={check} alt={""}/>Até {plano.up} de Upload</li>
                            </ul>
                            <Link
                                href="https://api.whatsapp.com/send?phone=5511973047641"
                                className=" max-sm:text-xl text-3xl mb-8 h-[56px] min-w-[200px] flex items-center justify-center border-2 border-[#34F80F] rounded-full text-center bg-white text-[#002D16] hover:bg-[#34F80F] hover:text-white hover:font-bold transition-all duration-300">
                                Contratar Plano
                            </Link>
                        </div>
                    ))}
                </div>

                <button 
    onClick={nextPlan} 
    className={`right-5 z-10 bg-[#00AEEF] max-md:p-0 p-3 rounded-xl shadow-md hover:bg-[#038ABC] transition md:flex ${
        currentIndex + planosPorPagina < promocao.length && planosPorPagina < 3 ? 'block' : 'hidden'
    }`}
>
    <ChevronRight size={40} />
</button>

            </div>

            <div className={`w-full flex items-center px-8 max-md:px-0 ${isResidencial ? "hidden" : "block"}`}>
            <button 
    onClick={prevPlan} 
    className={`left-5 z-10 bg-[#00AEEF] max-md:p-0 p-3 rounded-xl shadow-md hover:bg-[#038ABC] transition md:flex lg:hidden ${
        currentIndex > 0 && planosPorPagina < 3 ? 'block' : 'hidden'
    }`}
>
    <ChevronLeft size={40} />
</button>


                {/* Contêiner dos planos */}
                <div className="flex w-full gap-6 items-center justify-center">
                    {promocaomovel.slice(currentIndex, currentIndex + planosPorPagina).map((plano, index) => (
                        <div key={index} className="bg-white p-7 rounded-3xl flex flex-col gap-7 shadow-md 
                            transition-all duration-300 flex-grow max-w-[350px] w-full">
                        <h2 className="text-4xl font-bold text-[#178000] mt-6">{plano.plano}</h2>
                        <div className="flex flex-col gap-5">
                            <div>
                                <p className="text-[#002D16] text-xl font-bold">Por apenas</p>
                                <p className={"text-[#002D16] text-4xl  max-sm:text-2xl font-bold"}>R${plano.valor}<span className="text-2xl">/mês</span></p>
                            </div>
                        </div>
                        
                        <span className="min-h-[2px] bg-[#002D16] min-w-full block"></span>
                        <div className="flex flex-col gap-5">
                            <p className="text-[#002D16] text-xl">Serviços inclusos :</p>
                            <ul className="text-[#002D16] text-base flex flex-col gap-3">
                                <li className="flex items-center gap-2"><Image src={check} alt={""}/>5G</li>
                                <li className="flex items-center gap-2"><Image src={check} alt={""}/>Cobertura Nascional</li>
                                <li className="flex items-center gap-2"><Image src={check} alt={""}/>Ligações Ilimitadas</li>
                                <li className="flex items-center gap-2"><Image src={check} alt={""}/>Whatsapp Ilimitado</li>
                            </ul>
                        </div>
                            <Link
                                href="https://api.whatsapp.com/send?phone=5511973047641"
                                className=" max-sm:text-xl text-3xl mb-8 h-[56px] min-w-[200px] flex items-center justify-center border-2 border-[#34F80F] rounded-full text-center bg-white text-[#002D16] hover:bg-[#34F80F] hover:text-white hover:font-bold transition-all duration-300">
                                Contratar Plano
                            </Link>
                        </div>
                    ))}
                </div>
                <button 
    onClick={nextPlan} 
    className={`right-5 z-10 bg-[#00AEEF] p-3 max-md:p-0 rounded-xl shadow-md hover:bg-[#038ABC] transition md:flex lg:hidden ${
        currentIndex + planosPorPagina < promocaomovel.length && planosPorPagina < 3 ? 'block' : 'hidden'
    }`}
>
    <ChevronRight size={40} />
</button>
            </div>
        </div>
    )
}
