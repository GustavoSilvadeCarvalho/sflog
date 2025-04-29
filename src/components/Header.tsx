//faça um header, na esquerda tem uma logo e na direita tem dois botões, um escrito "frete" e o outro escrito "contato"

import Image from "next/image";

export default function Header() {
    return (
        <header className="flex justify-between items-center px-44 bg-white text-white">
            <Image src="/logo.png" alt="Logo" width={130} height={100} className="mr-2" />
            <div className="space-x-4">
                <button className="text-black font-bold py-2 px-4 rounded-2xl border">
                    Frete
                </button>
                <button className="bg-orange-500 hover:bg-orange-700 text-white font-bold py-2 px-4 rounded-2xl">
                    Contato
                </button>
            </div>
        </header>
    );
}