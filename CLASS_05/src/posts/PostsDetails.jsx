import { useEffect, useState } from 'react'
import { Fragment } from 'react'
import { useParams } from 'react-router'

const PostsDetails = () => {

     const [loading,setLoading] = useState(false)
     const [data,setData] = useState({})
     const {id} = useParams()
     console.log(id)

        useEffect(() => {
          setLoading(true)
          fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
          .then(response=> response.json())
          .then(data => setData(data))
        },[id])

  return (
    <Fragment>
      <section className='post'>
        <small>User id : {data.userId}</small>
        <h1>{data.title}</h1>
        <p>{data.body}</p>
      </section>
    </Fragment>
  )
}

export default PostsDetails
