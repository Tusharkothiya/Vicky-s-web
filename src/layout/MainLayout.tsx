import { useState, useEffect } from "react";
import { Outlet } from "react-router-dom";
import { ChevronUp } from "lucide-react";
import Header from "./Header";
import Footer from "./Footer";

const MainLayout = () => {
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Show button when user has scrolled down 300px from the top
      if (window.scrollY > 300) {
        setShowScrollTop(true);
      } else {
        setShowScrollTop(false);
      }
    };

    // Add scroll event listener
    window.addEventListener("scroll", handleScroll);

    // Cleanup function to remove event listener
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <div className="flex flex-col min-h-screen relative">
      {/* Header (Fixed at top) */}
      <Header />

      {/* Main Content (with padding to avoid overlap) */}
      <main className="flex-1 overflow-auto">
        <div className="mx-auto p-0">
          <Outlet /> {/* Renders nested routes here */}
        </div>
      </main>

      {/* Footer (Fixed at bottom) */}
      <Footer />

      {/* Scroll to Top Button */}
      {showScrollTop && (
        <button
          onClick={scrollToTop}
          className="fixed cursor-pointer bottom-6 right-6 z-50 bg-emerald-600 hover:bg-emerald-700 text-white p-3 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-110 focus:outline-none focus:ring-4 focus:ring-emerald-300"
          aria-label="Scroll to top"
        >
          <ChevronUp className="w-6 h-6" />
        </button>
      )}
    </div>
  );
};

export default MainLayout;
