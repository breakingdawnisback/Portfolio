'use client';

import { portfolioData } from '@/lib/portfolioData';
import { Button } from '@/components/ui/button';
import { ArrowUp, ArrowUpRight, Github, Linkedin, Instagram, Download } from 'lucide-react';
import Link from 'next/link';
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ContactForm } from './ContactForm';
import { Card } from './ui/card';

export function Footer() {
  const [isFormVisible, setIsFormVisible] = useState(false);
  const [year, setYear] = useState<number>();
  const { footerCta, contactPage, socials, footer } = portfolioData;

  useEffect(() => {
    setYear(new Date().getFullYear());
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  const socialLinks = [
    socials.find(s => s.icon === 'Twitter'),
    socials.find(s => s.icon === 'Linkedin'),
    socials.find(s => s.icon === 'Github'),
  ].filter(Boolean);

  const iconMap: { [key: string]: React.ReactNode } = {
    Twitter: <svg width="24" height="24" viewBox="0 0 1200 1227" fill="none" xmlns="http://www.w3.org/2000/svg" className="h-6 w-6"><path d="M714.163 519.284L1160.89 0H1055.03L667.137 450.887L357.328 0H0L468.492 681.821L0 1226.37H105.866L515.491 750.218L842.672 1226.37H1200L714.163 519.284ZM569.165 687.828L521.697 619.934L112.633 43.895H302.554L604.452 500.651L651.92 568.545L1099.01 1188.56H909.082L569.165 687.828Z" fill="currentColor"/></svg>,
    Linkedin: <Linkedin className="h-6 w-6" />,
    Github: <Github className="h-6 w-6" />,
    Instagram: <Instagram className="h-6 w-6" />,
    Download: <Download className="h-6 w-6" />,
  };
  
  const emailMethod = portfolioData.contact.methods.find(m => m.icon === 'Mail');

  const animationVariants = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    exit: { opacity: 0, y: -20 },
  };

  return (
    <footer id="contact" className="bg-background text-foreground py-12 sm:py-16 relative overflow-hidden">
      <div className="absolute top-1/2 left-1/3 w-96 h-96 bg-primary/20 rounded-full filter blur-3xl glow-orb -translate-x-1/2 -translate-y-1/2"></div>
      <div className="absolute top-1/2 right-1/3 w-96 h-96 bg-accent/20 rounded-full filter blur-3xl glow-orb animation-delay-3000 -translate-x-1/2 -translate-y-1/2"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <AnimatePresence mode="wait">
          {!isFormVisible ? (
            <motion.div
              key="cta"
              variants={animationVariants}
              initial="initial"
              animate="animate"
              exit="exit"
              transition={{ duration: 0.5 }}
              className="text-center max-w-2xl mx-auto"
            >
              <p className="font-script text-3xl text-primary mb-2">{footerCta.pretitle}</p>
              <h2 className="text-5xl md:text-6xl font-bold mb-4">
                {footerCta.title1} <span className="font-script text-primary">{footerCta.title2}</span>
              </h2>
              <p className="text-lg text-muted-foreground mb-6 max-w-lg mx-auto">{footerCta.description}</p>
              <Button
                size="lg"
                onClick={() => setIsFormVisible(true)}
                className="shadow-[0_0_20px_hsl(var(--primary)/0.5)] hover:shadow-[0_0_30px_hsl(var(--primary)/0.7)] transition-shadow"
              >
                <ArrowUpRight className="mr-2 h-5 w-5" />
                Contact Me
              </Button>

              <div className="flex items-center justify-center gap-6 my-8">
                {socials.slice(0, 4).map((social) => (
                  social && (
                  <Link 
                    key={social.name} 
                    href={social.href}
                    download={social.download}
                    target={social.download ? '_self' : '_blank'}
                    rel={social.download ? undefined : 'noopener noreferrer'}
                    className="text-muted-foreground hover:text-primary transition-colors" 
                    aria-label={social.name}>
                      {iconMap[social.icon]}
                  </Link>
                  )
                ))}
              </div>

              {emailMethod && (
                <a href={emailMethod.href} className="text-foreground font-medium tracking-wider hover:text-primary transition-colors underline-offset-4 hover:underline">
                    {emailMethod.value}
                </a>
              )}
            </motion.div>
          ) : (
            <motion.div
              key="form"
              variants={animationVariants}
              initial="initial"
              animate="animate"
              exit="exit"
              transition={{ duration: 0.5 }}
            >
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
                <div className="space-y-6">
                  <div>
                    <h2 className="text-5xl md:text-6xl font-bold">
                      {contactPage.title.split(' ').slice(0, 3).join(' ')} <span className="font-script text-primary">{contactPage.title.split(' ').slice(3).join(' ')}</span>
                    </h2>
                    <p className="mt-4 text-lg text-muted-foreground">{contactPage.description}</p>
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    {contactPage.stats.map(stat => (
                      <Card key={stat.label} className="bg-card/80 p-4 rounded-xl text-center">
                        <p className="text-4xl font-bold text-primary">{stat.value}</p>
                        <p className="text-sm text-muted-foreground">{stat.label}</p>
                      </Card>
                    ))}
                  </div>

                  <div className="flex items-center justify-between">
                      <div className="flex items-center gap-4">
                          {socialLinks.map((social) => (
                              social && (
                              <Link key={social.name} href={social.href} target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors" aria-label={social.name}>
                                  {iconMap[social.icon]}
                              </Link>
                              )
                          ))}
                      </div>
                  </div>
                </div>
                <div>
                  <ContactForm />
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
        
        <div className="border-t border-border pt-8 mt-12 flex flex-col sm:flex-row justify-between items-center text-sm text-muted-foreground">
           <p>&copy; {year} {footer.copyrightName}.</p>
           <button onClick={scrollToTop} className="hover:text-primary transition-colors flex items-center gap-2 mt-4 sm:mt-0">
             Back to Top
             <ArrowUp className="h-4 w-4" />
           </button>
        </div>
      </div>
    </footer>
  );
}
