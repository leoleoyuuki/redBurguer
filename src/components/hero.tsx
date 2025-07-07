import Image from "next/image";
import { Button } from "@/components/ui/button";

export default function Hero() {
  return (
    <section className="relative h-[70vh] min-h-[450px] w-full flex items-center justify-center text-center text-white overflow-hidden p-0">
      <div className="absolute inset-0 z-[-1]">
        <Image
          src="https://placehold.co/1920x1080.png"
          alt="A delicious gourmet burger"
          data-ai-hint="gourmet burger"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/60" />
      </div>
      <div className="z-10 container px-4 sm:px-6 lg:px-8">
        <h1 className="text-5xl md:text-7xl font-bold font-headline drop-shadow-lg">
          Taste the Bliss in Every Bite
        </h1>
        <p className="mt-4 max-w-2xl mx-auto text-lg md:text-xl drop-shadow-md">
          Crafted with passion, served with love. Discover your new favorite burger today.
        </p>
        <Button size="lg" className="mt-8 font-bold text-lg bg-accent text-accent-foreground hover:bg-accent/90 transform transition-transform hover:scale-105 shadow-xl">
          Order Your Bliss
        </Button>
      </div>
    </section>
  );
}
