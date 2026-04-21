import { Link } from "react-router-dom";
import { Phone, Mail, MapPin, Instagram, Facebook } from "lucide-react";
import { ASSETS } from "../constants/assets";

export default function Footer() {
  return (
    <footer className="bg-black text-white pt-20 pb-10 px-6">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-16 mb-20 text-center">
        <div>
          <img src={ASSETS.LOGO} alt="O Włos Logo" className="h-16 w-auto mb-6 mx-auto" />
          <p className="text-gray-400 font-light leading-relaxed mb-6">
            Twój ulubiony salon fryzjerski w Kaliszu. Łączymy pasję do stylizacji z najwyższą jakością usług.
          </p>
          <div className="flex gap-4 justify-center">
            <a href="https://www.instagram.com/salon_o_wlos" target="_blank" rel="noopener noreferrer" className="w-10 h-10 border border-gray-700 flex items-center justify-center hover:border-gold hover:text-gold transition-colors duration-300">
              <Instagram size={20} />
            </a>
            <a href="https://www.facebook.com/fryzjerOwlos" target="_blank" rel="noopener noreferrer" className="w-10 h-10 border border-gray-700 flex items-center justify-center hover:border-gold hover:text-gold transition-colors duration-300">
              <Facebook size={20} />
            </a>
          </div>
        </div>

        <div>
          <h4 className="text-xl font-serif uppercase tracking-widest mb-8 text-gold">Skróty</h4>
          <ul className="flex flex-col gap-4 font-light text-gray-400 items-center">
            <li><Link to="/" className="hover:text-white transition-colors">Strona Główna</Link></li>
            <li><Link to="/galeria" className="hover:text-white transition-colors">Galeria</Link></li>
            <li><Link to="/cennik" className="hover:text-white transition-colors">Cennik</Link></li>
            <li><Link to="/kontakt" className="hover:text-white transition-colors">Kontakt</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="text-xl font-serif uppercase tracking-widest mb-8 text-gold">Kontakt</h4>
          <ul className="flex flex-col gap-4 font-light text-gray-400 items-center">
            <li className="flex items-center justify-center gap-3">
              <Phone size={18} className="text-gold" />
              <a href="tel:691668935" className="hover:text-white transition-colors">691 668 935</a>
            </li>
            <li className="flex items-center justify-center gap-3">
              <Mail size={18} className="text-gold" />
              <a href="mailto:salonowlos@wp.pl" className="hover:text-white transition-colors">salonowlos@wp.pl</a>
            </li>
            <li className="flex items-center justify-center gap-3">
              <MapPin size={18} className="text-gold" />
              <span>ul. Handlowa 4, Kalisz</span>
            </li>
          </ul>
        </div>
      </div>

      <div className="max-w-7xl mx-auto pt-10 border-t border-gray-800 flex flex-col md:flex-row justify-center items-center gap-4 md:gap-10 text-xs text-gray-500 uppercase tracking-widest text-center">
        <p>&copy; {new Date().getFullYear()} O Włos Salon Fryzjerski. Wszystkie prawa zastrzeżone.</p>
        <p>
          Design & Realizacja:{" "}
          <a
            href="https://patryktomczyk.dev"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white hover:text-gold transition-colors"
          >
            patryktomczyk.dev
          </a>
        </p>
      </div>
    </footer>
  );
}
