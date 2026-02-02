import React, { useState } from 'react'
import '../effects.css'

const Platform = () => {
  const [showComingSoon, setShowComingSoon] = useState(false)

  const handleConnectWallet = () => {
    setShowComingSoon(true)
  }

  const distributionBreakdown = [
    {
      label: 'Prediction Volume',
      value: '40%',
      desc: 'Higher weekly trading volume increases your share of the pool.',
      gradient: 'from-cyan-400 via-sky-400 to-blue-500',
    },
    {
      label: 'Accuracy Rating',
      value: '35%',
      desc: 'Consistently correct calls earn you more of the weekly rewards.',
      gradient: 'from-emerald-400 via-teal-400 to-emerald-500',
    },
    {
      label: 'Loyalty Streak',
      value: '25%',
      desc: 'Active weeks in a row amplify your final payout.',
      gradient: 'from-purple-400 via-indigo-400 to-pink-500',
    },
  ]

  const stages = [
    {
      step: '01',
      title: 'Connect Wallet',
      text: 'Link your wallet to initialize your on-chain prediction identity.',
    },
    {
      step: '02',
      title: 'Predict Across Markets',
      text: 'Take positions in sports, crypto, and macro events — all tracked together.',
    },
    {
      step: '03',
      title: 'Accumulate Weekly Points',
      text: 'Volume, accuracy, and consistency are scored over weekly epochs.',
    },
    {
      step: '04',
      title: 'Amplify with Utility NFTs',
      text: 'NFTs boost specific parts of your score: volume, accuracy, or loyalty streaks.',
    },
    {
      step: '05',
      title: 'Earn Protocol Rewards',
      text: 'Your final score flows into the reward pool and converts into protocol-native value.',
    },
  ]

  return (
    <div
      className="
        platform-bg
        min-h-screen
        relative overflow-hidden
        flex items-center
        !px-6 md:!px-10 lg:!px-16
        !pt-20 md:!pt-[90px]
        !pb-28
      "
    >
      {/* BACKGROUND LAYERS */}
      <div className="platform-depth-fog" />
      <div className="pointer-events-none absolute inset-0">
        <div className="platform-glow platform-glow-1" />
        <div className="platform-glow platform-glow-2" />
        <div className="platform-glow platform-glow-3" />
      </div>
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="platform-floating platform-floating-1" />
        <div className="platform-floating platform-floating-2" />
        <div className="platform-floating platform-floating-3" />
        <div className="platform-floating platform-floating-4" />
        <div className="platform-floating platform-floating-5" />
      </div>
      <div className="pointer-events-none absolute inset-0 platform-grid-overlay" />

      {/* MAIN CONTENT */}
      <div className="relative z-10 max-w-6xl w-full">
        <div className="flex flex-col lg:flex-row items-start !gap-12 lg:!gap-16">
          {/* LEFT COLUMN */}
          <div className="w-full lg:w-1/2 reveal">
            {/* Badge */}
            <div className="inline-flex items-center rounded-full border border-cyan-400/40 bg-cyan-400/10 !px-4 !py-1.5 !mb-6 !gap-2 animate-platform-badge">
              <span className="h-1.5 w-1.5 rounded-full bg-cyan-300 shadow-[0_0_12px_rgba(34,211,238,1)] animate-platform-pulse-dot" />
              <span className="text-[11px] uppercase tracking-[0.28em] text-cyan-100/85">
                Platform Engine
              </span>
            </div>

            {/* Heading */}
            <div className="!mb-6">
              <h1 className="text-3xl md:text-4xl lg:text-[2.6rem] font-bold leading-tight text-white !mb-3">
                Weekly Rewards
                <span className="block bg-gradient-to-r from-cyan-300 via-sky-400 to-emerald-300 bg-clip-text text-transparent">
                  That Mirror Your Performance
                </span>
              </h1>
              <p className="text-base md:text-lg text-cyan-100/90 max-w-xl">
                The platform watches how you participate over time — how often you show
                up, what you risk, and how accurate you are — and turns that behavior
                into a transparent, evolving reward stream.
              </p>
            </div>

            {/* Connect Wallet Card */}
            <div
              className="
                relative
                rounded-3xl
                border border-cyan-400/40
                bg-slate-950/80
                backdrop-blur-2xl
                !px-6 !py-6 md:!px-7 md:!py-7
                overflow-hidden
                shadow-[0_0_34px_rgba(8,47,73,0.9)]
                group/connect
                !mb-7
              "
            >
              <div className="platform-card-border-glow" />
              <div className="pointer-events-none absolute inset-0 opacity-0 group-hover/connect:opacity-100 platform-card-gradient" />

              <div className="relative flex flex-col md:flex-row items-start md:items-center !gap-5">
                {/* Left text */}
                <div className="flex-1 !space-y-2.5">
                  <p className="text-[11px] uppercase tracking-[0.26em] text-cyan-300/85">
                    Onboarding
                  </p>
                  <h2 className="text-lg md:text-xl font-semibold text-white">
                    Connect Wallet to Start Building Your Signal
                  </h2>
                  <p className="text-sm md:text-[0.95rem] text-gray-200 leading-relaxed">
                    Once wallet support is live, this step will bind your predictions and
                    activity to a persistent on-chain profile. Until then, consider this
                    your preview of how the scoring engine will feel.
                  </p>

                  <div className="flex flex-wrap !gap-2.5 !mt-3">
                    <span className="platform-chip">Non‑custodial by design</span>
                    <span className="platform-chip">MetaMask &amp; WalletConnect (planned)</span>
                    <span className="platform-chip">Live scoring &amp; history (preview)</span>
                  </div>
                </div>

                {/* Right button + label */}
                <div className="md:self-stretch flex flex-col items-center !gap-2.5">
                  <div className="relative">
                    <div className="platform-button-glow" />
                    <button
                      type="button"
                      onClick={handleConnectWallet}
                      className="
                        relative inline-flex items-center justify-center
                        rounded-2xl
                        !px-6 !py-3.5 md:!px-7 md:!py-3.5
                        text-sm md:text-[0.95rem] font-semibold
                        bg-gradient-to-r from-cyan-400 via-sky-500 to-emerald-400
                        text-slate-950
                        overflow-hidden
                        shadow-[0_0_24px_rgba(34,211,238,0.8)]
                        hover:shadow-[0_0_40px_rgba(34,211,238,1)]
                        transition-all duration-300
                        group/button
                      "
                    >
                      <span className="platform-button-shimmer" />
                      <span className="relative flex items-center !gap-2">
                        <span className="platform-live-dot" />
                        <span>Connect Wallet</span>
                      </span>
                    </button>
                  </div>
                  <p className="text-[11px] text-cyan-100/85 text-center max-w-[220px]">
                    Wallet integration is in final development. This button currently
                    previews the upcoming flow.
                  </p>
                  <span className="text-[10px] uppercase tracking-[0.2em] text-cyan-300/80">
                    Feature: Coming Soon
                  </span>
                </div>
              </div>
            </div>

            {/* Explanation strip */}
            <div className="relative rounded-2xl bg-slate-950/80 border border-white/10 !px-5 !py-3 flex flex-wrap items-center !gap-3">
              <div className="flex items-center !gap-2">
                <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 shadow-[0_0_10px_rgba(52,211,153,1)] animate-platform-pulse-dot" />
                <span className="text-[11px] uppercase tracking-[0.24em] text-emerald-100/90">
                  Weekly Points → Reward Stream
                </span>
              </div>
              <span className="text-[11px] text-gray-200/90">
                Your record compounds over time — the more consistent your signal, the
                larger your share of emissions and future token drops.
              </span>
            </div>
          </div>

          {/* RIGHT COLUMN – FIXED TO MATCH IMAGE */}
          <div className="w-full lg:w-1/2 reveal reveal-delay-1">
            <div
              className="
                relative
                rounded-[26px]
                bg-slate-950/90
                border border-white/10
                backdrop-blur-2xl
                !px-6 !py-6 md:!px-7 md:!py-7
                overflow-hidden
                shadow-[0_0_40px_rgba(15,23,42,0.95)]
              "
            >
              <div className="platform-engine-border" />

              <div className="relative flex flex-col !gap-6">
                {/* Header row with right badge */}
                <div className="flex items-start justify-between !gap-4">
                  <div className="!space-y-2 max-w-[65%]">
                    <p className="text-[11px] uppercase tracking-[0.24em] text-cyan-300/85">
                      Reward Engine
                    </p>
                    <h2 className="text-lg md:text-xl font-semibold text-white">
                      How We Convert Behavior Into Rewards
                    </h2>
                    <p className="text-xs md:text-[0.85rem] text-gray-300/95">
                      Each epoch, the engine snapshots your performance, applies NFT and
                      loyalty multipliers, then routes that final score into the
                      distribution pool that pays out in protocol-native value.
                    </p>
                  </div>

                  {/* Circle badge like screenshot */}
                  <div className="platform-weekly-badge">
                    <div className="platform-weekly-badge-inner">
                      <span className="platform-weekly-badge-ring" />
                      <div className="platform-weekly-badge-label">
                        <span className="text-[11px] uppercase tracking-[0.18em] text-cyan-100/90">
                          Weekly
                        </span>
                        <span className="block text-[12px] font-semibold text-white">
                          Distribution
                        </span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* 5 COLUMN FLOW – MATCHING IMAGE */}
                <div className="platform-flow-grid">
                  {stages.map((stage, index) => (
                    <div key={stage.step} className="platform-flow-item">
                      {/* Number pill */}
                      <div className="platform-flow-step">
                        <span className="text-[10px] font-mono tracking-[0.18em] text-cyan-50/95">
                          {stage.step}
                        </span>
                      </div>

                      {/* Step title */}
                      <h3 className="platform-flow-title">
                        {stage.title}
                      </h3>

                      {/* Step text */}
                      <p className="platform-flow-text">
                        {stage.text}
                      </p>

                      {/* Vertical connector line between steps on large screens (optional) */}
                      {index < stages.length - 1 && (
                        <span className="platform-flow-connector" />
                      )}
                    </div>
                  ))}
                </div>

                {/* Distribution cards BELOW flow (optional, but keeps previous content) */}
                <div className="grid grid-cols-1 sm:grid-cols-3 !gap-4 !mt-1">
                  {distributionBreakdown.map((item, i) => (
                    <div
                      key={item.label}
                      className="
                        relative rounded-2xl bg-slate-950/90 border border-white/10
                        !px-4 !py-4
                        overflow-hidden
                        group/dist
                      "
                    >
                      <div
                        className={`
                          pointer-events-none absolute inset-0 opacity-0 group-hover/dist:opacity-100
                          bg-gradient-to-br ${item.gradient}
                          mix-blend-soft-light
                          transition-opacity duration-500
                        `}
                      />

                      <div className="relative !space-y-2">
                        <div className="flex items-center justify-between !mb-1">
                          <span className="text-[11px] font-medium text-gray-200">
                            {item.label}
                          </span>
                          <span className="text-sm font-semibold text-white">
                            {item.value}
                          </span>
                        </div>

                        <div className="relative h-2.5 rounded-full bg-white/10 overflow-hidden">
                          <div className={`h-full bg-gradient-to-r ${item.gradient} platform-bar-fill-${i}`} />
                          <div
                            className="
                              absolute inset-0 opacity-0 group-hover/dist:opacity-100
                              bg-[radial-gradient(circle_at_10%_0,rgba(255,255,255,0.8),transparent_60%)]
                              blur-md
                              transition-opacity duration-500
                            "
                          />
                        </div>

                        <p className="text-[10px] text-gray-300/90 leading-snug">
                          {item.desc}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Footer quote */}
                <div className="relative !mt-5 rounded-2xl bg-slate-950/80 border border-cyan-500/25 !px-4 !py-3">
                  <div className="absolute inset-0 platform-footer-gradient" />
                  <p className="relative text-[11px] md:text-[0.8rem] text-cyan-50/95 text-center leading-relaxed">
                    “Luck matters once. Consistency matters forever. The engine is built
                    to notice the people who keep showing up with signal.”
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* COMING SOON OVERLAY */}
      {showComingSoon && (
        <div
          className="
            platform-modal-backdrop
            fixed inset-0 z-40
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
                The wallet layer is in final testing. Soon, a single connection will
                unlock a real-time view of your predictions, streaks, NFT boosts, and
                weekly reward share — all on-chain and fully transparent.
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
    </div>
  )
}

export default Platform
