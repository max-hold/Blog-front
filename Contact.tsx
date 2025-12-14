import React, {useState} from "react";
import {RoundedEdge, PhArrowRight, PhInstagramLogoLight, PhPinterestLogoLight, PhBehanceLogoLight, PhTwitterLogoLight, PhEnvelopeSimpleLight} from "@/components/Icons";

interface ContactProps {
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

export default function Contact({onNavigate, isDarkMode, toggleTheme}: ContactProps) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const {name, value} = e.target;
    // Simple input sanitization: prevent HTML tags
    const sanitizedValue = value.replace(/<[^>]*>?/gm, "");
    setFormData((prev) => ({
      ...prev,
      [name]: sanitizedValue,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    alert("Message sent! (Simulation)");
    setFormData({name: "", email: "", message: ""});
  };

  const socialLinks = [
    {name: "Instagram", icon: PhInstagramLogoLight},
    {name: "Pinterest", icon: PhPinterestLogoLight},
    {name: "Behance", icon: PhBehanceLogoLight},
    {name: "Twitter", icon: PhTwitterLogoLight},
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

            <div className="w-full h-full bg-cover bg-center" style={{backgroundImage: "url(https://picsum.photos/944/1415?random=50)"}}></div>

            {/* Contact Label - Bottom Right */}
            <div className="absolute bottom-0 right-0 bg-bg-default rounded-tl-[20px] flex items-center gap-[6px] px-[20px] py-[12px] z-10 transition-colors duration-300">
              <span className="text-text-default font-sans text-[15px] font-normal leading-[100%]">Contact</span>
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
          {/* Let's Talk Form */}
          <div className="bg-bg-muted rounded-[12px] flex flex-col items-start w-full p-8 md:p-12 transition-colors duration-300 gap-12">
            <h1 className="text-text-default font-sans text-[40px] font-normal leading-[120%]">Let's Talk</h1>

            <form onSubmit={handleSubmit} className="flex flex-col gap-3 w-full">
              <div className="flex flex-col md:flex-row gap-3 w-full">
                <input
                  type="text"
                  name="name"
                  placeholder="Your Name"
                  value={formData.name}
                  onChange={handleInputChange}
                  className="flex-1 bg-bg-default rounded-[6px] px-6 py-4 text-text-default placeholder:text-text-muted focus:outline-none focus:ring-1 focus:ring-text-default/20 transition-colors"
                  required
                />
                <input
                  type="email"
                  name="email"
                  placeholder="Your Email"
                  value={formData.email}
                  onChange={handleInputChange}
                  className="flex-1 bg-bg-default rounded-[6px] px-6 py-4 text-text-default placeholder:text-text-muted focus:outline-none focus:ring-1 focus:ring-text-default/20 transition-colors"
                  required
                />
              </div>
              <textarea
                name="message"
                placeholder="Your Message"
                value={formData.message}
                onChange={handleInputChange}
                className="w-full bg-bg-default rounded-[6px] px-6 py-4 text-text-default placeholder:text-text-muted min-h-[120px] resize-y focus:outline-none focus:ring-1 focus:ring-text-default/20 transition-colors"
                required
              />
              <button type="submit" className="self-start bg-bg-primary text-text-inverse px-6 py-3 rounded-[6px] text-[14px] font-medium hover:opacity-90 transition-opacity w-full">
                Send Message
              </button>
            </form>
          </div>

          {/* Prague Studio & Socials */}
          <div className="bg-bg-muted rounded-[12px] flex flex-col items-start w-full p-8 md:p-12 transition-colors duration-300 gap-12">
            <div className="flex flex-col gap-6 w-full">
              <h2 className="text-text-default font-sans text-[24px] font-normal leading-[120%]">Prague Studio</h2>
              <div className="flex flex-col items-start gap-4">
                <p className="text-text-default font-sans text-[15px] font-normal leading-[160%] whitespace-pre-line">
                  Vinohradská 121, {"\n"}130 00 Praha 3, {"\n"}Czech Republic
                </p>
                <button className="bg-bg-primary text-text-inverse px-4 py-3 rounded-[6px] text-[14px] font-medium hover:opacity-90 transition-opacity flex items-center gap-2">Get Directions</button>
              </div>
            </div>

            <div className="w-full h-[434px] rounded-[12px] overflow-hidden bg-bg-muted-2">
              <div
                className="w-full h-full bg-cover bg-center"
                style={{backgroundImage: "url(https://picsum.photos/800/600?grayscale)"}} // Placeholder map/studio image
              ></div>
            </div>

            <div className="flex flex-col w-full xl:w-[300px] gap-4">
              {socialLinks.map((link) => (
                <div key={link.name} className="bg-bg-muted-2 rounded-[12px] w-full flex justify-between items-center p-6 hover:bg-bg-default transition-colors cursor-pointer group overflow-hidden">
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
