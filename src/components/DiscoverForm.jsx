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

    console.log('Diving deeper:', formData);

    setTimeout(() => {
      setIsDiving(false);
      setShowSuccess(true);
      alert('🌊 Welcome to the Deep! Your coordinates have been logged.');

      setTimeout(() => setShowSuccess(false), 3000);
    }, 2500);
  };

  return (
    <form onSubmit={handleSubmit} className="!space-y-6 sm:!space-y-7">
      {/* Twitter */}
      <div className="reveal reveal-delay-1">
        <label className="block text-[10px] sm:text-xs uppercase tracking-[0.3em] text-cyan-300/80 !mb-2 font-semibold">
          🐠 Twitter Explorer ID
        </label>

        <div className="relative group">
          <input
            type="text"
            name="twitter_username"
            value={formData.twitter_username}
            onChange={handleChange}
            placeholder="@deep_explorer"
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
              focus:border-cyan-400/50
              focus:shadow-[0_0_25px_rgba(34,211,238,0.35)]
              group-hover:border-white/30
            "
          />
          <span className="absolute right-3.5 sm:right-4 top-1/2 -translate-y-1/2 text-cyan-400/60 text-sm sm:text-base">
            @
          </span>
        </div>
      </div>

      {/* Tweet */}
      <div className="reveal reveal-delay-2">
        <label className="block text-[10px] sm:text-xs uppercase tracking-[0.3em] text-cyan-300/80 !mb-2 font-semibold">
          🔗 Signal Beacon Link
        </label>

        <div className="relative group">
          <input
            type="url"
            name="tweet_link"
            value={formData.tweet_link}
            onChange={handleChange}
            placeholder="https://twitter.com/..."
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
              focus:border-cyan-400/50
              focus:shadow-[0_0_25px_rgba(34,211,238,0.35)]
              group-hover:border-white/30
            "
          />
          <span className="absolute right-3.5 sm:right-4 top-1/2 -translate-y-1/2 text-cyan-400/60 text-sm sm:text-base">
            🔗
          </span>
        </div>
      </div>

      {/* Wallet */}
      <div className="reveal reveal-delay-3">
        <label className="block text-[10px] sm:text-xs uppercase tracking-[0.3em] text-cyan-300/80 !mb-2 font-semibold">
          💎 Deep Vault Address
        </label>

        <div className="relative group">
          <input
            type="text"
            name="wallet_address"
            value={formData.wallet_address}
            onChange={handleChange}
            placeholder="0x..."
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
              focus:border-cyan-400/50
              focus:shadow-[0_0_25px_rgba(34,211,238,0.35)]
              group-hover:border-white/30
            "
          />
          <span className="absolute right-3.5 sm:right-4 top-1/2 -translate-y-1/2 text-cyan-400/60 text-sm sm:text-base">
            💎
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
            font-bold tracking-widest
            text-black
            bg-gradient-to-r from-cyan-400 via-teal-400 to-emerald-400
            transition-all duration-300
            hover:shadow-[0_0_35px_rgba(34,211,238,0.6)]
            hover:-translate-y-0.5
            disabled:opacity-70
          "
        >
          {isDiving ? (
            <span className="flex items-center justify-center gap-3">
              <span className="animate-pulse">🌊</span>
              DESCENDING
              <span className="animate-pulse">🌊</span>
            </span>
          ) : (
            '🫧 DIVE DEEPER 🫧'
          )}
        </button>

        {/* Loading bar */}
        {isDiving && (
          <div className="absolute left-0 right-0 -bottom-3 h-1 rounded-full overflow-hidden bg-white/10">
            <div className="h-full w-full bg-gradient-to-r from-cyan-400 via-teal-400 to-cyan-400 animate-pulse" />
          </div>
        )}
      </div>

      {/* Success */}
      {showSuccess && (
        <div className="text-center text-cyan-300 text-xs sm:text-sm font-semibold animate-fade-in">
          🌊 Coordinates received. Welcome to the Deep.
        </div>
      )}
    </form>
  );
};

export default DiscoverForm;
