import { useState } from 'react'

function formatPrice(value) {
  return `${value.toFixed(2).replace('.', ',')} DT`
}

export default function CartPage({ cartItems = [], onUpdateCart, onClearCart, onBackToHome, onNavigate }) {
  const [orderPlaced, setOrderPlaced] = useState(false)
  const [orderForm, setOrderForm] = useState({ name: '', phone: '', address: '', city: '' })
  const [showOrderForm, setShowOrderForm] = useState(false)

  const subtotal = cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0)
  const deliveryFee = cartItems.length > 0 ? 8 : 0
  const total = subtotal + deliveryFee

  const handleQtyChange = (productId, delta) => {
    onUpdateCart && onUpdateCart(productId, delta)
  }

  const handleRemove = (productId) => {
    onUpdateCart && onUpdateCart(productId, -999)
  }

  const handleOrderSubmit = (e) => {
    e.preventDefault()
    setOrderPlaced(true)
    onClearCart && onClearCart()
  }

  if (orderPlaced) {
    return (
      <div className="cart-page">
        <div className="container">
          <div className="cart-order-success">
            <div className="cos-icon">🎉</div>
            <h1>Commande confirmée !</h1>
            <p>
              Merci <strong>{orderForm.name || 'cher client'}</strong> !<br />
              Votre commande a été enregistrée. Notre équipe vous contactera très bientôt pour confirmer la livraison.
            </p>
            <div className="cos-info">
              <div className="cos-detail">
                <span>📞</span>
                <span>Confirmation par téléphone sous 1h</span>
              </div>
              <div className="cos-detail">
                <span>🚚</span>
                <span>Livraison en 24/48h ouvrées</span>
              </div>
              <div className="cos-detail">
                <span>💳</span>
                <span>Paiement à la réception</span>
              </div>
            </div>
            <button type="button" className="cos-btn" onClick={onBackToHome}>
              Retour à l'accueil
            </button>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="cart-page">
      {/* Header */}
      <section className="cart-page-header">
        <div className="container">
          <nav className="page-breadcrumb" aria-label="Fil d'Ariane">
            <button type="button" onClick={onBackToHome} className="breadcrumb-link">Accueil</button>
            <span className="breadcrumb-sep">/</span>
            <span className="breadcrumb-current">Mon Panier</span>
          </nav>
          <h1 className="cart-page-title">
            Mon Panier
            {cartItems.length > 0 && (
              <span className="cart-page-count">({cartItems.length} article{cartItems.length > 1 ? 's' : ''})</span>
            )}
          </h1>
        </div>
      </section>

      <div className="container">
        {cartItems.length === 0 ? (
          /* Empty Cart */
          <div className="cart-empty">
            <div className="cart-empty-icon">🛒</div>
            <h2>Votre panier est vide</h2>
            <p>Découvrez nos jouets éducatifs et ajoutez vos favoris au panier !</p>
            <div className="cart-empty-actions">
              <button type="button" className="cart-empty-btn primary" onClick={onBackToHome}>
                Voir nos produits
              </button>
              <button type="button" className="cart-empty-btn ghost" onClick={() => onNavigate && onNavigate('promotions')}>
                Voir les promotions
              </button>
            </div>
          </div>
        ) : (
          <div className="cart-layout">
            {/* Cart Items */}
            <div className="cart-items-col">
              <div className="cart-items-header">
                <h2>Articles dans votre panier</h2>
                <button type="button" className="cart-clear-btn" onClick={onClearCart}>
                  Vider le panier
                </button>
              </div>

              <div className="cart-items-list">
                {cartItems.map((item) => (
                  <div key={item.id} className="cart-item-row">
                    <div className="cir-image">
                      <img src={item.image} alt={item.name} loading="lazy" />
                    </div>
                    <div className="cir-details">
                      <h3 className="cir-name">{item.name}</h3>
                      {item.age && <span className="cir-age">✦ {item.age}</span>}
                      <div className="cir-price-row">
                        <span className="cir-price">{formatPrice(item.price)}</span>
                        {item.oldPrice && (
                          <span className="cir-old-price">{formatPrice(item.oldPrice)}</span>
                        )}
                      </div>
                    </div>
                    <div className="cir-controls">
                      <div className="cir-qty-control">
                        <button
                          type="button"
                          onClick={() => handleQtyChange(item.id, -1)}
                          aria-label="Diminuer la quantité"
                          disabled={item.quantity <= 1}
                        >
                          −
                        </button>
                        <span className="cir-qty">{item.quantity}</span>
                        <button
                          type="button"
                          onClick={() => handleQtyChange(item.id, 1)}
                          aria-label="Augmenter la quantité"
                        >
                          +
                        </button>
                      </div>
                      <div className="cir-subtotal">{formatPrice(item.price * item.quantity)}</div>
                      <button
                        type="button"
                        className="cir-remove-btn"
                        onClick={() => handleRemove(item.id)}
                        aria-label={`Supprimer ${item.name}`}
                      >
                        ✕
                      </button>
                    </div>
                  </div>
                ))}
              </div>

              {/* Continue Shopping */}
              <button type="button" className="cart-continue-btn" onClick={onBackToHome}>
                ← Continuer mes achats
              </button>
            </div>

            {/* Order Summary */}
            <div className="cart-summary-col">
              <div className="cart-summary-card">
                <h2 className="cart-summary-title">Récapitulatif</h2>

                <div className="cart-summary-lines">
                  <div className="csl-row">
                    <span>Sous-total ({cartItems.reduce((a, i) => a + i.quantity, 0)} articles)</span>
                    <span>{formatPrice(subtotal)}</span>
                  </div>
                  <div className="csl-row">
                    <span>Livraison</span>
                    <span className="delivery-fee">{formatPrice(deliveryFee)}</span>
                  </div>
                  <div className="csl-row total-row">
                    <strong>Total</strong>
                    <strong className="total-price">{formatPrice(total)}</strong>
                  </div>
                </div>

                <div className="cart-cod-badge">
                  <span>💳</span>
                  <span>Paiement à la livraison uniquement</span>
                </div>

                {!showOrderForm ? (
                  <button
                    type="button"
                    className="cart-checkout-btn"
                    onClick={() => setShowOrderForm(true)}
                  >
                    Commander maintenant →
                  </button>
                ) : (
                  <form className="cart-order-form" onSubmit={handleOrderSubmit}>
                    <h3>Vos informations de livraison</h3>
                    <div className="cof-field">
                      <label htmlFor="order-name">Nom complet *</label>
                      <input
                        id="order-name"
                        type="text"
                        value={orderForm.name}
                        onChange={(e) => setOrderForm(p => ({ ...p, name: e.target.value }))}
                        placeholder="Votre nom et prénom"
                        required
                      />
                    </div>
                    <div className="cof-field">
                      <label htmlFor="order-phone">Téléphone *</label>
                      <input
                        id="order-phone"
                        type="tel"
                        value={orderForm.phone}
                        onChange={(e) => setOrderForm(p => ({ ...p, phone: e.target.value }))}
                        placeholder="+216 XX XXX XXX"
                        required
                      />
                    </div>
                    <div className="cof-field">
                      <label htmlFor="order-city">Ville *</label>
                      <input
                        id="order-city"
                        type="text"
                        value={orderForm.city}
                        onChange={(e) => setOrderForm(p => ({ ...p, city: e.target.value }))}
                        placeholder="Tunis, Sfax, Sousse..."
                        required
                      />
                    </div>
                    <div className="cof-field">
                      <label htmlFor="order-address">Adresse complète *</label>
                      <textarea
                        id="order-address"
                        value={orderForm.address}
                        onChange={(e) => setOrderForm(p => ({ ...p, address: e.target.value }))}
                        placeholder="Rue, immeuble, étage..."
                        rows={3}
                        required
                      />
                    </div>
                    <button type="submit" className="cart-place-order-btn">
                      ✓ Confirmer ma commande
                    </button>
                    <button type="button" className="cart-cancel-order-btn" onClick={() => setShowOrderForm(false)}>
                      Annuler
                    </button>
                  </form>
                )}

                {/* Reassurance */}
                <div className="cart-reassurance">
                  <div className="cart-reas-item">
                    <span>🚚</span> Livraison 24/48h en Tunisie
                  </div>
                  <div className="cart-reas-item">
                    <span>🔒</span> Commande 100% sécurisée
                  </div>
                  <div className="cart-reas-item">
                    <span>↩️</span> Retour facile sous 7 jours
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}
