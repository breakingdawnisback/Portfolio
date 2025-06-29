'use client';

import { Badge } from '@/components/ui/badge';
import { portfolioData } from '@/lib/portfolioData';
import { motion } from 'framer-motion';

export function Skills() {
  const { pretitle, title, categories } = portfolioData.skills;
  return (
    <section id="skills" className="py-16 md:py-24 bg-background">
      <div className="container mx-auto px-4">
        <motion.div 
          className="text-center max-w-2xl mx-auto mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <p className="font-script text-4xl text-accent-foreground transform -rotate-6 inline-block mb-6">{pretitle}</p>
          <h2 className="text-5xl md:text-7xl font-bold text-foreground leading-tight">{title}</h2>
        </motion.div>
        <div className="max-w-5xl mx-auto space-y-12">
          {categories.map((category, categoryIndex) => (
            <motion.div 
              key={category.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: categoryIndex * 0.1 }}
              viewport={{ once: true }}
            >
              <h3 className="text-2xl md:text-3xl font-semibold mb-6 text-center text-foreground">{category.title}</h3>
              <div className="flex flex-wrap justify-center gap-4">
                {category.skills.map((skill, skillIndex) => (
                  <motion.div
                    key={skill}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.3, delay: categoryIndex * 0.1 + skillIndex * 0.05 }}
                    viewport={{ once: true }}
                  >
                    <Badge variant="outline" className="text-xl px-6 py-3 border-primary text-primary hover:bg-primary hover:text-primary-foreground transition-colors duration-300 cursor-default">
                      {skill}
                    </Badge>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
