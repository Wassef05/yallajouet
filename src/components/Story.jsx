import { IconLeaf, IconStar, IconHeart, IconShield } from '../assets/icons.jsx'

export default function Story() {
  return (
    <section id="story" className="story-section-new">
      {/* Background Decorative */}
      <div className="story-bg-deco" aria-hidden="true" />

      <div className="container">
        {/* Section Intro */}
        <div className="story-intro">
          <span className="story-intro-eyebrow">✦ NOTRE HISTOIRE ✦</span>
          <h2 className="story-intro-title">
            Née d'une passion pour<br />
            <em className="story-intro-em">l'apprentissage par le jeu</em>
          </h2>
        </div>

        {/* Story Main Block */}
        <div className="story-main-grid">
          {/* Left: Story Text */}
          <div className="story-text-block">
            <div className="story-text-inner">
              <div className="story-quote-mark" aria-hidden="true">"</div>
              <p className="story-quote-text">
                Yalla Jouet est née d'une idée simple : chaque jouet peut être une leçon.
              </p>
              <p className="story-body-text">
                Nous sélectionnons des jouets Montessori et éducatifs qui développent la concentration
                et les compétences motrices, pour offrir à vos enfants des moments de jeu qui comptent vraiment.
                Chaque produit est choisi avec soin, testé, et approuvé avant d'arriver entre vos mains.
              </p>
              <p className="story-body-text">
                Notre mission : rendre l'apprentissage joyeux, naturel et accessible à toutes les familles tunisiennes.
              </p>
              <a href="https://yallajouet.com/pages/about-us" target="_blank" rel="noreferrer" className="story-cta-link">
                <span>En savoir plus sur notre histoire</span>
                <svg viewBox="0 0 20 20" fill="currentColor" width="16" height="16">
                  <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
                </svg>
              </a>
            </div>

            {/* Stats Row */}
            <div className="story-stats-row">
              <div className="story-stat-item">
                <span className="story-stat-num">500+</span>
                <span className="story-stat-label">Familles satisfaites</span>
              </div>
              <div className="story-stat-divider" />
              <div className="story-stat-item">
                <span className="story-stat-num">4.9★</span>
                <span className="story-stat-label">Note moyenne</span>
              </div>
              <div className="story-stat-divider" />
              <div className="story-stat-item">
                <span className="story-stat-num">24h</span>
                <span className="story-stat-label">Livraison express</span>
              </div>
            </div>
          </div>

          {/* Right: Image & Promise cards */}
          <div className="story-visual-block">
            <div className="story-img-frame">
              <img
                src="https://cdn.youcan.shop/stores/8d39b488cab6185a812c8bd011d3ad36/products/iKKtXtezEy6n53orUbvS1YnsnU48tek6ATlypAAb.jpg"
                alt="Jouets Montessori Yalla Jouet"
                className="story-main-img"
              />
              <div className="story-img-overlay-card">
                <span className="story-overlay-emoji">🌱</span>
                <div>
                  <strong>100% Éducatif</strong>
                  <span>Approuvé par des parents</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Engagements — Promise Grid */}
        <div className="story-promises-block">
          <div className="story-promises-header">
            <span className="section-eyebrow">NOS ENGAGEMENTS</span>
            <h3 className="story-promises-title">Des jouets de qualité. Sélectionnés avec cœur.</h3>
          </div>

          <div className="story-promises-grid">
            <div className="story-promise-card">
              <div className="spc-icon-wrap">
                <IconLeaf />
              </div>
              <h4>Sélection rigoureuse</h4>
              <p>Chaque produit est testé et approuvé avant d'arriver chez vous.</p>
            </div>

            <div className="story-promise-card">
              <div className="spc-icon-wrap">
                <IconStar />
              </div>
              <h4>Petites quantités</h4>
              <p>Produits en séries limitées, pour une qualité que vous pouvez sentir.</p>
            </div>

            <div className="story-promise-card">
              <div className="spc-icon-wrap">
                <IconHeart />
              </div>
              <h4>Jouer pour apprendre</h4>
              <p>Des jouets conçus pour éveiller la curiosité et le plaisir de découvrir.</p>
            </div>

            <div className="story-promise-card">
              <div className="spc-icon-wrap">
                <IconShield />
              </div>
              <h4>Écoresponsable</h4>
              <p>Respect de l'enfant, de la planète et de notre avenir commun.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
