import { promoPacks } from '../data/products.js'
import PromoPackCard from './PromoPackCard.jsx'

/**
 * Section « Packs Promotionnels Exclusifs » — design partagé entre
 * la page d'accueil et la page Promotions pour une cohérence totale.
 */
export default function PromoPacksSection({ onAddToCart, onViewDetail, onNavigateToCatalog }) {
  return (
    <section className="packs-section-v2">
      <div className="container">
        <div className="section-title-centered">
          <span className="section-eyebrow">✦ OFFRES EXCLUSIVES &amp; PACKS PRIVILÈGE ✦</span>
          <h2 className="section-heading-playfair">
            Les Packs Promotionnels<br /><em>Exclusifs</em>
          </h2>
          <p className="section-sub-desc">
            Des coffrets complets soigneusement composés, associant nos meilleurs jouets d'éveil,
            accessoires de sécurité et cadeaux offerts aux meilleurs prix.
          </p>
          {onNavigateToCatalog && (
            <button
              type="button"
              className="section-action-link"
              onClick={() => onNavigateToCatalog('promo')}
            >
              <span>Toutes les offres exclusives ({promoPacks.length})</span>
              <span className="arrow">→</span>
            </button>
          )}
        </div>

        <div className="promo-packs-grid">
          {promoPacks.map((pack) => (
            <PromoPackCard
              key={pack.id}
              pack={pack}
              onAddToCart={onAddToCart}
              onViewDetail={onViewDetail}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
