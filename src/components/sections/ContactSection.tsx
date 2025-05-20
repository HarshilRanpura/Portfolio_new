import type { FC } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Mail, Github, Linkedin, Phone } from 'lucide-react';
import Link from 'next/link';

const ContactSection: FC = () => {
  return (
    <section id="contact" className="py-16 sm:py-24 bg-secondary">
      <div className="container mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl sm:text-4xl font-bold text-primary text-center mb-12 sm:mb-16">
          Let&apos;s Connect
        </h2>
        <Card className="shadow-xl">
          <CardHeader>
            <CardTitle className="text-2xl text-center text-primary">Get In Touch</CardTitle>
          </CardHeader>
          <CardContent className="text-center space-y-8">
            <p className="text-lg text-foreground max-w-md mx-auto">
              I&apos;m always excited to discuss new projects, creative ideas, or opportunities to collaborate.
              Feel free to reach out!
            </p>
            
            <div className="space-y-4">
              <Button asChild size="lg" className="w-full sm:w-auto sm:min-w-[280px] bg-primary hover:bg-primary/90 text-primary-foreground rounded-full shadow-md transition-transform hover:scale-105">
                <a href="mailto:jane.doe@example.com">
                  <Mail className="mr-2 h-5 w-5" /> Email: jane.doe@example.com
                </a>
              </Button>
              <Button asChild variant="outline" size="lg" className="w-full sm:w-auto sm:min-w-[280px] border-primary text-primary hover:bg-primary/10 rounded-full shadow-md transition-transform hover:scale-105">
                <a href="tel:+1234567890">
                  <Phone className="mr-2 h-5 w-5" /> Phone: +1 (234) 567-890
                </a>
              </Button>
            </div>

            <div className="flex justify-center space-x-6 pt-6">
              <Link href="https://github.com/janedoe" target="_blank" rel="noopener noreferrer" aria-label="GitHub Profile">
                <Github className="h-10 w-10 text-foreground hover:text-primary transition-colors duration-300 transform hover:scale-110" />
              </Link>
              <Link href="https://linkedin.com/in/janedoe" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn Profile">
                <Linkedin className="h-10 w-10 text-foreground hover:text-primary transition-colors duration-300 transform hover:scale-110" />
              </Link>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default ContactSection;
