import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, Phone } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";
import { ASSETS } from "../constants/assets";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();
  const alwaysDarkRoutes = ["/galeria", "/cennik", "/kontakt"];
  const isDarkNavbar = scrolled || alwaysDarkRoutes.includes(location.pathname);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Strona Główna", path: "/" },
    { name: "Galeria", path: "/galeria" },
    { name: "Cennik", path: "/cennik" },
    { name: "Kontakt", path: "/kontakt" },
  ];

  return (
    <nav className={`fixed top-0 left-0 w-full z-50 border-b transition-all duration-500 ${isDarkNavbar ? "bg-black/65 backdrop-blur-md border-gold/80 py-4" : "bg-transparent border-transparent py-6"}`}>
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-3 group">
          <img src={ASSETS.LOGO} alt="O Włos Logo" className="h-10 w-auto group-hover:scale-110 transition-transform duration-300" />
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-10">
          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              className={`nav-link ${location.pathname === link.path ? "text-gold after:w-full" : isDarkNavbar ? "text-white" : "text-black"}`}
            >
              {link.name}
            </Link>
          ))}
          <a
            href="tel:691668935"
            className="flex items-center gap-2 border border-gold text-white px-6 py-2.5 hover:bg-gold transition-colors duration-300 rounded-sm text-sm uppercase tracking-widest"
          >
            <Phone size={16} />
            <span>Zadzwoń</span>
          </a>
        </div>

        {/* Mobile Toggle */}
        <button className={`md:hidden ${isDarkNavbar ? "text-white" : "text-black"}`} onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute top-full left-0 w-full bg-white border-t border-gray-100 shadow-xl md:hidden"
          >
            <div className="flex flex-col p-6 gap-6">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  onClick={() => setIsOpen(false)}
                  className={`text-lg font-serif tracking-widest ${location.pathname === link.path ? "text-gold" : "text-black"}`}
                >
                  {link.name}
                </Link>
              ))}
              <a
                href="tel:691668935"
                className="flex items-center justify-center gap-3 bg-black text-white py-4 rounded-sm"
              >
                <Phone size={20} />
                <span className="uppercase tracking-widest">Zadzwoń teraz</span>
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
