import type { FC } from 'react';

const Footer: FC = () => {
  const currentYear = new Date().getFullYear();
  return (
    <footer className="bg-secondary text-secondary-foreground py-8 border-t border-border">
      <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
        <p className="text-sm">
          &copy; {currentYear} Skill Showcase. All rights reserved.
        </p>
        <p className="text-xs mt-2">
          Designed with passion by a creative mind.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
