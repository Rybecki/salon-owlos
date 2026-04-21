import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { X, ZoomIn } from "lucide-react";
import { ASSETS } from "../constants/assets";

export default function Gallery() {
  const [selectedImg, setSelectedImg] = useState<string | null>(null);

  return (
    <div className="pt-32 pb-20 px-6">
      <div className="max-w-7xl mx-auto text-center mb-20">
        <span className="text-gold uppercase tracking-widest text-sm mb-4 block">Portfolio</span>
        <h1 className="text-6xl md:text-7xl mb-6">Nasza Galeria</h1>
        <p className="text-gray-500 font-light max-w-2xl mx-auto text-lg leading-relaxed">
          Zobacz efekty naszej pracy. Od spektakularnych metamorfoz i precyzyjnej koloryzacji, aż po misterne upięcia okolicznościowe.
        </p>
      </div>

      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {ASSETS.FRYZURY.map((img, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: idx * 0.1, duration: 0.6 }}
            whileHover={{ scale: 1.02 }}
            className="relative aspect-[4/5] overflow-hidden rounded-sm group cursor-pointer shadow-lg"
            onClick={() => setSelectedImg(img)}
          >
            <img 
              src={img} 
              alt={`Fryzura ${idx + 1}`} 
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" 
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-colors flex items-center justify-center opacity-0 group-hover:opacity-100">
               <ZoomIn className="text-white" size={40} />
            </div>
          </motion.div>
        ))}
      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {selectedImg && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] bg-black/95 flex items-center justify-center p-4 md:p-10"
            onClick={() => setSelectedImg(null)}
          >
            <button className="absolute top-10 right-10 text-white hover:text-gold transition-colors">
              <X size={48} />
            </button>
            <motion.img
              initial={{ scale: 0.9 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.9 }}
              src={selectedImg}
              alt="Powiększone zdjęcie"
              className="max-w-full max-h-full object-contain rounded-sm shadow-2xl"
              referrerPolicy="no-referrer"
            />
          </motion.div>
        )}
      </AnimatePresence>

      <section className="mt-32 max-w-4xl mx-auto text-center border-t border-gray-100 pt-20">
        <h2 className="text-4xl mb-8">Zainspirowana?</h2>
        <p className="text-gray-500 mb-10 text-lg font-light">Pokaż nam zdjęcie, które Ci się podoba, a my postaramy się uzyskać wymarzony efekt na Twoich włosach.</p>
        <a 
          href="tel:691668935" 
          className="inline-block px-12 py-4 bg-black text-white hover:bg-gold transition-colors rounded-sm uppercase tracking-widest text-sm"
        >
          Umów wizytę
        </a>
      </section>
    </div>
  );
}
