// Discover.jsx
import React from 'react';
import DiscoverForm from '../components/DiscoverForm';
import '../effects.css';
import './Discover.css';

const WHITELIST_OPEN = false;

const Discover = () => {
    return (
        <div
            className="
        discover-page
        relative
        min-h-screen
        flex
        items-center
        justify-center
        !px-6 md:!px-10 lg:!px-16
        overflow-hidden
        bg-slate-950
      "
            style={{ paddingTop: '80px', paddingBottom: '40px' }}
        >
            {/* ==== BACKGROUND ==== */}
            {/* Glow fields */}
            <div className="pointer-events-none absolute inset-0">
                <div className="absolute -top-40 -left-32 w-80 h-80 bg-cyan-500/18 blur-3xl animate-orb-drift-slow" />
                <div className="absolute -bottom-40 -right-24 w-[26rem] h-[26rem] bg-emerald-500/16 blur-3xl animate-orb-drift" />
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(56,189,248,0.16),_transparent_55%),radial-gradient(circle_at_bottom,_rgba(16,185,129,0.18),_transparent_55%)] opacity-80" />
            </div>

            {/* Soft grid overlay */}
            <div className="pointer-events-none absolute inset-0 opacity-[0.18] mix-blend-soft-light">
                <div className="w-full h-full bg-[linear-gradient(rgba(148,163,184,0.22)_1px,transparent_1px),linear-gradient(90deg,rgba(148,163,184,0.18)_1px,transparent_1px)] bg-[size:42px_42px]" />
            </div>

            {/* ==== CONTENT ==== */}
            <div className="relative z-10 w-full max-w-3xl !space-y-8 md:!space-y-10">
                {/* Header */}
                <div className="text-center">
                    {/* Small status pill */}
                    <div className="relative inline-flex !mb-5">
                        <div className="absolute inset-0 rounded-full bg-cyan-400/25 blur-2xl animate-glow-breathe" />
                        <div
                            className="
                relative !px-6 !py-1
                rounded-full
                border border-cyan-400/30
                bg-slate-900/70
                backdrop-blur-xl
                text-[10px] md:text-xs
                tracking-[0.3em]
                uppercase
                text-cyan-200/90
                flex items-center !gap-2 justify-center
              "
                        >
                            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                            <span>Whitelist Channel · Encrypted</span>
                        </div>
                    </div>

                    <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight leading-tight animate-title-reveal">
                        <span className="block text-white">Whitelist</span>
                        <span className="block text-transparent bg-clip-text bg-gradient-to-r from-cyan-300 via-teal-300 to-emerald-300 animate-gradient-drift">
                            Access Portal
                        </span>
                    </h1>

                    <div className="!mt-4 !mb-3 flex justify-center">
                        <span className="relative h-[2px] w-32 overflow-hidden">
                            <span className="absolute inset-0 bg-gradient-to-r from-transparent via-cyan-400 to-transparent animate-underline-draw" />
                        </span>
                    </div>

                    <p className="text-xs md:text-sm text-slate-300/80 tracking-[0.25em] uppercase animate-subtitle-reveal">
                        Submit Credentials · Reserve Your Spot
                    </p>
                </div>

                {/* Access Portal Card */}
                <div
                    className="
            relative group
            rounded-[28px]
            bg-slate-950/90
            border border-cyan-400/30
            backdrop-blur-2xl
            !px-5 !py-6
            sm:!px-7 sm:!py-7
            md:!px-9 md:!py-8
            overflow-hidden
            shadow-[0_26px_90px_rgba(15,23,42,0.98)]
            transition-all duration-500
            hover:border-cyan-300/60
            hover:shadow-[0_32px_140px_rgba(45,212,191,0.5)]
            animate-portal-float
          "
                >
                    {/* Edge glow */}
                    <div className="pointer-events-none absolute -inset-px rounded-[28px] opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                        <div className="absolute inset-0 rounded-[28px] bg-gradient-to-br from-cyan-400/40 via-teal-400/18 to-transparent blur-2xl" />
                    </div>

                    {/* Sheen */}
                    <div
                        className="
              pointer-events-none
              absolute inset-0
              bg-[linear-gradient(120deg,transparent,rgba(255,255,255,0.16),transparent)]
              translate-x-[-130%]
              group-hover:translate-x-[130%]
              transition-transform duration-[1300ms] ease-out
            "
                    />

                    {/* Top row content */}
                    <div className="relative !mb-6 sm:!mb-7 border-b border-cyan-300/20 !pb-4">
                        <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between !gap-4 lg:!gap-6">
                            {/* Left: phase, subtitle, requirements */}
                            <div className="!space-y-3 lg:!space-y-3.5">
                                <div>
                                    <p className="text-[11px] sm:text-xs uppercase tracking-[0.24em] text-cyan-200/80 !mb-1">
                                        Phase I · Priority Intake
                                    </p>
                                    <h2 className="text-lg sm:text-xl font-semibold text-slate-50">
                                        Verify your signal & lock in whitelist eligibility.
                                    </h2>
                                </div>

                                {/* Requirements block */}
                                <div
                                    className="
    requirements-block
    relative
    rounded-2xl
    bg-slate-900/80
    border border-cyan-400/40
    !px-4 !py-3.5
    sm:!px-5 sm:!py-4
    overflow-hidden
  "
                                >
                                    {/* Subtle glow */}
                                    <div className="pointer-events-none absolute inset-0 opacity-45 bg-[radial-gradient(circle_at_top,_rgba(45,212,191,0.22),transparent_60%)]" />

                                    <div className="relative">
                                        {/* Header */}
                                        <div className="flex items-center justify-between !mb-3">
                                            <div className="flex items-center !gap-2">
                                                <span className="inline-flex h-6 w-6 items-center justify-center rounded-full bg-slate-950/80 border border-cyan-400/50 shadow-[0_0_14px_rgba(34,211,238,0.55)]">
                                                    <span className="text-[13px]">🛡️</span>
                                                </span>
                                                <p className="text-[10px] sm:text-[11px] uppercase tracking-[0.26em] text-cyan-100/90">
                                                    Entry Requirements
                                                </p>
                                            </div>

                                            <div className="flex items-center !gap-1.5 text-[9px] sm:text-[10px] text-emerald-300/80">
                                                <span className="inline-flex h-1.5 w-1.5 rounded-full bg-emerald-400 animate-req-ping-soft" />
                                                <span className="hidden sm:inline">Checklist Live</span>
                                            </div>
                                        </div>

                                        {/* List */}
                                        <ul className="requirements-list !space-y-2.5 text-xs sm:text-sm text-slate-100">
                                            {/* 1 */}
                                            <li className="requirements-item group flex items-start !gap-2.5">
                                                {/* Number badge */}
                                                <div className="flex flex-col items-center !gap-1">
                                                    <div className="inline-flex h-7 w-7 items-center justify-center rounded-xl bg-slate-950/90 border border-cyan-400/70 shadow-[0_0_10px_rgba(34,211,238,0.55)]">
                                                        <span className="text-[12px]">1️⃣</span>
                                                    </div>
                                                    <span className="!px-1.5 !py-[1px] rounded-full bg-slate-900/95 border border-cyan-400/30 text-[9px] uppercase tracking-[0.16em] text-cyan-100/90">
                                                        Follow
                                                    </span>
                                                </div>

                                                {/* Text */}
                                                <div className="flex-1">
                                                    <p className="text-[11px] sm:text-[11px] uppercase tracking-[0.18em] text-slate-400 !mb-0.5">
                                                        Follow on X
                                                    </p>
                                                    <p className="text-[12px] sm:text-[13px] text-slate-100">
                                                        Follow{' '}
                                                        <a
                                                            href="https://x.com/Quacksquads"
                                                            target="_blank"
                                                            rel="noopener noreferrer"
                                                            className="req-link"
                                                        >
                                                            @Quacksquads
                                                        </a>
                                                    </p>
                                                </div>
                                            </li>

                                            {/* 2 */}
                                            <li className="requirements-item group flex items-start !gap-2.5">
                                                <div className="flex flex-col items-center !gap-1">
                                                    <div className="inline-flex h-7 w-7 items-center justify-center rounded-xl bg-slate-950/90 border border-cyan-400/70 shadow-[0_0_10px_rgba(34,211,238,0.55)]">
                                                        <span className="text-[12px]">2️⃣</span>
                                                    </div>
                                                    <span className="!px-1.5 !py-[1px] rounded-full bg-slate-900/95 border border-cyan-400/30 text-[9px] uppercase tracking-[0.16em] text-cyan-100/90">
                                                        Engage
                                                    </span>
                                                </div>

                                                <div className="flex-1">
                                                    <p className="text-[11px] sm:text-[11px] uppercase tracking-[0.18em] text-slate-400 !mb-0.5">
                                                        Boost the signal
                                                    </p>
                                                    <p className="text-[12px] sm:text-[13px] text-slate-100">
                                                        Like &amp; repost the whitelist post{' '}
                                                        <a
                                                            href="https://x.com/Quacksquads"
                                                            target="_blank"
                                                            rel="noopener noreferrer"
                                                            className="req-link"
                                                        >
                                                            on X
                                                        </a>
                                                    </p>
                                                </div>
                                            </li>

                                            {/* 3 */}
                                            <li className="requirements-item group flex items-start !gap-2.5">
                                                <div className="flex flex-col items-center !gap-1">
                                                    <div className="inline-flex h-7 w-7 items-center justify-center rounded-xl bg-slate-950/90 border border-cyan-400/70 shadow-[0_0_10px_rgba(34,211,238,0.55)]">
                                                        <span className="text-[12px]">3️⃣</span>
                                                    </div>
                                                    <span className="!px-1.5 !py-[1px] rounded-full bg-slate-900/95 border border-cyan-400/30 text-[9px] uppercase tracking-[0.16em] text-cyan-100/90">
                                                        Verify
                                                    </span>
                                                </div>

                                                <div className="flex-1">
                                                    <p className="text-[11px] sm:text-[11px] uppercase tracking-[0.18em] text-slate-400 !mb-0.5">
                                                        Prove ownership
                                                    </p>
                                                    <p className="text-[12px] sm:text-[13px] text-slate-100">
                                                        Reply to the whitelist post with your wallet address
                                                    </p>
                                                </div>
                                            </li>
                                        </ul>

                                        {/* Bottom accent line */}
                                        <div className="!mt-3 h-[1px] w-full overflow-hidden rounded-full bg-slate-900/80">
                                            <div className="h-full w-full origin-left bg-gradient-to-r from-cyan-400 via-teal-300 to-emerald-300 animate-req-progress" />
                                        </div>
                                    </div>
                                </div>

                            </div>

                            {/* Right: queue status */}
                            <div className="flex flex-col items-start lg:items-end !gap-1 text-left lg:text-right">
                                <p className="text-[11px] sm:text-xs uppercase tracking-[0.26em] text-slate-400">
                                    Queue Status
                                </p>
                                <p className="flex items-center !gap-2 text-xs sm:text-sm text-emerald-300 font-semibold">
                                    <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                                    {WHITELIST_OPEN ? 'Live · Limited Capacity' : 'Closed · Capacity Reached'}
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Form */}
                    <div className="relative">
                        <DiscoverForm />

                        {/* Soft corner orb accent */}
                        <div className="pointer-events-none absolute -right-10 -bottom-10 w-40 h-40 rounded-full bg-cyan-400/12 blur-3xl animate-orbit-soft" />
                    </div>

                    {/* Bottom accent line */}
                    <div className="pointer-events-none absolute left-8 right-8 bottom-4 h-px bg-gradient-to-r from-transparent via-cyan-300/70 to-transparent" />
                </div>
            </div>
        </div>
    );
};

export default Discover;
