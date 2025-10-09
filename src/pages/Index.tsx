import Header from "@/components/layout/Header";
import Sidebar from "@/components/layout/Sidebar";
import Footer from "@/components/layout/Footer";
import DashboardHeader from "@/components/dashboard/DashboardHeader";
import DashboardFilters from "@/components/dashboard/DashboardFilters";
import FilterBar from "@/components/dashboard/FilterBar";
import ChartsSection from "@/components/dashboard/ChartsSection";

const Index = () => {
  return (
    <div className="flex min-h-screen flex-col w-full">
      <Header />
      
      <div className="flex flex-1 w-full">
        <Sidebar />
        
        <main className="flex-1 p-6 space-y-6 overflow-auto">
          <DashboardHeader />
          <DashboardFilters />
          <FilterBar />
          <ChartsSection />
        </main>
      </div>
      
      <Footer />
    </div>
  );
};

export default Index;
