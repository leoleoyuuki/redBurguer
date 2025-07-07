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
    text: "The Bacon Bomb was life-changing. I've never had a burger this good. I'll be back every week!",
  },
  {
    name: "Mark T.",
    avatar: "https://placehold.co/100x100.png",
    hint: "man portrait",
    text: "As a vegetarian, finding a truly great veggie burger is rare. The Veggie Delight at Burger Bliss is the absolute best!",
  },
  {
    name: "Samantha K.",
    avatar: "https://placehold.co/100x100.png",
    hint: "person smiling",
    text: "Amazing atmosphere and even better food. The staff is so friendly. Perfect spot for a family dinner.",
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
      <h2 className="section-title">What Our Fans Say</h2>
      <p className="section-subtitle">
        Don't just take our word for it. Here's what our customers think.
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
