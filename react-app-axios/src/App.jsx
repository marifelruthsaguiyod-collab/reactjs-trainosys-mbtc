import { Routes, Route } from 'react-router-dom'

import Navbar from './components/Navbar'
import Home from './pages/Home'
import Users from './pages/Users'
import Posts from './pages/Posts'
import PostDetails from './pages/PostDetails'
import About from './pages/About'

const App = () => {
  return (
    <div>
      <Navbar />

      <div className="p-5">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/users" element={<Users />} />
          <Route path="/posts" element={<Posts />} />
          <Route path="/posts/:id" element={<PostDetails />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </div>
    </div>
  )
}

export default App