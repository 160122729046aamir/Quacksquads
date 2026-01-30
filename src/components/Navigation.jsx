import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import '../effects.css';

const Navigation = () => {
    const location = useLocation();
    const [scrolled, setScrolled] = useState(false);
    const [menuOpen, setMenuOpen] = useState(false);

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

    // UPDATED ORDER AND LABELS
    const navItems = [
        { name: 'Home', path: '/', icon: '🏠' },
        { name: 'Introduction', path: '/intro', icon: '📜' },
        { name: 'Platform', path: '/platform', icon: '💻' },
        { name: 'Prediction‑to‑Earn', path: '/prediction-to-earn', icon: '🎯' },
        { name: 'Weekly Rewards', path: '/weekly-rewards', icon: '📆' },
        // Assuming your NFT page is still served at /economy – just relabeled in nav
        { name: 'NFT Utility', path: '/nft-utility', icon: '💎' },
        { name: 'Vision', path: '/vision', icon: '👁️' },
        { name: 'Roadmap', path: '/roadmap', icon: '🗺️' },
        // { name: 'Discover', path: '/discover', icon: '🫧' },
    ];

    return (
        <>
            {/* DESKTOP NAV BAR (tighter padding, moved higher) */}
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
                        !px-6 !py-1
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

            {/* MOBILE TOGGLER (top-right corner, spherical, moved higher) */}
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

            {/* MOBILE DROPDOWN MENU */}
            <div
                className={`
                    md:hidden fixed top-[4.1rem] left-0 w-full z-40 !px-4
                    transform transition-all duration-300 ease-out
                    ${menuOpen
                        ? 'opacity-100 translate-y-0 pointer-events-auto'
                        : 'opacity-0 -translate-y-3 pointer-events-none'}
                `}
            >
                <div
                    className={`
                        bg-[#001a2e]/95 backdrop-blur-2xl
                        border border-cyan-500/40
                        shadow-[0_0_35px_rgba(0,245,255,0.35)]
                        rounded-3xl overflow-hidden
                        origin-top
                        transform transition-all duration-300
                        ${menuOpen ? 'scale-100' : 'scale-95'}
                    `}
                >
                    <div className="flex flex-col !py-2">
                        {navItems.map((item, index) => {
                            const isActive = location.pathname === item.path;
                            return (
                                <Link
                                    key={item.name}
                                    to={item.path}
                                    className={`
                                        relative flex items-center !gap-3 !px-5 !py-3
                                        text-sm font-medium
                                        transition-all duration-300
                                        ${isActive
                                            ? 'text-cyan-300 bg-cyan-500/10'
                                            : 'text-cyan-100/80 hover:text-cyan-50 hover:bg-cyan-500/10'}
                                        ${index !== navItems.length - 1 ? 'border-b border-cyan-500/10' : ''}
                                        group
                                    `}
                                >
                                    <span
                                        className={`
                                            flex items-center justify-center w-9 h-9 rounded-full
                                            bg-cyan-500/15 border border-cyan-500/40
                                            text-lg
                                            transition-all duration-300
                                            group-hover:scale-110 group-hover:border-cyan-300 group-hover:shadow-[0_0_15px_rgba(0,245,255,0.6)]
                                            ${isActive ? 'scale-110 border-cyan-300 shadow-[0_0_15px_rgba(0,245,255,0.7)]' : ''}
                                        `}
                                    >
                                        {item.icon}
                                    </span>

                                    <div className="flex flex-col">
                                        <span className="text-base">{item.name}</span>
                                        <span
                                            className={`
                                                mt-1 h-[2px] w-0 bg-gradient-to-r from-cyan-400 via-cyan-300 to-transparent
                                                transition-all duration-300
                                                group-hover:w-20
                                                ${isActive ? 'w-20' : ''}
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
                                </Link>
                            );
                        })}
                    </div>
                </div>
            </div>
        </>
    );
};

export default Navigation;
