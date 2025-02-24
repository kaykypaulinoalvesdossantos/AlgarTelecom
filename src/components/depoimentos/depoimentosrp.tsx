import Image from "next/image";
import star from "@/../public/icons/StarFill.svg"
import chat from "@/../public/icons/ChatLeft.svg"

export default function Depoimentosrp(){

    return(
        <div className="text-[#002D16] bg-gradient-to-b from-[#47CDFF] to-[#CEF2FF] flex flex-col gap-12 items-center py-[130px]">
    <h2 className="text-4xl md:text-5xl text-center">Depoimento dos nossos clientes</h2>
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <div className="flex flex-col items-center gap-6 bg-white px-8 md:px-12 py-12 md:py-16 rounded-3xl">
            <Image src={chat} alt={""}/>
            <p className="max-w-[500px] font-bold text-base text-center">Estou impressionado com a qualidade da internet da Algar Telecom! A conexão é super estável e rápida, perfeita para trabalhar de casa sem nenhuma interrupção. Além disso, o atendimento ao cliente é excelente, sempre prestativo e ágil. Recomendo para quem busca uma internet confiável!</p>
            <div className="flex flex-row gap-2">
                <Image src={star} alt={""}/>
                <Image src={star} alt={""}/>
                <Image src={star} alt={""}/>
                <Image src={star} alt={""}/>
                <Image src={star} alt={""}/>
            </div>
        </div>
        <div className="flex flex-col items-center gap-6 bg-white px-8 md:px-12 py-12 md:py-16 rounded-3xl">
            <Image src={chat} alt={""}/>
            <p className="max-w-[500px] font-bold text-base text-center">Troquei de operadora e escolhi o chip da Algar Telecom, e foi a melhor decisão que eu poderia ter tomado! O sinal é ótimo, mesmo em lugares onde outras operadoras não pegam direito. Além disso, os planos são muito acessíveis e com bastante internet. Estou muito satisfeito!</p>
            <div className="flex flex-row gap-2">
                <Image src={star} alt={""}/>
                <Image src={star} alt={""}/>
                <Image src={star} alt={""}/>
                <Image src={star} alt={""}/>
                <Image src={star} alt={""}/>
            </div>
        </div>
        <div className="flex flex-col items-center gap-6 bg-white px-8 md:px-12 py-12 md:py-16 rounded-3xl">
            <Image src={chat} alt={""}/>
            <p className="max-w-[500px] font-bold text-base text-center">Com a internet da Algar Telecom, consigo assistir filmes e séries em alta definição sem nenhum travamento. A velocidade é incrível, e a instalação foi super rápida e fácil. O chip também é excelente, com cobertura em todos os lugares que preciso. Simplesmente sensacional!</p>
            <div className="flex flex-row gap-2">
                <Image src={star} alt={""}/>
                <Image src={star} alt={""}/>
                <Image src={star} alt={""}/>
                <Image src={star} alt={""}/>
                <Image src={star} alt={""}/>
            </div>
        </div>
    </div>
</div>

    )
}