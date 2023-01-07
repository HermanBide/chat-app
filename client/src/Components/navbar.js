import React from 'react'
import { FaRocketchat} from 'react-icons/fa'
import { Link } from'react-router-dom'
import './navbar.css'

const navbar = () => {
  return (
    <nav className='nav'>
        <div className='nav-left'>
            <FaRocketchat style={{ fontSize: "40px", color: "blue"}}/>
        </div>
        <div className='nav-middle'>
            <ul className='nav-ul'>
                <li className='nav-li'>
                    <a href="/" target="_blank">Home</a>
                </li>
                <li className='nav-li'>
                    <a href="/chatPage" target="_blank">chat</a>
                </li>
            </ul>
        </div>

        <div className='nav-right'>
        <Link to="/register">
            <button className='nav-btn'>
                Get Started
            </button>
        </Link>
        
        <Link to="/">
            <button className='nav-btn-exit'>
                logout
            </button>
        </Link>
        </div>
    </nav>
  )
}

export default navbar