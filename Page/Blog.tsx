import React from "react";
import {RoundedEdge, PhArrowRight, PhEnvelopeSimpleLight} from "@/components/Icons";

interface BlogProps {
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

export default function Blog({onNavigate, isDarkMode, toggleTheme}: BlogProps) {
  const posts = [
    {title: "Mastering Light: Techniques for Stunning Urban Photography", image: "https://picsum.photos/480/640?random=101", bg: "bg-bg-primary", textColor: "text-text-inverse"},
    {title: "The Art of Candid Moments: Creating Authentic Lifestyle Images", image: "https://picsum.photos/482/723?random=102", bg: "bg-bg-primary", textColor: "text-text-inverse"},
    {title: "Transforming Landscapes: Finding Beauty in Nature's Details", image: "https://picsum.photos/500/663?random=103", bg: "bg-bg-primary", textColor: "text-text-inverse"},
    {title: "Creating Impact: The Power of Black-and-White Portraits", image: "https://picsum.photos/500/625?random=104", bg: "bg-bg-primary", textColor: "text-text-inverse"},
    {title: "Beyond the Frame: Exploring Conceptual Fine Art Photography", image: "https://picsum.photos/480/600?random=105", bg: "bg-bg-primary", textColor: "text-text-inverse"},
    {title: "Adventure Awaits: Photographing the Thrill of Outdoor Exploration", image: "https://picsum.photos/480/640?random=106", bg: "bg-text-default", textColor: "text-bg-default"},
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

            {/* Featured Image */}
            <div className="w-full h-full bg-cover bg-center" style={{backgroundImage: "url(https://picsum.photos/1000/1333?random=200)"}}>
              {/* Floating "New" Card */}
              <div
                onClick={() => onNavigate("blog-single")}
                className="absolute bottom-16 left-6 right-6 md:left-12 md:right-12 bg-bg-default rounded-[10px] p-4 flex flex-col md:flex-row justify-between items-center gap-4 shadow-lg transition-colors duration-300 cursor-pointer">
                <div className="flex items-center gap-3">
                  <div className="bg-bg-primary text-text-inverse px-2 py-1.5 rounded-[4px] text-[12px] leading-none">New</div>
                  <span className="text-text-default font-sans text-[15px] font-normal leading-[140%] max-w-[300px]">Capturing the Essence: How to Tell Stories Through Photography</span>
                </div>
                <div className="flex flex-col items-start gap-[2px] cursor-pointer group">
                  <span className="text-text-default font-sans text-[14px] font-normal leading-[100%]">Read</span>
                  <div className="bg-text-default h-[1px] w-full transform scale-x-100 group-hover:scale-x-50 transition-transform origin-left"></div>
                </div>
              </div>
            </div>

            {/* Blog Label - Bottom Right */}
            <div className="absolute bottom-0 right-0 bg-bg-default rounded-tl-[20px] flex items-center gap-[6px] px-[20px] py-[12px] z-10 transition-colors duration-300">
              <span className="text-text-default font-sans text-[15px] font-normal leading-[100%]">Blog</span>
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
          <div className="bg-bg-muted rounded-[12px] flex flex-col items-start w-full p-8 md:p-12 transition-colors duration-300 gap-32">
            <h1 className="text-text-default font-sans text-[40px] font-normal leading-[120%]">Journal</h1>
            <div className="flex flex-col md:flex-row justify-between items-end w-full gap-6">
              <p className="text-text-default font-sans text-[16px] font-normal leading-[160%] max-w-[500px]">
                Explore photography tips, behind-the-scenes insights, and creative inspiration from my projects and personal work.
              </p>
              <button
                onClick={() => window.scrollTo({top: window.innerHeight, behavior: "smooth"})}
                className="bg-bg-muted-2 text-text-default px-4 py-3 rounded-[6px] text-[14px] font-medium hover:opacity-80 transition-opacity">
                Explore
              </button>
            </div>
          </div>

          {/* Posts Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3 w-full">
            {posts.map((post, index) => (
              <div key={index} onClick={() => onNavigate("blog-single")} className={`${post.bg} rounded-[12px] overflow-hidden flex flex-col h-[600px] relative group cursor-pointer`}>
                <div className="w-full h-full bg-cover bg-center transition-transform duration-700 ease-out group-hover:scale-105" style={{backgroundImage: `url(${post.image})`}}></div>

                {/* Floating Card inside Post */}
                <div className="absolute bottom-6 left-6 right-6 bg-bg-default rounded-[10px] p-6 flex justify-between items-end gap-4 shadow-sm transition-colors duration-300">
                  <span className="text-text-default font-sans text-[15px] font-normal leading-[140%] flex-1">{post.title}</span>
                  <div className="flex flex-col items-start gap-[2px] cursor-pointer group/btn flex-shrink-0">
                    <span className="text-text-default font-sans text-[14px] font-normal leading-[100%]">Read</span>
                    <div className="bg-text-default h-[1px] w-full transform scale-x-100 group-hover/btn:scale-x-50 transition-transform origin-left"></div>
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
