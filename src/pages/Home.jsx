import React, { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import '../effects.css';
import '../glitch.css';
import './Home.css';

const Home = ({ isMuted = false, setIsMuted }) => {
    const containerRef = useRef(null);
    const videoRef = useRef(null);
    const [displayedLines, setDisplayedLines] = useState([]);
    const [currentLineIndex, setCurrentLineIndex] = useState(0);
    const [currentCharIndex, setCurrentCharIndex] = useState(0);
    const [isPaused, setIsPaused] = useState(false);
    const [userInteracted, setUserInteracted] = useState(false);

    const logLines = [
        "INITIALIZING_SYSTEM...",
        "LOADING_ASSETS...",
        "USER_DETECTED...",
        "ACCESS_GRANTED"
    ];

    useEffect(() => {
        if (isPaused) return;

        if (currentLineIndex >= logLines.length) {
            setIsPaused(true);
            setTimeout(() => {
                setDisplayedLines([]);
                setCurrentLineIndex(0);
                setCurrentCharIndex(0);
                setIsPaused(false);
            }, 3000);
            return;
        }

        const timer = setTimeout(() => {
            const currentLineFullText = logLines[currentLineIndex];

            if (currentCharIndex < currentLineFullText.length) {
                setDisplayedLines(prev => {
                    const newLines = [...prev];
                    if (!newLines[currentLineIndex]) newLines[currentLineIndex] = "";
                    newLines[currentLineIndex] += currentLineFullText[currentCharIndex];
                    return newLines;
                });
                setCurrentCharIndex(prev => prev + 1);
            } else {
                setCurrentLineIndex(prev => prev + 1);
                setCurrentCharIndex(0);
            }
        }, 50);

        return () => clearTimeout(timer);
    }, [currentLineIndex, currentCharIndex, isPaused]);

    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        const checkMobile = () => {
            setIsMobile(window.innerWidth < 768);
        };
        checkMobile();
        window.addEventListener('resize', checkMobile);
        return () => window.removeEventListener('resize', checkMobile);
    }, []);

    // Reset user interaction state on component mount
    useEffect(() => {
        setUserInteracted(false);
        if (videoRef.current) {
            videoRef.current.muted = true;
        }
    }, []);

    // Handle video playback
    useEffect(() => {
        if (videoRef.current) {
            const playVideo = async () => {
                try {
                    // Always start muted if user hasn't interacted
                    videoRef.current.muted = userInteracted ? isMuted : true;
                    await videoRef.current.play();
                } catch (err) {
                    console.log("Video autoplay failed:", err);
                }
            };
            playVideo();
        }
    }, [isMuted, userInteracted]);

    // Sync mute state with video only if user has interacted
    useEffect(() => {
        if (videoRef.current && userInteracted) {
            videoRef.current.muted = isMuted;
        }
    }, [isMuted, userInteracted]);

    // Generate bubbles with magnetic effect - Reduced count on mobile
    const bubbles = Array.from({ length: isMobile ? 10 : 30 }, (_, i) => ({
        id: i,
        left: Math.random() * 100,
        delay: Math.random() * 5,
        duration: 8 + Math.random() * 6,
        size: 8 + Math.random() * 15
    }));

    // Generate floating particles (plankton) - Reduced count on mobile
    const particles = Array.from({ length: isMobile ? 15 : 50 }, (_, i) => ({
        id: i,
        left: Math.random() * 100,
        delay: Math.random() * 10,
        duration: 15 + Math.random() * 10,
        driftX: (Math.random() - 0.5) * 100
    }));

    // Generate light beams
    const lightBeams = [
        { left: '15%', delay: 0 },
        { left: '45%', delay: 2 },
        { left: '75%', delay: 4 }
    ];

    // Mouse move effect for 3D tilt - Disabled on mobile
    useEffect(() => {
        if (isMobile) return; // Skip on mobile for performance

        const handleMouseMove = (e) => {
            const cards = document.querySelectorAll('.tilt-card');
            cards.forEach((card) => {
                const rect = card.getBoundingClientRect();
                const x = e.clientX - rect.left;
                const y = e.clientY - rect.top;

                const centerX = rect.width / 2;
                const centerY = rect.height / 2;

                const rotateX = (y - centerY) / 10;
                const rotateY = (centerX - x) / 10;

                requestAnimationFrame(() => {
                    card.style.setProperty('--tilt-x', `${rotateY}deg`);
                    card.style.setProperty('--tilt-y', `${rotateX}deg`);
                });
            });
        };

        window.addEventListener('mousemove', handleMouseMove);
        return () => window.removeEventListener('mousemove', handleMouseMove);
    }, [isMobile]);

    return (
        <div ref={containerRef} className="underwater-bg relative overflow-hidden min-h-screen flex flex-col items-center px-4 pb-32 !pt-16 md:!pt-[90px]">
            {/* Light Beams */}
            {lightBeams.map((beam, i) => (
                <div
                    key={`beam-${i}`}
                    className="light-beam"
                    style={{
                        left: beam.left,
                        animationDelay: `${beam.delay}s`
                    }}
                />
            ))}

            {/* Floating Particles */}
            {particles.map((particle) => (
                <div
                    key={`particle-${particle.id}`}
                    className="particle"
                    style={{
                        left: `${particle.left}%`,
                        bottom: '-10px',
                        animationDelay: `${particle.delay}s`,
                        animationDuration: `${particle.duration}s`,
                        '--drift-x': `${particle.driftX}px`
                    }}
                />
            ))}

            {/* Floating Bubbles */}
            {bubbles.map((bubble) => (
                <div
                    key={bubble.id}
                    className="bubble magnetic-bubble"
                    style={{
                        left: `${bubble.left}%`,
                        animationDelay: `${bubble.delay}s`,
                        animationDuration: `${bubble.duration}s`,
                        width: `${bubble.size}px`,
                        height: `${bubble.size}px`
                    }}
                />
            ))}

            {/* Depth Fog */}
            <div className="depth-fog"></div>

            <div className="relative z-10 text-center max-w-5xl w-full !px-6">
                {/* Main Title with Wave Effect */}
                <h1 className="text-7xl md:text-9xl font-bold bio-glow wave-text reveal !md:pt-0">
                    <span>D</span>
                    <span>E</span>
                    <span>E</span>
                    <span>P</span>
                    <span> </span>
                    <span>D</span>
                    <span>I</span>
                    <span>V</span>
                    <span>E</span>
                </h1>

                <p className="text-2xl md:text-3xl text-aqua-light floating-text reveal reveal-delay-1">
                    🌊 Descend into the Abyss
                </p>

                <p className="text-lg md:text-xl text-cyan-glow opacity-80 floating-text reveal reveal-delay-2" style={{ marginBottom: '3rem' }}>
                    An immersive underwater experience awaits
                </p>

                {/* Character with Glitch Effect and System Log */}
                <div className="!mb-12 reveal reveal-delay-3 w-full grid grid-cols-1 md:grid-cols-2 !gap-y-12 md:gap-8 items-center max-w-5xl !mx-auto" style={{ marginBottom: '3rem' }}>
                    {/* Character Image/Video with Scanlines and Particles */}
                    <div className="relative flex justify-center md:justify-end group">
                        {/* Floating Glitch Particles around character */}
                        <div className="particle absolute" style={{ top: '10%', right: '15%', width: '8px', height: '8px', background: '#00f5ff', animation: 'float 3s ease-in-out infinite' }}></div>
                        <div className="particle absolute" style={{ top: '25%', left: '20%', width: '6px', height: '6px', background: '#39ff14', animation: 'float 4s ease-in-out infinite 0.5s' }}></div>

                        {/* Character Image/Video Container */}
                        <div className="relative scanlines rounded-full overflow-hidden character-glitch-wrapper transition-transform duration-500 group-hover:scale-105 shadow-[0_0_60px_rgba(0,245,255,0.4)]" style={{ width: '320px', height: '320px' }}>
                            <>
                                <video
                                    ref={videoRef}
                                    src="/assets/QuackSquads.mp4"
                                    className="w-full h-full object-cover character-glitch"
                                    style={{
                                        border: '4px solid var(--cyan-glow)',
                                        borderRadius: '50%'
                                    }}
                                    autoPlay
                                    loop
                                    playsInline
                                    muted={isMuted}
                                />
                                {/* Click to Unmute Overlay */}
                                {!userInteracted && (
                                    <div
                                        className="absolute inset-0 flex items-center justify-center bg-black/40 backdrop-blur-sm cursor-pointer transition-opacity hover:bg-black/50"
                                        onClick={() => {
                                            setUserInteracted(true);
                                            if (setIsMuted) {
                                                setIsMuted(false); // Update parent state to unmute
                                            }
                                            if (videoRef.current) {
                                                videoRef.current.muted = false;
                                            }
                                        }}
                                    >
                                        <div className="text-center">
                                            <div className="text-5xl mb-2 animate-pulse">🔊</div>
                                            <p className="text-cyan-300 font-bold text-sm">Click to Enable Sound</p>
                                        </div>
                                    </div>
                                )}
                            </>
                        </div>
                    </div>

                    {/* System Log */}
                    <div className="flex justify-center md:justify-start !w-full">
                        <div className="system-log text-left bg-black/60 backdrop-blur-xl border border-cyan-500/30 p-8 rounded-2xl w-full max-w-md shadow-[0_0_40px_rgba(0,245,255,0.15)] hover:shadow-[0_0_50px_rgba(0,245,255,0.25)] transition-all duration-300 hover:-translate-y-1 h-[320px] flex flex-col">
                            <h3 className="text-cyan-glow text-xs font-bold !mb-4 flex items-center !gap-2 uppercase tracking-widest border-b border-cyan-500/20 !pb-3">
                                <span className="inline-block !w-2 !h-2 rounded-full bg-bio-glow animate-pulse"></span>
                                SYSTEM_LOG // TERMINAL_01
                            </h3>
                            <div className="!space-y-3 text-sm font-mono overflow-hidden flex flex-col justify-end flex-grow">
                                {displayedLines.map((line, index) => (
                                    <p key={index} className={index === logLines.length - 1 ? "text-bio-glow font-bold typing-effect" : "text-teal-bright opacity-80"}>
                                        <span className="text-bio-glow !mr-2 opacity-50">&gt;</span>
                                        {line}
                                        {((index === currentLineIndex && !isPaused) || (isPaused && index === logLines.length - 1)) && (
                                            <span className="cursor !ml-1">_</span>
                                        )}
                                    </p>
                                ))}
                            </div>

                            {/* Decorative footer for log */}
                            <div className="!pt-3 border-t border-cyan-500/10 flex justify-between text-[10px] text-cyan-500/40 uppercase tracking-widest">
                                <span>Sys.Ver 2.0.4</span>
                                <span>Conn: Secure</span>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Dive Button with Ripple Effect */}
                <div className="reveal reveal-delay-5">
                    <Link to="/intro">
                        <button className="underwater-button relative ripple-container">
                            <span className="relative z-10">BEGIN DESCENT</span>
                        </button>
                    </Link>
                </div>

                {/* Footer */}
                <p className="!mt-6 text-gray-500 text-sm reveal reveal-delay-6">
                    © 2026 Deep Dive Labs — Exploring the Unknown Depths.
                </p>
            </div>
        </div>
    );
};

export default Home;
