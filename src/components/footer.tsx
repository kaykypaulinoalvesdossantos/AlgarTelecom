import Image from "next/image"
import Link from "next/link"
import logobranca from "@/../public/image/Algar_Telecom_logo_branca 1.png"
import Whats from '@/../public/icons/whatsapp.svg'
import Tell from '@/../public/icons/telephone-fill.svg'

export default function Footer() {
    return (
        <footer>
            <div className="flex flex-col lg:flex-row bg-[#008ABD] gap-12 lg:gap-24 justify-between px-6 lg:px-12 py-8 lg:py-12 w-full">
                <div className="flex flex-row max-md:flex-col gap-6 lg:gap-24 items-center md:gap-3 ">
                    <Image src={logobranca} alt="" className="w-[150px] lg:w-auto"/>
                    <div className="flex lg:gap-6 lg:items-center max-md:gap-24 flex-wrap max-md:items-start ">
                        <div className="text-xl lg:text-2xl text-white text-center lg:items-start lg:text-left">
                            <h3 className="font-bold">Número para contato</h3>
                            <p>(11) 2362-9665</p>
                        </div>
                        <div className="text-xl lg:text-2xl text-white text-center lg:items-start lg:text-left">
                            <h3 className="font-bold">E-mail para contato</h3>
                            <p>contato@acctelecom.com.br</p>
                        </div>
                    </div>
                </div>
                <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 md:gap-3 items-center justify-center">
                    <Link 
                        href='https://api.whatsapp.com/send?phone=551123629665' 
                        className="text-xl lg:text-2xl h-[48px] lg:h-[56px] w-full sm:min-w-[200px] flex items-center justify-center border-2 border-[#1EFF00] rounded-full text-white hover:bg-[#1EFF00] hover:text-white hover:font-bold transition-all duration-300 gap-3">
                        <Image src={Whats} className="w-6 lg:w-7" alt="Whatsapp" />
                        Whatsapp
                    </Link>
                    <Link 
                        href='tel:+5511973047641' 
                        className="text-xl lg:text-2xl h-[48px] lg:h-[56px] w-full sm:min-w-[200px] flex items-center justify-center border-2 border-[#00AAFF] rounded-full text-white hover:bg-[#00AAFF] hover:text-white hover:font-bold transition-all duration-300 gap-3">
                        <Image src={Tell} className="w-6 lg:w-7" alt="Telefone" />
                        Me ligue já
                    </Link>
                </div>
            </div>
            <div className="bg-[#00688E] w-full flex flex-col lg:flex-row items-center justify-between gap-2 px-6 lg:px-12 py-2 text-center lg:text-left font-bold text-white">
                <p>Site Parceiro credenciado Algar Telecom</p>
                <p>© Todos os direitos reservados à ACC Telecom</p>
            </div>
        </footer>
    )
}
