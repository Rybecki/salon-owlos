import { motion } from "motion/react";
import { Phone, Mail, MapPin, Clock, Instagram, Facebook } from "lucide-react";

export default function Contact() {
  const openingHours = [
    { day: "Poniedziałek", hours: "09:00 – 18:00" },
    { day: "Wtorek", hours: "09:00 – 18:00" },
    { day: "Środa", hours: "09:00 – 18:00" },
    { day: "Czwartek", hours: "09:00 – 18:00" },
    { day: "Piątek", hours: "09:00 – 18:00" },
    { day: "Sobota", hours: "08:00 – 14:00" },
    { day: "Niedziela", hours: "Zamknięte", isClosed: true },
  ];

  return (
    <div className="pt-32 pb-20 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 text-center mb-24">
        <span className="text-gold uppercase tracking-widest text-sm mb-4 block">Odwiedź nas</span>
        <h1 className="text-6xl md:text-7xl mb-6">Kontakt</h1>
        <p className="text-gray-500 font-light max-w-2xl mx-auto text-lg">
          Jesteśmy tu dla Ciebie. Skontaktuj się z nami w celu umówienia wizyty lub zadania pytania o nasze usługi.
        </p>
      </div>

      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-20">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl mb-12 text-center lg:text-left">Dane Kontaktowe</h2>
          
          <div className="space-y-10 mb-16">
            <a href="tel:691668935" className="flex flex-col sm:flex-row items-center gap-4 sm:gap-6 group text-center sm:text-left">
              <div className="w-16 h-16 bg-white shadow-sm border border-gray-100 flex items-center justify-center rounded-full group-hover:border-gold transition-colors">
                <Phone className="text-gold" size={24} />
              </div>
              <div>
                <p className="text-xs text-gray-400 uppercase tracking-widest mb-1">Telefon</p>
                <p className="text-2xl font-serif font-bold group-hover:text-gold transition-colors italic">691 668 935</p>
              </div>
            </a>

            <a href="mailto:salonowlos@wp.pl" className="flex flex-col sm:flex-row items-center gap-4 sm:gap-6 group text-center sm:text-left">
              <div className="w-16 h-16 bg-white shadow-sm border border-gray-100 flex items-center justify-center rounded-full group-hover:border-gold transition-colors">
                <Mail className="text-gold" size={24} />
              </div>
              <div>
                <p className="text-xs text-gray-400 uppercase tracking-widest mb-1">Email</p>
                <p className="text-2xl font-serif font-bold group-hover:text-gold transition-colors italic">salonowlos@wp.pl</p>
              </div>
            </a>

            <div className="flex flex-col sm:flex-row items-center gap-4 sm:gap-6 group text-center sm:text-left">
              <div className="w-16 h-16 bg-white shadow-sm border border-gray-100 flex items-center justify-center rounded-full group-hover:border-gold transition-colors">
                <MapPin className="text-gold" size={24} />
              </div>
              <div>
                <p className="text-xs text-gray-400 uppercase tracking-widest mb-1">Adres</p>
                <p className="text-2xl font-serif font-bold italic text-black/80">ul. Handlowa 4, Kalisz</p>
              </div>
            </div>
          </div>

          <h2 className="text-4xl mb-10 text-center lg:text-left">Social Media</h2>
          <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 items-stretch sm:items-center justify-center">
             <a href="https://www.instagram.com/salon_o_wlos" target="_blank" rel="noopener noreferrer" className="w-full sm:w-auto flex items-center justify-center gap-3 px-8 py-3 border border-gray-200 hover:border-gold hover:text-gold transition-all rounded-sm uppercase tracking-widest text-sm">
               <Instagram size={20} />
               <span>Instagram</span>
             </a>
             <a href="https://www.facebook.com/fryzjerOwlos" target="_blank" rel="noopener noreferrer" className="w-full sm:w-auto flex items-center justify-center gap-3 px-8 py-3 border border-gray-200 hover:border-gold hover:text-gold transition-all rounded-sm uppercase tracking-widest text-sm">
               <Facebook size={20} />
               <span>Facebook</span>
             </a>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="bg-white p-12 shadow-xl border border-gray-100 rounded-sm"
        >
          <div className="flex items-center gap-4 mb-10">
            <Clock className="text-gold" size={28} />
            <h3 className="text-3xl font-serif">Godziny Otwarcia</h3>
          </div>
          <div className="space-y-6">
            {openingHours.map((item, idx) => (
              <div key={idx} className="flex justify-between items-center border-b border-gray-50 pb-4">
                <span className={`text-lg ${item.isClosed ? "text-gray-400" : "text-black"}`}>{item.day}</span>
                <span className={`font-serif font-bold text-xl ${item.isClosed ? "text-red-400 italic" : "text-gray-600"}`}>
                  {item.hours}
                </span>
              </div>
            ))}
          </div>
        </motion.div>
      </div>

      <section className="mt-32 max-w-7xl mx-auto px-6 h-[500px]">
        <iframe 
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2459.712170327429!2d18.06900431265882!3d51.75654517178712!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x471ac5f7c3c2a68b%3A0xe5a3c6d70cb9e378!2sHandlowa%204%2C%2062-800%20Kalisz!5e0!3m2!1spl!2spl!4v1713716000000!5m2!1spl!2spl" 
          className="w-full h-full border-0 rounded-sm opacity-100 transition-all duration-700" 
          allowFullScreen 
          loading="lazy" 
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </section>
    </div>
  );
}
