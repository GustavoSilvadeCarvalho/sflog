import Image from "next/image";

export default function Header() {
    return (
        <header className="flex justify-between items-center px-4 sm:px-6 md:px-10 lg:px-20 xl:px-44 bg-white">
            <div className="w-24 md:w-32 lg:w-40">
                <Image
                    src="/logo.png"
                    alt="Logo"
                    width={130}
                    height={100}
                    className="w-full h-auto"
                    priority
                />
            </div>
            <div className="flex space-x-2 sm:space-x-3 md:space-x-4">
                <button className="text-black font-medium md:font-bold text-sm sm:text-base py-1 px-3 sm:py-2 sm:px-4 rounded-2xl border border-gray-300 hover:border-gray-500 transition-colors">
                    Fretes
                </button>
                <button className="bg-orange-500 hover:bg-orange-600 text-white font-medium md:font-bold text-sm sm:text-base py-1 px-3 sm:py-2 sm:px-4 rounded-2xl transition-colors">
                    Contato
                </button>
            </div>
        </header>
    );
}