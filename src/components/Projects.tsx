'use client';

import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import Image from 'next/image';
import { portfolioData } from '@/lib/portfolioData';
import { ArrowUpRight } from 'lucide-react';
import { motion, useScroll, useTransform } from 'framer-motion'; // Import useScroll, useTransform
import { useRef, useEffect, useState } from 'react'; // Import useRef, useEffect, useState

export function Projects() {
  const reversedProjects = [...portfolioData.projects.items].reverse();
  const containerRef = useRef(null);
  const [containerHeight, setContainerHeight] = useState('auto'); // State for dynamic height

  // Calculate height dynamically based on number of cards and desired stickiness
  // This is an estimation. You might need to fine-tune `cardScrollAmount`
  // based on the actual height of your cards and how much overlap you want.
  useEffect(() => {
    if (reversedProjects.length > 0 && containerRef.current) {
      // Estimate the height of a single card's content (rough estimate)
      // You can get this more accurately by measuring a card.
      const estimatedCardHeight = window.innerHeight * 0.8; // Example: 80% of viewport height
      const desiredOverlap = 100; // Pixels each card is "pushed up" by the next

      // Total scrollable height for all cards to stick and unstick
      // (Number of cards - 1) * (height each card takes up in scroll) + (height of last card visible)
      // A common pattern is each card takes up one viewport height of scroll
      const calculatedHeight = (reversedProjects.length * window.innerHeight) + (estimatedCardHeight / 2); // Adjust multiplier as needed
      
      // Let's refine this to make it more generic:
      // The total height of the container should be such that each card has
      // its own "scroll window" within the parent.
      // E.g., if you want each card to fully reveal, and then stay sticky for
      // say, 50vh before the next card pushes it, and you have N cards.
      // Total Height = (N-1) * (sticky scroll distance) + (last card's height)
      // For a full reveal, each card needs roughly 100vh of scroll.
      
      const scrollHeightPerCard = window.innerHeight * 0.8; // Example: Each card needs 80vh of scroll to fully transition
      const totalScrollHeightNeeded = reversedProjects.length * scrollHeightPerCard;

      setContainerHeight(`${totalScrollHeightNeeded}px`); // Set height in pixels
    }
  }, [reversedProjects.length]); // Recalculate if number of projects changes

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

        {/* Card stack container */}
        {/* Use the dynamically calculated height */}
        <div 
          ref={containerRef} // Attach ref to measure
          className="relative max-w-7xl mx-auto flex flex-col gap-12 sm:gap-16"
          style={{ height: containerHeight }} // Apply dynamic height
        >
          {reversedProjects.map((project, index) => {
            // Calculate scale and opacity based on scroll progress for a fancier effect
            // These values might need fine-tuning based on your desired visual.
            const { scrollYProgress } = useScroll({
              target: containerRef,
              offset: [`start ${100 - (index * 10)}%`, `end ${100 - (index * 10) - 50}%`] // Adjust offsets for sequence
            });

            const scale = useTransform(scrollYProgress, [0, 1], [0.8 + (index * 0.05), 1]); // Example: scale up slightly
            const opacity = useTransform(scrollYProgress, [0, 0.5, 1], [0.2, 1, 1]); // Example: fade in

            return (
              <motion.div
                key={index}
                className="sticky top-0 w-full" // Ensure it takes full width within its sticky context
                style={{ 
                  zIndex: index + 1 // Correct zIndex for reverse order
                  // You might also use 'top' for a more nuanced sticky effect if cards don't overlap perfectly
                  // For example, if you want each card to stick a little lower than the previous one:
                  // top: `${index * 20}px` // Adjust 20px based on desired overlap
                }}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="bg-black rounded-[24px] sm:rounded-[32px] shadow-2xl border border-lime-400 transition-all duration-300 hover:shadow-lime-400/20 hover:shadow-2xl hover:-translate-y-1 overflow-hidden group">
                  <CardContent className="p-4 sm:p-6 md:p-16 flex flex-col md:flex-row items-center gap-6 sm:gap-10">
                    {/* Left: Text */}
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
                    {/* Right: Image */}
                    <div className="w-full md:w-1/2 flex justify-center">
                      <Image
                        src={project.image}
                        alt={project.title}
                        width={600}
                        height={360}
                        className="rounded-2xl object-cover w-full max-w-xs sm:max-w-sm md:max-w-full"
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