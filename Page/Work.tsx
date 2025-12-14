import React, {useState} from "react";
import {RoundedEdge, PhArrowRightLight, PhEnvelopeSimpleLight, PhArrowRight} from "@/components/Icons";

interface WorkProps {
  onNavigate: (page: "home" | "work" | "about" | "contact" | "blog" | "blog-single" | "404") => void;
  isDarkMode: boolean;
  toggleTheme: () => void;
}

const AnimatedTag = ({text, textSize = "text-[15px]"}: {text: string; textSize?: string}) => (
  <div className="relative overflow-hidden block">
    {/* Spacer to reserve size including arrow */}
    <div className="flex items-center gap-1 opacity-0 pointer-events-none">
      <span className={`text-text-default font-sans ${textSize} font-normal leading-[100%]`}>{text}</span>
      <PhArrowRight />
    </div>

    {/* Default State: Text Only (Centered vertically in context of absolute inset) */}
    <div className="absolute inset-0 flex items-center gap-1 transition-transform duration-500 ease-[cubic-bezier(0.25,1,0.5,1)] group-hover:-translate-y-full">
      <span className={`text-text-default font-sans ${textSize} font-normal leading-[100%]`}>{text}</span>
    </div>

    {/* Hover State: Text + Arrow */}
    <div className="absolute inset-0 flex items-center gap-1 transition-transform duration-500 ease-[cubic-bezier(0.25,1,0.5,1)] translate-y-full group-hover:translate-y-0">
      <span className={`text-text-default font-sans ${textSize} font-normal leading-[100%]`}>{text}</span>
      <PhArrowRight />
    </div>
  </div>
);

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

export default function Work({onNavigate, isDarkMode, toggleTheme}: WorkProps) {
  const [activeWorkIndex, setActiveWorkIndex] = useState(0);

  const works = [
    {name: "Beige", type: "Commercial", year: "2024", bg: "bg-bg-muted-2", image: "https://picsum.photos/944/1415?random=1"},
    {name: "Darkness", type: "Commercial", year: "2024", bg: "bg-bg-muted", image: "https://picsum.photos/944/1415?random=2"},
    {name: "Gentlemen", type: "Editorial", year: "2024", bg: "bg-bg-muted", image: "https://picsum.photos/944/1415?random=3"},
    {name: "City", type: "Commercial", year: "2024", bg: "bg-bg-muted", image: "https://picsum.photos/944/1415?random=4"},
    {name: "Nature", type: "Editorial", year: "2024", bg: "bg-bg-muted", image: "https://picsum.photos/944/1415?random=5"},
    {name: "Brand", type: "Editorial", year: "2024", bg: "bg-bg-muted", image: "https://picsum.photos/944/1415?random=6"},
    {name: "Studio", type: "Commercial", year: "2024", bg: "bg-bg-muted", image: "https://picsum.photos/944/1415?random=7"},
    {name: "Colors", type: "Editorial", year: "2024", bg: "bg-bg-muted", image: "https://picsum.photos/944/1415?random=8"},
    {name: "Duo", type: "Commercial", year: "2024", bg: "bg-bg-muted", image: "https://picsum.photos/944/1415?random=9"},
    {name: "Elegance", type: "Editorial", year: "2024", bg: "bg-bg-muted", image: "https://picsum.photos/944/1415?random=10"},
    {name: "Hat", type: "Commercial", year: "2024", bg: "bg-bg-muted", image: "https://picsum.photos/944/1415?random=11"},
    {name: "Black & White", type: "Editorial", year: "2024", bg: "bg-bg-muted", image: "https://picsum.photos/944/1415?random=12"},
    {name: "Streets", type: "Commercial", year: "2024", bg: "bg-bg-muted", image: "https://picsum.photos/944/1415?random=13"},
    {name: "Stoic", type: "Commercial", year: "2024", bg: "bg-bg-muted", image: "https://picsum.photos/944/1415?random=14"},
  ];

  const activeWork = works[activeWorkIndex];

  const handleNavClick = (item: string) => {
    if (item === "Work") onNavigate("work");
    if (item === "Portfolio") onNavigate("home");
    if (item === "About") onNavigate("about");
    if (item === "Contact") onNavigate("contact");
    if (item === "Blog") onNavigate("blog");
  };

  return (
    <div className="flex flex-col items-start w-full min-h-screen p-0 md:p-3 relative bg-bg-default transition-colors duration-300">
      <div className="flex flex-col lg:flex-row justify-center items-start gap-3 w-full h-auto">
        {/* Left Column - Hero Image */}
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

            <div
              key={activeWorkIndex} // Forces a re-render to trigger fade if we were using a fading component, but here helps ensure fresh render. For smooth cross-fade, CSS opacity/absolute positioning would be needed.
              className="w-full h-full bg-cover bg-center transition-all duration-500 ease-in-out"
              style={{backgroundImage: `url(${activeWork.image})`}}></div>

            {/* Selected Work Tag - Bottom Right */}
            <div className="absolute bottom-0 right-0 bg-bg-default rounded-tl-[20px] flex items-center gap-[6px] px-[20px] py-[12px] z-10 transition-colors duration-300">
              <span className="text-text-default font-sans text-[15px] font-normal leading-[100%] transition-all duration-300">{activeWork.name}</span>
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
          {/* Header Card */}
          <div className="bg-bg-muted rounded-[12px] flex flex-col items-start gap-32 w-full p-12 transition-colors duration-300">
            <h1 className="text-text-default font-sans text-[40px] font-normal leading-[120%]">Work</h1>
            <p className="text-text-default font-sans text-[16px] font-normal leading-[160%] max-w-[500px]">
              My work captures authentic moments. From portraits to landscapes, I create visually striking images that resonate deeply.
            </p>
          </div>

          {/* Project List */}
          <div className="flex flex-col items-start gap-3 w-full">
            {works.map((work, index) => (
              <div
                key={index}
                onMouseEnter={() => setActiveWorkIndex(index)}
                className={`${work.bg} rounded-[12px] flex justify-between items-center w-full px-8 py-6 cursor-pointer hover:bg-bg-muted-2 transition-colors group`}>
                <span className="text-text-default font-sans text-[18px] font-normal leading-[90%]">{work.name}</span>
                <div className="flex items-center gap-8">
                  <span className="text-text-default font-sans text-[14px] font-normal leading-[120%] hidden md:block transition-transform duration-300 group-hover:-translate-x-2">{work.type}</span>
                  <span className="text-text-default font-sans text-[14px] font-normal leading-[120%] transition-transform duration-300 group-hover:-translate-x-2">{work.year}</span>
                  <div className={`w-4 h-4 text-text-default transition-all duration-300 ease-out transform ${"opacity-0 translate-x-2 group-hover:opacity-100 group-hover:translate-x-0"}`}>
                    <PhArrowRightLight />
                  </div>
                </div>
              </div>
            ))}
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
