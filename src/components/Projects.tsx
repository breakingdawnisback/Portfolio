'use client';

import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import Image from 'next/image';
import { portfolioData } from '@/lib/portfolioData';
import { ArrowUpRight } from 'lucide-react';
import { motion } from 'framer-motion';

export function Projects() {
  const { pretitle, title, items } = portfolioData.projects;

  return (
    <section id="projects" className="py-16 md:py-32">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-2xl mx-auto mb-16 md:mb-24">
          <p className="font-script text-3xl text-accent-foreground transform -rotate-6 inline-block mb-6">{pretitle}</p>
          <h2 className="text-4xl md:text-6xl font-bold">{title}</h2>
        </div>

        <div className="max-w-7xl mx-auto space-y-8">
          {items.map((project, index) => (
            <motion.div
              key={index}
              className="sticky top-8"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="rounded-[24px] shadow-xl bg-card border-t-4 border-primary transition-all duration-300 hover:shadow-2xl hover:scale-[1.01]">
                <CardContent className="p-6 md:p-10">
                  <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-8 md:gap-12">
                    {/* Content */}
                    <div className="space-y-6">
                      <h3 className="text-2xl lg:text-3xl font-bold">{project.title}</h3>
                      <p className="text-muted-foreground text-lg">{project.description}</p>
                      <div>
                        <span className="font-semibold text-foreground mb-3 block">Tools Used:</span>
                        <div className="flex flex-wrap gap-2">
                          {project.tools.map((tech, techIndex) => (
                            <Badge key={techIndex} variant="secondary">
                              {tech}
                            </Badge>
                          ))}
                        </div>
                      </div>
                      <Button variant="outline" className="group">
                        View Project
                        <ArrowUpRight className="ml-2 h-4 w-4 transition-transform group-hover:rotate-45" />
                      </Button>
                    </div>
                    
                    {/* Image */}
                    <div className="aspect-video relative rounded-xl overflow-hidden">
                      <Image
                        src={project.image}
                        alt={project.title}
                        fill
                        className="object-cover"
                      />
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}