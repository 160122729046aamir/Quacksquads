import React, { useEffect, useState } from 'react'
import '../effects.css'
import { useNavigate } from 'react-router-dom'

const WeeklyRewards = () => {
    const [isMobile, setIsMobile] = useState(false)
    const navigate = useNavigate()

    useEffect(() => {
        const checkMobile = () => setIsMobile(window.innerWidth < 768)
        checkMobile()
        window.addEventListener('resize', checkMobile)
        return () => window.removeEventListener('resize', checkMobile)
    }, [])

    const orbs = Array.from({ length: isMobile ? 8 : 18 }, (_, i) => ({
        id: i,
        left: Math.random() * 100,
        top: Math.random() * 100,
        size: 60 + Math.random() * 160,
        blur: 30 + Math.random() * 40,
        opacity: 0.05 + Math.random() * 0.12,
    }))

    return (
        <div className="min-h-screen bg-gradient-to-br from-[#001423] via-[#001625] to-[#001a30] relative overflow-hidden flex flex-col items-center !px-6 !pb-32 !pt-[90px]">
            {/* GLOWING ORBS BACKGROUND */}
            {orbs.map((o) => (
                <div
                    key={o.id}
                    className="pointer-events-none absolute rounded-full bg-gradient-to-br from-cyan-500 via-sky-500 to-emerald-400"
                    style={{
                        left: `${o.left}%`,
                        top: `${o.top}%`,
                        width: `${o.size}px`,
                        height: `${o.size}px`,
                        filter: `blur(${o.blur}px)`,
                        opacity: o.opacity,
                    }}
                />
            ))}

            {/* SUBTLE OVERLAY GRID */}
            <div className="pointer-events-none absolute inset-0 opacity-30 mix-blend-soft-light">
                <div className="w-full h-full bg-[radial-gradient(circle_at_top,_rgba(56,189,248,0.22),transparent_60%)]" />
            </div>

            <div className="max-w-6xl w-full relative z-10 text-center md:text-left !px-4">
                {/* HERO ROW */}
                <div className="flex flex-col md:flex-row items-center justify-between !mb-16 !gap-12">
                    {/* LEFT: HERO + CORE CONCEPTS */}
                    <div className="md:w-1/2 reveal">
                        <div className="inline-flex items-center rounded-full bg-cyan-900/40 border border-cyan-400/40 backdrop-blur-md !px-3 !py-1.5 !mb-4 shadow-[0_0_20px_rgba(34,211,238,0.45)]">
                            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse shadow-[0_0_10px_rgba(74,222,128,0.9)]" />
                            <span className="text-[11px] tracking-[0.24em] uppercase text-cyan-100/85 !ml-2">
                                Epoch-Based Accounting
                            </span>
                        </div>

                        <h1 className="text-4xl md:text-[3.1rem] font-bold text-white !mb-4 leading-tight">
                            Weekly Rewards{' '}
                            <span className="bg-gradient-to-r from-cyan-400 via-teal-300 to-sky-300 bg-clip-text text-transparent">
                                Built on Contribution
                            </span>
                        </h1>

                        <p className="text-base md:text-lg text-cyan-100/85 !mb-6">
                            Points track how much you contribute over time. They don’t behave like
                            money today—they measure who should matter most tomorrow.
                        </p>

                        {/* SHORT CONCEPT CARDS */}
                        <div className="grid grid-cols-1 sm:grid-cols-2 !gap-3.5 !mb-7">
                            {[
                                {
                                    title: 'Weekly Distribution',
                                    text: 'Points are allocated every epoch based on your activity.',
                                },
                                {
                                    title: 'No Instant Payouts',
                                    text: 'Points are not money. They’re a record of contribution.',
                                },
                                {
                                    title: 'Future-Focused',
                                    text: 'Points drive eligibility for later token allocations.',
                                },
                                {
                                    title: 'Engagement over Opportunism',
                                    text: 'Rewards favor consistent participation, not quick exploits.',
                                },
                            ].map((item, i) => (
                                <div
                                    key={i}
                                    className="relative rounded-xl border border-cyan-500/35 bg-slate-900/70 backdrop-blur-xl !px-4 !py-3.5 text-left transition-all duration-250 hover:border-cyan-300/90 hover:bg-slate-950/80 hover:shadow-[0_0_24px_rgba(0,245,255,0.45)]"
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
                                    <p className="text-[0.9rem] text-cyan-100/90 leading-snug">
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
                                    bg-gradient-to-r from-slate-900 via-slate-950 to-slate-900
                                    text-white text-sm md:text-base font-semibold
                                    transition-all duration-300 ease-out
                                    hover:translate-y-[-1px]
                                    hover:shadow-[0_12px_28px_rgba(0,0,0,0.45)]
                                    active:translate-y-0
                                "
                            >
                                <span className="absolute inset-0 rounded-xl ring-1 ring-cyan-400/40 group-hover:ring-cyan-300/80 transition" />
                                <span className="absolute inset-0 rounded-xl opacity-0 group-hover:opacity-100 transition duration-500">
                                    <span className="absolute -left-1/3 top-0 h-full w-1/3 bg-gradient-to-r from-transparent via-white/18 to-transparent rotate-12 animate-[sheen_1.2s_linear]" />
                                </span>
                                <span className="relative z-10 tracking-wide">
                                    View Reward Cycles
                                </span>
                            </button>
                        </div>
                    </div>

                    {/* RIGHT: WEEKLY REWARDS / EPOCH CARD */}
                    <div className="md:w-1/2 reveal reveal-delay-1 !mt-5">
                        <div className="relative rounded-3xl !p-[2px] bg-gradient-to-br from-cyan-500 via-sky-500 to-emerald-400 shadow-[0_0_40px_rgba(0,245,255,0.55)] overflow-hidden">
                            <div className="relative rounded-3xl bg-[#001424]/95 backdrop-blur-2xl border border-cyan-400/70 !px-6 !py-6 md:!px-7 md:!py-7 overflow-hidden">
                                {/* subtle glow band */}
                                <div className="pointer-events-none absolute -top-32 left-1/2 -translate-x-1/2 w-[26rem] h-[26rem] bg-[radial-gradient(circle_at_center,rgba(56,189,248,0.22),transparent_60%)]" />

                                {/* Header */}
                                <div className="relative flex items-center justify-between !mb-6">
                                    <div className="flex items-center !gap-3">
                                        <div className="relative flex h-12 w-12 items-center justify-center">
                                            <div className="absolute inset-0 rounded-2xl border border-cyan-400/75 animate-[spin_10s_linear_infinite] opacity-70" />
                                            <div className="absolute inset-2 rounded-2xl bg-gradient-to-br from-cyan-500 via-teal-400 to-sky-300 shadow-[0_0_20px_rgba(34,211,238,0.7)]" />
                                            <span className="relative text-2xl">📆</span>
                                        </div>
                                        <div className="text-left">
                                            <p className="text-[11px] uppercase tracking-[0.26em] text-cyan-100/85">
                                                Weekly Rewards
                                            </p>
                                            <h2 className="bg-gradient-to-r from-cyan-100 via-teal-100 to-sky-100 bg-clip-text text-transparent text-lg md:text-xl font-semibold">
                                                Epoch-Based Points System
                                            </h2>
                                        </div>
                                    </div>

                                    <div className="hidden sm:flex items-center !gap-2 rounded-full bg-slate-900/80 border border-cyan-400/45 !px-3 !py-1">
                                        <span className="w-1.5 h-1.5 rounded-full bg-emerald-300 animate-pulse shadow-[0_0_10px_rgba(74,222,128,0.9)]" />
                                        <span className="text-[10px] uppercase tracking-[0.22em] text-cyan-100/85">
                                            Fixed Epochs
                                        </span>
                                    </div>
                                </div>

                                {/* MAIN CONTENT – SHORT, CRISP ROWS */}
                                <div className="relative !space-y-3 text-sm md:text-[0.95rem]">
                                    {/* Weekly points distribution */}
                                    <div className="relative rounded-2xl bg-slate-900/80 border border-cyan-500/40 !px-4 !py-3.5 overflow-hidden group transition-all duration-200 hover:border-cyan-300/90 hover:bg-slate-950">
                                        <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-gradient-to-r from-cyan-500/18 via-transparent to-sky-400/16 pointer-events-none" />
                                        <div className="relative flex flex-col !gap-1.5">
                                            <div className="flex items-center justify-between !mb-1">
                                                <div className="flex items-center !gap-2.5">
                                                    <span className="w-2 h-2 rounded-full bg-cyan-300 shadow-[0_0_10px_rgba(34,211,238,0.9)]" />
                                                    <span className="text-[11px] uppercase tracking-[0.22em] text-cyan-100/85">
                                                        Weekly Points
                                                    </span>
                                                </div>
                                                <span className="text-[10px] font-mono uppercase tracking-[0.2em] text-cyan-200/90">
                                                    Step 01
                                                </span>
                                            </div>
                                            <h3 className="text-[0.95rem] font-semibold text-cyan-50">
                                                Points Follow Your Weekly Activity
                                            </h3>
                                            <p className="text-[0.9rem] text-cyan-100 leading-snug">
                                                Weekly points are distributed to users based on their activity and
                                                contributions across all active markets.
                                            </p>
                                        </div>
                                    </div>

                                    {/* Internal accounting system */}
                                    <div className="relative rounded-2xl bg-slate-900/80 border border-teal-500/40 !px-4 !py-3.5 overflow-hidden group transition-all duration-200 hover:border-teal-300/90 hover:bg-slate-950">
                                        <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-gradient-to-r from-teal-400/18 via-transparent to-emerald-400/16 pointer-events-none" />
                                        <div className="relative flex flex-col !gap-1.5">
                                            <div className="flex items-center justify-between !mb-1">
                                                <div className="flex items-center !gap-2.5">
                                                    <span className="w-2 h-2 rounded-full bg-teal-300 shadow-[0_0_10px_rgba(45,212,191,0.9)]" />
                                                    <span className="text-[11px] uppercase tracking-[0.22em] text-teal-100/85">
                                                        Internal Accounting
                                                    </span>
                                                </div>
                                                <span className="text-[10px] font-mono uppercase tracking-[0.2em] text-teal-200/90">
                                                    Step 02
                                                </span>
                                            </div>
                                            <h3 className="text-[0.95rem] font-semibold text-teal-50">
                                                Fixed Epochs, Not Random Snapshots
                                            </h3>
                                            <p className="text-[0.9rem] text-teal-100 leading-snug">
                                                Participation is tracked through an internal accounting system that
                                                operates on fixed epochs, providing clear, predictable cycles.
                                            </p>
                                        </div>
                                    </div>

                                    {/* Points purpose */}
                                    <div className="relative rounded-2xl bg-slate-900/80 border border-emerald-500/40 !px-4 !py-3.5 overflow-hidden group transition-all duration-200 hover:border-emerald-300/90 hover:bg-slate-950">
                                        <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-gradient-to-r from-emerald-400/18 via-transparent to-cyan-400/16 pointer-events-none" />
                                        <div className="relative flex flex-col !gap-1.5">
                                            <div className="flex items-center justify-between !mb-1">
                                                <div className="flex items-center !gap-2.5">
                                                    <span className="w-2 h-2 rounded-full bg-emerald-300 shadow-[0_0_10px_rgba(52,211,153,0.9)]" />
                                                    <span className="text-[11px] uppercase tracking-[0.22em] text-emerald-100/85">
                                                        Reward Units
                                                    </span>
                                                </div>
                                                <span className="text-[10px] font-mono uppercase tracking-[0.2em] text-emerald-200/90">
                                                    Step 03
                                                </span>
                                            </div>
                                            <h3 className="text-[0.95rem] font-semibold text-emerald-50">
                                                Points Reflect Contribution, Not Cash
                                            </h3>
                                            <p className="text-[0.9rem] text-emerald-100 leading-snug">
                                                Points (reward units) are accumulated over epochs and do not
                                                represent immediate monetary value. They exist to reflect contribution
                                                and determine eligibility for future token allocations.
                                            </p>
                                        </div>
                                    </div>
                                </div>

                                {/* Bottom Row: Why Epochs */}
                                <div className="relative !mt-6 !pt-3">
                                    <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-cyan-400/45 to-transparent" />
                                    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between !gap-3 text-[11px] md:text-xs uppercase tracking-[0.2em]">
                                        <span className="text-cyan-200/85 font-semibold">
                                            Epochs Keep Rewards Honest
                                        </span>
                                        <div className="flex flex-wrap items-center !gap-2.5 text-[10px] md:text-[11px] text-cyan-100/85">
                                            <span className="rounded-full bg-slate-900/70 border border-cyan-400/40 !px-2.5 !py-1">
                                                Normalize participation across conditions
                                            </span>
                                            <span className="rounded-full bg-slate-900/70 border border-teal-400/40 !px-2.5 !py-1">
                                                Prevent manipulation & farming
                                            </span>
                                            <span className="rounded-full bg-slate-900/70 border border-emerald-400/40 !px-2.5 !py-1">
                                                Keep protocol flexible as it evolves
                                            </span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* TWO-COLUMN QUICK VIEW – USER vs SYSTEM PERSPECTIVE */}
                <div className="reveal reveal-delay-2 !mb-16">
                    <div className="rounded-2xl bg-slate-950/80 border border-cyan-500/30 !px-5 !py-6 md:!px-6 md:!py-7 shadow-[0_0_26px_rgba(0,245,255,0.35)]">
                        <h2 className="text-xs md:text-sm uppercase tracking-[0.24em] text-cyan-200/90 !mb-5 text-center md:text-left">
                            How Weekly Rewards Feel From Each Side
                        </h2>

                        <div className="grid grid-cols-1 md:grid-cols-2 !gap-4">
                            {/* You */}
                            <div className="relative rounded-xl bg-slate-900/80 border border-cyan-500/30 !px-4 !py-4.5 overflow-hidden group transition-all duration-200 hover:border-cyan-300/80 hover:bg-slate-900">
                                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-gradient-to-br from-cyan-500/12 via-transparent to-emerald-500/12 pointer-events-none" />
                                <div className="relative flex items-center !gap-2.5 !mb-2.5">
                                    <span className="w-2 h-2 rounded-full bg-cyan-300 shadow-[0_0_10px_rgba(34,211,238,0.9)]" />
                                    <span className="text-[11px] md:text-xs uppercase tracking-[0.24em] text-cyan-100/85">
                                        You
                                    </span>
                                </div>
                                <ul className="!space-y-2 text-[0.9rem] text-cyan-100/90">
                                    <li>You make predictions and contribute information to the markets.</li>
                                    <li>Your weekly presence and effort steadily build your point history.</li>
                                    <li>You understand that you’re earning position, not guaranteed payouts.</li>
                                </ul>
                            </div>

                            {/* The system */}
                            <div className="relative rounded-xl bg-slate-900/80 border border-cyan-500/30 !px-4 !py-4.5 overflow-hidden group transition-all duration-200 hover:border-cyan-300/80 hover:bg-slate-900">
                                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-gradient-to-br from-emerald-500/12 via-transparent to-cyan-500/12 pointer-events-none" />
                                <div className="relative flex items-center !gap-2.5 !mb-2.5">
                                    <span className="w-2 h-2 rounded-full bg-emerald-300 shadow-[0_0_10px_rgba(74,222,128,0.9)]" />
                                    <span className="text-[11px] md:text-xs uppercase tracking-[0.24em] text-emerald-100/85">
                                        The System
                                    </span>
                                </div>
                                <ul className="!space-y-2 text-[0.9rem] text-emerald-100/90">
                                    <li>It aggregates your actions into epochs instead of isolated moments.</li>
                                    <li>It uses points to rank contribution for future token eligibility.</li>
                                    <li>It rewards consistent engagement over short-term opportunism.</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>

                {/* SMALL FEATURE STRIP – WHY EPOCHS MATTER */}
                <div className="grid grid-cols-1 md:grid-cols-3 !gap-5 reveal reveal-delay-3">
                    {[
                        {
                            icon: '📊',
                            title: 'Normalized Conditions',
                            desc: 'Epochs smooth out volatility so rewards aren’t dominated by a single crazy week.',
                        },
                        {
                            icon: '🛡️',
                            title: 'Anti-Farming',
                            desc: 'Structured windows make it harder to manipulate outcomes or farm short bursts.',
                        },
                        {
                            icon: '🔧',
                            title: 'Future Flexibility',
                            desc: 'The accounting layer can evolve while your contribution history remains intact.',
                        },
                    ].map((item, i) => (
                        <div key={i} className="relative group">
                            <div
                                className={`
                                    absolute -inset-1 rounded-2xl bg-gradient-to-br from-cyan-500 via-teal-500 to-emerald-400 
                                    opacity-0 blur-xl group-hover:opacity-50 transition duration-500
                                `}
                            />
                            <div className="relative rounded-2xl !p-[1.5px] bg-gradient-to-br from-cyan-500/80 via-teal-500/80 to-emerald-400/80">
                                <div className="relative h-full rounded-2xl bg-slate-950/90 backdrop-blur-xl !p-5 flex flex-col">
                                    <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-slate-900/90 !mb-4">
                                        <span className="text-2xl">{item.icon}</span>
                                    </div>
                                    <h3 className="text-[1.05rem] font-semibold text-white !mb-2">
                                        {item.title}
                                    </h3>
                                    <p className="text-sm md:text-[0.95rem] text-cyan-100/90 leading-relaxed">
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

export default WeeklyRewards
