import useSWR from "swr";

const fetcher = async (...args) =>{
    const res = await fetch(...args);
    const data = await res.json();
    return data;
}

const QuoteSwr = () => {
    const {data, erorr} = useSWR("https://jsonplaceholder.typicode.com/posts", fetcher)

    if (!data) return <h1>Loading...</h1>;
    if (erorr) return <h1>Ther was an erorr</h1>
    
  return (
    <div>
        <h1>Get Quote using fetch API</h1>
        <div>{data[0].title}</div>
    </div>
  )
}

export default QuoteSwr



// All Post, use Map

// import useSWR from "swr";

// const fetcher = async (...args) =>{
//     const res = await fetch(...args);
//     const data = await res.json();
//     return data;
// }

// const QuoteSwr = () => {
//     const {data, erorr} = useSWR("https://jsonplaceholder.typicode.com/posts", fetcher)

//     if (!data) return <p>Loading...</p>;
//     if (erorr) return <h1>Ther was an erorr</h1>
    
//   return (
//   <div>
//     <h1>All Posts</h1>
//     <ul>
//       {data.map((item) => (
//         <li key={item.id}>{item.title}</li>
//       ))}
//     </ul>
//   </div>
// );
// }

// export default QuoteSwr
