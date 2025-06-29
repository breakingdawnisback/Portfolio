'use client';

import { portfolioData } from '@/lib/portfolioData';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';

export function CareerPath() {
  const { pretitle, title, items } = portfolioData.careerPath;
  const titleParts = title.split(' I\'ve ');
  
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  return (
    <section id="career-path" className="py-16 md:py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-2xl mx-auto mb-20">
          <p className="font-script text-4xl text-accent-foreground transform -rotate-6 inline-block mb-6">{pretitle}</p>
          <h2 className="text-5xl md:text-7xl font-bold text-foreground leading-tight">
            <span className="block">{titleParts[0]}</span>
            <span className="block">I've {titleParts[1]}</span>
          </h2>
        </div>

        <div className="relative max-w-4xl mx-auto">
          {/* Vertical Line */}
          <div className="absolute w-0.5 h-full bg-border top-0 left-4 md:left-1/2 -translate-x-1/2"></div>
          
          {items.map((item, index) => {
            const timelineItemContent = (
              <>
                {/* Dot on the line */}
                <div className={`absolute w-4 h-4 bg-background rounded-full left-4 -translate-x-1/2 md:left-1/2 mt-3 border-2 ${item.type === 'experience' ? 'border-primary' : 'border-secondary'}`}></div>

                {/* Card */}
                <div className={`ml-10 md:ml-0 md:w-[calc(50%-2rem)] ${index % 2 === 0 ? 'md:mr-auto' : 'md:ml-auto'}`}>
                  <Card className={`shadow-lg hover:shadow-xl transition-all duration-300 border-t-4 transform hover:-translate-y-1 ${item.type === 'experience' ? 'border-primary' : 'border-secondary'}`}>
                    <CardHeader>
                      <div className="flex justify-between items-center mb-2">
                        <Badge variant={item.type === 'experience' ? 'default' : 'secondary'}>
                          {item.type.charAt(0).toUpperCase() + item.type.slice(1)}
                        </Badge>
                        <p className="text-xs text-muted-foreground">{item.period}</p>
                      </div>
                      <CardTitle className="text-2xl font-semibold">{item.title}</CardTitle>
                      <CardDescription className="!mt-1 text-lg font-medium">
                        {item.subtitle}
                      </CardDescription>
                    </CardHeader>
                    <CardContent>
                      <p className="text-muted-foreground text-base">{item.description}</p>
                    </CardContent>
                  </Card>
                </div>
              </>
            );

            if (!isMounted) {
              return (
                <div key={item.title + index} className="relative mb-12 opacity-0">
                  {timelineItemContent}
                </div>
              );
            }

            return (
              <motion.div 
                key={item.title + index} 
                className="relative mb-12"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.1 * index }}
              >
                {timelineItemContent}
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
