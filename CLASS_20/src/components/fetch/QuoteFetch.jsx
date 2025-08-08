import { useEffect, useState } from "react"

const QuoteFetch = () => {
    const [quote, setQuote] = useState(null);

    useEffect (() =>{
        const fetchQuote = async() =>{
            const res = await fetch("https://jsonplaceholder.typicode.com/posts")
            const data = await res.json();
            setQuote(data[0])
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

export default QuoteFetch




//All Post, Use Map

// import { useEffect, useState } from "react"

// const Quote = () => {
//   const [quotes, setQuotes] = useState([]);

//   useEffect(() => {
//     const fetchQuotes = async () => {
//       const res = await fetch("https://jsonplaceholder.typicode.com/posts");
//       const data = await res.json();
//       setQuotes(data);
//     };
//     fetchQuotes();
//   }, []);

//   if (quotes.length === 0) return <p>Loading...</p>;

//   return (
//     <div>
//       <h1>All Quotes</h1>
//       <ul>
//         {quotes.map((quote) => (
//           <li key={quote.id}>{quote.title}</li>
//         ))}
//       </ul>
//     </div>
//   );
// };

// export default Quote;
