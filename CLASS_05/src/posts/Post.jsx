
import { Fragment } from 'react'
import { Link } from 'react-router'

const Post = ({post}) => {
    const {userId, body, title, id} = post

  return (
    <Fragment>
      <section className='post'>
        <small>User id : {userId}</small>
        <h1>{title}</h1>
        <p>{body}</p>
        <Link to={`/post/${id}`}><button className='primary-btn'>Details</button></Link>
      </section>
    </Fragment>
  )
}

export default Post