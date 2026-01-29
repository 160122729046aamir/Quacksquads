import React from 'react'
import '../effects.css'

const Economy = () => {
    return (
        <div
            className="
        underwater-bg min-h-screen
        relative overflow-hidden
        flex flex-col items-center
        !px-6
        !pb-32
        !pt-22 md:!pt-22 lg:!pt-24
      "
        >
            <div className="depth-fog" />

            <div className="max-w-6xl w-full relative z-10">

                {/* Header */}
                <div className="text-center !mb-24 reveal">
                    <h1 className="text-5xl md:text-7xl font-bold text-white !mb-6">
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-teal-300 to-emerald-400">
                            Tokenomics
                        </span>{' '}
                        & Assets
                    </h1>
                    <p className="text-xl text-gray-400">
                        Assets designed for long-term alignment.
                    </p>
                </div>

                {/* NFT Multipliers */}
                <div className="!mb-32 reveal reveal-delay-1">
                    <h2 className="text-2xl font-bold text-white !mb-12 !pl-4 border-l-4 border-cyan-500">
                        Core Assets · NFT Multipliers
                    </h2>

                    <div className="grid grid-cols-2 md:grid-cols-4 !gap-6">
                        {[
                            {
                                title: 'Scout',
                                count: '1 Held',
                                multi: '0.2x',
                                gradient: 'from-zinc-700 via-slate-800 to-black',
                                glow: 'rgba(148, 163, 184, 0.25)',
                            },
                            {
                                title: 'Explorer',
                                count: '5 Held',
                                multi: '1.2x',
                                gradient: 'from-sky-600 via-cyan-800 to-black',
                                glow: 'rgba(56, 189, 248, 0.35)',
                            },
                            {
                                title: 'Navigator',
                                count: '10 Held',
                                multi: '2.0x',
                                gradient: 'from-emerald-600 via-teal-800 to-black',
                                glow: 'rgba(52, 211, 153, 0.40)',
                            },
                            {
                                title: 'Admiral',
                                count: '50 Held',
                                multi: '12.0x',
                                gradient: 'from-violet-600 via-fuchsia-800 to-black',
                                glow: 'rgba(167, 139, 250, 0.55)',
                            },
                        ].map((tier, i) => (
                            <div
                                key={i}
                                className="
          relative group
          rounded-2xl
          border border-white/15
          !p-8
          overflow-hidden
          transition-all duration-500 ease-out
          hover:-translate-y-1
          hover:border-white/30
          animate-card-fade
        "
                                style={{
                                    backgroundImage: `linear-gradient(to bottom right, ${tier.gradient})`,
                                    animationDelay: `${i * 120}ms`,
                                }}
                            >
                                {/* Breathing outer glow */}
                                <div
                                    className="absolute -inset-1 rounded-2xl blur-xl pointer-events-none animate-glow-breathe"
                                    style={{ backgroundColor: tier.glow }}
                                />

                                {/* Sheen sweep */}
                                <div
                                    className="
            absolute inset-0
            bg-gradient-to-r from-transparent via-white/10 to-transparent
            translate-x-[-120%]
            group-hover:translate-x-[120%]
            transition-transform duration-[1200ms]
            pointer-events-none
          "
                                />

                                {/* Tier initial */}
                                <div className="absolute top-4 right-4 text-6xl font-black text-white/5 select-none">
                                    {tier.title[0]}
                                </div>

                                {/* Content */}
                                <div className="relative z-10">
                                    <div className="text-4xl font-extrabold text-white !mb-2 tracking-tight animate-multiplier-pulse">
                                        {tier.multi}
                                    </div>

                                    <div className="text-xs uppercase tracking-[0.25em] text-gray-400 !mb-6">
                                        Multiplier Bonus
                                    </div>

                                    <div
                                        className="
              inline-flex items-center
              text-sm font-medium text-white/80
              !pb-2
              border-b border-white/20
              group-hover:text-cyan-300
              transition-colors duration-300
            "
                                    >
                                        {tier.count}
                                    </div>
                                </div>

                                {/* Bottom accent */}
                                <div className="absolute bottom-0 left-6 right-6 h-px bg-gradient-to-r from-transparent via-white/25 to-transparent opacity-60" />
                            </div>
                        ))}
                    </div>
                </div>

                {/* Token Conversion */}
                <div
                    className="
    relative reveal reveal-delay-2 group
    rounded-3xl
    bg-slate-900/75 backdrop-blur-xl
    border border-white/15
    !p-10 md:!p-16
    flex flex-col md:flex-row
    items-center
    !gap-12
    overflow-hidden
    transition-all duration-500
    hover:border-cyan-400/40
  "
                >
                    {/* Ambient animated glow */}
                    <div className="absolute inset-0 pointer-events-none">
                        <div className="absolute -top-28 -right-28 w-96 h-96 rounded-full blur-3xl bg-gradient-to-br from-cyan-500/25 via-teal-400/15 to-transparent animate-glow-drift" />
                    </div>

                    {/* Soft glass sheen */}
                    <div
                        className="
      absolute inset-0
      bg-gradient-to-r from-transparent via-white/5 to-transparent
      translate-x-[-120%]
      group-hover:translate-x-[120%]
      transition-transform duration-[1600ms]
      pointer-events-none
    "
                    />

                    {/* LEFT — Text */}
                    <div className="relative md:w-1/2">
                        <p className="text-xs uppercase tracking-[0.3em] text-cyan-300/70 !mb-3">
                            Protocol Roadmap
                        </p>

                        <h2 className="text-3xl font-bold text-white !mb-6">
                            Eventual Tokenization
                        </h2>

                        <p className="text-gray-300 leading-relaxed !mb-10 max-w-lg">
                            We don’t sell tokens. We distribute them to builders.
                            Accumulate points now to secure your allocation in the future
                            governance token.
                        </p>

                        <div
                            className="
        inline-flex items-center
        !px-6 !py-2
        rounded-full
        bg-gradient-to-r from-cyan-500/15 to-teal-500/15
        border border-cyan-400/30
        text-cyan-300
        text-sm font-bold tracking-widest
        animate-badge-pulse
      "
                        >
                            PHASE · ACCUMULATION
                        </div>
                    </div>

                    {/* RIGHT — Progress */}
                    <div className="md:w-1/2 w-full flex items-center justify-center">
                        <div className="relative w-full max-w-md">

                            {/* TRACK (clips bar only) */}
                            <div className="relative h-2 bg-white/10 rounded-full overflow-hidden">
                                <div
                                    className="
          h-full
          w-1/3
          bg-gradient-to-r from-cyan-400 to-teal-400
          rounded-full
          shadow-[0_0_20px_rgba(34,211,238,0.6)]
        "
                                />
                            </div>

                            {/* MARKER (NOT clipped anymore) */}
                            <div
                                className="
        absolute
        top-1
        left-1/3
        -translate-x-1/2
        -translate-y-1/2
        w-9 h-9
        rounded-full
        bg-slate-900
        border-4 border-cyan-400
        shadow-[0_0_25px_rgba(34,211,238,0.8)]
        animate-marker-pulse
        z-10
      "
                            >
                                <div className="absolute inset-2 rounded-full bg-cyan-400/30" />
                            </div>

                            {/* Labels */}
                            <div className="flex justify-between !mt-6 text-xs uppercase font-bold tracking-widest">
                                <span className="text-cyan-400">Now</span>
                                <span className="text-gray-500">TGE</span>
                            </div>
                        </div>
                    </div>



                    {/* Bottom accent */}
                    <div className="absolute bottom-0 left-10 right-10 h-px bg-gradient-to-r from-transparent via-cyan-400/40 to-transparent" />
                </div>

            </div>
        </div>
    )
}

export default Economy
