'use client';

import Image from 'next/image';
import Link from 'next/link';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Check } from 'lucide-react';

interface Project {
  title: string;
  description: string;
  image: string;
  dataAiHint?: string;
  price: string;
  features: string[];
  cta: {
    href: string;
    label: string;
  };
}

interface ProjectCardProps {
  project: Project;
}

export function ProjectCard({ project }: ProjectCardProps) {
  return (
    <Card className="rounded-[24px] shadow-xl bg-card transition-all duration-300 hover:shadow-2xl hover:scale-[1.01]">
      <CardContent className="p-6 md:p-10">
        <div className="flex flex-col md:flex-row items-center gap-8">
          <div className="w-full md:w-1/2 aspect-video relative">
            <Image
              src={project.image}
              alt={project.title}
              fill
              className="rounded-xl object-cover"
              data-ai-hint={project.dataAiHint}
            />
          </div>
          <div className="w-full md:w-1/2 space-y-4">
            <p className="text-muted-foreground">{project.price}</p>
            <h3 className="text-2xl font-bold text-foreground">{project.title}</h3>
            <p className="text-muted-foreground">{project.description}</p>
            <ul className="space-y-2 pt-2">
              {project.features.map((feature, i) => (
                <li key={i} className="flex items-center gap-3">
                  <Check className="h-5 w-5 text-primary" />
                  <span className="text-muted-foreground">{feature}</span>
                </li>
              ))}
            </ul>
            <div className="pt-4">
              <Button size="lg" asChild>
                <Link href={project.cta.href}>Get in touch</Link>
              </Button>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
