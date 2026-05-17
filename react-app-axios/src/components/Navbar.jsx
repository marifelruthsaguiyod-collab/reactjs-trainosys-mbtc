import { NavLink } from 'react-router-dom'

const Navbar = () => {
    return (
        <nav className="bg-blue-500 p-4 flex gap-4">
            <NavLink to="/" className="text-white">
                Home
            </NavLink>

            <NavLink to="/users" className="text-white">
                Users
            </NavLink>

            <NavLink to="/posts" className="text-white">
                Posts
            </NavLink>

            <NavLink to="/about" className="text-white">
                About
            </NavLink>
        </nav>
    )
}

export default Navbar