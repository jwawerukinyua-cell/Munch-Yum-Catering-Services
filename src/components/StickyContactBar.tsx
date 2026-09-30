import React from 'react';
import { Phone, MessageCircle } from 'lucide-react';
import { BUSINESS_INFO } from '../data/cateringData';

interface StickyContactBarProps {
  onOpenConsultation: () => void;
}

export const StickyContactBar: React.FC<StickyContactBarProps> = ({ onOpenConsultation }) => {
  return (
    <>
      {/* Mobile Sticky Bottom Bar (Visible on screen < md) */}
      <div className="md:hidden fixed bottom-0 left-0 right-0 z-40 bg-stone-950/95 backdrop-blur-xl border-t border-stone-800 p-2.5 px-4 flex items-center gap-2 shadow-2xl safe-area-pb">
        <a
          href={`tel:${BUSINESS_INFO.phone}`}
          className="flex-1 flex items-center justify-center gap-2 py-3 px-3 rounded-xl bg-stone-900 border border-stone-700 text-stone-100 font-bold text-xs active:scale-95 transition"
        >
          <Phone className="w-4 h-4 text-amber-400" />
          <span>Call 0112323708</span>
        </a>

        <a
          href={BUSINESS_INFO.whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="flex-1 flex items-center justify-center gap-2 py-3 px-3 rounded-xl bg-emerald-600 active:bg-emerald-700 text-white font-bold text-xs shadow-lg shadow-emerald-950/50 active:scale-95 transition"
        >
          <MessageCircle className="w-4 h-4" />
          <span>WhatsApp Chat</span>
        </a>
      </div>

      {/* Desktop Floating WhatsApp Button (Visible on md and up) */}
      <div className="hidden md:flex fixed bottom-6 right-6 z-40 flex-col items-end gap-2 group">
        <div className="bg-stone-900/95 text-stone-200 text-xs py-1.5 px-3 rounded-lg border border-stone-800 shadow-xl opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
          <span>Chef Kabura is online · Chat on WhatsApp</span>
        </div>

        <a
          href={BUSINESS_INFO.whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2.5 px-4 py-3 rounded-full bg-emerald-600 hover:bg-emerald-500 text-white shadow-2xl shadow-emerald-900/50 transition-all transform hover:scale-105 active:scale-95"
          aria-label="Chat on WhatsApp with Munch & Yum Catering"
        >
          <div className="relative">
            <MessageCircle className="w-5 h-5" />
            <span className="absolute -top-1 -right-1 w-2.5 h-2.5 bg-emerald-300 rounded-full border border-emerald-700 animate-ping" />
          </div>
          <span className="text-xs font-bold tracking-wide">WhatsApp 0112323708</span>
        </a>
      </div>
    </>
  );
};
