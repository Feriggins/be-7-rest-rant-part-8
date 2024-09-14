import React from 'react';
import { Link } from 'react-router-dom';

function Navigation() {
    return (
        <nav
            className="navbar navbar-expand-lg"
            style={{
                backgroundColor: '#6CA1F1',
                height: '40px',
                display: 'flex',
                justifyContent: 'center',
            }}
        >
            <div className="container-fluid">
                <div className="navbar-nav mx-auto">
                    <Link
                        to="/"
                        className="nav-link"
                        style={{ fontSize: '2rem', color: 'white', textAlign: 'center' }}
                    >
                        Home
                    </Link>
                    <Link
                        to="/places"
                        className="nav-link"
                        style={{ fontSize: '2rem', color: 'white', textAlign: 'center' }}
                    >
                        Places
                    </Link>
                    <Link
                        to="/add-place"
                        className="nav-link"
                        style={{ fontSize: '2rem', color: 'white', textAlign: 'center' }}
                    >
                        New Place
                    </Link>
                </div>
            </div>
        </nav>
    );
}

export default Navigation;
