import { X } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const FilterBar = () => {
  return (
    <section className="flex items-center gap-3">
      <div className="flex items-center gap-2 bg-blue-50 border border-blue-200 rounded-md px-3 py-1.5">
        <span className="text-xs font-medium text-blue-700">Relative Date</span>
        <span className="text-xs font-semibold text-blue-900">Últimos 30 Días</span>
        <Button variant="ghost" size="sm" className="h-auto p-0 hover:bg-transparent">
          <X className="h-3 w-3 text-blue-700" />
        </Button>
      </div>

      <Select defaultValue="canal">
        <SelectTrigger className="w-40 h-8">
          <SelectValue placeholder="Selecione" />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="canal">Canal</SelectItem>
          <SelectItem value="email">Email</SelectItem>
          <SelectItem value="sms">SMS</SelectItem>
        </SelectContent>
      </Select>
    </section>
  );
};

export default FilterBar;
