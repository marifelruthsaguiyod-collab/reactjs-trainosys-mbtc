import { useEffect, useState } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'

const API_USERS = 'https://jsonplaceholder.typicode.com/users'
const API_POSTS = 'https://jsonplaceholder.typicode.com/posts?_limit=10'

const Posts = () => {
  const [posts, setPosts] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState("")

  console.log('Posts:', posts)

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const response = await axios.get(API_POSTS)
        const data = response.data
        console.log(data)
        setPosts(data)
      } catch (error) {
        console.log('Error fetching posts:', error)
      }
    }

    fetchPosts()
  }, [])

  return (
    <>
      <h1 className="text-3xl font-bold mb-4">Posts Page</h1>
      {
        posts.length >0 ? (
          <div className="grid gap-4">
            {posts.map((posts) => (
              <div
                key={posts.id}
                className="border p-4 rounded shadow"
              >
                <h2 className="text-xl font-bold">
                  {posts.title}
                </h2>

                <p>{posts.body}</p>

                <Link to={'/posts/${posts.id}'}
                        className="text-blue-500"
                >
                  View Details
                </Link>
              </div>
            ))}
          </div>
        ) : (
          <p>Loading posts...</p>
        )
      }
    </>
  )
}

export default Posts