import Image from "next/image";
import { Button } from "@/components/ui/button";
import AiAssistant from '@/components/ai-burger-builder';
import DigitalMenu from '@/components/digital-menu';
import Footer from '@/components/footer';
import Header from '@/components/header';
import MenuShowcase from '@/components/menu-showcase';
import Testimonials from '@/components/testimonials';

export default function Home() {
  return (
    <div className="flex flex-col min-h-dvh bg-background">
      <Header />
      <main className="flex-1">
        <section className="relative h-[70vh] min-h-[450px] w-full flex items-center justify-center text-center text-white overflow-hidden p-0">
          <div className="absolute inset-0 z-[1]">
            <Image
              src="https://images.pexels.com/photos/32862018/pexels-photo-32862018.jpeg"
              alt="Um delicioso hambúrguer gourmet"
              data-ai-hint="gourmet burger"
              fill
              className="object-cover"
              priority
            />
            <div className="absolute inset-0 bg-black/60" />
          </div>
          <div className="z-10 container px-4 sm:px-6 lg:px-8">
            <h1 className="text-5xl md:text-7xl font-bold font-headline drop-shadow-lg">
              Sinta o Sabor em Cada Mordida
            </h1>
            <p className="mt-4 max-w-2xl mx-auto text-lg md:text-xl drop-shadow-md">
              Feito com paixão, servido com amor. Descubra seu novo hambúrguer favorito hoje.
            </p>
            <Button asChild size="lg" className="mt-8 font-bold text-lg bg-accent text-accent-foreground hover:bg-accent/90 transform transition-transform hover:scale-105 shadow-xl">
              <a href="#menu">
                Ver Cardápio
              </a>
            </Button>
          </div>
        </section>
        <MenuShowcase />
        <AiAssistant />
        <Testimonials />
        <DigitalMenu />
      </main>
      <Footer />
    </div>
  );
}
