import axios from "axios";
import { useEffect, useState } from "react"

const QuoteAxios = () => {
    const [quote, setQuote] = useState(null);

    useEffect (() =>{
        const fetchQuote = async() =>{
            const res = await axios.get("https://jsonplaceholder.typicode.com/posts")
            setQuote(res.data[0])
        }
        fetchQuote()
    },[]);

    if (!quote) return <p>Loading...</p>;

  return (
    <div>
        <h1>Get Quote using fetch API</h1>
        <div>{quote.title}</div>
    </div>
  )
}

export default QuoteAxios
