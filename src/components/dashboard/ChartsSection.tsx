import { Card } from "@/components/ui/card";
import { PieChart, Pie, Cell, BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Legend } from "recharts";

const debtData = [
  { name: "Paga", value: 92, color: "hsl(var(--chart-green))" },
  { name: "Não paga / Vencida", value: 7, color: "hsl(var(--chart-red))" },
  { name: "Não Paga / Vencida", value: 1, color: "hsl(var(--chart-green-light))" },
];

const paymentData = [
  { name: "Pix", value: 72.8, color: "hsl(var(--chart-blue))" },
  { name: "Boleta", value: 27.2, color: "hsl(var(--chart-blue-light))" },
];

const messagesBarData = [
  { date: "16 maio, 2023", Abri: 4, SMS: 1, WTS: 0 },
  { date: "", Abri: 5, SMS: 1, WTS: 0 },
  { date: "", Abri: 3, SMS: 0, WTS: 0 },
  { date: "", Abri: 2, SMS: 1, WTS: 0 },
  { date: "21 maio, 2023", Abri: 7, SMS: 0, WTS: 0 },
  { date: "", Abri: 1, SMS: 0, WTS: 0 },
  { date: "", Abri: 2, SMS: 0, WTS: 0 },
  { date: "", Abri: 2, SMS: 0, WTS: 0 },
  { date: "", Abri: 4, SMS: 0, WTS: 0 },
  { date: "28 maio, 2023", Abri: 1, SMS: 0, WTS: 0 },
  { date: "", Abri: 1, SMS: 0, WTS: 0 },
  { date: "4 junio, 2023", Abri: 17, SMS: 0, WTS: 0 },
  { date: "", Abri: 9, SMS: 0, WTS: 0 },
  { date: "", Abri: 7, SMS: 0, WTS: 0 },
  { date: "", Abri: 8, SMS: 0, WTS: 0 },
];

const messagesData = [
  { date: "16 maio", Lida: 7, "Não lida": 0, "Envio falhou": 0, Client: 0 },
  { date: "", Lida: 17, "Não lida": 0, "Envio falhou": 0, Client: 0 },
  { date: "", Lida: 9, "Não lida": 0, "Envio falhou": 0, Client: 0 },
  { date: "", Lida: 7, "Não lida": 0, "Envio falhou": 0, Client: 0 },
  { date: "", Lida: 8, "Não lida": 0, "Envio falhou": 0, Client: 0 },
];

const ChartsSection = () => {
  return (
    <section className="grid grid-cols-1 lg:grid-cols-2 gap-6">
      {/* Debt Donut Chart */}
      <Card className="p-6">
        <h3 className="text-sm font-semibold mb-4">Dívida más atual de acordo com a estuda</h3>
        <div className="h-64 relative">
          <ResponsiveContainer width="100%" height="100%">
            <PieChart>
              <Pie
                data={debtData}
                cx="50%"
                cy="50%"
                innerRadius={60}
                outerRadius={90}
                paddingAngle={2}
                dataKey="value"
              >
                {debtData.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={entry.color} />
                ))}
              </Pie>
            </PieChart>
          </ResponsiveContainer>
          <div className="absolute inset-0 flex items-center justify-center flex-col">
            <span className="text-2xl font-bold">10,784</span>
            <span className="text-xs text-muted-foreground">TOTAL</span>
          </div>
        </div>
        <div className="mt-4 space-y-2">
          {debtData.map((item, index) => (
            <div key={index} className="flex items-center justify-between text-sm">
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 rounded-full" style={{ backgroundColor: item.color }} />
                <span>{item.name}</span>
              </div>
              <span className="font-medium">{item.value}%</span>
            </div>
          ))}
        </div>
      </Card>

      {/* Payment Donut Chart */}
      <Card className="p-6">
        <h3 className="text-sm font-semibold mb-4">Clientes por meio de pagamento</h3>
        <div className="h-64 relative">
          <ResponsiveContainer width="100%" height="100%">
            <PieChart>
              <Pie
                data={paymentData}
                cx="50%"
                cy="50%"
                innerRadius={60}
                outerRadius={90}
                paddingAngle={2}
                dataKey="value"
              >
                {paymentData.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={entry.color} />
                ))}
              </Pie>
            </PieChart>
          </ResponsiveContainer>
          <div className="absolute inset-0 flex items-center justify-center flex-col">
            <span className="text-2xl font-bold">10,749</span>
            <span className="text-xs text-muted-foreground">TOTAL</span>
          </div>
        </div>
        <div className="mt-4 space-y-2">
          {paymentData.map((item, index) => (
            <div key={index} className="flex items-center justify-between text-sm">
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 rounded-full" style={{ backgroundColor: item.color }} />
                <span>{item.name}</span>
              </div>
              <span className="font-medium">{item.value}%</span>
            </div>
          ))}
        </div>
      </Card>

      {/* Messages Bar Chart 1 */}
      <Card className="p-6 lg:col-span-2">
        <h3 className="text-sm font-semibold mb-4">Mensagens de acordo com o email por dia</h3>
        <ResponsiveContainer width="100%" height={300}>
          <BarChart data={messagesBarData}>
            <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" />
            <XAxis dataKey="date" tick={{ fontSize: 11 }} />
            <YAxis tick={{ fontSize: 11 }} />
            <Tooltip />
            <Legend />
            <Bar dataKey="Abri" stackId="a" fill="hsl(var(--chart-purple))" />
            <Bar dataKey="SMS" stackId="a" fill="hsl(var(--chart-purple-light))" />
            <Bar dataKey="WTS" stackId="a" fill="hsl(var(--chart-yellow))" />
          </BarChart>
        </ResponsiveContainer>
      </Card>

      {/* Messages Bar Chart 2 */}
      <Card className="p-6 lg:col-span-2">
        <h3 className="text-sm font-semibold mb-4">Mensagens</h3>
        <ResponsiveContainer width="100%" height={300}>
          <BarChart data={messagesData}>
            <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" />
            <XAxis dataKey="date" tick={{ fontSize: 11 }} />
            <YAxis tick={{ fontSize: 11 }} />
            <Tooltip />
            <Legend />
            <Bar dataKey="Lida" fill="hsl(var(--chart-turquoise))" />
            <Bar dataKey="Não lida" fill="hsl(var(--chart-turquoise-light))" />
            <Bar dataKey="Envio falhou" fill="hsl(var(--chart-red))" />
            <Bar dataKey="Client" fill="hsl(var(--chart-green))" />
          </BarChart>
        </ResponsiveContainer>
      </Card>
    </section>
  );
};

export default ChartsSection;
