'use client';

import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import Image from 'next/image';
import { portfolioData } from '@/lib/portfolioData';
import { ArrowUpRight } from 'lucide-react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef, useEffect, useState } from 'react';

export function Projects() {
  const reversedProjects = [...portfolioData.projects.items].reverse();
  const containerRef = useRef(null);
  const [containerHeight, setContainerHeight] = useState('auto');

  useEffect(() => {
    if (reversedProjects.length > 0 && containerRef.current) {
      const estimatedCardHeight = window.innerHeight * 0.8;
      const totalScrollHeightNeeded = reversedProjects.length * estimatedCardHeight;
      setContainerHeight(`${totalScrollHeightNeeded}px`);
    }
  }, [reversedProjects.length]);

  return (
    <section id="projects" className="py-12 sm:py-16 md:py-32 bg-background">
      <div className="container mx-auto px-4">
        <motion.h2
          className="text-3xl sm:text-4xl md:text-5xl font-bold text-center mb-10 sm:mb-16 text-foreground"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          {portfolioData.projects.title}
        </motion.h2>

        <div 
          ref={containerRef}
          className="relative max-w-7xl mx-auto flex flex-col gap-12 sm:gap-16"
          style={{ height: containerHeight }}
        >
          {reversedProjects.map((project, index) => {
            const { scrollYProgress } = useScroll({
              target: containerRef,
              offset: [`start ${100 - (index * 10)}%`, `end ${100 - (index * 10) - 50}%`]
            });

            const scale = useTransform(scrollYProgress, [0, 1], [0.8 + (index * 0.05), 1]);
            const opacity = useTransform(scrollYProgress, [0, 0.5, 1], [0.2, 1, 1]);

            return (
              <motion.div
                key={index}
                className="sticky top-0 w-full"
                style={{ zIndex: index + 1 }}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true }}
              >
                <Card className="bg-black rounded-[24px] sm:rounded-[32px] shadow-2xl border border-lime-400 transition-all duration-300 hover:shadow-lime-400/20 hover:shadow-2xl hover:-translate-y-1 overflow-hidden group">
                  <CardContent className="p-4 sm:p-6 md:p-16 flex flex-col md:flex-row items-center gap-6 sm:gap-10">
                    <div className="w-full md:w-1/2">
                      <h3 className="text-2xl sm:text-3xl md:text-5xl font-bold text-white mb-4 sm:mb-6">
                        {project.title}
                      </h3>
                      <p className="text-gray-300 text-sm sm:text-base md:text-lg mb-4 sm:mb-6">
                        {project.description}
                      </p>
                      <div>
                        <span className="font-bold text-white text-sm sm:text-base">Tools Used:</span>
                        <div className="flex flex-wrap gap-2 mt-2">
                          {project.tools.map((tech, techIndex) => (
                            <Badge
                              key={techIndex}
                              variant="outline"
                              className="bg-lime-400/10 border-lime-400/30 text-lime-400 text-xs sm:text-sm md:text-base px-3 py-1 sm:px-4 sm:py-2"
                            >
                              {tech}
                            </Badge>
                          ))}
                        </div>
                      </div>
                      <div className="pt-4 sm:pt-6">
                        <Button
                          variant="outline"
                          className="bg-transparent border-lime-400 text-lime-400 hover:bg-lime-400 hover:text-black transition-all duration-300 group/btn text-sm sm:text-base px-5 sm:px-6 md:px-8 py-2 sm:py-3 md:py-4"
                        >
                          View Project
                          <ArrowUpRight className="ml-2 h-4 w-4 sm:h-5 sm:w-5 transition-transform duration-300 group-hover/btn:rotate-45" />
                        </Button>
                      </div>
                    </div>
                    <div className="w-full md:w-1/2 flex justify-center">
                      <Image
                        src={project.image}
                        alt={project.title}
                        width={400}
                        height={300}
                        className="rounded-xl object-cover w-full shadow-md"
                      />
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
