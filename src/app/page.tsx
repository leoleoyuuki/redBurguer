import AiBurgerBuilder from '@/components/ai-burger-builder';
import DigitalMenu from '@/components/digital-menu';
import Footer from '@/components/footer';
import Header from '@/components/header';
import Hero from '@/components/hero';
import MenuShowcase from '@/components/menu-showcase';
import Testimonials from '@/components/testimonials';

export default function Home() {
  return (
    <div className="flex flex-col min-h-dvh bg-background">
      <Header />
      <main className="flex-1">
        <Hero />
        <MenuShowcase />
        <AiBurgerBuilder />
        <Testimonials />
        <DigitalMenu />
      </main>
      <Footer />
    </div>
  );
}
