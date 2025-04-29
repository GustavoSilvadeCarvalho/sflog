import Image from "next/image";

export default function Hero() {
    return (
        <div className="relative bg-cover bg-center h-200 px-36" style={{ backgroundImage: "url('/caminhao.jpg')" }}>
            <div className="absolute inset-0 bg-black opacity-50"></div>
            <div className="relative flex flex-col justify-center items-start h-full px-10 text-white space-y-5">
                <h2 className="text-lg font-thin">Conectamos sua carga ao destino certo</h2>
                <h1 className="text-5xl font-bold max-w-[60%]">Logística inteligente e transporte sob medida para sua empresa</h1>
                <p className="text-lg w-full sm:w-[80%] md:w-[70%] lg:w-[40%]">
                    Somos especialistas em transporte de cargas e atuamos como um braço estratégico da sua operação. Nossas soluções logísticas são desenvolvidas de forma personalizada para garantir agilidade, segurança e eficiência no fluxo de mercadorias. Atendemos cada cliente de forma única, entendendo as particularidades do seu negócio e oferecendo o suporte ideal para otimizar sua cadeia de suprimentos.
                </p>
                <div className="flex mt-4 space-x-4">
                    <button className="bg-orange-500 hover:bg-orange-700 text-white font-bold py-2 px-4 rounded-2xl flex items-center">
                        <Image src="/whatsapp.png" alt="WhatsApp" width={20} height={20} className="inline-block mr-2" />
                        Entre em Contato
                    </button>
                    <button className="bg-orange-500 hover:bg-orange-700 text-white font-bold py-2 px-4 rounded-2xl">
                        saiba Mais
                    </button>
                </div>
            </div>
        </div>
    );
}