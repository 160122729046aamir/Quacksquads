import React, { useEffect, useState } from 'react'
import '../effects.css'
import { useNavigate } from 'react-router-dom'

const Introduction = () => {
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
        { left: '20%', delay: 0 },
        { left: '50%', delay: 2 },
        { left: '80%', delay: 4 },
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

            <div className="depth-fog" />

            <div className="max-w-6xl w-full relative z-10 text-center md:text-left !px-4">
                {/* HERO ROW */}
                <div className="flex flex-col md:flex-row items-center justify-between !mb-16 !gap-12">
                    {/* LEFT: SHORT, SCANNABLE SUMMARY */}
                    <div className="md:w-1/2 reveal">
                        <h1 className="text-4xl md:text-[3.25rem] font-bold text-white !mb-5 leading-tight">
                            Prediction Markets{' '}
                            <span className="bg-gradient-to-r from-cyan-400 via-teal-400 to-emerald-300 bg-clip-text text-transparent">
                                That Reward Consistency
                            </span>
                        </h1>

                        <p className="text-base md:text-lg text-cyan-100/85 !mb-6">
                            Built for people who show up every week, not just those who get lucky once.
                        </p>

                        {/* KEY POINTS – CHIP STYLE, LARGER TEXT */}
                        <div className="grid grid-cols-1 sm:grid-cols-2 !gap-3.5 !mb-6">
                            {[
                                {
                                    title: 'Not Just One-Off Bets',
                                    text: 'Most platforms pay only when markets resolve.',
                                },
                                {
                                    title: 'Time-Based Evaluation',
                                    text: 'We track your activity across weeks, not single trades.',
                                },
                                {
                                    title: 'Consistency Matters',
                                    text: 'Accuracy + repeat participation drive your rewards.',
                                },
                                {
                                    title: 'Future-Proofed',
                                    text: 'Points, NFTs & a delayed token launch reward loyal users.',
                                },
                            ].map((item, i) => (
                                <div
                                    key={i}
                                    className="relative rounded-xl border border-cyan-500/30 bg-slate-900/65 backdrop-blur-md !px-4 !py-3.5 text-left transition-all duration-200 hover:border-cyan-300/80 hover:bg-slate-900/85"
                                >
                                    {/* Subtle corner accent */}
                                    <span className="absolute -top-px -left-px w-6 h-[2px] bg-gradient-to-r from-cyan-400 to-transparent" />
                                    <span className="absolute -top-px -left-px w-[2px] h-6 bg-gradient-to-b from-cyan-400 to-transparent" />

                                    <div className="flex items-center !gap-2.5 !mb-1.5">
                                        <span className="w-2 h-2 rounded-full bg-cyan-300 shadow-[0_0_12px_rgba(34,211,238,0.9)]" />
                                        <h3 className="text-sm md:text-[0.95rem] font-semibold text-cyan-50">
                                            {item.title}
                                        </h3>
                                    </div>
                                    <p className="text-[0.85rem] md:text-sm text-gray-200 leading-snug">
                                        {item.text}
                                    </p>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* RIGHT: "PARTICIPATION SHIFT" CARD – TOP LINE REMOVED */}
                    <div className="md:w-1/2 reveal reveal-delay-1">
                        <div className="relative rounded-2xl !p-[1.5px] bg-gradient-to-br from-cyan-400 via-teal-500 to-blue-600 shadow-[0_0_36px_rgba(0,245,255,0.28)]">
                            <div className="relative rounded-2xl bg-slate-950/95 backdrop-blur-xl !px-6 !py-6 md:!px-7 md:!py-7 border border-cyan-500/50">
                                {/* Header (no top accent line now) */}
                                <div className="flex items-center justify-start !mb-5 !gap-3">
                                    <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-to-br from-cyan-500 via-teal-400 to-blue-500 shadow-[0_0_18px_rgba(34,211,238,0.8)]">
                                        <span className="text-2xl">🌊</span>
                                    </div>
                                    <div className="text-left">
                                        <p className="text-[11px] uppercase tracking-[0.26em] text-cyan-200/80">
                                            Incentive Design
                                        </p>
                                        <h2 className="bg-gradient-to-r from-cyan-300 via-teal-300 to-blue-300 bg-clip-text text-transparent text-lg md:text-xl font-semibold">
                                            The Participation Shift
                                        </h2>
                                    </div>
                                </div>

                                {/* SIDE-BY-SIDE COMPARISON */}
                                <div className="grid grid-cols-1 sm:grid-cols-2 !gap-4 text-sm md:text-[0.95rem]">
                                    {/* Legacy side */}
                                    <div className="rounded-xl bg-red-950/45 border border-red-500/35 !px-4 !py-4">
                                        <div className="flex items-center !gap-2.5 !mb-3">
                                            <span className="w-2 h-2 rounded-full bg-red-400 shadow-[0_0_12px_rgba(248,113,113,0.9)]" />
                                            <span className="text-[11px] md:text-xs uppercase tracking-[0.22em] text-red-100/90">
                                                Typical Markets
                                            </span>
                                        </div>
                                        <ul className="space-y-2 text-[0.9rem] text-red-100/95">
                                            <li className="flex items-start !gap-2.5">
                                                <span className="mt-[2px] text-red-300 text-base leading-none">✕</span>
                                                <span>Rewards only at resolution → one‑off lucky outcomes matter most.</span>
                                            </li>
                                            <li className="flex items-start !gap-2.5">
                                                <span className="mt-[2px] text-red-300 text-base leading-none">✕</span>
                                                <span>Each prediction is isolated → no concept of a long‑term track record.</span>
                                            </li>
                                        </ul>
                                    </div>

                                    {/* New model side */}
                                    <div className="rounded-xl bg-emerald-950/45 border border-emerald-500/40 !px-4 !py-4">
                                        <div className="flex items-center !gap-2.5 !mb-3">
                                            <span className="w-2 h-2 rounded-full bg-emerald-400 shadow-[0_0_12px_rgba(74,222,128,0.9)]" />
                                            <span className="text-[11px] md:text-xs uppercase tracking-[0.22em] text-emerald-100/90">
                                                This Platform
                                            </span>
                                        </div>
                                        <ul className="space-y-2 text-[0.9rem] text-emerald-100/95">
                                            <li className="flex items-start !gap-2.5">
                                                <span className="mt-[2px] text-emerald-300 text-base leading-none">✓</span>
                                                <span>
                                                    Tracks{' '}
                                                    <span className="font-semibold text-emerald-100">
                                                        activity, accuracy & consistency
                                                    </span>{' '}
                                                    over time, not just single trades.
                                                </span>
                                            </li>
                                            <li className="flex items-start !gap-2.5">
                                                <span className="mt-[2px] text-emerald-300 text-base leading-none">✓</span>
                                                <span>
                                                    Weekly rewards, points, NFT multipliers & a delayed token launch →{' '}
                                                    <span className="font-semibold text-emerald-100">
                                                        consistent contributors win most
                                                    </span>
                                                    .
                                                </span>
                                            </li>
                                        </ul>
                                    </div>
                                </div>

                                {/* Bottom Status Row */}
                                <div className="relative !mt-6 !pt-3">
                                    <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-cyan-400/45 to-transparent" />
                                    <div className="flex justify-between items-center text-[11px] md:text-xs uppercase tracking-[0.2em]">
                                        <span className="text-cyan-200/85 font-semibold">
                                            Consistency &gt; Luck
                                        </span>
                                        <div className="flex items-center !gap-2.5">
                                            <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 shadow-[0_0_10px_rgba(34,211,238,0.9)] animate-pulse" />
                                            <span className="text-cyan-100/85 font-semibold">
                                                Participation‑Weighted Rewards
                                            </span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* HOW IT WORKS – 3 STEPS */}
                <div className="reveal reveal-delay-2 !mb-16">
                    <div className="rounded-2xl bg-slate-900/80 border border-cyan-500/25 !px-5 !py-6 md:!px-6 md:!py-7 shadow-[0_0_26px_rgba(0,245,255,0.2)]">
                        <h2 className="text-xs md:text-sm uppercase tracking-[0.24em] text-cyan-300/85 !mb-5 text-center md:text-left">
                            How The Platform Works
                        </h2>

                        <div className="grid grid-cols-1 md:grid-cols-3 !gap-4">
                            {[
                                {
                                    step: '01',
                                    icon: '🎯',
                                    title: 'Make Predictions',
                                    text: 'Express views on crypto, finance, sports, and more.',
                                },
                                {
                                    step: '02',
                                    icon: '📊',
                                    title: 'Build Your Record',
                                    text: 'Your activity, accuracy, and consistency are tracked across weeks.',
                                },
                                {
                                    step: '03',
                                    icon: '🎁',
                                    title: 'Earn Weekly Rewards',
                                    text: 'Points, NFT multipliers, and a future token favor long‑term contributors.',
                                },
                            ].map((item, i) => (
                                <div
                                    key={i}
                                    className="relative rounded-xl bg-slate-950/80 border border-cyan-500/25 !px-4 !py-4.5 overflow-hidden group transition-all duration-200 hover:border-cyan-300/80 hover:bg-slate-950"
                                >
                                    <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-gradient-to-br from-cyan-500/12 via-transparent to-emerald-500/12 pointer-events-none" />

                                    <div className="relative flex items-center justify-between !mb-2.5">
                                        <span className="text-[11px] md:text-xs font-mono tracking-[0.24em] text-cyan-300/85">
                                            {item.step}
                                        </span>
                                        <div className="flex items-center !gap-2">
                                            <span className="text-lg">{item.icon}</span>
                                            <span className="w-6 h-[2px] bg-gradient-to-r from-cyan-400 to-emerald-400 rounded-full" />
                                        </div>
                                    </div>
                                    <h3 className="relative text-sm md:text-[0.95rem] font-semibold text-white !mb-1.5">
                                        {item.title}
                                    </h3>
                                    <p className="relative text-[0.9rem] text-gray-200 leading-snug">
                                        {item.text}
                                    </p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                {/* FEATURES */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 !gap-6 reveal reveal-delay-3">
                    {[
                        {
                            icon: '📈',
                            title: 'Prediction Markets',
                            desc: 'Real-time global events.',
                            gradient: 'from-purple-500 via-pink-500 to-red-500',
                        },
                        {
                            icon: '⚡',
                            title: 'Activity Rewards',
                            desc: 'Points for consistency.',
                            gradient: 'from-yellow-400 via-orange-500 to-red-500',
                        },
                        {
                            icon: '💎',
                            title: 'Utility NFTs',
                            desc: 'Boost earning power.',
                            gradient: 'from-cyan-400 via-blue-500 to-purple-600',
                        },
                        {
                            icon: '🪙',
                            title: 'Future Token',
                            desc: 'Airdrops for loyalists.',
                            gradient: 'from-green-400 via-teal-500 to-cyan-500',
                        },
                    ].map((item, i) => (
                        <div key={i} className="relative group">
                            {/* Glow aura */}
                            <div
                                className={`absolute -inset-1 rounded-2xl bg-gradient-to-br ${item.gradient} opacity-0 blur-xl group-hover:opacity-60 transition duration-500`}
                            />

                            {/* Gradient border */}
                            <div
                                className={`relative rounded-2xl !p-[1.5px] bg-gradient-to-br ${item.gradient}`}
                            >
                                {/* Card */}
                                <div className="relative h-full rounded-2xl bg-slate-900/85 backdrop-blur-xl !p-6 transition-all duration-300 group-hover:bg-slate-900/75">
                                    {/* Icon orb */}
                                    <div
                                        className={`inline-flex items-center justify-center w-14 h-14 rounded-xl bg-gradient-to-br ${item.gradient} shadow-lg !mb-5`}
                                    >
                                        <span className="text-2xl">{item.icon}</span>
                                    </div>

                                    <h3 className="text-[1.05rem] font-semibold text-white !mb-2">
                                        {item.title}
                                    </h3>

                                    <p className="text-sm md:text-[0.95rem] text-gray-300 leading-relaxed">
                                        {item.desc}
                                    </p>

                                    {/* Subtle bottom shine */}
                                    <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Introduction
