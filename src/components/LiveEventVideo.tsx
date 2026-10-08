import React, { useState, useRef } from 'react';
import {
  Play,
  Pause,
  Volume2,
  VolumeX,
  ExternalLink,
  MessageCircle,
  Flame,
  Sparkles,
  CheckCircle2,
  ShieldCheck,
  ArrowRight,
  Maximize2,
  RefreshCw,
  Film,
  Share2
} from 'lucide-react';
import { BUSINESS_INFO } from '../data/cateringData';
import { CATERING_IMAGES, CATERING_VIDEOS } from '../assets/images';

interface LiveEventVideoProps {
  onOpenConsultation: () => void;
}

export const LiveEventVideo: React.FC<LiveEventVideoProps> = ({ onOpenConsultation }) => {
  const [activeMode, setActiveMode] = useState<'direct' | 'embed'>('direct');
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(false);
  const [iframeLoaded, setIframeLoaded] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  const videoInfo = BUSINESS_INFO.featuredVideo;
  const directVideoSrc = CATERING_VIDEOS.kaburaLiveBuffet || CATERING_IMAGES.featuredVideo;

  const handleTogglePlay = () => {
    if (!videoRef.current) return;
    if (isPlaying) {
      videoRef.current.pause();
      setIsPlaying(false);
    } else {
      videoRef.current.play().then(() => {
        setIsPlaying(true);
      }).catch(() => {
        // Fallback if browser blocks autoplay with sound
        if (videoRef.current) {
          videoRef.current.muted = true;
          setIsMuted(true);
          videoRef.current.play();
          setIsPlaying(true);
        }
      });
    }
  };

  const handleToggleMute = () => {
    if (!videoRef.current) return;
    const nextMuted = !isMuted;
    videoRef.current.muted = nextMuted;
    setIsMuted(nextMuted);
  };

  const handleFullscreen = () => {
    if (!videoRef.current) return;
    if (videoRef.current.requestFullscreen) {
      videoRef.current.requestFullscreen();
    }
  };

  const handleWhatsAppBooking = () => {
    const text = `Hello Chef Kabura! I watched your live catering video (Munch & Yum buffet setup with sweet plantains, spiced potatoes, sukuma wiki & fresh fruit platters) on your website, and I would love to book a similar catering setup for my event. Could you share details?`;
    window.open(`https://wa.me/254112323708?text=${encodeURIComponent(text)}`, '_blank');
  };

  return (
    <section id="video" className="py-20 lg:py-28 bg-[#151413] relative overflow-hidden border-t border-stone-800/80">
      {/* Background Decorative Ambient Lighting */}
      <div className="absolute top-10 left-1/2 -translate-x-1/2 w-[700px] h-[350px] bg-gradient-to-r from-amber-600/10 via-orange-500/15 to-transparent rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-400 text-xs font-semibold uppercase tracking-widest">
            <Flame className="w-3.5 h-3.5 text-orange-400 animate-pulse" />
            <span>Behind The Scenes · Live Event Showcase</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-white tracking-tight leading-tight">
            Watch Chef Kabura & Team In Action
          </h2>
          <p className="text-stone-300 text-base sm:text-lg font-light leading-relaxed">
            Experience the sizzle, elegance, and joyful energy of a real Munch & Yum celebration feast. From golden chafing dish service to sweet watermelon and pineapple fruit carvings.
          </p>

          {/* Mode Switcher Tabs: Direct Video vs Facebook Embed */}
          <div className="pt-2 inline-flex items-center p-1.5 rounded-2xl bg-stone-900 border border-stone-800 shadow-lg">
            <button
              onClick={() => {
                setActiveMode('direct');
                setTimeout(() => {
                  if (videoRef.current && !isPlaying) {
                    videoRef.current.play().then(() => setIsPlaying(true)).catch(() => {});
                  }
                }, 100);
              }}
              className={`flex items-center gap-2 px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all cursor-pointer ${
                activeMode === 'direct'
                  ? 'bg-amber-500 text-stone-950 shadow-md font-bold'
                  : 'text-stone-400 hover:text-white'
              }`}
            >
              <Film className="w-4 h-4" />
              <span>Direct HD Video (Instant)</span>
              <span className="hidden sm:inline-block px-1.5 py-0.5 rounded text-[10px] bg-stone-950/20 uppercase font-black">
                Fast
              </span>
            </button>

            <button
              onClick={() => {
                setActiveMode('embed');
                if (videoRef.current) {
                  videoRef.current.pause();
                  setIsPlaying(false);
                }
              }}
              className={`flex items-center gap-2 px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all cursor-pointer ${
                activeMode === 'embed'
                  ? 'bg-blue-600 text-white shadow-md font-bold'
                  : 'text-stone-400 hover:text-white'
              }`}
            >
              <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
                <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
              </svg>
              <span>Facebook Reel Embed</span>
            </button>
          </div>
        </div>

        {/* Main Reel & Showcase Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          {/* Left Column: Player Frame */}
          <div className="lg:col-span-5 flex flex-col items-center">
            <div className="relative w-full max-w-[360px] sm:max-w-[380px] rounded-3xl p-3 bg-gradient-to-b from-stone-800 via-stone-900 to-stone-950 border border-stone-700/80 shadow-2xl shadow-orange-950/40">
              {/* Smartphone / Player Top Header Indicator */}
              <div className="flex items-center justify-between px-3 py-2 text-xs text-stone-400 border-b border-stone-800/70 mb-2.5">
                <div className="flex items-center gap-2">
                  <span className="w-2.5 h-2.5 rounded-full bg-red-500 animate-ping" />
                  <span className="font-bold text-white tracking-wider uppercase text-[11px]">
                    {activeMode === 'direct' ? 'HD Player' : 'Live Reel'}
                  </span>
                </div>
                <span className="text-[11px] text-amber-400 font-medium">Chef Kabura · Nairobi</span>
              </div>

              {/* Video Player Display */}
              <div className="relative aspect-[9/16] w-full bg-stone-950 rounded-2xl overflow-hidden flex items-center justify-center border border-stone-800 group">
                {activeMode === 'direct' ? (
                  <>
                    {/* Direct HTML5 Video Player */}
                    <video
                      ref={videoRef}
                      src={directVideoSrc}
                      className="w-full h-full object-cover rounded-2xl cursor-pointer"
                      playsInline
                      loop
                      preload="auto"
                      onPlay={() => setIsPlaying(true)}
                      onPause={() => setIsPlaying(false)}
                      onClick={handleTogglePlay}
                    />

                    {/* Central Play/Pause Watermark Button when paused */}
                    {!isPlaying && (
                      <button
                        onClick={handleTogglePlay}
                        className="absolute inset-0 flex items-center justify-center bg-black/40 hover:bg-black/30 transition-all cursor-pointer group/play"
                        aria-label="Play video"
                      >
                        <div className="w-16 h-16 rounded-full bg-amber-500 text-stone-950 flex items-center justify-center shadow-2xl shadow-amber-500/50 transform group-hover/play:scale-110 transition-transform">
                          <Play className="w-7 h-7 fill-stone-950 ml-1" />
                        </div>
                      </button>
                    )}

                    {/* Custom Player Controls Overlay on Hover */}
                    <div className="absolute bottom-0 inset-x-0 p-3 bg-gradient-to-t from-black/90 via-black/50 to-transparent flex items-center justify-between gap-3 text-white">
                      <div className="flex items-center gap-2">
                        <button
                          onClick={handleTogglePlay}
                          className="p-2 rounded-lg bg-stone-900/80 hover:bg-stone-800 text-white transition cursor-pointer"
                          aria-label={isPlaying ? 'Pause' : 'Play'}
                        >
                          {isPlaying ? <Pause className="w-4 h-4" /> : <Play className="w-4 h-4 fill-white" />}
                        </button>

                        <button
                          onClick={handleToggleMute}
                          className="p-2 rounded-lg bg-stone-900/80 hover:bg-stone-800 text-amber-400 transition cursor-pointer"
                          aria-label={isMuted ? 'Unmute' : 'Mute'}
                        >
                          {isMuted ? <VolumeX className="w-4 h-4" /> : <Volume2 className="w-4 h-4" />}
                        </button>
                      </div>

                      <div className="flex items-center gap-2">
                        <button
                          onClick={handleFullscreen}
                          className="p-2 rounded-lg bg-stone-900/80 hover:bg-stone-800 text-stone-200 transition cursor-pointer"
                          aria-label="Fullscreen"
                          title="Fullscreen view"
                        >
                          <Maximize2 className="w-4 h-4" />
                        </button>
                      </div>
                    </div>
                  </>
                ) : (
                  <>
                    {/* Facebook Video Iframe Embed */}
                    <iframe
                      src={videoInfo.embedUrl}
                      title="Munch & Yum Catering Facebook Video Reel"
                      className="w-full h-full border-0 rounded-2xl"
                      scrolling="no"
                      allowFullScreen
                      allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
                      onLoad={() => setIframeLoaded(true)}
                    />

                    {/* Loading state indicator before iframe paints */}
                    {!iframeLoaded && (
                      <div className="absolute inset-0 flex flex-col items-center justify-center bg-stone-950/90 text-stone-300 p-6 text-center space-y-3 pointer-events-none">
                        <div className="w-12 h-12 rounded-full border-2 border-amber-500 border-t-transparent animate-spin" />
                        <p className="text-xs text-stone-400 font-medium">Loading Facebook reel...</p>
                      </div>
                    )}
                  </>
                )}
              </div>

              {/* Player Bottom Action Row */}
              <div className="mt-3 px-1 flex items-center justify-between gap-2">
                <a
                  href={videoInfo.facebookShareUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 flex items-center justify-center gap-2 py-2.5 px-3 rounded-xl bg-blue-600 hover:bg-blue-500 text-white text-xs font-semibold transition-all shadow-md group"
                >
                  <svg className="w-4 h-4 fill-current shrink-0" viewBox="0 0 24 24">
                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                  </svg>
                  <span>Watch on Facebook</span>
                  <ExternalLink className="w-3.5 h-3.5 opacity-70 group-hover:translate-x-0.5 transition-transform" />
                </a>

                <button
                  onClick={handleWhatsAppBooking}
                  className="flex items-center justify-center gap-1.5 py-2.5 px-3 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white text-xs font-semibold transition-all shadow-md cursor-pointer"
                  title="Inquire about this setup on WhatsApp"
                >
                  <MessageCircle className="w-4 h-4" />
                  <span>Book Setup</span>
                </button>
              </div>
            </div>

            {/* Helper caption */}
            <p className="text-xs text-stone-400 text-center mt-3 flex items-center gap-1.5">
              <Volume2 className="w-3.5 h-3.5 text-amber-400 shrink-0" />
              <span>
                {activeMode === 'direct'
                  ? 'Tap speaker icon or play button for audio & full controls'
                  : 'Tap the speaker on the Facebook video to unmute sound'}
              </span>
            </p>
          </div>

          {/* Right Column: Story & Catering Experience Highlights */}
          <div className="lg:col-span-7 space-y-6">
            <div className="space-y-3">
              <div className="inline-flex items-center gap-1.5 text-xs text-amber-400 font-semibold tracking-wider uppercase">
                <Sparkles className="w-4 h-4 text-amber-400" />
                <span>Real Events · Real Smiles · Zero Compromise</span>
              </div>
              <h3 className="font-serif text-2xl sm:text-3xl lg:text-4xl font-bold text-white tracking-tight">
                "We don't just drop off food — we create a feast your guests talk about for weeks."
              </h3>
              <p className="text-stone-300 text-base sm:text-lg font-light leading-relaxed">
                As seen in this live video, Chef Kabura personally presents every banquet spread with passion. Golden chafing warmers keep the succulent roasted meats and savory starches at peak piping-hot temperature, flanked by crisp vegetable medleys and colorful fruit pyramids.
              </p>
            </div>

            {/* Featured Banquet Dishes seen in the video */}
            <div className="p-4 rounded-2xl bg-amber-950/30 border border-amber-600/30 space-y-2.5">
              <span className="text-xs font-bold uppercase tracking-wider text-amber-400 block">
                Highlighted In This Video Setup:
              </span>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 text-xs text-stone-200">
                <div className="flex items-center gap-1.5 bg-stone-900/80 px-2.5 py-1.5 rounded-lg border border-stone-800">
                  <span className="text-amber-400">🍌</span>
                  <span>Sweet Plantains</span>
                </div>
                <div className="flex items-center gap-1.5 bg-stone-900/80 px-2.5 py-1.5 rounded-lg border border-stone-800">
                  <span className="text-amber-400">🥔</span>
                  <span>Herb Roasted Potatoes</span>
                </div>
                <div className="flex items-center gap-1.5 bg-stone-900/80 px-2.5 py-1.5 rounded-lg border border-stone-800">
                  <span className="text-amber-400">🍗</span>
                  <span>Seasoned Chicken Stew</span>
                </div>
                <div className="flex items-center gap-1.5 bg-stone-900/80 px-2.5 py-1.5 rounded-lg border border-stone-800">
                  <span className="text-amber-400">🍉</span>
                  <span>Fresh Fruit Carvings</span>
                </div>
              </div>
            </div>

            {/* 4 Video Event Pillars */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-1">
              <div className="p-4 rounded-2xl bg-stone-900/80 border border-stone-800 space-y-2">
                <div className="flex items-center gap-2.5 text-amber-400 font-semibold text-sm">
                  <Flame className="w-4 h-4 text-orange-400" />
                  <span>Gold Chafing Warming Stations</span>
                </div>
                <p className="text-xs text-stone-300 leading-relaxed">
                  Piping hot presentation with golden chafing warmers that retain steam and succulent juices until the last guest is served.
                </p>
              </div>

              <div className="p-4 rounded-2xl bg-stone-900/80 border border-stone-800 space-y-2">
                <div className="flex items-center gap-2.5 text-amber-400 font-semibold text-sm">
                  <Sparkles className="w-4 h-4 text-amber-400" />
                  <span>Artisanal Tablescape Decor</span>
                </div>
                <p className="text-xs text-stone-300 leading-relaxed">
                  Polished brass dishes, wooden stone carving boards, fresh fruit pyramids, and elegant garnishes that make event photos pop.
                </p>
              </div>

              <div className="p-4 rounded-2xl bg-stone-900/80 border border-stone-800 space-y-2">
                <div className="flex items-center gap-2.5 text-amber-400 font-semibold text-sm">
                  <ShieldCheck className="w-4 h-4 text-emerald-400" />
                  <span>Hygienic Temperature Control</span>
                </div>
                <p className="text-xs text-stone-300 leading-relaxed">
                  Every tray is maintained at strict food-safety temperatures so your guests enjoy hot, fresh, succulent servings throughout the feast.
                </p>
              </div>

              <div className="p-4 rounded-2xl bg-stone-900/80 border border-stone-800 space-y-2">
                <div className="flex items-center gap-2.5 text-amber-400 font-semibold text-sm">
                  <CheckCircle2 className="w-4 h-4 text-blue-400" />
                  <span>Uniformed Staff & Attentive Service</span>
                </div>
                <p className="text-xs text-stone-300 leading-relaxed">
                  Executive chef oversight and courteous waitstaff ensuring seamless buffet flow and genuine Kenyan warmth.
                </p>
              </div>
            </div>

            {/* CTAs */}
            <div className="pt-4 flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
              <button
                onClick={handleWhatsAppBooking}
                className="flex items-center justify-center gap-3 px-6 py-4 rounded-xl text-base font-bold text-white bg-emerald-600 hover:bg-emerald-500 shadow-xl shadow-emerald-950/60 active:scale-98 transition-all cursor-pointer group"
              >
                <MessageCircle className="w-5 h-5 text-white" />
                <span>Book This Setup on WhatsApp</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>

              <button
                onClick={onOpenConsultation}
                className="flex items-center justify-center gap-2.5 px-6 py-4 rounded-xl text-base font-semibold text-stone-200 bg-stone-900 hover:bg-stone-800 border border-stone-700 transition-all cursor-pointer"
              >
                <span>Request Custom Quote</span>
              </button>

              <a
                href={videoInfo.facebookShareUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 px-4 py-4 rounded-xl text-sm font-semibold text-blue-400 hover:text-blue-300 transition-colors"
              >
                <span>Open in Facebook App</span>
                <ExternalLink className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
