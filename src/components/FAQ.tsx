"use client"

import { useState } from "react"
import { ChevronDown } from "lucide-react"
import { motion, AnimatePresence } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"

const faqItems = [
    {
        id: 1,
        question: "Quais são as regiões atendidas pela S&Flog?",
        answer:
            "Atendemos todo o território nacional, com especial foco nas regiões Sul, Sudeste e Centro-Oeste. Nossa rede de transportadores parceiros nos permite oferecer cobertura em todo o Brasil.",
    },
    {
        id: 2,
        question: "Como posso rastrear minha carga?",
        answer:
            "Oferecemos um sistema de rastreamento em tempo real através do nosso site e aplicativo. Basta acessar sua conta e inserir o número do seu pedido para acompanhar o status e a localização da sua carga.",
    },
    {
        id: 3,
        question: "Quais são os prazos de entrega?",
        answer:
            "Os prazos variam de acordo com o tipo de serviço escolhido e a distância do destino. No frete dedicado, os prazos são mais curtos, enquanto no fracionado podem ser um pouco mais longos devido às paradas para coleta e entrega de outras cargas.",
    },
    {
        id: 4,
        question: "A S&Flog oferece seguro para as cargas?",
        answer:
            "Sim, todas as nossas cargas são seguradas. O valor do seguro está incluído no preço do frete e oferece cobertura contra danos, extravios e outros imprevistos durante o transporte.",
    },
    {
        id: 5,
        question: "Como faço para solicitar um orçamento?",
        answer:
            "Você pode solicitar um orçamento através do nosso site, preenchendo o formulário de cotação, ou entrando em contato com nossa equipe comercial pelo telefone ou e-mail. Respondemos em até 24 horas úteis.",
    },
]

export default function FAQ() {
    const [openItem, setOpenItem] = useState<number | null>(null)
    const containerRef = useRef(null)
    const isInView = useInView(containerRef, { once: true, amount: 0.1 })

    const toggleItem = (id: number) => {
        setOpenItem(openItem === id ? null : id)
    }

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1,
            },
        },
    }

    const itemVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.5,
            },
        },
    }

    return (
        <section className="max-w-4xl mx-auto px-4 py-16 sm:px-6 lg:px-8">
            <motion.div
                ref={containerRef}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 0.5 }}
                className="text-center mb-12"
            >
                <h1 className="text-4xl font-bold text-slate-800 mb-4">
                    Perguntas Frequentes sobre a <span className="text-orange-500">S&Flog</span>
                </h1>
                <p className="text-gray-600 max-w-3xl mx-auto">
                    Encontre respostas para as dúvidas mais comuns sobre nossos serviços de transporte e logística.
                </p>
            </motion.div>

            <motion.div
                variants={containerVariants}
                initial="hidden"
                animate={isInView ? "visible" : "hidden"}
                className="space-y-4"
            >
                {faqItems.map((item) => (
                    <motion.div
                        key={item.id}
                        variants={itemVariants}
                        className="bg-white rounded-lg shadow-sm border border-gray-100 overflow-hidden"
                    >
                        <button
                            onClick={() => toggleItem(item.id)}
                            className="w-full flex justify-between items-center p-6 text-left focus:outline-none focus:ring-2 focus:ring-orange-500 focus:ring-opacity-50"
                            aria-expanded={openItem === item.id}
                            aria-controls={`faq-answer-${item.id}`}
                        >
                            <h3 className="text-lg font-semibold text-slate-800">{item.question}</h3>
                            <motion.div
                                animate={{ rotate: openItem === item.id ? 180 : 0 }}
                                transition={{ duration: 0.3 }}
                                className="ml-4 flex-shrink-0 text-orange-500"
                            >
                                <ChevronDown size={20} />
                            </motion.div>
                        </button>

                        <AnimatePresence>
                            {openItem === item.id && (
                                <motion.div
                                    initial={{ height: 0, opacity: 0 }}
                                    animate={{ height: "auto", opacity: 1 }}
                                    exit={{ height: 0, opacity: 0 }}
                                    transition={{ duration: 0.3 }}
                                    className="overflow-hidden"
                                >
                                    <div className="px-6 pb-6">
                                        <div className="border-t border-gray-100 pt-4">
                                            <p className="text-gray-700">{item.answer}</p>
                                        </div>
                                    </div>
                                </motion.div>
                            )}
                        </AnimatePresence>
                    </motion.div>
                ))}
            </motion.div>

            <div className="mt-12 text-center">
                <p className="text-gray-600">
                    Não encontrou o que procurava? Entre em contato com nossa{" "}
                    <a href="#" className="text-orange-500 font-medium hover:underline">
                        Central de Atendimento
                    </a>
                </p>
            </div>
        </section>
    )
}
