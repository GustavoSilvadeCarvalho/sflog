import { MapPin, Clock, Phone, Mail, ExternalLink } from "lucide-react"

export default function Location() {
    return (
        <section className="max-w-7xl mx-auto px-4 py-16 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
                <h1 className="text-4xl font-bold text-slate-800 mb-4">
                    Onde encontrar a <span className="text-orange-500">S&Flog</span>
                </h1>
                <p className="text-gray-600 max-w-3xl mx-auto">
                    Visite nossa sede ou entre em contato conosco. Estamos sempre prontos para atender suas necessidades de
                    transporte e logística.
                </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 ">
                <div className="lg:col-span-2 rounded-xl overflow-hidden shadow-md h-[400px] md:h-[500px] relative">
                    <div className="absolute inset-0 bg-gray-200 flex items-center justify-center">
                        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3668.833316171835!2d-47.23733118806099!3d-23.139767146153925!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94cf4cf5430f1a41%3A0xdb42d3c9a3137226!2sAlameda%20Plut%C3%A3o%2C%20390%20-%20American%20Park%20Empresarial%20Nr%2C%20Indaiatuba%20-%20SP%2C%2013347-656!5e0!3m2!1spt-BR!2sbr!4v1746821632835!5m2!1spt-BR!2sbr" width="770" height="470" style={{ border: 0 }} loading="lazy"></iframe>
                    </div>
                </div>

                <div className="bg-white rounded-xl shadow-md p-8">
                    <h3 className="text-2xl font-bold text-slate-800 mb-6">Informações de Contato</h3>

                    <div className="space-y-6">
                        <div className="flex items-start">
                            <div className="bg-orange-100 rounded-full p-3 mr-4">
                                <MapPin className="w-6 h-6 text-orange-500" />
                            </div>
                            <div>
                                <h4 className="font-semibold text-slate-800 mb-1">Endereço</h4>
                                <p className="text-gray-600">
                                    Alameda Plutão, 390
                                    <br />
                                    American Park
                                    <br />
                                    Indaiatuba - SP, 13347-656


                                </p>
                                <a
                                    href="https://www.google.com.br/maps/place/Alameda+Plut%C3%A3o,+390+-+American+Park+Empresarial+Nr,+Indaiatuba+-+SP,+13347-656/@-23.1397671,-47.2373312,17z/data=!3m1!4b1!4m6!3m5!1s0x94cf4cf5430f1a41:0xdb42d3c9a3137226!8m2!3d-23.1397721!4d-47.2347509!16s%2Fg%2F11c5hy_tsx?entry=ttu&g_ep=EgoyMDI1MDUwNi4wIKXMDSoASAFQAw%3D%3D"
                                    target="_blank"
                                    className="inline-flex items-center text-orange-500 hover:text-orange-600 mt-2 text-sm font-medium"
                                >
                                    <ExternalLink className="w-4 h-4 mr-1" />
                                    Como chegar
                                </a>
                            </div>
                        </div>

                        <div className="flex items-start">
                            <div className="bg-orange-100 rounded-full p-3 mr-4">
                                <Clock className="w-6 h-6 text-orange-500" />
                            </div>
                            <div>
                                <h4 className="font-semibold text-slate-800 mb-1">Horário de Funcionamento</h4>
                                <p className="text-gray-600">
                                    Segunda a Sexta: 8h às 18h
                                    <br />
                                    Sábado: 8h às 12h
                                    <br />
                                    Domingo: Fechado
                                </p>
                            </div>
                        </div>

                        <div className="flex items-start">
                            <div className="bg-orange-100 rounded-full p-3 mr-4">
                                <Phone className="w-6 h-6 text-orange-500" />
                            </div>
                            <div>
                                <h4 className="font-semibold text-slate-800 mb-1">Telefone</h4>
                                <p className="text-gray-600">(19) 3801-9200</p>
                                <p className="text-gray-600">(19) 3801-9201</p>
                            </div>
                        </div>

                        <div className="flex items-start">
                            <div className="bg-orange-100 rounded-full p-3 mr-4">
                                <Mail className="w-6 h-6 text-orange-500" />
                            </div>
                            <div>
                                <h4 className="font-semibold text-slate-800 mb-1">E-mail</h4>
                                <p className="text-gray-600">contato@grupoSFlog.com.br</p>
                                <p className="text-gray-600">comercial@grupoSFlog.com.br</p>
                            </div>
                        </div>
                    </div>

                    <div className="mt-8 pt-6 border-t border-gray-100">
                        <a
                            href="#"
                            className="inline-flex items-center justify-center w-full bg-orange-500 hover:bg-orange-600 text-white font-medium py-3 px-6 rounded-lg transition-colors duration-300"
                        >
                            Entre em Contato
                        </a>
                    </div>
                </div>
            </div>
        </section>
    )
}
