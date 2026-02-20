import React from "react";
import '../assets/styles/Navbar.css'
import {Link} from 'react-router-dom'

const Navbar = () => {
    return (
        <div className="homepage">


            <div className="Navbar">
                <div className="nav-logo">
                    <img src="./public/images/homeImages/Logo.svg" alt="logo" />
                </div>

                <div className="nav-list">
                    
                    <Link>
                    Home
                    </Link>
                    <Link>Pages</Link>
                    <Link>Services</Link>
                    <Link>Project</Link>
                    <Link>Blok</Link>
                    <Link>Contact</Link>
                </div>

                <div className="nav-search">
                    <img src="./public/images/homeImages/Search.png" alt="" />
                </div>
            </div>



        </div>
    )
}

export default Navbar