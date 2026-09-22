import { useState } from 'react'
import { IconCart, IconHeart } from '../assets/icons.jsx'

export default function Header({ currentView = 'home', cartCount = 0, onNavigate }) {
  const [menuOpen, setMenuOpen] = useState(false)
  const [currentLang, setCurrentLang] = useState('FR')

  const toggleLanguage = () => {
    setCurrentLang((prev) => (prev === 'FR' ? 'AR' : 'FR'))
  }

  const handleNavClick = (e, view, sectionId) => {
    e.preventDefault()
    setMenuOpen(false)
    if (onNavigate) {
      onNavigate(view, sectionId)
    }
  }

  return (
    <header className="navbar-wrapper">
      <div className="navbar-container">
        {/* Logo Image */}
        <a
          href="#"
          className="navbar-brand"
          onClick={(e) => handleNavClick(e, 'home')}
          aria-label="Yalla Jouet accueil"
        >
          <img
            src="/logoyallajouet.png"
            alt="Yalla Jouet — Jouets éducatifs Montessori Tunisie"
            className="navbar-logo-img"
          />
        </a>

        {/* Desktop Navigation Links */}
        <nav className="navbar-menu" aria-label="Navigation principale">
          <a
            href="#"
            className={`navbar-link ${currentView === 'home' ? 'is-active' : ''}`}
            onClick={(e) => handleNavClick(e, 'home')}
          >
            Accueil
          </a>

          <a
            href="#bikes"
            className={`navbar-link ${currentView === 'bikes' ? 'is-active' : ''}`}
            onClick={(e) => handleNavClick(e, 'bikes')}
          >
            Draisiennes & Vélos
            <span className="nav-badge">Nouveau</span>
          </a>

          <a
            href="#products"
            className={`navbar-link ${currentView === 'catalog' ? 'is-active' : ''}`}
            onClick={(e) => handleNavClick(e, 'catalog')}
          >
            Nos Produits
          </a>

          <a
            href="#promotions"
            className={`navbar-link is-highlight ${currentView === 'promotions' ? 'is-active' : ''}`}
            onClick={(e) => handleNavClick(e, 'promotions')}
          >
            Promotions
            <span className="nav-badge badge-promo">Soldes</span>
          </a>

          <a
            href="#contact"
            className={`navbar-link ${currentView === 'contact' ? 'is-active' : ''}`}
            onClick={(e) => handleNavClick(e, 'contact')}
          >
            Contact
          </a>
        </nav>

        {/* Actions Cluster */}
        <div className="navbar-actions">
          {/* Language Switcher (FR / AR) */}
          <button
            type="button"
            className="navbar-lang-btn"
            onClick={toggleLanguage}
            aria-label="Changer de langue (FR / عربي)"
            title="Changer de langue (FR / عربي)"
          >
            <svg className="lang-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
              <circle cx="12" cy="12" r="10" />
              <line x1="2" y1="12" x2="22" y2="12" />
              <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
            </svg>
            <span className="lang-capsule">
              <span className={`lang-choice ${currentLang === 'FR' ? 'is-selected' : ''}`}>FR</span>
              <span className="lang-separator">|</span>
              <span className={`lang-choice ${currentLang === 'AR' ? 'is-selected' : ''}`}>عربي</span>
            </span>
          </button>

          {/* Wishlist Button */}
          <button className="navbar-action-btn" aria-label="Mes favoris" title="Mes favoris">
            <IconHeart />
            <span className="action-pill">0</span>
          </button>

          {/* Cart Pill */}
          <a
            href="#cart"
            className={`navbar-cart-btn ${currentView === 'cart' ? 'is-active-cart' : ''}`}
            aria-label="Voir le panier"
            onClick={(e) => handleNavClick(e, 'cart')}
          >
            <IconCart />
            <span className="cart-text">Panier</span>
            <span className="cart-count-badge">{cartCount}</span>
          </a>

          {/* Mobile hamburger */}
          <button
            type="button"
            className={`navbar-burger ${menuOpen ? 'is-active' : ''}`}
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Ouvrir le menu"
            aria-expanded={menuOpen}
          >
            <span />
            <span />
            <span />
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {menuOpen && (
        <div className="navbar-mobile-drawer">
          <div className="mobile-lang-row">
            <span>Langue :</span>
            <button type="button" className="navbar-lang-btn in-mobile" onClick={toggleLanguage}>
              <span className={`lang-choice ${currentLang === 'FR' ? 'is-selected' : ''}`}>Français (FR)</span>
              <span className="lang-separator">|</span>
              <span className={`lang-choice ${currentLang === 'AR' ? 'is-selected' : ''}`}>العربية (AR)</span>
            </button>
          </div>

          <nav className="mobile-nav">
            <a
              href="#"
              className={currentView === 'home' ? 'is-active' : ''}
              onClick={(e) => handleNavClick(e, 'home')}
            >
              Accueil
            </a>
            <a
              href="#bikes"
              className={currentView === 'bikes' ? 'is-active' : ''}
              onClick={(e) => handleNavClick(e, 'bikes')}
            >
              <span>Draisiennes & Vélos</span>
              <span className="nav-badge">Nouveau</span>
            </a>
            <a
              href="#products"
              className={currentView === 'catalog' ? 'is-active' : ''}
              onClick={(e) => handleNavClick(e, 'catalog')}
            >
              Nos Produits
            </a>
            <a
              href="#promotions"
              className={`is-highlight ${currentView === 'promotions' ? 'is-active' : ''}`}
              onClick={(e) => handleNavClick(e, 'promotions')}
            >
              <span>Promotions</span>
              <span className="nav-badge badge-promo">Soldes</span>
            </a>
            <a
              href="#contact"
              className={currentView === 'contact' ? 'is-active' : ''}
              onClick={(e) => handleNavClick(e, 'contact')}
            >
              Contact
            </a>
            <a
              href="#cart"
              className={currentView === 'cart' ? 'is-active' : ''}
              onClick={(e) => handleNavClick(e, 'cart')}
            >
              🛒 Panier ({cartCount})
            </a>
          </nav>

          <div className="mobile-drawer-footer">
            <span>✨ Livraison express 24/48h partout en Tunisie · Paiement à la livraison</span>
          </div>
        </div>
      )}
    </header>
  )
}
