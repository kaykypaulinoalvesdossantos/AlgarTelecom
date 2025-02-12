import Image from "next/image";
import star from "@/../public/icons/StarFill.svg"
import chat from "@/../public/icons/ChatLeft.svg"

export default function Depoimentos(){

    return(
        <div className="text-[#002D16] bg-gradient-to-b from-[#47CDFF] to-[#CEF2FF] flex flex-col gap-12 items-center py-[130px]">
            <h2 className="text-5xl">Depoimento dos nossos clientes</h2>
            <div className="flex flex-row gap-6">
                <div className="flex flex-col items-center gap-6 bg-white px-12 py-16 rounded-3xl">
                    <Image src={chat} alt={""}/>
                    <p className="max-w-[500px] font-bold text-base text-center">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aut inventore ipsa at similique quibusdam cum quasi illo consequuntur ut ea, suscipit nemo atque provident, itaque earum saepe in. Sunt, magni.</p>
                    <div className="flex flex-row gap-2">
                        <Image src={star} alt={""}/>
                        <Image src={star} alt={""}/>
                        <Image src={star} alt={""}/>
                        <Image src={star} alt={""}/>
                        <Image src={star} alt={""}/>
                    </div>
                </div>
                <div className="flex flex-col items-center gap-6 bg-white px-12 py-16 rounded-3xl">
                    <Image src={chat} alt={""}/>
                    <p className="max-w-[500px] font-bold text-base text-center">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aut inventore ipsa at similique quibusdam cum quasi illo consequuntur ut ea, suscipit nemo atque provident, itaque earum saepe in. Sunt, magni.</p>
                    <div className="flex flex-row gap-2">
                        <Image src={star} alt={""}/>
                        <Image src={star} alt={""}/>
                        <Image src={star} alt={""}/>
                        <Image src={star} alt={""}/>
                        <Image src={star} alt={""}/>
                    </div>
                </div>
                <div className="flex flex-col items-center gap-6 bg-white px-12 py-16 rounded-3xl">
                    <Image src={chat} alt={""}/>
                    <p className="max-w-[500px] font-bold text-base text-center">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aut inventore ipsa at similique quibusdam cum quasi illo consequuntur ut ea, suscipit nemo atque provident, itaque earum saepe in. Sunt, magni.</p>
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