'use client';

import Image from 'next/image';
import { useRef, useEffect, useState } from 'react';
import { portfolioData } from '@/lib/portfolioData';
import { Button } from '@/components/ui/button';
import { Download, Send } from 'lucide-react';
import Link from 'next/link';
import { motion } from 'framer-motion';

export function Hero() {
  const heroRef = useRef<HTMLElement>(null);
  const [style, setStyle] = useState({});
  const [showScrollIcon, setShowScrollIcon] = useState(true);

  useEffect(() => {
    const hero = heroRef.current;
    if (!hero) return;

    const handleMouseMove = (e: MouseEvent) => {
      const { clientX, clientY } = e;
      const { left, top, width, height } = hero.getBoundingClientRect();
      const centerX = left + width / 2;
      const centerY = top + height / 2;
      const offsetX = clientX - centerX;
      const offsetY = clientY - centerY;
      const moveX = offsetX * 0.05;
      const moveY = offsetY * 0.05;

      setStyle({
        transform: `translate(${moveX}px, ${moveY}px)`,
        transition: 'transform 0.1s ease-out',
      });
    };

    const handleMouseLeave = () => {
      setStyle({
        transform: 'translate(0px, 0px)',
        transition: 'transform 0.6s ease-in-out',
      });
    };

    hero.addEventListener('mousemove', handleMouseMove);
    hero.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      hero.removeEventListener('mousemove', handleMouseMove);
      hero.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
        setShowScrollIcon(false);
      } else {
        setShowScrollIcon(true);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section 
      id="home" 
      ref={heroRef}
      className="min-h-screen w-full flex items-center justify-center relative text-center overflow-hidden p-4 bg-background"
    >
      <div className="absolute inset-0 bg-grid-slate-100 [mask-image:linear-gradient(to_bottom,white,transparent)] dark:bg-grid-slate-700/40"></div>

      <div className="z-10 animate-in fade-in-0 zoom-in-95 duration-1000">
        {(portfolioData.hero as any).pretitle && (
          <p className="tracking-widest text-muted-foreground uppercase mb-4 md:mb-8">
            {(portfolioData.hero as any).pretitle}
          </p>
        )}

        <div className="relative flex flex-col items-center">
          <h1 className="text-[20vw] md:text-[12rem] leading-[0.75] font-black tracking-tighter text-primary">
            {portfolioData.hero.title1}
          </h1>

          <div className="my-[-18vw] md:my-[-7rem] z-10" style={style}>
            <Image
              src={portfolioData.hero.profileImage.src}
              alt={portfolioData.hero.profileImage.alt}
              width={portfolioData.hero.profileImage.width}
              height={portfolioData.hero.profileImage.height}
              className="w-[35vw] md:w-[180px] h-auto object-cover shadow-2xl [border-radius:50%/40%] border-4 border-transparent hover:border-primary transition-all"
              priority
            />
          </div>

          <h1 className="text-[20vw] md:text-[12rem] leading-[0.75] font-black tracking-tighter text-primary">
            {portfolioData.hero.title2}
          </h1>
        </div>

        <p className="mt-12 max-w-lg mx-auto text-xl text-muted-foreground">
          {portfolioData.hero.subtitlePre}{' '}
          <span className="font-bold text-primary">{portfolioData.hero.subtitleHighlight}</span>{' '}
          {portfolioData.hero.subtitlePost}
        </p>

        <div className="mt-8 md:mt-12 flex flex-col sm:flex-row items-center justify-center gap-4">
          <Button asChild size="lg" className="group text-lg">
            <a href="/Resume-Nishant Kumar.pdf" download>
              <Download className="mr-2 h-6 w-6 transition-transform group-hover:-translate-y-1" />
              Download Resume
            </a>
          </Button>

          <Button asChild variant="outline" size="lg" className="group text-lg">
            <Link href="#contact">
              <Send className="mr-2 h-6 w-6 transition-transform group-hover:translate-x-1" />
              Let's Talk
            </Link>
          </Button>
        </div>
      </div>

      {showScrollIcon && (
        <motion.div
          className="absolute bottom-10 left-1/2 transform -translate-x-1/2 text-primary"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: [10, 0, 10] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            strokeWidth={2}
            viewBox="0 0 24 24"
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
          </svg>
        </motion.div>
      )}
    </section>
  );
}
