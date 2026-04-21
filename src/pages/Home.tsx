import { motion, useScroll, useTransform } from "motion/react";
import { useRef, useState } from "react";
import { Scissors, Sparkles, User, Heart, Star, ChevronRight } from "lucide-react";
import { Link } from "react-router-dom";
import { ASSETS } from "../constants/assets";

export default function Home() {
  const [heroMouseOffset, setHeroMouseOffset] = useState({ x: 0, y: 0 });
  const ctaRef = useRef<HTMLElement | null>(null);
  const { scrollYProgress: ctaScrollProgress } = useScroll({
    target: ctaRef,
    offset: ["start end", "end start"],
  });
  const ctaBackgroundY = useTransform(ctaScrollProgress, [0, 1], ["-8%", "8%"]);
  const ctaContentY = useTransform(ctaScrollProgress, [0, 1], ["2%", "-2%"]);

  const handleHeroMouseMove = (event: React.MouseEvent<HTMLElement>) => {
    const rect = event.currentTarget.getBoundingClientRect();
    const x = (event.clientX - rect.left) / rect.width - 0.5;
    const y = (event.clientY - rect.top) / rect.height - 0.5;
    setHeroMouseOffset({ x, y });
  };

  const handleHeroMouseLeave = () => {
    setHeroMouseOffset({ x: 0, y: 0 });
  };

  const categories = [
    { icon: <Scissors size={32} />, title: "Strzyżenie", desc: "Precyzyjne cięcia dopasowane do Twojej urody." },
    { icon: <Sparkles size={32} />, title: "Koloryzacja", desc: "Nowoczesne techniki farbowania i naturalne efekty." },
    { icon: <User size={32} />, title: "Upięcia", desc: "Stylizacje okolicznościowe, które zachwycą każdego." },
    { icon: <Heart size={32} />, title: "Pielęgnacja", desc: "Rytuały regenerujące dla zdrowych i lśniących włosów." },
  ];

  const testimonials = [
    { name: "Ola", text: "Bardzo polecam salon. Panie pracujące w salonie robią to z pasją i z troską o klientki. Napewno będę wracać :)" },
    { name: "Daria", text: "Super atmosfera i profesjonalna obsługa;)" },
    { name: "Madia", text: "Gorąco polecam! Miła i profesjonalna obsługa; miałam okazję korzystać z usług Pani Kasi przy upięciach weselnych i strzyżeniu i jestem bardzo zadowolona." },
  ];

  return (
    <div className="overflow-hidden">
      {/* Hero Section */}
      <section
        className="relative h-screen flex items-center justify-center overflow-hidden"
        onMouseMove={handleHeroMouseMove}
        onMouseLeave={handleHeroMouseLeave}
      >
        <motion.div
          className="absolute inset-0 z-0"
          animate={{
            x: heroMouseOffset.x * 20,
            y: heroMouseOffset.y * 20,
            scale: 1.08,
          }}
          transition={{ type: "spring", stiffness: 45, damping: 18, mass: 1.1 }}
        >
          <img 
            src={ASSETS.FRYZURY[4]} 
            className="w-full h-full object-cover grayscale-25 opacity-40" 
            alt="Hero background"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-black/25"></div>
          <div className="absolute inset-0 bg-linear-to-b from-black/35 via-black/20 to-soft-bg"></div>
        </motion.div>
        <div className="absolute inset-x-0 bottom-0 h-14 md:h-20 z-[5] pointer-events-none bg-linear-to-b from-transparent via-[#FAFAFA]/80 to-soft-bg"></div>

        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="relative z-10 text-center px-6 max-w-3xl"
        >
          <motion.div className="mx-auto mb-6 w-fit">
            <motion.img
              src={ASSETS.LOGO}
              alt="O Włos Logo"
              className="w-64 md:w-80 mx-auto"
              animate={{ y: [0, -4, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            />
          </motion.div>
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 1 }}
            className="text-lg md:text-2xl font-light uppercase tracking-[0.3em] mb-12"
          >
            Twoje włosy w najlepszych rękach
          </motion.p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
            <Link to="/galeria" className="w-full sm:w-auto px-10 py-4 bg-black text-white hover:bg-gold transition-all duration-300 rounded-sm uppercase tracking-widest text-sm">
              Zobacz galerię
            </Link>
            <Link to="/cennik" className="w-full sm:w-auto px-10 py-4 border border-black hover:bg-black hover:text-white transition-all duration-300 rounded-sm uppercase tracking-widest text-sm">
              Sprawdź cennik
            </Link>
          </div>
        </motion.div>

      </section>

      {/* About Section */}
      <section className="py-32 px-6 max-w-7xl mx-auto bg-soft-bg">
        <div className="max-w-5xl mx-auto">
          <span className="text-gold uppercase tracking-widest text-sm mb-4 block text-center">Pasja i Doświadczenie</span>
          <h2 className="text-4xl md:text-5xl mb-5 leading-tight text-center">
            Poznajcie zespół salonu „O włos”
          </h2>
          <p className="text-center text-gray-700 font-light text-xl mb-12">
            <span className="font-cursive text-3xl text-gold italic px-1">Kasia</span> i <span className="font-cursive text-3xl text-gold italic px-1">Ania</span> ✂️
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-10 mb-12">
            <div className="w-56 h-56 md:w-64 md:h-64 rounded-full border-4 border-gold/60 p-1.5 shadow-lg bg-white">
              <img src={ASSETS.KASIA} alt="Kasia" className="w-full h-full rounded-full object-cover object-top" referrerPolicy="no-referrer" />
            </div>
            <div className="w-56 h-56 md:w-64 md:h-64 rounded-full border-4 border-gold/60 p-1.5 shadow-lg bg-white">
              <img src={ASSETS.ANIA} alt="Ania" className="w-full h-full rounded-full object-cover object-top" referrerPolicy="no-referrer" />
            </div>
          </div>

          <div className="space-y-6 text-gray-600 font-light leading-relaxed text-lg">
            <p>
              Wspólnie tworzymy duet, dla którego fryzjerstwo to znacznie więcej niż zawód – to pasja, którą rozwijamy od ponad 15 lat. Nasz salon, „O włos”, otworzyłyśmy w 2019 roku, chcąc stworzyć miejsce, gdzie wieloletnie doświadczenie spotyka się z nowoczesnym podejściem do piękna.
            </p>

            <div className="space-y-3">
              <h4 className="text-2xl font-serif font-bold text-black">Dlaczego możecie nam zaufać?</h4>
              <p>
                Przez półtorej dekady w zawodzie poznałyśmy tysiące rodzajów włosów i setki historii naszych klientek. To doświadczenie pozwala nam dziś pracować z ogromną pewnością i precyzją, niezależnie od wyzwania.
              </p>
            </div>

            <div className="space-y-3">
              <h4 className="text-2xl font-serif font-bold text-black">W czym czujemy się najlepiej?</h4>
              <p>Obie jesteśmy wszechstronnymi stylistkami, a nasza oferta to pełen wachlarz usług dopasowanych do Waszych potrzeb:</p>
              <ul className="space-y-2 pl-4">
                <li>• Koloryzacja: Od naturalnych refleksów po spektakularne metamorfozy.</li>
                <li>• Strzyżenie: Precyzyjne cięcia, które układają się niemal same.</li>
                <li>• Upięcia: Fryzury na wyjątkowe okazje, które przetrwają każdą zabawę.</li>
                <li>• Pielęgnacja: Bo wierzymy, że tylko zdrowe włosy są naprawdę piękne.</li>
              </ul>
            </div>

            <div className="space-y-3">
              <h4 className="text-2xl font-serif font-bold text-black">Nasza filozofia</h4>
              <p>
                Mimo 15 lat stażu, w salonie „O włos” nigdy nie stoimy w miejscu. Każdego dnia dbamy o to, byście czuły się u nas swobodnie, a z fotela schodziły z uśmiechem i poczuciem, że Wasze włosy są w najlepszych rękach.
              </p>
            </div>

            <p className="text-black font-medium text-center">
              Zapraszamy serdecznie,
              <br />
              <span className="inline-block mt-5">
                <span className="font-cursive text-4xl md:text-5xl text-gold italic px-1">Kasia</span> & <span className="font-cursive text-4xl md:text-5xl text-gold italic px-1">Ania</span> <span className="text-4xl md:text-5xl">❤️</span>
              </span>
            </p>
          </div>
        </div>
      </section>

      {/* Offer Icons */}
      <section className="py-24 bg-soft-bg border-y border-gray-100">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12">
          {categories.map((item, idx) => (
            <motion.div 
              key={idx}
              whileHover={{ y: -10 }}
              className="text-center group"
            >
              <div className="w-20 h-20 mx-auto flex items-center justify-center border border-gray-200 rounded-full mb-6 group-hover:border-gold group-hover:text-gold transition-all duration-300">
                {item.icon}
              </div>
              <h3 className="text-xl uppercase tracking-widest mb-3">{item.title}</h3>
              <p className="text-sm text-gray-500 font-light">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Gallery Highlight */}
      <section className="py-32 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-8">
            <div>
              <span className="text-gold uppercase tracking-widest text-sm mb-4 block">Nasze Prace</span>
              <h2 className="text-5xl md:text-6xl">Sztuka w każdym detalu</h2>
            </div>
            <Link to="/galeria" className="flex items-center gap-2 group text-sm uppercase tracking-widest font-medium">
              <span>Zobacz pełną galerię</span>
              <ChevronRight size={18} className="group-hover:translate-x-2 transition-transform" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <motion.div whileHover={{ scale: 0.98 }} className="aspect-[16/9] overflow-hidden rounded-sm relative group cursor-pointer shadow-lg">
              <img src={ASSETS.FRYZURY[0]} alt="Fryzura 1" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" referrerPolicy="no-referrer" />
              <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors"></div>
            </motion.div>
            <motion.div whileHover={{ scale: 0.98 }} className="aspect-[16/9] overflow-hidden rounded-sm relative group cursor-pointer shadow-lg">
              <img src={ASSETS.FRYZURY[1]} alt="Fryzura 2" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" referrerPolicy="no-referrer" />
              <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors"></div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-32 bg-soft-bg relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full pointer-events-none opacity-5 flex items-center justify-center">
            <span className="text-[20vw] font-serif font-bold select-none">OPINIE</span>
        </div>
        
        <div className="max-w-7xl mx-auto px-6 relative z-10 text-center">
          <div className="flex items-center justify-center gap-1 mb-6 text-gold">
            {[...Array(5)].map((_, i) => <Star key={i} size={24} fill="currentColor" />)}
          </div>
          <h2 className="text-5xl mb-4">4.9 / 5 Gwiazdek</h2>
          <p className="text-gray-500 uppercase tracking-widest text-sm mb-16">Zadowolenie naszych klientek to nasz priorytet</p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16 text-center">
            {testimonials.map((t, idx) => (
              <motion.div
                key={idx}
                className="bg-white p-10 shadow-sm border border-gray-100 rounded-sm relative h-full flex flex-col items-center transform-gpu transition-all duration-300 hover:-translate-y-2 hover:scale-[1.02] hover:shadow-xl"
                animate={{
                  borderColor: [
                    "rgba(229, 231, 235, 1)",
                    "rgba(212, 175, 55, 0.45)",
                    "rgba(229, 231, 235, 1)",
                  ],
                }}
                transition={{
                  duration: 6,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: idx * 0.5,
                }}
              >
                <div className="text-7xl text-gold/20 font-serif absolute top-3 left-1/2 -translate-x-1/2 leading-none">“</div>
                <p className="text-gray-600 italic mb-8 relative z-10 leading-relaxed flex-1 flex items-center">
                  {t.text}
                </p>
                <div className="flex items-center justify-center gap-3 mt-auto">
                  <div className="w-10 h-[1px] bg-gold"></div>
                  <span className="font-serif text-lg">{t.name}</span>
                </div>
              </motion.div>
            ))}
          </div>

          <a 
            href="https://www.google.com/search?sca_esv=8e1e5042512a1d5f&cs=1&sxsrf=ANbL-n5nwFKYlFBEDQ9ibcu29ywf7y0lOg:1776792373974&uds=ALYpb_ncDc7jTlmw6Mmq7NjuX5c-Mt0XEPwC6zJXYcz4tyOoM_c3jQyhMZmX0R5ZSBw3Eyee6rftr7wXBUE04260vx8XHLohzb9svXvi6yNwTGxv9L5ULM3dnagG3__6ivqskkSBc-f7kVWJYYGNxb3wAHh0MXI5Eg&q=Salon+Fryzjerski+%22O+W%C5%82os%22+Opinie&si=AL3DRZEsmMGCryMMFSHJ3StBhOdZ2-6yYkXd_doETEE1OR-qOSTK8S0uXRPUWAtVGx8pge1lZcfsye9gE2vYZXjiUVIfH4BHCF3BPl4YPX7wc8b4bgaS2mVnppVkxIf2Lywv1RODGZhZHBm0thMLjxi2ONvohNHFqA%3D%3D&hl=pl-PL&sa=X&ved=2ahUKEwjZ4qeyu_-TAxWrB9sEHR4JLB4Q_4MLegQIDxAO&biw=1875&bih=933&dpr=1" 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 border-b-2 border-gold pb-1 text-sm uppercase tracking-widest hover:text-gold transition-colors"
          >
            Zobacz opinie w Google
          </a>
        </div>
      </section>

      {/* Final CTA */}
      <section ref={ctaRef} className="py-40 relative bg-black text-white overflow-hidden">
        <motion.div className="absolute inset-0 z-0" style={{ y: ctaBackgroundY }}>
          <img src={ASSETS.FRYZURY[9]} className="w-full h-[115%] object-cover opacity-20" alt="CTA backdrop" referrerPolicy="no-referrer" />
        </motion.div>
        <motion.div className="max-w-4xl mx-auto px-6 relative z-10 text-center" style={{ y: ctaContentY }}>
           <h2 className="text-5xl md:text-7xl mb-10 leading-tight">Umów wizytę <br /> już dziś</h2>
           <p className="text-gray-400 font-light text-xl mb-12 max-w-2xl mx-auto">
             Zadbaj o swoje włosy pod okiem profesjonalistów.
             <br />
             Czekamy na Ciebie w naszym salonie.
           </p>
           <a 
            href="tel:691668935" 
            className="inline-block px-16 py-6 bg-gold text-white hover:bg-white hover:text-black transition-all duration-500 rounded-sm uppercase tracking-widest text-lg font-medium shadow-2xl"
           >
             Zadzwoń 691 668 935
           </a>
        </motion.div>
      </section>
    </div>
  );
}
