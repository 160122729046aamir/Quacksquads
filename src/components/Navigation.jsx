import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import '../effects.css';

// Adjust these paths as needed
import logo from '../../public/assets/Logo.png';
import twitterIcon from '../../public/assets/twitter.png';
import discordIcon from '../../public/assets/discord.png';

const Navigation = ({ isMuted, setIsMuted }) => {
    const location = useLocation();
    const [scrolled, setScrolled] = useState(false);
    const [menuOpen, setMenuOpen] = useState(false);

    // Coming Soon modal for Connect Wallet
    const [showComingSoon, setShowComingSoon] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 20);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    useEffect(() => {
        setMenuOpen(false);
    }, [location.pathname]);



    const navItems = [
        { name: 'Home', path: '/', icon: '🏠' },
        { name: 'Introduction', path: '/intro', icon: '📜' },
        { name: 'Platform', path: '/platform', icon: '💻' },
        { name: 'Prediction‑to‑Earn', path: '/prediction-to-earn', icon: '🎯' },
        { name: 'Weekly Rewards', path: '/weekly-rewards', icon: '📆' },
        { name: 'NFT Utility', path: '/nft-utility', icon: '💎' },
        { name: 'Vision', path: '/vision', icon: '👁️' },
        { name: 'Roadmap', path: '/roadmap', icon: '🗺️' },
    ];

    const handleConnectWallet = () => {
        setShowComingSoon(true);
    };

    return (
        <>
            {/* DESKTOP NAV BAR (centered nav items only) */}
            <div
                className={`
                    hidden md:flex
                    fixed top-4 left-0 w-full z-40 justify-center pointer-events-none
                    transition-all duration-500
                    ${scrolled ? '!py-0' : '!py-0'}
                `}
            >
                <nav
                    className={`
                        pointer-events-auto
                        bg-[#001a2e]/70 backdrop-blur-xl 
                        border border-cyan-500/40
                        rounded-full shadow-[0_0_25px_rgba(0,245,255,0.2)]
                        transition-all duration-300
                        !mx-4 max-w-[95vw]
                        hover:shadow-[0_0_40px_rgba(0,245,255,0.3)] hover:border-cyan-400/60
                        flex items-center justify-center
                        !px-4 !py-1
                        overflow-visible
                    `}
                >
                    <div className="flex items-center !gap-4 overflow-x-auto no-scrollbar !py-1 !px-1 overflow-y-hidden">
                        {navItems.map((item) => {
                            const isActive = location.pathname === item.path;
                            return (
                                <Link
                                    key={item.name}
                                    to={item.path}
                                    className={`
                                        relative !px-3 !py-1 rounded-full text-sm font-medium transition-all duration-300 whitespace-nowrap flex-shrink-0 flex items-center !gap-2 group
                                        ${isActive
                                            ? 'text-cyan-400 font-bold scale-105'
                                            : 'text-cyan-100/70 hover:text-cyan-200'}
                                    `}
                                >
                                    <span
                                        className={`
                                            text-base transition-transform duration-300
                                            ${isActive ? 'scale-110' : 'group-hover:scale-110'}
                                        `}
                                    >
                                        {item.icon}
                                    </span>
                                    <span>{item.name}</span>

                                    <span
                                        className={`
                                            absolute -bottom-1 left-0 h-[2px] bg-cyan-400 transition-all duration-300 ease-out
                                            ${isActive ? 'w-full' : 'w-0 group-hover:w-full'}
                                        `}
                                    ></span>
                                </Link>
                            );
                        })}
                    </div>
                </nav>
            </div>



            {/* MOBILE BRAND (logo + typing + Connect Wallet only on home page) */}
            {location.pathname === '/' && (
                <div
                    className={`
                        md:hidden fixed top-4 left-4 right-16 z-50
                        flex items-center justify-between
                        mobile-brand
                    `}
                >
                    <div className="flex items-center !gap-1">
                        <img
                            src={logo}
                            alt="Logo"
                            className="w-11 h-11 object-contain drop-shadow-[0_0_16px_rgba(34,211,238,0.9)]"
                        />
                        <div className="flex items-center">
                            <span className="pixel-font text-cyan-100 text-lg tracking-wide">
                                quacksquads
                            </span>
                            <span className="brand-typing-cursor text-cyan-300 text-lg ml-[1px]">
                                _
                            </span>
                        </div>
                    </div>

                    {/* Connect Wallet button – underwater theme with animations */}
                    <button
                        type="button"
                        onClick={handleConnectWallet}
                        className="
                            group relative inline-flex items-center justify-center
                            rounded-full
                            text-[12px] font-bold
                            !px-3.5 !py-2
                            whitespace-nowrap
                            overflow-hidden
                            transition-all duration-300
                            hover:scale-105 active:scale-95
                        "
                    >
                        {/* Animated gradient border - underwater colors */}
                        <span className="absolute inset-0 rounded-full bg-gradient-to-r from-cyan-400 via-teal-400 to-cyan-500 opacity-100 animate-spin-slow"></span>

                        {/* Inner background with glass effect */}
                        <span className="absolute inset-[2px] rounded-full bg-gradient-to-br from-[#001426]/95 via-[#001a2e]/95 to-[#001426]/95 backdrop-blur-sm"></span>

                        {/* Underwater glow effect */}
                        <span className="absolute inset-0 rounded-full bg-gradient-to-r from-cyan-400/20 via-teal-400/20 to-cyan-500/20 blur-xl group-hover:blur-2xl transition-all duration-300"></span>

                        {/* Content */}
                        <span className="relative z-10 flex items-center !gap-1.5 bg-gradient-to-r from-cyan-300 via-teal-300 to-cyan-400 bg-clip-text text-transparent">
                            <span className="text-sm">💼</span>
                            <span>Connect</span>
                        </span>
                    </button>
                </div>
            )}

            {/* MOBILE TOGGLER (top-right corner, spherical) */}
            <button
                type="button"
                className={`
                    md:hidden fixed top-4 right-4 z-50
                    flex items-center justify-center
                `}
                onClick={() => setMenuOpen((prev) => !prev)}
            >
                <div
                    className={`
                        w-11 h-11 rounded-full
                        bg-[#001426]/95 border border-cyan-400/70
                        shadow-[0_0_16px_rgba(0,245,255,0.45)]
                        flex items-center justify-center
                        transition-all duration-300
                        ${menuOpen
                            ? 'scale-95 border-cyan-200 shadow-[0_0_24px_rgba(0,245,255,0.8)]'
                            : 'hover:scale-105 hover:border-cyan-200 hover:shadow-[0_0_20px_rgba(0,245,255,0.7)] active:scale-95'}
                    `}
                >
                    <div className="relative w-6 h-6 flex items-center justify-center">
                        <span
                            className={`
                                absolute h-[2px] w-6 rounded-full
                                bg-cyan-200 shadow-[0_0_6px_rgba(0,245,255,0.9)]
                                transition-all duration-300
                                ${menuOpen
                                    ? 'rotate-45 translate-y-0'
                                    : '-translate-y-2'}
                            `}
                        />
                        <span
                            className={`
                                absolute h-[2px] w-6 rounded-full
                                bg-cyan-200 shadow-[0_0_6px_rgba(0,245,255,0.9)]
                                transition-all duration-200
                                ${menuOpen
                                    ? 'opacity-0 scale-50'
                                    : 'opacity-100 scale-100'}
                            `}
                        />
                        <span
                            className={`
                                absolute h-[2px] w-6 rounded-full
                                bg-cyan-200 shadow-[0_0_6px_rgba(0,245,255,0.9)]
                                transition-all duration-300
                                ${menuOpen
                                    ? '-rotate-45 translate-y-0'
                                    : 'translate-y-2'}
                            `}
                        />
                    </div>
                </div>
            </button>

            {/* MUTE/UNMUTE BUTTON (below hamburger on mobile, only on home page) */}
            {location.pathname === '/' && (
                <button
                    type="button"
                    className={`
                        md:hidden fixed top-[72px] right-4 z-50
                        flex items-center justify-center
                    `}
                    onClick={() => setIsMuted(!isMuted)}
                >
                    <div
                        className={`
                            w-11 h-11 rounded-full
                            bg-[#001426]/95 border border-cyan-400/70
                            shadow-[0_0_16px_rgba(0,245,255,0.45)]
                            flex items-center justify-center
                            transition-all duration-300
                            hover:scale-105 hover:border-cyan-200 hover:shadow-[0_0_20px_rgba(0,245,255,0.7)] active:scale-95
                        `}
                    >
                        <span className="text-xl">
                            {isMuted ? '🔇' : '🔊'}
                        </span>
                    </div>
                </button>
            )}

            {/* MOBILE FULLSCREEN OVERLAY MENU (unchanged items) */}
            <div
                className={`
                    md:hidden fixed inset-0 z-40
                    transition-all duration-400 ease-out
                    ${menuOpen
                        ? 'opacity-100 pointer-events-auto'
                        : 'opacity-0 pointer-events-none'}
                `}
            >
                <div
                    className={`
                        absolute inset-0
                        bg-black/50 backdrop-blur-xl
                        mobile-nav-backdrop
                        ${menuOpen ? 'scale-100' : 'scale-105'}
                    `}
                    onClick={() => setMenuOpen(false)}
                />

                <div
                    className={`
                        absolute inset-x-0 top-0 bottom-0
                        bg-[#001321]/95
                        border-t border-cyan-500/30
                        shadow-[0_0_40px_rgba(0,245,255,0.5)]
                        rounded-3xl
                        transform transition-transform duration-400 ease-out
                        flex flex-col
                        !px-6 !pt-16 !pb-6
                        ${menuOpen ? 'translate-y-0' : 'translate-y-full'}
                    `}
                >
                    <div className="flex-1 overflow-y-auto no-scrollbar">
                        <div className="flex flex-col !gap-1">
                            {navItems.map((item) => {
                                const isActive = location.pathname === item.path;
                                return (
                                    <Link
                                        key={item.name}
                                        to={item.path}
                                        className={`
                                            relative flex items-center
                                            !px-3 !py-3.5
                                            rounded-2xl
                                            text-sm font-medium
                                            transition-all duration-300
                                            group
                                            ${isActive
                                                ? 'text-cyan-300 bg-cyan-500/10'
                                                : 'text-cyan-100/80 hover:text-cyan-50 hover:bg-cyan-500/5'
                                            }
                                        `}
                                    >
                                        <span
                                            className={`
                                                flex items-center justify-center w-10 h-10 rounded-full
                                                bg-cyan-500/15 border border-cyan-500/40
                                                text-lg
                                                transition-all duration-300
                                                group-hover:scale-110 group-hover:border-cyan-300 group-hover:shadow-[0_0_15px_rgba(0,245,255,0.6)]
                                                ${isActive
                                                    ? 'scale-110 border-cyan-300 shadow-[0_0_15px_rgba(0,245,255,0.7)]'
                                                    : ''
                                                }
                                            `}
                                        >
                                            {item.icon}
                                        </span>

                                        <div className="flex flex-col !ml-3">
                                            <span className="text-base">{item.name}</span>
                                            <span
                                                className={`
                                                    mt-1 h-[2px] w-0 bg-gradient-to-r from-cyan-400 via-cyan-300 to-transparent
                                                    transition-all duration-300
                                                    group-hover:w-24
                                                    ${isActive ? 'w-24' : ''}
                                                `}
                                            />
                                        </div>

                                        <span
                                            className={`
                                                ml-auto text-[0.65rem] tracking-[0.2em] uppercase
                                                text-cyan-400/60
                                                opacity-0 translate-x-2
                                                transition-all duration-300
                                                group-hover:opacity-100 group-hover:translate-x-0
                                            `}
                                        >
                                            Open
                                        </span>

                                        <span
                                            className={`
                                                absolute inset-0 rounded-2xl
                                                bg-gradient-to-r from-cyan-500/0 via-cyan-500/10 to-emerald-500/0
                                                opacity-0 group-hover:opacity-100
                                                transition-opacity duration-300 pointer-events-none
                                            `}
                                        />
                                    </Link>
                                );
                            })}
                        </div>
                    </div>

                    {/* Socials centered at bottom */}
                    <div className="!mt-3">
                        <div className="flex items-center justify-center !gap-5">
                            <a
                                href="https://discord.com"
                                target="_blank"
                                rel="noreferrer"
                                className={`
                                    relative flex items-center justify-center
                                    w-13 h-13 rounded-full
                                    bg-[#111827] border border-cyan-500/50
                                    shadow-[0_0_18px_rgba(0,245,255,0.45)]
                                    transition-all duration-300
                                    hover:scale-110 hover:border-cyan-200 hover:shadow-[0_0_26px_rgba(0,245,255,0.8)]
                                    social-icon-orb
                                `}
                            >
                                <img
                                    src={discordIcon}
                                    alt="Discord"
                                    className="w-6 h-6 object-contain"
                                />
                            </a>

                            <a
                                href="https://x.com/Quacksquads"
                                target="_blank"
                                rel="noreferrer"
                                className={`
                                    relative flex items-center justify-center
                                    w-13 h-13 rounded-full
                                    bg-white border border-cyan-500/50
                                    shadow-[0_0_18px_rgba(0,245,255,0.45)]
                                    transition-all duration-300
                                    hover:scale-110 hover:border-cyan-200 hover:shadow-[0_0_26px_rgba(0,245,255,0.8)]
                                    social-icon-orb
                                `}
                            >
                                <img
                                    src={twitterIcon}
                                    alt="Twitter"
                                    className="w-6 h-6 object-contain"
                                />
                            </a>
                        </div>
                    </div>
                </div>
            </div>

            {/* COMING SOON OVERLAY (same layout as earlier) */}
            {showComingSoon && (
                <div
                    className="
                        platform-modal-backdrop
                        fixed inset-0 z-60
                        flex items-center justify-center
                        !px-4
                    "
                    onClick={() => setShowComingSoon(false)}
                >
                    <div
                        className="
                            platform-modal-container
                            relative
                            rounded-3xl
                            bg-slate-950/80
                            border border-cyan-400/40
                            backdrop-blur-3xl
                            !px-6 !py-6 md:!px-8 md:!py-8
                            max-w-md w-full
                            overflow-hidden
                        "
                        onClick={(e) => e.stopPropagation()}
                    >
                        <div className="platform-modal-glow" />

                        <div className="flex items-center justify-center !mb-4">
                            <div className="platform-modal-orb">
                                <div className="platform-modal-orb-inner">
                                    <span className="text-2xl">🚀</span>
                                </div>
                            </div>
                        </div>

                        <div className="text-center !mb-3">
                            <p className="text-[11px] uppercase tracking-[0.28em] text-cyan-300/85 !mb-2">
                                Coming Soon
                            </p>
                            <h2 className="text-xl font-semibold text-white !mb-2">
                                Wallet Connection Is Almost Here
                            </h2>
                            <p className="text-sm text-gray-200 leading-relaxed">
                                The wallet layer is in final testing. Soon, a single
                                connection will unlock a real-time view of your predictions,
                                streaks, NFT boosts, and weekly reward share — all on-chain
                                and fully transparent.
                            </p>
                        </div>

                        <div className="!mt-4 !mb-3">
                            <div className="flex items-center justify-between !mb-1">
                                <span className="text-[11px] text-cyan-100/90 uppercase tracking-[0.2em]">
                                    Launch Progress
                                </span>
                                <span className="text-[11px] text-gray-200">Internal QA</span>
                            </div>
                            <div className="relative h-2 rounded-full bg-white/10 overflow-hidden">
                                <div className="platform-modal-progress" />
                            </div>
                        </div>

                        <div className="flex flex-wrap justify-center !gap-2 !mt-3">
                            <span className="platform-chip">Multi-chain support</span>
                            <span className="platform-chip">Gas‑optimized routing</span>
                            <span className="platform-chip">Non‑custodial security</span>
                        </div>

                        <div className="flex justify-center !mt-5">
                            <button
                                type="button"
                                onClick={() => setShowComingSoon(false)}
                                className="
                                    inline-flex items-center justify-center
                                    rounded-full
                                    border border-cyan-400/50
                                    !px-4 !py-2
                                    text-[12px] font-medium
                                    text-cyan-100
                                    bg-slate-900/80
                                    hover:bg-slate-900
                                    transition-colors duration-200
                                "
                            >
                                Got it — I’ll check back
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </>
    );
};

export default Navigation;
