import React from "react";
import {
  RoundedEdge,
  PhArrowRight,
  PhInstagramLogoLight,
  PhPinterestLogoLight,
  PhBehanceLogoLight,
  PhTwitterLogoLight,
  PhEnvelopeSimpleLight,
  PhFacebookLogoLight,
  PhArrowUpRightLight,
  PhArrowDownLight,
} from "@/components/Icons";

interface BlogSingleProps {
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

    {/* Default State: Text Only */}
    <div className="absolute inset-0 flex items-center gap-1 transition-transform duration-500 ease-[cubic-bezier(0.25,1,0.5,1)] group-hover:-translate-y-full">
      <span className={`${style}`}>{text}</span>
    </div>

    {/* Hover State: Text + Arrow */}
    <div className="absolute inset-0 flex items-center gap-1 transition-transform duration-500 ease-[cubic-bezier(0.25,1,0.5,1)] translate-y-full group-hover:translate-y-0">
      <span className={`${style}`}>{text}</span>
    </div>
  </div>
);

export default function BlogSingle({onNavigate, isDarkMode, toggleTheme}: BlogSingleProps) {
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
        {/* Left Column - Sticky Hero Image */}
        <div className="flex-1 w-full lg:sticky lg:top-3 h-auto lg:h-[calc(100vh-24px)] flex items-center md:py-0">
          <div className="bg-bg-muted-2 rounded-[12px] flex-1 w-full h-full overflow-hidden relative min-h-[500px] lg:min-h-0">
            {/* Header - Integrated Top Left */}
            <div className="absolute top-0 left-0 z-30 bg-bg-default rounded-br-[32px] flex items-center gap-6 md:gap-8 px-6 py-4 pr-6 transition-colors duration-300">
              <div className="flex items-center gap-[10px]">
                <div className="w-[18px] h-[18px] rounded-full border-[4px] border-text-default box-border"></div>
                <span className="text-text-default font-sans text-[14px] font-bold leading-[100%] tracking-tight">hanssen</span>
              </div>
              <div className="hidden md:flex items-center gap-6">
                {["Portfolio", "About", "Blog", "Contact"].map((item) => (
                  <span key={item} onClick={() => handleNavClick(item)} className="block">
                    <AnimatedText text={item === "Portfolio" ? "Work" : item} style="text-text-default font-sans text-[12px] font-medium cursor-pointer hover:opacity-60 transition-opacity" />
                  </span>
                ))}
              </div>
              <div onClick={toggleTheme} className="w-8 h-4 bg-bg-muted-2 rounded-full relative cursor-pointer ml-2 transition-colors duration-300">
                <div className={`absolute top-1 w-2 h-2 bg-text-default rounded-full transition-all duration-300 ${isDarkMode ? "left-5" : "left-1"}`}></div>
              </div>
            </div>

            {/* Featured Image */}
            <div className="w-full h-full bg-cover bg-center" style={{backgroundImage: "url(https://picsum.photos/1000/1333?random=201)"}}></div>
          </div>
        </div>

        {/* Right Column - Scrollable Content */}
        <div className="flex flex-col flex-1 justify-center items-start gap-3 w-full py-3 md:py-0">
          {/* Main Title Card */}
          <div className="bg-bg-muted rounded-[12px] flex flex-col items-start w-full p-8 md:p-16 transition-colors duration-300 gap-16">
            <div className="bg-bg-default rounded-[4px] flex justify-center items-center gap-2 px-2 py-1.5">
              <span className="text-text-default font-sans text-[12px] font-normal leading-[100%]">24th June 2024</span>
            </div>

            <div className="flex flex-col items-start gap-16 w-full">
              <div className="flex flex-col items-start gap-4 w-full">
                <h1 className="text-text-default font-sans text-[40px] font-normal leading-[120%] max-w-[600px]">Capturing the Essence: How to Tell Stories Through Photography</h1>
                <p className="text-text-default font-sans text-[16px] font-normal leading-[160%] max-w-[500px]">
                  Explore eco-friendly materials and innovative practices that are shaping the future of sustainable architecture, reducing environmental impact significantly.
                </p>
              </div>
              <div className="bg-bg-muted-2 rounded-[6px] flex justify-center items-center gap-2 px-3.5 py-3 cursor-pointer">
                <span className="text-text-default font-sans text-[14px] font-normal leading-[100%]">Read Article</span>
              </div>
            </div>
          </div>

          {/* Meta Info Row */}
          <div className="flex flex-col xl:flex-row items-start gap-3 w-full">
            <div className="bg-bg-muted rounded-[12px] flex-1 w-full flex justify-between items-center p-6">
              <span className="text-text-muted font-sans text-[15px] font-normal leading-[100%]">Category</span>
              <span className="text-text-default font-sans text-[15px] font-normal leading-[100%]">Model</span>
            </div>
            <div className="bg-bg-muted rounded-[12px] flex-1 w-full flex justify-between items-center p-6">
              <span className="text-text-muted font-sans text-[15px] font-normal leading-[100%]">Reading Time</span>
              <span className="text-text-default font-sans text-[15px] font-normal leading-[100%]">2 Min</span>
            </div>
            <div className="bg-bg-muted rounded-[12px] flex-1 w-full flex justify-between items-center p-6">
              <span className="text-text-muted font-sans text-[15px] font-normal leading-[100%]">Date</span>
              <span className="text-text-default font-sans text-[15px] font-normal leading-[100%]">24th June 2024</span>
            </div>
          </div>

          {/* Article Content */}
          <div className="bg-bg-muted rounded-[12px] flex flex-col items-start w-full p-8 md:p-12 transition-colors duration-300 gap-32">
            {/* Section 1 */}
            <div className="flex flex-col items-start gap-8 w-full">
              <div className="flex flex-col items-start gap-4 w-full">
                <h2 className="text-text-default font-sans text-[32px] font-normal leading-[120%]">Understanding the Power of Storytelling</h2>
                <p className="text-text-default font-sans text-[16px] font-normal leading-[160%] whitespace-pre-line">
                  Photography is more than just taking pictures—it's a powerful tool for storytelling. Through the lens, we can convey emotions, narratives, and perspectives that words often struggle
                  to capture. A well-composed photograph can evoke feelings, spark curiosity, and create connections between the viewer and the subject. The challenge, however, lies in telling a story
                  with a single frame or a cohesive series of images.
                  <br />
                  <br />
                  At the heart of visual storytelling is intention. Before pressing the shutter, it’s essential to understand what you want to communicate. Whether it's capturing the joy in a fleeting
                  moment or the complexity of a scene, the story you want to tell shapes the way you approach your subject. The more clarity you have on your message, the stronger your images will be
                  in resonating with others.
                  <br />
                  <br />
                  Additionally, storytelling in photography isn’t just about the subject—it’s about how you frame that subject. Lighting, composition, and focus all play critical roles in directing
                  the viewer’s attention to the essence of your narrative. A small detail or an emotion-filled expression can often tell the whole story.
                </p>
              </div>
            </div>

            {/* Section 2 */}
            <div className="flex flex-col items-start gap-8 w-full">
              <div className="flex flex-col items-start gap-4 w-full">
                <h2 className="text-text-default font-sans text-[28px] font-normal leading-[120%]">Creating Emotion Through Composition</h2>
                <p className="text-text-default font-sans text-[16px] font-normal leading-[160%] whitespace-pre-line">
                  Composition is key in creating a visual story that resonates emotionally. Every element in a frame contributes to the overall narrative, and the way these elements are arranged
                  impacts how the viewer experiences the photograph. The rule of thirds, leading lines, and framing are all tools that can help guide the viewer’s eye, subtly influencing how they
                  interpret the story.
                  <br />
                  <br />
                  Using negative space, for example, can evoke feelings of isolation or contemplation, while filling the frame with dynamic movement might create a sense of energy or chaos. It's
                  essential to consider what emotions you want your audience to feel, and to use compositional techniques that reinforce those emotions. A well-composed image doesn’t just show—it
                  speaks.
                  <br />
                  <br />
                  The environment surrounding your subject also plays an integral role in storytelling. Backgrounds, settings, and context help shape the narrative. Whether you're shooting in an urban
                  landscape or natural surroundings, the place you choose tells part of the story. Take the time to consider how these environmental elements contribute to the message you’re trying to
                  convey.
                </p>
              </div>
            </div>

            {/* Section 3 */}
            <div className="flex flex-col items-start gap-8 w-full">
              <div className="flex flex-col items-start gap-4 w-full">
                <h2 className="text-text-default font-sans text-[28px] font-normal leading-[120%]">The Importance of Connection</h2>
                <p className="text-text-default font-sans text-[16px] font-normal leading-[160%] whitespace-pre-line">
                  At the core of every great photograph is the connection between the subject, the photographer, and the viewer. This connection is what transforms a simple image into a story that
                  lingers in the mind. Whether you’re shooting portraits, landscapes, or abstract concepts, the relationship between these elements can make or break the story.
                  <br />
                  <br />
                  Building a rapport with your subject is crucial, especially in portrait photography. When your subject feels comfortable, their emotions and personality shine through naturally,
                  creating a more authentic and compelling narrative. This sense of connection invites the viewer into the image, making them feel like they’re part of the story.
                  <br />
                  <br />
                  Finally, a connection to the viewer comes from creating photographs that resonate on a personal or universal level. When a photo reflects shared experiences, emotions, or themes, it
                  speaks louder and more effectively. Whether you're capturing joy, sadness, or the beauty of a quiet moment, the viewer should feel a sense of involvement in the story you’ve created.
                </p>
              </div>
            </div>
          </div>

          {/* Share Links */}
          <div className="flex flex-col md:flex-row items-start gap-3 w-full">
            <div className="bg-bg-muted rounded-[12px] flex-1 w-full flex justify-between items-center p-6 h-[68px] cursor-pointer hover:bg-bg-muted-2 transition-colors">
              <div className="flex items-center gap-2 w-full">
                <div className="w-5 h-5 text-text-default">
                  <PhPinterestLogoLight />
                </div>
                <span className="text-text-default font-sans text-[14px] font-normal leading-[120%] flex-1">Pinterest</span>
                <div className="w-5 h-5 text-text-default">
                  <PhArrowUpRightLight />
                </div>
              </div>
            </div>
            <div className="bg-bg-muted rounded-[12px] flex-1 w-full flex justify-between items-center p-6 h-[68px] cursor-pointer hover:bg-bg-muted-2 transition-colors">
              <div className="flex items-center gap-2 w-full">
                <div className="w-5 h-5 text-text-default">
                  <PhFacebookLogoLight />
                </div>
                <span className="text-text-default font-sans text-[14px] font-normal leading-[120%] flex-1">Facebook</span>
                <div className="w-5 h-5 text-text-default">
                  <PhArrowUpRightLight />
                </div>
              </div>
            </div>
            <div className="bg-bg-muted rounded-[12px] flex-1 w-full flex justify-between items-center p-6 h-[68px] cursor-pointer hover:bg-bg-muted-2 transition-colors">
              <div className="flex items-center gap-2 w-full">
                <div className="w-5 h-5 text-text-default">
                  <PhInstagramLogoLight />
                </div>
                <span className="text-text-default font-sans text-[14px] font-normal leading-[120%] flex-1">Instagram</span>
                <div className="w-5 h-5 text-text-default">
                  <PhArrowUpRightLight />
                </div>
              </div>
            </div>
          </div>

          {/* Related Articles Header */}
          <div className="bg-bg-muted rounded-[12px] flex justify-between items-center w-full px-8 py-6 transition-colors duration-300">
            <div className="flex items-center gap-2">
              <span className="text-text-default font-sans text-[15px] font-normal leading-[100%]">Related Articles</span>
              <div className="w-4 h-4 text-text-default">
                <PhArrowDownLight />
              </div>
            </div>
            <div onClick={() => onNavigate("blog")} className="flex flex-col justify-center items-start gap-[2px] cursor-pointer group">
              <span className="text-text-default font-sans text-[14px] font-normal leading-[100%]">View All</span>
              <div className="bg-text-default h-[1px] w-full transform scale-x-100 group-hover:scale-x-50 transition-transform origin-left"></div>
            </div>
          </div>

          {/* Related Posts */}
          <div className="flex flex-col md:flex-row items-start gap-3 w-full">
            {/* Post 1 */}
            <div onClick={() => window.scrollTo(0, 0)} className="bg-bg-primary rounded-[12px] flex-1 w-full h-[600px] overflow-hidden relative group cursor-pointer">
              <div
                className="w-full h-full bg-cover bg-center transition-transform duration-700 ease-out group-hover:scale-105 opacity-80 group-hover:opacity-100"
                style={{backgroundImage: "url(https://picsum.photos/480/640?random=101)"}}></div>
              <div className="absolute bottom-6 left-6 right-6 bg-bg-default rounded-[10px] p-6 flex justify-between items-end gap-4 shadow-sm">
                <span className="text-text-default font-sans text-[16px] font-normal leading-[140%] flex-1">Mastering Light: Techniques for Stunning Urban Photography</span>
                <div className="flex flex-col items-start gap-[2px] cursor-pointer group/btn flex-shrink-0">
                  <span className="text-text-default font-sans text-[14px] font-normal leading-[100%]">Read</span>
                  <div className="bg-text-default h-[1px] w-full transform scale-x-100 group-hover/btn:scale-x-50 transition-transform origin-left"></div>
                </div>
              </div>
            </div>

            {/* Post 2 */}
            <div onClick={() => window.scrollTo(0, 0)} className="bg-bg-primary rounded-[12px] flex-1 w-full h-[600px] overflow-hidden relative group cursor-pointer">
              <div
                className="w-full h-full bg-cover bg-center transition-transform duration-700 ease-out group-hover:scale-105 opacity-80 group-hover:opacity-100"
                style={{backgroundImage: "url(https://picsum.photos/482/723?random=102)"}}></div>
              <div className="absolute bottom-6 left-6 right-6 bg-bg-default rounded-[10px] p-6 flex justify-between items-end gap-4 shadow-sm">
                <span className="text-text-default font-sans text-[16px] font-normal leading-[140%] flex-1">The Art of Candid Moments: Creating Authentic Lifestyle Images</span>
                <div className="flex flex-col items-start gap-[2px] cursor-pointer group/btn flex-shrink-0">
                  <span className="text-text-default font-sans text-[14px] font-normal leading-[100%]">Read</span>
                  <div className="bg-text-default h-[1px] w-full transform scale-x-100 group-hover/btn:scale-x-50 transition-transform origin-left"></div>
                </div>
              </div>
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
