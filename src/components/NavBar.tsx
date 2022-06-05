import { Fragment } from 'react';
import { Link } from 'react-router-dom';
export const NavBar = () => {
    return (
        <Fragment>
            <nav className="navbar navbar-expand-md sticky-top bg-light">
                <div className="container-fluid">
                    <a className="navbar-brand">SedaxStore</a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNavDropdown">
                        <ul className="navbar-nav">
                            <li className="nav-item">
                                <Link className="nav-link" to="/">Inicio</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/galeria">Galeria</Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </Fragment>
    );
}
