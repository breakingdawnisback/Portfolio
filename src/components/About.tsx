'use client';

import { portfolioData } from '@/lib/portfolioData';
import Image from 'next/image';
import { motion } from 'framer-motion';

export function About() {
  const { pretitle, title, image, stats } = portfolioData.about;

  return (
    <section id="about" className="py-16 md:py-32 bg-background relative overflow-hidden">
      {/* Vertical line, behind content */}
      <div className="absolute top-0 left-1/2 w-px h-full bg-border -translate-x-1/2 z-0"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        {/* Title section */}
        <motion.div 
          className="text-center max-w-3xl mx-auto mb-16 md:mb-24"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <p className="font-script text-4xl text-accent-foreground transform -rotate-6 inline-block mb-6">{pretitle}</p>
          <h2 className="text-5xl md:text-7xl font-bold text-foreground leading-tight">{title}</h2>
        </motion.div>

        {/* Main content grid */}
        <div className="grid grid-cols-1 md:grid-cols-[1fr_auto_1fr] items-center gap-8 md:gap-20">
          
          {/* Left stats */}
          <motion.div 
            className="space-y-12 text-center md:text-right"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            {stats.slice(0, 3).map((stat, index) => (
              <motion.div 
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.3 + index * 0.1 }}
                viewport={{ once: true }}
              >
                <p className="text-sm text-muted-foreground">{stat.label}:</p>
                <h3 className="text-3xl md:text-4xl font-bold text-foreground">{stat.value}</h3>
              </motion.div>
            ))}
          </motion.div>

          {/* Center image */}
          <motion.div 
            className="relative order-first md:order-none mx-auto"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
          >
             <Image
              src={image.src}
              alt={image.alt}
              width={320}
              height={440}
              className="rounded-3xl shadow-2xl object-cover w-[260px] h-auto md:w-[320px]"
              priority
            />
          </motion.div>

          {/* Right stats */}
          <motion.div 
            className="space-y-12 text-center md:text-left"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            {stats.slice(3, 6).map((stat, index) => (
              <motion.div 
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.3 + index * 0.1 }}
                viewport={{ once: true }}
              >
                <p className="text-sm text-muted-foreground">{stat.label}:</p>
                <h3 className="text-3xl md:text-4xl font-bold text-foreground">{stat.value}</h3>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
