import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import '../effects.css';

const Navigation = () => {
    const location = useLocation();
    const [scrolled, setScrolled] = useState(false);

    // Handle scroll effect
    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 20);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const navItems = [
        { name: 'Home', path: '/', icon: '🏠' },
        { name: 'Discover', path: '/discover', icon: '🫧' },
        { name: 'Intro', path: '/intro', icon: '📜' },
        { name: 'Vision', path: '/vision', icon: '👁️' },
        { name: 'Platform', path: '/platform', icon: '💻' },
        { name: 'Economy', path: '/economy', icon: '💎' },
        { name: 'Roadmap', path: '/roadmap', icon: '🗺️' },
    ];

    return (
        <div className={`
            fixed top-6 left-0 w-full z-50 flex justify-center pointer-events-none
            transition-all duration-500
            ${scrolled ? 'py-0' : 'py-2'}
        `}>
            <nav
                className={`
                    pointer-events-auto
                    flex items-center justify-center
                    !px-6 !py-3 md:!px-10 md:!py-4
                    bg-[#001a2e]/70 backdrop-blur-xl 
                    border border-cyan-500/40
                    rounded-full shadow-[0_0_25px_rgba(0,245,255,0.2)]
                    transition-all duration-300 mx-4 max-w-[95vw]
                    hover:shadow-[0_0_40px_rgba(0,245,255,0.3)] hover:border-cyan-400/60
                    overflow-y-hidden
                `}
            >
                {/* Links Container */}
                <div className="flex items-center gap-4 md:gap-8 overflow-x-auto no-scrollbar p-1 overflow-y-hidden">
                    {navItems.map((item) => {
                        const isActive = location.pathname === item.path;
                        return (
                            <Link
                                key={item.name}
                                to={item.path}
                                className={`
                                    relative px-4 py-2 md:px-5 md:py-2.5 rounded-full text-sm md:text-base font-medium transition-all duration-300 whitespace-nowrap flex-shrink-0 flex items-center gap-2 md:gap-3 group
                                    ${isActive
                                        ? 'text-cyan-400 font-bold scale-105'
                                        : 'text-cyan-100/70 hover:text-cyan-200'}
                                `}
                            >
                                <span className={`text-lg transition-transform duration-300 ${isActive ? 'scale-110' : 'group-hover:scale-110'}`}>{item.icon}</span>
                                <span>{item.name}</span>

                                {/* Underline Transition */}
                                <span className={`absolute -bottom-1 left-0 h-[2px] bg-cyan-400 transition-all duration-300 ease-out
                                    ${isActive ? 'w-full' : 'w-0 group-hover:w-full'}
                                `}></span>
                            </Link>
                        );
                    })}
                </div>
            </nav>
        </div>
    );
};

export default Navigation;
