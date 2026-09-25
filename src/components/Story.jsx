import { useEffect, useRef } from 'react'
import { IconLeaf, IconStar, IconHeart, IconShield } from '../assets/icons.jsx'

/* ─── Scroll Reveal Hook ─── */
function useReveal(threshold = 0.15) {
  const ref = useRef(null)
  useEffect(() => {
    const el = ref.current
    if (!el) return
    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.classList.add('story-v2-visible')
          obs.unobserve(el)
        }
      },
      { threshold }
    )
    obs.observe(el)
    return () => obs.disconnect()
  }, [])
  return ref
}

const PROMISES = [
  { Icon: IconLeaf, title: 'Sélection rigoureuse', text: 'Testé & approuvé avant livraison.' },
  { Icon: IconStar, title: 'Éditions limitées', text: 'Qualité artisanale, séries exclusives.' },
  { Icon: IconHeart, title: 'Jouer pour apprendre', text: 'Éveille curiosité & créativité.' },
  { Icon: IconShield, title: 'Écoresponsable', text: 'Respect de l\'enfant et de la planète.' },
]

export default function Story() {
  const imgRef = useReveal(0.1)
  const textRef = useReveal(0.1)
  const promisesRef = useReveal(0.08)

  return (
    <section id="story" className="story-v2">
      {/* Decorative background */}
      <div className="story-v2-bg" aria-hidden="true">
        <div className="story-v2-blob story-v2-blob-a" />
        <div className="story-v2-blob story-v2-blob-b" />
      </div>

      <div className="container">

        {/* ── HERO SPLIT ─────────────────────────────────── */}
        <div className="story-v2-split">

          {/* LEFT — Image column */}
          <div className="story-v2-img-col" ref={imgRef}>
            {/* Floating label top-left */}
            <div className="story-v2-label-top">
              <span className="story-v2-label-dot" />
              NOTRE HISTOIRE
            </div>

            {/* Portrait image with accent frame */}
            <div className="story-v2-portrait">
              <div className="story-v2-portrait-accent" aria-hidden="true" />
              <img
                src="https://cdn.youcan.shop/stores/8d39b488cab6185a812c8bd011d3ad36/products/iKKtXtezEy6n53orUbvS1YnsnU48tek6ATlypAAb.jpg"
                alt="Jouets Montessori Yalla Jouet"
                className="story-v2-portrait-img"
              />
              {/* Glass card overlay */}
              <div className="story-v2-portrait-card">
                <span className="story-v2-card-emoji">🌱</span>
                <div>
                  <strong>100% Éducatif</strong>
                  <span>Approuvé par des parents</span>
                </div>
              </div>
            </div>

            {/* Floating stat pill */}
            <div className="story-v2-stat-pill">
              <span className="story-v2-stat-num">4.9★</span>
              <span className="story-v2-stat-lbl">Note clients</span>
            </div>
          </div>

          {/* RIGHT — Text column */}
          <div className="story-v2-text-col" ref={textRef}>
            <span className="story-v2-eyebrow">Née d'une passion pour</span>
            <h2 className="story-v2-title">
              l'apprentissage<br />
              <em className="story-v2-title-em">par le jeu</em>
            </h2>

            <p className="story-v2-quote">
              "Chaque jouet peut être une leçon."
            </p>

            <p className="story-v2-body">
              Yalla Jouet sélectionne des jouets Montessori &amp; éducatifs qui développent la concentration, la motricité et la créativité — testés et approuvés avant d'arriver chez vous.
            </p>

            {/* Stats row */}
            <div className="story-v2-stats">
              <div className="story-v2-stat">
                <span className="story-v2-stat-big">500+</span>
                <span className="story-v2-stat-tag">Familles satisfaites</span>
              </div>
              <div className="story-v2-stat-sep" />
              <div className="story-v2-stat">
                <span className="story-v2-stat-big">4.9★</span>
                <span className="story-v2-stat-tag">Note moyenne</span>
              </div>
              <div className="story-v2-stat-sep" />
              <div className="story-v2-stat">
                <span className="story-v2-stat-big">24h</span>
                <span className="story-v2-stat-tag">Livraison express</span>
              </div>
            </div>

            <a
              href="https://yallajouet.com/pages/about-us"
              target="_blank"
              rel="noreferrer"
              className="story-v2-cta"
            >
              <span>En savoir plus</span>
              <svg viewBox="0 0 20 20" fill="currentColor" width="16" height="16">
                <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
              </svg>
            </a>
          </div>
        </div>

        {/* ── PROMISES GRID ───────────────────────────────── */}
        <div className="story-v2-promises" ref={promisesRef}>
          <div className="story-v2-promises-head">
            <span className="story-v2-promises-eyebrow">NOS ENGAGEMENTS</span>
            <h3 className="story-v2-promises-title">Des jouets de qualité.<br />Sélectionnés avec cœur.</h3>
          </div>

          <div className="story-v2-promises-grid">
            {PROMISES.map(({ Icon, title, text }, i) => (
              <div className="story-v2-promise-card" key={i} style={{ animationDelay: `${i * 0.1}s` }}>
                <div className="story-v2-promise-icon">
                  <Icon />
                </div>
                <h4 className="story-v2-promise-title">{title}</h4>
                <p className="story-v2-promise-text">{text}</p>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  )
}
