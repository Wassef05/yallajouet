// Données produits — Yalla Jouet (FR)
// Catégories organisées : Montessori, Draisiennes & Vélos, Puzzles & Société, Motricité, Promotions

export const allProducts = [
  // --- DRAISIENNES & VÉLOS (دراجات هوائية) ---
  {
    id: 'draisienne-vintage',
    name: 'Draisienne Bois Rétro Évolutive',
    category: 'bikes',
    detail: 'Vélo d’équilibre sans pédales en bois naturel',
    age: '2 - 5 ans',
    tag: 'Draisienne',
    badge: '★ Best-seller Vélo',
    price: 139.9,
    oldPrice: 179.9,
    discount: '-22%',
    rating: 4.9,
    reviews: 47,
    image: '/img/velo1.webp',
    images: ['/img/velo1.webp', '/img/velo2.webp', '/img/velo3.webp'],
    url: '#',
    inStock: true,
    description: 'Conçue pour développer l\'équilibre naturel et la coordination dès le plus jeune âge. Cette draisienne en bois de bouleau certifié permet à l\'enfant d\'acquérir une confiance totale sur deux roues, sans passer par les roulettes stabilisatrices.',
    features: [
      'Structure robuste en bois naturel certifié CE',
      'Pneus souples anti-crevaison et confortables',
      'Selle ergonomique réglable en hauteur (32 à 40 cm)',
      'Poignées avec butées de protection antichoc',
      'Livraison express en 24/48h partout en Tunisie'
    ]
  },
  {
    id: 'tricycle-bois-creme',
    name: 'Tricycle Confort Premier Âge',
    category: 'bikes',
    detail: 'Stabilité maximale & motricité globale',
    age: '18 mois - 4 ans',
    tag: 'Vélo',
    badge: 'Nouveau',
    price: 159.9,
    oldPrice: 189.9,
    discount: '-16%',
    rating: 4.8,
    reviews: 29,
    image: '/img/velo2.webp',
    images: ['/img/velo2.webp', '/img/velo1.webp', '/img/velo4.webp'],
    url: '#',
    inStock: true,
    description: 'Idéal comme première monture dès 18 mois, ce tricycle en bois offre une stabilité rassurante. Il accompagne bébé dans la découverte du mouvement et le renforcement des muscles des jambes en toute sécurité.',
    features: [
      '3 roues larges pour une assise ultra-stable',
      'Guidon ergonomique facile à orienter',
      'Vernis écologique à base d\'eau sans solvant',
      'Charge maximale testée jusqu\'à 30 kg',
      'Paiement à la réception à domicile'
    ]
  },
  {
    id: 'velo-equilibre-naturel',
    name: 'Vélo d’Équilibre Bois de Bouleau',
    category: 'bikes',
    detail: 'Pneus souples silencieux anti-crevaison',
    age: '2 - 6 ans',
    tag: 'Draisienne',
    badge: 'Coup de cœur',
    price: 124.9,
    oldPrice: 149.9,
    discount: '-17%',
    rating: 5.0,
    reviews: 36,
    image: '/img/velo3.webp',
    images: ['/img/velo3.webp', '/img/velo5.webp', '/img/velo1.webp'],
    url: '#',
    inStock: true,
    description: 'Un classique intemporel qui allie légèreté et solidité. Son cadre épuré en bouleau naturel permet à l\'enfant de diriger et propulser son vélo en toute autonomie, favorisant une transition naturelle vers le vrai vélo.',
    features: [
      'Cadre allégé pour faciliter la prise en main',
      'Poignées antidérapantes texturées',
      'Finition bois brut doux au toucher',
      'Conforme aux normes de sécurité EN 71',
      'Garantie satisfaction et service client 7j/7'
    ]
  },
  {
    id: 'draisienne-legere-aventure',
    name: 'Draisienne Légère Aventure Nature',
    category: 'bikes',
    detail: 'Conception ergonomique & poignées confort',
    age: '2 - 5 ans',
    tag: 'Draisienne',
    badge: 'Éco-design',
    price: 134.9,
    oldPrice: 165.0,
    discount: '-18%',
    rating: 4.9,
    reviews: 22,
    image: '/img/velo4.webp',
    images: ['/img/velo4.webp', '/img/velo6.webp', '/img/velo2.webp'],
    url: '#',
    inStock: true,
    description: 'Spécialement étudiée pour les sorties en plein air, cette draisienne robuste résiste à tous les terrains. Sa géométrie assure une posture droite qui préserve le dos de l\'enfant pendant les explorations.',
    features: [
      'Bois issu de forêts éco-gérées',
      'Roulements à billes de précision pour une glisse fluide',
      'Design scandinave contemporain et chaleureux',
      'Facilement transportable grâce à sa poignée intégrée',
      'Expédition soignée en 24/48h'
    ]
  },
  {
    id: 'draisienne-vintage-atelier',
    name: 'Draisienne Vintage Atelier Classique',
    category: 'bikes',
    detail: 'Finition cire naturelle & selle ajustable',
    age: '2 - 5 ans',
    tag: 'Draisienne',
    badge: 'Top Vente',
    price: 145.0,
    oldPrice: null,
    discount: null,
    rating: 4.9,
    reviews: 41,
    image: '/img/velo5.webp',
    images: ['/img/velo5.webp', '/img/velo3.webp', '/img/velo1.webp'],
    url: '#',
    inStock: true,
    description: 'Le charme vintage au service de la motricité. Fabriquée selon un savoir-faire artisanal avec des courbes élégantes, cette draisienne est à la fois un formidable compagnon de jeu et un bel objet qui se transmet.',
    features: [
      'Finition soignée à la cire végétale',
      'Angle de braquage limité pour éviter les chutes brusques',
      'Selle rembourrée grand confort',
      'Testée pour les enfants de 2 à 5 ans',
      'Paiement sécurisé à la livraison'
    ]
  },
  {
    id: 'velo-apprentissage-pro',
    name: 'Vélo d’Apprentissage Équilibre Pro',
    category: 'bikes',
    detail: 'Géométrie optimisée pour la transition vélo',
    age: '3 - 6 ans',
    tag: 'Draisienne',
    badge: 'Nouveau',
    price: 149.9,
    oldPrice: 185.0,
    discount: '-19%',
    rating: 5.0,
    reviews: 18,
    image: '/img/velo6.webp',
    images: ['/img/velo6.webp', '/img/velo4.webp', '/img/velo2.webp'],
    url: '#',
    inStock: true,
    description: 'Le modèle expert pour les enfants de 3 à 6 ans prêts à perfectionner leur équilibre dynamique et leur vitesse. Idéal pour passer directement au vélo à pédales sans aucune appréhension.',
    features: [
      'Empattement allongé pour une stabilité à vitesse plus élevée',
      'Repose-pieds central pour travailler la glisse libre',
      'Pneus résistants tous chemins',
      'Assemblage simple et rapide en moins de 10 minutes',
      'Support après-vente dédié en Tunisie'
    ]
  },

  // --- MONTESSORI & SENSORIEL ---
  {
    id: 'valise-montessori',
    name: 'Valise Sensorielle Montessori',
    category: 'montessori',
    detail: 'Autonomie & motricité fine',
    age: '1 - 4 ans',
    tag: 'Montessori',
    badge: '⭐ Coup de cœur',
    price: 29.9,
    oldPrice: 42.0,
    discount: '-28%',
    rating: 4.9,
    reviews: 128,
    image:
      'https://cdn.youcan.shop/stores/8d39b488cab6185a812c8bd011d3ad36/products/83far96isw4SnFnuk117lU17W1gzZQdI9ugFWRoL.jpg',
    url: 'https://yallajouet.com/products/valise-dactivites-sensorielle-montessori',
    inStock: true,
  },
  {
    id: 'oeufs-montessori',
    name: 'Œufs Assortis Montessori',
    category: 'montessori',
    detail: 'Couleurs & formes 3D',
    age: '12 mois+',
    tag: 'Montessori',
    badge: 'Top Vente',
    price: 39.9,
    oldPrice: null,
    discount: null,
    rating: 4.9,
    reviews: 84,
    image:
      'https://cdn.youcan.shop/stores/8d39b488cab6185a812c8bd011d3ad36/products/pQhlAN2QOy97ReHpl74Hy2svmqxmgVxqCATDeKPr.jpg',
    url: 'https://yallajouet.com/products/oeufs-assortis-montessori',
    inStock: true,
  },
  {
    id: 'geoboard',
    name: 'Géoboard Montessori Bois',
    category: 'montessori',
    detail: 'Géométrie créative & élastiques',
    age: '3 - 8 ans',
    tag: 'Montessori',
    badge: 'Éducatif',
    price: 34.9,
    oldPrice: null,
    discount: null,
    rating: 4.7,
    reviews: 51,
    image:
      'https://cdn.youcan.shop/stores/8d39b488cab6185a812c8bd011d3ad36/products/iKKtXtezEy6n53orUbvS1YnsnU48tek6ATlypAAb.jpg',
    url: 'https://yallajouet.com/products/geoboard-montessori',
    inStock: true,
  },
  {
    id: 'five-column',
    name: 'Five Column — 3 en 1',
    category: 'montessori',
    detail: 'Jeu multi-activités formes & chiffres',
    age: '2 - 6 ans',
    tag: '3 en 1',
    badge: 'Populaire',
    price: 34.9,
    oldPrice: 44.9,
    discount: '-22%',
    rating: 4.8,
    reviews: 63,
    image:
      'https://cdn.youcan.shop/stores/8d39b488cab6185a812c8bd011d3ad36/products/tckYxwY0N5ntEYXqRpxKFGlBA3tbJhIFHOslsgq5.jpg',
    url: 'https://yallajouet.com/products/five-column',
    inStock: true,
  },

  // --- PUZZLES & JEUX DE SOCIÉTÉ ---
  {
    id: 'detective',
    name: 'Détective en Action',
    category: 'puzzles',
    detail: 'Jeu d’observation et de rapidité',
    age: '4 - 10 ans',
    tag: 'Jeu collectif',
    badge: 'Ambiance',
    price: 49.9,
    oldPrice: 65.0,
    discount: '-23%',
    rating: 5.0,
    reviews: 95,
    image:
      'https://cdn.youcan.shop/stores/8d39b488cab6185a812c8bd011d3ad36/products/iENlnNXWaqrb2Gn0BTi76aeF0Rv1vQHpJtgsORZN.jpg',
    url: 'https://yallajouet.com/products/jeu-de-societe-detective-en-action',
    inStock: true,
  },
  {
    id: 'puzzle-60',
    name: 'Puzzle Level Up — 60 pcs',
    category: 'puzzles',
    detail: 'Puzzle éducatif progressif',
    age: '3 - 7 ans',
    tag: 'Puzzle',
    badge: 'Progression',
    price: 24.9,
    oldPrice: null,
    discount: null,
    rating: 4.7,
    reviews: 42,
    image:
      'https://cdn.youcan.shop/stores/8d39b488cab6185a812c8bd011d3ad36/products/A2rSndOw24JzvWFaGOEBlTSZ5pW3Plqwyi4oyIAK.jpg',
    url: 'https://yallajouet.com/products/puzzles-level-up-60-pieces',
    inStock: true,
  },

  // --- MOTRICITÉ & ÉVEIL ---
  {
    id: 'fruit-color',
    name: 'Fruit Color — Tri & Motricité',
    category: 'motricite',
    detail: 'Tri, couleurs & concentration',
    age: '2 - 5 ans',
    tag: 'Motricité',
    badge: 'Concentration',
    price: 39.9,
    oldPrice: null,
    discount: null,
    rating: 4.9,
    reviews: 73,
    image:
      'https://cdn.youcan.shop/stores/8d39b488cab6185a812c8bd011d3ad36/products/w8G1Xe2iizPafkXeTZSfkwLrN9QuRgByJzSmqJLP.jpg',
    url: 'https://yallajouet.com/products/fruit-color',
    inStock: true,
  },
  {
    id: 'magnetic-maze',
    name: 'Labyrinthe Magnétique Billes',
    category: 'motricite',
    detail: 'Stylet magnétique & logique',
    age: '3 - 6 ans',
    tag: 'Motricité',
    badge: 'Précision',
    price: 49.9,
    oldPrice: null,
    discount: null,
    rating: 4.8,
    reviews: 38,
    image:
      'https://cdn.youcan.shop/stores/8d39b488cab6185a812c8bd011d3ad36/products/edctjlsoafWzlGuufdCjhR7EiYOo6tzV2kHSNHEC.jpg',
    url: 'https://yallajouet.com/products/magnetic-maze-beads',
    inStock: true,
  },

  // --- PROMOTIONS & OFFRES SPÉCIALES (التخفيضات) ---
  {
    id: 'lego-villa',
    name: 'Cabane Enchantée — LEGO Villa',
    category: 'promo',
    detail: 'Grande villa de construction modulaire',
    age: '5 - 12 ans',
    tag: 'Super Promo',
    badge: '🔥 -64% EXCLUSIF',
    price: 89.9,
    oldPrice: 249.0,
    discount: '-64%',
    rating: 5.0,
    reviews: 114,
    image:
      'https://cdn.youcan.shop/stores/8d39b488cab6185a812c8bd011d3ad36/products/TSzI7S3JhB2LT8nAccm95L0lMKwRhLQzsaRpSAKs.jpg',
    url: 'https://yallajouet.com/products/lego-villa-copy-1',
    inStock: true,
  },
]

// Liste des best-sellers pour compatibilité
export const bestSellers = allProducts.filter(
  (p) => p.rating >= 4.8 && p.category !== 'bikes'
)

// Catégories avec filtres
export const productCategories = [
  { id: 'all', label: 'Tous les produits', icon: 'sparkle', count: allProducts.length },
  { id: 'bikes', label: 'Draisiennes & Vélos', icon: 'bike', count: 3, highlight: true },
  { id: 'montessori', label: 'Montessori & Éveil', icon: 'blocks', count: 4 },
  { id: 'puzzles', label: 'Puzzles & Société', icon: 'puzzle', count: 2 },
  { id: 'motricite', label: 'Motricité & Tri', icon: 'star', count: 2 },
  { id: 'promo', label: 'Promotions', icon: 'gift', count: 4, badge: 'Soldes' },
]

// Packs promotionnels exclusifs (Format spécial type Box & Coffrets)
export const promoPacks = [
  {
    id: 'pack-lego-villa',
    name: 'PACK LEGO VILLA CABANE ENCHANTÉE',
    brand: 'YALLA ATELIER',
    tag: 'Pack Exclusif',
    category: 'promo',
    items: [
      'GRANDE VILLA 350 PIÈCES MODULAIRES',
      'FIGURINES FAMILLE & MOBILIER INCLUS',
      'NOTICE ILLUSTRÉE & PLAN OFFERTS',
    ],
    oldPrice: 249.0,
    price: 89.98,
    image:
      'https://cdn.youcan.shop/stores/8d39b488cab6185a812c8bd011d3ad36/products/TSzI7S3JhB2LT8nAccm95L0lMKwRhLQzsaRpSAKs.jpg',
    description:
      'Une grande villa enchantée de 350 pièces modulaires à construire en famille : figurines, mobilier et notice illustrée inclus pour des heures de création, de logique et d’imagination.',
    url: 'https://yallajouet.com/products/lego-villa-copy-1',
  },
  {
    id: 'pack-eveil-montessori',
    name: 'PACK DUO ÉVEIL TOTAL MONTESSORI',
    brand: 'MONTESSORI ÉVEIL',
    tag: 'Pack Exclusif',
    category: 'promo',
    items: [
      'VALISE D’ACTIVITÉS SENSORIELLE MULTI-FACES',
      'BOÎTE 12 ŒUFS COULEURS & FORMES 3D',
      'GUIDE PÉDAGOGIQUE MONTESSORI GRATUIT',
    ],
    oldPrice: 82.0,
    price: 54.98,
    image:
      'https://cdn.youcan.shop/stores/8d39b488cab6185a812c8bd011d3ad36/products/83far96isw4SnFnuk117lU17W1gzZQdI9ugFWRoL.jpg',
    description:
      'Le duo parfait pour l’éveil de bébé : une valise d’activités sensorielles multi-faces et une boîte de 12 œufs 3D à assortir, accompagnées d’un guide pédagogique Montessori offert.',
    url: 'https://yallajouet.com/products/valise-dactivites-sensorielle-montessori',
  },
  {
    id: 'pack-geoboard-bois',
    name: 'PACK GÉOBOARD BOIS & MOTRICITÉ',
    brand: 'GÉOMÉTRIE & ÉVEIL',
    tag: 'Pack Exclusif',
    category: 'promo',
    items: [
      'TABLEAU BOIS À PICOTS NATUREL',
      'LOT ÉLASTIQUES MULTICOLORES',
      'CARTES MODÈLES PROGRESSIFS INCLUSES',
    ],
    oldPrice: 65.0,
    price: 39.98,
    image:
      'https://cdn.youcan.shop/stores/8d39b488cab6185a812c8bd011d3ad36/products/iKKtXtezEy6n53orUbvS1YnsnU48tek6ATlypAAb.jpg',
    description:
      'Un tableau en bois à picots naturels avec élastiques multicolores et cartes de modèles progressifs pour développer la motricité fine, la géométrie et la créativité en s’amusant.',
    url: 'https://yallajouet.com/products/geoboard-montessori',
  },
  {
    id: 'pack-detective-action',
    name: 'PACK OBSERVATION & DÉTECTIVE EN ACTION',
    brand: 'JEUX COLLECTIFS',
    tag: 'Pack Exclusif',
    category: 'promo',
    items: [
      'JEU DE SOCIÉTÉ DÉTECTIVE EN ACTION',
      'GÉOBOARD BOIS ÉLASTIQUES & CARTES',
      'POCHETTE DÉFIS & CHRONO INCLUS',
    ],
    oldPrice: 84.8,
    price: 62.98,
    image:
      'https://cdn.youcan.shop/stores/8d39b488cab6185a812c8bd011d3ad36/products/iENlnNXWaqrb2Gn0BTi76aeF0Rv1vQHpJtgsORZN.jpg',
    description:
      'Un duo gagnant pour les soirées en famille : le jeu d’observation Detective en Action et un géoboard en bois avec ses cartes défis, réunis dans une pochette avec chrono inclus.',
    url: 'https://yallajouet.com/products/jeu-de-societe-detective-en-action',
  },
  {
    id: 'pack-five-column-fruits',
    name: 'PACK APPRENTISSAGE 3 EN 1 & FORMES',
    brand: 'ÉVEIL COGNITIF',
    tag: 'Pack Exclusif',
    category: 'promo',
    items: [
      'FIVE COLUMN COMPTAGE & FORMES 3 EN 1',
      'JEU FRUIT COLOR TRI DES COULEURS',
      'SAC DE RANGEMENT COTON BIO INCLUS',
    ],
    oldPrice: 74.8,
    price: 49.98,
    image:
      'https://cdn.youcan.shop/stores/8d39b488cab6185a812c8bd011d3ad36/products/tckYxwY0N5ntEYXqRpxKFGlBA3tbJhIFHOslsgq5.jpg',
    description:
      'Un coffret 3 en 1 pour apprendre à compter, trier les formes et associer les couleurs : le Five Column, le jeu Fruit Color et un sac de rangement en coton bio inclus.',
    url: 'https://yallajouet.com/products/five-column',
  },
  {
    id: 'pack-labyrinthe-puzzle',
    name: 'PACK LABYRINTHE MAGNÉTIQUE & BILLES',
    brand: 'MOTRICITÉ FINE',
    tag: 'Pack Exclusif',
    category: 'promo',
    items: [
      'LABYRINTHE BILLES STYLET MAGNÉTIQUE',
      'PUZZLE ÉVOLUTIF LEVEL UP 60 PCS',
      'LIVRET D’ACTIVITÉS CALMES OFFERT',
    ],
    oldPrice: 74.8,
    price: 52.98,
    image:
      'https://cdn.youcan.shop/stores/8d39b488cab6185a812c8bd011d3ad36/products/edctjlsoafWzlGuufdCjhR7EiYOo6tzV2kHSNHEC.jpg',
    description:
      'Un labyrinthe à billes au stylet magnétique et un puzzle évolutif de 60 pièces pour renforcer la concentration et la motricité fine, avec un livret d’activités calmes offert.',
    url: 'https://yallajouet.com/products/magnetic-maze-beads',
  },
  {
    id: 'pack-oeufs-valise',
    name: 'PACK ŒUFS ASSORTIS & RECONNAISSANCE 3D',
    brand: 'ATELIER BÉBÉ',
    tag: 'Pack Exclusif',
    category: 'promo',
    items: [
      'BOÎTE 12 ŒUFS MONTESSORI 3D',
      'VALISE SENSORIELLE FERMETURES',
      'POCHON VOYAGE LAVABLE OFFERT',
    ],
    oldPrice: 69.8,
    price: 48.98,
    image:
      'https://cdn.youcan.shop/stores/8d39b488cab6185a812c8bd011d3ad36/products/pQhlAN2QOy97ReHpl74Hy2svmqxmgVxqCATDeKPr.jpg',
    description:
      'Le duo d’éveil idéal pour les petits : 12 œufs Montessori 3D à assortir par couleur et forme, et une valise sensorielle à fermetures, avec un pochon de voyage lavable offert.',
    url: 'https://yallajouet.com/products/oeufs-assortis-montessori',
  },
  {
    id: 'pack-fruit-color',
    name: 'PACK FRUIT COLOR & TRI DES COULEURS',
    brand: 'TRI & CLASSEMENT',
    tag: 'Pack Exclusif',
    category: 'promo',
    items: [
      'JEU FRUIT COLOR PINCE ET BOLS',
      'FIGURINES FRUITS BOIS MASSIF',
      'CARTES DÉFIS D’ASSOCIATION OFFERTES',
    ],
    oldPrice: 68.0,
    price: 44.98,
    image:
      'https://cdn.youcan.shop/stores/8d39b488cab6185a812c8bd011d3ad36/products/w8G1Xe2iizPafkXeTZSfkwLrN9QuRgByJzSmqJLP.jpg',
    description:
      'Un jeu de tri des couleurs avec pince à préhension, bols, figurines fruits en bois massif et cartes de défis d’association pour affiner la précision gestuelle de l’enfant.',
    url: 'https://yallajouet.com/products/fruit-color',
  },
]

export const promoPicks = allProducts.filter((p) => p.oldPrice !== null)

export const trustPoints = [
  {
    id: 'delivery',
    title: 'Livraison rapide en 24h',
    text: 'Nous couvrons toute la Tunisie avec un service de livraison rapide et fiable.',
  },
  {
    id: 'cod',
    title: 'Paiement à la livraison',
    text: 'Vous ne payez qu\'après réception et vérification de votre commande.',
  },
  {
    id: 'support',
    title: 'Service client disponible',
    text: 'Notre équipe est prête à répondre à vos questions tous les jours de la semaine.',
  },
]

// Catégories de la vitrine d'accueil — photos réelles du catalogue,
// alignées sur les catégories réellement filtrables du site
export const categories = [
  {
    id: 'bikes',
    label: 'Draisiennes & Vélos',
    image: '/img/velo1.webp',
  },
  {
    id: 'montessori',
    label: 'Montessori & Éveil',
    image:
      'https://cdn.youcan.shop/stores/8d39b488cab6185a812c8bd011d3ad36/products/83far96isw4SnFnuk117lU17W1gzZQdI9ugFWRoL.jpg',
  },
  {
    id: 'puzzles',
    label: 'Puzzles & Société',
    image:
      'https://cdn.youcan.shop/stores/8d39b488cab6185a812c8bd011d3ad36/products/A2rSndOw24JzvWFaGOEBlTSZ5pW3Plqwyi4oyIAK.jpg',
  },
  {
    id: 'motricite',
    label: 'Motricité & Tri',
    image:
      'https://cdn.youcan.shop/stores/8d39b488cab6185a812c8bd011d3ad36/products/w8G1Xe2iizPafkXeTZSfkwLrN9QuRgByJzSmqJLP.jpg',
  },
  {
    id: 'promo',
    label: 'Promotions',
    image:
      'https://cdn.youcan.shop/stores/8d39b488cab6185a812c8bd011d3ad36/products/TSzI7S3JhB2LT8nAccm95L0lMKwRhLQzsaRpSAKs.jpg',
  },
]
