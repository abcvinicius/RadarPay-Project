import { Card } from "@/components/ui/card";
import { ResponsiveContainer } from "recharts";
import { Calendar, Clock, DollarSign, TrendingUp, TriangleAlert } from "lucide-react";

const ChartsSection = () => {
  return (
    <section className="grid grid-cols-1 lg:grid-cols-2 gap-6 ">
    
    <Card className="p-6 lg:col-span-2 mb-4">
        <div className="flex items-center gap-2 mb-3 ">
            <TriangleAlert className="w-6 h-6 text-red-600" />
            <h1 className="text-2xl font-bold text-foreground mb-1">Comprometimento Mensal </h1>
        </div>
        <h3 className="text-sm font-semibold mb-4">Seus gastos fixos e recorrentes</h3>
            <ResponsiveContainer width="100%" height={100}>
                    <div className="flex justify-between gap-4 w-full h-full"> 
                        
                        <Card className="flex-1 p-6 flex flex-col items-start">
                            <div className="flex items-center gap-2 mb-3">
                                <DollarSign className="w-6 h-6 text-green-600" />
                                <h3 className="text-sm font-semibold">Total Comprometido</h3>
                            </div>
                                <h2 className="text-xl font-bold"> R$ 3.200 </h2>
                        </Card>
                        
                        <Card className="flex-1 p-6 flex flex-col items-start">
                            <div className="flex items-center gap-2 mb-3">
                                <TrendingUp className="w-6 h-6 text-orange-600" />
                                <h3 className="text-sm font-semibold">Total Comprometido</h3>
                            </div>
                                <h2 className="text-xl font-bold"> 53.1% </h2>
                        </Card> 
                        
                        <Card className="flex-1 p-6 flex flex-col items-start">
                            <div className="flex items-center gap-2 mb-3">
                                <Calendar className="w-6 h-6 text-blue-600" />
                                <h3 className="text-sm font-semibold">Total Comprometido</h3>
                            </div>
                                <h2 className="text-xl font-bold"> 5 </h2>
                        </Card>
                    </div>
            </ResponsiveContainer>

        <div className="mt-6 flex items-center gap-2 text-red-700 bg-red-50 border border-red-200 rounded-lg p-3 text-sm font-medium">
            <span><strong>⚠️ Atenção:</strong> Você está comprometendo <strong>53.1%</strong> da sua renda com gastos fixos!</span>
        </div>
    </Card>
    
    <Card className="p-6 lg:col-span-2">
    <div className="flex items-center gap-2 mb-3">
        <Clock className="w-6 h-6 text-purple-600" />
        <h1 className="text-2xl font-bold text-foreground mb-1">Próximas Cobranças </h1>
    </div>
    <h3 className="text-sm font-semibold mb-4">Seus gastos fixos e recorrentes</h3>
        <ResponsiveContainer width="100%" height={475}>
            <div className="flex flex-col gap-4 w-full h-full"> 
                
                <Card className="flex p-4 justify-between items-center shadow-md">
                    <div>
                        <div className="flex items-center gap-2 mb-1">
                            <span className="flex items-center gap-1 text-xs text-red-700"> <span className="w-2 h-2 rounded-full bg-red-700" /> Amanhã </span>
                            <span className="text-xs text-gray-500 bg-gray-50 border border-gray-300 px-2 py-0.5 rounded-full"> Compras </span>
                        </div>
                        <h3 className="text-base font-semibold"> Parcela Tênis <span className="text-gray-400 text-xs">(4/12) </span> </h3>
                    </div>

                    <div className="text-right">
                        <p className="text-lg font-bold text-red-700">R$ 125,00</p>
                        <p className="text-xs text-gray-400">Pendente</p>
                    </div>
                </Card>

                <Card className="flex p-4 justify-between items-center shadow-md">
                    <div>
                        <div className="flex items-center gap-2 mb-1">
                            <span className="flex items-center gap-1 text-xs text-yellow-500"> <span className="w-2 h-2 rounded-full bg-yellow-500" /> 23/12 </span>
                            <span className="text-xs text-gray-500 bg-gray-50 border border-gray-300 px-2 py-0.5 rounded-full"> Entretenimento </span>
                        </div>
                        <h3 className="text-base font-semibold"> Netflix <span className="text-gray-400 text-xs">(4/12) </span> </h3>
                    </div>

                    <div className="text-right">
                        <p className="text-lg font-bold text-yellow-500">R$ 125,00</p>
                        <p className="text-xs text-gray-400">Pendente</p>
                    </div>
                </Card>

                <Card className="flex p-4 justify-between items-center shadow-md">
                    <div>
                        <div className="flex items-center gap-2 mb-1">
                            <span className="flex items-center gap-1 text-xs text-yellow-500"> <span className="w-2 h-2 rounded-full bg-yellow-500" /> 24/12 </span>
                            <span className="text-xs text-gray-500 bg-gray-50 border border-gray-300 px-2 py-0.5 rounded-full"> Utilidades </span>
                        </div>
                        <h3 className="text-base font-semibold"> Internet <span className="text-gray-400 text-xs">(4/12) </span> </h3>
                    </div>

                    <div className="text-right">
                        <p className="text-lg font-bold text-yellow-500">R$ 125,00</p>
                        <p className="text-xs text-gray-400">Pendente</p>
                    </div>
                </Card>

                <Card className="flex p-4 justify-between items-center shadow-md">
                    <div>
                        <div className="flex items-center gap-2 mb-1">
                            <span className="flex items-center gap-1 text-xs text-yellow-500"> <span className="w-2 h-2 rounded-full bg-yellow-500" /> 26/12 </span>
                            <span className="text-xs text-gray-500 bg-gray-50 border border-gray-300 px-2 py-0.5 rounded-full"> Saúde </span>
                        </div>
                        <h3 className="text-base font-semibold"> Plano de Saúde <span className="text-gray-400 text-xs">(4/12) </span> </h3>
                    </div>

                    <div className="text-right">
                        <p className="text-lg font-bold text-yellow-500">R$ 125,00</p>
                        <p className="text-xs text-gray-400">Pendente</p>
                    </div>
                </Card>

                <Card className="flex p-4 justify-between items-center shadow-md">
                    <div>
                        <div className="flex items-center gap-2 mb-1">
                            <span className="flex items-center gap-1 text-xs text-yellow-500"> <span className="w-2 h-2 rounded-full bg-yellow-500" /> 31/12 </span>
                            <span className="text-xs text-gray-500 bg-gray-50 border border-gray-300 px-2 py-0.5 rounded-full"> Moradia </span>
                        </div>
                        <h3 className="text-base font-semibold"> Aluguel <span className="text-gray-400 text-xs">(4/12) </span> </h3>
                    </div>

                    <div className="text-right">
                        <p className="text-lg font-bold text-yellow-500">R$ 125,00</p>
                        <p className="text-xs text-gray-400">Pendente</p>
                    </div>
                </Card>
            </div>
        </ResponsiveContainer>

    <div className="mt-6 flex items-center gap-2 text-yellow-500 bg-yellow-50 border border-yellow-300 rounded-lg p-3 text-sm font-medium">
            <span> <strong>💡 Dica:</strong> Configure alertas para receber notificações antes das cobranças! </span>
    </div>

    </Card>
    </section>
  );
};

export default ChartsSection;
