import { Truck, MapPin, BarChart2, Clock } from "lucide-react"

export default function About() {
    return (
        <section className="max-w-7xl mx-auto px-4 py-16 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                <div className="lg:col-span-2 grid grid-cols-1 sm:grid-cols-2 gap-6">
                    {/* Card 1 */}
                    <div className="bg-white rounded-lg shadow-sm p-6 border border-gray-100">
                        <div className="bg-orange-500 w-16 h-16 rounded-full flex items-center justify-center mb-4">
                            <Truck className="text-white w-8 h-8" />
                        </div>
                        <h3 className="text-xl font-bold text-slate-800 mb-2">Entregas e Coletas Eficientes</h3>
                        <p className="text-gray-600">
                            Com a SFlog você tem as suas entregas feitas com nosso acompanhamento e com qualidade.
                        </p>
                    </div>

                    {/* Card 2 */}
                    <div className="bg-white rounded-lg shadow-sm p-6 border border-gray-100">
                        <div className="bg-orange-500 w-16 h-16 rounded-full flex items-center justify-center mb-4">
                            <MapPin className="text-white w-8 h-8" />
                        </div>
                        <h3 className="text-xl font-bold text-slate-800 mb-2">Veículos rastreados</h3>
                        <p className="text-gray-600">
                            Monitoramos em tempo real a localização de cada entrega, assegurando que seu pacote chegue ao destino de
                            maneira segura e eficiente
                        </p>
                    </div>

                    {/* Card 3 */}
                    <div className="bg-white rounded-lg shadow-sm p-6 border border-gray-100">
                        <div className="bg-orange-500 w-16 h-16 rounded-full flex items-center justify-center mb-4">
                            <BarChart2 className="text-white w-8 h-8" />
                        </div>
                        <h3 className="text-xl font-bold text-slate-800 mb-2">Agilidade e Clareza</h3>
                        <p className="text-gray-600">Prezamos pela agilidade no serviço e transparência com nossos clientes.</p>
                    </div>

                    {/* Card 4 */}
                    <div className="bg-white rounded-lg shadow-sm p-6 border border-gray-100">
                        <div className="bg-orange-500 w-16 h-16 rounded-full flex items-center justify-center mb-4">
                            <Clock className="text-white w-8 h-8" />
                        </div>
                        <h3 className="text-xl font-bold text-slate-800 mb-2">Mais de 20 anos no mercado</h3>
                        <p className="text-gray-600">
                            Nós entendemos o que você precisa há mais de 20 anos e estamos prontos para atendê-lo!
                        </p>
                    </div>
                </div>

                <div className="lg:col-span-1 flex flex-col justify-center text-center lg:text-left">
                    <h2 className="text-4xl font-bold text-slate-800 mb-2">
                        Confiança é muito importante para nós da <span className="text-orange-500">SFlog</span>
                    </h2>
                    <p className="text-gray-600 mb-8">E está entre nossas principais características:</p>

                    <div className="grid grid-cols-3 gap-4">
                        <div className="text-center">
                            <p className="text-5xl font-bold text-slate-800">
                                500<span className="text-orange-500">+</span>
                            </p>
                            <p className="text-sm text-gray-500 mt-1">Empresas Atendidas</p>
                        </div>
                        <div className="text-center">
                            <p className="text-5xl font-bold text-slate-800">
                                80k<span className="text-orange-500">+</span>
                            </p>
                            <p className="text-sm text-gray-500 mt-1">Cargas Monitoradas</p>
                        </div>
                        <div className="text-center">
                            <p className="text-5xl font-bold text-slate-800">
                                20<span className="text-orange-500">+</span>
                            </p>
                            <p className="text-sm text-gray-500 mt-1">Anos no Mercado!</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}