'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { useTheme } from '@/app/providers';
import {
  RoundedEdge,
  PhArrowLeftLight,
  PhArrowRightLight,
  PhInstagramLogoLight,
  PhPinterestLogoLight,
  PhBehanceLogoLight,
  PhTwitterLogoLight,
  PhEnvelopeSimpleLight,
  PhArrowDownLight,
  PhArrowRight,
} from '@/components/Icons';

const AnimatedTag = ({ text, textSize = 'text-[15px]' }: { text: string; textSize?: string }) => (
  <div className="relative overflow-hidden block">
    <div className="flex items-center gap-1 opacity-0 pointer-events-none">
      <span className={`text-text-default font-sans ${textSize} font-normal leading-[100%]`}>{text}</span>
      <PhArrowRight />
    </div>
    <div className="absolute inset-0 flex items-center gap-1 transition-transform duration-500 ease-[cubic-bezier(0.25,1,0.5,1)] group-hover:-translate-y-full">
      <span className={`text-text-default font-sans ${textSize} font-normal leading-[100%]`}>{text}</span>
    </div>
    <div className="absolute inset-0 flex items-center gap-1 transition-transform duration-500 ease-[cubic-bezier(0.25,1,0.5,1)] translate-y-full group-hover:translate-y-0">
      <span className={`text-text-default font-sans ${textSize} font-normal leading-[100%]`}>{text}</span>
      <PhArrowRight />
    </div>
  </div>
);

const AnimatedText = ({ text, style, textSize = 'text-[15px]' }: { text: string; style: string; textSize?: string }) => (
  <div className="relative overflow-hidden block group cursor-pointer">
    <div className="flex items-center gap-1 opacity-0 pointer-events-none">
      <span className={`${style}`}>{text}</span>
    </div>
    <div className="absolute inset-0 flex items-center gap-1 transition-transform duration-500 ease-[cubic-bezier(0.25,1,0.5,1)] group-hover:-translate-y-full">
      <span className={`${style}`}>{text}</span>
    </div>
    <div className="absolute inset-0 flex items-center gap-1 transition-transform duration-500 ease-[cubic-bezier(0.25,1,0.5,1)] translate-y-full group-hover:translate-y-0">
      <span className={`${style}`}>{text}</span>
    </div>
  </div>
);

export default function Home() {
  const router = useRouter();
  const { isDarkMode, toggleTheme } = useTheme();
  const [currentSlide, setCurrentSlide] = useState(1);

  const heroImages = ['https://picsum.photos/944/1415?random=1', 'https://picsum.photos/944/1415?random=2', 'https://picsum.photos/944/1415?random=3'];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % heroImages.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + heroImages.length) % heroImages.length);
  };

  const socialLinks = [
    { name: 'Instagram', icon: PhInstagramLogoLight },
    { name: 'Pinterest', icon: PhPinterestLogoLight },
    { name: 'Behance', icon: PhBehanceLogoLight },
    { name: 'Twitter', icon: PhTwitterLogoLight },
  ];

  return (
    <div className="flex flex-col items-start w-full min-h-screen p-0 md:p-3 relative bg-bg-default transition-colors duration-300">
      <div className="flex flex-col lg:flex-row justify-center items-start gap-3 w-full h-auto">
        {/* Left Column - Hero Image */}
        <div className="flex-1 w-full lg:sticky lg:top-3 h-auto lg:h-[calc(100vh-24px)] flex items-center md:py-0">
          <div className="bg-bg-muted-2 rounded-[12px] flex-1 w-full h-full overflow-hidden relative min-h-[500px] lg:min-h-0">
            {/* Header */}
            <div className="absolute top-0 left-0 z-30 bg-bg-default rounded-br-[32px] flex items-center gap-6 md:gap-8 px-6 py-4 pr-6 transition-colors duration-300">
              <div className="flex items-center gap-[10px]">
                <div className="w-[18px] h-[18px] rounded-full border-[4px] border-text-default box-border"></div>
                <span className="text-text-default font-sans text-[14px] font-bold leading-[100%] tracking-tight">hanssen</span>
              </div>
              <div className="hidden md:flex items-center gap-6">
                {['Work', 'About', 'Blog', 'Contact'].map((item) => (
                  <button
                    key={item}
                    onClick={() => router.push(`/${item.toLowerCase()}`)}
                    className="block"
                  >
                    <AnimatedText text={item} style="text-text-default font-sans text-[12px] font-medium cursor-pointer hover:opacity-60 transition-opacity" />
                  </button>
                ))}
              </div>
              <button onClick={toggleTheme} className="w-8 h-4 bg-bg-muted-2 rounded-full relative cursor-pointer ml-2 transition-colors duration-300">
                <div className={`absolute top-1 w-2 h-2 bg-text-default rounded-full transition-all duration-300 ${isDarkMode ? 'left-5' : 'left-1'}`}></div>
              </button>
            </div>

            {/* Slider */}
            <div className="flex w-full h-full transition-transform duration-700 ease-[cubic-bezier(0.25,1,0.5,1)]" style={{ transform: `translateX(-${currentSlide * 100}%)` }}>
              {heroImages.map((img, index) => (
                <div key={index} className="min-w-full w-full h-full bg-cover bg-center" style={{ backgroundImage: `url(${img})` }}></div>
              ))}
            </div>

            {/* Selected Work Tab */}
            <div className="absolute bottom-0 right-0 bg-bg-default rounded-tl-[20px] flex items-center gap-[6px] px-[20px] py-[12px] z-10 transition-colors duration-300">
              <span className="text-text-default font-sans text-[15px] font-normal leading-[100%]">Selected Work</span>
              <div className="absolute -top-[20px] right-0">
                <RoundedEdge className="transform rotate-180 text-bg-default transition-colors duration-300" />
              </div>
              <div className="absolute bottom-0 -left-[20px]">
                <RoundedEdge className="transform rotate-180 text-bg-default transition-colors duration-300" />
              </div>
            </div>

            {/* Navigation Buttons */}
            <button
              onClick={prevSlide}
              aria-label="Previous slide"
              className="absolute top-1/2 left-4 md:left-8 -translate-y-1/2 bg-black/20 hover:bg-black/40 backdrop-blur-md rounded-[12px] flex justify-center items-center w-[40px] h-[40px] transition-all border border-white/10 text-white z-20"
            >
              <PhArrowLeftLight />
            </button>
            <button
              onClick={nextSlide}
              aria-label="Next slide"
              className="absolute top-1/2 right-4 md:right-8 -translate-y-1/2 bg-black/20 hover:bg-black/40 backdrop-blur-md rounded-[12px] flex justify-center items-center w-[40px] h-[40px] transition-all border border-white/10 text-white z-20"
            >
              <PhArrowRightLight />
            </button>

            {/* Project View Button */}
            <button
              onClick={() => router.push('/work')}
              className="absolute bottom-8 left-8 bg-bg-primary text-text-inverse px-5 py-3 rounded-[8px] flex items-center gap-2 hover:opacity-90 transition-colors z-20 shadow-lg group/btn"
            >
              <span className="font-sans text-[14px] font-medium leading-none">Project View</span>
              <div className="text-text-inverse transform -rotate-45 group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5 transition-transform">
                <PhArrowRight />
              </div>
            </button>

            {/* Carousel Dots */}
            <div className="absolute bottom-8 left-1/2 -translate-x-1/2 bg-black/40 px-2 py-2 rounded-[12px] flex items-center gap-3 z-20">
              {heroImages.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentSlide(index)}
                  className={`w-[10px] h-[10px] rounded-full cursor-pointer transition-colors ${currentSlide === index ? 'bg-white' : 'bg-white/40 hover:bg-white'}`}
                />
              ))}
            </div>
          </div>
        </div>

        {/* Right Column - Content */}
        <div className="flex flex-col flex-1 justify-center items-start gap-3 w-full py-3 md:py-0">
          {/* Bio Card */}
          <div className="flex flex-col xl:flex-row items-start gap-3 w-full">
            <div className="bg-bg-muted rounded-[12px] flex flex-col flex-1 items-start justify-between gap-12 w-full p-8 md:p-12 min-h-[405px] transition-colors duration-300">
              <div className="flex items-center gap-6">
                <div className="rounded-full w-[60px] h-[60px] overflow-hidden flex-shrink-0">
                  <div className="w-full h-full bg-cover bg-center" style={{ backgroundImage: 'url(https://picsum.photos/140/175)' }}></div>
                </div>
                <div className="flex flex-col items-start gap-2">
                  <span className="text-text-default font-sans text-[18px] font-medium leading-[120%]">Emma Hanssen</span>
                  <span className="text-text-muted font-sans text-[15px] font-normal leading-[100%]">Photographer</span>
                </div>
              </div>
              <p className="text-text-default font-sans text-[16px] font-normal leading-[160%] max-w-[500px]">
                I'm Ema, a photographer based in Prague. I capture authentic moments and tell stories through my images, blending creativity and emotion in each shot.
              </p>
            </div>

            {/* Socials */}
            <div className="flex flex-col justify-center items-start gap-4 w-full xl:w-[300px]">
              {socialLinks.map((link) => (
                <div key={link.name} className="bg-bg-muted rounded-[12px] w-full flex justify-between items-center p-6 hover:bg-bg-muted-2 transition-colors cursor-pointer group overflow-hidden">
                  <span className="text-text-default font-sans text-[14px] font-normal leading-[120%]">{link.name}</span>
                  <div className="relative w-5 h-5">
                    <div className="absolute inset-0 flex items-center justify-center transition-all duration-300 group-hover:-translate-y-[150%] group-hover:opacity-0 text-text-default">
                      <link.icon />
                    </div>
                    <div className="absolute inset-0 flex items-center justify-center transition-all duration-300 translate-y-[150%] opacity-0 group-hover:translate-y-0 group-hover:opacity-100 text-text-default">
                      <PhArrowRight className="w-5 h-5 transform -rotate-45" />
                    </div>
                  </div>
                </div>
              ))}

              <button onClick={() => router.push('/contact')} className="bg-bg-primary rounded-[12px] w-full flex justify-between items-center p-6 transition-colors cursor-pointer group overflow-hidden">
                <span className="text-text-inverse font-sans text-[14px] font-normal leading-[120%]">Contact Me</span>
                <div className="relative w-5 h-5 text-text-inverse">
                  <div className="absolute inset-0 flex items-center justify-center transition-all duration-300 group-hover:-translate-y-[150%] group-hover:opacity-0">
                    <PhEnvelopeSimpleLight />
                  </div>
                  <div className="absolute inset-0 flex items-center justify-center transition-all duration-300 translate-y-[150%] opacity-0 group-hover:translate-y-0 group-hover:opacity-100">
                    <PhArrowRight className="w-5 h-5" />
                  </div>
                </div>
              </button>
            </div>
          </div>

          {/* Latest Work Section */}
          <div className="bg-bg-muted rounded-[12px] flex justify-between items-center w-full my-2 px-8 py-6 transition-colors duration-300">
            <div className="flex items-center gap-2">
              <span className="text-text-default font-sans text-[15px] font-normal leading-[100%]">Latest Work</span>
              <div className="w-4 h-4 text-text-default">
                <PhArrowDownLight />
              </div>
            </div>
            <button onClick={() => router.push('/work')} className="flex flex-col justify-center items-start gap-[2px] cursor-pointer group">
              <span className="text-text-default font-sans text-[14px] font-normal leading-[100%]">View All</span>
              <div className="bg-text-default h-[1.5px] w-full transform scale-x-100 group-hover:scale-x-50 transition-transform origin-left"></div>
            </button>
          </div>

          {/* Projects Grid */}
          <div className="flex flex-col items-start gap-3 w-full">
            {[
              ['Beige', 'Darkness'],
              ['Portrait', 'Abstract'],
              ['Fashion', 'Urban'],
              ['Minimal', 'Editorial'],
            ].map((row, rowIdx) => (
              <div key={rowIdx} className="flex flex-col md:flex-row items-start gap-3 w-full">
                {row.map((tag) => (
                  <button
                    key={tag}
                    onClick={() => router.push('/work')}
                    className="bg-bg-primary rounded-[12px] flex-1 w-full h-[497px] overflow-hidden relative group cursor-pointer"
                  >
                    <div
                      className="w-full h-full bg-cover bg-center transition-all duration-700 ease-out opacity-80 group-hover:opacity-100 blur-0 group-hover:blur-sm scale-100 group-hover:scale-105"
                      style={{ backgroundImage: `url(https://picsum.photos/500/666)` }}
                    ></div>
                    <div className="absolute top-0 left-0 bg-bg-default rounded-br-[20px] flex items-start gap-[6px] px-4 py-2 pb-3 z-10 transition-colors duration-300">
                      <AnimatedTag text={tag} />
                      <div className="absolute -bottom-[20px] left-0">
                        <RoundedEdge className="text-bg-default transition-colors duration-300" />
                      </div>
                      <div className="absolute top-0 -right-[20px]">
                        <RoundedEdge className="text-bg-default transition-colors duration-300" />
                      </div>
                    </div>
                  </button>
                ))}
              </div>
            ))}
          </div>

          {/* Footer Navigation */}
          <div className="bg-bg-muted rounded-[12px] flex justify-between items-center w-full my-2 px-8 py-6 transition-colors duration-300">
            <span className="text-text-default font-sans text-[14px] font-normal leading-[100%]">All Projects</span>
            <button onClick={() => router.push('/work')} className="flex flex-col justify-center items-start gap-[2px] cursor-pointer group">
              <span className="text-text-default font-sans text-[14px] font-normal leading-[100%]">View All</span>
              <div className="bg-text-default h-[1.5px] w-full transform scale-x-100 group-hover:scale-x-50 transition-transform origin-left"></div>
            </button>
          </div>

          {/* Social Links Grid */}
          <div className="grid grid-cols-2 w-full gap-3">
            {socialLinks.map((link) => (
              <div key={link.name} className="bg-bg-muted rounded-[12px] w-full flex justify-between items-center p-6 hover:bg-bg-muted-2 transition-colors cursor-pointer group overflow-hidden">
                <span className="text-text-default font-sans text-[14px] font-normal leading-[120%]">{link.name}</span>
                <div className="relative w-5 h-5">
                  <div className="absolute inset-0 flex items-center justify-center transition-all duration-300 group-hover:-translate-y-[150%] group-hover:opacity-0 text-text-default">
                    <link.icon />
                  </div>
                  <div className="absolute inset-0 flex items-center justify-center transition-all duration-300 translate-y-[150%] opacity-0 group-hover:translate-y-0 group-hover:opacity-100 text-text-default">
                    <PhArrowRight className="w-5 h-5 transform -rotate-45" />
                  </div>
                </div>
              </div>
            ))}
          </div>

          <button onClick={() => router.push('/contact')} className="bg-bg-primary rounded-[12px] w-full flex justify-between items-center p-6 transition-colors cursor-pointer group overflow-hidden">
            <span className="text-text-inverse font-sans text-[14px] font-normal leading-[120%]">Contact Me</span>
            <div className="relative w-5 h-5 text-text-inverse">
              <div className="absolute inset-0 flex items-center justify-center transition-all duration-300 group-hover:-translate-y-[150%] group-hover:opacity-0">
                <PhEnvelopeSimpleLight />
              </div>
              <div className="absolute inset-0 flex items-center justify-center transition-all duration-300 translate-y-[150%] opacity-0 group-hover:translate-y-0 group-hover:opacity-100">
                <PhArrowRight className="w-5 h-5" />
              </div>
            </div>
          </button>

          {/* Footer */}
          <div className="flex flex-col items-start gap-3 w-full mt-4">
            <div className="bg-bg-primary rounded-[12px] flex flex-col items-start gap-20 w-full p-8 md:p-16">
              <div className="flex flex-col md:flex-row justify-between items-center w-full gap-8 md:gap-0">
                <div className="flex items-center gap-4">
                  <div className="rounded-full w-[60px] h-[60px] overflow-hidden flex-shrink-0">
                    <div className="w-full h-full bg-cover bg-center" style={{ backgroundImage: 'url(https://picsum.photos/140/175)' }}></div>
                  </div>
                  <div className="flex flex-col items-start gap-2">
                    <span className="text-text-inverse font-sans text-[18px] font-normal leading-[120%]">Ema Hanssen</span>
                    <span className="text-text-inverse-muted font-sans text-[15px] font-normal leading-[100%]">Photographer</span>
                  </div>
                </div>
              </div>

              <div className="flex flex-col md:flex-row items-start gap-16 w-full">
                <div className="flex flex-col flex-1 items-start gap-8 w-full">
                  <span className="text-text-inverse font-sans text-[16px] font-normal leading-[140%]">Pages</span>
                  <div className="flex flex-col items-start gap-4 w-full">
                    <button onClick={() => router.push('/')} className="block">
                      <AnimatedText text="Portfolio" style="group text-text-inverse-muted font-sans text-[14px] font-normal leading-[110%] cursor-pointer hover:text-text-inverse" />
                    </button>
                    <button onClick={() => router.push('/about')} className="block">
                      <AnimatedText text="About" style="group text-text-inverse-muted font-sans text-[14px] font-normal leading-[110%] cursor-pointer hover:text-text-inverse" />
                    </button>
                    <button onClick={() => router.push('/contact')} className="block">
                      <AnimatedText text="Contact" style="group text-text-inverse-muted font-sans text-[14px] font-normal leading-[110%] cursor-pointer hover:text-text-inverse" />
                    </button>
                  </div>
                </div>
                <div className="flex flex-col flex-1 items-start gap-8 w-full">
                  <span className="text-text-inverse font-sans text-[16px] font-normal leading-[140%]">CMS</span>
                  <div className="flex flex-col items-start gap-4 w-full">
                    <button onClick={() => router.push('/work')} className="block">
                      <AnimatedText text="Work" style="group text-text-inverse-muted font-sans text-[14px] font-normal leading-[110%] cursor-pointer hover:text-text-inverse" />
                    </button>
                    <button onClick={() => router.push('/blog')} className="block">
                      <AnimatedText text="Blog" style="group text-text-inverse-muted font-sans text-[14px] font-normal leading-[110%] cursor-pointer hover:text-text-inverse" />
                    </button>
                  </div>
                </div>
                <div className="flex flex-col flex-1 items-start gap-8 w-full">
                  <span className="text-text-inverse font-sans text-[16px] font-normal leading-[140%]">Utility</span>
                  <div className="flex flex-col items-start gap-4 w-full">
                    <button onClick={() => router.push('/404')} className="block">
                      <AnimatedText text="404" style="group text-text-inverse-muted font-sans text-[14px] font-normal leading-[110%] cursor-pointer hover:text-text-inverse" />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
