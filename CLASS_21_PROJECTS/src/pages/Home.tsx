import { useEffect, useState } from "react"

const Home = () => {
  const [recipes, setRecipes] = useState([])
  const [loading, setLoading] = useState(false)
  const [searchTearm, setSearchTearm] = useState("")

  useEffect(()=>{
    const fetchResponse = async() =>{
      setLoading(true)
      const res = await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${searchTearm}`)
      const data = await res.json()
      console.log("Recipes", data)
      setLoading(false)
    }
    fetchResponse()
  },[searchTearm])

  return (
    <div>
      
    </div>
  )
}

export default Home

