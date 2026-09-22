import { trustPoints } from '../data/products.js'
import { IconTruck, IconCash, IconHeadset } from '../assets/icons.jsx'

const iconMap = {
  delivery: IconTruck,
  cod: IconCash,
  support: IconHeadset,
}

export default function TrustStrip() {
  return (
    <div className="trust">
      <div className="container">
        {trustPoints.map((point) => {
          const Icon = iconMap[point.id]
          return (
            <div key={point.id} className="trust-item">
              <Icon />
              <div>
                <h4>{point.title}</h4>
                <p>{point.text}</p>
              </div>
            </div>
          )
        })}
      </div>
    </div>
  )
}
