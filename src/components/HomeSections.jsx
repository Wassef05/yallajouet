import { useEffect, useRef } from 'react'
import { allProducts } from '../data/products.js'
import ProductCardShowcase from './ProductCardShowcase.jsx'
import PromoPacksSection from './PromoPacksSection.jsx'

/* ─── Intersection Observer Hook for scroll animations ─── */
function useScrollReveal(options = {}) {
  const ref = useRef(null)
  useEffect(() => {
    const el = ref.current
    if (!el) return
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.classList.add('reveal-visible')
          observer.unobserve(el)
        }
      },
      { threshold: 0.12, ...options }
    )
    observer.observe(el)
    return () => observer.disconnect()
  }, [])
  return ref
}

export default function HomeSections({ onNavigateToCatalog, onAddToCart, onViewDetail }) {
  const bikeProducts = allProducts.filter((p) => p.category === 'bikes')
  const montessoriProducts = allProducts
    .filter((p) => p.category === 'montessori' || p.category === 'motricite')
    .slice(0, 4)

  const catalogRef = useScrollReveal()

  return (
    <div className="home-sections-wrapper">
      {/* =========================================================
          SECTION 1 : DRAISIENNES & VÉLOS
          ========================================================= */}
      <section id="bikes" className="home-section bikes-section">
        <div className="container">
          <div className="section-title-centered">
            <span className="section-eyebrow">✦ MOBILITÉ & ÉQUILIBRE NATUREL ✦</span>
            <h2 className="section-heading-playfair">Draisiennes &amp; Vélos<br /><em>d'Équilibre</em></h2>
            <p className="section-sub-desc">
              Développent la motricité globale, la coordination et la confiance en soi dès 18 mois, sans besoin de petites roues stabilisatrices.
            </p>
            <button
              type="button"
              className="section-action-link"
              onClick={() => onNavigateToCatalog('bikes')}
            >
              <span>Voir tous les vélos ({bikeProducts.length})</span>
              <span className="arrow">→</span>
            </button>
          </div>

          <div className="home-cards-grid modern-cards-grid">
            {bikeProducts.map((product) => (
              <ProductCardShowcase
                key={product.id}
                product={product}
                onAddToCart={onAddToCart}
                onViewDetail={onViewDetail}
              />
            ))}
          </div>

          <div className="bike-reassurance-strip">
            <div className="br-item">
              <span className="br-icon">🪵</span>
              <span>Bois naturel certifié &amp; finitions non toxiques</span>
            </div>
            <div className="br-item">
              <span className="br-icon">🛡️</span>
              <span>Norme de sécurité européenne CE</span>
            </div>
            <div className="br-item">
              <span className="br-icon">⚡</span>
              <span>Livraison express à domicile en 24/48h</span>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================
          SECTION 2 : JOUETS ÉDUCATIFS & MONTESSORI
          ========================================================= */}
      <section id="montessori" className="home-section montessori-section">
        <div className="container">
          <div className="section-title-centered">
            <span className="section-eyebrow">✦ ÉVEIL SENSORIEL & AUTONOMIE ✦</span>
            <h2 className="section-heading-playfair">Nos Incontournables<br />&amp; <em>Jouets Montessori</em></h2>
            <p className="section-sub-desc">
              Une pédagogie bienveillante qui encourage l'enfant à expérimenter par lui-même, développer sa motricité fine et révéler sa créativité.
            </p>
            <button
              type="button"
              className="section-action-link"
              onClick={() => onNavigateToCatalog('montessori')}
            >
              <span>Voir la sélection Montessori →</span>
            </button>
          </div>

          <div className="home-cards-grid modern-cards-grid">
            {montessoriProducts.map((product) => (
              <ProductCardShowcase
                key={product.id}
                product={product}
                onAddToCart={onAddToCart}
                onViewDetail={onViewDetail}
              />
            ))}
          </div>
        </div>
      </section>

      {/* =========================================================
          SECTION 3 : LES PACKS PROMOTIONNELS EXCLUSIFS
          ========================================================= */}
      <PromoPacksSection
        onAddToCart={onAddToCart}
        onViewDetail={onViewDetail}
        onNavigateToCatalog={onNavigateToCatalog}
      />

      {/* =========================================================
          VITRINE CATALOGUE V2 — Design immersif avec animations
          ========================================================= */}
      <section className="catalogue-teaser-v2">
        {/* Animated blob background */}
        <div className="ctv2-bg" aria-hidden="true">
          <div className="ctv2-blob ctv2-blob-1" />
          <div className="ctv2-blob ctv2-blob-2" />
          <div className="ctv2-blob ctv2-blob-3" />
        </div>

        <div className="container">
          <div className="ctv2-inner" ref={catalogRef}>

            {/* Left — Text content */}
            <div className="ctv2-content">
              <span className="ctv2-eyebrow">
                <span className="ctv2-eyebrow-dot" />
                TOUT L'UNIVERS YALLA JOUET
              </span>

              <h2 className="ctv2-title">
                Explorez notre<br />
                <em className="ctv2-title-em">catalogue complet</em>
              </h2>

              <p className="ctv2-desc">
                {allProducts.length} jouets sélectionnés — filtrés par âge, budget &amp; catégorie. Livrés en 24/48h.
              </p>

              {/* Category chips */}
              <div className="ctv2-chips">
                <button type="button" className="ctv2-chip" onClick={() => onNavigateToCatalog('bikes')}>
                  <span>🚲</span> Draisiennes
                </button>
                <button type="button" className="ctv2-chip" onClick={() => onNavigateToCatalog('montessori')}>
                  <span>✨</span> Montessori
                </button>
                <button type="button" className="ctv2-chip" onClick={() => onNavigateToCatalog('puzzles')}>
                  <span>🧩</span> Puzzles
                </button>
                <button type="button" className="ctv2-chip" onClick={() => onNavigateToCatalog('motricite')}>
                  <span>🎨</span> Motricité
                </button>
                <button type="button" className="ctv2-chip ctv2-chip-hot" onClick={() => onNavigateToCatalog('promo')}>
                  <span>🏷️</span> Promos
                </button>
              </div>

              <button
                type="button"
                className="ctv2-cta"
                onClick={() => onNavigateToCatalog('all')}
              >
                <span className="ctv2-cta-label">Voir tous les produits</span>
                <span className="ctv2-cta-count">{allProducts.length}</span>
                <span className="ctv2-cta-arr">→</span>
              </button>
            </div>

            {/* Right — Visual mosaic */}
            <div className="ctv2-visual" aria-hidden="true">
              {/* Orbit rings */}
              <div className="ctv2-orbit ctv2-orbit-1" />
              <div className="ctv2-orbit ctv2-orbit-2" />

              {/* Main tall image */}
              <div className="ctv2-img-main">
                <img src="/img/velo1.webp" alt="" loading="lazy" />
                <div className="ctv2-count-card">
                  <span className="ctv2-count-num">{allProducts.length}+</span>
                  <span className="ctv2-count-label">jouets à découvrir</span>
                </div>
              </div>

              {/* Float image A — with promo stamp */}
              <div className="ctv2-img-float ctv2-float-a">
                <img
                  src="https://cdn.youcan.shop/stores/8d39b488cab6185a812c8bd011d3ad36/products/83far96isw4SnFnuk117lU17W1gzZQdI9ugFWRoL.jpg"
                  alt=""
                  loading="lazy"
                />
                <div className="ctv2-promo-stamp">-64%</div>
              </div>

              {/* Float image B */}
              <div className="ctv2-img-float ctv2-float-b">
                <img
                  src="https://cdn.youcan.shop/stores/8d39b488cab6185a812c8bd011d3ad36/products/TSzI7S3JhB2LT8nAccm95L0lMKwRhLQzsaRpSAKs.jpg"
                  alt=""
                  loading="lazy"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
