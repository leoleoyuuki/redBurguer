import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent } from "@/components/ui/card";

const menu = {
  burgers: [
    { name: "Red Clássico", description: "Pão, burger de costela, queijo prato, alface, tomate e nosso molho especial.", price: "R$32,90" },
    { name: "Bacon Bomb", description: "Pão, burger de costela, bacon crocante, queijo cheddar e molho barbecue.", price: "R$36,90" },
    { name: "Veggie Delight", description: "Pão, burger de grão de bico, abacate, brotos e maionese vegana.", price: "R$30,90" },
    { name: "Vulcão Picante", description: "Pão, burger de calabresa, queijo prato, jalapeños e maionese picante.", price: "R$34,90" },
    { name: "Mushroom Melt", description: "Pão, burger de costela, queijo suíço, cogumelos salteados e maionese de alho.", price: "R$34,90" },
  ],
  sides: [
    { name: "Fritas da Casa", description: "Batatas fritas fininhas e perfeitamente temperadas.", price: "R$14,90" },
    { name: "Anéis de Cebola", description: "Anéis de cebola crocantes e dourados.", price: "R$16,90" },
    { name: "Batata Doce Frita", description: "Uma alternativa doce e salgada.", price: "R$16,90" },
  ],
  drinks: [
    { name: "Refrigerante", description: "Coca-Cola, Coca-Cola Zero, Guaraná, etc.", price: "R$7,90" },
    { name: "Cerveja Artesanal", description: "Seleção rotativa de cervejarias locais.", price: "R$19,90" },
    { name: "Milkshake", description: "Baunilha, Chocolate ou Morango.", price: "R$22,90" },
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
        <h2 className="section-title">Cardápio Digital</h2>
        <p className="section-subtitle">
          Todas as nossas deliciosas opções em um só lugar, feitas com os melhores ingredientes.
        </p>
        <Tabs defaultValue="burgers" className="w-full max-w-4xl mx-auto">
          <TabsList className="grid w-full grid-cols-3 bg-background shadow-inner">
            <TabsTrigger value="burgers" className="font-bold">Hambúrgueres</TabsTrigger>
            <TabsTrigger value="sides" className="font-bold">Acompanhamentos</TabsTrigger>
            <TabsTrigger value="drinks" className="font-bold">Bebidas</TabsTrigger>
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
