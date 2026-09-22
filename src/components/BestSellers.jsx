import { useState, useEffect } from 'react'
import { allProducts, productCategories } from '../data/products.js'
import ProductCard from './ProductCard.jsx'

export default function BestSellers() {
  const [activeCategory, setActiveCategory] = useState('all')
  const [toastMessage, setToastMessage] = useState(null)

  // Listen to hash change from navbar links (e.g. #bikes, #promotions, #products)
  useEffect(() => {
    const handleHash = () => {
      const hash = window.location.hash
      if (hash === '#bikes') {
        setActiveCategory('bikes')
      } else if (hash === '#promotions') {
        setActiveCategory('promo')
      } else if (hash === '#products') {
        setActiveCategory('all')
      }
    }

    handleHash()
    window.addEventListener('hashchange', handleHash)
    return () => window.removeEventListener('hashchange', handleHash)
  }, [])

  const handleAddToCart = (product) => {
    setToastMessage(`« ${product.name} » ajouté au panier !`)
    setTimeout(() => setToastMessage(null), 3000)
  }

  // Filter products by selected category
  const filteredProducts = allProducts.filter((p) => {
    if (activeCategory === 'all') return true
    if (activeCategory === 'promo') return p.oldPrice !== null || p.category === 'promo'
    return p.category === activeCategory
  })

  // Category descriptions
  const categoryIntros = {
    bikes: {
      title: '🚲 Draisiennes & Vélos pour Enfants',
      text: 'Conçus en bois écologique et matériaux durables, nos vélos sans pédales développent l’équilibre naturel et la coordination motrice en toute confiance.',
    },
    promo: {
      title: '🏷️ Offres Spéciales & Déstockage',
      text: 'Profitez de remises exclusives allant jusqu’à -64% sur notre sélection de jouets Montessori et coffrets créatifs.',
    },
    montessori: {
      title: '✨ Univers Pédagogique Montessori',
      text: 'Des activités sensorielles en matières naturelles pour encourager l’autonomie, la motricité fine et la résolution de problèmes.',
    },
    puzzles: {
      title: '🧩 Puzzles & Jeux Collectifs',
      text: 'Des moments de partage en famille qui stimulent l’observation, la patience et l’esprit stratégique des enfants.',
    },
    motricite: {
      title: '🎨 Motricité Fine & Éveil des Sens',
      text: 'Des parcours de motricité et jeux de tri colorés pour affiner la coordination œil-main dès le plus jeune âge.',
    },
  }

  return (
    <section id="products" className="catalog-section">
      {/* Visual anchors for navbar navigation */}
      <div id="bikes" style={{ position: 'relative', top: '-90px' }} />
      <div id="promotions" style={{ position: 'relative', top: '-90px' }} />
      <div id="bestsellers" style={{ position: 'relative', top: '-90px' }} />

      <div className="container">
        {/* Section Header */}
        <div className="catalog-header">
          <div className="catalog-header-copy">
            <span className="eyebrow">✦ SÉLECTION 2026 · BOUTIQUE OFFICIELLE ✦</span>
            <h2 className="catalog-title">Nos Produits &amp; Univers de Jeux</h2>
            <p className="catalog-subtitle">
              Des jouets d'exception triés sur le volet pour enrichir le quotidien de vos enfants et stimuler leur imagination.
            </p>
          </div>

          <div className="catalog-header-badge">
            <span className="badge-dot" />
            <span>Livraison garantie sous 24/48h</span>
          </div>
        </div>

        {/* Category Navigation Tabs */}
        <div className="catalog-tabs-wrapper">
          <div className="catalog-tabs">
            {productCategories.map((cat) => (
              <button
                key={cat.id}
                type="button"
                className={`tab-btn ${activeCategory === cat.id ? 'is-active' : ''} ${cat.highlight ? 'tab-highlight' : ''}`}
                onClick={() => setActiveCategory(cat.id)}
              >
                <span>{cat.label}</span>
                <span className="tab-count">{cat.count}</span>
                {cat.badge && <span className="tab-pill-badge">{cat.badge}</span>}
              </button>
            ))}
          </div>
        </div>

        {/* Category Context Banner */}
        {categoryIntros[activeCategory] && (
          <div className="category-context-banner">
            <div className="context-copy">
              <h3>{categoryIntros[activeCategory].title}</h3>
              <p>{categoryIntros[activeCategory].text}</p>
            </div>
            <button
              type="button"
              className="context-reset-btn"
              onClick={() => setActiveCategory('all')}
            >
              Afficher tout le catalogue ({allProducts.length})
            </button>
          </div>
        )}

        {/* Dynamic Product Grid */}
        <div className="luxury-product-grid">
          {filteredProducts.map((product) => (
            <ProductCard
              key={product.id}
              product={product}
              onAddToCart={handleAddToCart}
            />
          ))}
        </div>

        {/* Toast Notification */}
        {toastMessage && (
          <div className="cart-toast" role="status">
            <span className="toast-icon">🛍️</span>
            <span>{toastMessage}</span>
          </div>
        )}

        {/* Spotlight Promo Banner if not on promo tab */}
        {activeCategory !== 'promo' && (
          <div className="catalog-promo-callout">
            <div className="callout-image">
              <img
                src="https://cdn.youcan.shop/stores/8d39b488cab6185a812c8bd011d3ad36/products/TSzI7S3JhB2LT8nAccm95L0lMKwRhLQzsaRpSAKs.jpg"
                alt="Offre Spéciale Cabane Enchantée LEGO Villa"
              />
              <span className="callout-sale-tag">-64% REMISE</span>
            </div>
            <div className="callout-content">
              <span className="callout-eyebrow">OFFRE EXCLUSIVE DU MOMENT</span>
              <h3 className="callout-title">Grande Cabane Enchantée — LEGO Villa</h3>
              <p className="callout-desc">
                Le jeu de construction féerique qui réunit toute la famille. Plus de 350 pièces pour des heures d'émerveillement.
              </p>
              <div className="callout-price-row">
                <div className="callout-pricing">
                  <span className="callout-new-price">89,900 DT</span>
                  <s className="callout-old-price">249,000 DT</s>
                </div>
                <button
                  type="button"
                  className="callout-btn"
                  onClick={() => setActiveCategory('promo')}
                >
                  Découvrir toutes les promotions →
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  )
}
