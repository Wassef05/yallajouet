import { IconTruck, IconCash, IconHeadset } from '../assets/icons.jsx'

export default function Footer({ onNavigate }) {
  const handleLink = (e, view, sectionId, catId) => {
    if (onNavigate) {
      e.preventDefault()
      onNavigate(view, sectionId, null, catId)
    }
  }

  return (
    <footer className="footer" id="contact">
      <div className="container">
        <div className="footer-brand">
          <a href="#" className="footer-logo-link" onClick={(e) => handleLink(e, 'home')}>
            <img
              src="/logoyallajouet.png"
              alt="Yalla Jouet — Jouets éducatifs Montessori"
              className="footer-logo-img"
            />
          </a>
          <p>
            Des jouets Montessori et éducatifs sélectionnés
            avec soin pour vos enfants, avec livraison rapide
            et paiement à la livraison dans toute la Tunisie.
          </p>
          <div className="footer-social">
            <a href="https://facebook.com" target="_blank" rel="noreferrer" aria-label="Facebook">
              <svg viewBox="0 0 24 24" fill="currentColor" width="18" height="18"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/></svg>
            </a>
            <a href="https://instagram.com" target="_blank" rel="noreferrer" aria-label="Instagram">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" width="18" height="18"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/></svg>
            </a>
            <a href="https://tiktok.com" target="_blank" rel="noreferrer" aria-label="TikTok">
              <svg viewBox="0 0 24 24" fill="currentColor" width="18" height="18"><path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-2.88 2.5 2.89 2.89 0 0 1-2.89-2.89 2.89 2.89 0 0 1 2.89-2.89c.28 0 .54.04.79.1V9.01a6.33 6.33 0 0 0-.79-.05 6.34 6.34 0 0 0-6.34 6.34 6.34 6.34 0 0 0 6.34 6.34 6.34 6.34 0 0 0 6.33-6.34V8.69a8.27 8.27 0 0 0 4.83 1.56V6.82a4.85 4.85 0 0 1-1.06-.13z"/></svg>
            </a>
          </div>
        </div>

        <div>
          <h5>Boutique</h5>
          <ul>
            <li>
              <a href="#products" onClick={(e) => handleLink(e, 'catalog')}>
                Tous les produits
              </a>
            </li>
            <li>
              <a href="#bikes" onClick={(e) => handleLink(e, 'bikes')}>
                Draisiennes & Vélos
              </a>
            </li>
            <li>
              <a href="#montessori" onClick={(e) => handleLink(e, 'home', 'montessori')}>
                Jouets Montessori
              </a>
            </li>
            <li>
              <a href="#promotions" onClick={(e) => handleLink(e, 'promotions')}>
                Promotions
              </a>
            </li>
          </ul>
        </div>

        <div>
          <h5>À propos</h5>
          <ul>
            <li><a href="https://yallajouet.com/pages/about-us" target="_blank" rel="noreferrer">Notre histoire</a></li>
            <li><a href="https://yallajouet.com/pages/how-to-pay" target="_blank" rel="noreferrer">Moyens de paiement</a></li>
            <li><a href="https://yallajouet.com/pages/shipping-delivery" target="_blank" rel="noreferrer">Livraison</a></li>
          </ul>
        </div>

        <div>
          <h5>Aide</h5>
          <ul>
            <li><a href="#contact" onClick={(e) => handleLink(e, 'contact')}>Nous contacter</a></li>
            <li><a href="https://yallajouet.com/pages/faq" target="_blank" rel="noreferrer">FAQ</a></li>
            <li><a href="https://yallajouet.com/pages/return-policy" target="_blank" rel="noreferrer">Retours & échanges</a></li>
            <li><a href="https://yallajouet.com/pages/confidentiality" target="_blank" rel="noreferrer">Politique de confidentialité</a></li>
          </ul>
        </div>

        <div className="footer-badges">
          <div className="footer-badge"><IconTruck /> Livraison rapide en 24h</div>
          <div className="footer-badge"><IconCash /> Paiement à la livraison</div>
          <div className="footer-badge"><IconHeadset /> Service client 7j/7</div>
        </div>
      </div>

      <div className="container footer-bottom">
        <span>© 2026 Yalla Jouet. Tous droits réservés.</span>
        <div>
          <a href="#">Politique de confidentialité</a>
          {' · '}
          <a href="#">Conditions d'utilisation</a>
        </div>
      </div>
    </footer>
  )
}
