import { useEffect, useState } from 'react'
import axios from 'axios'


const API_USERS = 'https://jsonplaceholder.typicode.com/users'
const API_POSTS = 'https://jsonplaceholder.typicode.com/posts?_limit=10'

const Users = () => {
  const [users, setUsers] = useState([])

  console.log('Users:', users)

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(API_USERS)
        const data = await response.json()
        console.log(data)
        setUsers(data)
      } catch (error) {
        console.error('Error fetching data:', error)
      }
    }

    fetchData()
  }, [])

  return (
    <>
      <h1 className="text-3xl font-bold mb-4">Users Page</h1>
      {
        users.length > 0 ? (
          <div className="grid gap-4">
            {users.map((user) => (
              <div 
                key={user.id}
                className="border p-4 rounded shadow"
              >
                <h2 classsName="text-xl font-bold">{user.name}</h2>
                <p>Username: {user.username}</p>
                <p>Email: {user.email}</p>
                <p>City: {user.address.city}</p>
                <p>Company: {user.company.name}</p>
              </div>
            ))}
          </div>
        ) : (
          <p>Loading users....</p>
        )
      }
    </>
  )
}

export default Users