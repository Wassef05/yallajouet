import { useState, useMemo } from 'react'
import { allProducts, productCategories, promoPacks } from '../data/products.js'
import { IconSearch } from '../assets/icons.jsx'
import ProductCard from './ProductCard.jsx'
import PromoPackCard from './PromoPackCard.jsx'

export default function CatalogPage({ initialCategory = 'all', onBackToHome, onAddToCart, onViewDetail }) {
  const [searchQuery, setSearchQuery] = useState('')
  const [selectedCategory, setSelectedCategory] = useState(initialCategory)
  const [selectedAge, setSelectedAge] = useState('all')
  const [selectedPrice, setSelectedPrice] = useState('all')
  const [sortBy, setSortBy] = useState('popular')

  // Available age groups
  const ageGroups = [
    { id: 'all', label: 'Tous les âges' },
    { id: '12m', label: 'Dès 12 mois' },
    { id: '1-4', label: '1 à 4 ans' },
    { id: '2-6', label: '2 à 6 ans' },
    { id: '4plus', label: '4 ans et +' },
  ]

  // Available price ranges
  const priceRanges = [
    { id: 'all', label: 'Tous les prix' },
    { id: 'under35', label: '< 35 DT' },
    { id: '35to60', label: '35 DT à 60 DT' },
    { id: 'over60', label: '> 60 DT' },
  ]

  // Filtered and sorted products
  const filteredProducts = useMemo(() => {
    return allProducts
      .filter((product) => {
        // Search filter
        if (searchQuery.trim()) {
          const q = searchQuery.toLowerCase()
          const matchName = product.name.toLowerCase().includes(q)
          const matchTag = product.tag?.toLowerCase().includes(q)
          const matchDetail = product.detail?.toLowerCase().includes(q)
          const matchCategory = product.category?.toLowerCase().includes(q)
          if (!matchName && !matchTag && !matchDetail && !matchCategory) {
            return false
          }
        }

        // Category filter
        if (selectedCategory !== 'all') {
          if (selectedCategory === 'promo') {
            if (!product.oldPrice && product.category !== 'promo') return false
          } else if (product.category !== selectedCategory) {
            return false
          }
        }

        // Age filter
        if (selectedAge !== 'all') {
          const age = product.age || ''
          if (selectedAge === '12m' && !age.includes('12') && !age.includes('18')) return false
          if (selectedAge === '1-4' && !age.includes('1') && !age.includes('2') && !age.includes('3')) return false
          if (selectedAge === '2-6' && !age.includes('2') && !age.includes('3') && !age.includes('5')) return false
          if (selectedAge === '4plus' && !age.includes('4') && !age.includes('5') && !age.includes('8') && !age.includes('10')) return false
        }

        // Price filter
        if (selectedPrice !== 'all') {
          if (selectedPrice === 'under35' && product.price >= 35) return false
          if (selectedPrice === '35to60' && (product.price < 35 || product.price > 60)) return false
          if (selectedPrice === 'over60' && product.price <= 60) return false
        }

        return true
      })
      .sort((a, b) => {
        if (sortBy === 'price-asc') return a.price - b.price
        if (sortBy === 'price-desc') return b.price - a.price
        if (sortBy === 'rating') return (b.rating || 0) - (a.rating || 0)
        if (sortBy === 'discount') {
          const discA = a.oldPrice ? a.oldPrice - a.price : 0
          const discB = b.oldPrice ? b.oldPrice - b.price : 0
          return discB - discA
        }
        return (b.reviews || 0) - (a.reviews || 0) // popular default
      })
  }, [searchQuery, selectedCategory, selectedAge, selectedPrice, sortBy])

  const resetAllFilters = () => {
    setSearchQuery('')
    setSelectedCategory('all')
    setSelectedAge('all')
    setSelectedPrice('all')
    setSortBy('popular')
  }

  const isFiltered =
    searchQuery.trim() !== '' ||
    selectedCategory !== 'all' ||
    selectedAge !== 'all' ||
    selectedPrice !== 'all'

  return (
    <div className="catalog-page">
      {/* Unified Page Header — Light & Warm */}
      <section className="unified-page-header">
        <div className="container">
          <nav className="unified-breadcrumb" aria-label="Fil d'Ariane">
            <button type="button" onClick={onBackToHome} className="breadcrumb-link">
              Accueil
            </button>
            <span className="breadcrumb-sep">/</span>
            <span className="breadcrumb-current">Nos Produits</span>
          </nav>

          <div className="unified-page-hero-content">
            <span className="unified-page-eyebrow">✦ CATALOGUE OFFICIEL · YALLA JOUET ✦</span>
            <h1 className="unified-page-title">Nos Produits &amp; Univers de Jeux</h1>
            <p className="unified-page-desc">
              Explorez notre sélection complète avec recherche instantanée et filtres par pédagogie, tranche d'âge et budget.
            </p>
            <div className="unified-header-stats">
              <div className="uh-stat">
                <strong>{allProducts.length}</strong>
                <span>jouets au catalogue</span>
              </div>
              <div className="uh-stat">
                <strong>100%</strong>
                <span>bois naturel certifié</span>
              </div>
              <div className="uh-stat">
                <strong>24/48h</strong>
                <span>livraison express</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Filter and Search Toolbar */}
      <section className="catalog-toolbar-section">
        <div className="container">
          {/* Main Search Input */}
          <div className="catalog-search-box">
            <IconSearch className="csb-icon" />
            <input
              type="text"
              placeholder="Rechercher par nom, type de jeu (ex: draisienne, montessori, puzzle, bois...)"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              aria-label="Rechercher un produit"
            />
            {searchQuery && (
              <button
                type="button"
                className="csb-clear-btn"
                onClick={() => setSearchQuery('')}
                aria-label="Effacer la recherche"
              >
                ✕
              </button>
            )}
          </div>

          {/* Primary Category Pills */}
          <div className="catalog-categories-bar">
            {productCategories.map((cat) => (
              <button
                key={cat.id}
                type="button"
                className={`catalog-cat-pill ${selectedCategory === cat.id ? 'is-selected' : ''}`}
                onClick={() => setSelectedCategory(cat.id)}
              >
                <span>{cat.label}</span>
                <span className="pill-count">{cat.count}</span>
              </button>
            ))}
          </div>

          {/* Secondary Filters (Age, Price, Sorting) */}
          <div className="catalog-secondary-filters">
            {/* Age Filter */}
            <div className="filter-group">
              <label htmlFor="age-select" className="filter-label">Tranche d'âge :</label>
              <select
                id="age-select"
                value={selectedAge}
                onChange={(e) => setSelectedAge(e.target.value)}
                className="filter-select"
              >
                {ageGroups.map((ag) => (
                  <option key={ag.id} value={ag.id}>
                    {ag.label}
                  </option>
                ))}
              </select>
            </div>

            {/* Price Filter */}
            <div className="filter-group">
              <label htmlFor="price-select" className="filter-label">Budget :</label>
              <select
                id="price-select"
                value={selectedPrice}
                onChange={(e) => setSelectedPrice(e.target.value)}
                className="filter-select"
              >
                {priceRanges.map((pr) => (
                  <option key={pr.id} value={pr.id}>
                    {pr.label}
                  </option>
                ))}
              </select>
            </div>

            {/* Sorting */}
            <div className="filter-group filter-group-sort">
              <label htmlFor="sort-select" className="filter-label">Trier par :</label>
              <select
                id="sort-select"
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="filter-select"
              >
                <option value="popular">Plus populaires</option>
                <option value="rating">Mieux notés (★)</option>
                <option value="price-asc">Prix : Croissant</option>
                <option value="price-desc">Prix : Décroissant</option>
                <option value="discount">Plus fortes remises (%)</option>
              </select>
            </div>
          </div>

          {/* Results Count & Reset row */}
          <div className="catalog-results-status">
            <span className="results-count">
              <strong>{filteredProducts.length}</strong> {filteredProducts.length > 1 ? 'jouets trouvés' : 'jouet trouvé'}
            </span>

            {isFiltered && (
              <button
                type="button"
                className="btn-clear-all"
                onClick={resetAllFilters}
              >
                Réinitialiser tous les filtres ✕
              </button>
            )}
          </div>
        </div>
      </section>

      {/* Products Grid or Empty State */}
      <main className="catalog-products-section">
        <div className="container">
          {/* Highlight Promo Packs when viewing Promotions category */}
          {selectedCategory === 'promo' && (
            <div className="catalog-promo-packs-highlight" style={{ marginBottom: '40px' }}>
              <div className="cpph-header" style={{ marginBottom: '18px' }}>
                <span className="section-eyebrow" style={{ display: 'block', fontSize: '11px', fontWeight: '700', letterSpacing: '0.1em', color: 'var(--accent-dark)', marginBottom: '4px' }}>
                  ✦ PACKS &amp; COFFRETS EXCLUSIFS ✦
                </span>
                <h3 style={{ margin: 0, fontFamily: 'var(--font-display)', fontSize: '26px', fontWeight: '600', color: 'var(--ink)' }}>
                  Nos Coffrets Promotionnels Privilège
                </h3>
              </div>
              <div className="promo-packs-grid">
                {promoPacks.map((pack) => (
                  <PromoPackCard
                    key={pack.id}
                    pack={pack}
                    onAddToCart={onAddToCart}
                  />
                ))}
              </div>
              <div style={{ marginTop: '36px', marginBottom: '16px', borderTop: '1px solid rgba(173,122,94,0.2)', paddingTop: '24px' }}>
                <h4 style={{ margin: '0 0 6px 0', fontSize: '16px', fontWeight: '700', color: 'var(--ink)' }}>
                  Tous les articles individuels en promotion
                </h4>
              </div>
            </div>
          )}

          {filteredProducts.length > 0 ? (
            <div className="luxury-product-grid">
              {filteredProducts.map((product) => (
                <ProductCard
                  key={product.id}
                  product={product}
                  onAddToCart={onAddToCart}
                  onViewDetail={onViewDetail}
                />
              ))}
            </div>
          ) : (
            <div className="catalog-empty-state">
              <div className="empty-icon">🧸</div>
              <h3>Aucun jouet ne correspond à vos critères</h3>
              <p>Essayez d'ajuster votre recherche ou de réinitialiser vos filtres.</p>
              <button
                type="button"
                className="btn-empty-reset"
                onClick={resetAllFilters}
              >
                Afficher tous les produits ({allProducts.length})
              </button>
            </div>
          )}
        </div>
      </main>
    </div>
  )
}
