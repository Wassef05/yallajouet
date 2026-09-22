# yalla jouet — Refonte (React + Vite)

Refonte de yallajouet.com avec la direction artistique du template fourni
(fond crème chaud, accent terracotta/rose poudré, typographie serif élégante),
adaptée au contenu réel du site : jouets éducatifs et Montessori, en arabe (RTL).

## Contenu

- **Palette** : crème `#faf3e8`, panneau `#fffaf3`, blush `#ecd9c9`, accent
  terracotta `#ad7a5e`, encre `#3a2a20`.
- **Typographie** : `Amiri` (titres arabes), `Cairo` (texte courant),
  `Cormorant Garamond` (logo "yalla jouet").
- **Données réelles** : noms, prix (د.ت) et photos des produits ont été repris
  de yallajouet.com (`src/data/products.js`) — modifiez ce fichier pour
  ajouter/actualiser le catalogue sans toucher au design.
- **Icônes** : jeu d'icônes trait fait main (`src/assets/icons.jsx`), pas de
  librairie tierce, pour garder une identité propre au site.

## Démarrer le projet

```bash
npm install
npm run dev
```

Puis ouvrez http://localhost:5173

## Build de production

```bash
npm run build
npm run preview
```

## Structure

```
src/
  components/     Header, Hero, CategoryNav, BestSellers, Story,
                   TrustStrip, Newsletter, Footer
  data/products.js  Catalogue (à connecter à votre vraie API/CMS)
  assets/icons.jsx  Icônes SVG maison
  index.css         Design tokens + styles globaux
```

## À personnaliser avant mise en ligne

- Remplacer les images produits par vos propres visuels si besoin
  (actuellement liées au CDN existant de yallajouet.com).
- Brancher le formulaire newsletter et le bouton panier sur votre backend
  (YouCan Shop, Shopify, API maison, etc.).
- Ajouter les vraies pages de collection (`دراجات هوائية`, `التخفيضات`...).
