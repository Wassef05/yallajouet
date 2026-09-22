// Icônes SVG dessinées à la main — style linéaire uniforme (stroke 1.4)
// Pour conserver une identité visuelle cohérente sans dépendre de librairies externes

const base = {
  fill: 'none',
  stroke: 'currentColor',
  strokeWidth: 1.4,
  strokeLinecap: 'round',
  strokeLinejoin: 'round',
}

export function IconBlocks(props) {
  return (
    <svg viewBox="0 0 48 48" {...base} {...props}>
      <rect x="7" y="9" width="14" height="14" rx="2" />
      <rect x="27" y="9" width="14" height="14" rx="2" />
      <rect x="17" y="25" width="14" height="14" rx="2" />
      <circle cx="14" cy="16" r="2.2" />
      <circle cx="34" cy="16" r="2.2" />
    </svg>
  )
}

export function IconPuzzle(props) {
  return (
    <svg viewBox="0 0 48 48" {...base} {...props}>
      <path d="M15 9h8v3.2a3 3 0 1 0 0 5.6V21h8v8h-3.2a3 3 0 1 0 0 6H31v8H9V27h3.2a3 3 0 1 0 0-6H9v-8h6v-4z" />
    </svg>
  )
}

export function IconBike(props) {
  return (
    <svg viewBox="0 0 48 48" {...base} {...props}>
      <circle cx="12" cy="32" r="7" />
      <circle cx="36" cy="32" r="7" />
      <path d="M12 32 19 15h7l6 9M19 15h-4M25 15l6 17M19 32h13" />
    </svg>
  )
}

export function IconBrick(props) {
  return (
    <svg viewBox="0 0 48 48" {...base} {...props}>
      <rect x="6" y="18" width="36" height="18" rx="2" />
      <path d="M13 18v-4a2 2 0 0 1 2-2h2a2 2 0 0 1 2 2v4M29 18v-4a2 2 0 0 1 2-2h2a2 2 0 0 1 2 2v4" />
    </svg>
  )
}

export function IconStar(props) {
  return (
    <svg viewBox="0 0 48 48" {...base} {...props}>
      <path d="M24 7l4.9 10.4L40 19l-8 8.1L34 39l-10-5.6L14 39l2-11.9-8-8.1 11.1-1.6z" />
    </svg>
  )
}

export function IconGift(props) {
  return (
    <svg viewBox="0 0 48 48" {...base} {...props}>
      <rect x="8" y="18" width="32" height="8" rx="1.5" />
      <rect x="11" y="26" width="26" height="15" rx="1.5" />
      <path d="M24 18v23M24 18c-2-5-6-9-9-8-3 1-2 6 2 8M24 18c2-5 6-9 9-8 3 1 2 6-2 8" />
    </svg>
  )
}

export function IconSparkle(props) {
  return (
    <svg viewBox="0 0 48 48" {...base} {...props}>
      <path d="M24 6v36M6 24h36M12 12l24 24M36 12L12 36" />
      <circle cx="24" cy="24" r="4" />
    </svg>
  )
}

export function IconTruck(props) {
  return (
    <svg viewBox="0 0 48 48" {...base} {...props}>
      <rect x="4" y="14" width="24" height="17" rx="1.5" />
      <path d="M28 20h9l6 6v5h-15z" />
      <circle cx="14" cy="35" r="3.4" />
      <circle cx="35" cy="35" r="3.4" />
    </svg>
  )
}

export function IconCash(props) {
  return (
    <svg viewBox="0 0 48 48" {...base} {...props}>
      <rect x="5" y="13" width="38" height="22" rx="2.5" />
      <circle cx="24" cy="24" r="6" />
      <path d="M11 18v0M37 30v0" strokeWidth="2.6" />
    </svg>
  )
}

export function IconHeadset(props) {
  return (
    <svg viewBox="0 0 48 48" {...base} {...props}>
      <path d="M8 26v-3a16 16 0 0 1 32 0v3" />
      <rect x="6" y="24" width="8" height="12" rx="3" />
      <rect x="34" y="24" width="8" height="12" rx="3" />
      <path d="M40 36v2a6 6 0 0 1-6 6h-6" />
    </svg>
  )
}

export function IconSearch(props) {
  return (
    <svg viewBox="0 0 24 24" {...base} strokeWidth="1.6" {...props}>
      <circle cx="10.5" cy="10.5" r="6.2" />
      <path d="M19 19l-4-4" />
    </svg>
  )
}

export function IconUser(props) {
  return (
    <svg viewBox="0 0 24 24" {...base} strokeWidth="1.6" {...props}>
      <circle cx="12" cy="8" r="3.6" />
      <path d="M4.5 20c1.4-4 4-6 7.5-6s6.1 2 7.5 6" />
    </svg>
  )
}

export function IconCart(props) {
  return (
    <svg viewBox="0 0 24 24" {...base} strokeWidth="1.6" {...props}>
      <path d="M3 4h2.2L8 15.2a2 2 0 0 0 2 1.6h6.6a2 2 0 0 0 2-1.6L20.4 8H6" />
      <circle cx="10" cy="20.2" r="1.4" />
      <circle cx="17" cy="20.2" r="1.4" />
    </svg>
  )
}

export function IconPlus(props) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" {...props}>
      <path d="M12 5v14M5 12h14" />
    </svg>
  )
}

export function IconLeaf(props) {
  return (
    <svg viewBox="0 0 48 48" {...base} {...props}>
      <path d="M10 38C8 22 18 10 38 9c1 20-11 30-28 29z" />
      <path d="M12 36c6-10 14-16 24-24" />
    </svg>
  )
}

export function IconHeart(props) {
  return (
    <svg viewBox="0 0 48 48" {...base} {...props}>
      <path d="M24 40S6 28 6 18a9 9 0 0 1 18 0 9 9 0 0 1 18 0c0 10-18 22-18 22z" />
    </svg>
  )
}

export function IconShield(props) {
  return (
    <svg viewBox="0 0 48 48" {...base} {...props}>
      <path d="M24 4L6 12v12c0 11 8 18 18 22 10-4 18-11 18-22V12z" />
      <path d="M16 24l5 5 11-11" />
    </svg>
  )
}
