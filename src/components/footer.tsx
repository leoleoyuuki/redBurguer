import { MapPin, Phone, Clock, Sandwich } from "lucide-react";

const footerSections = [
    {
        title: "Visit Us",
        icon: MapPin,
        lines: ["123 Blissful Lane", "Flavor Town, USA 12345"]
    },
    {
        title: "Opening Hours",
        icon: Clock,
        lines: ["Mon - Fri: 11am - 10pm", "Sat - Sun: 11am - 11pm"]
    },
    {
        title: "Contact Us",
        icon: Phone,
        lines: ["(555) 123-4567", "contact@burgerbliss.com"]
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
              <span className="font-bold font-headline text-2xl">Burger Bliss</span>
            </div>
            <p className="text-muted-foreground">The ultimate destination for burger lovers.</p>
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
          <p>&copy; {new Date().getFullYear()} Burger Bliss. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
}
