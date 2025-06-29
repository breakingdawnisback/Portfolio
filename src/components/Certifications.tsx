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
    <section id="certifications" className="py-16 md:py-24">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
          {portfolioData.certifications.title}
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {portfolioData.certifications.items.map((cert, index) => (
            <motion.div
              key={cert.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="text-center flex flex-col hover:shadow-lg transition-shadow duration-300">
                <CardHeader className="flex-grow">
                  <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-secondary mb-4">
                    {icons[cert.icon]}
                  </div>
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