import { Card } from "@/components/ui/card"; 
import { Button } from "@/components/ui/button";
import { ResponsiveContainer } from "recharts";
import { Calendar, List, TrendingUp, TriangleAlert, Trash2, Edit3, Tag, UserRound, Bell, Shield, Download, Smartphone } from "lucide-react";

const CardConfig = () => {
  return (
    <section className="grid grid-cols-1 lg:grid-cols-2 gap-6">
      <Card className="p-6 lg:col-span-2 mb-4">
        <div className="flex items-center gap-2 mb-3">
          <UserRound className="w-6 h-6 text-red-600" />
          <h2 className="text-xl font-bold text-black">Perfil Financeiro</h2>
        </div>

        <ResponsiveContainer width="100%" height={250}>
          <div className="flex justify-between w-full h-full"> 
            <Card className="flex-1 p-6 flex">
              <div className="space-y-4 w-full h-full">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2"> Renda Mensal (R$) </label>
                  <div className="flex gap-3">
                    <input
                      type="number"
                      className="flex-1 bg-white border border-gray-300 rounded-lg px-3 py-2 text-gray-700 focus:outline-none focus:border-gray-500"
                      placeholder="Ex: 5000"
                    />
                    <Button variant="default" className="gap-2">
                      Salvar
                    </Button>
                  </div>
                  <p className="text-xs text-slate-400 mt-1">
                    Usado para calcular o percentual de comprometimento
                  </p>
                </div>
                                
                <div>
                  <label className="block text-sm font-medium text-slate-500 mb-2"> Meta de Comprometimento (%) </label>
                  <div className="flex gap-3">
                    <input
                      type="number"
                      min="0"
                      max="100"
                      className="flex-1 bg-white border border-gray-300 rounded-lg px-3 py-2 text-gray-700 focus:outline-none focus:border-gray-500"
                      placeholder="Ex: 30"
                    />
                    <Button variant="default" className="gap-2">
                      Salvar
                    </Button>
                  </div>
                  <p className="text-xs text-slate-400 mt-1">
                    Você será alertado quando ultrapassar este percentual
                  </p>
                </div>
              </div>
            </Card>
          </div>
        </ResponsiveContainer>
      </Card>

      <Card className="p-6 lg:col-span-2 mb-4">
        <div className="flex items-center gap-3 mb-6">
          <Bell className="w-6 h-6 text-red-400" />
          <h2 className="text-xl font-bold text-black">Notificações</h2>
        </div>
            
        <div className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-slate-500 mb-2"> Dias de Antecedência para Alertas </label>
            <select className="w-full flex-1 bg-white border border-gray-300 rounded-lg px-3 py-2 text-gray-700 focus:outline-none focus:border-gray-500">
              <option value="1">1 dia antes</option>
              <option value="2">2 dias antes</option>
              <option value="3">3 dias antes</option>
              <option value="5">5 dias antes</option>
              <option value="7">1 semana antes</option>
            </select>
          </div>
                
          <div className="space-y-3">
            <div className="flex items-center justify-between">
              <div>
                <h3 className="text-black font-medium">Alertas de Cobrança</h3>
                <p className="text-sm text-slate-500">Receba notificações antes das cobranças</p>
              </div>
              <label className="relative inline-flex items-center cursor-pointer">
                <input type="checkbox" className="sr-only peer" />
                <div className="w-11 h-6 bg-slate-600 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-destructive"></div>
              </label>
            </div>
                    
            <div className="flex items-center justify-between">
              <div>
                <h3 className="text-black font-medium">Resumo Semanal</h3>
                <p className="text-sm text-slate-500">Receba um resumo dos seus gastos</p>
              </div>
              <label className="relative inline-flex items-center cursor-pointer">
                <input type="checkbox" className="sr-only peer" />
                <div className="w-11 h-6 bg-slate-600 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-destructive"></div>
              </label>
            </div>
                    
            <div className="flex items-center justify-between">
              <div>
                <h3 className="text-black font-medium">Alerta de Meta</h3>
                <p className="text-sm text-slate-500">Notificação ao ultrapassar meta de comprometimento</p>
              </div>
              <label className="relative inline-flex items-center cursor-pointer">
                <input type="checkbox" className="sr-only peer" />
                <div className="w-11 h-6 bg-slate-600 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-destructive"></div>
              </label>
            </div>
          </div>
        </div>
      </Card>

      <Card className="p-6 lg:col-span-2 mb-4">
        <div className="flex items-center gap-3 mb-6">
          <Shield className="w-6 h-6 text-red-400" />
          <h2 className="text-xl font-bold text-black">Dados e Privacidade</h2>
        </div>
                
        <div className="space-y-4">
          <Button variant="default" className="w-full flex items-center justify-center gap-2">
            <Download className="w-5 h-5" />
            Exportar Dados (CSV)
          </Button>
                
          <div className=" rounded-lg p-4 bg-gray-600 border border-gray-600  text-white focus:outline-none focus:border-gray-500">
            <div className="flex items-center gap-3">
              <Smartphone className="w-5 h-5 text-white" />
              <div>
                <h3 className="text-white font-medium">App Móvel</h3>
                <p className="text-sm text-white">
                  Baixe nosso app para receber notificações push
                </p>
              </div>
            </div>
          </div>
                
          <div className="bg-red-500/65  rounded-lg p-4">
            <h3 className="text-white font-medium mb-2">Sobre seus dados</h3>
            <p className="text-sm text-white">
              Seus dados financeiros são armazenados localmente no seu dispositivo. 
              Não compartilhamos informações com terceiros.
            </p>
          </div>
        </div>
      </Card>
    </section>
  );
};

export default CardConfig;