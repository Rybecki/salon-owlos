import { motion } from "motion/react";
import { Link } from "react-router-dom";
import { ChevronRight } from "lucide-react";

const priceList = [
  {
    category: "Strzyżenie",
    items: [
      { name: "Strzyżenie damskie + modelowanie", price: "od 80 zł" },
      { name: "Strzyżenie męskie", price: "od 50 zł" },
      { name: "Strzyżenie dziecięce", price: "od 40 zł" },
      { name: "Grzywka - podcięcie", price: "20 zł" }
    ]
  },
  {
    category: "Koloryzacja",
    items: [
      { name: "Koloryzacja jednolita", price: "od 150 zł" },
      { name: "Refleksy / Baleyage", price: "od 200 zł" },
      { name: "Ombre / Sombre", price: "od 250 zł" },
      { name: "Dekoloryzacja", price: "od 100 zł" },
      { name: "Toner", price: "od 80 zł" }
    ]
  },
  {
    category: "Stylizacja",
    items: [
      { name: "Modelowanie okazjonalne", price: "od 70 zł" },
      { name: "Upięcie ślubne", price: "od 150 zł" },
      { name: "Warkocze / Sploty", price: "od 50 zł" },
      { name: "Loki / Fale", price: "od 80 zł" }
    ]
  },
  {
    category: "Pielęgnacja",
    items: [
      { name: "Rytuał Kérastase", price: "od 120 zł" },
      { name: "Sauna na włosy", price: "60 zł" },
      { name: "Ampułka regenerująca", price: "40 zł" },
      { name: "Botoks na włosy", price: "od 180 zł" }
    ]
  }
];

export default function Pricelist() {
  return (
    <div className="pt-32 pb-20 px-6">
      <div className="max-w-7xl mx-auto text-center mb-24">
        <span className="text-gold uppercase tracking-widest text-sm mb-4 block">Usługi</span>
        <h1 className="text-6xl md:text-7xl mb-6">Cennik Usług</h1>
        <p className="text-gray-500 font-light max-w-2xl mx-auto text-lg">
          Wszystkie ceny są orientacyjne i zależą od długości oraz gęstości włosów, a także zużycia materiałów. Ostateczną cenę ustala stylista przed rozpoczęciem usługi.
        </p>
      </div>

      <div className="max-w-5xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-20 gap-y-16">
          {priceList.map((section, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
            >
              <h3 className="text-2xl font-serif border-b border-gold/30 pb-4 mb-8 uppercase tracking-widest text-gold text-center md:text-left">
                {section.category}
              </h3>
              <div className="space-y-6">
                {section.items.map((item, i) => (
                  <div key={i} className="flex justify-between items-end group cursor-default">
                    <div className="flex-1">
                      <p className="text-lg font-light group-hover:text-gold transition-colors">{item.name}</p>
                      <div className="h-[1px] bg-gray-100 w-full mt-1"></div>
                    </div>
                    <span className="ml-4 font-serif text-xl text-black/80">{item.price}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      <section className="mt-32 max-w-4xl mx-auto bg-black text-white p-12 md:p-20 rounded-sm text-center relative overflow-hidden">
        <div className="absolute top-0 right-0 w-64 h-64 bg-gold/10 rounded-full -translate-y-1/2 translate-x-1/2 blur-3xl"></div>
        <div className="relative z-10">
          <h2 className="text-4xl md:text-5xl mb-8">Zarezerwuj swój czas</h2>
          <p className="text-gray-400 mb-10 text-lg font-light leading-relaxed">
            Nasz grafik zapełnia się szybko. Zadzwoń lub odwiedź nas osobiście, aby zarezerwować termin.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
            <a 
              href="tel:691668935" 
              className="w-full sm:w-auto px-12 py-4 bg-gold text-white hover:bg-white hover:text-black transition-all duration-300 rounded-sm uppercase tracking-widest text-sm"
            >
              Zadzwoń
            </a>
            <Link 
              to="/kontakt" 
              className="w-full sm:w-auto flex items-center justify-center gap-2 text-sm uppercase tracking-widest border-b border-white hover:text-gold hover:border-gold transition-all"
            >
              <span>Dane kontaktowe</span>
              <ChevronRight size={16} />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
