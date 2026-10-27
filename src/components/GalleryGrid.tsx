import { useEffect, useState, useCallback } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';
import type { GalleryImage } from '@/types';

export function GalleryGrid({ images }: { images: GalleryImage[] }) {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const close = useCallback(() => setActiveIndex(null), []);
  const next = useCallback(() => setActiveIndex((i) => (i === null ? i : (i + 1) % images.length)), [images.length]);
  const prev = useCallback(() => setActiveIndex((i) => (i === null ? i : (i - 1 + images.length) % images.length)), [images.length]);

  useEffect(() => {
    if (activeIndex === null) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') close();
      if (e.key === 'ArrowRight') next();
      if (e.key === 'ArrowLeft') prev();
    };
    window.addEventListener('keydown', onKey);
    document.body.style.overflow = 'hidden';
    return () => {
      window.removeEventListener('keydown', onKey);
      document.body.style.overflow = '';
    };
  }, [activeIndex, close, next, prev]);

  return (
    <>
      <div className="columns-1 sm:columns-2 lg:columns-3 gap-4 [&>*]:mb-4">
        {images.map((img, i) => (
          <button
            key={i}
            onClick={() => setActiveIndex(i)}
            className="group relative block w-full overflow-hidden rounded-xl break-inside-avoid"
          >
            <img
              src={img.src}
              alt={img.alt}
              loading="lazy"
              className="w-full object-cover transition-transform duration-500 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-forest-900/0 transition-colors duration-300 group-hover:bg-forest-900/20" />
          </button>
        ))}
      </div>

      <AnimatePresence>
        {activeIndex !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] flex items-center justify-center bg-forest-900/90 backdrop-blur-sm p-4"
            onClick={close}
          >
            <button className="absolute top-5 right-5 text-ivory/80 hover:text-ivory" onClick={close} aria-label="Close">
              <X className="h-7 w-7" strokeWidth={1.5} />
            </button>
            <button className="absolute left-4 text-ivory/80 hover:text-ivory" onClick={(e) => { e.stopPropagation(); prev(); }} aria-label="Previous">
              <ChevronLeft className="h-9 w-9" strokeWidth={1.5} />
            </button>
            <motion.img
              key={activeIndex}
              src={images[activeIndex].src}
              alt={images[activeIndex].alt}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.3 }}
              className="max-h-[85vh] max-w-[90vw] rounded-lg object-contain"
              onClick={(e) => e.stopPropagation()}
            />
            <button className="absolute right-4 text-ivory/80 hover:text-ivory" onClick={(e) => { e.stopPropagation(); next(); }} aria-label="Next">
              <ChevronRight className="h-9 w-9" strokeWidth={1.5} />
            </button>
            <p className="absolute bottom-6 left-1/2 -translate-x-1/2 text-sm text-ivory/60 max-w-md text-center px-4">
              {images[activeIndex].alt}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
