import React from 'react';
import { Quote, CheckCircle2 } from 'lucide-react';
import { TESTIMONIALS, Testimonial } from '../data/cateringData';

export const TestimonialsSection: React.FC = () => {
  return (
    <section id="testimonials" className="py-24 bg-stone-950 relative border-t border-stone-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-block text-xs font-semibold uppercase tracking-widest text-amber-400">
            <span>Client Praise & Social Proof</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-white tracking-tight">
            Loved by Couples, Hosts & Executives
          </h2>
          <p className="text-stone-400 text-base sm:text-lg font-light leading-relaxed">
            Nothing makes us happier than hearing the joy in our clients' voices when their guests keep asking, "Who cooked this amazing food?!"
          </p>

          {/* Aggregate Rating Banner */}
          <div className="inline-flex items-center gap-3 px-4 py-2 rounded-full bg-stone-900 border border-stone-800 text-stone-200 text-xs sm:text-sm font-medium">
            <span className="font-bold text-amber-400 font-mono">5.0 / 5.0</span>
            <span className="text-stone-600">·</span>
            <span>Average Client Rating</span>
            <span className="text-stone-600">·</span>
            <span className="text-emerald-400 font-semibold">100% Satisfaction</span>
          </div>
        </div>

        {/* Testimonials Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {TESTIMONIALS.map((t: Testimonial) => (
            <div
              key={t.id}
              className="rounded-2xl bg-stone-900/60 border border-stone-800/90 p-6 sm:p-8 hover:border-amber-500/40 transition flex flex-col justify-between space-y-5 relative group"
            >
              <div className="space-y-4">
                {/* Header: Rating & Quote Icon */}
                <div className="flex items-center justify-between">
                  <div className="inline-flex items-center gap-2 text-xs font-semibold text-amber-400 tracking-wider uppercase font-mono">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
                    <span>Verified 5.0 Event</span>
                  </div>
                  <Quote className="w-6 h-6 text-stone-700 group-hover:text-amber-500/40 transition" />
                </div>

                {/* Highlight Tagline */}
                <h4 className="font-serif text-base sm:text-lg font-bold text-white text-balance">
                  "{t.highlight}"
                </h4>

                {/* Full Review Text */}
                <p className="text-stone-300 text-xs sm:text-sm leading-relaxed font-light">
                  {t.comment}
                </p>
              </div>

              {/* Author & Event Info */}
              <div className="pt-4 border-t border-stone-800/80 flex items-center justify-between text-xs">
                <div>
                  <h5 className="font-semibold text-white flex items-center gap-1.5">
                    <span>{t.clientName}</span>
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 inline" />
                  </h5>
                  <p className="text-stone-400 mt-0.5">{t.role} · {t.eventType}</p>
                </div>
                <span className="text-stone-500 text-[11px] font-mono">{t.date}</span>
              </div>
            </div>
          ))}
        </div>

        {/* Social Feed Banner */}
        <div className="mt-14 text-center">
          <p className="text-xs uppercase tracking-wider text-stone-400 mb-2">
            See our latest event setups, behind-the-scenes prep & happy clients
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4 text-xs font-semibold">
            <a
              href="https://www.instagram.com/munch_and_yum_catering?stkn=MTRva3h0dXJrdnNiMQ=="
              target="_blank"
              rel="noopener noreferrer"
              className="text-stone-300 hover:text-amber-400 transition"
            >
              Instagram @munch_and_yum_catering
            </a>
            <span className="text-stone-700">·</span>
            <a
              href="https://www.tiktok.com/@munch.yum.catering"
              target="_blank"
              rel="noopener noreferrer"
              className="text-stone-300 hover:text-amber-400 transition"
            >
              TikTok @munch.yum.catering
            </a>
            <span className="text-stone-700">·</span>
            <a
              href="https://www.facebook.com/profile.php?id=61558447504705"
              target="_blank"
              rel="noopener noreferrer"
              className="text-stone-300 hover:text-amber-400 transition"
            >
              Facebook: Munch & Yum Catering
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
