import { useState } from 'react'
import { IconHeart, IconCart, IconPlus } from '../assets/icons.jsx'

function formatPrice(value) {
  return `${value.toFixed(2).replace('.', ',')} DT`
}

// Map category to bespoke artisan value pledge
const valuePledges = {
  bikes: { text: 'Bois Écologique & CE', icon: '🚲' },
  montessori: { text: '100% Éveil Sensoriel', icon: '🌿' },
  promo: { text: 'Prix Atelier Garanti', icon: '🔥' },
  puzzles: { text: 'Logique & Réflexion', icon: '🧩' },
  motricite: { text: 'Motricité Fine & Tri', icon: '🎨' },
}

export default function ProductCard({ product, onAddToCart }) {
  const [isFavorite, setIsFavorite] = useState(false)
  const [added, setAdded] = useState(false)

  const handleAdd = (e) => {
    e.preventDefault()
    e.stopPropagation()
    setAdded(true)
    if (onAddToCart) onAddToCart(product)
    setTimeout(() => setAdded(false), 1800)
  }

  const toggleFav = (e) => {
    e.preventDefault()
    e.stopPropagation()
    setIsFavorite(!isFavorite)
  }

  const pledge = valuePledges[product.category] || { text: 'Qualité Certifiée', icon: '✦' }

  return (
    <article className="luxury-product-card compact-artisan-card" id={`product-${product.id}`}>
      {/* Decorative Artisan Corner Accents */}
      <span className="corner-stitch top-left" aria-hidden="true">✦</span>
      <span className="corner-stitch top-right" aria-hidden="true">✦</span>
      <span className="corner-stitch bottom-left" aria-hidden="true">✦</span>
      <span className="corner-stitch bottom-right" aria-hidden="true">✦</span>

      {/* Value Ribbon Pledge (Gage de valeur original au sommet) */}
      <div className="card-value-ribbon">
        <span className="cvr-icon">{pledge.icon}</span>
        <span className="cvr-text">{pledge.text}</span>
      </div>

      {/* Thumbnail Container */}
      <div className="card-media-wrapper">
        {/* Top Badges */}
        <div className="card-top-badges">
          {product.badge && (
            <span className={`card-badge ${product.discount ? 'is-promo-badge' : ''}`}>
              {product.badge}
            </span>
          )}
          {product.discount && !product.badge?.includes('%') && (
            <span className="card-badge is-discount-pill">{product.discount}</span>
          )}
        </div>

        {/* Wishlist Button */}
        <button
          type="button"
          className={`card-wishlist-btn ${isFavorite ? 'is-favorited' : ''}`}
          onClick={toggleFav}
          aria-label={isFavorite ? 'Retirer des favoris' : 'Ajouter aux favoris'}
          title={isFavorite ? 'Dans vos favoris' : 'Sauvegarder'}
        >
          <IconHeart />
        </button>

        {/* Product Image */}
        <a href={product.url || '#'} className="card-img-anchor">
          <img
            src={product.image}
            alt={product.name}
            loading="lazy"
            className="card-main-image"
          />
        </a>

        {/* Floating Quick Add Pill Button */}
        <div className="card-quick-action">
          <button
            type="button"
            className={`btn-quick-add ${added ? 'is-added' : ''}`}
            onClick={handleAdd}
          >
            {added ? (
              <>
                <span className="check-icon">✓</span>
                <span>Ajouté !</span>
              </>
            ) : (
              <>
                <IconCart />
                <span>Ajouter</span>
              </>
            )}
          </button>
        </div>
      </div>

      {/* Card Content */}
      <div className="card-content-wrapper">
        {/* Category & Age row */}
        <div className="card-meta-row">
          <span className="card-category-tag">{product.tag}</span>
          {product.age && (
            <>
              <span className="meta-bullet">·</span>
              <span className="card-age-pill">{product.age}</span>
            </>
          )}
        </div>

        {/* Product Title */}
        <h3 className="card-product-title" title={product.name}>
          <a href={product.url || '#'}>{product.name}</a>
        </h3>

        {/* Star Rating */}
        <div className="card-rating-row">
          <span className="stars-gold">★★★★★</span>
          <span className="rating-number">{product.rating || 4.9}</span>
          <span className="reviews-count">({product.reviews || 24})</span>
        </div>

        {/* Pricing & Add Icon */}
        <div className="card-pricing-row">
          <div className="price-stack">
            <span className="current-price">{formatPrice(product.price)}</span>
            {product.oldPrice && (
              <span className="old-price">{formatPrice(product.oldPrice)}</span>
            )}
          </div>

          <button
            type="button"
            className="card-icon-add-btn"
            onClick={handleAdd}
            aria-label={`Ajouter ${product.name} au panier`}
            title="Ajouter au panier"
          >
            <IconPlus />
          </button>
        </div>

        {/* Stock / Fast delivery hint */}
        <div className="card-stock-hint">
          <span className="stock-dot" />
          <span>En stock · Expédition 24h</span>
        </div>
      </div>
    </article>
  )
}
