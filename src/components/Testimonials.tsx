"use client"

import { useState, useEffect, useCallback } from "react"
import { Star, ChevronLeft, ChevronRight, Quote } from "lucide-react"
import Image from "next/image"
import { motion, AnimatePresence } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"

const testimonials = [
    {
        id: 1,
        name: "Carlos Silva",
        company: "Distribuidora Paulista",
        image: "/placeholder.svg?height=80&width=80",
        rating: 5,
        text: "A S&Flog tem sido nossa parceira logística há mais de 5 anos. A pontualidade nas entregas e o cuidado com nossas mercadorias são diferenciais que fazem toda a diferença no nosso negócio. Recomendo fortemente!",
    },
    {
        id: 2,
        name: "Mariana Costa",
        company: "Supermercados Região",
        image: "/placeholder.svg?height=80&width=80",
        rating: 5,
        text: "Excelente serviço! Desde que começamos a trabalhar com a S&Flog, nossas entregas chegam no prazo e com total segurança. O atendimento da equipe é sempre muito atencioso e profissional.",
    },
    {
        id: 3,
        name: "Roberto Mendes",
        company: "Indústria RGT",
        image: "/placeholder.svg?height=80&width=80",
        rating: 4,
        text: "O serviço de frete dedicado da S&Flog nos ajudou a otimizar nossa cadeia de suprimentos. A flexibilidade e a confiabilidade são pontos fortes que nos fazem continuar com essa parceria.",
    },
    {
        id: 4,
        name: "Juliana Ferreira",
        company: "Comércio Online JF",
        image: "/placeholder.svg?height=80&width=80",
        rating: 5,
        text: "Trabalhar com a S&Flog transformou nossa logística. O sistema de rastreamento em tempo real nos dá tranquilidade e nossos clientes ficam satisfeitos com a previsibilidade das entregas.",
    },
    {
        id: 5,
        name: "Pedro Almeida",
        company: "Distribuidora Central",
        image: "/placeholder.svg?height=80&width=80",
        rating: 5,
        text: "A S&Flog entende as necessidades específicas do nosso negócio. O frete fracionado nos permite economizar e ainda assim manter a qualidade nas entregas. Parceria de sucesso!",
    },
]

export default function Testimonials() {
    const [currentIndex, setCurrentIndex] = useState(0)
    const [isAnimating, setIsAnimating] = useState(false)
    const containerRef = useRef(null)
    const isInView = useInView(containerRef, { once: true, amount: 0.1 })

    const nextSlide = useCallback(() => {
        if (isAnimating) return
        setIsAnimating(true)
        setCurrentIndex((prevIndex) => (prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1))
        setTimeout(() => setIsAnimating(false), 500)
    }, [isAnimating])

    const prevSlide = () => {
        if (isAnimating) return
        setIsAnimating(true)
        setCurrentIndex((prevIndex) => (prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1))
        setTimeout(() => setIsAnimating(false), 500)
    }

    const goToSlide = (index: number) => {
        if (isAnimating || index === currentIndex) return
        setIsAnimating(true)
        setCurrentIndex(index)
        setTimeout(() => setIsAnimating(false), 500)
    }

    useEffect(() => {
        const interval = setInterval(() => {
            nextSlide()
        }, 6000)
        return () => clearInterval(interval)
    }, [currentIndex, nextSlide])

    const renderStars = (rating: number) => {
        return Array(5)
            .fill(0)
            .map((_, i) => (
                <Star key={i} className={`w-5 h-5 ${i < rating ? "text-orange-500 fill-orange-500" : "text-gray-300"}`} />
            ))
    }

    return (
        <section className="max-w-7xl mx-auto px-4 py-16 sm:px-6 lg:px-8">
            <motion.div
                ref={containerRef}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 0.5 }}
                className="text-center mb-12"
            >
                <h1 className="text-4xl font-bold text-slate-800 mb-4">
                    O que nossos clientes dizem sobre a <span className="text-orange-500">S&Flog</span>
                </h1>
                <p className="text-gray-600 max-w-3xl mx-auto">
                    Conheça as experiências de quem confia em nossos serviços para suas necessidades logísticas. A satisfação dos
                    nossos clientes é o nosso maior orgulho.
                </p>
            </motion.div>

            <div className="relative">
                {/* Carrossel */}
                <div className="overflow-hidden">
                    <AnimatePresence mode="wait">
                        <motion.div
                            key={currentIndex}
                            initial={{ opacity: 0, x: 100 }}
                            animate={{ opacity: 1, x: 0 }}
                            exit={{ opacity: 0, x: -100 }}
                            transition={{ duration: 0.5 }}
                            className="w-full"
                        >
                            <div className="max-w-3xl mx-auto bg-white rounded-xl shadow-md p-8 md:p-10 relative mb-8">
                                <div className="absolute top-8 right-8 text-orange-500 opacity-20">
                                    <Quote size={60} />
                                </div>
                                <div className="flex flex-col md:flex-row items-start md:items-center mb-6 relative z-10">
                                    <div className="mb-4 md:mb-0 md:mr-6">
                                        <div className="w-16 h-16 rounded-full overflow-hidden bg-gray-200 border-2 border-orange-500">
                                            <Image
                                                src={testimonials[currentIndex].image || "/placeholder.svg"}
                                                alt={testimonials[currentIndex].name}
                                                width={80}
                                                height={80}
                                                className="object-cover"
                                            />
                                        </div>
                                    </div>
                                    <div>
                                        <h3 className="text-xl font-bold text-slate-800">{testimonials[currentIndex].name}</h3>
                                        <p className="text-gray-600">{testimonials[currentIndex].company}</p>
                                        <div className="flex mt-2">{renderStars(testimonials[currentIndex].rating)}</div>
                                    </div>
                                </div>
                                <p className="text-gray-700 text-lg leading-relaxed">{testimonials[currentIndex].text}</p>
                            </div>
                        </motion.div>
                    </AnimatePresence>
                </div>

                {/* Controles */}
                <div className="flex justify-center items-center space-x-4 mt-8">
                    <button
                        onClick={prevSlide}
                        className="p-2 rounded-full bg-white shadow-sm border border-gray-100 hover:bg-gray-50 transition-colors"
                        aria-label="Depoimento anterior"
                    >
                        <ChevronLeft className="w-6 h-6 text-orange-500" />
                    </button>

                    <div className="flex space-x-2">
                        {testimonials.map((_, index) => (
                            <button
                                key={index}
                                onClick={() => goToSlide(index)}
                                className={`w-2.5 h-2.5 rounded-full transition-colors ${index === currentIndex ? "bg-orange-500" : "bg-gray-300"
                                    }`}
                                aria-label={`Ir para depoimento ${index + 1}`}
                            />
                        ))}
                    </div>

                    <button
                        onClick={nextSlide}
                        className="p-2 rounded-full bg-white shadow-sm border border-gray-100 hover:bg-gray-50 transition-colors"
                        aria-label="Próximo depoimento"
                    >
                        <ChevronRight className="w-6 h-6 text-orange-500" />
                    </button>
                </div>
            </div>
        </section>
    )
}
