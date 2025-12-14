import React from "react";
import {RoundedEdge, PhArrowLeftLight} from "@/components/Icons";

interface NotFoundProps {
  onNavigate: (page: "home" | "work" | "about" | "contact" | "blog" | "blog-single" | "404") => void;
  isDarkMode: boolean;
  toggleTheme: () => void;
}

export default function NotFound({onNavigate}: NotFoundProps) {
  return (
    <div className="flex flex-col items-start w-full h-screen p-3 bg-bg-default overflow-hidden">
      <div className="flex-1 w-full h-full relative rounded-[12px] overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0 bg-cover bg-center" style={{backgroundImage: "url(https://picsum.photos/2000/1333?random=404)"}}></div>

        {/* Top Left Corner - Back to Homepage */}
        <div onClick={() => onNavigate("home")} className="absolute top-0 left-0 bg-bg-default rounded-br-[20px] pt-2 pb-3 px-4 flex items-center gap-[6px] z-10 cursor-pointer group">
          <div className="w-[14px] h-[14px] text-text-default">
            <PhArrowLeftLight />
          </div>
          <span className="text-text-default font-sans text-[15px] font-normal leading-[100%] group-hover:opacity-70 transition-opacity">Back to Homepage</span>

          {/* Fillers for smooth corner */}
          <div className="absolute top-0 -right-[20px]">
            <RoundedEdge className="text-bg-default" />
          </div>
          <div className="absolute -bottom-[20px] left-0">
            <RoundedEdge className="text-bg-default" />
          </div>
        </div>

        {/* Bottom Right Corner - Error Message */}
        <div className="absolute bottom-0 right-0 bg-bg-default rounded-tl-[20px] pt-3 pb-2 px-4 flex items-center gap-[6px] z-10">
          <span className="text-text-default font-sans text-[15px] font-normal leading-[100%]">Error 404 - Page not found</span>

          {/* Fillers for smooth corner */}
          <div className="absolute -top-[20px] right-0">
            <RoundedEdge className="text-bg-default transform rotate-180" />
          </div>
          <div className="absolute bottom-0 -left-[20px]">
            <RoundedEdge className="text-bg-default transform rotate-180" />
          </div>
        </div>
      </div>
    </div>
  );
}
