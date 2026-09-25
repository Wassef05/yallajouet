import { allProducts, promoPacks, categories } from '../data/products.js'

function countFor(catId) {
  if (catId === 'promo') return promoPacks.length
  return allProducts.filter((p) => p.category === catId).length
}

/**
 * Vitrine des catégories — tuiles photo en arche (clin d'œil aux stories
 * Instagram du magasin), chacune plonge vers le catalogue filtré.
 */
export default function CategoryNav({ onSelectCategory }) {
  const handleClick = (e, cat) => {
    e.preventDefault()
    if (onSelectCategory) {
      onSelectCategory(cat.id)
    } else {
      const el = document.getElementById(cat.id)
      if (el) {
        el.scrollIntoView({ behavior: 'smooth' })
      }
    }
  }

  return (
    <nav className="cat-tiles" aria-label="Explorer par catégorie">
      <div className="container">
        <div className="cat-tiles-head">
          <span className="section-eyebrow">✦ L'ATELIER EN UN COUP D'ŒIL ✦</span>
          <span className="cat-tiles-note" aria-hidden="true">choisissez son univers…</span>
        </div>

        <div className="cat-tiles-row">
          {categories.map((cat) => {
            const isPromo = cat.id === 'promo'
            return (
              <a
                key={cat.id}
                href={`#${cat.id}`}
                className={`cat-tile ${isPromo ? 'is-promo' : ''}`}
                onClick={(e) => handleClick(e, cat)}
                title={`Voir ${cat.label}`}
              >
                <span className="cat-tile-visual">
                  <span className="cat-tile-halo" aria-hidden="true" />
                  <span className="cat-tile-arch">
                    <img
                      src={cat.image}
                      alt={cat.label}
                      loading="lazy"
                    />
                  </span>

                  {isPromo ? (
                    <span className="cat-tile-stamp" aria-hidden="true">-64%</span>
                  ) : (
                    <span className="cat-tile-count">
                      {countFor(cat.id)} {countFor(cat.id) > 1 ? 'modèles' : 'modèle'}
                    </span>
                  )}
                </span>

                <span className="cat-tile-label">{cat.label}</span>
              </a>
            )
          })}
        </div>
      </div>
    </nav>
  )
}
