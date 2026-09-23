import { useState } from 'react'
import { allProducts } from '../data/products.js'
import ProductCardShowcase from './ProductCardShowcase.jsx'

export default function BikesPage({ onBackToHome, onAddToCart, onViewDetail }) {
  const [sort, setSort] = useState('popular')

  const bikeProducts = allProducts
    .filter((p) => p.category === 'bikes')
    .sort((a, b) => {
      if (sort === 'price-asc') return a.price - b.price
      if (sort === 'price-desc') return b.price - a.price
      if (sort === 'rating') return (b.rating || 0) - (a.rating || 0)
      return (b.reviews || 0) - (a.reviews || 0)
    })

  return (
    <div className="bikes-page">
      {/* Unified Page Header — Light & Warm */}
      <section className="unified-page-header">
        <div className="container">
          <nav className="unified-breadcrumb" aria-label="Fil d'Ariane">
            <button type="button" onClick={onBackToHome} className="breadcrumb-link">Accueil</button>
            <span className="breadcrumb-sep">/</span>
            <span className="breadcrumb-current">Draisiennes & Vélos</span>
          </nav>
          <div className="unified-page-hero-content">
            <span className="unified-page-eyebrow">✦ MOBILITÉ & ÉQUILIBRE NATUREL ✦</span>
            <h1 className="unified-page-title">
              Draisiennes &amp; Vélos
              <span className="nav-badge page-title-badge">Nouveau</span>
            </h1>
            <p className="unified-page-desc">
              Des vélos d'équilibre en bois certifié, conçus pour développer la coordination,
              la confiance et la motricité globale dès 18 mois — sans petites roues, sans compromis.
            </p>
            <div className="unified-header-stats">
              <div className="uh-stat">
                <strong>{bikeProducts.length}</strong>
                <span>modèles disponibles</span>
              </div>
              <div className="uh-stat">
                <strong>24/48h</strong>
                <span>livraison express</span>
              </div>
              <div className="uh-stat">
                <strong>CE</strong>
                <span>certifié Europe</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Reassurance Strip */}
      <div className="bikes-page-strip">
        <div className="container">
          <div className="bps-items">
            <div className="bps-item">
              <span className="bps-icon">🪵</span>
              <div>
                <strong>Bois naturel certifié</strong>
                <span>Finitions non toxiques & safe</span>
              </div>
            </div>
            <div className="bps-item">
              <span className="bps-icon">🛡️</span>
              <div>
                <strong>Norme CE européenne</strong>
                <span>Sécurité testée & approuvée</span>
              </div>
            </div>
            <div className="bps-item">
              <span className="bps-icon">⚡</span>
              <div>
                <strong>Expédition 24/48h</strong>
                <span>Partout en Tunisie</span>
              </div>
            </div>
            <div className="bps-item">
              <span className="bps-icon">💳</span>
              <div>
                <strong>Paiement à la livraison</strong>
                <span>Sans frais supplémentaires</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Products Section */}
      <section className="bikes-page-products">
        <div className="container">
          <div className="bikes-products-header">
            <div>
              <h2 className="bikes-products-title">Notre collection de vélos</h2>
              <p className="bikes-products-count">{bikeProducts.length} produits disponibles</p>
            </div>
            <div className="bikes-sort-row">
              <label htmlFor="bikes-sort" className="filter-label">Trier par :</label>
              <select
                id="bikes-sort"
                value={sort}
                onChange={(e) => setSort(e.target.value)}
                className="filter-select"
              >
                <option value="popular">Plus populaires</option>
                <option value="rating">Mieux notés</option>
                <option value="price-asc">Prix croissant</option>
                <option value="price-desc">Prix décroissant</option>
              </select>
            </div>
          </div>

          <div className="bikes-page-grid">
            {bikeProducts.map((product) => (
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

      {/* Educational Info */}
      <section className="bikes-edu-section">
        <div className="container">
          <div className="bikes-edu-grid">
            <div className="bikes-edu-text">
              <span className="section-eyebrow">Pourquoi une draisienne ?</span>
              <h2 className="bikes-edu-title">Le meilleur départ pour<br />apprendre à pédaler</h2>
              <p>
                Contrairement aux vélos à roulettes, la draisienne développe naturellement le sens de l'équilibre.
                L'enfant pose les pieds au sol, glisse et apprend à se stabiliser intuitivement —
                ce qui lui permet d'acquérir l'équilibre avant même de pédaler.
              </p>
              <ul className="bikes-edu-list">
                <li>Développe la coordination et l'équilibre dès 18 mois</li>
                <li>Renforce la confiance en soi et l'autonomie</li>
                <li>Transition naturelle vers le vélo à pédales sans roulettes</li>
                <li>Matériaux bois certifiés, sans BPA ni phtalates</li>
              </ul>
            </div>
            <div className="bikes-edu-visual">
              <div className="bikes-edu-card">
                <div className="bec-age">
                  <span className="bec-age-num">18</span>
                  <span className="bec-age-unit">mois</span>
                </div>
                <p>Âge idéal pour commencer</p>
              </div>
              <div className="bikes-edu-card">
                <div className="bec-age">
                  <span className="bec-age-num">3×</span>
                </div>
                <p>Plus rapide pour apprendre l'équilibre qu'avec des roulettes</p>
              </div>
              <div className="bikes-edu-card">
                <div className="bec-age">
                  <span className="bec-age-num">100%</span>
                </div>
                <p>Bois certifié naturel et non toxique</p>
              </div>
            </div>
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
