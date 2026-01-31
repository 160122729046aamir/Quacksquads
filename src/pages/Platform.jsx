import React from 'react'
import '../effects.css'

const Platform = () => {
    return (
        <div
            className="
        underwater-bg min-h-screen relative overflow-hidden
        !px-6
        !pt-14 md:!pt-22 lg:!pt-26
        !pb-32
      "
        >
            <div className="depth-fog" />

            <div className="max-w-7xl mx-auto relative z-10">
                <div className="flex flex-col lg:flex-row !gap-20 items-center !justify-center">

                    {/* LEFT — FLOW */}
                    <div className="lg:w-1/2 w-full reveal lg:sticky lg:!top-32">
                        {/* Heading */}
                        <div className="relative !mb-10">
                            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
                                <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-teal-300 to-emerald-400 animate-gradient">
                                    How It
                                </span>{' '}
                                <span className="text-white">Works</span>
                            </h1>

                            {/* Animated underline */}
                            <div className="relative mt-4 h-px w-32 overflow-hidden">
                                <div className="absolute inset-0 bg-gradient-to-r from-cyan-400 via-teal-400 to-emerald-400 animate-underline" />
                            </div>
                        </div>

                        <p className="text-base md:text-lg text-gray-300 !mb-16 max-w-xl leading-relaxed">
                            Prediction-to-Earn transforms market participation into a
                            measurable, compounding advantage — not a one-off gamble.
                        </p>

                        {/* Steps */}
                        <div className="relative !space-y-14">
                            {[
                                {
                                    step: '01',
                                    title: 'Predict',
                                    text: 'Participate in sports, crypto, and global event markets.',
                                    gradient: 'from-cyan-400 to-blue-500',
                                },
                                {
                                    step: '02',
                                    title: 'Score',
                                    text: 'Points scale with volume, accuracy, and consistency.',
                                    gradient: 'from-teal-400 to-emerald-500',
                                },
                                {
                                    step: '03',
                                    title: 'Multiply',
                                    text: 'Utility NFTs automatically amplify your weekly score.',
                                    gradient: 'from-purple-400 to-pink-500',
                                },
                                {
                                    step: '04',
                                    title: 'Convert',
                                    text: 'Weekly points convert into protocol-native tokens.',
                                    gradient: 'from-emerald-400 to-cyan-400',
                                },
                            ].map((s, i) => (
                                <div
                                    key={i}
                                    className="
          relative flex !gap-8
          group
          transition-transform duration-500
          hover:translate-x-1
        "
                                >
                                    {/* Step rail */}
                                    <div className="relative flex flex-col items-center">
                                        {/* Glow halo */}
                                        <div
                                            className={`
              absolute inset-0
              rounded-xl
              bg-gradient-to-r ${s.gradient}
              blur-xl opacity-0
              group-hover:opacity-40
              transition-opacity duration-500
            `}
                                        />

                                        {/* Step box */}
                                        <div
                                            className={`
              relative z-10
              w-12 h-12 rounded-xl
              bg-slate-900/90 backdrop-blur
              border border-white/15
              flex items-center justify-center
              font-semibold text-white
              transition-all duration-500
              group-hover:border-transparent
              group-hover:bg-gradient-to-r ${s.gradient}
            `}
                                        >
                                            {s.step}
                                        </div>

                                        {i !== 3 && (
                                            <div className="w-px flex-1 bg-gradient-to-b from-white/30 to-transparent !mt-4" />
                                        )}
                                    </div>

                                    {/* Text */}
                                    <div className="relative !pt-1">
                                        <h3
                                            className="
              text-lg md:text-xl font-semibold text-white !mb-2
              bg-gradient-to-r bg-clip-text text-transparent
              from-white to-white
              group-hover:from-cyan-300 group-hover:to-emerald-300
              transition-all duration-500
            "
                                        >
                                            {s.title}
                                        </h3>

                                        <p className="text-gray-400 leading-relaxed max-w-sm group-hover:text-gray-300 transition-colors duration-300">
                                            {s.text}
                                        </p>
                                    </div>

                                    {/* Hover glass backdrop */}
                                    <div
                                        className="
            absolute inset-[-10px]
            rounded-2xl
            bg-gradient-to-r from-white/5 via-white/10 to-white/5
            opacity-0
            group-hover:opacity-100
            transition-opacity duration-500
            pointer-events-none
          "
                                    />
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* RIGHT — DISTRIBUTION */}
                    <div className="w-full lg:w-1/2 reveal reveal-delay-1">
                        <div
                            className="
      relative group
      rounded-3xl
      bg-slate-900/85 backdrop-blur-xl
      border border-white/15
      !p-8 md:!p-10
      overflow-hidden
      transition-all duration-300
      hover:border-cyan-400/40
    "
                        >
                            {/* Ambient gradient wash (visual only) */}
                            <div className="absolute inset-0 pointer-events-none">
                                <div
                                    className="
          absolute inset-0
          bg-gradient-to-br from-cyan-500/10 via-transparent to-purple-500/10
          opacity-0 group-hover:opacity-100
          transition-opacity duration-500
        "
                                />
                            </div>

                            {/* Header */}
                            <div className="relative !mb-10">
                                <p className="text-xs tracking-[0.3em] uppercase text-cyan-300/70 !mb-2">
                                    Protocol Engine
                                </p>
                                <h2 className="text-xl md:text-2xl font-semibold text-white">
                                    Weekly Distribution Pool
                                </h2>
                            </div>

                            {/* Bars */}
                            <div className="relative !space-y-10">
                                {[
                                    {
                                        label: 'Prediction Volume',
                                        value: '40%',
                                        width: 'w-[40%]',
                                        gradient: 'from-cyan-400 to-blue-500',
                                    },
                                    {
                                        label: 'Accuracy Rating',
                                        value: '35%',
                                        width: 'w-[35%]',
                                        gradient: 'from-teal-400 to-emerald-500',
                                    },
                                    {
                                        label: 'Loyalty Streak',
                                        value: '25%',
                                        width: 'w-[25%]',
                                        gradient: 'from-purple-400 to-pink-500',
                                    },
                                ].map((item, i) => (
                                    <div key={i} className="group/bar">
                                        {/* Label row */}
                                        <div className="flex items-end justify-between !mb-3">
                                            <span className="text-sm font-medium text-gray-300">
                                                {item.label}
                                            </span>
                                            <span className="text-lg font-bold text-white/90 group-hover/bar:text-cyan-300 transition-colors duration-300">
                                                {item.value}
                                            </span>
                                        </div>

                                        {/* Track */}
                                        <div className="relative h-3 rounded-full bg-white/10 overflow-hidden">
                                            {/* Fill — WIDTH & ANIMATION UNCHANGED */}
                                            <div
                                                className={`h-full ${item.width} bg-gradient-to-r ${item.gradient}`}
                                            />

                                            {/* Subtle glow overlay (no size change) */}
                                            <div
                                                className={`
                absolute inset-0
                bg-gradient-to-r ${item.gradient}
                opacity-0 group-hover/bar:opacity-25
                blur-md
                transition-opacity duration-500
              `}
                                            />
                                        </div>
                                    </div>
                                ))}
                            </div>

                            {/* Quote */}
                            <div
                                className="
        relative !mt-14
        rounded-2xl
        bg-white/5
        border border-white/10
        !p-6
        transition-colors duration-300
        group-hover:border-cyan-400/30
      "
                            >
                                <p className="text-sm text-gray-300 italic text-center leading-relaxed">
                                    “Points are a transparent ledger of long-term contribution to the protocol.”
                                </p>
                            </div>

                            {/* Bottom accent */}
                            <div className="absolute bottom-0 left-8 right-8 h-px bg-gradient-to-r from-transparent via-cyan-400/30 to-transparent opacity-70" />
                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default Platform
