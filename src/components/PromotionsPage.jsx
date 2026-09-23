import { allProducts, promoPacks } from '../data/products.js'
import ProductCard from './ProductCard.jsx'
import PromoPackCard from './PromoPackCard.jsx'

export default function PromotionsPage({ onBackToHome, onAddToCart, onViewDetail }) {
  const promoProducts = allProducts.filter((p) => p.oldPrice !== null || p.category === 'promo')

  const savingsTotal = promoProducts.reduce((acc, p) => {
    if (p.oldPrice) return acc + (p.oldPrice - p.price)
    return acc
  }, 0)

  return (
    <div className="promotions-page">
      {/* Unified Page Header — Light & Warm */}
      <section className="unified-page-header">
        <div className="container">
          <nav className="unified-breadcrumb" aria-label="Fil d'Ariane">
            <button type="button" onClick={onBackToHome} className="breadcrumb-link">Accueil</button>
            <span className="breadcrumb-sep">/</span>
            <span className="breadcrumb-current">Promotions</span>
          </nav>
          <div className="unified-page-hero-content">
            <span className="unified-page-eyebrow">✦ SÉLECTION PRIVILÈGE & BONS PLANS ✦</span>
            <h1 className="unified-page-title">
              Promotions &amp; Offres Spéciales
              <span className="nav-badge badge-promo page-title-badge">Soldes</span>
            </h1>
            <p className="unified-page-desc">
              Des offres exclusives sélectionnées pour vous — packs coffrets, réductions jusqu'à -64%
              sur nos meilleures références. Stocks limités !
            </p>
            <div className="unified-header-stats">
              <div className="uh-stat">
                <strong>{promoPacks.length}</strong>
                <span>packs exclusifs</span>
              </div>
              <div className="uh-stat">
                <strong>Jusqu'à -64%</strong>
                <span>de réduction</span>
              </div>
              <div className="uh-stat">
                <strong>Limité</strong>
                <span>stocks disponibles</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Savings Highlight Strip */}
      <section className="promos-savings-strip">
        <div className="container">
          <div className="pss-card">
            <span className="pss-stamp" aria-hidden="true">Bons plans</span>
            <div className="pss-text">
              <strong>{savingsTotal.toFixed(2).replace('.', ',')} DT d'économies</strong>
              <span>
                cumulées sur {promoProducts.length} articles et {promoPacks.length} packs exclusifs —
                des remises réelles, jusqu'à -64% sur le prix atelier.
              </span>
            </div>
            <span className="pss-note" aria-hidden="true">petits prix garantis !</span>
          </div>
        </div>
      </section>

      {/* Packs Exclusifs */}
      <section className="promos-packs-section">
        <div className="container">
          <div className="promos-section-header">
            <span className="section-eyebrow">✦ PACKS & COFFRETS EXCLUSIFS ✦</span>
            <h2 className="promos-section-title">Les Packs Promotionnels Exclusifs</h2>
            <p className="promos-section-desc">
              Des coffrets complets soigneusement composés, associant nos meilleurs jouets d'éveil,
              accessoires de sécurité et cadeaux offerts aux meilleurs prix.
            </p>
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

      {/* Produits individuels en promo */}
      <section className="promos-products-section">
        <div className="container">
          <div className="promos-section-header">
            <span className="section-eyebrow">✦ ARTICLES INDIVIDUELS ✦</span>
            <h2 className="promos-section-title">Produits en Réduction</h2>
            <p className="promos-section-desc">
              Articles sélectionnés avec remises immédiates — jusqu'à -64% sur le prix initial.
            </p>
          </div>
          <div className="luxury-product-grid">
            {promoProducts.map((product) => (
              <ProductCard
                key={product.id}
                product={product}
                onAddToCart={onAddToCart}
                onViewDetail={onViewDetail}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Countdown / Urgency Banner */}
      <section className="promos-urgency-banner">
        <div className="container">
          <div className="pub-content">
            <span className="pub-icon">⏳</span>
            <div>
              <h3>Offres limitées — Ne tardez pas !</h3>
              <p>Nos promotions sont valables jusqu'à épuisement des stocks. Commandez maintenant pour profiter des meilleurs prix.</p>
            </div>
            <button type="button" className="pub-cta" onClick={onBackToHome}>
              Voir tout le catalogue →
            </button>
          </div>
        </div>
      </section>

      {/* Back to Home */}
      <div className="page-back-row">
        <div className="container">
          <button type="button" onClick={onBackToHome} className="btn-back-home">
            ← Retour à l'accueil
          </button>
        </div>
      </div>
    </div>
  )
}
