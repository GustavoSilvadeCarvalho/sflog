import Image from "next/image"
import { ArrowRight, Ban } from "lucide-react"

export default function Whatsapp() {
    return (
        <section className="max-w-7xl mx-auto px-4 py-16 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                <div className="relative flex justify-center">
                    <div className="w-72 h-72 md:w-96 md:h-96 bg-slate-800 rounded-full flex items-center justify-center">
                        <div className="relative w-64 h-64 md:w-80 md:h-80 transform -rotate-6">
                            <Image
                                src="/placeholder.svg?height=600&width=500"
                                alt="Smartphones mostrando WhatsApp da SFlog"
                                width={500}
                                height={600}
                                className="object-contain"
                            />
                        </div>
                    </div>
                </div>

                <div>
                    <h2 className="text-4xl font-bold text-slate-800 mb-6 text-center lg:text-left">
                        Faça a sua cotação pelo nosso <span className="text-orange-500">WhatsApp</span>
                    </h2>

                    <p className="text-gray-700 mb-8 text-center lg:text-left">
                        Comprometidos em fornecer fretes e transporte de cargas que atendam às necessidades dos clientes. Oferecemos
                        flexibilidade, qualidade e segurança em cada etapa da jornada. O atendimento personalizado é o que nos
                        destaca, garantindo a satisfação dos clientes. A frota da S&Flog é 100% própria, com veículos rastreados,
                        higienizados, revisados e assegurados constantemente. Possuem frota composta por veículos que vão desde
                        utilitários a trucks, com capacidade de carga até 13.500kg.
                    </p>

                    <div className="mb-8 flex justify-center lg:justify-start">s
                        <a
                            href="#"
                            className="inline-flex items-center justify-center bg-slate-800 hover:bg-slate-700 text-white font-medium py-3 px-6 rounded-full transition-colors duration-300"
                        >
                            <svg className="w-5 h-5 mr-2" fill="currentColor" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                            </svg>
                            Faça uma Cotação
                        </a>
                    </div>

                    <div className="space-y-3 text-sm text-gray-600">
                        <div className="flex items-center">
                            <ArrowRight className="w-4 h-4 mr-2 text-orange-500" />
                            <p>
                                Fracionado: Confira as cidades do interior de SP que atendemos{" "}
                                <a href="#" className="text-orange-500 hover:underline">
                                    clicando aqui
                                </a>
                            </p>
                        </div>

                        <div className="flex items-center">
                            <ArrowRight className="w-4 h-4 mr-2 text-orange-500" />
                            <p>
                                Dedicado: <span className="font-medium">apenas SP, MG, PR & RJ</span>
                            </p>
                        </div>

                        <div className="flex items-center">
                            <Ban className="w-4 h-4 mr-2 text-orange-500" />
                            <p>
                                Não estamos aceitando <span className="font-bold">CURRÍCULOS</span>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
