'use client';

import { Menu } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger, SheetClose, SheetHeader, SheetTitle } from '@/components/ui/sheet';
import Link from 'next/link';
import { ThemeToggle } from './ThemeToggle';

const NAV_LINKS = [
  { name: 'Home', href: '#home' },
  { name: 'About', href: '#about' },
  { name: 'Skills', href: '#skills' },
  { name: 'Projects', href: '#projects' },
  { name: 'Career Path', href: '#career-path' },
  { name: 'Certifications', href: '#certifications' },
  { name: 'Contact', href: '#contact' },
];

export function Header() {
  return (
    <header className="fixed top-4 right-4 z-50 md:top-6 md:right-6">
      <Sheet>
        <SheetTrigger asChild>
          <Button variant="outline" size="icon" className="rounded-full shadow-lg bg-background/80 backdrop-blur-sm w-14 h-14">
            <Menu className="h-7 w-7" />
            <span className="sr-only">Toggle navigation menu</span>
          </Button>
        </SheetTrigger>
        <SheetContent side="right" className="w-[300px] sm:w-[400px] bg-background flex flex-col p-6">
          <SheetHeader>
            <SheetTitle className="sr-only">Navigation Menu</SheetTitle>
          </SheetHeader>
           <div className="flex items-center justify-center mt-8 mb-12">
            <ThemeToggle />
          </div>
          <nav className="flex flex-col flex-grow justify-center items-center -mt-16">
            <ul className="flex flex-col gap-8 text-center">
              {NAV_LINKS.map((link) => (
                <li key={link.href}>
                  <SheetClose asChild>
                    <Link href={link.href} className="text-3xl font-semibold text-muted-foreground hover:text-primary transition-colors duration-300">
                      {link.name}
                    </Link>
                  </SheetClose>
                </li>
              ))}
            </ul>
          </nav>
        </SheetContent>
      </Sheet>
    </header>
  );
}
