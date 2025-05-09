"use client"

import { useState, useEffect } from "react"
import { Star, ChevronLeft, ChevronRight, Quote } from "lucide-react"
import Image from "next/image"

const testimonials = [
    {
        id: 1,
        name: "Carlos Silva",
        company: "Distribuidora Paulista",
        image: "/placeholder.svg?height=80&width=80",
        rating: 5,
        text: "A SFlog tem sido nossa parceira logística há mais de 5 anos. A pontualidade nas entregas e o cuidado com nossas mercadorias são diferenciais que fazem toda a diferença no nosso negócio. Recomendo fortemente!",
    },
    {
        id: 2,
        name: "Mariana Costa",
        company: "Supermercados Região",
        image: "/placeholder.svg?height=80&width=80",
        rating: 5,
        text: "Excelente serviço! Desde que começamos a trabalhar com a SFlog, nossas entregas chegam no prazo e com total segurança. O atendimento da equipe é sempre muito atencioso e profissional.",
    },
    {
        id: 3,
        name: "Roberto Mendes",
        company: "Indústria RGT",
        image: "/placeholder.svg?height=80&width=80",
        rating: 4,
        text: "O serviço de frete dedicado da SFlog nos ajudou a otimizar nossa cadeia de suprimentos. A flexibilidade e a confiabilidade são pontos fortes que nos fazem continuar com essa parceria.",
    },
    {
        id: 4,
        name: "Juliana Ferreira",
        company: "Comércio Online JF",
        image: "/placeholder.svg?height=80&width=80",
        rating: 5,
        text: "Trabalhar com a SFlog transformou nossa logística. O sistema de rastreamento em tempo real nos dá tranquilidade e nossos clientes ficam satisfeitos com a previsibilidade das entregas.",
    },
    {
        id: 5,
        name: "Pedro Almeida",
        company: "Distribuidora Central",
        image: "/placeholder.svg?height=80&width=80",
        rating: 5,
        text: "A SFlog entende as necessidades específicas do nosso negócio. O frete fracionado nos permite economizar e ainda assim manter a qualidade nas entregas. Parceria de sucesso!",
    },
]

export default function Testimonials() {
    const [currentIndex, setCurrentIndex] = useState(0)
    const [isAnimating, setIsAnimating] = useState(false)

    const nextSlide = () => {
        if (isAnimating) return
        setIsAnimating(true)
        setCurrentIndex((prevIndex) => (prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1))
        setTimeout(() => setIsAnimating(false), 500)
    }

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
    }, [currentIndex])

    const renderStars = (rating: number) => {
        return Array(5)
            .fill(0)
            .map((_, i) => (
                <Star key={i} className={`w-5 h-5 ${i < rating ? "text-orange-500 fill-orange-500" : "text-gray-300"}`} />
            ))
    }

    return (
        <section className="max-w-7xl mx-auto px-4 py-16 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
                <h2 className="text-4xl font-bold text-slate-800 mb-4">
                    O que nossos clientes dizem sobre a <span className="text-orange-500">SFlog</span>
                </h2>
                <p className="text-gray-600 max-w-3xl mx-auto">
                    Conheça as experiências de quem confia em nossos serviços para suas necessidades logísticas. A satisfação dos
                    nossos clientes é o nosso maior orgulho.
                </p>
            </div>

            <div className="relative">
                {/* Carrossel */}
                <div className="overflow-hidden">
                    <div
                        className="flex transition-transform duration-500 ease-in-out"
                        style={{ transform: `translateX(-${currentIndex * 100}%)` }}
                    >
                        {testimonials.map((testimonial) => (
                            <div key={testimonial.id} className="w-full flex-shrink-0 px-4">
                                <div className="max-w-3xl mx-auto bg-white rounded-xl shadow-md p-8 md:p-10 relative mb-8">
                                    <div className="absolute top-8 right-8 text-orange-500 opacity-20">
                                        <Quote size={60} />
                                    </div>
                                    <div className="flex flex-col md:flex-row items-start md:items-center mb-6 relative z-10">
                                        <div className="mb-4 md:mb-0 md:mr-6">
                                            <div className="w-16 h-16 rounded-full overflow-hidden bg-gray-200 border-2 border-orange-500">
                                                <Image
                                                    src={testimonial.image || "/placeholder.svg"}
                                                    alt={testimonial.name}
                                                    width={80}
                                                    height={80}
                                                    className="object-cover"
                                                />
                                            </div>
                                        </div>
                                        <div>
                                            <h3 className="text-xl font-bold text-slate-800">{testimonial.name}</h3>
                                            <p className="text-gray-600">{testimonial.company}</p>
                                            <div className="flex mt-2">{renderStars(testimonial.rating)}</div>
                                        </div>
                                    </div>
                                    <p className="text-gray-700 text-lg leading-relaxed">{testimonial.text}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Botões de navegação */}
                <button
                    onClick={prevSlide}
                    className="absolute top-1/2 left-0 -translate-y-1/2 bg-white text-slate-800 rounded-full p-2 shadow-md hover:bg-orange-500 hover:text-white transition-colors duration-300 z-10 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:ring-opacity-50"
                    aria-label="Slide anterior"
                >
                    <ChevronLeft className="w-6 h-6" />
                </button>
                <button
                    onClick={nextSlide}
                    className="absolute top-1/2 right-0 -translate-y-1/2 bg-white text-slate-800 rounded-full p-2 shadow-md hover:bg-orange-500 hover:text-white transition-colors duration-300 z-10 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:ring-opacity-50"
                    aria-label="Próximo slide"
                >
                    <ChevronRight className="w-6 h-6" />
                </button>

                {/* Indicadores */}
                <div className="flex justify-center mt-12">
                    {testimonials.map((_, index) => (
                        <button
                            key={index}
                            onClick={() => goToSlide(index)}
                            className={`w-3 h-3 mx-1 rounded-full focus:outline-none ${index === currentIndex ? "bg-orange-500" : "bg-gray-300"
                                }`}
                            aria-label={`Ir para o slide ${index + 1}`}
                        />
                    ))}
                </div>
            </div>
        </section>
    )
}
