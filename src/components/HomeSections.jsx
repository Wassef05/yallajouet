import { allProducts, promoPacks } from '../data/products.js'
import ProductCard from './ProductCard.jsx'
import PromoPackCard from './PromoPackCard.jsx'

export default function HomeSections({ onNavigateToCatalog, onAddToCart }) {
  // 1. Draisiennes & Vélos
  const bikeProducts = allProducts.filter((p) => p.category === 'bikes')

  // 2. Jouets Éducatifs & Montessori
  const montessoriProducts = allProducts.filter(
    (p) => p.category === 'montessori' || p.category === 'motricite'
  ).slice(0, 4)

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
              <ProductCard
                key={product.id}
                product={product}
                onAddToCart={onAddToCart}
              />
            ))}
          </div>

          {/* Micro Reassurance Strip for Bikes */}
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
              <ProductCard
                key={product.id}
                product={product}
                onAddToCart={onAddToCart}
              />
            ))}
          </div>
        </div>
      </section>

      {/* =========================================================
          SECTION 3 : LES PACKS PROMOTIONNELS EXCLUSIFS
          ========================================================= */}
      <section id="promotions" className="home-section promo-section">
        <div className="container">
          <div className="section-title-centered">
            <span className="section-eyebrow">✦ OFFRES EXCLUSIVES & PACKS PRIVILÈGE ✦</span>
            <h2 className="section-heading-playfair">Les Packs Promotionnels<br /><em>Exclusifs</em></h2>
            <p className="section-sub-desc">
              Des coffrets complets soigneusement composés, associant nos meilleurs jouets d'éveil, accessoires de sécurité et cadeaux offerts aux meilleurs prix.
            </p>
            <button
              type="button"
              className="section-action-link"
              onClick={() => onNavigateToCatalog('promo')}
            >
              <span>Toutes les offres exclusives ({promoPacks.length}) →</span>
            </button>
          </div>

          <div className="promo-packs-grid">
            {promoPacks.map((pack) => (
              <PromoPackCard
                key={pack.id}
                pack={pack}
                onAddToCart={onAddToCart}
              />
            ))}
          </div>
        </div>
      </section>

      {/* =========================================================
          GRAND BANDEAU : « VOIR TOUS LES PRODUITS » — BACKGROUND FIXE
          ========================================================= */}
      <section className="home-all-products-banner">
        <div className="all-products-bg-fixed" aria-hidden="true" />
        <div className="all-products-overlay" aria-hidden="true" />
        <div className="container">
          <div className="all-products-content-fixed">
            <span className="all-products-badge">✦ TOUT L'UNIVERS YALLA JOUET ✦</span>
            <h2 className="all-products-title">
              Explorez l'ensemble de notre<br />catalogue complet
            </h2>
            <p className="all-products-desc">
              Retrouvez toutes nos collections avec recherche instantanée, filtres par tranche d'âge, budget et catégories détaillées.
            </p>

            <div className="all-products-categories-chips">
              <button type="button" onClick={() => onNavigateToCatalog('bikes')}>🚲 Draisiennes</button>
              <button type="button" onClick={() => onNavigateToCatalog('montessori')}>✨ Montessori</button>
              <button type="button" onClick={() => onNavigateToCatalog('puzzles')}>🧩 Puzzles & Société</button>
              <button type="button" onClick={() => onNavigateToCatalog('motricite')}>🎨 Motricité</button>
              <button type="button" onClick={() => onNavigateToCatalog('promo')}>🏷️ Promotions</button>
            </div>

            <button
              type="button"
              className="btn-see-all-products"
              onClick={() => onNavigateToCatalog('all')}
            >
              <span>Voir tous les produits ({allProducts.length})</span>
              <svg viewBox="0 0 20 20" fill="currentColor" width="18" height="18">
                <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
              </svg>
            </button>
          </div>
        </div>
      </section>
    </div>
  )
}
