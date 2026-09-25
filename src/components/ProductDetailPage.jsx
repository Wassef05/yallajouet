import { useState, useEffect } from 'react'
import { allProducts, categories } from '../data/products.js'
import { IconCart, IconHeart, IconTruck, IconCash, IconShield, IconLeaf } from '../assets/icons.jsx'
import ProductCardShowcase from './ProductCardShowcase.jsx'

function formatPrice(value) {
  if (typeof value !== 'number') return value
  return `${value.toFixed(2).replace('.', ',')} DT`
}

/**
 * Page publique de détail d'un article (remplace l'ancienne fenêtre modale).
 * Accessible depuis n'importe quelle card du site.
 */
export default function ProductDetailPage({
  product,
  onAddToCart,
  onBackHome,
  onViewDetail,
  onNavigateToCatalog,
}) {
  const [selectedImg, setSelectedImg] = useState('')
  const [quantity, setQuantity] = useState(1)
  const [added, setAdded] = useState(false)
  const [isFav, setIsFav] = useState(false)

  useEffect(() => {
    if (product) {
      setSelectedImg(product.image)
      setQuantity(1)
      setAdded(false)
      setIsFav(false)
    }
  }, [product])

  if (!product) return null

  const images = product.images && product.images.length > 0 ? product.images : [product.image]
  const categoryLabel =
    categories.find((c) => c.id === product.category)?.label || 'Collection'

  const related = allProducts
    .filter((p) => p.category === product.category && p.id !== product.id)
    .slice(0, 4)

  const savings =
    product.oldPrice && product.oldPrice > product.price
      ? product.oldPrice - product.price
      : null

  const handleAdd = () => {
    setAdded(true)
    if (onAddToCart) {
      for (let i = 0; i < quantity; i++) {
        onAddToCart(product)
      }
    }
    setTimeout(() => setAdded(false), 2200)
  }

  const description =
    product.description ||
    `Conçu avec amour et rigueur pédagogique, ce jouet d'éveil favorise le développement sensoriel, la motricité et l'autonomie de l'enfant dans le respect des principes Montessori.`

  const features = product.items || product.features || [
    'Matériaux naturels écologiques et finitions non toxiques',
    'Conforme aux normes de sécurité européennes CE',
    "Développe l'autonomie et la coordination motrice",
    'Livraison express en 24/48h partout en Tunisie',
    'Paiement à la livraison après vérification',
  ]

  return (
    <div className="pdp-page">
      {/* Barre fil d'Ariane */}
      <div className="pdp-breadcrumb-bar">
        <div className="container pdp-breadcrumb-inner">
          <button type="button" className="pdp-back" onClick={onBackHome}>
            <span aria-hidden="true">←</span> Retour à la boutique
          </button>
          <nav className="pdp-crumbs" aria-label="Fil d'Ariane">
            <button type="button" onClick={onBackHome}>Accueil</button>
            <span className="crumb-sep">/</span>
            <button
              type="button"
              onClick={() => onNavigateToCatalog && onNavigateToCatalog(product.category)}
            >
              {categoryLabel}
            </button>
            <span className="crumb-sep">/</span>
            <strong className="crumb-current" title={product.name}>{product.name}</strong>
          </nav>
        </div>
      </div>

      <div className="container pdp-main">
        <div className="pdp-grid">
          {/* Colonne gauche : galerie */}
          <div className="pdp-gallery">
            <div className="pdp-main-frame">
              {product.badge && (
                <span className={`pdp-badge ${product.discount ? 'has-promo' : ''}`}>
                  {product.badge}
                </span>
              )}
              {product.discount && (
                <span className="pdp-discount">{product.discount}</span>
              )}
              <img
                src={selectedImg || product.image}
                alt={product.name}
                className="pdp-main-image"
              />
            </div>

            {images.length > 1 && (
              <div className="pdp-thumbs">
                {images.map((img, idx) => (
                  <button
                    key={idx}
                    type="button"
                    className={`pdp-thumb ${selectedImg === img ? 'is-selected' : ''}`}
                    onClick={() => setSelectedImg(img)}
                    aria-label={`Voir la photo ${idx + 1}`}
                  >
                    <img src={img} alt={`${product.name} — vue ${idx + 1}`} />
                  </button>
                ))}
              </div>
            )}

            <div className="pdp-cert-row">
              <span className="pdp-cert"><IconLeaf /> Bois naturel</span>
              <span className="pdp-cert"><IconShield /> Sécurité CE</span>
              <span className="pdp-cert"><IconTruck /> Livré en 24/48h</span>
            </div>
          </div>

          {/* Colonne droite : informations */}
          <div className="pdp-info">
            <div className="pdp-meta-row">
              <span className="pdp-category">{product.tag || 'Jouet éducatif'}</span>
              {product.age && <span className="pdp-age">{product.age}</span>}
            </div>

            <h1 className="pdp-title">{product.name}</h1>
            {product.detail && <p className="pdp-subtitle">{product.detail}</p>}

            {product.rating && (
              <div className="pdp-rating">
                <span className="pdp-stars" aria-hidden="true">★★★★★</span>
                <strong>{product.rating}</strong>
                <span className="pdp-reviews">({product.reviews} avis vérifiés de parents)</span>
              </div>
            )}

            <div className="pdp-pricing">
              <div className="pdp-prices">
                <span className="pdp-price">{formatPrice(product.price)}</span>
                {product.oldPrice && (
                  <span className="pdp-old-price">{formatPrice(product.oldPrice)}</span>
                )}
              </div>
              {savings && (
                <span className="pdp-savings">Vous économisez {formatPrice(savings)}</span>
              )}
              <span className="pdp-stock"><span className="stock-dot" /> En stock dans notre atelier</span>
            </div>

            <p className="pdp-description">{description}</p>

            <div className="pdp-features">
              <h4>✦ Atouts &amp; bénéfices</h4>
              <ul>
                {features.map((f, i) => (
                  <li key={i}>
                    <span className="pdp-check">✓</span>
                    <span>{f}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="pdp-actions">
              <div className="pdp-qty">
                <button
                  type="button"
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  aria-label="Diminuer la quantité"
                >
                  −
                </button>
                <span>{quantity}</span>
                <button
                  type="button"
                  onClick={() => setQuantity(quantity + 1)}
                  aria-label="Augmenter la quantité"
                >
                  +
                </button>
              </div>

              <button
                type="button"
                className={`pdp-add-cart ${added ? 'is-added' : ''}`}
                onClick={handleAdd}
              >
                {added ? (
                  <>✓ Ajouté au panier !</>
                ) : (
                  <>
                    <IconCart />
                    Ajouter au panier · {formatPrice(product.price * quantity)}
                  </>
                )}
              </button>

              <button
                type="button"
                className={`pdp-fav ${isFav ? 'is-active' : ''}`}
                onClick={() => setIsFav(!isFav)}
                aria-label="Sauvegarder dans mes favoris"
                title="Favoris"
              >
                <IconHeart />
              </button>
            </div>

            <div className="pdp-reassurance">
              <div className="pdp-ra-item">
                <IconTruck />
                <div>
                  <strong>Livraison express 24h / 48h</strong>
                  <span>Partout en Tunisie pour seulement 8 DT</span>
                </div>
              </div>
              <div className="pdp-ra-item">
                <IconCash />
                <div>
                  <strong>Paiement à la livraison</strong>
                  <span>Réglez en espèces à la réception de votre colis</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Suggestions de la même collection */}
        {related.length > 0 && (
          <section className="pdp-related">
            <div className="section-title-centered">
              <span className="section-eyebrow">✦ DANS LA MÊME COLLECTION ✦</span>
              <h2 className="section-heading-playfair">Vous aimerez <em>aussi</em></h2>
            </div>
            <div className="home-cards-grid modern-cards-grid">
              {related.map((p) => (
                <ProductCardShowcase
                  key={p.id}
                  product={p}
                  onAddToCart={onAddToCart}
                  onViewDetail={onViewDetail}
                />
              ))}
            </div>
          </section>
        )}
      </div>
    </div>
  )
}
