import React from 'react'
import { Link } from 'react-router-dom'
import logo from '../Assets/logo.png'
export default function Navbar() {
    return <>
        <nav className="navbar shadow-sm navbar-expand-lg bg-body-tertiary p-0 sticky-top">
            <div className="container-fluid p-0  overflow-hidden ">
                <div style={{width:350}} className='bg-info-subtle rounded-end-5 shadow'><Link className="navbar-brand" to="#"><img src={logo} style={{ width: 50 }} alt="Snowflake logo" /> <span style={{fontSize:20}}>Snow<span className='text-info fa-2x'>f</span>lake </span></Link></div>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav ms-auto mb-2 ">
                        <li className="nav-item d-flex align-items-center">
                            <i className="fa-brands text-info-emphasis fa-facebook mx-2"></i>
                            <i className="fa-brands text-black fa-x-twitter mx-2"></i>
                            <i className="fa-brands text-primary fa-linkedin mx-2"></i>
                            <i className="fa-brands fa-github mx-2"></i>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="register">Register</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="login">Login</Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    </>
}
