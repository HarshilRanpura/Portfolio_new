import type { FC } from 'react';
import Image from 'next/image';
import { Card, CardContent, CardFooter, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { ExternalLink } from 'lucide-react';

interface Project {
  id: string;
  title: string;
  description: string;
  imageUrl: string;
  imageHint: string;
  projectUrl: string;
  tags: string[];
}

const projects: Project[] = [
  {
    id: '1',
    title: 'E-commerce Platform',
    description: 'A full-featured online store with product listings, cart functionality, and secure payments.',
    imageUrl: 'https://placehold.co/600x400.png',
    imageHint: 'online store shopping',
    projectUrl: '#',
    tags: ['Next.js', 'Tailwind CSS', 'Stripe', 'Firebase'],
  },
  {
    id: '2',
    title: 'Task Management App',
    description: 'A collaborative tool for organizing tasks, setting deadlines, and tracking progress.',
    imageUrl: 'https://placehold.co/600x400.png',
    imageHint: 'task list productivity',
    projectUrl: '#',
    tags: ['React', 'Node.js', 'MongoDB', 'Socket.io'],
  },
  {
    id: '3',
    title: 'Portfolio Website Builder',
    description: 'A dynamic platform enabling users to create and customize their professional portfolios.',
    imageUrl: 'https://placehold.co/600x400.png',
    imageHint: 'website builder design',
    projectUrl: '#',
    tags: ['Vue.js', 'Express', 'PostgreSQL', 'AWS S3'],
  },
   {
    id: '4',
    title: 'Recipe Sharing Community',
    description: 'A web app for users to share, discover, and rate recipes from around the world.',
    imageUrl: 'https://placehold.co/600x400.png',
    imageHint: 'food recipe community',
    projectUrl: '#',
    tags: ['Django', 'Python', 'Bootstrap', 'Heroku'],
  },
];

const ProjectsSection: FC = () => {
  return (
    <section id="projects" className="py-16 sm:py-24 bg-background">
      <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl sm:text-4xl font-bold text-primary text-center mb-12 sm:mb-16">
          Featured Projects
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
          {projects.map((project) => (
            <Card key={project.id} className="overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300 flex flex-col">
              <div className="relative w-full h-64">
                <Image
                  src={project.imageUrl}
                  alt={project.title}
                  layout="fill"
                  objectFit="cover"
                  data-ai-hint={project.imageHint}
                  className="transition-transform duration-500 hover:scale-105"
                />
              </div>
              <CardHeader>
                <CardTitle className="text-2xl text-primary">{project.title}</CardTitle>
                <CardDescription className="text-muted-foreground pt-1 h-16 overflow-hidden">{project.description}</CardDescription>
              </CardHeader>
              <CardContent className="flex-grow">
                <div className="flex flex-wrap gap-2 mb-4">
                    {project.tags.map(tag => (
                        <span key={tag} className="text-xs bg-accent/20 text-accent-foreground px-2 py-1 rounded-full">{tag}</span>
                    ))}
                </div>
              </CardContent>
              <CardFooter>
                <Button asChild variant="outline" className="w-full border-accent text-accent hover:bg-accent/10">
                  <Link href={project.projectUrl} target="_blank" rel="noopener noreferrer">
                    View Project
                    <ExternalLink className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
