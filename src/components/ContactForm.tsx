"use client"

import type React from "react"

import { useState } from "react"
import { Send } from "lucide-react"

export default function ContactForm() {
    const [formData, setFormData] = useState({
        fullName: "",
        email: "",
        phone: "",
        company: "",
        message: "",
    })

    const [errors, setErrors] = useState({
        fullName: false,
        email: false,
        phone: false,
        company: false,
        message: false,
    })

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target
        setFormData((prev) => ({
            ...prev,
            [name]: value,
        }))

        if (errors[name as keyof typeof errors]) {
            setErrors((prev) => ({
                ...prev,
                [name]: false,
            }))
        }
    }

    const validateForm = () => {
        const newErrors = {
            fullName: formData.fullName.trim() === "",
            email: !/^\S+@\S+\.\S+$/.test(formData.email),
            phone: !/^$$\d{2}$$ \d{4,5}-\d{4}$/.test(formData.phone) && formData.phone.trim() !== "",
            company: formData.company.trim() === "",
            message: formData.message.trim() === "",
        }

        setErrors(newErrors)
        return !Object.values(newErrors).some((error) => error)
    }

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault()

        if (validateForm()) {
            // Aqui você adicionaria a lógica para enviar o formulário
            alert("Formulário enviado com sucesso!")
            // Limpar o formulário após o envio
            setFormData({
                fullName: "",
                email: "",
                phone: "",
                company: "",
                message: "",
            })
        }
    }

    const handlePhoneChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        let value = e.target.value.replace(/\D/g, "")

        if (value.length <= 11) {
            // Formata o telefone como (XX) XXXXX-XXXX ou (XX) XXXX-XXXX
            if (value.length > 2) {
                value = `(${value.slice(0, 2)}) ${value.slice(2)}`
            }
            if (value.length > 9) {
                value = `${value.slice(0, 9)}-${value.slice(9)}`
            }

            setFormData((prev) => ({
                ...prev,
                phone: value,
            }))
        }
    }

    return (
        <section className="max-w-7xl mx-auto px-4 py-16 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
                <h2 className="text-4xl font-bold text-slate-800 mb-4">
                    Fale com a <span className="text-orange-500">SFlog</span>
                </h2>
                <p className="text-gray-600 max-w-3xl mx-auto">
                    Estamos prontos para atender suas necessidades. Preencha o formulário abaixo e entraremos em contato o mais
                    breve possível.
                </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                <div className="lg:col-span-3">
                    <form onSubmit={handleSubmit} className="bg-white rounded-xl shadow-md p-8">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                            <div>
                                <label htmlFor="fullName" className="block text-sm font-medium text-gray-700 mb-1">
                                    Nome Completo *
                                </label>
                                <input
                                    type="text"
                                    id="fullName"
                                    name="fullName"
                                    value={formData.fullName}
                                    onChange={handleChange}
                                    className={`w-full px-4 py-3 rounded-lg border ${errors.fullName ? "border-red-500" : "border-gray-300"
                                        } focus:outline-none focus:ring-2 focus:ring-orange-500 text-black`}
                                    placeholder="Digite seu nome completo"
                                />
                                {errors.fullName && <p className="mt-1 text-sm text-red-500">Nome completo é obrigatório</p>}
                            </div>

                            <div>
                                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                                    E-mail *
                                </label>
                                <input
                                    type="email"
                                    id="email"
                                    name="email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    className={`w-full px-4 py-3 rounded-lg border ${errors.email ? "border-red-500" : "border-gray-300"
                                        } focus:outline-none focus:ring-2 focus:ring-orange-500 text-black`}
                                    placeholder="seu@email.com"
                                />
                                {errors.email && <p className="mt-1 text-sm text-red-500">E-mail válido é obrigatório</p>}
                            </div>

                            <div>
                                <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
                                    Telefone com DDD *
                                </label>
                                <input
                                    type="text"
                                    id="phone"
                                    name="phone"
                                    value={formData.phone}
                                    onChange={handlePhoneChange}
                                    className={`w-full px-4 py-3 rounded-lg border ${errors.phone ? "border-red-500" : "border-gray-300"
                                        } focus:outline-none focus:ring-2 focus:ring-orange-500 text-black`}
                                    placeholder="(00) 00000-0000"
                                />
                                {errors.phone && <p className="mt-1 text-sm text-red-500">Telefone com formato válido é obrigatório</p>}
                            </div>

                            <div>
                                <label htmlFor="company" className="block text-sm font-medium text-gray-700 mb-1">
                                    Nome da Empresa *
                                </label>
                                <input
                                    type="text"
                                    id="company"
                                    name="company"
                                    value={formData.company}
                                    onChange={handleChange}
                                    className={`w-full px-4 py-3 rounded-lg border ${errors.company ? "border-red-500" : "border-gray-300"
                                        } focus:outline-none focus:ring-2 focus:ring-orange-500 text-black`}
                                    placeholder="Nome da sua empresa"
                                />
                                {errors.company && <p className="mt-1 text-sm text-red-500">Nome da empresa é obrigatório</p>}
                            </div>
                        </div>

                        <div className="mb-6">
                            <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                                Mensagem *
                            </label>
                            <textarea
                                id="message"
                                name="message"
                                value={formData.message}
                                onChange={handleChange}
                                rows={5}
                                className={`w-full px-4 py-3 rounded-lg border ${errors.message ? "border-red-500" : "border-gray-300"
                                    } focus:outline-none focus:ring-2 focus:ring-orange-500 text-black`}
                                placeholder="Digite sua mensagem aqui..."
                            ></textarea>
                            {errors.message && <p className="mt-1 text-sm text-red-500">Mensagem é obrigatória</p>}
                        </div>

                        <div className="flex justify-end">
                            <button
                                type="submit"
                                className="inline-flex items-center bg-orange-500 hover:bg-orange-600 text-white font-medium py-3 px-6 rounded-lg transition-colors duration-300"
                            >
                                <Send className="w-5 h-5 mr-2" />
                                Enviar Mensagem
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </section>
    )
}
