import { useState } from 'react'

function formatPriceNumber(val) {
  if (typeof val !== 'number') return val
  return val.toFixed(3)
}

export default function PromoPackCard({ pack, onAddToCart }) {
  const [added, setAdded] = useState(false)

  const handleAdd = (e) => {
    e.preventDefault()
    e.stopPropagation()
    setAdded(true)
    if (onAddToCart) onAddToCart(pack)
    setTimeout(() => setAdded(false), 2000)
  }

  return (
    <article className="promo-pack-card" id={`promo-${pack.id}`}>
      {/* Top Banner Ribbon Flag "OFFRES EXCLUSIVES" */}
      <div className="promo-ribbon-tag">
        <span className="prt-text">OFFRES EXCLUSIVES</span>
      </div>

      {/* Large Showcase Image (Mis en valeur & Grand) */}
      <div className="promo-image-showcase">
        <a
          href={pack.url || '#'}
          className="promo-img-link"
          title={`Voir les détails de ${pack.name}`}
        >
          <img
            src={pack.image}
            alt={pack.name}
            loading="lazy"
            className="promo-pack-image"
          />
        </a>

        {/* Quick Add floating pill on image */}
        <button
          type="button"
          className={`promo-pack-cta-btn ${added ? 'is-added' : ''}`}
          onClick={handleAdd}
          aria-label={`Ajouter ${pack.name} au panier`}
        >
          {added ? '✓ Ajouté' : '+ Panier'}
        </button>
      </div>

      {/* Card Content: Just title, strikethrough price & current price */}
      <div className="promo-card-content">
        {/* Product Title (Nom de produit comme titre) */}
        <h3 className="promo-pack-title">
          <a href={pack.url || '#'} title={`Voir les détails de ${pack.name}`}>
            {pack.name}
          </a>
        </h3>

        {/* Pricing & Detail Action Row */}
        <div className="promo-pricing-row">
          <div className="promo-prices-stack">
            {pack.oldPrice && (
              <span className="promo-old-price">
                {formatPriceNumber(pack.oldPrice)} <small className="curr">DT</small>
              </span>
            )}

            {/* Solid Terracotta Price Box (non-barré) */}
            <button
              type="button"
              className="promo-price-badge-btn"
              onClick={handleAdd}
              title={`Commander ${pack.name} à ${formatPriceNumber(pack.price)} DT`}
              aria-label={`Commander ${pack.name}`}
            >
              <span className="ppb-num">{formatPriceNumber(pack.price)}</span>
              <span className="ppb-curr">DT</span>
            </button>
          </div>

          {/* Link to product detail page */}
          <a
            href={pack.url || '#'}
            className="promo-detail-btn"
            title={`Voir les détails complets de ${pack.name}`}
          >
            <span>Détails</span>
            <span className="pdb-arrow">→</span>
          </a>
        </div>
      </div>
    </article>
  )
}


