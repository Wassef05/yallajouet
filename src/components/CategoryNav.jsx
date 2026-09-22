import { categories } from '../data/products.js'
import { IconBlocks, IconPuzzle, IconBike, IconBrick, IconStar, IconGift, IconSparkle } from '../assets/icons.jsx'

const iconMap = {
  blocks: IconBlocks,
  puzzle: IconPuzzle,
  bike: IconBike,
  brick: IconBrick,
  star: IconStar,
  gift: IconGift,
  sparkle: IconSparkle,
}

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
    <nav className="categories" aria-label="Catégories de jouets">
      <div className="container">
        <div className="category-track">
          {categories.map((cat) => {
            const Icon = iconMap[cat.icon] || IconStar
            const isPromo = cat.id === 'promo'
            return (
              <a
                key={cat.id}
                href={`#${cat.id}`}
                className={`category-item ${isPromo ? 'is-promo-item' : ''}`}
                onClick={(e) => handleClick(e, cat)}
                title={cat.label}
              >
                <div className="category-icon-wrapper">
                  <div className="category-icon-shape">
                    <Icon />
                    {isPromo && <span className="cat-badge-promo">Offres</span>}
                  </div>
                </div>
                <span className="category-name">{cat.label}</span>
              </a>
            )
          })}
        </div>
      </div>
    </nav>
  )
}
