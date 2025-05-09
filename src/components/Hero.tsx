import Image from "next/image";

export default function Hero() {
    return (
        <div className="w-full relative bg-cover bg-center h-screen md:h-[calc(100vh-10rem)] px-4 sm:px-10 md:px-20 lg:px-36 bg-white"
            style={{ backgroundImage: "url('/fundo2.jfif')" }}>
            <div className="absolute inset-0 bg-black opacity-50"></div>
            <div className="relative w-full flex flex-col justify-center items-start h-full px-4 sm:px-10 text-white space-y-3 sm:space-y-5">
                <h2 className="text-sm sm:text-lg font-thin">Conectamos sua carga ao destino certo</h2>
                <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold w-full md:max-w-[60%]">
                    Logística inteligente e transporte sob medida para sua empresa
                </h1>
                <p className="text-sm sm:text-base md:text-lg w-full lg:w-[40%]">
                    Somos especialistas em transporte de cargas e atuamos como um braço estratégico da sua operação...
                </p>
                <div className="flex mt-2 sm:mt-4 space-x-2 sm:space-x-4 flex-wrap gap-2">
                    <button className="bg-orange-500 hover:bg-orange-700 text-white font-bold py-1 px-3 sm:py-2 sm:px-4 rounded-2xl flex items-center text-sm sm:text-base">
                        <a href="https://wa.me/5519999158816" className="flex items-center text-sm sm:text-base">
                            <Image src="/whatsapp.png" alt="WhatsApp" width={20} height={20} className="inline-block mr-2" />
                            Entre em Contato
                        </a>
                    </button>
                    <button className="bg-orange-500 hover:bg-orange-700 text-white font-bold py-1 px-3 sm:py-2 sm:px-4 rounded-2xl text-sm sm:text-base">
                        Saiba Mais
                    </button>
                </div>
            </div>
        </div>
    );
}