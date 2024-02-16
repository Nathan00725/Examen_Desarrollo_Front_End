import React from 'react'
import { Link } from 'react-router-dom'

export const NavBar = () => {


    return (
        <>
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <div className="container-fluid">
                    <a className="navbar-brand" href="#">Armas</a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav">
                            <li className="nav-item">
                                
                                <Link to="/src/components/Home.jsx" className="nav-link active" >Home</Link>
                            </li>
                            <li className="nav-item">
                                <Link to="/src/components/Rifle_Asalto.jsx" className="nav-link" >Rifle de Asalto</Link>
                               
                            </li>

                            <li className="nav-item">
                                <Link to="/src/components/Subfusil.jsx" className="nav-link" >Subfusil</Link>
                               
                            </li>

                            <li className="nav-item">
                                <Link to="/src/components/Escopeta.jsx" className="nav-link" >Escopeta</Link>
                               
                            </li>

                            <li className="nav-item">
                                <Link to="/src/components/Presicion.jsx" className="nav-link" >Rifle de Presicion</Link>
                               
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>

        </>
    )
}
