import React, {useState, useEffect} from "react";
import Home from "./Page/Home";
import Work from "./Page/Work";
import About from "./Page/About";
import Contact from "./Page/Contact";
import Blog from "./Page/Blog";
import BlogSingle from "./Page/BlogSingle";
import NotFound from "./Page/NotFound";

export default function App() {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [currentPage, setCurrentPage] = useState<"home" | "work" | "about" | "contact" | "blog" | "blog-single" | "404">("home");

  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [isDarkMode]);

  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
  };

  const navigate = (page: "home" | "work" | "about" | "contact" | "blog" | "blog-single" | "404") => {
    setCurrentPage(page);
    window.scrollTo(0, 0);
  };

  return (
    <div className="w-full min-h-screen bg-bg-default text-text-default font-sans antialiased transition-colors duration-300">
      {currentPage === "home" && <Home onNavigate={navigate} isDarkMode={isDarkMode} toggleTheme={toggleTheme} />}
      {currentPage === "work" && <Work onNavigate={navigate} isDarkMode={isDarkMode} toggleTheme={toggleTheme} />}
      {currentPage === "about" && <About onNavigate={navigate} isDarkMode={isDarkMode} toggleTheme={toggleTheme} />}
      {currentPage === "blog" && <Blog onNavigate={navigate} isDarkMode={isDarkMode} toggleTheme={toggleTheme} />}
      {currentPage === "contact" && <Contact onNavigate={navigate} isDarkMode={isDarkMode} toggleTheme={toggleTheme} />}
      {currentPage === "blog-single" && <BlogSingle onNavigate={navigate} isDarkMode={isDarkMode} toggleTheme={toggleTheme} />}
      {currentPage === "404" && <NotFound onNavigate={navigate} isDarkMode={isDarkMode} toggleTheme={toggleTheme} />}
    </div>
  );
}
