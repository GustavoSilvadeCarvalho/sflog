"use client"

import { Truck, MapPin, BarChart2, Clock } from "lucide-react"
import { motion, useInView, useMotionValue, useTransform, animate } from "framer-motion"
import { useRef, useEffect } from "react"

interface NumberCounterProps {
    end: number
    suffix?: string
}

const NumberCounter = ({ end, suffix = "" }: NumberCounterProps) => {
    const ref = useRef(null)
    const isInView = useInView(ref, { once: true, amount: 0.1 })
    const count = useMotionValue(0)
    const rounded = useTransform(count, (latest) => Math.round(latest))

    useEffect(() => {
        if (isInView) {
            const animation = animate(count, end, {
                duration: 2,
                ease: "easeOut",
            })
            return animation.stop
        }
    }, [isInView, end, count])

    return (
        <motion.p
            ref={ref}
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.5 }}
            className="text-5xl font-bold text-slate-800"
        >
            <motion.span>{rounded}</motion.span>
            <span className="text-orange-500">{suffix}</span>
        </motion.p>
    )
}

export default function About() {
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
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                <div className="lg:col-span-2 grid grid-cols-1 sm:grid-cols-2 gap-6">
                    {/* Card 1 */}
                    <motion.div
                        variants={cardVariants}
                        initial="hidden"
                        animate={isInView ? "visible" : "hidden"}
                        custom={0}
                        whileHover={{ scale: 1.02 }}
                        className="bg-white rounded-lg shadow-sm p-6 border border-gray-100"
                    >
                        <div className="bg-orange-500 w-16 h-16 rounded-full flex items-center justify-center mb-4">
                            <Truck className="text-white w-8 h-8" />
                        </div>
                        <h3 className="text-xl font-bold text-slate-800 mb-2">Entregas e Coletas Eficientes</h3>
                        <p className="text-gray-600">
                            Com a S&Flog você tem as suas entregas feitas com nosso acompanhamento e com qualidade.
                        </p>
                    </motion.div>

                    {/* Card 2 */}
                    <motion.div
                        variants={cardVariants}
                        initial="hidden"
                        animate={isInView ? "visible" : "hidden"}
                        custom={1}
                        whileHover={{ scale: 1.02 }}
                        className="bg-white rounded-lg shadow-sm p-6 border border-gray-100"
                    >
                        <div className="bg-orange-500 w-16 h-16 rounded-full flex items-center justify-center mb-4">
                            <MapPin className="text-white w-8 h-8" />
                        </div>
                        <h3 className="text-xl font-bold text-slate-800 mb-2">Veículos rastreados</h3>
                        <p className="text-gray-600">
                            Monitoramos em tempo real a localização de cada entrega, assegurando que seu pacote chegue ao destino de
                            maneira segura e eficiente
                        </p>
                    </motion.div>

                    {/* Card 3 */}
                    <motion.div
                        variants={cardVariants}
                        initial="hidden"
                        animate={isInView ? "visible" : "hidden"}
                        custom={2}
                        whileHover={{ scale: 1.02 }}
                        className="bg-white rounded-lg shadow-sm p-6 border border-gray-100"
                    >
                        <div className="bg-orange-500 w-16 h-16 rounded-full flex items-center justify-center mb-4">
                            <BarChart2 className="text-white w-8 h-8" />
                        </div>
                        <h3 className="text-xl font-bold text-slate-800 mb-2">Agilidade e Clareza</h3>
                        <p className="text-gray-600">Prezamos pela agilidade no serviço e transparência com nossos clientes.</p>
                    </motion.div>

                    {/* Card 4 */}
                    <motion.div
                        variants={cardVariants}
                        initial="hidden"
                        animate={isInView ? "visible" : "hidden"}
                        custom={3}
                        whileHover={{ scale: 1.02 }}
                        className="bg-white rounded-lg shadow-sm p-6 border border-gray-100"
                    >
                        <div className="bg-orange-500 w-16 h-16 rounded-full flex items-center justify-center mb-4">
                            <Clock className="text-white w-8 h-8" />
                        </div>
                        <h3 className="text-xl font-bold text-slate-800 mb-2">Mais de 20 anos no mercado</h3>
                        <p className="text-gray-600">
                            Nós entendemos o que você precisa há mais de 20 anos e estamos prontos para atendê-lo!
                        </p>
                    </motion.div>
                </div>

                <motion.div
                    ref={containerRef}
                    initial={{ opacity: 0, x: 20 }}
                    animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 20 }}
                    transition={{ duration: 0.5 }}
                    className="lg:col-span-1"
                >
                    <h1 className="text-4xl font-bold text-slate-800 mb-2">
                        Confiança é muito importante para nós da <span className="text-orange-500">S&Flog</span>
                    </h1>
                    <p className="text-gray-600 mb-8">E está entre nossas principais características:</p>

                    <div className="grid grid-cols-3 gap-4">
                        <div className="text-center">
                            <NumberCounter end={500} suffix="+" />
                            <p className="text-sm text-gray-500 mt-1">Empresas Atendidas</p>
                        </div>
                        <div className="text-center">
                            <NumberCounter end={80} suffix="k+" />
                            <p className="text-sm text-gray-500 mt-1">Cargas Monitoradas</p>
                        </div>
                        <div className="text-center">
                            <NumberCounter end={20} suffix="+" />
                            <p className="text-sm text-gray-500 mt-1">Anos no Mercado!</p>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    )
}