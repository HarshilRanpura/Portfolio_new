import type { FC } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { ArrowDown } from 'lucide-react';

const HeroSection: FC = () => {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center bg-gradient-to-br from-background to-secondary py-20 pt-32 md:pt-20">
      <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
        <div className="relative w-40 h-40 md:w-48 md:h-48 mx-auto mb-8 rounded-full overflow-hidden shadow-xl border-4 border-primary">
          <Image
            src="https://placehold.co/300x300.png"
            alt="Profile Photo"
            layout="fill"
            objectFit="cover"
            data-ai-hint="professional portrait"
            className="transform transition-transform duration-500 hover:scale-110"
          />
        </div>
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-primary mb-4">
          Jane Doe
        </h1>
        <p className="text-xl sm:text-2xl text-foreground mb-8 max-w-2xl mx-auto">
          Passionate Full Stack Developer | Crafting Digital Experiences
        </p>
        <div className="space-x-4">
          <Button asChild size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground rounded-full shadow-md transition-transform hover:scale-105">
            <Link href="#contact">
              Hire Me
              <ArrowDown className="ml-2 h-5 w-5 animate-bounce" />
            </Link>
          </Button>
          <Button asChild variant="outline" size="lg" className="border-primary text-primary hover:bg-primary/10 rounded-full shadow-md transition-transform hover:scale-105">
            <Link href="#projects">
              My Work
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
