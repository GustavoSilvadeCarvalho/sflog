"use client"

import { useState } from "react"
import { ChevronDown, ChevronUp } from "lucide-react"

const faqItems = [
    {
        id: 1,
        question: "Atendem o Brasil todo?",
        answer: "Não atendemos, apenas os estados SP, MG, PR e algumas cidades do RJ.",
    },
    {
        id: 2,
        question: "Preciso entregar mercadoria para Nordeste, como pode me ajudar?",
        answer:
            "Oferecemos a opção Redespacho, você define uma transportadora na Grande SP ou regiões que atendemos e nós levamos e/ou coletamos para você.",
    },
    {
        id: 3,
        question: "Vocês fazem mudança?",
        answer: "Não fazemos mudança.",
    },
    {
        id: 4,
        question: "Transportam produtos químicos?",
        answer: "Não transportamos químicos classificados e nem explosivos e/ou perigosos.",
    },
    {
        id: 5,
        question: "Como devo proceder para fazer parte da família SFlog?",
        answer: "Envie seu Currículo para o e-mail: operacional@grupoSFlog.com.br",
    },
    {
        id: 6,
        question: "As operações em Indaiatuba seguem em pleno funcionamento?",
        answer: "Nossas operações em Indaiatuba seguem em pleno funcionamento.",
    },
]

export default function FAQ() {
    const [openItem, setOpenItem] = useState<number | null>(null)

    const toggleItem = (id: number) => {
        setOpenItem(openItem === id ? null : id)
    }

    return (
        <section className="max-w-4xl mx-auto px-4 py-16 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
                <h2 className="text-4xl font-bold text-slate-800 mb-4">
                    Perguntas Frequentes sobre a <span className="text-orange-500">SFlog</span>
                </h2>
                <p className="text-gray-600 max-w-3xl mx-auto">
                    Encontre respostas para as dúvidas mais comuns sobre nossos serviços de transporte e logística.
                </p>
            </div>

            <div className="space-y-4">
                {faqItems.map((item) => (
                    <div
                        key={item.id}
                        className="bg-white rounded-lg shadow-sm border border-gray-100 overflow-hidden transition-all duration-300"
                    >
                        <button
                            onClick={() => toggleItem(item.id)}
                            className="w-full flex justify-between items-center p-6 text-left focus:outline-none focus:ring-2 focus:ring-orange-500 focus:ring-opacity-50"
                            aria-expanded={openItem === item.id}
                            aria-controls={`faq-answer-${item.id}`}
                        >
                            <h3 className="text-lg font-semibold text-slate-800">{item.question}</h3>
                            <div className="ml-4 flex-shrink-0 text-orange-500">
                                {openItem === item.id ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
                            </div>
                        </button>

                        <div
                            id={`faq-answer-${item.id}`}
                            className={`px-6 overflow-hidden transition-all duration-300 ease-in-out ${openItem === item.id ? "max-h-96 pb-6" : "max-h-0"
                                }`}
                            aria-hidden={openItem !== item.id}
                        >
                            <div className="border-t border-gray-100 pt-4">
                                <p className="text-gray-700">{item.answer}</p>
                            </div>
                        </div>
                    </div>
                ))}
            </div>

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
