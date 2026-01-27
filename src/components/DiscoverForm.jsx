import React, { useState } from 'react';
import '../effects.css';

const DiscoverForm = () => {
    const [formData, setFormData] = useState({
        twitter_username: '',
        tweet_link: '',
        wallet_address: ''
    });

    const [isDiving, setIsDiving] = useState(false);
    const [showSuccess, setShowSuccess] = useState(false);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setIsDiving(true);

        console.log('Diving deeper:', formData);

        setTimeout(() => {
            setIsDiving(false);
            setShowSuccess(true);
            alert('🌊 Welcome to the Deep! Your coordinates have been logged.');

            setTimeout(() => setShowSuccess(false), 3000);
        }, 2500);
    };

    return (
        <form onSubmit={handleSubmit} className="space-y-8">
            {/* Twitter Input */}
            <div className="reveal reveal-delay-1">
                <label className="block text-cyan-glow text-sm mb-3 font-semibold tracking-wide uppercase">
                    🐠 Twitter Explorer ID
                </label>
                <div className="input-wrapper">
                    <input
                        type="text"
                        name="twitter_username"
                        value={formData.twitter_username}
                        onChange={handleChange}
                        placeholder="@deep_explorer"
                        className="w-full focus:ring-2 focus:ring-cyan-400 focus:outline-none transition-all duration-300 hover:shadow-[0_0_15px_rgba(0,245,255,0.3)] bg-opacity-80"
                        required
                    />
                    <div className="input-icon">@</div>
                </div>
            </div>

            {/* Tweet Link Input */}
            <div className="reveal reveal-delay-2">
                <label className="block text-cyan-glow text-sm mb-3 font-semibold tracking-wide uppercase">
                    🔗 Signal Beacon Link
                </label>
                <div className="input-wrapper">
                    <input
                        type="url"
                        name="tweet_link"
                        value={formData.tweet_link}
                        onChange={handleChange}
                        placeholder="https://twitter.com/..."
                        className="w-full focus:ring-2 focus:ring-cyan-400 focus:outline-none transition-all duration-300 hover:shadow-[0_0_15px_rgba(0,245,255,0.3)] bg-opacity-80"
                        required
                    />
                    <div className="input-icon">🔗</div>
                </div>
            </div>

            {/* Wallet Address Input */}
            <div className="reveal reveal-delay-3">
                <label className="block text-cyan-glow text-sm mb-3 font-semibold tracking-wide uppercase">
                    💎 Deep Vault Address
                </label>
                <div className="input-wrapper">
                    <input
                        type="text"
                        name="wallet_address"
                        value={formData.wallet_address}
                        onChange={handleChange}
                        placeholder="0x..."
                        className="w-full focus:ring-2 focus:ring-cyan-400 focus:outline-none transition-all duration-300 hover:shadow-[0_0_15px_rgba(0,245,255,0.3)] bg-opacity-80"
                        required
                    />
                    <div className="input-icon">💎</div>
                </div>
            </div>

            {/* Submit Button */}
            <div className="reveal reveal-delay-4 relative pt-4">
                <button
                    type="submit"
                    disabled={isDiving}
                    className="underwater-button w-full ripple-container text-lg font-bold"
                >
                    {isDiving ? (
                        <span className="flex items-center justify-center gap-3">
                            <span className="animate-bounce">🌊</span>
                            DESCENDING...
                            <span className="animate-bounce" style={{ animationDelay: '0.2s' }}>🌊</span>
                        </span>
                    ) : (
                        '🫧 DIVE DEEPER 🫧'
                    )}
                </button>

                {/* Success Burst Animation */}
                {showSuccess && (
                    <>
                        <div className="success-burst" style={{ top: '50%', left: '50%', transform: 'translate(-50%, -50%)' }}></div>
                        <div className="success-burst" style={{ top: '50%', left: '50%', transform: 'translate(-50%, -50%)', animationDelay: '0.2s' }}></div>
                    </>
                )}
            </div>

            {isDiving && (
                <div className="h-2 bg-gradient-to-r from-cyan-glow via-teal-bright to-cyan-glow rounded-full overflow-hidden loading-wave mt-4">
                    <div className="h-full bg-white animate-pulse"></div>
                </div>
            )}
        </form>
    );
};

export default DiscoverForm;
