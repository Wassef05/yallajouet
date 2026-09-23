import { useState } from 'react'
import { IconHeart, IconPlus } from '../assets/icons.jsx'

function formatPrice(value) {
  return `${value.toFixed(2).replace('.', ',')} DT`
}

/**
 * Card vitrine « Arche d'atelier » — design dédié aux sections
 * Draisiennes & Vélos d'Équilibre et Jouets Montessori de la page d'accueil.
 */
export default function ProductCardShowcase({ product, onAddToCart, onViewDetail }) {
  const [isFavorite, setIsFavorite] = useState(false)
  const [added, setAdded] = useState(false)

  const handleAdd = (e) => {
    e.stopPropagation()
    setAdded(true)
    if (onAddToCart) onAddToCart(product)
    setTimeout(() => setAdded(false), 1800)
  }

  const toggleFav = (e) => {
    e.stopPropagation()
    setIsFavorite(!isFavorite)
  }

  const openDetail = () => {
    if (onViewDetail) onViewDetail(product)
  }

  return (
    <article
      className="sc-card"
      onClick={openDetail}
      style={{ cursor: onViewDetail ? 'pointer' : 'default' }}
    >
      {/* Zone visuelle : arche sur fond à pois */}
      <div className="sc-arch-zone">
        <span className="sc-dotted-bg" aria-hidden="true" />

        <div className="sc-arch-frame">
          <img
            src={product.image}
            alt={product.name}
            loading="lazy"
            className="sc-image"
          />
        </div>

        {/* Étiquette d'âge suspendue au sommet de l'arche */}
        {product.age && (
          <span className="sc-age-swing">
            <span className="sc-swing-string" aria-hidden="true" />
            <span className="sc-swing-tag">{product.age}</span>
          </span>
        )}

        {/* Badge éditorial */}
        {product.badge && (
          <span className={`sc-badge ${product.discount ? 'has-promo' : ''}`}>
            {product.badge}
          </span>
        )}

        {/* Tampon réduction façon cachet d'atelier */}
        {product.discount && (
          <span className="sc-stamp" aria-label={`Remise ${product.discount}`}>
            {product.discount}
          </span>
        )}

        {/* Favoris */}
        <button
          type="button"
          className={`sc-heart ${isFavorite ? 'is-fav' : ''}`}
          onClick={toggleFav}
          aria-label={isFavorite ? 'Retirer des favoris' : 'Ajouter aux favoris'}
          title={isFavorite ? 'Dans vos favoris' : 'Sauvegarder'}
        >
          <IconHeart />
        </button>

        {/* Invitation à découvrir, révélée au survol */}
        <span className="sc-discover">
          Découvrir <em>→</em>
        </span>
      </div>

      {/* Contenu descriptif */}
      <div className="sc-body">
        <span className="sc-tag">{product.tag}</span>

        <h3 className="sc-title" title={product.name}>{product.name}</h3>

        <div className="sc-rating">
          <span className="sc-stars" aria-hidden="true">★★★★★</span>
          <strong>{product.rating || 4.9}</strong>
          <span className="sc-reviews">({product.reviews || 24} avis)</span>
        </div>

        {/* Annotation manuscrite quand le prix est cassé */}
        {product.oldPrice && (
          <span className="sc-note" aria-hidden="true">petit prix !</span>
        )}

        <div className="sc-buy-row">
          <div className="sc-prices">
            <span className="sc-price">{formatPrice(product.price)}</span>
            {product.oldPrice && (
              <span className="sc-old-price">{formatPrice(product.oldPrice)}</span>
            )}
          </div>

          <button
            type="button"
            className={`sc-add-btn ${added ? 'is-added' : ''}`}
            onClick={handleAdd}
            aria-label={`Ajouter ${product.name} au panier`}
          >
            {added ? (
              <span className="sc-add-label">✓ Ajouté</span>
            ) : (
              <>
                <IconPlus />
                <span className="sc-add-label">Ajouter</span>
              </>
            )}
          </button>
        </div>

        <div className="sc-stock">
          <span className="stock-dot" />
          <span>En stock · Expédié en 24h</span>
        </div>
      </div>
    </article>
  )
}
