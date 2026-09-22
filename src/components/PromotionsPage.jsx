import { allProducts, promoPacks } from '../data/products.js'
import ProductCard from './ProductCard.jsx'
import PromoPackCard from './PromoPackCard.jsx'

export default function PromotionsPage({ onBackToHome, onAddToCart }) {
  const promoProducts = allProducts.filter((p) => p.oldPrice !== null || p.category === 'promo')

  const savingsTotal = promoProducts.reduce((acc, p) => {
    if (p.oldPrice) return acc + (p.oldPrice - p.price)
    return acc
  }, 0)

  return (
    <div className="promotions-page">
      {/* Hero Banner */}
      <section className="promos-hero">
        <div className="promos-hero-bg" aria-hidden="true" />
        <div className="container">
          <nav className="page-breadcrumb" aria-label="Fil d'Ariane">
            <button type="button" onClick={onBackToHome} className="breadcrumb-link">Accueil</button>
            <span className="breadcrumb-sep">/</span>
            <span className="breadcrumb-current">Promotions</span>
          </nav>
          <div className="promos-hero-content">
            <span className="promos-hero-badge">🔥 Soldes en cours</span>
            <h1 className="promos-hero-title">Nos Produits<br /><em>en Promotion</em></h1>
            <p className="promos-hero-desc">
              Des offres exclusives sélectionnées pour vous — packs coffrets, réductions jusqu'à -64%
              sur nos meilleures références. Stocks limités !
            </p>
            <div className="promos-hero-stats">
              <div className="promos-stat">
                <strong>{promoPacks.length}</strong>
                <span>packs exclusifs</span>
              </div>
              <div className="promos-stat">
                <strong>-{Math.round(savingsTotal)}DT</strong>
                <span>d'économies cumulées</span>
              </div>
              <div className="promos-stat">
                <strong>Limité</strong>
                <span>stocks disponibles</span>
              </div>
            </div>
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
