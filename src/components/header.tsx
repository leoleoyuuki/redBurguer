import { Button } from "@/components/ui/button";
import Image from "next/image";

export default function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-14 max-w-screen-2xl items-center">
        <a href="/" className="mr-6 flex items-center space-x-2">
            <Image
              src="/images/logo.jpg"
              alt="Red Burguer Gourmet Logo"
              data-ai-hint="burger logo"
              width={40}
              height={40}
              className="rounded-full"
            />
            <span className="font-bold font-headline text-lg">Red Burguer Gourmet</span>
        </a>
        <div className="flex flex-1 items-center justify-end space-x-2">
          <a href="https://www.ifood.com.br" target="_blank" rel="noopener noreferrer">
            <Button className="font-bold bg-accent text-accent-foreground hover:bg-accent/90 shadow-md transition-transform hover:scale-105">Peça no iFood</Button>
          </a>
        </div>
      </div>
    </header>
  );
}
