import Header from "@/components/layout/Header";
import Sidebar from "@/components/layout/Sidebar";
import Footer from "@/components/layout/Footer";
import ConfigHeader from "@/components/dashboard/ConfigHeader";
import ConfigSection from "@/components/dashboard/ConfigSection";


const Config = () => {
  return (
    <div className="flex min-h-screen flex-col w-full">
      <Header />
      
      <div className="flex flex-1 w-full">
        <Sidebar />
        
        <main className="flex-1 p-6 space-y-6 overflow-auto">
          <ConfigHeader />
          <ConfigSection />
        </main>
      </div>
      
      <Footer />
    </div>
  );
};

export default Config;
