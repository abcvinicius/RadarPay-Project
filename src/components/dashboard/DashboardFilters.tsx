import { X, Settings } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const DashboardFilters = () => {
  return (
    <section className="flex items-center justify-between">
      <div className="flex items-center gap-2">
        <h2 className="text-sm font-semibold text-foreground">Dashboards Personalizados</h2>
      </div>
      
      <div className="flex items-center gap-4">
        <Button variant="outline" size="sm">
          <Settings className="h-4 w-4" />
        </Button>
      </div>
    </section>
  );
};

export default DashboardFilters;
