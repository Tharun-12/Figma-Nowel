import { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { Plus, Minus } from 'lucide-react';
import type { FAQCategory, FAQItem } from '@/types';

export function FAQAccordion({ categories }: { categories: FAQCategory[] }) {
  const [openKey, setOpenKey] = useState<string | null>(null);

  return (
    <div className="space-y-12">
      {categories.map((cat) => (
        <div key={cat.category}>
          <h3 className="font-serif text-2xl text-forest mb-5">{cat.category}</h3>
          <div className="divide-y divide-sage-200 border-y border-sage-200">
            {cat.items.map((item, i) => {
              const key = `${cat.category}-${i}`;
              const isOpen = openKey === key;
              return (
                <FAQRow key={key} item={item} isOpen={isOpen} onToggle={() => setOpenKey(isOpen ? null : key)} />
              );
            })}
          </div>
        </div>
      ))}
    </div>
  );
}

function FAQRow({ item, isOpen, onToggle }: { item: FAQItem; isOpen: boolean; onToggle: () => void }) {
  return (
    <div>
      <button
        onClick={onToggle}
        className="flex w-full items-center justify-between gap-4 py-5 text-left"
        aria-expanded={isOpen}
      >
        <span className="font-medium text-charcoal">{item.q}</span>
        {isOpen ? <Minus className="h-5 w-5 shrink-0 text-forest" strokeWidth={1.5} /> : <Plus className="h-5 w-5 shrink-0 text-forest" strokeWidth={1.5} />}
      </button>
      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25, ease: 'easeOut' }}
            className="overflow-hidden"
          >
            <p className="pb-5 pr-10 text-sm leading-relaxed text-charcoal-400">{item.a}</p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
