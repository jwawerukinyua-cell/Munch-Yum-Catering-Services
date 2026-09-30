import React, { useState } from 'react';
import { X, Calendar, Users, Utensils, CheckCircle2, MessageCircle } from 'lucide-react';
import { BUSINESS_INFO } from '../data/cateringData';

interface ConsultationModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialData?: {
    eventType?: string;
    guests?: number;
    style?: string;
  };
}

export const ConsultationModal: React.FC<ConsultationModalProps> = ({
  isOpen,
  onClose,
  initialData,
}) => {
  const [fullName, setFullName] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [email, setEmail] = useState('');
  const [eventType, setEventType] = useState(initialData?.eventType || 'Wedding Reception');
  const [eventDate, setEventDate] = useState('');
  const [guestCount, setGuestCount] = useState(initialData?.guests?.toString() || '100');
  const [serviceStyle, setServiceStyle] = useState(initialData?.style || 'Grand Buffet Feast');
  const [specialRequests, setSpecialRequests] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);

  if (!isOpen) return null;

  const handleSubmitWhatsApp = (e: React.FormEvent) => {
    e.preventDefault();
    const text = `Hello Munch & Yum Catering!
I would like to request an official catering consultation:
• Name: ${fullName || 'Not specified'}
• Phone: ${phoneNumber || 'Not specified'}
• Email: ${email || 'Not specified'}
• Event Type: ${eventType}
• Preferred Date: ${eventDate || 'To be decided'}
• Estimated Guests: ${guestCount} Guests
• Service Style: ${serviceStyle}
• Special Notes / Dietary: ${specialRequests || 'None'}

Looking forward to hearing from Chef Kabura!`;

    window.open(`https://wa.me/254112323708?text=${encodeURIComponent(text)}`, '_blank');
    setIsSubmitted(true);
  };

  const handleSubmitWeb = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-stone-950/80 backdrop-blur-md animate-fade-in">
      <div className="relative w-full max-w-2xl bg-stone-900 border border-stone-700/80 rounded-2xl shadow-2xl overflow-hidden max-h-[90vh] flex flex-col">
        {/* Header Bar */}
        <div className="p-5 sm:p-6 border-b border-stone-800 flex items-center justify-between bg-stone-950/80">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-full bg-gradient-to-br from-orange-500 to-amber-600 flex items-center justify-center text-white shadow">
              <Utensils className="w-4 h-4" />
            </div>
            <div>
              <h3 className="font-serif text-lg sm:text-xl font-bold text-white">
                Request a Custom Catering Quote
              </h3>
              <p className="text-xs text-amber-400">Direct response from Chef Kabura Karanja</p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-2 rounded-lg text-stone-400 hover:text-white hover:bg-stone-800 transition cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Body */}
        <div className="p-6 sm:p-8 overflow-y-auto flex-1">
          {isSubmitted ? (
            <div className="text-center py-10 space-y-5">
              <div className="w-16 h-16 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center mx-auto border border-emerald-500/40">
                <CheckCircle2 className="w-8 h-8" />
              </div>
              <h4 className="font-serif text-2xl font-bold text-white">
                Inquiry Received!
              </h4>
              <p className="text-stone-300 text-sm max-w-md mx-auto leading-relaxed">
                Thank you, <strong className="text-white">{fullName || 'Valued Guest'}</strong>! Chef Kabura Karanja and the Munch & Yum Catering team will contact you shortly to finalize your bespoke proposal.
              </p>
              <div className="p-4 rounded-xl bg-stone-950 border border-stone-800 max-w-sm mx-auto space-y-2 text-xs text-stone-300">
                <p>For urgent dates or immediate inquiries:</p>
                <a
                  href={`tel:${BUSINESS_INFO.phone}`}
                  className="font-mono text-amber-400 font-bold text-sm block"
                >
                  Call {BUSINESS_INFO.phoneFormatted}
                </a>
              </div>
              <button
                onClick={onClose}
                className="px-6 py-2.5 rounded-lg bg-stone-800 text-white text-xs font-semibold hover:bg-stone-700 transition"
              >
                Close Window
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmitWhatsApp} className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {/* Full Name */}
                <div className="space-y-1.5">
                  <label className="text-xs font-medium text-stone-300">
                    Your Name *
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Grace Mwangi"
                    value={fullName}
                    onChange={(e) => setFullName(e.target.value)}
                    className="w-full px-3.5 py-2.5 rounded-lg bg-stone-950 border border-stone-700 text-stone-100 text-sm focus:outline-none focus:border-amber-500"
                  />
                </div>

                {/* Phone / WhatsApp */}
                <div className="space-y-1.5">
                  <label className="text-xs font-medium text-stone-300">
                    Phone / WhatsApp Number *
                  </label>
                  <input
                    type="tel"
                    required
                    placeholder="e.g. 0712 345 678"
                    value={phoneNumber}
                    onChange={(e) => setPhoneNumber(e.target.value)}
                    className="w-full px-3.5 py-2.5 rounded-lg bg-stone-950 border border-stone-700 text-stone-100 text-sm focus:outline-none focus:border-amber-500"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {/* Email */}
                <div className="space-y-1.5">
                  <label className="text-xs font-medium text-stone-300">
                    Email Address (Optional)
                  </label>
                  <input
                    type="email"
                    placeholder="your.email@example.com"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full px-3.5 py-2.5 rounded-lg bg-stone-950 border border-stone-700 text-stone-100 text-sm focus:outline-none focus:border-amber-500"
                  />
                </div>

                {/* Event Type */}
                <div className="space-y-1.5">
                  <label className="text-xs font-medium text-stone-300">
                    Event Type *
                  </label>
                  <select
                    value={eventType}
                    onChange={(e) => setEventType(e.target.value)}
                    className="w-full px-3.5 py-2.5 rounded-lg bg-stone-950 border border-stone-700 text-stone-100 text-sm focus:outline-none focus:border-amber-500"
                  >
                    <option value="Wedding Reception">Wedding Reception</option>
                    <option value="Corporate Gala / Conference">Corporate Gala / Conference</option>
                    <option value="Private Birthday / Milestone">Private Birthday / Milestone</option>
                    <option value="Ruracio / Traditional Ceremony">Ruracio / Traditional Ceremony</option>
                    <option value="Executive Boardroom Catering">Executive Boardroom Catering</option>
                    <option value="Meal Prep & Gourmet Platters">Meal Prep & Gourmet Platters</option>
                  </select>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {/* Event Date */}
                <div className="space-y-1.5">
                  <label className="text-xs font-medium text-stone-300">
                    Target Event Date *
                  </label>
                  <input
                    type="date"
                    required
                    value={eventDate}
                    onChange={(e) => setEventDate(e.target.value)}
                    className="w-full px-3.5 py-2.5 rounded-lg bg-stone-950 border border-stone-700 text-stone-100 text-sm focus:outline-none focus:border-amber-500"
                  />
                </div>

                {/* Guest Count */}
                <div className="space-y-1.5">
                  <label className="text-xs font-medium text-stone-300">
                    Estimated Guest Count *
                  </label>
                  <input
                    type="number"
                    min="10"
                    max="2000"
                    required
                    placeholder="e.g. 150"
                    value={guestCount}
                    onChange={(e) => setGuestCount(e.target.value)}
                    className="w-full px-3.5 py-2.5 rounded-lg bg-stone-950 border border-stone-700 text-stone-100 text-sm focus:outline-none focus:border-amber-500"
                  />
                </div>
              </div>

              {/* Service Style */}
              <div className="space-y-1.5">
                <label className="text-xs font-medium text-stone-300">
                  Preferred Service Style
                </label>
                <select
                  value={serviceStyle}
                  onChange={(e) => setServiceStyle(e.target.value)}
                  className="w-full px-3.5 py-2.5 rounded-lg bg-stone-950 border border-stone-700 text-stone-100 text-sm focus:outline-none focus:border-amber-500"
                >
                  <option value="Grand Buffet Feast">Grand Buffet Feast (Warm chafing warmers & carving station)</option>
                  <option value="Cocktail & Canapés">Cocktail & Canapés (Passed finger foods & sliders)</option>
                  <option value="Plated 3-Course VIP Dinner">Plated 3-Course VIP Dinner (Seated table service)</option>
                  <option value="Live Charcoal BBQ & Roasting">Live Charcoal BBQ & Roasting (Sizzling nyama choma)</option>
                  <option value="Drop-Off Gourmet Platters">Drop-Off Gourmet Platters (Ready-to-serve boxes)</option>
                </select>
              </div>

              {/* Dietary / Special Notes */}
              <div className="space-y-1.5">
                <label className="text-xs font-medium text-stone-300">
                  Dietary Preferences or Special Requests
                </label>
                <textarea
                  rows={2}
                  placeholder="e.g. Need Halal certification, 10 vegetarian guests, venue located in Karen, Nairobi"
                  value={specialRequests}
                  onChange={(e) => setSpecialRequests(e.target.value)}
                  className="w-full px-3.5 py-2 rounded-lg bg-stone-950 border border-stone-700 text-stone-100 text-sm focus:outline-none focus:border-amber-500"
                />
              </div>

              {/* Action Buttons */}
              <div className="pt-2 flex flex-col sm:flex-row gap-3">
                <button
                  type="submit"
                  className="flex-1 flex items-center justify-center gap-2 py-3 px-4 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-sm shadow-lg shadow-emerald-900/30 transition cursor-pointer"
                >
                  <MessageCircle className="w-4 h-4" />
                  <span>Send via WhatsApp (Fastest)</span>
                </button>

                <button
                  type="button"
                  onClick={handleSubmitWeb}
                  className="sm:w-auto px-5 py-3 rounded-xl bg-stone-800 hover:bg-stone-700 text-stone-200 border border-stone-700 text-xs font-semibold transition cursor-pointer"
                >
                  Submit Online
                </button>
              </div>
            </form>
          )}
        </div>
      </div>
    </div>
  );
};
