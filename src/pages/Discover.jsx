import React from 'react';
import DiscoverForm from '../components/DiscoverForm';
import '../effects.css';
import './Discover.css';

const Discover = () => {
    // Generate fewer, larger bubbles for background
    const bubbles = Array.from({ length: 15 }, (_, i) => ({
        id: i,
        left: Math.random() * 100,
        delay: Math.random() * 5,
        duration: 10 + Math.random() * 8,
        size: 8 + Math.random() * 15
    }));

    // Chamber interior bubbles (overlaid on image)
    const chamberBubbles = Array.from({ length: 12 }, (_, i) => ({
        id: i,
        left: 20 + Math.random() * 60,
        bottom: Math.random() * 20,
        delay: Math.random() * 4,
        duration: 6 + Math.random() * 4,
        size: 4 + Math.random() * 8
    }));

    // Generate particles
    const particles = Array.from({ length: 25 }, (_, i) => ({
        id: i,
        left: Math.random() * 100,
        delay: Math.random() * 8,
        duration: 18 + Math.random() * 12,
        driftX: (Math.random() - 0.5) * 80
    }));

    // Light beams
    const lightBeams = [
        { left: '20%', delay: 1 },
        { left: '60%', delay: 3 }
    ];

    return (
        <div className="discover-page underwater-bg relative min-h-screen px-6 pb-32 md:px-12 lg:px-20 xl:px-32 overflow-hidden flex flex-col justify-center" style={{ paddingBottom: '15px', paddingTop: '90px' }}>
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
                    className="bubble"
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

            {/* Header - Fixed Spacing */}
            <div className="relative z-10 text-center mb-16 md:mb-24 reveal mt-12 md:mt-0" style={{ paddingBottom: '15px' }}>
                <h2 className="text-5xl md:text-7xl font-bold text-white mb-6 tracking-tight">
                    Discovery <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-teal-400">Chamber</span>
                </h2>
                <p className="text-xl text-gray-300 tracking-widest uppercase opacity-80">
                    // Coordinates Required for Deep Dive Access //
                </p>
            </div>

            {/* Main Content */}
            <div className="relative z-10 mx-auto w-full px-6" style={{ maxWidth: '1400px' }}>
                <div className="flex flex-col gap-6 lg:flex-row items-center lg:items-start lg:justify-between" style={{ justifyContent: 'space-around', width: '100%' }}>

                    {/* Left - Suspension Chamber */}
                    <div className="flex flex-col items-center reveal reveal-delay-1">
                        <div className="relative w-full max-w-lg">
                            {/* Suspension Chamber */}
                            <div className="relative suspension-chamber w-full aspect-square p-8 flex items-center justify-center chamber-breathe mb-6">
                                {/* Chamber Interior Bubbles */}
                                {chamberBubbles.map((bubble) => (
                                    <div
                                        key={`chamber-bubble-${bubble.id}`}
                                        className="bubble absolute z-20"
                                        style={{
                                            left: `${bubble.left}%`,
                                            bottom: `${bubble.bottom}%`,
                                            animationDelay: `${bubble.delay}s`,
                                            animationDuration: `${bubble.duration}s`,
                                            width: `${bubble.size}px`,
                                            height: `${bubble.size}px`
                                        }}
                                    />
                                ))}

                                {/* Main Image */}
                                <img
                                    src="/assets/underwater-astronaut.png"
                                    alt="Deep Sea Explorer in Suspension"
                                    className="w-full h-full object-contain organic-float relative z-10"
                                />
                            </div>

                            {/* Chamber Label - BELOW chamber */}
                            <div className="text-center mb-6">
                                <p className="text-sm text-cyan-glow font-medium flex items-center justify-center gap-3">
                                    <span className="bio-glow">CHAMBER_ID.sequence</span>
                                    <span className="text-bio-glow flex items-center gap-1">
                                        <span className="inline-block w-2 h-2 rounded-full bg-bio-glow animate-pulse"></span>
                                        ACTIVE
                                    </span>
                                </p>
                            </div>

                            {/* Chamber Stats - Fixed Grid */}
                            <div className="glass-panel p-6 md:p-8" style={{ padding: '15px' }}>
                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                                    <div className="text-left">
                                        <p className="text-gray-400 text-xs font-medium mb-2 uppercase tracking-wider">Oxygen Level</p>
                                        <p className="text-bio-glow text-2xl md:text-3xl font-bold">98.2%</p>
                                    </div>
                                    <div className="text-left">
                                        <p className="text-gray-400 text-xs font-medium mb-2 uppercase tracking-wider">Bio Readings</p>
                                        <p className="text-cyan-glow text-2xl md:text-3xl font-bold">Stable</p>
                                    </div>
                                    <div className="text-left">
                                        <p className="text-gray-400 text-xs font-medium mb-2 uppercase tracking-wider">Depth</p>
                                        <p className="text-teal-bright text-2xl md:text-3xl font-bold">2,847m</p>
                                    </div>
                                    <div className="text-left">
                                        <p className="text-gray-400 text-xs font-medium mb-2 uppercase tracking-wider">Active Explorers</p>
                                        <p className="text-aqua-light text-2xl md:text-3xl font-bold animate-pulse">127</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Right - Discovery Panel - Proper Padding and Alignment */}
                    <div className="reveal reveal-delay-2 w-full max-w-xl">
                        <div className="glass-panel p-10">
                            {/* Header with Bottom Spacing */}
                            <div className="mb-10 pb-6 border-b border-cyan-glow/20">
                                <h3 className="text-3xl font-bold bio-glow tracking-wide flex items-center gap-3 border-b-2 border-cyan-glow/30 pb-4 inline-block">
                                    <span>🌊</span>
                                    <span>Access Protocol</span>
                                </h3>
                            </div>

                            {/* Steps - Better Alignment */}
                            <div className="access-list mb-10">
                                <div className="access-item">
                                    <div className="flex-shrink-0 w-12 h-12 flex items-center justify-center text-3xl bg-cyan-glow/10 rounded-full border border-cyan-glow/30 shadow-[0_0_15px_rgba(0,245,255,0.2)]">
                                        🐙
                                    </div>
                                    <div className="flex-1 pt-1">
                                        <p className="text-cyan-glow font-semibold text-lg mb-2">Step 1: Follow the Current</p>
                                        <p className="text-sm text-gray-400 leading-relaxed font-light">
                                            Connect with{' '}
                                            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer"
                                                className="text-teal-bright hover:text-cyan-glow underline font-medium">
                                                @deep_dive_labs
                                            </a>
                                        </p>
                                    </div>
                                </div>

                                <div className="access-item">
                                    <div className="flex-shrink-0 w-12 h-12 flex items-center justify-center text-3xl bg-cyan-glow/10 rounded-full border border-cyan-glow/30 shadow-[0_0_15px_rgba(0,245,255,0.2)]">
                                        🪸
                                    </div>
                                    <div className="flex-1 pt-1">
                                        <p className="text-cyan-glow font-semibold text-lg mb-2">Step 2: Amplify Signal</p>
                                        <p className="text-sm text-gray-400 leading-relaxed font-light">
                                            Share the{' '}
                                            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer"
                                                className="text-teal-bright hover:text-cyan-glow underline font-medium">
                                                discovery beacon
                                            </a>
                                        </p>
                                    </div>
                                </div>

                                <div className="access-item">
                                    <div className="flex-shrink-0 w-12 h-12 flex items-center justify-center text-3xl bg-cyan-glow/10 rounded-full border border-cyan-glow/30 shadow-[0_0_15px_rgba(0,245,255,0.2)]">
                                        🐚
                                    </div>
                                    <div className="flex-1 pt-1">
                                        <p className="text-cyan-glow font-semibold text-lg mb-2">Step 3: Drop Coordinates</p>
                                        <p className="text-sm text-gray-400 leading-relaxed font-light">
                                            Reply with your vault on{' '}
                                            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer"
                                                className="text-teal-bright hover:text-cyan-glow underline font-medium">
                                                this post
                                            </a>
                                        </p>
                                    </div>
                                </div>
                            </div>

                            {/* Form Section */}
                            <div className="border-t border-cyan-glow/30 pt-10">
                                <div className="mb-8">
                                    <p className="text-cyan-glow font-semibold text-2xl flex items-center gap-2">
                                        <span>🫧</span>
                                        <span>Complete Dive Registration</span>
                                    </p>
                                </div>
                                <DiscoverForm />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Discover;
