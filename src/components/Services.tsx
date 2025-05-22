"use client"
import { Package, Truck, BarChart } from "lucide-react"
import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"

export default function Services() {
    const containerRef = useRef(null)
    const isInView = useInView(containerRef, { once: true, amount: 0.1 })

    const cardVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: (i: number) => ({
            opacity: 1,
            y: 0,
            transition: {
                delay: i * 0.2,
                duration: 0.5,
            },
        }),
    }

    return (
        <section className="max-w-7xl mx-auto px-4 py-16 sm:px-6 lg:px-8">
            <motion.div
                ref={containerRef}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 0.5 }}
                className="text-center mb-10"
            >
                <h1 className="text-4xl font-bold text-slate-800 mb-4">
                    Aqui na <span className="text-orange-500">S&Flog</span> quem controla é você!
                </h1>
                <p className="text-gray-600 max-w-4xl mx-auto">
                    Conheça um pouco mais dos nossos serviços de transporte de cargas. Por favor, verifique nossa área de atuação
                    e as regiões que atendemos!
                </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
                {/* Card 1 - Frete Fracionado */}
                <motion.div
                    variants={cardVariants}
                    initial="hidden"
                    animate={isInView ? "visible" : "hidden"}
                    custom={0}
                    whileHover={{ scale: 1.02 }}
                    className="bg-white rounded-lg shadow-sm p-6 border border-gray-100"
                >
                    <div className="flex items-start mb-4">
                        <div className="bg-orange-500 w-12 h-12 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                            <Package className="text-white w-6 h-6" />
                        </div>
                        <h3 className="text-xl font-bold text-slate-800">Frete Fracionado</h3>
                    </div>

                    <p className="text-gray-700 mb-6">
                        Ideal para cargas menores! No frete fracionado, sua mercadoria compartilha o espaço do veículo com outras
                        cargas, tornando o custo mais acessível. É a solução perfeita para quem precisa enviar volumes menores
                        sem comprometer a qualidade do serviço.
                    </p>

                    <div className="flex items-start text-gray-600 text-sm">
                        <svg
                            className="w-5 h-5 text-orange-500 mr-2 mt-0.5"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                        </svg>
                        <p>Custo-benefício ideal para cargas menores, com a mesma qualidade e segurança.</p>
                    </div>
                </motion.div>

                {/* Card 2 - Frete Dedicado */}
                <motion.div
                    variants={cardVariants}
                    initial="hidden"
                    animate={isInView ? "visible" : "hidden"}
                    custom={1}
                    whileHover={{ scale: 1.02 }}
                    className="bg-white rounded-lg shadow-sm p-6 border border-gray-100"
                >
                    <div className="flex items-start mb-4">
                        <div className="bg-orange-500 w-12 h-12 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                            <Truck className="text-white w-6 h-6" />
                        </div>
                        <h3 className="text-xl font-bold text-slate-800">Frete Dedicado</h3>
                    </div>

                    <p className="text-gray-700 mb-6">
                        Prioridade total para sua carga! No frete dedicado, o veículo é exclusivo para seu transporte, garantindo
                        maior agilidade e controle. Ideal para cargas maiores ou que exigem cuidados especiais, oferecendo
                        tranquilidade e eficiência no transporte.
                    </p>

                    <div className="flex items-start text-gray-600 text-sm">
                        <svg
                            className="w-5 h-5 text-orange-500 mr-2 mt-0.5"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                        </svg>
                        <p>Veículo exclusivo para sua carga, com maior controle e agilidade no transporte.</p>
                    </div>
                </motion.div>

                {/* Card 3 - Redespachos */}
                <motion.div
                    variants={cardVariants}
                    initial="hidden"
                    animate={isInView ? "visible" : "hidden"}
                    custom={2}
                    whileHover={{ scale: 1.02 }}
                    className="bg-white rounded-lg shadow-sm p-6 border border-gray-100"
                >
                    <div className="flex items-start mb-4">
                        <div className="bg-orange-500 w-12 h-12 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                            <BarChart className="text-white w-6 h-6" />
                        </div>
                        <h3 className="text-xl font-bold text-slate-800">Redespachos</h3>
                    </div>

                    <p className="text-gray-700 mb-6">
                        Maximize sua logística! No redespacho, sua carga é transferida para outro transportador em determinado ponto
                        da rota. Isso permite otimizar rotas, reduzir custos e alcançar locais mais distantes de forma eficiente. É
                        uma estratégia inteligente para expandir sua área de atuação e manter a eficiência no transporte de
                        mercadorias.
                    </p>

                    <div className="flex items-start text-gray-600 text-sm">
                        <svg
                            className="w-5 h-5 text-orange-500 mr-2 mt-0.5"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                        </svg>
                        <p>Otimização de rotas e custos para alcançar destinos mais distantes com eficiência.</p>
                    </div>
                </motion.div>
            </div>

            <div className="flex flex-col items-center mb-8">
                <button className="bg-slate-800 hover:bg-slate-700 text-white font-medium py-3 px-8 rounded-full transition-colors duration-300">
                    Faça uma Cotação
                </button>
            </div>

            <div className="flex flex-col items-center space-y-3 text-sm text-gray-600">
                <div className="flex items-center">
                    <svg
                        className="w-4 h-4 mr-2"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M13 9l3 3m0 0l-3 3m3-3H8m13 0a9 9 0 11-18 0 9 9 0 0118 0z"
                        ></path>
                    </svg>
                    <p>
                        Fracionado: Confira as cidades do interior de SP que atendemos{" "}
                        <a href="#" className="text-blue-600 hover:underline">
                            clicando aqui
                        </a>
                    </p>
                </div>

                <div className="flex items-center">
                    <svg
                        className="w-4 h-4 mr-2"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M13 9l3 3m0 0l-3 3m3-3H8m13 0a9 9 0 11-18 0 9 9 0 0118 0z"
                        ></path>
                    </svg>
                    <p>
                        Dedicado: <span className="font-medium">apenas SP, MG, PR & RJ</span>
                    </p>
                </div>

                <div className="flex items-center">
                    <svg
                        className="w-4 h-4 mr-2"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M18.364 18.364A9 9 0 005.636 5.636m12.728 12.728A9 9 0 015.636 5.636m12.728 12.728L5.636 5.636"
                        ></path>
                    </svg>
                    <p>
                        Não estamos aceitando <span className="font-bold">CURRÍCULOS</span>
                    </p>
                </div>
            </div>
        </section>
    )
}
