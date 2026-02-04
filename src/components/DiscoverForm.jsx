import React, { useState } from 'react';
import '../effects.css';

const DiscoverForm = () => {
  const [formData, setFormData] = useState({
    twitter_username: '',
    tweet_link: '',
    wallet_address: '',
  });

  const [isDiving, setIsDiving] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsDiving(true);

    console.log('Whitelist submission:', formData);

    setTimeout(() => {
      setIsDiving(false);
      setShowSuccess(true);
      setTimeout(() => setShowSuccess(false), 3200);
    }, 2200);
  };

  return (
    <div className="relative">
      {/* Success overlay animation */}
      {showSuccess && (
        <div
          className="
            success-overlay
            fixed inset-0
            z-[100]
            flex items-center justify-center
            !px-4 sm:!px-6
          "
        >
          {/* Dark scrim behind card */}
          <div className="absolute inset-0 bg-slate-950/80 backdrop-blur-md" />

          {/* Centered success card */}
          <div
            className="
              relative
              max-w-md w-full
              rounded-2xl
              border border-cyan-400/60
              bg-slate-950/90
              overflow-hidden
              shadow-[0_26px_80px_rgba(15,23,42,0.95)]
            "
          >
            {/* Glow background */}
            <div
              className="
                absolute inset-0
                bg-[radial-gradient(circle_at_top,_rgba(56,189,248,0.45),transparent_60%),radial-gradient(circle_at_bottom,_rgba(16,185,129,0.4),transparent_60%)]
                opacity-80
                animate-success-bg
              "
            />

            {/* Grid shimmer */}
            <div
              className="
                absolute inset-8
                opacity-30
                bg-[linear-gradient(rgba(148,163,184,0.5)_1px,transparent_1px),linear-gradient(90deg,rgba(148,163,184,0.4)_1px,transparent_1px)]
                bg-[size:32px_32px]
                animate-success-grid
              "
            />

            {/* Content */}
            <div
              className="
                relative
                flex flex-col items-center
                !gap-3
                text-center
                !px-6 sm:!px-8
                !py-4 sm:!py-5
                animate-success-pop
              "
            >
              {/* Checkmark orb */}
              <div
                className="
                  relative
                  flex items-center justify-center
                  h-16 w-16
                  rounded-full
                  bg-slate-950/80
                  border border-emerald-400/80
                  shadow-[0_0_35px_rgba(16,185,129,0.9)]
                  animate-success-orbit
                "
              >
                <span className="text-3xl">✅</span>
                <span
                  className="
                    pointer-events-none
                    absolute inset-0
                    rounded-full
                    border border-emerald-300/40
                    animate-success-ring
                  "
                />
              </div>

              <div className="!space-y-1">
                <p className="text-[11px] sm:text-xs uppercase tracking-[0.28em] text-cyan-100/90">
                  Signal Captured
                </p>
                <p className="text-sm sm:text-base font-semibold text-slate-50">
                  Whitelist request received. Your signal is being verified.
                </p>
                <p className="text-[11px] sm:text-xs text-slate-300/80">
                  You can safely close this portal — verification continues in the background.
                </p>
              </div>
            </div>
          </div>
        </div>
      )}

      <form onSubmit={handleSubmit} className="!space-y-6 sm:!space-y-7">
        {/* Twitter / X */}
        <div className="reveal reveal-delay-1">
          <label className="block text-[10px] sm:text-xs uppercase tracking-[0.3em] text-cyan-300/80 !mb-2 font-semibold">
            🐦 X / Twitter Handle
          </label>

          <div className="relative group">
            <input
              type="text"
              name="twitter_username"
              value={formData.twitter_username}
              onChange={handleChange}
              placeholder="@Quacksquads_fan"
              required
              className="
                w-full
                rounded-xl
                bg-slate-900/70
                border border-white/15
                !px-3.5 sm:!px-4
                !py-2.5 sm:!py-3
                text-sm sm:text-base
                text-white
                placeholder-gray-500
                transition-all duration-300
                focus:outline-none
                focus:border-cyan-400/60
                focus:shadow-[0_0_25px_rgba(34,211,238,0.4)]
                group-hover:border-white/30
              "
            />
            <span className="absolute !right-3.5 sm:!right-4 top-1/2 -translate-y-1/2 text-cyan-400/60 text-sm sm:text-base">
              @
            </span>
          </div>
        </div>

        {/* Tweet */}
        <div className="reveal reveal-delay-2">
          <label className="block text-[10px] sm:text-xs uppercase tracking-[0.3em] text-cyan-300/80 !mb-2 font-semibold">
            📡 Whitelist Post Link
          </label>

          <div className="relative group">
            <input
              type="url"
              name="tweet_link"
              value={formData.tweet_link}
              onChange={handleChange}
              placeholder="https://x.com/Quacksquads/status/..."
              required
              className="
                w-full
                rounded-xl
                bg-slate-900/70
                border border-white/15
                !px-3.5 sm:!px-4
                !py-2.5 sm:!py-3
                text-sm sm:text-base
                text-white
                placeholder-gray-500
                transition-all duration-300
                focus:outline-none
                focus:border-cyan-400/60
                focus:shadow-[0_0_25px_rgba(34,211,238,0.4)]
                group-hover:border-white/30
              "
            />
            <span className="absolute !right-3.5 sm:!right-4 top-1/2 -translate-y-1/2 text-cyan-400/60 text-sm sm:text-base">
              🔗
            </span>
          </div>
        </div>

        {/* Wallet */}
        <div className="reveal reveal-delay-3">
          <label className="block text-[10px] sm:text-xs uppercase tracking-[0.3em] text-cyan-300/80 !mb-2 font-semibold">
            💼 Wallet for Allocation
          </label>

          <div className="relative group">
            <input
              type="text"
              name="wallet_address"
              value={formData.wallet_address}
              onChange={handleChange}
              placeholder="Enter your Solana wallet address (e.g. 4f3Y...9KpL)"
              required
              className="
                w-full
                rounded-xl
                bg-slate-900/70
                border border-white/15
                !px-3.5 sm:!px-4
                !py-2.5 sm:!py-3
                text-sm sm:text-base
                text-white
                placeholder-gray-500
                transition-all duration-300
                focus:outline-none
                focus:border-cyan-400/60
                focus:shadow-[0_0_25px_rgba(34,211,238,0.4)]
                group-hover:border-white/30
              "
            />
            <span className="absolute !right-3.5 sm:!right-4 top-1/2 -translate-y-1/2 text-cyan-400/60 text-sm sm:text-base">
              💳
            </span>
          </div>
        </div>

        {/* Submit */}
        <div className="reveal reveal-delay-4 !pt-3 sm:!pt-4 relative">
          <button
            type="submit"
            disabled={isDiving}
            className="
              relative w-full
              rounded-xl
              !py-2.5 sm:!py-3
              text-sm sm:text-base
              font-bold
              tracking-[0.25em]
              text-slate-950
              bg-gradient-to-r from-cyan-400 via-teal-400 to-emerald-400
              transition-all duration-300
              hover:shadow-[0_0_35px_rgba(34,211,238,0.7)]
              hover:-translate-y-0.5
              disabled:opacity-80
            "
          >
            {isDiving ? (
              <span className="flex items-center justify-center !gap-3">
                <span className="animate-pulse">🚀</span>
                VERIFYING SIGNAL
                <span className="animate-pulse">🚀</span>
              </span>
            ) : (
              'REQUEST WHITELIST ACCESS'
            )}
          </button>

          {/* Loading bar */}
          {isDiving && (
            <div className="absolute left-0 right-0 -bottom-3 h-1 rounded-full overflow-hidden bg-white/10">
              <div className="h-full w-full bg-gradient-to-r from-cyan-400 via-teal-400 to-cyan-400 animate-pulse" />
            </div>
          )}
        </div>

        {/* Inline success text */}
        {showSuccess && (
          <div className="text-center text-cyan-300 text-xs sm:text-sm font-semibold animate-fade-in">
            ✅ Signal received. Your whitelist request is in review.
          </div>
        )}
      </form>
    </div>
  );
};

export default DiscoverForm;
