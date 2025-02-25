"use client"
import Image from "next/image";
import Link from "next/link"
import { useState, useEffect } from "react";
import check from '@/../public/icons/CheckCircleFill.svg'
import { ChevronLeft, ChevronRight } from "lucide-react";

export default function PlanosPj(){

    const [currentIndex, setCurrentIndex] = useState(0);
    const [isResidencial] = useState(true);

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
            plano : '30 Mega',
            valor24 : '570,00',
            valor36: '470,00',
        },
        {
            plano : '50 Mega',
            valor24 : '770,00',
            valor36: '670,00',
        },
        {
            plano : '100 Mega',
            valor24 : '1.070,00',
            valor36: '870,00',
        },
        {
            plano : '200 Mega',
            valor24 : '1.370,00',
            valor36: '1.170,00',
        },
        {
            plano : '300 Mega',
            valor24 : '1.770,00',
            valor36: '1.470,00',
        },
        {
            plano : '30 Mega',
            valor24 : '770,00',
            valor36: '670,00',
            canais: '10 Canais'
        },
        {
            plano : '50 Mega',
            valor24 : '870,00',
            valor36: '770,00',
            canais: '10 Canais'
        },
        {
            plano : '100 Mega',
            valor24 : '1.070,00',
            valor36: '870,00',
            canais: '10 Canais'
        },
        {
            plano : '200 Mega',
            valor24 : '1.470,00',
            valor36: '1.270,00',
            canais: '10 Canais'
        },
        {
            plano : '300 Mega',
            valor24 : '1.670,00',
            valor36: '1.370,00',
            canais: '10 Canais'
        },
        {
            plano : '30 Mega',
            valor24 : '870,00',
            valor36: '770,00',
            canais: '20 Canais'
        },
        {
            plano : '50 Mega',
            valor24 : '1.070,00',
            valor36: '870,00',
            canais: '20 Canais'
        },
        {
            plano : '100 Mega',
            valor24 : '1.170,00',
            valor36: '970,00',
            canais: '20 Canais'
        },
        {
            plano : '200 Mega',
            valor24 : '1.670,00',
            valor36: '1.370,00',
            canais: '20 Canais'
        },
        {
            plano : '300 Mega',
            valor24 : '1.870,00',
            valor36: '1.570,00',
            canais: '20 Canais'
        },
        {
            plano : '30 Mega',
            valor24 : '1.770,00',
            valor36: '970,00',
            canais: '30 Canais'
        },
        {
            plano : '50 Mega',
            valor24 : '1.170,00',
            valor36: '970,00',
            canais: '30 Canais'
        },
        {
            plano : '100 Mega',
            valor24 : '1.270,00',
            valor36: '1.070,00',
            canais: '20 Canais'
        },
        {
            plano : '200 Mega',
            valor24 : '1.770,00',
            valor36: '1.470,00',
            canais: '30 Canais'
        },
        {
            plano : '300 Mega',
            valor24 : '2.070,00',
            valor36: '1.770,00',
            canais: '30 Canais'
        },
    ];

    return(
        <div id="planosparasuaempresa" className="flex flex-col items-center justify-between text-[#002D16] gap-12 w-full bg-[#34393F]">
            <h1 className="text-4xl font-bold text-center max-md:text-3xl max-sm:text-2xl text-white pt-[130px]">CONHEÇA NOSSOS PLANOS PARA SUA EMPRESA!</h1>

            <div className={`w-full flex items-center px-8 max-md:px-0 ${isResidencial ? "block" : "hidden"}`}>
            <button 
    onClick={prevPlan} 
    className={`left-5 z-10 bg-[#00AEEF] p-3 max-md:p-0 rounded-xl shadow-md hover:bg-[#038ABC] transition md:flex ${
        currentIndex > 0 && planosPorPagina < 3 ? 'block' : 'hidden'
    }`}
>
    <ChevronLeft size={40} />
</button>

                <div className="flex w-full gap-6 items-center justify-center ">
                    {promocao.slice(currentIndex, currentIndex + planosPorPagina).map((plano, index) => (
                        <div key={index} 
                            className="bg-white p-7 max-sm:p-3 rounded-3xl flex flex-col gap-7 shadow-md 
                            transition-all duration-300 flex-grow max-w-[350px] w-full"
                        >
                            <h2 className="text-4xl font-bold text-[#178000] mt-6">{plano.plano}</h2>
                            <p className="text-[#002D16] text-xl font-bold ">{plano.canais}</p>
                            <div className="flex flex-col gap-2">
                            <div>
                                <p className="text-[#002D16] text-xl font-bold ">Por apenas</p>
                                <p className={`text-[#002D16] text-4xl font-bold max-sm:text-2xl ${wifiActive[index] ? "hidden" : "block"}`}>R${plano.valor24}<span className="text-2xl">/mês</span></p>
                                <p className={`text-[#002D16] text-4xl font-bold max-sm:text-2xl ${wifiActive[index] ? "block" : "hidden"}`}>R${plano.valor36}<span className="text-2xl">/mês</span></p>
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
                            <p className={`text-[#002D16] text-xl font-bold ${wifiActive[index] ? "hidden" : "block"}`}>24 Meses</p>
                            <p className={`text-[#002D16] text-xl font-bold ${wifiActive[index] ? "block" : "hidden"}`}>36 Meses</p>
                            </div>
                            </div>
                        <span className="min-h-[2px] bg-[#002D16] min-w-full block"></span>

                            <ul className="text-[#002D16] text-base flex flex-col gap-3">
                                <li className="flex items-center gap-2"><Image src={check} alt={""}/>Wi-Fi Grátis</li>
                                <li className="flex items-center gap-2"><Image src={check} alt={""}/>Upload 100% </li>
                                <li className="flex items-center gap-2"><Image src={check} alt={""}/>Download</li>
                                <li className="flex items-center gap-2"><Image src={check} alt={""}/>IP Exclusivo</li>
                                <li className="flex items-center gap-2"><Image src={check} alt={""}/>Suporte em 4 Horas</li>
                            </ul>
                            <Link
                                href="https://api.whatsapp.com/send?phone=5511973047641"
                                className="text-3xl max-sm:text-xl mb-8 h-[56px] min-w-[200px] flex items-center justify-center border-2 border-[#34F80F] rounded-full text-center bg-white text-[#002D16] hover:bg-[#34F80F] hover:text-white hover:font-bold transition-all duration-300">
                                Contratar Plano
                            </Link>
                        </div>
                    ))}
                </div>

                <button 
    onClick={nextPlan} 
    className={`right-5 z-10 bg-[#00AEEF] p-3 rounded-xl max-md:p-0 shadow-md hover:bg-[#038ABC] transition md:flex ${
        currentIndex + planosPorPagina < promocao.length && planosPorPagina < 3 ? 'block' : 'hidden'
    }`}
>
    <ChevronRight size={40} />
</button>

            </div>

            <div className={`w-full flex items-center px-8 ${isResidencial ? "hidden" : "block"}`}>
            <button 
    onClick={prevPlan} 
    className={`left-5 z-10 bg-[#00AEEF] p-3 rounded-xl max-md:p-0 shadow-md hover:bg-[#038ABC] transition md:flex lg:hidden ${
        currentIndex > 0 && planosPorPagina < 3 ? 'block' : 'hidden'
    }`}
>
    <ChevronLeft size={40} />
</button>


            </div>
            <div className="flex flex-col md:flex-row gap-4 md:gap-9 items-center">
    <Link
        href="https://api.whatsapp.com/send?phone=5511973047641"
        className="text-xl md:text-3xl mb-4 md:mb-8 h-[48px] md:h-[56px] min-w-[250px] flex items-center justify-center border-2 border-[#00AEEF] bg-[#00AEEF] rounded-full text-white px-4 md:px-5 hover:bg-[#34393F] font-bold transition-all duration-300">
        Contratar Link Dedicado
    </Link>
    <Link
        href="https://api.whatsapp.com/send?phone=5511973047641"
        className="text-xl md:text-3xl mb-4 md:mb-8 h-[48px] md:h-[56px] min-w-[250px] flex items-center justify-center border-2 border-[#34F80F] bg-[#34F80F] rounded-full text-white px-4 md:px-5 hover:bg-[#34393F] font-bold transition-all duration-300">
        Personalizar Plano
    </Link>
</div>



        </div>
    )
}
