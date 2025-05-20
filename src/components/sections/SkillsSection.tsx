import type { FC, ElementType } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { CodeXmlIcon, PaletteIcon, ZapIcon, LayersIcon, WebhookIcon, AtomIcon, GitForkIcon, ServerIcon, DatabaseIcon } from 'lucide-react';

interface Skill {
  name: string;
  icon: ElementType;
  description: string;
  level?: string; // e.g., "Advanced", "Intermediate"
}

const skills: Skill[] = [
  { name: 'HTML5', icon: CodeXmlIcon, description: 'Crafting semantic and accessible web structures.' },
  { name: 'CSS3 & Tailwind', icon: PaletteIcon, description: 'Styling beautiful, responsive interfaces with modern CSS and utility-first frameworks.' },
  { name: 'JavaScript (ES6+)', icon: ZapIcon, description: 'Building dynamic and interactive web experiences.' },
  { name: 'React & Next.js', icon: AtomIcon, description: 'Developing performant, server-rendered React applications.' },
  { name: 'Node.js & Express', icon: ServerIcon, description: 'Creating robust and scalable server-side applications and APIs.' },
  { name: 'Databases (SQL/NoSQL)', icon: DatabaseIcon, description: 'Managing and querying data efficiently with various database systems.' },
  { name: 'Version Control (Git)', icon: GitForkIcon, description: 'Collaborating and managing codebases effectively with Git and GitHub.' },
  { name: 'API Development', icon: WebhookIcon, description: 'Designing and integrating RESTful and GraphQL APIs.' },
];

const SkillsSection: FC = () => {
  return (
    <section id="skills" className="py-16 sm:py-24 bg-secondary">
      <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl sm:text-4xl font-bold text-primary text-center mb-12 sm:mb-16">
          My Technical Toolkit
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {skills.map((skill) => (
            <Card key={skill.name} className="shadow-lg hover:shadow-xl transition-shadow duration-300 flex flex-col">
              <CardHeader className="flex flex-row items-center space-x-4 pb-3">
                <skill.icon className="h-10 w-10 text-primary" />
                <CardTitle className="text-xl text-primary">{skill.name}</CardTitle>
              </CardHeader>
              <CardContent className="flex-grow">
                <p className="text-muted-foreground">{skill.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
