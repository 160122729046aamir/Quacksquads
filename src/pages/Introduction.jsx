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

    useEffect(() => {
        if (isMobile) return

        const handleMouseMove = (e) => {
            document.querySelectorAll('.tilt-card').forEach((card) => {
                const rect = card.getBoundingClientRect()
                const x = e.clientX - rect.left
                const y = e.clientY - rect.top

                const rotateX = (y - rect.height / 2) / 10
                const rotateY = (rect.width / 2 - x) / 10

                requestAnimationFrame(() => {
                    card.style.setProperty('--tilt-x', `${rotateY}deg`)
                    card.style.setProperty('--tilt-y', `${rotateX}deg`)
                })
            })
        }

        window.addEventListener('mousemove', handleMouseMove)
        return () => window.removeEventListener('mousemove', handleMouseMove)
    }, [isMobile])

    return (
        <div
            className="underwater-bg min-h-screen !px-6 !pb-32 !pt-[90px] relative overflow-hidden flex flex-col items-center"
        >
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
                {/* HERO */}
                <div className="flex flex-col md:flex-row items-center justify-between !mb-20 !gap-16">
                    <div className="md:w-1/2 reveal">
                        <h1 className="text-5xl md:text-7xl font-bold text-white !mb-8 leading-tight">
                            Luck is{' '}
                            <span className="bg-gradient-to-r from-cyan-400 via-teal-400 to-cyan-300 bg-clip-text text-transparent">
                                Fleeting.
                            </span>
                            <br />
                            Commitment is{' '}
                            <span className="bg-gradient-to-r from-teal-400 via-green-400 to-emerald-400 bg-clip-text text-transparent">
                                Forever.
                            </span>
                        </h1>

                        <p className="text-xl md:text-2xl text-gray-300 leading-relaxed !mb-10">
                            Most prediction markets let you win once and leave. We’re building
                            an ecosystem where consistency compounds value.
                        </p>

                        <div className="flex !mt-8 justify-center md:justify-start">
                            <button
                                onClick={() => navigate('/platform')}
                                className="
      group relative inline-flex items-center justify-center
      !px-9 !py-4
      rounded-xl
      bg-gradient-to-r from-slate-900 via-slate-800 to-slate-900
      text-white text-sm md:text-base font-semibold
      transition-all duration-300 ease-out
      hover:translate-y-[-1px]
      hover:shadow-[0_12px_28px_rgba(0,0,0,0.35)]
      active:translate-y-0
    "
                            >
                                {/* Soft gradient rim */}
                                <span className="absolute inset-0 rounded-xl ring-1 ring-white/10 group-hover:ring-white/20 transition" />

                                {/* Hover sheen */}
                                <span className="absolute inset-0 rounded-xl opacity-0 group-hover:opacity-100 transition duration-500">
                                    <span className="absolute -left-1/3 top-0 h-full w-1/3 bg-gradient-to-r from-transparent via-white/10 to-transparent rotate-12 animate-[sheen_1.2s_linear]" />
                                </span>

                                <span className="relative z-10 tracking-wide">
                                    Explore Platform
                                </span>
                            </button>
                        </div>



                    </div>

                    {/* CARD */}
                    <div className="md:w-1/2 reveal reveal-delay-1">
                        <div className="relative rounded-2xl !p-[1.5px] bg-gradient-to-br from-cyan-400 via-teal-500 to-blue-600 shadow-[0_0_40px_rgba(0,245,255,0.25)]">
                            <div className="relative rounded-2xl bg-slate-900/95 backdrop-blur-xl !px-6 !py-7 md:!px-8 md:!py-9">
                                <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-cyan-500/5 via-transparent to-blue-500/5 pointer-events-none" />

                                <h3 className="flex items-center gap-3 text-2xl md:text-3xl font-bold !mb-6">
                                    <span className="text-3xl">⚡</span>
                                    <span className="bg-gradient-to-r from-cyan-300 via-teal-300 to-blue-300 bg-clip-text text-transparent">
                                        The Shift
                                    </span>
                                </h3>

                                <ul className="!space-y-4">
                                    <li className="flex items-center !gap-3 text-gray-400">
                                        <span className="text-red-400 text-xl">✕</span>
                                        One-time lucky bets
                                    </li>
                                    <li className="flex items-center !gap-3 text-gray-400">
                                        <span className="text-red-400 text-xl">✕</span>
                                        Passive lurking
                                    </li>

                                    <li className="!py-2">
                                        <div className="h-px bg-gradient-to-r from-transparent via-cyan-400/40 to-transparent" />
                                    </li>

                                    <li className="flex items-center !gap-3 text-white font-medium">
                                        <span className="text-cyan-400 text-xl animate-pulse">✓</span>
                                        Weekly Activity Score
                                    </li>
                                    <li className="flex items-center !gap-3 text-white font-medium">
                                        <span className="text-cyan-400 text-xl animate-pulse">✓</span>
                                        Compounding NFT Multipliers
                                    </li>
                                </ul>

                                <div className="relative !mt-7 !pt-4">
                                    <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-cyan-400/30 to-transparent" />
                                    <div className="flex justify-between items-center text-[10px] uppercase tracking-widest">
                                        <span className="text-cyan-400/70 font-semibold">New Era</span>
                                        <div className="flex items-center !gap-2">
                                            <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-pulse" />
                                            <span className="text-cyan-400/70 font-semibold">
                                                Active Rewards
                                            </span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* FEATURES */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 !gap-6 reveal reveal-delay-2">
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
                                <div className="relative h-full rounded-2xl bg-slate-900/80 backdrop-blur-xl !p-6 transition-all duration-300 group-hover:bg-slate-900/70">

                                    {/* Icon orb */}
                                    <div
                                        className={`inline-flex items-center justify-center w-14 h-14 rounded-xl bg-gradient-to-br ${item.gradient} shadow-lg !mb-5`}
                                    >
                                        <span className="text-2xl">{item.icon}</span>
                                    </div>

                                    <h3 className="text-lg font-semibold text-white !mb-2">
                                        {item.title}
                                    </h3>

                                    <p className="text-sm text-gray-400 leading-relaxed">
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
