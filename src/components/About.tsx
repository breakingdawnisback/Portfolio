import { portfolioData } from '@/lib/portfolioData';
import Image from 'next/image';

export function About() {
  const { pretitle, title, image, stats } = portfolioData.about;

  return (
    <section id="about" className="py-16 md:py-32 bg-background relative overflow-hidden">
      {/* Vertical line, behind content */}
      <div className="absolute top-0 left-1/2 w-px h-full bg-border -translate-x-1/2 z-0"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        {/* Title section */}
        <div className="text-center max-w-3xl mx-auto mb-16 md:mb-24">
          <p className="font-script text-3xl text-accent-foreground transform -rotate-6 inline-block mb-6">{pretitle}</p>
          <h2 className="text-4xl md:text-6xl font-bold text-foreground leading-tight">{title}</h2>
        </div>

        {/* Main content grid */}
        <div className="grid grid-cols-1 md:grid-cols-[1fr_auto_1fr] items-center gap-8 md:gap-20">
          
          {/* Left stats */}
          <div className="space-y-12 text-center md:text-right">
            {stats.slice(0, 3).map((stat) => (
              <div key={stat.label}>
                <p className="text-sm text-muted-foreground">{stat.label}:</p>
                <h3 className="text-2xl md:text-3xl font-bold text-foreground">{stat.value}</h3>
              </div>
            ))}
          </div>

          {/* Center image */}
          <div className="relative order-first md:order-none mx-auto">
             <Image
              src={image.src}
              alt={image.alt}
              width={320}
              height={440}
              className="rounded-3xl shadow-2xl object-cover w-[260px] h-auto md:w-[320px]"
              priority
            />
          </div>

          {/* Right stats */}
          <div className="space-y-12 text-center md:text-left">
            {stats.slice(3, 6).map((stat) => (
              <div key={stat.label}>
                <p className="text-sm text-muted-foreground">{stat.label}:</p>
                <h3 className="text-2xl md:text-3xl font-bold text-foreground">{stat.value}</h3>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
