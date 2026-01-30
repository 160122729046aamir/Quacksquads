import React from 'react'
import '../effects.css'

const Vision = () => {
    return (
        <div
            className="
                underwater-bg min-h-screen
                relative overflow-hidden
                flex flex-col items-center
                !px-6
                !pb-32
                !pt-[90px]
            "
        >
            {/* Ambient fog */}
            <div className="depth-fog" />

            <div className="max-w-6xl w-full relative z-10 text-center md:text-left !px-4">
                {/* HERO */}
                <div className="reveal flex flex-col md:flex-row items-center justify-between !mb-16 !gap-10">
                    {/* Left: Title & core bullets */}
                    <div className="md:w-1/2">
                        <div className="inline-flex items-center !gap-2 !mb-3 bg-slate-900/70 border border-cyan-500/30 rounded-full !px-3 !py-1.5 backdrop-blur-md shadow-[0_0_18px_rgba(0,245,255,0.25)]">
                            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse shadow-[0_0_10px_rgba(74,222,128,0.9)]" />
                            <span className="text-[11px] tracking-[0.24em] uppercase text-cyan-100/80">
                                Vision · Participation to Ownership
                            </span>
                        </div>

                        <h1 className="text-4xl md:text-[3.1rem] font-bold text-white !mb-4 leading-tight">
                            A Prediction Market Where{' '}
                            <span className="bg-gradient-to-r from-cyan-400 via-teal-400 to-emerald-300 bg-clip-text text-transparent">
                                Contribution Becomes Stake
                            </span>
                        </h1>

                        <p className="text-sm md:text-base text-cyan-100/85 !mb-4">
                            The protocol rewards people who show up, think clearly, and stay engaged—
                            not those who sprint in for a single lucky bet.
                        </p>

                        <ul className="!space-y-2.5 text-sm md:text-base text-cyan-100/90">
                            <li>
                                • <span className="text-emerald-300 font-semibold">Participation</span>{' '}
                                accumulates into measurable ownership.
                            </li>
                            <li>
                                • <span className="text-cyan-300 font-semibold">Accuracy + consistency</span>{' '}
                                matter more than raw volume.
                            </li>
                            <li>
                                • Value flows to users who{' '}
                                <span className="text-emerald-300 font-semibold">
                                    strengthen the protocol
                                </span>{' '}
                                over time.
                            </li>
                        </ul>
                    </div>

                    {/* Right: Animated Vision Card (very visual) */}
                    <div className="md:w-1/2 reveal reveal-delay-1">
                        <div className="relative rounded-[28px] !p-[2px] bg-gradient-to-br from-cyan-400 via-teal-500 to-blue-600 shadow-[0_0_40px_rgba(0,245,255,0.4)] overflow-hidden">
                            {/* Animated border aura */}
                            <div className="pointer-events-none absolute -inset-[40%] bg-[conic-gradient(from_180deg,#22d3ee,#22c55e,#6366f1,#22d3ee)] opacity-60 animate-[spin_10s_linear_infinite]" />
                            {/* Inner card */}
                            <div className="relative rounded-[26px] bg-slate-950/95 backdrop-blur-2xl border border-cyan-500/60 !px-6 !py-6 md:!px-7 md:!py-7 overflow-hidden">
                                {/* Soft radial glow */}
                                <div className="pointer-events-none absolute -top-24 left-1/2 -translate-x-1/2 w-64 h-64 bg-[radial-gradient(circle_at_center,rgba(56,189,248,0.25),transparent_65%)]" />

                                {/* Orbit rings */}
                                <div className="pointer-events-none absolute -right-10 top-6 w-36 h-36 rounded-full border border-cyan-500/40 animate-[spin_14s_linear_infinite]" />
                                <div className="pointer-events-none absolute -right-2 top-16 w-24 h-24 rounded-full border border-emerald-400/40 animate-[spin_10s_linear_infinite_reverse]" />

                                <div className="relative flex flex-col !gap-4">
                                    <div className="flex items-center justify-between !mb-2">
                                        <div className="flex items-center !gap-3">
                                            <div className="relative flex h-11 w-11 items-center justify-center">
                                                <div className="absolute inset-0 rounded-2xl border border-cyan-400/70 opacity-50 animate-[spin_6s_linear_infinite]" />
                                                <div className="absolute inset-2 rounded-2xl bg-gradient-to-br from-cyan-500 via-teal-400 to-blue-500 shadow-[0_0_18px_rgba(34,211,238,0.8)]" />
                                                <span className="relative text-2xl">🌐</span>
                                            </div>
                                            <div className="text-left">
                                                <p className="text-[11px] uppercase tracking-[0.25em] text-cyan-200/80">
                                                    Protocol Vision
                                                </p>
                                                <h2 className="bg-gradient-to-r from-cyan-200 via-teal-200 to-blue-200 bg-clip-text text-transparent text-base md:text-lg font-semibold">
                                                    Markets as Ownership Engines
                                                </h2>
                                            </div>
                                        </div>
                                        <span className="hidden md:inline text-[11px] uppercase tracking-[0.22em] text-cyan-300/80">
                                            Long‑Term First
                                        </span>
                                    </div>

                                    <p className="text-xs md:text-[0.9rem] text-cyan-100/90 leading-relaxed">
                                        Predictions are treated as{' '}
                                        <span className="text-emerald-300 font-semibold">
                                            information signals
                                        </span>
                                        . Over time, those signals aggregate into a concrete, visible claim
                                        on the protocol’s future.
                                    </p>

                                    <div className="grid grid-cols-1 sm:grid-cols-2 !gap-3 text-[0.8rem] md:text-[0.9rem]">
                                        <div className="rounded-xl bg-slate-900/80 border border-cyan-500/40 !px-3 !py-3">
                                            <p className="text-[10px] uppercase tracking-[0.18em] text-cyan-300/80 !mb-1.5">
                                                We Reward
                                            </p>
                                            <p className="text-gray-200">
                                                • Consistent activity
                                                <br />• Reasonable accuracy
                                                <br />• Honest conviction
                                            </p>
                                        </div>
                                        <div className="rounded-xl bg-slate-900/80 border border-emerald-500/40 !px-3 !py-3">
                                            <p className="text-[10px] uppercase tracking-[0.18em] text-emerald-300/80 !mb-1.5">
                                                We De‑Emphasize
                                            </p>
                                            <p className="text-gray-200">
                                                • Hype‑driven spikes
                                                <br />• Volume farming
                                                <br />• Short‑term exploits
                                            </p>
                                        </div>
                                    </div>

                                    <div className="relative !mt-3 !pt-2">
                                        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-cyan-400/40 to-transparent" />
                                        <div className="flex items-center justify-between text-[10px] md:text-[11px] uppercase tracking-[0.2em]">
                                            <span className="text-cyan-200/85 font-semibold">
                                                Ownership Mirrors Contribution
                                            </span>
                                            <div className="flex items-center !gap-2">
                                                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 shadow-[0_0_10px_rgba(74,222,128,0.9)] animate-pulse" />
                                                <span className="text-cyan-100/85 font-semibold">
                                                    Integrity · Alignment
                                                </span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* 3 PILLAR CARDS – SHORT, HIGH IMPACT */}
                <div className="reveal reveal-delay-1 !mb-16">
                    <h2 className="text-2xl md:text-3xl font-bold text-white !mb-6">
                        What This Protocol Optimizes For
                    </h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 !gap-5">
                        {[
                            {
                                icon: '🎯',
                                title: 'Participation → Ownership',
                                desc: 'Every action nudges your long‑term position in the protocol, not just your PnL on a single market.',
                                gradient: 'from-cyan-500 to-emerald-400',
                            },
                            {
                                icon: '🧠',
                                title: 'Signal over Noise',
                                desc: 'Users who produce real information density—not just churn—are the ones who gain lasting weight.',
                                gradient: 'from-sky-500 to-indigo-400',
                            },
                            {
                                icon: '⚖️',
                                title: 'Transparent Incentives',
                                desc: 'Rules are explicit. Rewards are mechanical. No hidden boosts, no black‑box scoring.',
                                gradient: 'from-teal-400 to-cyan-400',
                            },
                        ].map((item, i) => (
                            <div key={i} className="relative group">
                                <div
                                    className={`
                                        absolute -inset-1 rounded-2xl bg-gradient-to-br ${item.gradient}
                                        opacity-0 blur-xl group-hover:opacity-50 transition duration-500
                                    `}
                                />
                                <div className="relative rounded-2xl !p-[1.5px] bg-slate-700/40">
                                    <div className="relative h-full rounded-2xl bg-slate-900/85 backdrop-blur-xl !p-5 flex flex-col transition-all duration-200 group-hover:bg-slate-900">
                                        <div className="inline-flex items-center justify-center w-11 h-11 rounded-xl bg-slate-900/90 !mb-4 border border-cyan-500/30">
                                            <span className="text-2xl">{item.icon}</span>
                                        </div>
                                        <h3 className="text-lg font-semibold text-white !mb-2">
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

                {/* SHORT PARTICIPATION JOURNEY */}
                <div className="reveal reveal-delay-2 !mb-16">
                    <div className="rounded-2xl bg-slate-950/85 border border-cyan-500/30 backdrop-blur-xl !px-5 !py-6 md:!px-6 md:!py-7">
                        <h2 className="text-sm md:text-base uppercase tracking-[0.24em] text-cyan-300/85 !mb-4">
                            Your Journey Inside the Protocol
                        </h2>

                        <div className="grid grid-cols-1 md:grid-cols-4 !gap-4">
                            {[
                                {
                                    step: '01',
                                    title: 'Predict',
                                    text: 'Express views where you have real conviction.',
                                    icon: '📌',
                                },
                                {
                                    step: '02',
                                    title: 'Accumulate',
                                    text: 'Your accuracy and consistency build your contribution record.',
                                    icon: '📊',
                                },
                                {
                                    step: '03',
                                    title: 'Gain Weight',
                                    text: 'Your influence and reward weight grow over epochs.',
                                    icon: '🧱',
                                },
                                {
                                    step: '04',
                                    title: 'Own the Upside',
                                    text: 'As the protocol scales, your stake reflects your role in its success.',
                                    icon: '🚀',
                                },
                            ].map((item, i) => (
                                <div
                                    key={i}
                                    className="
                                        relative rounded-xl bg-slate-900/80 border border-cyan-500/25
                                        !px-4 !py-4 overflow-hidden group
                                        transition-all duration-200 hover:border-cyan-300/80 hover:bg-slate-950
                                    "
                                >
                                    <div className="absolute inset-0 opacity-0 group-hover:opacity-100 bg-gradient-to-br from-cyan-500/10 via-transparent to-emerald-500/10 transition-opacity duration-300 pointer-events-none" />
                                    <div className="relative flex flex-col !gap-2">
                                        <div className="flex items-center justify-between !mb-1">
                                            <span className="text-[11px] font-mono tracking-[0.22em] text-cyan-300/85">
                                                {item.step}
                                            </span>
                                            <span className="text-lg">{item.icon}</span>
                                        </div>
                                        <h3 className="text-sm md:text-[0.95rem] font-semibold text-white">
                                            {item.title}
                                        </h3>
                                        <p className="text-xs md:text-[0.9rem] text-gray-300 leading-snug">
                                            {item.text}
                                        </p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                {/* MINIMAL COMPARISON – SHORT, PUNCHY */}
                <div className="reveal reveal-delay-3 !mb-16">
                    <div className="rounded-2xl bg-slate-950/85 border border-cyan-500/30 backdrop-blur-xl !px-5 !py-6 md:!px-6 md:!py-7">
                        <h2 className="text-sm md:text-base uppercase tracking-[0.24em] text-cyan-300/85 !mb-5">
                            Different From a Pure Speculation Arena
                        </h2>

                        <div className="grid grid-cols-1 md:grid-cols-2 !gap-4">
                            <div className="relative rounded-xl bg-slate-900/80 border border-rose-500/30 !px-4 !py-4 overflow-hidden group">
                                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 bg-gradient-to-br from-rose-500/14 via-transparent to-amber-500/10 transition-opacity duration-300 pointer-events-none" />
                                <div className="relative">
                                    <p className="text-[11px] uppercase tracking-[0.24em] text-rose-100/85 !mb-2">
                                        Typical Speculation
                                    </p>
                                    <p className="text-xs md:text-[0.9rem] text-rose-100/90">
                                        Short‑term spins, exit timing, and hype capture most of the upside.
                                        Market health is an afterthought.
                                    </p>
                                </div>
                            </div>

                            <div className="relative rounded-xl bg-slate-900/80 border border-emerald-500/35 !px-4 !py-4 overflow-hidden group">
                                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 bg-gradient-to-br from-emerald-500/14 via-transparent to-cyan-500/10 transition-opacity duration-300 pointer-events-none" />
                                <div className="relative">
                                    <p className="text-[11px] uppercase tracking-[0.24em] text-emerald-100/85 !mb-2">
                                        This Protocol
                                    </p>
                                    <p className="text-xs md:text-[0.9rem] text-emerald-100/90">
                                        Ownership flows to people who keep the market honest, liquid, and
                                        informative. Integrity is a feature, not a side effect.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* BOTTOM ANIMATION STRIP – HEAVY VISUAL BAND */}
                <div className="reveal reveal-delay-4">
                    <div className="relative w-full rounded-3xl bg-slate-950/90 border border-cyan-500/40 overflow-hidden !px-0 !py-0">
                        {/* Animated gradient grid */}
                        <div className="absolute inset-0 opacity-70 mix-blend-screen">
                            <div className="w-full h-full bg-[radial-gradient(circle_at_top,_rgba(34,211,238,0.18),transparent_60%)]" />
                            <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(15,23,42,0.1)_1px,transparent_1px),linear-gradient(to_bottom,rgba(15,23,42,0.12)_1px,transparent_1px)] bg-[size:32px_32px] animate-[grid-drift_18s_linear_infinite]" />
                        </div>

                        {/* Wave + orbs */}
                        <div className="relative h-24 md:h-32 overflow-hidden">
                            {/* Wave 1 */}
                            <div className="absolute -bottom-6 left-0 w-[200%] h-16 bg-[radial-gradient(circle_at_50%_120%,rgba(34,211,238,0.55),transparent_55%)] animate-[wave-slide_10s_linear_infinite]" />
                            {/* Wave 2 */}
                            <div className="absolute -bottom-10 left-[-50%] w-[220%] h-20 bg-[radial-gradient(circle_at_50%_120%,rgba(45,212,191,0.4),transparent_55%)] opacity-80 animate-[wave-slide-reverse_14s_linear_infinite]" />
                            {/* Line */}
                            <div className="absolute bottom-0 left-0 w-full h-[2px] bg-gradient-to-r from-cyan-300 via-emerald-300 to-cyan-300 shadow-[0_0_22px_rgba(34,211,238,0.9)]" />

                            {/* Floating orbs */}
                            <div className="absolute inset-0 pointer-events-none">
                                <div className="absolute left-8 bottom-3 w-3 h-3 rounded-full bg-cyan-300 shadow-[0_0_16px_rgba(34,211,238,0.9)] animate-[float-orb_4.5s_ease-in-out_infinite]" />
                                <div className="absolute right-14 bottom-8 w-2.5 h-2.5 rounded-full bg-emerald-300 shadow-[0_0_16px_rgba(52,211,153,0.9)] animate-[float-orb_5.5s_ease-in-out_infinite]" />
                                <div className="absolute left-1/2 bottom-11 w-2 h-2 rounded-full bg-sky-300 shadow-[0_0_12px_rgba(56,189,248,0.9)] animate-[float-orb_6s_ease-in-out_infinite]" />
                            </div>
                        </div>

                        {/* Text row */}
                        <div className="relative flex flex-col md:flex-row items-center justify-between !px-5 md:!px-8 !py-4 !gap-3">
                            <div className="flex items-center !gap-3">
                                <span className="w-2 h-2 rounded-full bg-emerald-400 shadow-[0_0_12px_rgba(52,211,153,0.9)] animate-pulse" />
                                <span className="text-[11px] md:text-xs uppercase tracking-[0.2em] text-cyan-100/85">
                                    Long-Term Aligned Prediction Layer
                                </span>
                            </div>
                            <p className="text-xs md:text-sm text-cyan-100/80 text-center md:text-right">
                                If you help the protocol see reality more clearly, the protocol helps you
                                own more of its future.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Vision
