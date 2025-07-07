import Image from "next/image";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const menuItems = [
  { name: "Classic Bliss", image: "https://placehold.co/600x400.png", hint: "classic cheeseburger" },
  { name: "Bacon Bomb", image: "https://placehold.co/600x400.png", hint: "bacon burger" },
  { name: "Veggie Delight", image: "https://placehold.co/600x400.png", hint: "veggie burger" },
  { name: "Spicy Volcano", image: "https://placehold.co/600x400.png", hint: "spicy burger" },
];

export default function MenuShowcase() {
  return (
    <section id="menu-showcase" className="container">
      <h2 className="section-title text-primary">Our Masterpieces</h2>
      <p className="section-subtitle">
        A sneak peek at our most popular, mouth-watering creations.
      </p>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {menuItems.map((item) => (
          <Card key={item.name} className="overflow-hidden border-2 border-transparent hover:border-accent transition-all duration-300 ease-in-out transform hover:-translate-y-2 hover:shadow-2xl group">
            <CardHeader className="p-0">
              <div className="relative aspect-video w-full overflow-hidden">
                <Image
                  src={item.image}
                  alt={item.name}
                  data-ai-hint={item.hint}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-500 ease-in-out"
                />
              </div>
            </CardHeader>
            <CardContent className="p-4 bg-card">
              <CardTitle className="text-xl font-headline text-center">{item.name}</CardTitle>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
}
