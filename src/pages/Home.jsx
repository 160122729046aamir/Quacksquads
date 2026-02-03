import React, { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import '../effects.css';
import '../glitch.css';
import './Home.css';

const Home = ({ isMuted = false, setIsMuted }) => {
    const containerRef = useRef(null);
    const videoRef = useRef(null);
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        const checkMobile = () => {
            setIsMobile(window.innerWidth < 768);
        };
        checkMobile();
        window.addEventListener('resize', checkMobile);
        return () => window.removeEventListener('resize', checkMobile);
    }, []);

    // Reset video to muted on component mount
    useEffect(() => {
        if (videoRef.current) {
            videoRef.current.muted = true;
        }
    }, []);

    // Handle video playback
    useEffect(() => {
        if (videoRef.current) {
            const playVideo = async () => {
                try {
                    await videoRef.current.play();
                } catch (err) {
                    console.log('Video autoplay failed:', err);
                }
            };
            playVideo();
        }
    }, []);

    // Sync mute state with video element whenever isMuted changes
    useEffect(() => {
        if (videoRef.current) {
            videoRef.current.muted = isMuted;
        }
    }, [isMuted]);

    // Generate bubbles with magnetic effect - Reduced count on mobile
    const bubbles = Array.from({ length: isMobile ? 10 : 30 }, (_, i) => ({
        id: i,
        left: Math.random() * 100,
        delay: Math.random() * 5,
        duration: 8 + Math.random() * 6,
        size: 8 + Math.random() * 15,
    }));

    // Generate floating particles (plankton) - Reduced count on mobile
    const particles = Array.from({ length: isMobile ? 15 : 50 }, (_, i) => ({
        id: i,
        left: Math.random() * 100,
        delay: Math.random() * 10,
        duration: 15 + Math.random() * 10,
        driftX: (Math.random() - 0.5) * 100,
    }));

    // Generate light beams
    const lightBeams = [
        { left: '15%', delay: 0 },
        { left: '45%', delay: 2 },
        { left: '75%', delay: 4 },
    ];

    // Desktop-only lore / feature cards
    const loreCards = [
        {
            label: 'ON-CHAIN MEMORY',
            title: 'Every Duck Leaves a Trace',
            desc: 'Each Quacksquad is a shard of a bigger story — traits, decisions, and signatures that live on-chain long after wallets rotate.',
            badge: 'Immutable Lore Layer',
            gradient: 'from-cyan-400 via-sky-400 to-emerald-400',
        },
        {
            label: 'FRACTURED OWNERSHIP',
            title: 'Identity Splits, Value Compounds',
            desc: 'Rerolls, merges, and trait splits let holders fracture and remix identity while preserving the underlying provenance.',
            badge: 'Reroll & Merge Mechanics',
            gradient: 'from-emerald-400 via-teal-400 to-lime-400',
        },
        {
            label: 'SIGNAL OVER HYPE',
            title: 'Collectors as Co‑Authors',
            desc: 'Your on-chain behavior becomes part of the canon — the way you move, trade, and stack Quacksquads is written into the lore.',
            badge: 'Living Story Protocol',
            gradient: 'from-purple-400 via-indigo-400 to-cyan-400',
        },
    ];

    // Desktop-only micro-timeline steps
    const timelineSteps = [
        {
            step: '01',
            title: 'Mint Your Squad',
            text: 'Secure your Quacksquad during the whitelist phase and lock in your spot in the genesis story.',
        },
        {
            step: '02',
            title: 'Evolve Traits',
            text: 'Participate in seasonal events, rerolls, and merges to evolve the visual and narrative identity of your ducks.',
        },
        {
            step: '03',
            title: 'Write the Canon',
            text: 'Trait combinations, trading patterns, and on-chain actions influence how Quacksquads history is recorded.',
        },
        {
            step: '04',
            title: 'Unlock Future Layers',
            text: 'New drops, collaborations, and protocol mechanics reference your existing Quacksquads footprint.',
        },
    ];

    // Desktop-only “Inside the Drop” content (no random supply numbers)
    const dropHighlights = [
        {
            label: 'Trait Systems',
            value: 'Evolving Layers',
            text: 'Interlocking visual and narrative traits designed to be rerolled, merged, and recontextualized over time.',
        },
        {
            label: 'Story Events',
            value: 'Responsive Seasons',
            text: 'Lore chapters that adapt to how holders trade, reroll, and reshape their Quacksquads, rather than following a fixed script.',
        },
    ];


    return (
        <div
            ref={containerRef}
            className="
        underwater-bg md:relative overflow-hidden min-h-screen
        flex flex-col items-center
        !px-4 md:!px-8
        !pb-4 md:!pb-32
        !pt-16 md:!pt-[90px]
        home-page-enter
      "
        >
            {/* DESKTOP BACKGROUND LAYERS (NO VIDEO) */}
            {!isMobile && (
                <>
                    <div className="pointer-events-none absolute inset-0 home-bg-gradient" />
                    <div className="pointer-events-none absolute inset-0 home-bg-grid" />
                    <div className="pointer-events-none absolute inset-0 home-bg-orb-layer">
                        <div className="home-bg-orb home-bg-orb-1" />
                        <div className="home-bg-orb home-bg-orb-2" />
                        <div className="home-bg-orb home-bg-orb-3" />
                    </div>
                </>
            )}

            {/* Light Beams */}
            {lightBeams.map((beam, i) => (
                <div
                    key={`beam-${i}`}
                    className="light-beam home-beam-glow"
                    style={{
                        left: beam.left,
                        animationDelay: `${beam.delay}s`,
                    }}
                />
            ))}

            {/* Floating Particles */}
            {particles.map((particle) => (
                <div
                    key={`particle-${particle.id}`}
                    className="particle home-particle-drift"
                    style={{
                        left: `${particle.left}%`,
                        bottom: '-10px',
                        animationDelay: `${particle.delay}s`,
                        animationDuration: `${particle.duration}s`,
                        '--drift-x': `${particle.driftX}px`,
                    }}
                />
            ))}

            {/* Floating Bubbles */}
            {bubbles.map((bubble) => (
                <div
                    key={bubble.id}
                    className="bubble magnetic-bubble home-bubble-float"
                    style={{
                        left: `${bubble.left}%`,
                        animationDelay: `${bubble.delay}s`,
                        animationDuration: `${bubble.duration}s`,
                        width: `${bubble.size}px`,
                        height: `${bubble.size}px`,
                    }}
                />
            ))}

            {/* Depth Fog */}
            <div className="depth-fog home-depth-breathe" />

            {/* Mobile Background Video with Glitch Effect - Only on Mobile */}
            {isMobile && (
                <div
                    className="fixed z-0"
                    style={{
                        top: 0,
                        left: 0,
                        width: '100vw',
                        height: '100vh',
                        overflow: 'hidden',
                    }}
                >
                    <div className="relative w-full h-full scanlines">
                        <video
                            ref={videoRef}
                            src="/assets/Aqua.mp4"
                            className="character-glitch"
                            autoPlay
                            loop
                            playsInline
                            muted={isMuted}
                            style={{
                                position: 'absolute',
                                top: '50%',
                                left: '50%',
                                transform: 'translate(-50%, -50%)',
                                minWidth: '100%',
                                minHeight: '100%',
                                width: '100vw',
                                height: '100vh',
                                objectFit: 'cover',
                                objectPosition: 'center 40%',
                                filter: 'brightness(0.4) contrast(1.1)',
                                opacity: '0.6',
                            }}
                        />
                        {/* Glitch overlay lines */}
                        <div
                            className="absolute inset-0 pointer-events-none"
                            style={{
                                background:
                                    'repeating-linear-gradient(0deg, rgba(0, 255, 255, 0.03) 0px, transparent 1px, transparent 2px, rgba(0, 255, 255, 0.03) 3px)',
                                animation: 'glitch-lines 0.1s infinite',
                            }}
                        />
                    </div>
                </div>
            )}

            {/* MAIN CONTENT */}
            <div className="relative !mt-2 z-10 max-w-6xl w-full flex flex-col justify-center !my-auto min-h-[80vh]">
                {/* HERO ROW – text + preview panel on desktop */}
                <div className="flex flex-col lg:flex-row items-center lg:items-start !gap-10 lg:!gap-14 !px-4 md:!px-6 home-hero-reveal">
                    {/* LEFT: HERO TEXT */}
                    <div className="w-full lg:w-1/2 text-center lg:text-left">
                        {/* Small badge */}
                        <div className="inline-flex items-center rounded-full border border-cyan-400/40 bg-cyan-400/10 !px-4 !py-1.5 !mb-5 !gap-2 home-hero-badge">
                            <span className="h-1.5 w-1.5 rounded-full bg-cyan-300 shadow-[0_0_12px_rgba(34,211,238,1)] animate-platform-pulse-dot" />
                            <span className="text-[11px] uppercase tracking-[0.28em] text-cyan-100/85">
                                Quacksquads • Identity Lab
                            </span>
                        </div>

                        {/* HEADING */}
                        <div className="inline-block relative !mb-6">
                            <h1 className="text-3xl md:text-4xl lg:text-[2.6rem] font-bold text-white tracking-tight leading-tight">
                                <span>Where identity breaks,</span>
                                <br />
                                <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-teal-300 to-emerald-400 home-heading-glow">
                                    but the chain remembers.
                                </span>
                            </h1>

                            {/* Animated underline */}
                            <div className="relative !mt-3 h-[3px] w-full bg-cyan-500/20 rounded-full overflow-hidden home-underline-shell">
                                <div className="absolute inset-0 bg-gradient-to-r from-cyan-400 via-emerald-300 to-cyan-400 home-underline-slide" />
                            </div>
                        </div>

                        {/* DESCRIPTION */}
                        <p
                            className="
                home-sub
                text-sm sm:text-base md:text-lg text-gray-100
                max-w-xl
                !mx-auto lg:!mx-0
                !mb-6
                !px-2 md:!px-0
                home-sub-reveal
              "
                            style={{
                                textShadow: isMobile
                                    ? '0 2px 10px rgba(0, 0, 0, 0.9)'
                                    : '0 0 22px rgba(0, 0, 0, 0.9)',
                            }}
                        >
                            <span className="home-sub-span home-sub-span-2">
                                Quacksquads is a limited NFT series about broken identity, persistent
                                memory, and the strange ways ownership splinters in a decentralized
                                future — all told through an underwater world on the edge of collapse.
                            </span>
                        </p>

                        {/* SECONDARY BLURB */}
                        <p
                            className="
                text-[12px] md:text-sm text-cyan-100/90
                max-w-md
                !mx-auto lg:!mx-0
                !mb-7
                home-sub-secondary
              "
                        >
                            Every duck you mint is a shard of a bigger canon. Traits, rerolls, merges,
                            and on-chain activity all feed back into how the story of Quacksquads is
                            written.
                        </p>

                        {/* BUTTONS */}
                        <div
                            className="
                home-actions
                flex flex-col sm:flex-row items-center lg:items-start justify-center lg:justify-start
                !gap-4 md:!gap-5
              "
                        >
                            {/* Explore Button */}
                            <Link to="/intro" className="w-full sm:w-auto">
                                <button
                                    className="
                    home-btn-secondary
                    w-full sm:w-auto
                    !px-12 !py-4
                    font-bold text-sm uppercase tracking-wider
                    rounded-full
                    border
                    relative overflow-hidden
                    group
                    home-cta-secondary
                  "
                                    style={{ minWidth: '200px' }}
                                >
                                    <span className="home-btn-secondary-bg" />
                                    <span className="home-btn-secondary-ring" />
                                    <span className="home-btn-secondary-border" />
                                    <span className="home-cta-glow" />
                                    <span className="home-cta-sheen" />
                                    <span className="relative z-10">Begin the Descent</span>
                                </button>
                            </Link>

                            {/* Join Whitelist Button */}
                            <Link to="/platform" className="w-full sm:w-auto">
                                <button
                                    className="
                    home-btn-primary
                    w-full sm:w-auto
                    !px-12 !py-4
                    font-bold text-sm uppercase tracking-wider
                    rounded-full
                    relative overflow-hidden
                    group
                    home-cta-primary
                  "
                                    style={{ minWidth: '200px' }}
                                >
                                    <span className="home-btn-primary-bg" />
                                    <span className="home-btn-primary-edge" />
                                    <span className="home-btn-primary-sheen" />
                                    <span className="home-cta-glow" />
                                    <span className="home-cta-sheen" />
                                    <span className="relative z-10">Join Whitelist</span>
                                </button>
                            </Link>
                        </div>


                    </div>
                    {/* RIGHT: PREVIEW PANEL (DESKTOP ONLY) */}
                    <div className="hidden lg:block w-full lg:w-1/2 home-preview-reveal">
                        <div
                            className="
                relative
                rounded-[26px]
                bg-slate-950/90
                border border-white/10
                backdrop-blur-2xl
                !px-6 !py-6
                overflow-hidden
                shadow-[0_0_40px_rgba(15,23,42,0.95)]
                home-preview-card
              "
                        >
                            <div className="home-preview-border" />
                            <div className="home-preview-orb home-preview-orb-1" />
                            <div className="home-preview-orb home-preview-orb-2" />

                            {/* Upper: card header */}
                            <div className="flex items-start justify-between !gap-4 !mb-4">
                                <div className="!space-y-2 max-w-[65%]">
                                    <p className="text-[11px] uppercase tracking-[0.24em] text-cyan-300/85">
                                        World Snapshot
                                    </p>
                                    <h2 className="text-lg md:text-xl font-semibold text-white">
                                        The Reef Is Remembering You
                                    </h2>
                                    <p className="text-xs md:text-[0.85rem] text-gray-300/95">
                                        Think of the reef as a living index of everything you and other
                                        holders do. Trait changes, merges, and trading patterns are scored
                                        over time and surface here as signals — not just collectibles.
                                    </p>
                                </div>

                                <div className="home-preview-badge">
                                    <div className="home-preview-badge-inner">
                                        <span className="home-preview-badge-ring" />
                                        <div className="home-preview-badge-label">
                                            <span className="text-[11px] uppercase tracking-[0.18em] text-cyan-100/90">
                                                Live
                                            </span>
                                            <span className="block text-[12px] font-semibold text-white">
                                                Reef Feed
                                            </span>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Middle: timeline */}
                            <div className="home-timeline-grid !mb-4">
                                {timelineSteps.map((item, index) => (
                                    <div key={item.step} className="home-timeline-item">
                                        <div className="home-timeline-step">
                                            <span className="text-[10px] font-mono tracking-[0.18em] text-cyan-50/95">
                                                {item.step}
                                            </span>
                                        </div>
                                        <h3 className="home-timeline-title">{item.title}</h3>
                                        <p className="home-timeline-text">{item.text}</p>
                                        {index < timelineSteps.length - 1 && (
                                            <span className="home-timeline-connector" />
                                        )}
                                    </div>
                                ))}
                            </div>

                            {/* Lower: “live” reef stats (no random supply) */}
                            <div className="grid grid-cols-2 !gap-3 home-quick-stats">
                                <div className="home-stat-card">
                                    <p className="home-stat-label">Active Ducks</p>
                                    <p className="home-stat-value">Live Counter</p>
                                    <p className="home-stat-caption">
                                        Ducks that have changed traits, been merged, or moved wallets in the last epoch.
                                    </p>
                                </div>
                                <div className="home-stat-card">
                                    <p className="home-stat-label">Lore Imprints</p>
                                    <p className="home-stat-value">Evolving</p>
                                    <p className="home-stat-caption">
                                        On-chain events that left a story mark — rerolls, burns, and pivotal trades.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* DESKTOP-ONLY LORE CARDS SECTION */}
                {!isMobile && (
                    <div
                        className="
              hidden md:block
              !mt-10
              home-lore-section-reveal
            "
                    >
                        {/* Top strip badge */}
                        <div
                            className="
                relative
                max-w-3xl
                !mx-auto
                rounded-2xl
                border border-cyan-400/40
                bg-slate-950/70
                backdrop-blur-2xl
                flex items-center justify-between
                !px-5 !py-3
                overflow-hidden
                home-lore-strip
              "
                        >
                            <div className="absolute inset-0 opacity-60 bg-[radial-gradient(circle_at_0_0,rgba(34,211,238,0.4),transparent_55%),radial-gradient(circle_at_100%_100%,rgba(52,211,153,0.4),transparent_55%)]" />
                            <div className="relative flex items-center !gap-3">
                                <span className="h-1.5 w-1.5 rounded-full bg-emerald-300 shadow-[0_0_12px_rgba(52,211,153,1)] animate-platform-pulse-dot" />
                                <span className="text-[11px] uppercase tracking-[0.26em] text-cyan-100/85">
                                    Quacksquads Lore Engine
                                </span>
                            </div>
                            <span className="relative text-[11px] text-cyan-50/90">
                                Hover cards to surface deeper story fragments.
                            </span>
                        </div>

                        {/* Card grid */}
                        <div
                            className="
                grid
                grid-cols-1 md:grid-cols-3
                max-w-6xl
                !mx-auto
                !mt-6
                !gap-5
                home-lore-grid
              "
                        >
                            {loreCards.map((card, index) => (
                                <div
                                    key={card.title}
                                    className="
                    relative
                    rounded-3xl
                    bg-slate-950/85
                    border border-white/10
                    backdrop-blur-2xl
                    overflow-hidden
                    group/lore
                    shadow-[0_0_30px_rgba(15,23,42,0.9)]
                    home-lore-card
                  "
                                >
                                    {/* Animated border glow */}
                                    <div className="home-lore-border-glow" />

                                    {/* Gradient wash on hover */}
                                    <div
                                        className={`
                      pointer-events-none absolute inset-px rounded-[1.4rem]
                      bg-gradient-to-br ${card.gradient}
                      opacity-0 group-hover/lore:opacity-30
                      mix-blend-soft-light
                      transition-opacity duration-500
                    `}
                                    />

                                    {/* Corner orb */}
                                    <div className="home-lore-orb" />

                                    {/* Content */}
                                    <div className="relative flex flex-col !px-5 !py-5 !gap-3 home-lore-content">
                                        <div className="flex items-center justify-between !gap-2">
                                            <span className="text-[10px] uppercase tracking-[0.22em] text-cyan-100/85">
                                                {card.label}
                                            </span>
                                            <span
                                                className="
                          text-[10px]
                          rounded-full
                          border border-cyan-400/40
                          bg-cyan-400/10
                          !px-2.5 !py-1
                          text-cyan-100
                          home-lore-badge
                        "
                                            >
                                                {card.badge}
                                            </span>
                                        </div>

                                        <h3 className="text-sm md:text-[0.98rem] font-semibold text-white home-lore-title">
                                            {card.title}
                                        </h3>

                                        <p className="text-[11px] md:text-[0.8rem] text-gray-200 leading-relaxed home-lore-text">
                                            {card.desc}
                                        </p>

                                        {/* Bottom animated progress / pulse line */}
                                        <div className="relative !mt-2 h-1.5 rounded-full bg-white/5 overflow-hidden home-lore-bar-shell">
                                            <div
                                                className={`
                          absolute inset-y-0 left-0
                          bg-gradient-to-r ${card.gradient}
                          origin-left
                          home-lore-bar-fill home-lore-bar-fill-${index}
                        `}
                                            />
                                            <div className="home-lore-bar-glow" />
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>

                        {/* “Inside the Drop” bottom section – no supply numbers */}
                        <div
                            className="
                max-w-5xl
                !mx-auto
                !mt-10
                rounded-3xl
                bg-slate-950/85
                border border-cyan-500/35
                relative
                overflow-hidden
                !px-6 !py-6
                home-drop-panel
              "
                        >
                            <div className="absolute inset-0 home-drop-panel-bg" />
                            <div className="relative flex flex-col lg:flex-row items-start !gap-6">
                                <div className="w-full lg:w-1/2 !space-y-3">
                                    <p className="text-[11px] uppercase tracking-[0.25em] text-cyan-300/85">
                                        Inside the Drop
                                    </p>
                                    <h2 className="text-lg md:text-xl font-semibold text-white">
                                        More Than a PFP — A Mutable, On‑Chain Story Object
                                    </h2>
                                    <p className="text-xs md:text-[0.9rem] text-cyan-50/95">
                                        Quacksquads are built to evolve. As new mechanics and chapters roll out,
                                        your early decisions — which ducks you hold, which traits you reroll,
                                        which merges you attempt — will keep echoing through future seasons.
                                    </p>
                                </div>
                                <div className="w-full lg:w-1/2">
                                    <div className="grid grid-cols-1 sm:grid-cols-2 !gap-4">
                                        {dropHighlights.map((block) => (
                                            <div key={block.label} className="home-drop-stat">
                                                <p className="home-drop-stat-label">{block.label}</p>
                                                <p className="home-drop-stat-value">{block.value}</p>
                                                <p className="home-drop-stat-text">{block.text}</p>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>

                            <div className="relative !mt-5 rounded-2xl bg-slate-950/80 border border-cyan-500/25 !px-4 !py-3 home-drop-quote">
                                <div className="absolute inset-0 home-drop-quote-bg" />
                                <p className="relative text-[11px] md:text-[0.8rem] text-cyan-50/95 text-center leading-relaxed">
                                    “The goal isn’t to ship another collection — it’s to ship a memory
                                    system. Quacksquads is where we test what happens when identity is
                                    fluid but receipts never disappear.”
                                </p>
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
};

export default Home;
