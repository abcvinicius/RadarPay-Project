import { Card } from "@/components/ui/card";
import { ResponsiveContainer } from "recharts";
import { Calendar, List, TrendingUp, TriangleAlert, Trash2, Edit3, Tag } from "lucide-react";
import { useState } from "react";
import { motion } from "framer-motion";

const CardGastos = () => {
         const [showModal, setShowModal] = useState(false);
    const categorias = ["Moradia", "Entretenimento", "Compras"];
    const [formData, setFormData] = useState({
        descricao: "",
        valor: "",
        dataVencimento: "",
        categoria: "",
        recorrencia: "mensal",
        parcelas: { atual: 1, total: 1 },
    });

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        console.log(formData);
        setShowModal(false);
    };
    
  return (
    <section className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        
       <button
        onClick={() => setShowModal(true)}
        className="bg-gray-500 text-white py-2 px-4 rounded-lg hover:bg-gray-600 transition-all mb-4"
      >
        Adicionar Gasto
      </button>

      {showModal && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4"
          onClick={() => setShowModal(false)}
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="bg-gray-800 rounded-2xl p-6 w-full max-w-md"
            onClick={(e) => e.stopPropagation()}
          >
            <h2 className="text-xl font-bold text-white mb-6">Adicionar Gasto</h2>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">Descrição *</label>
                <input
                  type="text"
                  value={formData.descricao}
                  onChange={(e) => setFormData({ ...formData, descricao: e.target.value })}
                  className="w-full bg-gray-700 border border-gray-600 rounded-lg px-3 py-2 text-white focus:outline-none focus:border-gray-500"
                  placeholder="Ex: Netflix, Aluguel, Parcela do carro..."
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">Valor *</label>
                <input
                  type="number"
                  step="0.01"
                  value={formData.valor}
                  onChange={(e) => setFormData({ ...formData, valor: e.target.value })}
                  className="w-full bg-gray-700 border border-gray-600 rounded-lg px-3 py-2 text-white focus:outline-none focus:border-gray-500"
                  placeholder="0,00"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">Data de Vencimento *</label>
                <input
                  type="date"
                  value={formData.dataVencimento}
                  onChange={(e) => setFormData({ ...formData, dataVencimento: e.target.value })}
                  className="w-full bg-gray-700 border border-gray-600 rounded-lg px-3 py-2 text-white focus:outline-none focus:border-gray-500"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">Categoria *</label>
                <select
                  value={formData.categoria}
                  onChange={(e) => setFormData({ ...formData, categoria: e.target.value })}
                  className="w-full bg-gray-700 border border-gray-600 rounded-lg px-3 py-2 text-white focus:outline-none focus:border-gray-500"
                >
                  <option value="">Selecione uma categoria</option>
                  {categorias.map((c) => (
                    <option key={c} value={c}>{c}</option>
                  ))}
                </select>
              </div>
              <div className="flex gap-3 pt-4">
                <button
                  type="button"
                  onClick={() => setShowModal(false)}
                  className="flex-1 bg-gray-600 text-white py-2 rounded-lg hover:bg-gray-700 transition-all"
                >
                  Cancelar
                </button>
                <button
                  type="submit"
                  className="flex-1 bg-gradient-to-r from-gray-500 to-gray-500 text-white py-2 rounded-lg hover:from-gray-600 hover:to-gray-600 transition-all"
                >
                  Adicionar
                </button>
              </div>
            </form>
          </motion.div>
        </motion.div>
      )}
      
        <Card className="p-6 lg:col-span-2 mb-4">
            <div className="flex items-center gap-2 mb-3">
                <TriangleAlert className="w-6 h-6 text-red-600" />
            <h2 className="text-xl font-bold text-black">Resumo</h2>
            </div>

            <ResponsiveContainer width="100%" height={100}>

                <div className="flex justify-between gap-3 w-full h-full"> 
                    <Card className="flex-1 p-5 flex flex-col items-start">
                        <div className="flex items-center gap-2 mb-3">
                            <h3 className="text-sm font-semibold">Total de Gastos</h3>
                        </div>
                            <h2 className="text-xl font-bold"> 3 </h2>
                    </Card>
                    <Card className="flex-1 p-5 flex flex-col items-start">
                        <div className="flex items-center gap-2 mb-3">
                            <h3 className="text-sm font-semibold">Gastos Ativos</h3>
                        </div>
                            <h2 className="text-xl font-bold text-green-600"> 3 </h2>
                    </Card>
                    <Card className="flex-1 p-5 flex flex-col items-start">
                        <div className="flex items-center gap-2 mb-3">
                            <h3 className="text-sm font-semibold">Valor Total</h3>
                        </div>
                            <h2 className="text-xl font-bold"> R$ 3.200 </h2>
                    </Card>
                </div>
            </ResponsiveContainer>
        </Card>

        <Card className="p-6 lg:col-span-2">
            
            <div className="flex items-center gap-2 mb-3">
                <List className="w-6 h-6 text-gray-700" />
                <h1 className="text-2xl font-bold text-foreground mb-1">Lista de Gastos</h1>
            </div>
            <h3 className="text-sm font-semibold mb-4">Seus gastos fixos e recorrentes</h3>
                <ResponsiveContainer width="100%" height={270}>
                    <div className="flex flex-col gap-4 w-full h-full"> 
                         <Card className="flex p-4 justify-between items-center shadow-md">
                            <div>
                                <div className="flex items-center gap-2 mb-1">
                                    <h3 className="text-base font-semibold"> Aluguel </h3>
                                    <span className="text-xs text-gray-500 bg-gray-50 border border-gray-300 px-2 py-0.5 rounded-full"> Moradia </span>
                                </div>
                                <div className="flex gap-3">
                                    <span className="flex items-center gap-1 text-xs text-gray-400"> <Calendar className="w-4 h-4 text-gray-400" /> 31/12 </span>
                                    <span className="flex items-center gap-1 text-xs text-gray-400"> <Tag className="w-4 h-4 text-gray-400" /> Mensal </span>
                                </div>

                            </div>

                            <div className="flex justify-between items-center gap-5">
                                <div className="text-right">
                                    <p className="text-lg font-bold text-yellow-500"> R$ 125,00 </p>
                                    <p className="text-xs text-gray-400">Pendente</p>
                                </div>

                                <div className="flex gap-1">
                                    <button className="p-1 rounded hover:bg-gray-200 bg-green-200">
                                        <Edit3 className="w-5 h-5 rounded-full  text-green-500 " />
                                    </button>
                                    <button className="p-1 rounded hover:bg-gray-200 bg-red-200">
                                        <Trash2 className="w-5 h-5 rounded-full  rounded-full  text-red-500" />
                                    </button>
                                </div>
                            </div>
                        </Card>

                         <Card className="flex p-4 justify-between items-center shadow-md">
                            <div>
                                <div className="flex items-center gap-2 mb-1">
                                    <h3 className="text-base font-semibold"> Spotify Premium </h3>
                                    <span className="text-xs text-gray-500 bg-gray-50 border border-gray-300 px-2 py-0.5 rounded-full"> Entretenimento </span>
                                </div>
                                <div className="flex gap-3">
                                    <span className="flex items-center gap-1 text-xs text-gray-400"> <Calendar className="w-4 h-4 text-gray-400" /> 31/12 </span>
                                    <span className="flex items-center gap-1 text-xs text-gray-400"> <Tag className="w-4 h-4 text-gray-400" /> Mensal </span>
                                </div>

                            </div>

                            <div className="flex justify-between items-center gap-5">
                                <div className="text-right">
                                    <p className="text-lg font-bold text-yellow-500"> R$ 125,00 </p>
                                    <p className="text-xs text-gray-400">Pendente</p>
                                </div>

                                <div className="flex gap-1">
                                    <button className="p-1 rounded hover:bg-gray-200 bg-green-200">
                                        <Edit3 className="w-5 h-5 rounded-full  text-green-500 " />
                                    </button>
                                    <button className="p-1 rounded hover:bg-gray-200 bg-red-200">
                                        <Trash2 className="w-5 h-5 rounded-full  rounded-full  text-red-500" />
                                    </button>
                                </div>
                            </div>
                        </Card>

                        <Card className="flex p-4 justify-between items-center shadow-md">
                            <div>
                                <div className="flex items-center gap-2 mb-1">
                                    <h3 className="text-base font-semibold"> Parcela Tênis Nike <span className="text-gray-400 text-xs">(4/12) </span> </h3>
                                    <span className="text-xs text-gray-500 bg-gray-50 border border-gray-300 px-2 py-0.5 rounded-full"> Compras </span>
                                </div>
                                <div className="flex gap-3">
                                    <span className="flex items-center gap-1 text-xs text-gray-400"> <Calendar className="w-4 h-4 text-gray-400" /> 31/12 </span>
                                    <span className="flex items-center gap-1 text-xs text-gray-400"> <Tag className="w-4 h-4 text-gray-400" /> Unica </span>
                                </div>

                            </div>

                            <div className="flex justify-between items-center gap-5">
                                <div className="text-right">
                                    <p className="text-lg font-bold text-yellow-500"> R$ 125,00 </p>
                                    <p className="text-xs text-gray-400">Pendente</p>
                                </div>

                                <div className="flex gap-1">
                                    <button className="p-1 rounded hover:bg-gray-200 bg-green-200">
                                        <Edit3 className="w-5 h-5 rounded-full  text-green-500 " />
                                    </button>
                                    <button className="p-1 rounded hover:bg-gray-200 bg-red-200">
                                        <Trash2 className="w-5 h-5 rounded-full  rounded-full  text-red-500" />
                                    </button>
                                </div>
                            </div>
                        </Card>
                    </div>
                </ResponsiveContainer>
        </Card>
    </section>
  );
};

export default CardGastos;
