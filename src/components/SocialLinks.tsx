'use client';

import { Github, Linkedin, Mail, Phone, Share2, Twitter, Instagram, Download } from 'lucide-react';
import { portfolioData } from '@/lib/portfolioData';
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from '@/components/ui/tooltip';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';

const iconMap: { [key: string]: React.ReactNode } = {
  Linkedin: <Linkedin className="h-6 w-6" />,
  Github: <Github className="h-6 w-6" />,
  Download: <Download className="h-6 w-6" />,
  Twitter: <Twitter className="h-6 w-6" />,
  Instagram: <Instagram className="h-6 w-6" />,
  Mail: <Mail className="h-6 w-6" />,
  Phone: <Phone className="h-6 w-6" />,
};

export function SocialLinks() {
  const [isOpen, setIsOpen] = useState(false);
  const { socials } = portfolioData;

  const containerVariants = {
    closed: {
      transition: {
        staggerChildren: 0.05,
        staggerDirection: -1,
      },
    },
    open: {
      transition: {
        staggerChildren: 0.1,
        staggerDirection: 1,
      },
    },
  };

  const itemVariants = {
    closed: {
      opacity: 0,
      y: 10,
      scale: 0.8,
    },
    open: {
      opacity: 1,
      y: 0,
      scale: 1,
    },
  };

  return (
    <TooltipProvider>
      <div
        className="fixed top-4 left-4 z-50"
        onMouseEnter={() => setIsOpen(true)}
        onMouseLeave={() => setIsOpen(false)}
        
      >
        <motion.div
          className="flex flex-col items-center gap-4"
          initial="closed"
          animate={isOpen ? 'open' : 'closed'}
        >
          <Tooltip>
            <TooltipTrigger asChild>
              <button className="flex h-14 w-14 items-center justify-center rounded-full bg-background/80 shadow-lg backdrop-blur-sm transition-all duration-300 hover:bg-primary hover:text-primary-foreground">
                <Share2 className="h-7 w-7" />
              </button>
            </TooltipTrigger>
            <TooltipContent side="right">
              <p className="text-base font-medium">Connect with me</p>
            </TooltipContent>
          </Tooltip>
          
          <AnimatePresence>
            {isOpen && (
              <motion.div
                className="flex flex-col items-center gap-3"
                variants={containerVariants}
                initial="closed"
                animate="open"
                exit="closed"
              >
                {socials.map((social) => (
                  <motion.div key={social.name} variants={itemVariants}>
                    <Tooltip>
                      <TooltipTrigger asChild>
                        <Link
                          href={social.href}
                          download={social.download}
                          target={social.download ? '_self' : '_blank'}
                          rel={social.download ? undefined : 'noopener noreferrer'}
                          className="flex h-12 w-12 items-center justify-center rounded-full bg-background/80 shadow-md backdrop-blur-sm transition-all duration-300 hover:bg-primary hover:text-primary-foreground"
                          aria-label={social.name}
                        >
                          {iconMap[social.icon]}
                        </Link>
                      </TooltipTrigger>
                      <TooltipContent side="right">
                        <p className="text-base font-medium">{social.name}</p>
                      </TooltipContent>
                    </Tooltip>
                  </motion.div>
                ))}
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>
      </div>
    </TooltipProvider>
  );
}
