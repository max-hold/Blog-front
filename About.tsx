import React from "react";
import {RoundedEdge, PhArrowRight, PhInstagramLogoLight, PhPinterestLogoLight, PhBehanceLogoLight, PhTwitterLogoLight, PhEnvelopeSimpleLight} from "@/components/Icons";

interface AboutProps {
  onNavigate: (page: "home" | "work" | "about" | "contact" | "blog" | "blog-single" | "404") => void;
  isDarkMode: boolean;
  toggleTheme: () => void;
}

const AnimatedText = ({text, style, textSize = "text-[15px]"}: {text: string; style: string; textSize?: string}) => (
  <div className="relative overflow-hidden block group cursor-pointer">
    {/* Spacer to reserve size including arrow */}
    <div className="flex items-center gap-1 opacity-0 pointer-events-none">
      <span className={`${style}`}>{text}</span>
    </div>

    {/* Default State: Text Only (Centered vertically in context of absolute inset) */}
    <div className="absolute inset-0 flex items-center gap-1 transition-transform duration-500 ease-[cubic-bezier(0.25,1,0.5,1)] group-hover:-translate-y-full">
      <span className={`${style}`}>{text}</span>
    </div>

    {/* Hover State: Text + Arrow */}
    <div className="absolute inset-0 flex items-center gap-1 transition-transform duration-500 ease-[cubic-bezier(0.25,1,0.5,1)] translate-y-full group-hover:translate-y-0">
      <span className={`${style}`}>{text}</span>
    </div>
  </div>
);

export default function About({onNavigate, isDarkMode, toggleTheme}: AboutProps) {
  const socialLinks = [
    {name: "Instagram", icon: PhInstagramLogoLight},
    {name: "Pinterest", icon: PhPinterestLogoLight},
    {name: "Behance", icon: PhBehanceLogoLight},
    {name: "Twitter", icon: PhTwitterLogoLight},
  ];

  const clients = ["Acme Black", "Kanba Black", "Goldline Black", "Asgardia Black"];

  const exhibitions = [
    {title: "Through the Lens", year: "2024"},
    {title: "Candid Connections", year: "2024"},
    {title: "Urban Stories", year: "2023"},
    {title: "Nature's Palette", year: "2023"},
    {title: "Moments Unseen", year: "2022"},
    {title: "Reflections of Prague", year: "2022"},
  ];

  const awards = [
    {title: "Prague Photography Award", year: "2024"},
    {title: "European Fine Art Photography", year: "2024"},
    {title: "Best Urban Photography", year: "2023"},
    {title: "Nature Photographer of the Year", year: "2023"},
    {title: "Candid Moments Award", year: "2022"},
    {title: "Excellence in Visual Storytelling", year: "2022"},
  ];

  const handleNavClick = (item: string) => {
    if (item === "Portfolio") onNavigate("home");
    if (item === "Work") onNavigate("work");
    if (item === "About") onNavigate("about");
    if (item === "Contact") onNavigate("contact");
    if (item === "Blog") onNavigate("blog");
  };

  return (
    <div className="flex flex-col items-start w-full min-h-screen p-0 md:p-3 relative bg-bg-default transition-colors duration-300">
      <div className="flex flex-col lg:flex-row justify-center items-start gap-3 w-full h-auto">
        {/* Left Column - Sticky Hero */}
        <div className="flex-1 w-full lg:sticky lg:top-3 h-auto lg:h-[calc(100vh-24px)] flex items-center md:py-0">
          <div className="bg-bg-muted-2 rounded-[12px] flex-1 w-full h-full overflow-hidden relative min-h-[500px] lg:min-h-0">
            {/* Header - Integrated Top Left */}
            <div className="absolute top-0 left-0 z-30 bg-bg-default rounded-br-[32px] flex items-center gap-6 md:gap-8 px-6 py-4 pr-6 transition-colors duration-300">
              <div className="flex items-center gap-[10px]">
                <div className="w-[18px] h-[18px] rounded-full border-[4px] border-text-default box-border"></div>
                <span className="text-text-default font-sans text-[14px] font-bold leading-[100%] tracking-tight">hanssen</span>
              </div>
              <div className="hidden md:flex items-center gap-6">
                {["Work", "About", "Blog", "Contact"].map((item) => (
                  <span key={item} onClick={() => handleNavClick(item)} className="block">
                    <AnimatedText text={item} style="text-text-default font-sans text-[12px] font-medium cursor-pointer hover:opacity-60 transition-opacity" />
                  </span>
                ))}
              </div>
              <div onClick={toggleTheme} className="w-8 h-4 bg-bg-muted-2 rounded-full relative cursor-pointer ml-2 transition-colors duration-300">
                <div className={`absolute top-1 w-2 h-2 bg-text-default rounded-full transition-all duration-300 ${isDarkMode ? "left-5" : "left-1"}`}></div>
              </div>
            </div>

            <div className="w-full h-full bg-cover bg-center" style={{backgroundImage: "url(https://picsum.photos/944/1415?random=99)"}}></div>

            {/* About Label - Bottom Right */}
            <div className="absolute bottom-0 right-0 bg-bg-default rounded-tl-[20px] flex items-center gap-[6px] px-[20px] py-[12px] z-10 transition-colors duration-300">
              <span className="text-text-default font-sans text-[15px] font-normal leading-[100%]">About</span>
              {/* Filler Top */}
              <div className="absolute -top-[20px] right-0">
                <RoundedEdge className="transform rotate-180 text-bg-default transition-colors duration-300" />
              </div>
              {/* Filler Left */}
              <div className="absolute bottom-0 -left-[20px]">
                <RoundedEdge className="transform rotate-180 text-bg-default transition-colors duration-300" />
              </div>
            </div>
          </div>
        </div>

        {/* Right Column - Scrollable Content */}
        <div className="flex flex-col flex-1 justify-center items-start gap-3 w-full py-3 md:py-0">
          {/* Bio & Socials Row */}
          <div className="flex flex-col xl:flex-row items-start gap-3 w-full">
            {/* Bio Card */}
            <div className="bg-bg-muted rounded-[12px] flex flex-col flex-1 items-start justify-between gap-12 w-full p-8 md:p-12 min-h-[355px] transition-colors duration-300">
              <div className="flex items-center gap-6">
                <div className="rounded-full w-[80px] h-[80px] overflow-hidden flex-shrink-0">
                  <div className="w-full h-full bg-cover bg-center" style={{backgroundImage: "url(https://picsum.photos/140/175)"}}></div>
                </div>
                <div className="flex flex-col items-start gap-2">
                  <span className="text-text-default font-sans text-[18px] font-normal leading-[120%]">Emma Hanssen</span>
                  <span className="text-text-muted font-sans text-[15px] font-normal leading-[100%]">Photographer</span>
                </div>
              </div>
              <p className="text-text-default font-sans text-[16px] font-normal leading-[160%] max-w-[500px]">
                I'm Ema, a photographer based in Prague. I capture authentic moments and tell stories through my images, blending creativity and emotion in each shot.
              </p>
            </div>

            {/* Socials Grid */}
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

              <div onClick={() => onNavigate("contact")} className="bg-bg-primary rounded-[12px] w-full flex justify-between items-center p-6 transition-colors cursor-pointer group overflow-hidden">
                <span className="text-text-inverse font-sans text-[14px] font-normal leading-[120%]">Contact Me</span>
                <div className="relative w-5 h-5 text-text-inverse">
                  <div className="absolute inset-0 flex items-center justify-center transition-all duration-300 group-hover:-translate-y-[150%] group-hover:opacity-0">
                    <PhEnvelopeSimpleLight />
                  </div>
                  <div className="absolute inset-0 flex items-center justify-center transition-all duration-300 translate-y-[150%] opacity-0 group-hover:translate-y-0 group-hover:opacity-100">
                    <PhArrowRight className="w-5 h-5" />
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* About Text Card */}
          <div className="bg-bg-muted rounded-[12px] flex flex-col items-start gap-16 md:gap-32 w-full p-8 md:p-12 transition-colors duration-300">
            <h1 className="text-text-default font-sans text-[32px] font-normal leading-[120%]">About</h1>
            <p className="text-text-default font-sans text-[16px] font-normal leading-[160%] max-w-[600px]">
              With a focus on both candid moments and stunning landscapes, I strive to evoke emotion and tell stories through my work. My photography blends the rawness of everyday life with the
              artistry of fine art, allowing viewers to connect with each image on a deeper level.
              <br />
              <br />
              Whether I’m exploring urban environments or venturing into nature, my goal is to highlight the extraordinary in the ordinary. Through my lens, I invite you to join me on this visual
              journey of discovery and inspiration.
            </p>
          </div>

          {/* Clients Card */}
          <div className="bg-bg-muted rounded-[12px] flex flex-col items-start w-full p-8 md:p-12 transition-colors duration-300 gap-8">
            <span className="text-text-default font-sans text-[18px] font-normal leading-[120%]">Clients</span>
            <div className="flex flex-wrap items-center gap-x-12 gap-y-8 opacity-60">
              {/* Simulating logos with styled text for clean implementation without 6 new files */}
              {clients.map((client) => (
                <span key={client} className="text-text-default font-sans text-[20px] font-bold tracking-tight uppercase">
                  {client.replace(" Black", "")}
                </span>
              ))}
            </div>
          </div>

          {/* Exhibitions */}
          <div className="bg-bg-muted rounded-[12px] flex flex-col items-start w-full p-8 md:p-12 transition-colors duration-300 gap-16 md:gap-32">
            <div className="flex flex-col gap-4">
              <h2 className="text-text-default font-sans text-[32px] font-normal leading-[110%]">Exhibitions</h2>
              <p className="text-text-default font-sans text-[16px] font-normal leading-[160%] max-w-[500px]">
                Discover a curated collection of my photography work, capturing moments of emotion, nature, and urban life in stunning detail.
              </p>
            </div>
            <div className="w-full flex flex-col gap-0">
              {exhibitions.map((item, i) => (
                <div key={i} className="flex justify-between items-center py-6 border-b border-text-muted/10 last:border-0">
                  <span className="text-text-default font-sans text-[18px] font-normal leading-[120%]">{item.title}</span>
                  <span className="text-text-default font-sans text-[15px] font-normal leading-[100%]">{item.year}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Awards */}
          <div className="bg-bg-muted rounded-[12px] flex flex-col items-start w-full p-8 md:p-12 transition-colors duration-300 gap-16 md:gap-32">
            <div className="flex flex-col gap-4">
              <h2 className="text-text-default font-sans text-[32px] font-normal leading-[110%]">Awards & Recognitions</h2>
              <p className="text-text-default font-sans text-[16px] font-normal leading-[160%] max-w-[500px]">
                Honored to receive multiple awards for excellence in photography, recognizing my creative vision and commitment to capturing compelling visual stories.
              </p>
            </div>
            <div className="w-full flex flex-col gap-0">
              {awards.map((item, i) => (
                <div key={i} className="flex justify-between items-center py-6 border-b border-text-muted/10 last:border-0">
                  <span className="text-text-default font-sans text-[18px] font-normal leading-[120%]">{item.title}</span>
                  <span className="text-text-default font-sans text-[15px] font-normal leading-[100%]">{item.year}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Footer */}
          <div className="flex flex-col items-start gap-3 w-full mt-4">
            <div className="bg-bg-primary rounded-[12px] flex flex-col items-start gap-20 w-full p-8 md:p-16">
              {/* Footer Top */}
              <div className="flex flex-col md:flex-row justify-between items-center w-full gap-8 md:gap-0">
                <div className="flex items-center gap-4">
                  <div className="rounded-full w-[60px] h-[60px] overflow-hidden flex-shrink-0">
                    <div className="w-full h-full bg-cover bg-center" style={{backgroundImage: "url(https://picsum.photos/140/175)"}}></div>
                  </div>
                  <div className="flex flex-col items-start gap-2">
                    <span className="text-text-inverse font-sans text-[18px] font-normal leading-[120%]">Ema Hanssen</span>
                    <span className="text-text-inverse-muted font-sans text-[15px] font-normal leading-[100%]">Photographer</span>
                  </div>
                </div>
                <div className="bg-bg-muted rounded-[6px] flex justify-center items-center gap-2 py-2 px-3 cursor-pointer hover:bg-bg-muted-2 transition-colors">
                  <span className="text-text-default font-sans text-[14px] font-normal leading-[100%]">More Templates</span>
                  <PhArrowRight className="w-5 h-5 transform -rotate-45 text-text-default" />
                </div>
              </div>

              {/* Footer Bottom */}
              <div className="flex flex-col md:flex-row items-start gap-16 w-full">
                <div className="flex flex-col flex-1 items-start gap-8 w-full">
                  <span className="text-text-inverse font-sans text-[16px] font-normal leading-[140%]">Pages</span>
                  <div className="flex flex-col items-start gap-4 w-full ">
                    <span onClick={() => onNavigate("home")} className="block">
                      <AnimatedText text="Portfolio" style="group text-text-inverse-muted font-sans text-[14px] font-normal leading-[110%] cursor-pointer hover:text-text-inverse" />
                    </span>
                    <span onClick={() => onNavigate("about")} className="block">
                      <AnimatedText text="About" style="group text-text-inverse-muted font-sans text-[14px] font-normal leading-[110%] cursor-pointer hover:text-text-inverse" />
                    </span>
                    <span onClick={() => onNavigate("contact")} className="block">
                      <AnimatedText text="Contact" style="group text-text-inverse-muted font-sans text-[14px] font-normal leading-[110%] cursor-pointer hover:text-text-inverse" />
                    </span>
                  </div>
                </div>
                <div className="flex flex-col flex-1 items-start gap-8 w-full">
                  <span className="text-text-inverse font-sans text-[16px] font-normal leading-[140%]">CMS</span>
                  <div className="flex flex-col items-start gap-4 w-full ">
                    <span onClick={() => onNavigate("work")} className="block">
                      <AnimatedText text="Work" style="group text-text-inverse-muted font-sans text-[14px] font-normal leading-[110%] cursor-pointer hover:text-text-inverse" />
                    </span>
                    <AnimatedText text="Work Single" style="group text-text-inverse-muted font-sans text-[14px] font-normal leading-[110%] cursor-pointer hover:text-text-inverse" />
                    <span onClick={() => onNavigate("blog")} className="block">
                      <AnimatedText text="Blog" style="group text-text-inverse-muted font-sans text-[14px] font-normal leading-[110%] cursor-pointer hover:text-text-inverse" />
                    </span>
                  </div>
                </div>
                <div className="flex flex-col flex-1 items-start gap-8 w-full">
                  <span className="text-text-inverse font-sans text-[16px] font-normal leading-[140%]">Utility</span>
                  <div className="flex flex-col items-start gap-4 w-full">
                    <span onClick={() => onNavigate("404")} className="block">
                      <AnimatedText text="404" style="group text-text-inverse-muted font-sans text-[14px] font-normal leading-[110%] cursor-pointer hover:text-text-inverse" />
                    </span>
                    <AnimatedText text="Licensing" style="group text-text-inverse-muted font-sans text-[14px] font-normal leading-[110%] cursor-pointer hover:text-text-inverse" />
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
