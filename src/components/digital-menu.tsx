import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent } from "@/components/ui/card";

const menu = {
  burgers: [
    { name: "Classic Bliss", description: "Our signature beef patty, cheddar, lettuce, tomato, and bliss sauce.", price: "$12.99" },
    { name: "Bacon Bomb", description: "Beef patty, crispy bacon, smoked gouda, and BBQ sauce.", price: "$14.99" },
    { name: "Veggie Delight", description: "House-made black bean patty, avocado, and sprouts.", price: "$11.99" },
    { name: "Spicy Volcano", description: "Spicy chorizo-infused patty, pepper jack, jalapeños, and fiery aioli.", price: "$13.99" },
    { name: "Mushroom Melt", description: "Beef patty, swiss cheese, sauteed mushrooms, and garlic aioli.", price: "$13.99" },
  ],
  sides: [
    { name: "Bliss Fries", description: "Perfectly seasoned shoestring fries.", price: "$4.99" },
    { name: "Onion Rings", description: "Crispy, golden-brown onion rings.", price: "$5.99" },
    { name: "Sweet Potato Fries", description: "A sweet and savory alternative.", price: "$5.99" },
  ],
  drinks: [
    { name: "Soda Fountain", description: "Coke, Diet Coke, Sprite, etc.", price: "$2.99" },
    { name: "Local Craft Beer", description: "Rotating selection from local breweries.", price: "$7.99" },
    { name: "Thick Milkshake", description: "Vanilla, Chocolate, or Strawberry.", price: "$6.99" },
  ],
};

const MenuItem = ({ name, description, price }: { name: string; description: string; price: string }) => (
  <li className="flex flex-col sm:flex-row justify-between sm:items-baseline py-4 border-b border-border/50 last:border-b-0">
    <div>
        <span className="font-semibold font-headline">{name}</span>
        <p className="text-sm text-muted-foreground">{description}</p>
    </div>
    <span className="font-bold text-primary mt-1 sm:mt-0">{price}</span>
  </li>
);

export default function DigitalMenu() {
  return (
    <section id="menu" className="bg-card">
      <div className="container">
        <h2 className="section-title">Digital Menu</h2>
        <p className="section-subtitle">
          All our delicious options in one place, crafted with the finest ingredients.
        </p>
        <Tabs defaultValue="burgers" className="w-full max-w-4xl mx-auto">
          <TabsList className="grid w-full grid-cols-3 bg-background shadow-inner">
            <TabsTrigger value="burgers" className="font-bold">Burgers</TabsTrigger>
            <TabsTrigger value="sides" className="font-bold">Sides</TabsTrigger>
            <TabsTrigger value="drinks" className="font-bold">Drinks</TabsTrigger>
          </TabsList>
          <div className="mt-4">
              <TabsContent value="burgers">
                 <Card><CardContent className="p-2 sm:p-4"><ul className="space-y-2">{menu.burgers.map(item => <MenuItem key={item.name} {...item} />)}</ul></CardContent></Card>
              </TabsContent>
              <TabsContent value="sides">
                 <Card><CardContent className="p-2 sm:p-4"><ul className="space-y-2">{menu.sides.map(item => <MenuItem key={item.name} {...item} />)}</ul></CardContent></Card>
              </TabsContent>
              <TabsContent value="drinks">
                 <Card><CardContent className="p-2 sm:p-4"><ul className="space-y-2">{menu.drinks.map(item => <MenuItem key={item.name} {...item} />)}</ul></CardContent></Card>
              </TabsContent>
          </div>
        </Tabs>
      </div>
    </section>
  );
}
