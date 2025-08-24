import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import logo from "../assets/logo.png";
export default function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 100);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth", block: "start" });
      setIsMobileMenuOpen(false);
    }
  };

  const navLinks = [
    { href: "home", label: "Home" },
    { href: "about", label: "About Us" },
    { href: "services", label: "Services" },
    { href: "pricing", label: "Pricing" },
    { href: "equipment", label: "Equipment" },
    { href: "gallery", label: "Gallery" },
    { href: "contact", label: "Contact" },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 border-b border-orange-primary/20 ${isScrolled ? "navbar-blur" : "navbar-blur"
        }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="flex items-center space-x-3"
          >
            <img
              src={logo}
              alt="Fitness Logo"
              className="w-12 h-12 md:w-16 md:h-16 object-contain rounded-full"
            />
            <div className="text-white">
              <div className="font-devanagari font-bold text-sm md:text-lg leading-tight">
                धर्मवीर छत्रपती
              </div>
              <div className="font-devanagari font-semibold text-xs md:text-sm text-orange-primary">
                संभाजीराजे फिटनेस क्लब
              </div>
            </div>
          </motion.div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <button
                key={link.href}
                onClick={() => scrollToSection(link.href)}
                className="text-white hover:text-orange-primary transition-colors font-medium"
                data-testid={`nav-${link.href}`}
              >
                {link.label}
              </button>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-white hover:text-orange-primary"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            data-testid="mobile-menu-toggle"
          >
            <i className="fas fa-bars text-xl"></i>
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-black-primary border-t border-orange-primary/20"
          >
            <div className="container mx-auto px-4 py-4 space-y-2">
              {navLinks.map((link) => (
                <button
                  key={link.href}
                  onClick={() => scrollToSection(link.href)}
                  className="block text-white hover:text-orange-primary transition-colors py-2 font-medium w-full text-left"
                  data-testid={`mobile-nav-${link.href}`}
                >
                  {link.label}
                </button>
              ))}
            </div>
          </motion.div>
        )}
      </div>
    </nav>
  );
}
