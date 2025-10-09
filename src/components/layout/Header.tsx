import { ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

const Header = () => {
  return (
    <header className="h-16 border-b border-border bg-card flex items-center justify-between px-6">
      <div className="flex items-center gap-2">
        <svg
          width="120"
          height="40"
          viewBox="0 0 120 40"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M15 8C15 8 10 8 10 13V27C10 32 15 32 15 32H20V27H15V13H20V8H15Z"
            fill="hsl(var(--primary))"
          />
          <path
            d="M25 13V8H35V13H30V32H25V13Z"
            fill="hsl(var(--primary))"
          />
          <path
            d="M40 13C40 8 45 8 45 8H50C55 8 55 13 55 13V27C55 32 50 32 50 32H45C40 32 40 27 40 27V13ZM45 13V27H50V13H45Z"
            fill="hsl(var(--primary))"
          />
          <path
            d="M60 8H65V18L72 8H78L70 18L78 32H72L65 22V32H60V8Z"
            fill="hsl(var(--primary))"
          />
          <path
            d="M83 22V27C83 32 88 32 88 32H93V27H88V22H93V13C93 8 88 8 88 8H83C78 8 78 13 78 13V18H83V13H88V18H83V22Z"
            fill="hsl(var(--primary))"
          />
        </svg>
      </div>

      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button variant="ghost" className="gap-2">
            <span>Maria</span>
            <ChevronDown className="h-4 w-4" />
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent align="end">
          <DropdownMenuItem>Perfil</DropdownMenuItem>
          <DropdownMenuItem>Configurações</DropdownMenuItem>
          <DropdownMenuItem>Sair</DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </header>
  );
};

export default Header;
