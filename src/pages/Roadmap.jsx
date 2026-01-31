import React from 'react'
import '../effects.css'

const Roadmap = () => {
    const phases = [
        {
            id: 'Phase 01',
            title: 'Foundations',
            desc: 'NFT Launch & Community Formation',
            items: [
                'Finalize NFT design and utility assets',
                'Launch exclusive NFT collection',
                'Establish core community channels'
            ],
            status: 'active'
        },
        {
            id: 'Phase 02',
            title: 'Development',
            desc: 'Platform Core Architecture',
            items: [
                'Design prediction market smart contracts',
                'Develop secure backend infrastructure',
                'Implement Weekly Points System logic'
            ],
            status: 'pending'
        },
        {
            id: 'Phase 03',
            title: 'Launch',
            desc: 'MVP & Integration',
            items: [
                'Launch MVP prediction interface',
                'Activate NFT multiplier bonuses',
                'Enable on-chain activity tracking'
            ],
            status: 'pending'
        },
        {
            id: 'Phase 04',
            title: 'Expansion',
            desc: 'Token Generation & Rewards',
            items: [
                'Launch native ecosystem token',
                'Convert accumulated points to allocation',
                'Execute community airdrop distribution'
            ],
            status: 'pending'
        }
    ]

    const statusStyles = {
        done: 'from-emerald-400 to-teal-400',
        active: 'from-cyan-400 to-blue-500',
        pending: 'from-slate-500 to-slate-700'
    }

    return (
        <div className="underwater-bg min-h-screen relative overflow-hidden !px-6 !pb-32 !pt-16 md:!pt-24 flex justify-center">
            <div className="depth-fog" />

            <div className="max-w-6xl w-full relative z-10">
                {/* Header */}
                <div className="text-center !mb-14 reveal">
                    <div className="inline-flex items-center !gap-2 !mb-3 bg-slate-900/70 border border-cyan-500/40 rounded-full !px-4 !py-1.5 backdrop-blur-xl shadow-[0_0_22px_rgba(0,245,255,0.35)]">
                        <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse shadow-[0_0_10px_rgba(74,222,128,0.9)]" />
                        <span className="text-[11px] tracking-[0.22em] uppercase text-cyan-100/85">
                            Protocol Evolution · Milestones
                        </span>
                    </div>

                    <h1 className="text-4xl md:text-5xl font-bold text-white !mb-3 tracking-tight">
                        Protocol Roadmap
                    </h1>
                    <p className="text-cyan-300 text-xs md:text-sm uppercase tracking-[0.35em] opacity-80">
                        From Foundations to Expansion
                    </p>
                </div>
                {/* Timeline */}
                <div className="relative">

                    {/* Animated Spine */}
                    <div className="absolute left-1/2 top-0 bottom-0 w-px -translate-x-1/2 bg-gradient-to-b from-transparent via-cyan-400/40 to-transparent animate-pulse" />

                    <div className="!space-y-20">
                        {phases.map((phase, index) => {
                            const isLeft = index % 2 === 0

                            return (
                                <div
                                    key={index}
                                    className={`
        relative flex flex-col md:flex-row
        ${isLeft ? 'md:flex-row-reverse' : ''}
        md:items-center
        reveal
      `}
                                >
                                    {/* Timeline Node */}
                                    <div className="absolute left-1/2 -translate-x-1/2 z-30">
                                        <div
                                            className={`
            w-5 h-5 rounded-full
            bg-slate-900
            border-2
            transition-all duration-300
            ${phase.status === 'active'
                                                    ? 'border-cyan-400 shadow-[0_0_22px_rgba(34,211,238,0.9)]'
                                                    : phase.status === 'done'
                                                        ? 'border-emerald-400 shadow-[0_0_16px_rgba(52,211,153,0.7)]'
                                                        : 'border-white/25'
                                                }
          `}
                                        />
                                        {phase.status === 'active' && (
                                            <div className="absolute inset-0 rounded-full bg-cyan-400/30 animate-ping" />
                                        )}
                                    </div>

                                    {/* Card Container */}
                                    <div
                                        className={`
          w-full md:w-[46%]
          ${isLeft ? 'md:text-left' : 'md:text-right'}
        `}
                                    >
                                        {/* Card */}
                                        <div
                                            className="
            relative group
            rounded-3xl
            bg-slate-900/70 backdrop-blur-xl
            border border-white/10
            !p-8
            overflow-hidden

            transition-all duration-500 ease-out
            hover:-translate-y-2
            hover:border-white/30
            hover:shadow-[0_35px_90px_-35px_rgba(34,211,238,0.45)]
          "
                                        >
                                            {/* Gradient glow border */}
                                            <div className="absolute -inset-[1px] rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none">
                                                <div
                                                    className={`
                absolute inset-0 rounded-3xl
                bg-gradient-to-br ${statusStyles[phase.status]}
                blur-xl opacity-30
              `}
                                                />
                                            </div>

                                            {/* Animated light sweep */}
                                            <div
                                                className="
              absolute inset-0
              bg-gradient-to-r from-transparent via-white/10 to-transparent
              translate-x-[-120%]
              group-hover:translate-x-[120%]
              transition-transform duration-[1400ms] ease-in-out
              pointer-events-none
            "
                                            />

                                            {/* Header */}
                                            <div className="relative !mb-6">
                                                <span className="text-xs uppercase tracking-[0.3em] text-cyan-300/70">
                                                    {phase.id}
                                                </span>
                                                <h3 className="text-2xl font-bold text-white !mt-1">
                                                    {phase.title}
                                                </h3>
                                                <p className="text-gray-400 text-sm !mt-1">
                                                    {phase.desc}
                                                </p>
                                            </div>

                                            {/* Items */}
                                            <ul className="relative !space-y-3">
                                                {phase.items.map((item, idx) => (
                                                    <li
                                                        key={idx}
                                                        className="
                  group/item
                  flex items-start !gap-3 text-sm
                  transition-all duration-300
                  text-gray-300 hover:text-white
                "
                                                    >
                                                        <span
                                                            className="
                    !mt-2 w-1.5 h-1.5 rounded-full
                    bg-cyan-400/60
                    flex-shrink-0
                    transition-all duration-300
                    group-hover/item:scale-125
                    group-hover/item:bg-cyan-300
                  "
                                                        />
                                                        <span className="leading-relaxed max-w-xs">
                                                            {item}
                                                        </span>
                                                    </li>
                                                ))}
                                            </ul>

                                            {/* Status Pill */}
                                            <div className="relative !mt-8">
                                                <span
                                                    className={`
                inline-block !px-4 !py-1 rounded-full
                text-xs font-bold tracking-widest
                bg-gradient-to-r ${statusStyles[phase.status]}
                text-black
              `}
                                                >
                                                    {phase.status.toUpperCase()}
                                                </span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            )
                        })}

                    </div>
                </div>
            </div>
        </div>
    )
}

export default Roadmap
