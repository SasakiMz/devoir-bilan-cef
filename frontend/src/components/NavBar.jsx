import { useEffect, useState } from "react";
import {Link} from "react-router-dom";
import '../styles/navbar.scss';
import 'bootstrap/dist/css/bootstrap.min.css';
import logo from '../assets/img/Logo.png';
import loupe from '../assets/favicons/loupe.png';


function NavBar () {
    const [categories, setCategories] = useState([]);

    useEffect(() => {
        const fetchCategories = async () => {
            try {
                const res = await fetch(`http://localhost:3001/categories`);
                const data = await res.json();
                setCategories(data);
            } 
            catch (err) {
                console.error(err);
            };
        };

        fetchCategories();
    },[]);

    return (
        <nav className="navbar navbar-custom navbar-expand-lg">
            <div className=" ">
                <Link className="navbar-brand fw-bold" to="/">
                    <img src={logo} className="navbar-logo" alt="Logo trouve ton artisan" />
                </Link>
            </div>
            {/* BURGER MOBILE */}
            <button className="navbar-toggler me-3" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav">
            <span className="navbar-toggler-icon"></span>
            </button>
            {/* MENU */}
            <div className="collapse navbar-collapse" id="navbarNav">
                <ul className="navbar-nav mx-auto text-center navbar-center">
                    {/* CATÉGORIES DYNAMIQUES */}
                    {categories.map(cat => (
                    <li className="nav-item mx-lg-4" key={cat.id}>
                        <Link to={`/artisans?category=${cat.id}`} className="nav-link">
                            {cat.name}
                        </Link>
                    </li>
                    ))}
                </ul>
            </div>
            <form className="d-none searchbar d-lg-flex">
                <input className="form-control me-2" type="search" placeholder="Rechercher"/>
                <Link to="/">
                    <img src={loupe} alt="retour à l'accueil, une loupe" />
                </Link>
            </form>
        </nav>
);
};

export default NavBar;