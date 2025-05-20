import type { FC } from 'react';
import Image from 'next/image';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

const AboutSection: FC = () => {
  return (
    <section id="about" className="py-16 sm:py-24 bg-background">
      <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl sm:text-4xl font-bold text-primary text-center mb-12 sm:mb-16">
          About Me
        </h2>
        <Card className="overflow-hidden shadow-xl">
          <div className="md:flex">
            <div className="md:w-1/3">
              <div className="relative h-64 md:h-full w-full">
                <Image
                  src="https://placehold.co/600x800.png"
                  alt="About Jane Doe"
                  layout="fill"
                  objectFit="cover"
                  data-ai-hint="person working computer"
                  className="transition-transform duration-500 hover:scale-105"
                />
              </div>
            </div>
            <div className="md:w-2/3">
              <CardHeader>
                <CardTitle className="text-2xl text-primary">A Glimpse Into My Journey</CardTitle>
              </CardHeader>
              <CardContent className="text-lg text-foreground space-y-6">
                <p>
                  Hello! I&apos;m Jane, a dedicated and results-oriented Full Stack Developer with a knack for
                  transforming complex ideas into elegant, user-friendly applications. My journey in tech began
                  with a fascination for how software shapes our world, and it has since evolved into a deep
                  passion for coding and problem-solving.
                </p>
                <p>
                  I thrive in dynamic environments and enjoy collaborating with teams to build impactful
                  digital solutions. With a strong foundation in both front-end and back-end technologies,
                  I am adept at navigating the full software development lifecycle.
                </p>
                <p>
                  When I&apos;m not coding, you can find me exploring new technologies, contributing to open-source
                  projects, or enjoying a good cup of coffee while brainstorming my next big idea.
                </p>
              </CardContent>
            </div>
          </div>
        </Card>
      </div>
    </section>
  );
};

export default AboutSection;
