import { useState } from 'react'

export default function ContactPage({ onBackToHome }) {
  const [form, setForm] = useState({ name: '', email: '', phone: '', subject: '', message: '' })
  const [submitted, setSubmitted] = useState(false)
  const [loading, setLoading] = useState(false)

  const handleChange = (e) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    setLoading(true)
    setTimeout(() => {
      setLoading(false)
      setSubmitted(true)
    }, 1500)
  }

  return (
    <div className="contact-page">
      {/* Hero */}
      <section className="contact-hero">
        <div className="container">
          <nav className="page-breadcrumb" aria-label="Fil d'Ariane">
            <button type="button" onClick={onBackToHome} className="breadcrumb-link">Accueil</button>
            <span className="breadcrumb-sep">/</span>
            <span className="breadcrumb-current">Contact</span>
          </nav>
          <div className="contact-hero-content">
            <span className="contact-hero-eyebrow">✦ NOUS SOMMES LÀ POUR VOUS ✦</span>
            <h1 className="contact-hero-title">Parlons-nous</h1>
            <p className="contact-hero-desc">
              Une question sur une commande, un conseil pour choisir le bon jouet, ou simplement envie de nous dire bonjour ?
              Notre équipe vous répond dans les plus brefs délais.
            </p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="contact-main-section">
        <div className="container">
          <div className="contact-layout">

            {/* Info Cards */}
            <div className="contact-info-col">
              <h2 className="contact-info-title">Nos coordonnées</h2>

              <div className="contact-info-card">
                <div className="cic-icon">📱</div>
                <div>
                  <h4>WhatsApp & Téléphone</h4>
                  <p>Disponible 7j/7 de 9h à 21h</p>
                  <a href="tel:+21600000000" className="cic-link">+216 00 000 000</a>
                </div>
              </div>

              <div className="contact-info-card">
                <div className="cic-icon">✉️</div>
                <div>
                  <h4>Email</h4>
                  <p>Réponse sous 24h ouvrées</p>
                  <a href="mailto:contact@yallajouet.com" className="cic-link">contact@yallajouet.com</a>
                </div>
              </div>

              <div className="contact-info-card">
                <div className="cic-icon">📍</div>
                <div>
                  <h4>Localisation</h4>
                  <p>Livraison dans toute la Tunisie</p>
                  <span className="cic-link">Tunis, Tunisie</span>
                </div>
              </div>

              <div className="contact-info-card">
                <div className="cic-icon">🕐</div>
                <div>
                  <h4>Horaires du service client</h4>
                  <p>Lundi – Dimanche : 9h00 – 21h00</p>
                  <span className="cic-badge">Disponible maintenant</span>
                </div>
              </div>

              {/* Social Links */}
              <div className="contact-social">
                <h4>Suivez-nous</h4>
                <div className="contact-social-links">
                  <a href="https://facebook.com" target="_blank" rel="noreferrer" className="contact-social-btn facebook">
                    <svg viewBox="0 0 24 24" fill="currentColor" width="20" height="20"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/></svg>
                    Facebook
                  </a>
                  <a href="https://instagram.com" target="_blank" rel="noreferrer" className="contact-social-btn instagram">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" width="20" height="20"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/></svg>
                    Instagram
                  </a>
                  <a href="https://tiktok.com" target="_blank" rel="noreferrer" className="contact-social-btn tiktok">
                    <svg viewBox="0 0 24 24" fill="currentColor" width="20" height="20"><path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-2.88 2.5 2.89 2.89 0 0 1-2.89-2.89 2.89 2.89 0 0 1 2.89-2.89c.28 0 .54.04.79.1V9.01a6.33 6.33 0 0 0-.79-.05 6.34 6.34 0 0 0-6.34 6.34 6.34 6.34 0 0 0 6.34 6.34 6.34 6.34 0 0 0 6.33-6.34V8.69a8.27 8.27 0 0 0 4.83 1.56V6.82a4.85 4.85 0 0 1-1.06-.13z"/></svg>
                    TikTok
                  </a>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="contact-form-col">
              <div className="contact-form-card">
                {submitted ? (
                  <div className="contact-success">
                    <div className="contact-success-icon">✅</div>
                    <h3>Message envoyé avec succès !</h3>
                    <p>Merci de nous avoir contactés. Notre équipe vous répondra dans les 24h.</p>
                    <button
                      type="button"
                      className="contact-new-msg-btn"
                      onClick={() => { setSubmitted(false); setForm({ name: '', email: '', phone: '', subject: '', message: '' }) }}
                    >
                      Envoyer un autre message
                    </button>
                  </div>
                ) : (
                  <>
                    <div className="contact-form-header">
                      <h2>Envoyez-nous un message</h2>
                      <p>Tous les champs marqués * sont obligatoires</p>
                    </div>
                    <form className="contact-form" onSubmit={handleSubmit} noValidate>
                      <div className="cf-row two-cols">
                        <div className="cf-field">
                          <label htmlFor="contact-name">Nom complet *</label>
                          <input
                            id="contact-name"
                            type="text"
                            name="name"
                            value={form.name}
                            onChange={handleChange}
                            placeholder="Votre nom et prénom"
                            required
                          />
                        </div>
                        <div className="cf-field">
                          <label htmlFor="contact-phone">Téléphone</label>
                          <input
                            id="contact-phone"
                            type="tel"
                            name="phone"
                            value={form.phone}
                            onChange={handleChange}
                            placeholder="+216 XX XXX XXX"
                          />
                        </div>
                      </div>

                      <div className="cf-field">
                        <label htmlFor="contact-email">Adresse email *</label>
                        <input
                          id="contact-email"
                          type="email"
                          name="email"
                          value={form.email}
                          onChange={handleChange}
                          placeholder="votre@email.com"
                          required
                        />
                      </div>

                      <div className="cf-field">
                        <label htmlFor="contact-subject">Sujet *</label>
                        <select
                          id="contact-subject"
                          name="subject"
                          value={form.subject}
                          onChange={handleChange}
                          required
                        >
                          <option value="">Sélectionnez un sujet</option>
                          <option value="commande">Question sur une commande</option>
                          <option value="produit">Information sur un produit</option>
                          <option value="livraison">Suivi de livraison</option>
                          <option value="retour">Retour ou échange</option>
                          <option value="paiement">Problème de paiement</option>
                          <option value="autre">Autre</option>
                        </select>
                      </div>

                      <div className="cf-field">
                        <label htmlFor="contact-message">Message *</label>
                        <textarea
                          id="contact-message"
                          name="message"
                          value={form.message}
                          onChange={handleChange}
                          placeholder="Décrivez votre demande en détail..."
                          rows={6}
                          required
                        />
                      </div>

                      <button
                        type="submit"
                        className="contact-submit-btn"
                        disabled={loading || !form.name || !form.email || !form.subject || !form.message}
                      >
                        {loading ? (
                          <span className="contact-loading">
                            <span className="contact-spinner" />
                            Envoi en cours...
                          </span>
                        ) : (
                          <>
                            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" width="18" height="18">
                              <line x1="22" y1="2" x2="11" y2="13"/>
                              <polygon points="22 2 15 22 11 13 2 9 22 2"/>
                            </svg>
                            Envoyer le message
                          </>
                        )}
                      </button>
                    </form>
                  </>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Rapide */}
      <section className="contact-faq-section">
        <div className="container">
          <div className="contact-faq-header">
            <h2>Questions fréquentes</h2>
            <p>Les réponses aux questions les plus courantes</p>
          </div>
          <div className="contact-faq-grid">
            <div className="contact-faq-item">
              <h4>🚚 Quels sont les délais de livraison ?</h4>
              <p>Nous livrons dans toute la Tunisie en 24 à 48h ouvrées après confirmation de commande.</p>
            </div>
            <div className="contact-faq-item">
              <h4>💳 Comment se passe le paiement ?</h4>
              <p>Nous proposons le paiement à la livraison — vous payez uniquement après réception et vérification de votre commande.</p>
            </div>
            <div className="contact-faq-item">
              <h4>🔄 Puis-je retourner un produit ?</h4>
              <p>Oui, vous disposez de 7 jours après réception pour retourner un produit en parfait état.</p>
            </div>
            <div className="contact-faq-item">
              <h4>🎁 Proposez-vous des emballages cadeaux ?</h4>
              <p>Oui ! Mentionnez-le dans les commentaires de votre commande et nous ajouterons un emballage cadeau gratuit.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Back to Home */}
      <div className="page-back-row">
        <div className="container">
          <button type="button" onClick={onBackToHome} className="btn-back-home">
            ← Retour à l'accueil
          </button>
        </div>
      </div>
    </div>
  )
}
