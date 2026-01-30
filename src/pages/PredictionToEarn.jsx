import React, { useEffect, useState } from 'react'
import '../effects.css'
import { useNavigate } from 'react-router-dom'

const PredictionToEarn = () => {
    const [isMobile, setIsMobile] = useState(false)
    const navigate = useNavigate()

    useEffect(() => {
        const checkMobile = () => setIsMobile(window.innerWidth < 768)
        checkMobile()
        window.addEventListener('resize', checkMobile)
        return () => window.removeEventListener('resize', checkMobile)
    }, [])

    const bubbles = Array.from({ length: isMobile ? 10 : 25 }, (_, i) => ({
        id: i,
        left: Math.random() * 100,
        delay: Math.random() * 5,
        duration: 8 + Math.random() * 6,
        size: 8 + Math.random() * 15,
    }))

    const particles = Array.from({ length: isMobile ? 15 : 40 }, (_, i) => ({
        id: i,
        left: Math.random() * 100,
        delay: Math.random() * 10,
        duration: 15 + Math.random() * 10,
        driftX: (Math.random() - 0.5) * 100,
    }))

    const lightBeams = [
        { left: '18%', delay: 0 },
        { left: '52%', delay: 2 },
        { left: '82%', delay: 4 },
    ]

    return (
        <div className="underwater-bg min-h-screen !px-6 !pb-32 !pt-[90px] relative overflow-hidden flex flex-col items-center">
            {/* Light Beams */}
            {lightBeams.map((beam, i) => (
                <div
                    key={i}
                    className="light-beam"
                    style={{ left: beam.left, animationDelay: `${beam.delay}s` }}
                />
            ))}

            {/* Particles */}
            {particles.map((p) => (
                <div
                    key={p.id}
                    className="particle"
                    style={{
                        left: `${p.left}%`,
                        bottom: '-10px',
                        animationDelay: `${p.delay}s`,
                        animationDuration: `${p.duration}s`,
                        '--drift-x': `${p.driftX}px`,
                    }}
                />
            ))}

            {/* Bubbles */}
            {bubbles.map((b) => (
                <div
                    key={b.id}
                    className="bubble"
                    style={{
                        left: `${b.left}%`,
                        animationDelay: `${b.delay}s`,
                        animationDuration: `${b.duration}s`,
                        width: `${b.size}px`,
                        height: `${b.size}px`,
                    }}
                />
            ))}

            {/* Soft vignette */}
            <div className="depth-fog" />

            <div className="max-w-6xl w-full relative z-10 text-center md:text-left !px-4">
                {/* HERO ROW */}
                <div className="flex flex-col md:flex-row items-center justify-between !mb-16 !gap-12">
                    {/* LEFT: HERO + KEY POINTS */}
                    <div className="md:w-1/2 reveal">
                        <div className="inline-flex items-center !gap-2 !mb-3 bg-slate-900/70 border border-cyan-500/30 rounded-full !px-3 !py-1.5 backdrop-blur-md shadow-[0_0_18px_rgba(0,245,255,0.25)]">
                            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse shadow-[0_0_10px_rgba(74,222,128,0.9)]" />
                            <span className="text-[11px] tracking-[0.24em] uppercase text-cyan-100/80">
                                Weekly, Not One-Off
                            </span>
                        </div>

                        <h1 className="text-4xl md:text-[3.25rem] font-bold text-white !mb-4 leading-tight">
                            Prediction{' '}
                            <span className="bg-gradient-to-r from-cyan-400 via-teal-400 to-emerald-300 bg-clip-text text-transparent">
                                to Earn
                            </span>
                        </h1>

                        <p className="text-base md:text-lg text-cyan-100/85 !mb-6">
                            A participation-first model where your ongoing involvement, not a single
                            lucky trade, drives your rewards.
                        </p>

                        {/* KEY CONCEPT CHIPS */}
                        <div className="grid grid-cols-1 sm:grid-cols-2 !gap-3.5 !mb-7">
                            {[
                                {
                                    title: 'Every Prediction Counts',
                                    text: 'Each prediction adds to a rolling weekly activity score.',
                                },
                                {
                                    title: 'Accuracy Matters, Not Alone',
                                    text: 'Performance boosts weight, but cannot replace presence.',
                                },
                                {
                                    title: 'Anti-Gaming by Design',
                                    text: 'One spike cannot erase a weak long-term record.',
                                },
                                {
                                    title: 'Participation Has Value',
                                    text: '“Earn” describes your impact in the system, not guaranteed profit.',
                                },
                            ].map((item, i) => (
                                <div
                                    key={i}
                                    className="relative rounded-xl border border-cyan-500/35 bg-slate-900/70 backdrop-blur-xl !px-4 !py-3.5 text-left transition-all duration-250 hover:border-cyan-300/90 hover:bg-slate-950/80 hover:shadow-[0_0_24px_rgba(0,245,255,0.35)]"
                                >
                                    {/* Corner accent */}
                                    <span className="absolute -top-px -left-px w-6 h-[2px] bg-gradient-to-r from-cyan-400 to-transparent" />
                                    <span className="absolute -top-px -left-px w-[2px] h-6 bg-gradient-to-b from-cyan-400 to-transparent" />

                                    <div className="flex items-center !gap-2.5 !mb-1.5">
                                        <span className="w-2 h-2 rounded-full bg-cyan-300 shadow-[0_0_12px_rgba(34,211,238,0.9)]" />
                                        <h3 className="text-sm md:text-[0.95rem] font-semibold text-cyan-50">
                                            {item.title}
                                        </h3>
                                    </div>
                                    <p className="text-[0.9rem] text-gray-200 leading-snug">
                                        {item.text}
                                    </p>
                                </div>
                            ))}
                        </div>

                        {/* CTA */}
                        <div className="flex justify-center md:justify-start">
                            <button
                                onClick={() => navigate('/platform')}
                                className="
                                    group relative inline-flex items-center justify-center
                                    !px-8 !py-3.5
                                    rounded-xl
                                    bg-gradient-to-r from-slate-900 via-slate-800 to-slate-900
                                    text-white text-sm md:text-base font-semibold
                                    transition-all duration-300 ease-out
                                    hover:translate-y-[-1px]
                                    hover:shadow-[0_12px_28px_rgba(0,0,0,0.35)]
                                    active:translate-y-0
                                "
                            >
                                <span className="absolute inset-0 rounded-xl ring-1 ring-cyan-400/30 group-hover:ring-cyan-300/60 transition" />
                                <span className="absolute inset-0 rounded-xl opacity-0 group-hover:opacity-100 transition duration-500">
                                    <span className="absolute -left-1/3 top-0 h-full w-1/3 bg-gradient-to-r from-transparent via-white/18 to-transparent rotate-12 animate-[sheen_1.2s_linear]" />
                                </span>
                                <span className="relative z-10 tracking-wide">
                                    View Live Markets
                                </span>
                            </button>
                        </div>
                    </div>

                    {/* RIGHT: POLISHED EARNING LOGIC CARD */}
                    <div className="md:w-1/2 !mt-5 reveal reveal-delay-1">
                        {/* Outer glow + animated border */}
                        <div className="relative rounded-3xl !p-[2px] bg-gradient-to-br from-cyan-400 via-teal-500 to-blue-600 shadow-[0_0_40px_rgba(0,245,255,0.35)] overflow-hidden">
                            {/* Animated border halo */}
                            <div className="pointer-events-none absolute -inset-[40%] bg-[conic-gradient(from_180deg,#22d3ee,#22c55e,#6366f1,#22d3ee)] opacity-70 animate-[spin_12s_linear_infinite]" />
                            {/* Inner mask */}
                            <div className="relative rounded-3xl bg-slate-950/95 backdrop-blur-2xl border border-cyan-500/50 !px-6 !py-6 md:!px-7 md:!py-7 overflow-hidden">
                                {/* Subtle radial light */}
                                <div className="pointer-events-none absolute -top-20 left-1/2 -translate-x-1/2 w-64 h-64 bg-[radial-gradient(circle_at_center,rgba(56,189,248,0.24),transparent_65%)]" />

                                {/* Header */}
                                <div className="relative flex items-center justify-between !mb-5">
                                    <div className="flex items-center !gap-3">
                                        {/* Icon orb with orbit ring */}
                                        <div className="relative flex h-12 w-12 items-center justify-center">
                                            <div className="absolute inset-0 rounded-2xl border border-cyan-400/70 animate-[spin_6s_linear_infinite] opacity-50" />
                                            <div className="absolute inset-2 rounded-2xl bg-gradient-to-br from-cyan-500 via-teal-400 to-blue-500 shadow-[0_0_18px_rgba(34,211,238,0.7)]" />
                                            <span className="relative text-2xl">🎯</span>
                                        </div>

                                        <div className="text-left">
                                            <p className="text-[11px] uppercase tracking-[0.26em] text-cyan-200/80">
                                                Earning Logic
                                            </p>
                                            <h2 className="bg-gradient-to-r from-cyan-200 via-teal-200 to-blue-200 bg-clip-text text-transparent text-lg md:text-xl font-semibold">
                                                How Prediction to Earn Works
                                            </h2>
                                        </div>
                                    </div>

                                    {/* Tiny capsule indicator */}
                                    <div className="hidden sm:flex items-center !gap-2 rounded-full bg-slate-900/80 border border-cyan-400/40 !px-3 !py-1">
                                        <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse shadow-[0_0_10px_rgba(74,222,128,0.9)]" />
                                        <span className="text-[10px] uppercase tracking-[0.22em] text-cyan-100/80">
                                            Weekly Engine
                                        </span>
                                    </div>
                                </div>

                                {/* INTERACTIVE ROWS */}
                                <div className="relative !space-y-3 text-sm md:text-[0.95rem]">
                                    {[
                                        {
                                            tag: 'Score',
                                            color: 'from-cyan-400 to-sky-400',
                                            dot: 'bg-cyan-300',
                                            title: 'Every Prediction Updates a Weekly Score',
                                            text: 'Each submission feeds your rolling activity score instead of being treated as a one‑off lottery ticket.',
                                        },
                                        {
                                            tag: 'Weighting',
                                            color: 'from-emerald-400 to-teal-400',
                                            dot: 'bg-emerald-300',
                                            title: 'Accuracy Amplifies, Not Replaces Participation',
                                            text: 'Correct calls increase your influence, but cannot substitute for showing up consistently.',
                                        },
                                        {
                                            tag: 'Integrity',
                                            color: 'from-amber-400 to-rose-400',
                                            dot: 'bg-amber-300',
                                            title: 'Single Spikes Cannot Game the System',
                                            text: 'A single successful outcome cannot override a weak long‑term record, reducing the incentive to game individual markets.',
                                        },
                                        {
                                            tag: 'Meaning',
                                            color: 'from-sky-400 to-emerald-400',
                                            dot: 'bg-sky-300',
                                            title: '“Earn” is About Contribution, Not Guarantees',
                                            text: 'Prediction‑to‑Earn describes how participation becomes measurable value in the reward framework—not a promise of profit.',
                                        },
                                    ].map((item, i) => (
                                        <div
                                            key={item.title}
                                            className="
                                                relative rounded-2xl bg-slate-900/80 border border-cyan-500/25
                                                !px-4 !py-3.5 overflow-hidden group
                                                transition-all duration-200
                                                hover:border-cyan-300/90 hover:bg-slate-950
                                            "
                                        >
                                            {/* Gradient hover wash */}
                                            <div
                                                className={`
                                                    absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300
                                                    bg-gradient-to-r ${item.color} /[0.12]
                                                `}
                                            />
                                            <div className="relative flex flex-col !gap-1.5">
                                                <div className="flex items-center justify-between !mb-1">
                                                    <div className="flex items-center !gap-2.5">
                                                        <span
                                                            className={`w-2 h-2 rounded-full ${item.dot} shadow-[0_0_10px_rgba(34,211,238,0.9)]`}
                                                        />
                                                        <span className="text-[11px] uppercase tracking-[0.22em] text-cyan-100/85">
                                                            {item.tag}
                                                        </span>
                                                    </div>
                                                    <span
                                                        className={`
                                                            text-[10px] font-mono uppercase tracking-[0.2em]
                                                            bg-gradient-to-r ${item.color} bg-clip-text text-transparent
                                                        `}
                                                    >
                                                        Step {`0${i + 1}`}
                                                    </span>
                                                </div>
                                                <h3 className="text-[0.95rem] font-semibold text-cyan-50">
                                                    {item.title}
                                                </h3>
                                                <p className="text-[0.9rem] text-gray-200 leading-snug">
                                                    {item.text}
                                                </p>
                                            </div>
                                        </div>
                                    ))}
                                </div>

                                {/* Bottom Status Row */}
                                <div className="relative !mt-6 !pt-3">
                                    <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-cyan-400/45 to-transparent" />
                                    <div className="flex justify-between items-center text-[11px] md:text-xs uppercase tracking-[0.2em]">
                                        <span className="text-cyan-200/85 font-semibold">
                                            Participation &gt; One-Off Wins
                                        </span>
                                        <div className="flex items-center !gap-2.5">
                                            <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 shadow-[0_0_10px_rgba(34,211,238,0.9)] animate-pulse" />
                                            <span className="text-cyan-100/85 font-semibold">
                                                Weekly Reward Engine
                                            </span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* INTERACTIVE FLOW – WHAT YOU DO / WHAT THE SYSTEM DOES */}
                <div className="reveal reveal-delay-2 !mb-16">
                    <div className="rounded-2xl bg-slate-900/80 border border-cyan-500/25 !px-5 !py-6 md:!px-6 md:!py-7 shadow-[0_0_26px_rgba(0,245,255,0.2)]">
                        <h2 className="text-xs md:text-sm uppercase tracking-[0.24em] text-cyan-300/85 !mb-5 text-center md:text-left">
                            What You Do vs What The System Does
                        </h2>

                        <div className="grid grid-cols-1 md:grid-cols-2 !gap-4">
                            {/* What you do */}
                            <div className="relative rounded-xl bg-slate-950/80 border border-cyan-500/25 !px-4 !py-4.5 overflow-hidden group transition-all duration-200 hover:border-cyan-300/80 hover:bg-slate-950">
                                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-gradient-to-br from-cyan-500/12 via-transparent to-emerald-500/12 pointer-events-none" />
                                <div className="relative flex items-center !gap-2.5 !mb-2.5">
                                    <span className="w-2 h-2 rounded-full bg-cyan-300 shadow-[0_0_10px_rgba(34,211,238,0.9)]" />
                                    <span className="text-[11px] md:text-xs uppercase tracking-[0.24em] text-cyan-100/85">
                                        You
                                    </span>
                                </div>
                                <ul className="!space-y-2 text-[0.9rem] text-gray-200">
                                    <li>Submit predictions across different markets and themes.</li>
                                    <li>Return consistently instead of only appearing for “big” events.</li>
                                    <li>Focus on building a steady, measurable track record.</li>
                                </ul>
                            </div>

                            {/* What the system does */}
                            <div className="relative rounded-xl bg-slate-950/80 border border-cyan-500/25 !px-4 !py-4.5 overflow-hidden group transition-all duration-200 hover:border-cyan-300/80 hover:bg-slate-950">
                                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-gradient-to-br from-emerald-500/12 via-transparent to-cyan-500/12 pointer-events-none" />
                                <div className="relative flex items-center !gap-2.5 !mb-2.5">
                                    <span className="w-2 h-2 rounded-full bg-emerald-300 shadow-[0_0_10px_rgba(74,222,128,0.9)]" />
                                    <span className="text-[11px] md:text-xs uppercase tracking-[0.24em] text-emerald-100/85">
                                        The System
                                    </span>
                                </div>
                                <ul className="!space-y-2 text-[0.9rem] text-gray-200">
                                    <li>Aggregates your predictions into an evolving weekly activity score.</li>
                                    <li>Weights outcomes by accuracy while keeping participation central.</li>
                                    <li>Allocates rewards to users who show up and perform over time.</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>

                {/* PREDICTION-TO-EARN FEATURE STRIP */}
                <div className="grid grid-cols-1 md:grid-cols-3 !gap-5 reveal reveal-delay-3">
                    {[
                        {
                            icon: '⏱️',
                            title: 'Time-Based Rewards',
                            desc: 'Weekly cycles make progress and contribution feel tangible.',
                        },
                        {
                            icon: '🧠',
                            title: 'Signal over Noise',
                            desc: 'Consistent insight is more valuable than occasional hype.',
                        },
                        {
                            icon: '🧩',
                            title: 'Stackable Design',
                            desc: 'Points, multipliers, and future tokens all build on your record.',
                        },
                    ].map((item, i) => (
                        <div key={i} className="relative group">
                            <div
                                className={`
                                    absolute -inset-1 rounded-2xl bg-gradient-to-br from-cyan-500 via-teal-500 to-emerald-500 
                                    opacity-0 blur-xl group-hover:opacity-50 transition duration-500
                                `}
                            />
                            <div className="relative rounded-2xl !p-[1.5px] bg-gradient-to-br from-cyan-500/70 via-teal-500/70 to-emerald-500/70">
                                <div className="relative h-full rounded-2xl bg-slate-900/85 backdrop-blur-xl !p-5 flex flex-col">
                                    <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-slate-900/90 !mb-4">
                                        <span className="text-2xl">{item.icon}</span>
                                    </div>
                                    <h3 className="text-[1.05rem] font-semibold text-white !mb-2">
                                        {item.title}
                                    </h3>
                                    <p className="text-sm md:text-[0.95rem] text-gray-300 leading-relaxed">
                                        {item.desc}
                                    </p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default PredictionToEarn
