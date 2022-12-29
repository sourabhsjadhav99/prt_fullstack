import React from 'react'
import { useNavigate } from 'react-router-dom'
import "./Navbar.module.css"
function NavBar() {
    let navigate = useNavigate()
    return (
        <div>
            <nav>
                <h3>Logo</h3>
                <div>
                    <button onClick={() => { navigate("/displayposts") }}>Home</button>
                    <button onClick={() => { navigate("/form") }}>Create</button>
                </div>
            </nav>

        </div>
    )
}

export default NavBar
