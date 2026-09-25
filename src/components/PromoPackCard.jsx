import { useState } from 'react'
import { IconCart } from '../assets/icons.jsx'

function formatPrice(value) {
  return `${value.toFixed(2).replace('.', ',')} DT`
}

function formatDiscount(pack) {
  if (!pack.oldPrice || pack.oldPrice <= pack.price) return null
  const pct = Math.round((1 - pack.price / pack.oldPrice) * 100)
  return `-${pct}%`
}

/**
 * Card pack promotionnel — contour architectural droit & bas conservé,
 * ouverture de la page de détail interne (aucun lien externe).
 */
export default function PromoPackCard({ pack, onAddToCart, onViewDetail }) {
  const [added, setAdded] = useState(false)

  const handleAdd = (e) => {
    e.stopPropagation()
    setAdded(true)
    if (onAddToCart) onAddToCart(pack)
    setTimeout(() => setAdded(false), 2000)
  }

  const openDetail = () => {
    if (onViewDetail) onViewDetail(pack)
  }

  const discount = formatDiscount(pack)

  return (
    <article
      className="promo-pack-card"
      id={`promo-${pack.id}`}
      onClick={openDetail}
      style={{ cursor: onViewDetail ? 'pointer' : 'default' }}
    >
      {/* Bandeau "OFFRE EXCLUSIVE" en drapeau */}
      <div className="promo-ribbon-tag">
        <span className="prt-text">✦ OFFRE EXCLUSIVE</span>
      </div>

      {/* Cachet de réduction */}
      {discount && (
        <span className="pp-stamp" aria-label={`Remise ${discount}`}>
          {discount}
        </span>
      )}

      {/* Visuel du pack sur fond à pois */}
      <div className="promo-image-showcase">
        <img
          src={pack.image}
          alt={pack.name}
          loading="lazy"
          className="promo-pack-image"
        />

        {/* Ajout rapide au panier (au survol) */}
        <button
          type="button"
          className={`promo-pack-cta-btn ${added ? 'is-added' : ''}`}
          onClick={handleAdd}
          aria-label={`Ajouter ${pack.name} au panier`}
        >
          {added ? (
            <>
              <span className="pp-check">✓</span> Ajouté
            </>
          ) : (
            <>
              <IconCart /> Panier
            </>
          )}
        </button>
      </div>

      {/* Contenu : marque, titre, inclus, prix */}
      <div className="promo-card-content">
        <span className="pp-brand">{pack.brand}</span>

        <h3 className="promo-pack-title" title={pack.name}>
          {pack.name}
        </h3>

        {pack.items && pack.items.length > 0 && (
          <span className="pp-items-chip">
            {pack.items.length} articles inclus
          </span>
        )}

        <div className="promo-pricing-row">
          <div className="promo-prices-stack">
            {pack.oldPrice && (
              <span className="promo-old-price">
                {formatPrice(pack.oldPrice)}
              </span>
            )}

            <button
              type="button"
              className="promo-price-badge-btn"
              onClick={handleAdd}
              title={`Commander ${pack.name} à ${formatPrice(pack.price)}`}
              aria-label={`Commander ${pack.name}`}
            >
              {added ? (
                <span className="ppb-num is-added-label">✓ Ajouté !</span>
              ) : (
                <>
                  <span className="ppb-num">{formatPrice(pack.price).replace(' DT', '')}</span>
                  <span className="ppb-curr">DT</span>
                </>
              )}
            </button>
          </div>

          <button
            type="button"
            className="promo-detail-btn"
            onClick={openDetail}
            title={`Voir les détails complets de ${pack.name}`}
          >
            <span>Détails</span>
            <span className="pdb-arrow">→</span>
          </button>
        </div>
      </div>
    </article>
  )
}
