import FeaturesList from "../components/FeaturesList"
import Header from "../components/Header"
import features from "../data/features.json"

const Features = () => {
  return (
    <div>
      <Header/>
      <main>
        <FeaturesList feature={features}/>
      </main>
    </div>
  )
}

export default Features
