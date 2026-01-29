import React from 'react';
import DiscoverForm from '../components/DiscoverForm';
import '../effects.css';
import './Discover.css';

const Discover = () => {
    // Generate fewer, larger bubbles for background
    const bubbles = Array.from({ length: 15 }, (_, i) => ({
        id: i,
        left: Math.random() * 100,
        delay: Math.random() * 5,
        duration: 10 + Math.random() * 8,
        size: 8 + Math.random() * 15
    }));

    // Chamber interior bubbles (overlaid on image)
    const chamberBubbles = Array.from({ length: 12 }, (_, i) => ({
        id: i,
        left: 20 + Math.random() * 60,
        bottom: Math.random() * 20,
        delay: Math.random() * 4,
        duration: 6 + Math.random() * 4,
        size: 4 + Math.random() * 8
    }));

    // Generate particles
    const particles = Array.from({ length: 25 }, (_, i) => ({
        id: i,
        left: Math.random() * 100,
        delay: Math.random() * 8,
        duration: 18 + Math.random() * 12,
        driftX: (Math.random() - 0.5) * 80
    }));

    // Light beams
    const lightBeams = [
        { left: '20%', delay: 1 },
        { left: '60%', delay: 3 }
    ];

    return (
        <div className="discover-page underwater-bg relative min-h-screen px-6 pb-32 md:px-12 lg:px-20 xl:px-32 overflow-hidden flex flex-col justify-center" style={{ paddingBottom: '15px', paddingTop: '90px' }}>
            {/* Light Beams */}
            {lightBeams.map((beam, i) => (
                <div
                    key={`beam-${i}`}
                    className="light-beam"
                    style={{
                        left: beam.left,
                        animationDelay: `${beam.delay}s`
                    }}
                />
            ))}

            {/* Floating Particles */}
            {particles.map((particle) => (
                <div
                    key={`particle-${particle.id}`}
                    className="particle"
                    style={{
                        left: `${particle.left}%`,
                        bottom: '-10px',
                        animationDelay: `${particle.delay}s`,
                        animationDuration: `${particle.duration}s`,
                        '--drift-x': `${particle.driftX}px`
                    }}
                />
            ))}

            {/* Floating Bubbles */}
            {bubbles.map((bubble) => (
                <div
                    key={bubble.id}
                    className="bubble"
                    style={{
                        left: `${bubble.left}%`,
                        animationDelay: `${bubble.delay}s`,
                        animationDuration: `${bubble.duration}s`,
                        width: `${bubble.size}px`,
                        height: `${bubble.size}px`
                    }}
                />
            ))}

            {/* Depth Fog */}
            <div className="depth-fog"></div>

            {/* Header - Fixed Spacing */}
            <div className="relative z-10 text-center !mb-6 md:!mb-6 reveal md:!mt-0 overflow-hidden">

                {/* Ambient animated glow */}
                <div className="absolute inset-0 flex justify-center pointer-events-none">
                    <div className="w-[420px] h-[420px] rounded-full bg-cyan-400/10 blur-3xl animate-glow-breathe" />
                </div>

                {/* Heading */}
                <h2 className="relative text-5xl md:text-7xl font-extrabold tracking-tight !mb-5 leading-tight animate-title-reveal">
                    <span className="text-white">
                        Discovery
                    </span>{' '}
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-300 via-teal-300 to-emerald-300 animate-gradient-drift">
                        Chamber
                    </span>
                </h2>

                {/* Divider */}
                <div className="flex justify-center !mb-4">
                    <span className="h-px w-24 bg-gradient-to-r from-transparent via-cyan-400/60 to-transparent animate-divider-draw" />
                </div>

                {/* Subtext */}
                <p className="text-sm md:text-base text-gray-400 tracking-[0.35em] uppercase animate-subtitle-reveal">
                    Coordinates Required · Deep Dive Access
                </p>
            </div>



            {/* Main Content */}
            <div className="relative z-10 mx-auto w-full px-6" style={{ maxWidth: '1400px' }}>
                <div className="flex flex-col gap-6 lg:flex-row items-center lg:items-start lg:justify-between" style={{ justifyContent: 'space-around', width: '100%' }}>

                    {/* Left - Suspension Chamber */}
                    <div className="flex flex-col items-center reveal reveal-delay-1">
                        <div className="relative w-full max-w-lg group">

                            {/* === SUSPENSION CHAMBER === */}
                            <div
                                className="
        relative w-full aspect-square
        flex items-center justify-center
        rounded-3xl
        bg-slate-900/60
        border border-cyan-400/20
        !p-8
        overflow-hidden
        transition-all duration-700
        hover:border-cyan-400/40
        hover:shadow-[0_0_120px_rgba(34,211,238,0.25)]
      "
                            >
                                {/* Energy ring */}
                                <div className="absolute inset-6 rounded-full border border-cyan-400/20 animate-spin-slow pointer-events-none" />
                                <div className="absolute inset-12 rounded-full border border-teal-400/15 animate-spin-reverse-slow pointer-events-none" />

                                {/* Ambient glow */}
                                <div className="absolute inset-0 pointer-events-none">
                                    <div className="absolute inset-0 bg-gradient-to-br from-cyan-400/10 via-transparent to-teal-400/10 blur-2xl" />
                                </div>

                                {/* Chamber bubbles */}
                                {chamberBubbles.map((bubble) => (
                                    <div
                                        key={`chamber-bubble-${bubble.id}`}
                                        className="bubble absolute z-20 opacity-60"
                                        style={{
                                            left: `${bubble.left}%`,
                                            bottom: `${bubble.bottom}%`,
                                            animationDelay: `${bubble.delay}s`,
                                            animationDuration: `${bubble.duration}s`,
                                            width: `${bubble.size}px`,
                                            height: `${bubble.size}px`
                                        }}
                                    />
                                ))}

                                {/* Astronaut */}
                                <img
                                    src="/assets/underwater-astronaut.png"
                                    alt="Deep Sea Explorer in Suspension"
                                    className="
          w-full h-full object-contain
          relative z-10
          animate-float-slow
          transition-transform duration-700
          group-hover:scale-[1.03]
        "
                                />
                            </div>

                            {/* === CHAMBER STATUS === */}
                            <div className="text-center !mt-5 !mb-6">
                                <p className="text-xs uppercase tracking-[0.35em] text-cyan-300/80 flex items-center justify-center gap-3">
                                    <span className="font-semibold">CHAMBER_ID · sequence</span>
                                    <span className="flex items-center gap-2 text-teal-300">
                                        <span className="w-2 h-2 rounded-full bg-teal-400 animate-pulse" />
                                        ACTIVE
                                    </span>
                                </p>
                            </div>

                            {/* === STATS PANEL === */}
                            <div
                                className="
        relative
        rounded-2xl
        bg-slate-900/75 backdrop-blur-xl
        border border-white/10
        !p-5 md:!p-6
        transition-all duration-500
        hover:border-cyan-400/30
      "
                            >
                                {/* Subtle HUD grid */}
                                <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:24px_24px] pointer-events-none opacity-30 rounded-2xl" />

                                <div className="relative grid grid-cols-1 sm:grid-cols-2 !gap-5">
                                    {[
                                        { label: 'Oxygen Level', value: '98.2%', color: 'text-teal-300' },
                                        { label: 'Bio Readings', value: 'Stable', color: 'text-cyan-300' },
                                        { label: 'Depth', value: '2,847m', color: 'text-emerald-300' },
                                        { label: 'Active Explorers', value: '127', color: 'text-aqua-light animate-pulse' },
                                    ].map((stat, i) => (
                                        <div key={i} className="text-left">
                                            <p className="text-gray-400 text-[11px] font-medium uppercase tracking-widest !mb-1">
                                                {stat.label}
                                            </p>
                                            <p className={`text-2xl md:text-3xl font-bold ${stat.color}`}>
                                                {stat.value}
                                            </p>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>


                    {/* Right - Discovery Panel - Proper Padding and Alignment */}
                    <div className="reveal reveal-delay-2 w-full max-w-xl">
                        <div
                            className="
      relative group
      rounded-3xl
      bg-slate-900/80 backdrop-blur-xl
      border border-white/15
      !p-8 md:!p-9
      overflow-hidden
      transition-all duration-500
      hover:border-cyan-400/40
      hover:shadow-[0_30px_80px_-35px_rgba(34,211,238,0.4)]
    "
                        >
                            {/* Soft glow */}
                            <div className="absolute -inset-[1px] rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none">
                                <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-cyan-400/25 via-teal-400/10 to-transparent blur-xl" />
                            </div>

                            {/* Subtle sheen */}
                            <div
                                className="
        absolute inset-0
        bg-gradient-to-r from-transparent via-white/8 to-transparent
        translate-x-[-120%]
        group-hover:translate-x-[120%]
        transition-transform duration-[1300ms]
        pointer-events-none
      "
                            />

                            {/* Header */}
                            <div className="relative !mb-8 !pb-4 border-b border-cyan-400/20">
                                <h3 className="text-2xl font-bold flex items-center gap-2">
                                    <span className="text-3xl">🌊</span>
                                    <span className="bg-gradient-to-r from-cyan-300 via-teal-300 to-emerald-300 bg-clip-text text-transparent">
                                        Access Protocol
                                    </span>
                                </h3>
                            </div>

                            {/* Steps */}
                            <div className="relative !space-y-6 !mb-8">
                                {[
                                    {
                                        icon: '🐙',
                                        title: 'Follow the Current',
                                        text: (
                                            <>
                                                Connect with{' '}
                                                <a
                                                    href="https://twitter.com"
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                    className="text-teal-300 hover:text-cyan-300 underline font-medium transition-colors"
                                                >
                                                    @deep_dive_labs
                                                </a>
                                            </>
                                        ),
                                    },
                                    {
                                        icon: '🪸',
                                        title: 'Amplify Signal',
                                        text: (
                                            <>
                                                Share the{' '}
                                                <a
                                                    href="https://twitter.com"
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                    className="text-teal-300 hover:text-cyan-300 underline font-medium transition-colors"
                                                >
                                                    discovery beacon
                                                </a>
                                            </>
                                        ),
                                    },
                                    {
                                        icon: '🐚',
                                        title: 'Drop Coordinates',
                                        text: (
                                            <>
                                                Reply with your vault on{' '}
                                                <a
                                                    href="https://twitter.com"
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                    className="text-teal-300 hover:text-cyan-300 underline font-medium transition-colors"
                                                >
                                                    this post
                                                </a>
                                            </>
                                        ),
                                    },
                                ].map((step, i) => (
                                    <div
                                        key={i}
                                        className="
            group/step
            flex gap-4 items-start
            transition-all duration-300
            hover:translate-x-0.5
          "
                                    >
                                        {/* Icon */}
                                        <div
                                            className="
              flex-shrink-0
              w-10 h-10
              rounded-full
              flex items-center justify-center
              text-2xl
              bg-cyan-400/10
              border border-cyan-400/25
              shadow-[0_0_15px_rgba(34,211,238,0.2)]
              transition-all duration-300
              group-hover/step:shadow-[0_0_22px_rgba(34,211,238,0.45)]
              group-hover/step:scale-105
            "
                                        >
                                            {step.icon}
                                        </div>

                                        {/* Text */}
                                        <div className="flex-1 !pt-0.5">
                                            <p className="text-cyan-300 font-semibold text-base !mb-1">
                                                {step.title}
                                            </p>
                                            <p className="text-sm text-gray-400 leading-relaxed font-light">
                                                {step.text}
                                            </p>
                                        </div>
                                    </div>
                                ))}
                            </div>

                            {/* Form Section */}
                            <div className="relative border-t border-cyan-400/25 !pt-6">
                                <div className="!mb-5">
                                    <p className="text-lg font-semibold flex items-center gap-2">
                                        <span className="text-2xl">🫧</span>
                                        <span className="bg-gradient-to-r from-cyan-300 to-teal-300 bg-clip-text text-transparent">
                                            Complete Dive Registration
                                        </span>
                                    </p>
                                </div>

                                <DiscoverForm />
                            </div>

                            {/* Bottom accent */}
                            <div className="absolute bottom-0 left-8 right-8 h-px bg-gradient-to-r from-transparent via-cyan-400/35 to-transparent" />
                        </div>
                    </div>


                </div>
            </div>
        </div>
    );
};

export default Discover;
