import { MapPin, Phone, Clock, Sandwich, UtensilsCrossed } from "lucide-react";
import { Button } from "./ui/button";

const footerSections = [
    {
        title: "Visite-nos",
        icon: MapPin,
        lines: ["Rua Fictícia, 123", "Parque São Domingos, São Paulo - SP"]
    },
    {
        title: "Horário de Funcionamento",
        icon: Clock,
        lines: ["Ter - Qui: 18h - 23h", "Sex - Dom: 18h - 00h"]
    },
    {
        title: "Contato",
        icon: Phone,
        lines: ["(11) 99999-9999", "contato@redburguer.com"]
    }
]

export default function Footer() {
  return (
    <footer className="bg-card border-t border-border/50">
      <div className="container py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="flex flex-col items-center md:items-start text-center md:text-left">
            <div className="flex items-center mb-4">
              <Sandwich className="h-8 w-8 mr-2 text-primary" />
              <span className="font-bold font-headline text-2xl">Red Burguer Gourmet</span>
            </div>
            <p className="text-muted-foreground">O destino definitivo para os amantes de hambúrguer.</p>
             <a href="https://www.ifood.com.br" target="_blank" rel="noopener noreferrer" className="mt-4">
                <Button className="font-bold bg-accent text-accent-foreground hover:bg-accent/90 shadow-md">
                    <UtensilsCrossed className="mr-2 h-4 w-4" />
                    Peça no iFood
                </Button>
            </a>
          </div>
          <div className="lg:col-span-3">
             <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
                {footerSections.map(section => (
                    <div key={section.title} className="text-center md:text-left">
                        <div className="flex items-center justify-center md:justify-start mb-3">
                            <section.icon className="h-6 w-6 mr-2 text-primary" />
                            <h3 className="font-headline font-bold text-lg">{section.title}</h3>
                        </div>
                        {section.lines.map(line => <p key={line} className="text-muted-foreground">{line}</p>)}
                    </div>
                ))}
            </div>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-border/50 text-center text-muted-foreground text-sm">
          <p>&copy; {new Date().getFullYear()} Red Burguer Gourmet. Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  );
}
