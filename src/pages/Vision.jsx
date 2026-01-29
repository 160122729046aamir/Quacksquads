import React from 'react'
import '../effects.css'

const Vision = () => {
    return (
        <div
            className="underwater-bg min-h-screen !px-6 !pb-32 !pt-[90px] relative overflow-hidden flex flex-col items-center"
        >
            <div className="depth-fog" />

            <div className="max-w-5xl w-full relative z-10">
                {/* Header */}
                <div className="text-center !mb-20 reveal">
                    <h1 className="text-5xl md:text-7xl font-bold leading-tight !mb-6">
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-teal-300 to-emerald-400">
                            Values
                        </span>{' '}
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-pink-400 to-red-400">
                            First.
                        </span>
                    </h1>

                    <p className="text-lg md:text-xl text-gray-300 max-w-2xl !mx-auto leading-relaxed">
                        Prediction markets shouldn’t feel like casinos.
                        <br className="hidden md:block" />
                        They should feel like communities built on consistency.
                    </p>
                </div>

                {/* Values */}
                <div className="grid grid-cols-1 md:grid-cols-3 !gap-8 !mb-28 reveal reveal-delay-1">
                    {[
                        {
                            id: '01',
                            title: 'Anti-Luck',
                            desc:
                                'One win is chance. A year of profitability is skill. We reward long-term discipline.',
                            gradient: 'from-cyan-400 via-blue-500 to-indigo-600',
                        },
                        {
                            id: '02',
                            title: 'Utility',
                            desc:
                                'NFTs should do something. Ours compound your rewards every week you stay active.',
                            gradient: 'from-teal-400 via-emerald-500 to-green-500',
                        },
                        {
                            id: '03',
                            title: 'Fairness',
                            desc:
                                'Transparent point logic and on-chain verification. No hidden rules. No insiders.',
                            gradient: 'from-purple-400 via-pink-500 to-rose-500',
                        },
                    ].map((item, i) => (
                        <div
                            key={i}
                            className="relative group transition-transform duration-300 hover:-translate-y-1"
                        >
                            {/* Ambient glow */}
                            <div
                                className={`absolute -inset-1 rounded-3xl bg-gradient-to-br ${item.gradient} opacity-0 blur-2xl group-hover:opacity-60 transition duration-500`}
                            />

                            {/* Card */}
                            <div className="relative h-full rounded-3xl bg-slate-900/70 backdrop-blur-xl !p-8 border border-white/10 group-hover:border-white/25 transition-all duration-300 overflow-hidden">

                                {/* Soft inner gradient */}
                                <div
                                    className={`absolute inset-0 bg-gradient-to-br ${item.gradient} opacity-[0.06] pointer-events-none`}
                                />

                                {/* Top accent line */}
                                <div
                                    className={`absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r ${item.gradient}`}
                                />

                                {/* Badge */}
                                <div
                                    className={`relative inline-flex items-center justify-center w-14 h-14 rounded-2xl bg-gradient-to-br ${item.gradient} text-slate-900 font-bold !mb-6 shadow-lg`}
                                >
                                    {item.id}
                                </div>

                                <h3 className="relative text-xl font-semibold text-white !mb-3">
                                    {item.title}
                                </h3>

                                <p className="relative text-gray-300 leading-relaxed text-sm md:text-base">
                                    {item.desc}
                                </p>

                                {/* Bottom shimmer */}
                                <div className="absolute bottom-0 left-6 right-6 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent" />
                            </div>
                        </div>
                    ))}
                </div>



                {/* Security Section */}
                <div className="relative reveal reveal-delay-2">
                    {/* Ambient frame glow */}
                    <div className="absolute -inset-1 rounded-3xl bg-gradient-to-r from-cyan-400/20 via-teal-400/20 to-blue-500/10 blur-2xl" />

                    <div className="relative md:flex items-center justify-between rounded-3xl bg-slate-900/75 backdrop-blur-xl border border-white/15 !p-10 overflow-hidden">

                        {/* Subtle inner gradient */}
                        <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/5 via-transparent to-teal-500/5 pointer-events-none" />

                        {/* Content */}
                        <div className="relative !mb-6 md:!mb-0 md:!mr-12 max-w-xl">
                            <h2 className="text-2xl md:text-3xl font-semibold text-white !mb-3">
                                Security & Integrity
                            </h2>
                            <p className="text-gray-300 leading-relaxed">
                                Anti-spam, anti-manipulation, and strict validation ensure real users —
                                not bots — are the primary beneficiaries of the system.
                            </p>
                        </div>

                        {/* Status badge */}
                        <div className="relative flex-shrink-0">
                            <div className="relative inline-flex items-center gap-3 rounded-full !px-6 !py-3 bg-slate-900 border border-white/20 shadow-lg">
                                <span className="w-2 h-2 rounded-full bg-yellow-400 animate-pulse" />
                                <span className="font-mono text-xs tracking-widest text-white">
                                    AUDIT&nbsp;PENDING
                                </span>
                            </div>
                        </div>

                        {/* Bottom accent */}
                        <div className="absolute bottom-0 left-8 right-8 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent" />
                    </div>
                </div>

            </div>
        </div>
    )
}

export default Vision
