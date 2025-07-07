import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Star, User } from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";


const testimonials = [
  {
    name: "Julia R.",
    avatar: "https://placehold.co/100x100.png",
    hint: "woman portrait",
    text: "O Bacon Bomb mudou minha vida. Nunca comi um hambúrguer tão bom. Voltarei toda semana!",
  },
  {
    name: "Marcos T.",
    avatar: "https://placehold.co/100x100.png",
    hint: "man portrait",
    text: "Como vegetariano, é raro encontrar um hambúrguer vegetariano realmente ótimo. O Veggie Delight do Red Burguer é o melhor de todos!",
  },
  {
    name: "Samantha K.",
    avatar: "https://placehold.co/100x100.png",
    hint: "person smiling",
    text: "Ambiente incrível e comida ainda melhor. A equipe é muito simpática. Lugar perfeito para um jantar em família.",
  },
];

const StarRating = ({ rating = 5 }) => (
  <div className="flex items-center gap-1 text-accent">
    {Array.from({ length: rating }).map((_, i) => (
      <Star key={i} className="h-5 w-5 fill-current" />
    ))}
  </div>
);

export default function Testimonials() {
  return (
    <section id="testimonials" className="container">
      <h2 className="section-title">O Que Nossos Fãs Dizem</h2>
      <p className="section-subtitle">
        Não acredite apenas na nossa palavra. Veja o que nossos clientes pensam.
      </p>
      <Carousel
        opts={{
          align: "start",
          loop: true,
        }}
        className="w-full max-w-4xl mx-auto"
      >
        <CarouselContent>
          {testimonials.map((testimonial, index) => (
            <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
              <div className="p-1 h-full">
                <Card className="h-full flex flex-col">
                  <CardContent className="flex flex-col items-center flex-grow text-center p-6 space-y-4">
                    <Avatar className="h-20 w-20">
                      <AvatarImage src={testimonial.avatar} alt={testimonial.name} data-ai-hint={testimonial.hint} />
                      <AvatarFallback><User/></AvatarFallback>
                    </Avatar>
                    <StarRating />
                    <p className="text-base italic flex-grow">"{testimonial.text}"</p>
                    <p className="font-bold font-headline">{testimonial.name}</p>
                  </CardContent>
                </Card>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious className="hidden sm:inline-flex" />
        <CarouselNext className="hidden sm:inline-flex" />
      </Carousel>
    </section>
  );
}
