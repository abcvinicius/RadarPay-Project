import { Card } from "@/components/ui/card";
import { ResponsiveContainer } from "recharts";
import { Calendar, Tag, TriangleAlert, Edit3, Trash2, List } from "lucide-react";
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

  const [gastos, setGastos] = useState([
    {
      descricao: "Aluguel",
      categoria: "Moradia",
      dataVencimento: "2025-12-31",
      tipo: "Mensal",
      valor: 125,
      status: "Pendente",
      corValor: "text-yellow-500",
      bgEdit: "bg-green-200",
      colorEdit: "text-green-500",
      bgTrash: "bg-red-200",
      colorTrash: "text-red-500",
    },
    {
      descricao: "Spotify Premium",
      categoria: "Entretenimento",
      dataVencimento: "2025-12-31",
      tipo: "Mensal",
      valor: 125,
      status: "Pendente",
      corValor: "text-yellow-500",
      bgEdit: "bg-green-200",
      colorEdit: "text-green-500",
      bgTrash: "bg-red-200",
      colorTrash: "text-red-500",
    },
  ]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    let tipoRecorrencia = "";
    if (formData.recorrencia === "unica") {
      tipoRecorrencia = `(${formData.parcelas.atual}/${formData.parcelas.total})`;
    } else {
      tipoRecorrencia = formData.recorrencia.charAt(0).toUpperCase() + formData.recorrencia.slice(1);
    }

    const novoGasto = {
      descricao: formData.descricao,
      categoria: formData.categoria,
      dataVencimento: formData.dataVencimento,
      tipo: tipoRecorrencia,
      valor: parseFloat(formData.valor),
      status: "Pendente",
      corValor: "text-yellow-500",
      bgEdit: "bg-green-200",
      colorEdit: "text-green-500",
      bgTrash: "bg-red-200",
      colorTrash: "text-red-500",
    };

    setGastos((prev) => [...prev, novoGasto]);
    setShowModal(false);

    // resetar formulário
    setFormData({
      descricao: "",
      valor: "",
      dataVencimento: "",
      categoria: "",
      recorrencia: "mensal",
      parcelas: { atual: 1, total: 1 },
    });
  };

  return (
    <section className="grid grid-cols-1 lg:grid-cols-2 gap-6">
      <button
        onClick={() => setShowModal(true)}
        className="bg-gray-600 border border-gray-600 rounded-lg px-3 py-2 text-white focus:outline-none focus:border-gray-500"
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
            className="bg-white rounded-2xl p-6 w-full max-w-md"
            onClick={(e) => e.stopPropagation()}
          >
            <h2 className="text-xl font-bold text-gray-800 mb-6">Adicionar Gasto</h2>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-500 mb-2">Descrição *</label>
                <input
                  type="text"
                  value={formData.descricao}
                  onChange={(e) => setFormData({ ...formData, descricao: e.target.value })}
                  className="w-full bg-white border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:border-gray-500"
                  placeholder="Ex: Netflix, Aluguel, Parcela do carro..."
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-500 mb-2">Valor *</label>
                <input
                  type="number"
                  step="0.01"
                  value={formData.valor}
                  onChange={(e) => setFormData({ ...formData, valor: e.target.value })}
                  className="w-full bg-white border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:border-gray-500"
                  placeholder="0,00"
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-500 mb-2">Data de Vencimento *</label>
                <input
                  type="date"
                  value={formData.dataVencimento}
                  onChange={(e) => setFormData({ ...formData, dataVencimento: e.target.value })}
                  className="w-full bg-white border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:border-gray-500"
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-500 mb-2">Categoria *</label>
                <select
                  value={formData.categoria}
                  onChange={(e) => setFormData({ ...formData, categoria: e.target.value })}
                  className="w-full bg-white border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:border-gray-500"
                  required
                >
                  <option value="">Selecione uma categoria</option>
                  {categorias.map((c) => (
                    <option key={c} value={c}>{c}</option>
                  ))}
                </select>
              </div>

              {/* Recorrência */}
              <div>
                <label className="block text-sm font-medium text-gray-500 mb-2">Recorrência *</label>
                <select
                  value={formData.recorrencia}
                  // eslint-disable-next-line @typescript-eslint/no-explicit-any
                  onChange={(e) => setFormData({ ...formData, recorrencia: e.target.value as any })}
                  className="w-full bg-white border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:border-red-500"
                >
                  <option value="mensal">Mensal</option>
                  <option value="anual">Anual</option>
                  <option value="unica">Única/Parcelada</option>
                </select>
              </div>

              {formData.recorrencia === "unica" && (
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-500 mb-2">Parcela Atual</label>
                    <input
                      type="number"
                      min="1"
                      value={formData.parcelas.atual}
                      onChange={(e) => setFormData({
                        ...formData,
                        parcelas: { ...formData.parcelas, atual: parseInt(e.target.value) || 1 },
                      })}
                      className="w-full bg-white border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:border-red-500"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-500 mb-2">Total de Parcelas</label>
                    <input
                      type="number"
                      min="1"
                      value={formData.parcelas.total}
                      onChange={(e) => setFormData({
                        ...formData,
                        parcelas: { ...formData.parcelas, total: parseInt(e.target.value) || 1 },
                      })}
                      className="w-full bg-white border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:border-red-500"
                    />
                  </div>
                </div>
              )}

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
                  className="flex-1 bg-gray-600 text-white py-2 rounded-lg hover:bg-gray-700 transition-all"
                >
                  Adicionar
                </button>
              </div>
            </form>
          </motion.div>
        </motion.div>
      )}

      {/* Lista de Gastos */}
      <Card className="p-6 lg:col-span-2">
        <div className="flex items-center gap-2 mb-3">
          <List className="w-6 h-6 text-gray-700" />
          <h1 className="text-2xl font-bold text-foreground mb-1">Lista de Gastos</h1>
        </div>
        <h3 className="text-sm font-semibold mb-4">Seus gastos fixos e recorrentes</h3>
        <ResponsiveContainer width="100%" height={270}>
          <div className="flex flex-col gap-4 w-full h-full">
            {gastos.map((g, index) => (
              <Card key={index} className="flex p-4 justify-between items-center shadow-md">
                <div>
                  <div className="flex items-center gap-2 mb-1">
                    <h3 className="text-base font-semibold">{g.descricao}</h3>
                    <span className="text-xs text-gray-500 bg-gray-50 border border-gray-300 px-2 py-0.5 rounded-full">{g.categoria}</span>
                  </div>
                  <div className="flex gap-3">
                    <span className="flex items-center gap-1 text-xs text-gray-400">
                      <Calendar className="w-4 h-4 text-gray-400" /> {g.dataVencimento}
                    </span>
                    <span className="flex items-center gap-1 text-xs text-gray-400">
                      <Tag className="w-4 h-4 text-gray-400" /> {g.tipo}
                    </span>
                  </div>
                </div>

                <div className="flex justify-between items-center gap-5">
                  <div className="text-right">
                    <p className={`text-lg font-bold ${g.corValor}`}>R$ {g.valor}</p>
                    <p className="text-xs text-gray-400">{g.status}</p>
                  </div>
                  <div className="flex gap-1">
                    <button className={`p-1 rounded hover:bg-gray-200 ${g.bgEdit}`}>
                      <Edit3 className={`w-5 h-5 rounded-full ${g.colorEdit}`} />
                    </button>
                    <button className={`p-1 rounded hover:bg-gray-200 ${g.bgTrash}`}>
                      <Trash2 className={`w-5 h-5 rounded-full ${g.colorTrash}`} />
                    </button>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </ResponsiveContainer>
      </Card>
    </section>
  );
};

export default CardGastos;