import React from 'react'
import '../effects.css'

const NFT_Utility = () => {
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
                {/* SECTION HEADER – Core Assets · NFT Multipliers (with animated underline) */}
                <div className="reveal !mb-12">
                    <div className="inline-block relative">
                        <h1 className="text-3xl md:text-4xl font-bold text-white tracking-tight">
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-teal-300 to-emerald-400">
                                Core Assets
                            </span>{' '}
                            · NFT Multipliers
                        </h1>

                        {/* Animated underline */}
                        <div className="relative !mt-3 h-[3px] w-full bg-cyan-500/20 rounded-full overflow-hidden">
                            <div className="absolute inset-0 bg-gradient-to-r from-cyan-400 via-emerald-300 to-cyan-400 animate-[underline-slide_2.2s_ease-in-out_infinite]" />
                        </div>
                    </div>

                    {/* Subheading / short description */}
                    <p className="text-sm md:text-base text-cyan-100/80 !mt-4 max-w-2xl">
                        NFTs amplify the weight of your earned rewards. They don’t change market
                        outcomes—they change how strongly your participation counts in the reward
                        accounting system.
                    </p>
                </div>

                {/* NFT EXPLANATION CARD (UI POLISHED, BUT NO TABLE / NUMERIC LIST) */}
                <div className="reveal reveal-delay-1 !mb-10">
                    <div className="relative rounded-2xl bg-slate-950/80 border border-cyan-500/30 backdrop-blur-xl !px-5 !py-5 md:!px-6 md:!py-6 overflow-hidden">
                        {/* Soft gradient aura */}
                        <div className="pointer-events-none absolute -top-32 -right-16 w-72 h-72 bg-[radial-gradient(circle_at_center,rgba(34,211,238,0.18),transparent_60%)]" />
                        <div className="pointer-events-none absolute -bottom-32 -left-10 w-72 h-72 bg-[radial-gradient(circle_at_center,rgba(16,185,129,0.16),transparent_60%)]" />

                        <div className="relative flex flex-col !gap-4">
                            <p className="text-sm md:text-base text-cyan-100/90">
                                NFTs{' '}
                                <span className="text-cyan-300 font-semibold">
                                    increase the effective weight
                                </span>{' '}
                                of earned rewards in the platform’s accounting system. The
                                multiplier applies only to{' '}
                                <span className="text-emerald-300 font-semibold">
                                    active participation
                                </span>{' '}
                                and is fully transparent.
                            </p>

                            <p className="text-sm md:text-base text-cyan-100/90">
                                NFTs are optional, but they provide a{' '}
                                <span className="text-emerald-300 font-semibold">
                                    measurable advantage
                                </span>{' '}
                                to users who participate consistently. Multipliers are{' '}
                                <span className="text-cyan-300 font-semibold">
                                    fixed and predefined
                                </span>
                                ; there are no hidden modifiers or opaque boost mechanics.
                            </p>

                            <p className="text-sm md:text-base text-cyan-100/90">
                                Rewards are scaled according to{' '}
                                <span className="text-cyan-300 font-semibold">NFT holdings</span>{' '}
                                and{' '}
                                <span className="text-cyan-300 font-semibold">ongoing activity</span>
                                —passive ownership alone does not generate additional rewards. NFTs do{' '}
                                <span className="text-rose-300 font-semibold">not</span> affect
                                market outcomes; they only influence how strongly your contributions
                                are counted in the reward accounting system.
                            </p>

                            {/* Small chips row to hint tiers without duplicating the cards */}
                            <div className="flex flex-wrap !gap-2 !mt-1">
                                {['Active-only multipliers', 'No hidden modifiers', 'Participation-weighted'].map(
                                    (label, i) => (
                                        <span
                                            key={i}
                                            className="
                                                text-[11px] md:text-xs
                                                rounded-full
                                                border border-cyan-500/35
                                                bg-slate-900/70
                                                text-cyan-100/85
                                                !px-3 !py-1
                                                tracking-[0.16em]
                                                uppercase
                                            "
                                        >
                                            {label}
                                        </span>
                                    )
                                )}
                            </div>
                        </div>
                    </div>
                </div>

                {/* NFT MULTIPLIER CARDS – KEEP UI EXACTLY AS IS */}
                <div className="reveal reveal-delay-1">
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
                
            </div>
        </div>
    )
}

export default NFT_Utility
