import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";

const DashboardHeader = () => {
  return (
    <section className="space-y-4">
      <h1 className="text-3xl font-bold text-foreground">Resumo</h1>
      
      <Tabs defaultValue="metricas" className="w-full">
        <TabsList className="w-auto">
          <TabsTrigger value="metricas">Métricas</TabsTrigger>
          <TabsTrigger value="informacoes">Informações de carga</TabsTrigger>
          <TabsTrigger value="relatorios">Relatórios</TabsTrigger>
        </TabsList>
      </Tabs>
    </section>
  );
};

export default DashboardHeader;
