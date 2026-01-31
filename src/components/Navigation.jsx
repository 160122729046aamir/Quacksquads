import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import '../effects.css';

// Adjust these paths as needed
import logo from '../../public/assets/Logo.png';
import twitterIcon from '../../public/assets/twitter.png';
import discordIcon from '../../public/assets/discord.png';

const Navigation = () => {
    const location = useLocation();
    const [scrolled, setScrolled] = useState(false);
    const [menuOpen, setMenuOpen] = useState(false);

    const fullBrandText = 'quacksquads';
    const [brandIndex, setBrandIndex] = useState(1); // start at "q"

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

    // Looping typing effect: q, qu, ..., quacksquads, q, ...
    useEffect(() => {
        const interval = setInterval(() => {
            setBrandIndex((prev) => {
                if (prev >= fullBrandText.length) {
                    return 1; // restart from first letter
                }
                return prev + 1;
            });
        }, 160);

        return () => clearInterval(interval);
    }, []);

    const brandText = fullBrandText.slice(0, brandIndex);

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
                        !px-6 !py-2
                        overflow-visible
                    `}
                >
                    <div className="flex items-center !gap-6 overflow-x-auto no-scrollbar !py-1 !px-1 overflow-y-hidden">
                        {navItems.map((item) => {
                            const isActive = location.pathname === item.path;
                            return (
                                <Link
                                    key={item.name}
                                    to={item.path}
                                    className={`
                                        relative !px-3.5 !py-1.5 rounded-full text-sm font-medium transition-all duration-300 whitespace-nowrap flex-shrink-0 flex items-center !gap-2 group
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

            {/* MOBILE BRAND (top-left, always visible when in hamburger layout) */}
            <div
                className={`
                    md:hidden fixed top-4 left-4 z-50
                    flex items-center !gap-2
                    mobile-brand
                `}
            >
                <img
                    src={logo}
                    alt="Logo"
                    className="w-11 h-11 object-contain drop-shadow-[0_0_16px_rgba(34,211,238,0.9)]"
                />
                <div className="flex items-center">
                    <span className="pixel-font text-cyan-100 text-lg tracking-wide brand-typing">
                        {brandText}
                    </span>
                    <span className="brand-typing-cursor text-cyan-300 text-lg ml-[1px]">
                        _
                    </span>
                </div>
            </div>

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

            {/* MOBILE FULLSCREEN OVERLAY MENU */}
            <div
                className={`
                    md:hidden fixed inset-0 z-40
                    transition-all duration-400 ease-out
                    ${menuOpen
                        ? 'opacity-100 pointer-events-auto'
                        : 'opacity-0 pointer-events-none'}
                `}
            >
                {/* Dimmed / blurred background */}
                <div
                    className={`
                        absolute inset-0
                        bg-black/50 backdrop-blur-xl
                        mobile-nav-backdrop
                        ${menuOpen ? 'scale-100' : 'scale-105'}
                    `}
                    onClick={() => setMenuOpen(false)}
                />

                {/* Sliding panel */}
                <div
                    className={`
                        absolute inset-x-0 top-0 bottom-0
                        bg-[#001321]/95
                        border-t border-cyan-500/30
                        shadow-[0_0_40px_rgba(0,245,255,0.5)]
                        rounded-t-3xl
                        transform transition-transform duration-400 ease-out
                        flex flex-col
                        !px-6 !pt-16 !pb-6
                        ${menuOpen ? 'translate-y-0' : 'translate-y-full'}
                    `}
                >
                    {/* Menu items – scroll area */}
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
                                            ${
                                                isActive
                                                    ? 'text-cyan-300 bg-cyan-500/10'
                                                    : 'text-cyan-100/80 hover:text-cyan-50 hover:bg-cyan-500/5'
                                            }
                                        `}
                                    >
                                        {/* Icon bubble */}
                                        <span
                                            className={`
                                                flex items-center justify-center w-10 h-10 rounded-full
                                                bg-cyan-500/15 border border-cyan-500/40
                                                text-lg
                                                transition-all duration-300
                                                group-hover:scale-110 group-hover:border-cyan-300 group-hover:shadow-[0_0_15px_rgba(0,245,255,0.6)]
                                                ${
                                                    isActive
                                                        ? 'scale-110 border-cyan-300 shadow-[0_0_15px_rgba(0,245,255,0.7)]'
                                                        : ''
                                                }
                                            `}
                                        >
                                            {item.icon}
                                        </span>

                                        {/* Text + underline */}
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

                                        {/* Soft glow on hover */}
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

                    {/* Socials centered at bottom using image icons */}
                    <div className="!mt-6">
                        <div className="flex items-center justify-center !gap-5">
                            {/* Discord */}
                            <a
                                href="https://discord.com"
                                target="_blank"
                                rel="noreferrer"
                                className={`
                                    relative flex items-center justify-center
                                    w-12 h-12 rounded-full
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

                            {/* Twitter / X */}
                            <a
                                href="https://twitter.com"
                                target="_blank"
                                rel="noreferrer"
                                className={`
                                    relative flex items-center justify-center
                                    w-12 h-12 rounded-full
                                    bg-[#020617] border border-cyan-500/50
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
        </>
    );
};

export default Navigation;
