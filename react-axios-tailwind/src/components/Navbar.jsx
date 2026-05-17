import { NavLink } from 'react-router-dom'

const Navbar = () => {
    const navStyle = 
        "px-4 py-2 rounded hover:bg-blue-500 transition";
    const activeStyle = "bg-blue-500 text-white";
    
    return (
        <nav className="bg-white shadow-md">
            <div className="max-w-6xl mx-auto flex gap-3 p-4">
                <NavLink 
                    to="/" 
                    className={({ isActive }) =>
                        '${navStyle} ${ isActive ? activeStyle : "text-gray-700"}'
                    }
                >
                    Home
                </NavLink>

                <NavLink 
                    to="/users" 
                    className={({ isActive }) =>
                        '${navStyle} ${ isActive ? activeStyle : "text-gray-700"}'
                    }
                >
                    Users
                </NavLink>

                <NavLink 
                    to="/posts" 
                    className={({ isActive }) =>
                        '${navStyle} ${ isActive ? activeStyle : "text-gray-700"}'
                    }
                >                   
                    Posts
                </NavLink>

                <NavLink 
                    to="/about" 
                    className={({ isActive }) =>
                        '${navStyle} ${ isActive ? activeStyle : "text-gray-700"}'
                    }
                >
                About
                </NavLink>
            </div>
        </nav>
    )
}

export default Navbar