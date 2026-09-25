import { useState } from 'react'
import { IconSparkle, IconLeaf, IconShield, IconHeart } from '../assets/icons.jsx'

export default function Hero() {
  const [activePill, setActivePill] = useState('Montessori')

  return (
    <section className="hero-section">
      {/* Background ambient decoration */}
      <div className="hero-bg-blobs" aria-hidden="true">
        <div className="blob blob-1" />
        <div className="blob blob-2" />
        <div className="blob blob-3" />
        <svg className="hero-decor-arch" viewBox="0 0 400 400" fill="none">
          <circle cx="200" cy="200" r="180" stroke="var(--blush-deep)" strokeWidth="1" strokeDasharray="4 6" opacity="0.4" />
          <circle cx="200" cy="200" r="130" stroke="var(--line)" strokeWidth="1" opacity="0.5" />
        </svg>
      </div>

      <div className="hero-container">
        {/* Left Column: Typographic composition */}
        <div className="hero-content">
          {/* Eyebrow badge */}
          <div className="hero-eyebrow-pill">
            <span className="eyebrow-star">✦</span>
            <span className="eyebrow-text">Atelier d’éveil & Montessori · Collection 2026</span>
            <span className="eyebrow-tag">Nouveau</span>
          </div>

          {/* Artistic Special Headline */}
          <h1 className="hero-art-title">
            <span className="title-row title-row-top">
              L’art de grandir
              <span className="title-cursive-badge">en douceur</span>
            </span>
            <span className="title-row title-row-middle">
              &amp; <span className="title-italic-display">s’émerveiller</span>
              <span className="title-sparkle-glyph">✦</span>
            </span>
            <span className="title-row title-row-bottom">
              par le <span className="title-highlight-box">jeu libre</span>
            </span>
          </h1>

          {/* Mobile-only hero visual — Premium mosaic composition */}
          <div className="hero-visual-mobile">
            <div className="hvm-mosaic">
              {/* Decorative ring */}
              <div className="hvm-ring" aria-hidden="true" />

              {/* Main tall portrait image */}
              <div className="hvm-img-main">
                <img
                  src="https://cdn.youcan.shop/stores/8d39b488cab6185a812c8bd011d3ad36/products/TSzI7S3JhB2LT8nAccm95L0lMKwRhLQzsaRpSAKs.jpg"
                  alt="Jouets Montessori Yalla Jouet"
                  loading="eager"
                />
                {/* Rating badge overlay */}
                <div className="hvm-rating-badge">
                  <span className="hvm-stars">★★★★★</span>
                  <span className="hvm-rating-num">4.9</span>
                </div>
              </div>

              {/* Secondary floating card image */}
              <div className="hvm-img-float">
                <img
                  src="https://cdn.youcan.shop/stores/8d39b488cab6185a812c8bd011d3ad36/products/iKKtXtezEy6n53orUbvS1YnsnU48tek6ATlypAAb.jpg"
                  alt=""
                  loading="lazy"
                />
              </div>

              {/* Glass badge — wood certified */}
              <div className="hvm-chip hvm-chip-top">
                <IconLeaf className="hvm-chip-icon" />
                <div>
                  <strong>100% Naturel</strong>
                  <small>Bois certifié CE</small>
                </div>
              </div>

              {/* Stat pill bottom */}
              <div className="hvm-stat-pill">
                <span className="hvm-stat-num">500+</span>
                <span className="hvm-stat-lbl">familles satisfaites</span>
              </div>
            </div>
          </div>

          {/* Editorial Subtitle */}
          <p className="hero-description">
            Une sélection bienveillante de jouets sensoriels et d'activités Montessori,
            pensés pour stimuler l'autonomie, éveiller la motricité fine et révéler le potentiel unique de chaque enfant.
          </p>



          {/* CTA Buttons */}
          <div className="hero-actions">
            <a href="#products" className="hero-btn-primary">
              <span>Explorer l’atelier</span>
              <svg className="arrow-icon" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
              </svg>
            </a>
            <a href="#story" className="hero-btn-secondary">
              <span className="btn-circle-play">
                <svg viewBox="0 0 24 24" fill="currentColor">
                  <path d="M8 5v14l11-7z" />
                </svg>
              </span>
              <span>Notre philosophie</span>
            </a>
          </div>

          {/* Social Proof & Trust Strip */}
          <div className="hero-social-proof">
            <div className="proof-avatars">
              <img src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=90&h=90&q=80" alt="Parent avis" />
              <img src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=90&h=90&q=80" alt="Parent avis" />
              <img src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=90&h=90&q=80" alt="Parent avis" />
              <span className="avatar-more">+1.8k</span>
            </div>
            <div className="proof-copy">
              <div className="stars-cluster">
                ★★★★★ <span className="score">4.9/5</span>
              </div>
              <p className="proof-sub">Choisi par plus de 1 800 familles en Tunisie</p>
            </div>
          </div>
        </div>

        {/* Right Column: Decorated Artistic Showcase */}
        <div className="hero-visual-showcase">
          {/* Rotating Stamp Emblem */}
          <div className="rotating-stamp-badge" aria-hidden="true">
            <svg viewBox="0 0 160 160" className="stamp-svg">
              <path
                id="stampPath"
                d="M 80, 80 m -60, 0 a 60,60 0 1,1 120,0 a 60,60 0 1,1 -120,0"
                fill="none"
              />
              <text className="stamp-text">
                <textPath href="#stampPath" startOffset="0%">
                  ✦ YALLA JOUET · ÉVEIL NATUREL · MONTESSORI 2026 ·
                </textPath>
              </text>
            </svg>
            <div className="stamp-center-star">✦</div>
          </div>

          {/* Main Visual Composition with Arch Frame */}
          <div className="hero-arch-card">
            <div className="arch-inner">
              <img
                src="https://cdn.youcan.shop/stores/8d39b488cab6185a812c8bd011d3ad36/products/TSzI7S3JhB2LT8nAccm95L0lMKwRhLQzsaRpSAKs.jpg"
                alt="Enfants jouant et développant leur curiosité avec des jouets en bois"
                className="arch-img"
              />
              <div className="arch-overlay-gradient" />
            </div>

            {/* Top Floating Badge */}
            <div className="floating-chip chip-top">
              <IconLeaf className="chip-icon" />
              <div className="chip-text">
                <strong>100% Bois Sain</strong>
                <small>Finition cire végétale</small>
              </div>
            </div>

            {/* Bottom Floating Interactive Card */}
            <div className="floating-product-card">
            </div>

            {/* Side Accent Seal */}
            <div className="floating-chip chip-bottom-right">
              <IconShield className="chip-icon" />
              <div className="chip-text">
                <strong>Sécurité CE</strong>
                <small>Norme européenne</small>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Decorative Bottom Wave / Arch line */}
      <div className="hero-bottom-border" />
    </section>
  )
}
