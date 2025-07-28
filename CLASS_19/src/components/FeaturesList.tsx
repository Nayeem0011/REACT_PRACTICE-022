import type { Feature } from "../types/feature"

type Props = {feature:Feature[]}

const FeaturesList = ({feature}:Props) => {
  return (
    <div>
      <ul>
        {
            feature.map((f, idx) => (
                <li key={idx}>
                    <h1>{f.title}</h1>
                    <h1>{f.description}</h1>
                </li>
            ))
        }
      </ul>
    </div>
  )
}

export default FeaturesList
