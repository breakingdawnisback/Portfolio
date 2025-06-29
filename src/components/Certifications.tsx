'use client';

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Award, Trophy, HeartHandshake, Users } from 'lucide-react';
import { portfolioData } from '@/lib/portfolioData';
import { motion } from 'framer-motion';

const icons: { [key: string]: React.ReactNode } = {
  Award: <Award className="h-8 w-8 text-primary" />,
  Trophy: <Trophy className="h-8 w-8 text-primary" />,
  HeartHandshake: <HeartHandshake className="h-8 w-8 text-primary" />,
  Users: <Users className="h-8 w-8 text-primary" />,
};

export function Certifications() {
  return (
    <section id="certifications" className="py-16 md:py-24 bg-background">
      <div className="container mx-auto px-4">
        <motion.h2 
          className="text-3xl md:text-4xl font-bold text-center mb-12 text-primary"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          {portfolioData.certifications.title}
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {portfolioData.certifications.items.map((cert, index) => (
            <motion.div
              key={cert.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="text-center flex flex-col h-full bg-black border-2 border-green-400 transition-all duration-300 hover:shadow-green-400/20 hover:shadow-2xl hover:-translate-y-2">

                <CardHeader className="flex-grow">
                  <motion.div 
                    className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-secondary mb-4"
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    transition={{ duration: 0.4, delay: index * 0.1 + 0.2 }}
                    viewport={{ once: true }}
                  >
                    {icons[cert.icon]}
                  </motion.div>
                  <CardTitle>{cert.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">{cert.description}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
