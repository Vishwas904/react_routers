import { NavLink } from "react-router-dom"
const Navbar = () => {
    return (
        <>
            <div className="flex justify-between">
                <div className="text-3xl">Vishwas</div>
                <ul className="flex gap-10">
                    <li><NavLink to="/" className={({ isActive }) => `${isActive ? "text-blue-300" : "text-gray-300"}`}>Home</NavLink></li>
                    <li><NavLink to="about" className={({ isActive }) => `${isActive ? "text-blue-300" : "text-gray-300"}`}>About</NavLink></li>
                    <li><NavLink to="service" className={({ isActive }) => `${isActive ? "text-blue-300" : "text-gray-300"}`}>Services</NavLink></li>
                    <li><NavLink to="portfolio" className={({ isActive }) => `${isActive ? "text-blue-300" : "text-gray-300"}`}>Portfolio</NavLink></li>
                    <li><NavLink to="contact" className={({ isActive }) => `${isActive ? "text-blue-300" : "text-gray-300"}`}>Contact</NavLink></li>
                    <li><NavLink to="user" className={({ isActive }) => `${isActive ? "text-blue-300" : "text-gray-300"}`}>User</NavLink></li>
                    <li><NavLink to="github" className={({ isActive }) => `${isActive ? "text-blue-300" : "text-gray-300"}`}>GitHub</NavLink></li>
                </ul>
            </div>
        </>
    )
}

export default Navbar
